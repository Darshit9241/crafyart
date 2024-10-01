import { Box, Button, Typography } from "@mui/material";
import { AddressElement, useElements } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import api from "@/src/clientApi/api";
import { mainLoad } from "@/src/redux/reducer/actionDataReducer";
import { saveCardData } from "@/src/redux/reducer/AuthDataReducer";
import { formatExpiryDate } from "../Stripe";
import {
  BillingDetails,
  StripePaymentMethod,
  StripePaymentMethodApiData,
} from "@/src/interface/stripePaymentMethod";

interface EditCardProps {
  selectedDefaultCard: StripePaymentMethod | null;
  setOpenEditCard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditCard(props: EditCardProps) {
  const elements = useElements();
  const dispatch = useDispatch();

  const [expiry, setExpiry] = useState<string>(
    formatExpiryDate(
      props?.selectedDefaultCard?.card?.exp_month || 0,
      props?.selectedDefaultCard?.card?.exp_year || 0
    )
  );
  const [expiryMonth, setExpiryMonth] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [expiryError, setExpiryError] = useState<boolean | any>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(mainLoad(true));

    const billing_details: BillingDetails = {
      name: undefined,
      email: props?.selectedDefaultCard?.billing_details?.email || "",
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
        return;
      }
    }

    api
      .updateCard({
        pm: props?.selectedDefaultCard?.id,
        billing_details,
        month: expiryMonth
          ? Number(expiryMonth)
          : props?.selectedDefaultCard?.card?.exp_month,
        year: expiryYear
          ? Number(expiryYear)
          : props?.selectedDefaultCard?.card?.exp_year,
      })
      .then(() => {
        props?.setOpenEditCard(false);
        api.cardList().then((response: unknown) => {
          const res = response as StripePaymentMethodApiData;
          dispatch(saveCardData(res?.data));
        });
        toast.success("Payment method updated successfully!");
        dispatch(mainLoad(false));
      })
      .catch(() => {
        toast.error("Failed to update payment method.");
        dispatch(mainLoad(false));
      });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = e.target.value;
    let formattedExpiry = formatExpiry(inputValue);
    setExpiry(formattedExpiry);

    const [month, enteredYear] = formattedExpiry.split("/");

    const currentYear = new Date().getFullYear();
    const currentYearLastTwoDigits = currentYear % 100;

    const updatedYear: number | undefined = enteredYear
      ? parseInt(`${currentYear.toString().slice(0, 2)}${enteredYear}`, 10)
      : undefined;

    const hasError =
      enteredYear && parseInt(enteredYear, 10) < currentYearLastTwoDigits;

    setExpiryMonth(month);
    setExpiryYear(updatedYear?.toString() || "");
    setExpiryError(hasError);
  };

  const formatExpiry = (inputValue: string): string => {
    let formattedExpiry = inputValue.replace(/[^\d]/g, "");
    if (formattedExpiry.length >= 1 && formattedExpiry !== "1") {
      formattedExpiry = formattedExpiry.padStart(2, "0");
    }
    if (formattedExpiry.length >= 3) {
      formattedExpiry = `${formattedExpiry.slice(0, 2)}/${formattedExpiry.slice(
        2
      )}`;
    }
    if (formattedExpiry.length >= 6) {
      const currentYear = new Date().getFullYear() % 100;
      const enteredYear = parseInt(formattedExpiry.slice(3), 10);
      formattedExpiry = `${formattedExpiry.slice(0, 5)}${Math.max(
        currentYear,
        enteredYear
      )}`;
    }
    return formattedExpiry;
  };

  return (
    <div>
      <Box className="flex items-center justify-between gap-2 flex-wrap mb-4">
        <Typography className="text-[#ABB2C7] font-semibold">
          Update Your Card
        </Typography>
      </Box>

      <Box className="mb-5">
        <Typography className="font-medium mb-1">Card Number</Typography>
        <Box
          sx={{
            border: "1px solid  #ced4da",
            padding: "10px",
            borderRadius: ".375rem",
            height: "44px",
            backgroundColor: "white",
          }}
        >
          <input
            type="text"
            className=" bg-white w-full font-semibold opacity-40"
            value={`XXXX XXXX XXXX ${props?.selectedDefaultCard?.card?.last4}`}
            disabled
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
              backgroundColor: "white",
            }}
          >
            <input
              type="text"
              placeholder="MM/YY"
              className="bg-white w-full text-[14px]"
              style={{ color: expiryError ? "red" : "black" }}
              value={expiry}
              onChange={handleExpiryChange}
              maxLength={5}
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
              backgroundColor: "white",
            }}
          >
            <input
              type="text"
              className=" bg-white w-full font-semibold opacity-50"
              value={`***`}
              disabled
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
                country:
                  props?.selectedDefaultCard?.billing_details?.address
                    ?.country ?? "IN",
                line1:
                  props?.selectedDefaultCard?.billing_details?.address?.line1,
                line2:
                  props?.selectedDefaultCard?.billing_details?.address?.line2 ||
                  "",
                city: props?.selectedDefaultCard?.billing_details?.address
                  ?.city,
                state:
                  props?.selectedDefaultCard?.billing_details?.address?.state,
                postal_code:
                  props?.selectedDefaultCard?.billing_details?.address
                    ?.postal_code,
              },
              name: props?.selectedDefaultCard?.billing_details?.name,
              phone: props?.selectedDefaultCard?.billing_details?.phone,
            },
          }}
        />
      </Box>

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
          onClick={() => props?.setOpenEditCard(false)}
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
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}
