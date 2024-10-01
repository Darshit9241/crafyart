import Icons from "@/src/assets";
import { StripePaymentMethod } from "@/src/interface/stripePaymentMethod";
import { Box, Button, Typography } from "@mui/material";
import {
  AddressElement,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";

export const inputStyle = {
  color: "black",
  fontWeight: "500",
  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  fontSize: "16px",
  border: "1px solid #ced4da",
  fontSmoothing: "antialiased",
  ":-webkit-autofill": {
    color: "#fce883",
  },
  "::placeholder": {
    color: "#ced4da",
  },
};

interface PropsType {
  countryCode: string;
  saveCard: StripePaymentMethod[];
  mainLoading: boolean;
  setAddNewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: () => void;
}

export default function AddPaymentMethod(props: PropsType) {
  return (
    <>
      <Box className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <Typography className="text-[#ABB2C7] font-semibold">
          Credit Or Debit Card
        </Typography>

        <Icons.creditDebitCardIcon />
      </Box>

      <Box className="mb-5">
        <Typography className="font-medium mb-1">Card Number</Typography>
        <Box
          sx={{
            border: "1px solid  #ced4da",
            padding: "10px",
            borderRadius: ".375rem",
            height: "44px",
          }}
        >
          <CardNumberElement
            options={{
              style: {
                base: inputStyle,
              },
            }}
          />
        </Box>
      </Box>

      <Box className="flex gap-[20px] mb-5">
        <Box className="flex-1">
          <Typography className="font-medium mb-1">Expiration Date</Typography>
          <Box
            sx={{
              border: "1px solid  #ced4da",
              padding: "10px",
              borderRadius: ".375rem",
              height: "44px",
            }}
          >
            <CardExpiryElement
              options={{
                style: {
                  base: inputStyle,
                },
              }}
            />
          </Box>
        </Box>

        <Box className="flex-1">
          <Typography className="font-medium mb-1">CVV</Typography>
          <Box
            sx={{
              border: "1px solid  #ced4da",
              padding: "10px",
              borderRadius: ".375rem",
              height: "44px",
            }}
          >
            <CardCvcElement
              options={{
                style: {
                  base: inputStyle,
                },
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box className="mb-5">
        <AddressElement
          options={{
            mode: "billing",
            fields: {
              phone: "always",
            },
            validation: {
              phone: {
                required: "always",
              },
            },

            defaultValues: {
              address: {
                country: props?.countryCode,
                line1: "",
                line2: "",
                city: "",
                state: "",
                postal_code: "",
              },
              name: "",
              phone: "",
            },
          }}
        />
      </Box>

      {props?.saveCard?.length > 0 ? (
        <Box className="flex justify-between pt-5">
          <Button
            style={{
              background: "#E9EDF6",
              width: "fit-content",
              textTransform: "unset",
              borderRadius: "5px",
              fontWeight: "500",
            }}
            className="bg_linear max-sm:w-full text-[#1C3048] w-[48%] py-[10px] px-[20px]  max-lg:mx-auto text-[14px] 2sm:text-[16px]"
            onClick={() => props?.setAddNewOpen(false)}
          >
            Cancel
          </Button>

          <Button
            style={{
              background:
                "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
              width: "fit-content",
              textTransform: "unset",
              borderRadius: "5px",
              color: "white",
              fontWeight: "500",
            }}
            className="bg_linear max-sm:w-full py-[10px]   px-[20px]  w-[48%] max-lg:mx-auto text-[14px] 2sm:text-[16px]  "
            onClick={props?.handleSubmit}
          >
            Process to Pay
          </Button>
        </Box>
      ) : (
        <Box className="flex justify-between pt-5">
          <Button
            style={{
              background:
                "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
              width: "fit-content",
              textTransform: "unset",
              borderRadius: "5px",
              color: "white",
              fontWeight: "500",
            }}
            className="bg_linear max-sm:w-full py-[10px] w-full  px-[20px]  max-lg:mx-auto text-[14px] 2sm:text-[16px]  "
            onClick={props?.handleSubmit}
          >
            Process to Pay
          </Button>
        </Box>
      )}

      {props?.mainLoading && (
        <main className="main  ">
          <span className="loader"></span>
        </main>
      )}
    </>
  );
}
