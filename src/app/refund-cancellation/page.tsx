"use client";
import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function page() {
  return (
    <Box className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead heading={"Referral and Cancellation"} />

      <Box className="flex items-center flex-col">
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10"
          variant="h1"
        >
          Refund & Cancellation
        </Typography>

        <Box className="w-[80%] max-sm:w-full mx-auto">
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Refund & Cancellation policy
          </Typography>

          <Typography className="mb-3">
            If at any time you are not satisfied with the quality of services of
            our website or application, Within 7 days of subscription purchase,
            you may contact customer help and support with a reason for
            dissatisfaction. If your issue is found to be genuine, your
            subscription may be considered for a refund claim, Otherwise, your
            complaint will be noted and considered for the respective
            resolution. The refund payment timeline will be within 5 - 7 working
            days. Furthermore, you hereby confirm and agree that you will not
            claim or allege anything against Crafty Art concerning the digital
            content provided to you by the Mobile App and Website.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            No Waiver
          </Typography>

          <Typography className="mb-3">
            The rights and remedies available under this Policy may be exercised
            as often as necessary and are cumulative and not exclusive of rights
            or remedies provided by law. It may be waived only in writing. Delay
            in exercising or non-exercise of any such right or remedy does not
            constitute a waiver of that right or remedy, or any other right or
            remedy.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Contact Us
          </Typography>

          <Typography className="mb-3">
            If we change our privacy policies and procedures, we will post those
            changes on our website to keep you aware of what information we
            collect, how we use it and under what circumstances we may disclose
            it. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </Typography>

          <Typography className="mb-3">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              {" "}
              infiappsolution@gmail.com
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
