"use client";
import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function index() {
  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead
        heading={"Referral program"}
        text="Double the Joy, Double the Rewards! Supercharge Your Gains with Our Lucrative Referral Program. Seize the Opportunity. Refer Today!"
      />
      <Box className="flex items-center flex-col">
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto sm:mb-10"
          variant="h1"
        >
          Referral program
        </Typography>

        <Box className="w-[80%] max-sm:w-full mx-auto">
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            General
          </Typography>

          <Typography className="mb-2">Step 1: Login to Crafty art</Typography>
          <Typography className="mb-2">
            Step 2: You Refer Crafty Art to Friends & Family
          </Typography>
          <Typography className="mb-2">
            Step 3: They install and Complete User Registration
          </Typography>
          <Typography className="mb-2">Step 4: You Earn Coins</Typography>
          <Typography className="mb-2">
            Step 5: Get a Subscription with Coin
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            This offer is valid for eligible Crafty Art users only.
          </Typography>

          <Typography className="mb-3">Eligible Crafty Art users:</Typography>
          <Typography className="mb-3">
            1. Those who have Install Crafty Art have But not Uninstalled it.
          </Typography>

          <Typography className="mb-3">
            2. Crafty art user at least Logging in Crafty Art.
          </Typography>

          <Typography className="mb-3">
            3. This offer is only applicable for first time registration.{" "}
          </Typography>

          <Typography className="mb-3">
            For each successful referral, the referrer will earn a reward worth
            10 Coins.
          </Typography>

          <Typography className="mb-3">
            1 Coin equivalent to 1 INR and 0.0125 USD
          </Typography>

          <Typography className="mb-3">
            Any User Installing crafty art app after Uninstalling the existing
            app will also not be considered for the purpose of referral reward.
          </Typography>

          <Typography className="mb-3">
            Crafty art, at its sole discretion, reserves the right to either
            temporarily or permanently, withdraw or suspend the offer at any
            time without giving any notice or assigning any reason for the same,
            whether in respect of one or more customers.
          </Typography>

          <Typography className="mb-3">
            Crafty art and any of its officers, directors, personnel and
            employees shall not be liable for any loss, damage of any nature,
            including but not limited to direct, indirect, punitive, special,
            exemplary and consequential in any way arising from this campaign.
          </Typography>

          <Typography className="mb-3">
            For queries/complaints pertaining to redeeming of the Coins
            mentioned in the reward, customer may send eMail on
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              {" "}
              infiappsolution@gmail.com{" "}
            </span>
          </Typography>

          <Typography className="mb-3">
            If any referred client already existed in Crafty art database as
            existing USer or potential User, then it will not be considered as
            referral.
          </Typography>

          <Typography className="mb-3">
            If the details provided for referrals are incomplete/ incorrect/
            invalid / duplicate, the Referrer who has provided a reference shall
            not be entitled to any reward under the Referral Program.{" "}
          </Typography>
          <Typography className="mb-3">
            The Referrer should obtain consent of prospective before referring
            to HSL and confirm so having obtained the consent of the person
            referred for providing his/her details.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Steps to Redeem
          </Typography>

          <Typography className="mb-3">
            Visit{" "}
            <Link
              prefetch={false}
              className="text-[#5961F8]"
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=com.crafty.art"
              }
            >
              {" "}
              https://play.google.com/store/apps/details?id=com.crafty.art
            </Link>
          </Typography>

          <Typography className="mb-3">
            You can Buy Subscription with these coins.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Steps to Redeem
          </Typography>

          <Typography className="mb-3">
            For queries/complaints pertaining to redeeming of the Coins
            mentioned in the reward, customer may send Email on
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
    </div>
  );
}
