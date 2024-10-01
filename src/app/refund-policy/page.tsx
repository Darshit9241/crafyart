"use client";
import { Box, Typography } from "@mui/material";

export default function index() {
  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <Box className="flex items-center flex-col">
        <Typography className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10">
          Refund Policy
        </Typography>

        <Box className="w-[80%] max-sm:w-full mx-auto">
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Crafty Art reserves the right to refuse or cancel any order. Crafty
            Art, at its sole discretion, may cancel any order(s):
          </Typography>

          <Typography className="mb-2">
            1. If it suspects a fraudulent transaction,
          </Typography>
          <Typography className="mb-2">
            2. If it suspects a customer has undertaken a transaction that is
            not in accordance with the Terms of Use or
          </Typography>
          <Typography className="mb-2">
            3. For any reason outside the control of Crafty Art, including
            delivery-related difficulties.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-3 font-[700]"
          >
            Refund and cancellation policies are applicable under the following
            conditions:
          </Typography>

          <Typography className="mb-3">
            1. In case the buyer cancels the order online, Within half an hour,
            the entire order amount will be refunded.
          </Typography>

          <Typography className="mb-3">
            2. In cases where the item ordered has been shipped but has not yet
            been delivered to the buyer, the order cannot be cancelled.
          </Typography>

          <Typography className="mb-3">
            3. However, the order, once delivered, cannot be cancelled in any
            case.
          </Typography>

          <Typography className="mb-3">
            4. If there is an option for online download of data, cancellation
            will not be possible.
          </Typography>

          <Typography className="mb-3">
            5. In the case of failed transactions or double realisation of
            accounts for the same order, the total deducted amount will be
            refunded.
          </Typography>

          <Typography className="mb-3">
            6. In the case of a cancelled order or failed transaction, the bank
            or card transaction charges of the buyer, if any, are likely to be
            forfeited.
          </Typography>

          <Typography className="mb-3">
            7. Crafty Art offers no guarantees whatsoever for the accuracy or
            timeliness of the refunds on the buyer's card or account.
          </Typography>

          <Typography className="mb-3">
            8. In the case of part cancellations, the amount refunded will
            correspond to the part cancellation.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
