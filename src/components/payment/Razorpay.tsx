import { encryptData } from "@/src/aes-crypto";
import api from "@/src/clientApi/api";
import { facebookEvent } from "@/src/commonFunction/facebookEvent";
import {
  PaymentProps,
  PurchaseItemProps,
  RazorpayProps,
} from "@/src/interface/payment_props";
import { RootState } from "@/src/redux";
import { setPurchaseItems } from "@/src/redux/reducer/AuthDataReducer";
import { currentPath, mainLoad } from "@/src/redux/reducer/actionDataReducer";
import { Box, Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const url: string = "https://checkout.razorpay.com/v1/checkout.js";
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

declare global {
  interface Window {
    dataLayer: any[];
  }

  function gtag(...args: any[]): void;
}

interface PropsType {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  amount: string | any;
  actionType: number;
}

export function RazorpayPage({ setOpen, amount, actionType }: PropsType) {
  const router = useRouter();
  const currentPathVal = usePathname();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.fEventUserData);
  const _paf = useSelector((state: RootState) => state.actions._paf);
  const productData = useSelector(
    (state: RootState) => state.actions.productData
  );
  const [scriptUpdate, setScriptUpdate] = useState<number>(0);

  useEffect(() => {
    if (!scriptExists(url)) {
      loadScript(url)
        .then(() => {})
        .catch(() => {
          setScriptUpdate(scriptUpdate + 1);
        });
    }
  }, [scriptUpdate]);

  function scriptExists(url: string) {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
  }

  const handleSubmit = async (event: React.MouseEvent<any> | any) => {
    event.preventDefault();
    facebookEvent(
      actionType
        ? "Checkout Subscription Razorpay"
        : "Checkout Template Razorpay",
      { ...productData, ...userData }
    );

    setOpen(false);
    dispatch(mainLoad(true));
    api
      .razorpay({ _paf: encryptData(_paf, process.env.NEXT_PUBLIC_AES_KEY) })
      .then((response: unknown) => {
        const res = response as RazorpayProps;
        const options = {
          ...res,
          handler: (response: any) => {
            const datas = {
              id: response.razorpay_payment_id,
              m: "Razorpay",
            };
            dispatch(mainLoad(true));
            api
              .webhook({
                _paf: encryptData(_paf, process.env.NEXT_PUBLIC_AES_KEY),
                _pdf: encryptData(
                  JSON.stringify(datas),
                  process.env.NEXT_PUBLIC_AES_KEY
                ),
              })
              .then((res) => {
                if (res.success) {
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
                      ? "Subscription Razorpay Success"
                      : "Template Razorpay Success",
                    { ...productData, ...userData }
                  );
                  toast.success(res.msg);
                  setOpen(false);
                  dispatch(mainLoad(false));
                } else {
                  toast.error(res.msg);
                  dispatch(mainLoad(false));
                  facebookEvent(
                    actionType
                      ? "Subscription Razorpay Failed"
                      : "Template Razorpay Failed",
                    { ...productData, ...userData }
                  );
                }
              })
              .catch((error) => {
                dispatch(mainLoad(false));
                toast.error("Payment failed");

                facebookEvent(
                  actionType
                    ? "Subscription Razorpay Failed"
                    : "Template Razorpay Failed",
                  { ...productData, ...userData }
                );
              });
          },

          modal: {
            ondismiss: function () {
              facebookEvent(
                actionType
                  ? "Subscription Razorpay Canceled"
                  : "Template Razorpay Canceled",
                { ...productData, ...userData }
              );
            },
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();

        if (rzp) {
          dispatch(mainLoad(false));
        }
      })
      .catch((error) => {
        dispatch(mainLoad(false));
        toast.error("Payment failed");
        facebookEvent(
          actionType
            ? "Subscription Razorpay Failed"
            : "Template Razorpay Failed",
          { ...productData, ...userData }
        );
      });
  };

  return (
    <Box>
      <Button
        onClick={handleSubmit}
        className="w-[200px] mx-auto block shadow-lg bg-white"
        sx={{ border: "1px solid #d3d3d378" }}
      >
        <img
          src={`${assetsUrl}/w_assets/images/plans/razorpay.png`}
          alt="razorpay"
        />
      </Button>
      <Box className="separator">
        <Box className="line" />
        <h2 className="mb-0">or</h2>
        <Box className="line" />
      </Box>
    </Box>
  );
}
