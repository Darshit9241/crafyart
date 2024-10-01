import Icons from "@/src/assets";
import { capitalizeFirstLetter } from "@/src/commonFunction/capitalizeFirstLetter";
import { getCardIconSvg } from "@/src/commonFunction/getCardIcon";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Box, Button, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { formatExpiryDate } from "../Stripe";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";
import { StripePaymentMethod } from "@/src/interface/stripePaymentMethod";

interface PropsType {
  selectedDefaultCard: StripePaymentMethod | null;
  setSelectedDefaultCard: React.Dispatch<
    React.SetStateAction<StripePaymentMethod | any>
  >;
  setOpenEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenDeleteCard: React.Dispatch<React.SetStateAction<boolean>>;
  setAddNewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMainLoading: React.Dispatch<React.SetStateAction<boolean>>;
  mainLoading: boolean;
  handleSubmit: () => void;
}

export default function SaveCardList(props: PropsType) {
  const saveCard = useSelector((state: RootState) => state.auth.saveCardData);

  return (
    <Box>
      <Box className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <Typography className="text-[#ABB2C7] font-semibold">
          Choose your payment method
        </Typography>
      </Box>

      <Box className="mt-[20px]">
        {saveCard?.map((item: StripePaymentMethod, index: number) => {
          let CardIconSvg = getCardIconSvg(item.card.brand);

          return (
            <Box
              key={index}
              className={`flex items-center justify-between px-4 py-2 rounded-[5px] mb-4 cursor-pointer ${
                item?.id === props?.selectedDefaultCard?.id
                  ? "border_linear"
                  : "border_normal"
              } bg-white`}
              onClick={() => props?.setSelectedDefaultCard(item)}
            >
              <Box className="flex items-center gap-4">
                <Box className="flex items-center gap-5 w-[40px]">
                  {<CardIconSvg svgProps={{ width: 53, height: 35 }} />}
                </Box>
                <Box className="py-[7px]">
                  <Typography className="text-[14px] font-semibold">
                    {capitalizeFirstLetter(item?.card?.brand)} ending in{" "}
                    {item?.card?.last4}
                  </Typography>
                  <Box className="flex items-center gap-5">
                    <Typography className="text-[13px] font-medium flex opacity-50 font-semibold">
                      Exp.date{" "}
                      {formatExpiryDate(
                        item?.card?.exp_month || 0,
                        item?.card?.exp_year || 0
                      )}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="flex items-center gap-2 text-[12px] font-[600] max-sm:flex-col">
                <Button
                  onClick={() => {
                    props?.setOpenEditCard(true);
                  }}
                  className="min-w-[20px]"
                >
                  {" "}
                  <Icons.Edit />
                </Button>

                <Button
                  className="min-w-[20px]"
                  onClick={() => props?.setOpenDeleteCard(true)}
                >
                  <Icons.DeleteIcon />
                </Button>
              </Box>
            </Box>
          );
        })}

        <Box
          className={`flex items-center justify-between px-4 py-2 rounded-[5px] mb-4 cursor-pointer ${"border_normal"}  bg-white`}
          onClick={() => {
            props?.setSelectedDefaultCard(null);
            props?.setAddNewOpen(true);
          }}
        >
          <Box className="py-[7px]">
            <Box className="flex items-center gap-5">
              <CreditCardIcon />
              <Typography className="text-[14px] font-medium">
                Add Payment Method
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Button
        className="bg_linear text-white w-full py-[10px] normal-case text-[17px]"
        onClick={() => {
          if (props?.selectedDefaultCard) {
            props?.setMainLoading(true);
            props?.handleSubmit();
          } else {
            toast.error("Please select a payment method");
            props?.setMainLoading(false);
          }
        }}
      >
        Process to Pay
      </Button>
      {props?.mainLoading && (
        <main className="main">
          <span className="loader"></span>
        </main>
      )}
    </Box>
  );
}
