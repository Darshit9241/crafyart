import { encryptData } from "@/src/aes-crypto";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { facebookEvent } from "@/src/commonFunction/facebookEvent";
import {
  PaymentProps,
  PurchaseItemProps,
  StripeApiResponse,
} from "@/src/interface/payment_props";
import {
  StripePaymentMethod,
  StripePaymentMethodApiData,
} from "@/src/interface/stripePaymentMethod";
import { RootState } from "@/src/redux";
import {
  saveCardData,
  setPurchaseItems,
} from "@/src/redux/reducer/AuthDataReducer";
import { currentPath } from "@/src/redux/reducer/actionDataReducer";
import {
  AddressElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import AddPaymentMethod from "./components/AddPaymentMethod";
import DeleteCard from "./components/DeleteCard";
import EditCard from "./components/EditCard";
import SaveCardList from "./components/SaveCardList";

interface AddressProps {
  line1: string;
  line2: string | null;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export const formatExpiryDate = (expMonth: number, expYear: number): string => {
  const formattedMonth = expMonth < 10 ? `0${expMonth}` : `${expMonth}`;
  const formattedYear = expYear.toString().slice(-2);

  return `${formattedMonth}/${formattedYear}`;
};

interface PropsType {
  open?: boolean;
  countryCode: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amount: string | any;
  actionType: number;
}

export default function Stripe({
  open,
  countryCode,
  setOpen,
  amount,
  actionType,
}: PropsType) {
  const router = useRouter();
  const currentPathVal = usePathname();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const _paf = useSelector((state: RootState) => state.actions._paf);
  const [selectedDefaultCard, setSelectedDefaultCard] =
    useState<StripePaymentMethod | null>(null);
  const [addNewOpen, setAddNewOpen] = useState<boolean>(false);
  const [openEditCard, setOpenEditCard] = useState<boolean>(false);
  const [openDeleteCard, setOpenDeleteCard] = useState<boolean>(false);
  const userData = useSelector((state: RootState) => state.auth.userData);
  const fEventUserData = useSelector(
    (state: RootState) => state.auth.fEventUserData
  );
  const productData = useSelector(
    (state: RootState) => state.actions.productData
  );
  const saveCard = useSelector((state: RootState) => state.auth.saveCardData);
  const [mainLoading, setMainLoading] = useState<boolean>(false);

  const getCard = () => {
    api.cardList().then((response: unknown) => {
      const res = response as StripePaymentMethodApiData;
      dispatch(saveCardData(res?.data));
    });
  };

  useEffect(() => {
    if (!selectedDefaultCard) {
      setSelectedDefaultCard(saveCard?.[0]);
    }
  }, [saveCard]);

  const ProcessPay = (id: string, phone: string | undefined) => {
    setMainLoading(true);
    api
      .stripe({
        pi: id,
        _paf: encryptData(_paf, process.env.NEXT_PUBLIC_AES_KEY),
      })
      .then((response: unknown) => {
        const c = response as StripeApiResponse;
        stripe
          ?.confirmCardPayment(c.client_secret)
          .then((data) => {
            if (data.error) {
              facebookEvent(
                actionType
                  ? "Subscription stripe Canceled"
                  : "Template stripe Canceled",
                { ...productData, ...fEventUserData }
              );
              toast.error(`${data?.error?.message}`);
              setMainLoading(false);
            } else if (data.paymentIntent) {
              const datas = {
                id: data.paymentIntent.id,
                m: "Stripe",
              };
              setMainLoading(true);
              api
                .webhook({
                  _paf: encryptData(_paf, process.env.NEXT_PUBLIC_AES_KEY),
                  _pdf: encryptData(
                    JSON.stringify(datas),
                    process.env.NEXT_PUBLIC_AES_KEY
                  ),
                })
                .then((data) => {
                  setMainLoading(false);
                  if (data.success) {
                    const val: PaymentProps[] = JSON.parse(_paf);
                    if (!actionType) {
                      const purDatas: PurchaseItemProps[] = [];
                      val?.forEach((_) => {
                        purDatas.push({ id: _.id, type: _.type });
                      });

                      dispatch(setPurchaseItems(purDatas));
                    }

                    if (currentPathVal) {
                      dispatch(currentPath(currentPathVal));
                      if (actionType) {
                        router.replace("/thank-you-for-subscription");
                      } else router.replace("/thank-you-purchase-template");
                    }

                    facebookEvent(
                      actionType
                        ? "Subscription Stripe Success"
                        : "Template Stripe Success",
                      { ...productData, ...fEventUserData, phone }
                    );
                    toast.success(data.msg);
                    setOpen(false);
                    setOpenEditCard(false);
                    setSelectedDefaultCard(null);
                    setOpenDeleteCard(false);
                  } else {
                    facebookEvent(
                      actionType
                        ? "Subscription stripe Canceled"
                        : "Template stripe Canceled",
                      { ...productData, ...fEventUserData }
                    );
                    toast.error("Payment failed");
                  }
                })
                .catch((error) => {
                  toast.error("Payment failed");
                  facebookEvent(
                    actionType
                      ? "Subscription stripe Failed"
                      : "Template stripe Failed",
                    { ...productData, ...fEventUserData }
                  );
                  setMainLoading(false);
                  setAddNewOpen(false);
                });
            } else {
              toast.error("Payment failed");
              facebookEvent(
                actionType
                  ? "Subscription stripe Failed"
                  : "Template stripe Failed",
                { ...productData, ...fEventUserData }
              );
              setMainLoading(false);
              setAddNewOpen(false);
            }
          })
          .catch((err) => {
            toast.error("Payment failed");
            facebookEvent(
              actionType
                ? "Subscription stripe Failed"
                : "Template stripe Failed",
              { ...productData, ...fEventUserData }
            );
            setMainLoading(false);
          });
      })
      .catch((err) => {
        consoleLog("stripe: ", err);
        facebookEvent(
          actionType ? "Subscription stripe Failed" : "Template stripe Failed",
          { ...productData, ...fEventUserData }
        );
        toast.error("Payment failed");
        setAddNewOpen(false);
        setMainLoading(false);
      });
  };

  const handleSubmit = async () => {
    facebookEvent(
      actionType ? "Checkout Subscription Stripe" : "Checkout Template Stripe",
      { ...productData, ...fEventUserData }
    );
    setMainLoading(true);
    if (selectedDefaultCard?.id) {
      const id = selectedDefaultCard?.id;
      ProcessPay(id, selectedDefaultCard?.billing_details?.phone);
      setMainLoading(true);
    } else {
      const billing_details: {
        name: string | undefined;
        email: string;
        address: AddressProps | any;
        phone: string | undefined;
      } = {
        name: undefined,
        email: userData ? userData.email : "",
        address: undefined,
        phone: undefined,
      };

      if (elements !== null) {
        const addressElement = await elements
          .getElement(AddressElement)!
          .getValue();
        if (addressElement.complete) {
          billing_details.address = addressElement.value.address;
          billing_details.name = addressElement.value.name;
          billing_details.phone = addressElement.value.phone;
        } else {
          toast.error("Please provide details.");
          setMainLoading(false);
          return;
        }
      }

      const { error, paymentMethod }: any = await stripe?.createPaymentMethod({
        billing_details: billing_details,
        type: "card",
        card: elements?.getElement(CardNumberElement),
      } as any);

      if (error) {
        toast.error(error.message);
        setMainLoading(false);
        facebookEvent(
          actionType ? "Subscription stripe Failed" : "Template stripe Failed",
          { ...productData, ...fEventUserData }
        );
        return;
      }

      const paymentMethodId = paymentMethod.id;

      if (!error) {
        ProcessPay(paymentMethodId, paymentMethod?.billing_details.phone);
      } else {
        toast.error(error.message);
        setMainLoading(false);
      }
    }
  };

  const handleDeletePaymentMethod = () => {
    setMainLoading(true);

    api
      .detach({
        pm: selectedDefaultCard?.id ?? "",
      })
      .then(() => {
        toast.success("Payment method delete successfully");
        setMainLoading(false);
        getCard();
        setOpenDeleteCard(false);
      })
      .catch(() => {
        toast.error("Failed to delete payment method.");
        setMainLoading(false);
      });
  };

  useEffect(() => {
    if (!open) {
      setOpenEditCard(false);
      setOpenDeleteCard(false);
      setAddNewOpen(false);
    }
  }, [open]);

  return (
    <>
      {!addNewOpen && saveCard?.length > 0 ? (
        <>
          {!openEditCard && (
            <SaveCardList
              selectedDefaultCard={selectedDefaultCard}
              setSelectedDefaultCard={setSelectedDefaultCard}
              setOpenEditCard={setOpenEditCard}
              setOpenDeleteCard={setOpenDeleteCard}
              setAddNewOpen={setAddNewOpen}
              setMainLoading={setMainLoading}
              mainLoading={mainLoading}
              handleSubmit={handleSubmit}
            />
          )}
          {openEditCard && (
            <EditCard
              setOpenEditCard={setOpenEditCard}
              selectedDefaultCard={selectedDefaultCard}
            />
          )}

          <DeleteCard
            setOpenDeleteCard={setOpenDeleteCard}
            openDeleteCard={openDeleteCard}
            handleDeletePaymentMethod={handleDeletePaymentMethod}
          />
        </>
      ) : (
        <AddPaymentMethod
          countryCode={countryCode}
          saveCard={saveCard}
          setAddNewOpen={setAddNewOpen}
          handleSubmit={handleSubmit}
          mainLoading={mainLoading}
        />
      )}
    </>
  );
}
