"use client";
import { RazorpayPage } from "@/src/components/payment/Razorpay";
import Stripe from "@/src/components/payment/Stripe";
import { PackageData } from "@/src/interface/pricePlan";
import { Box, Radio, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import DialogModal from "../common/DialogBox";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";

interface PropsType {
  openPriceDialog: boolean;
  setOpenPriceDialog: React.Dispatch<React.SetStateAction<boolean>>;
  choosePlan: PackageData | null;
  maxPriceData: PackageData | null;
  endDate: string;
  setChoosePlan: React.Dispatch<React.SetStateAction<PackageData | null>>;
  pricePlaneData: PackageData[];
  userCountryCode: string;
  stripeTestPromise: any;
}

export default function Dialog(props: PropsType) {
  const screenHeight = useScreenHeight();
  const screenWidth = useScreenWidth();

  return (
    <DialogModal
      open={props.openPriceDialog}
      setOpen={props.setOpenPriceDialog}
      className="w-[100%] lg:w-[80%] xl:w-[1000px]"
    >
      <Box className="flex max-md:flex-col rounded-[8px] bg-[#F4F7FE] overflow-hidden">
        <Box className="md:w-[50%] p-[30px] max-sm:p-[10px] bg-white">
          <Typography variant="h2" className="font-medium text-[22px] mb-2">
            Choose your plan
          </Typography>
          <Typography className="text-[#ABB2C7] text-[14px]  sm:w-[80%]">
            Access all assets, templates, integrations and{" "}
            <span className="font-[700]"> Premium support.</span>
          </Typography>

          <Box className="mt-[20px]">
            {props.pricePlaneData?.map((item, index) => (
              <Box
                key={index}
                className="flex items-start mb-3 cursor-pointer"
                onClick={() => props.setChoosePlan(item)}
              >
                <Radio
                  color="default"
                  checked={item?.offer_price === props.choosePlan?.offer_price}
                />
                <Box className="py-[7px]">
                  <Typography className="font-semibold flex text-[18px]">
                    {item?.package_name}{" "}
                    <span
                      style={{
                        padding: "5px",
                        textAlign: "center",
                        fontSize: "12px",
                        display: item?.offer_msg ? "block" : "none",
                        fontFamily: "Inter , sans-serif",
                      }}
                      className="rounded-[10px] ml-1 text-[red] font-medium"
                    >
                      {item?.offer_msg}
                    </span>
                  </Typography>

                  <Box className="flex gap-2">
                    {item?.has_offer ? (
                      <Typography className="text-[#ABB2C7] text-[13px] line-through	">
                        {item?.actual_price}
                      </Typography>
                    ) : (
                      ""
                    )}

                    <Typography className="text-[#ABB2C7] text-[13px] ">
                      {item?.offer_price}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className="flex justify-between mb-2">
            <Typography>Ends on</Typography>
            <Typography>{props.endDate}</Typography>
          </Box>

          <Box className="flex justify-between">
            <Typography className="font-semibold">Due today</Typography>
            <Typography className="font-semibold">
              {props.choosePlan?.offer_price}
            </Typography>
          </Box>
        </Box>

        <Box
          className="md:w-[50%] p-[30px] max-sm:p-[10px] overflow-auto custom_scroll"
          sx={{
            maxHeight:
              screenWidth < 600
                ? `${screenHeight}px`
                : `${screenHeight - 150}px`,
          }}
        >
          <Typography variant="h2" className="font-medium text-[22px] mb-5">
            Finalize Payment
          </Typography>
          {props.userCountryCode === "IN" && (
            <RazorpayPage
              setOpen={props.setOpenPriceDialog}
              amount={props.choosePlan?.offer_price}
              actionType={1}
            />
          )}

          <Elements stripe={props.stripeTestPromise}>
            <Stripe
              open={props.openPriceDialog}
              countryCode={props.userCountryCode}
              setOpen={props.setOpenPriceDialog}
              amount={props.choosePlan?.offer_price}
              actionType={1}
            />
          </Elements>
        </Box>
      </Box>
    </DialogModal>
  );
}
