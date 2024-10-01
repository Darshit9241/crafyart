import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { PackageData } from "@/src/interface/pricePlan";
import {
  _paf,
  clearTemplateCookie,
  productData,
} from "@/src/redux/reducer/actionDataReducer";
import { Box, Button, Typography } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DialogModal from "../common/DialogBox";
import { RazorpayPage } from "../payment/Razorpay";
import Stripe from "../payment/Stripe";
import MarkTextRight from "./MarkTextRight";

interface PropsType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scroll_none: boolean;
  countryCode: string;
  stripeTestPromise: string | any;
}

export default function SubscriptionDialog(props: PropsType) {
  const dispatch = useDispatch();
  const [planeType, setPlaneType] = useState<PackageData | null>(null);
  const [maxPriceData, setMaxPriceData] = useState<PackageData | null>(null);
  const [pricePlaneData, setPricePlaneData] = useState<PackageData[]>([]);

  useEffect(() => {
    api
      .getPlanData({
        currency: props?.countryCode === "IN" ? "INR" : "USD",
      })
      .then((response) => {
        const subs = response as PackageData[];
        setPricePlaneData(subs);
        const maxPriceObject = subs.reduce(
          (max: PackageData, current: PackageData) =>
            current.price > max.price ? current : max,
          subs[0]
        );

        setMaxPriceData(maxPriceObject);
        setPlaneType(maxPriceObject);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });
  }, [props?.open]);

  useEffect(() => {
    dispatch(
      productData({
        product_name: planeType?.id,
        product_id: planeType?.id.toString(),
        amount: planeType?.package_name,
      })
    );
    dispatch(_paf(planeType?.id.toString()));
    dispatch(clearTemplateCookie(true));
  }, [planeType]);

  return (
    <>
      <DialogModal
        open={props?.open}
        setOpen={props?.setOpen}
        className="w-[100%] lg:w-[80%] xl:w-[1000px]"
        scroll_none={props.scroll_none}
      >
        <Box className="flex max-md:flex-col rounded-[8px] bg-[#F4F7FE] overflow-hidden">
          <Box className="md:w-[50%] p-[30px] max-sm:p-[10px] bg-white">
            <Typography
              variant="h2"
              className="font-medium text-[24px] mb-4 text-black"
            >
              Super simple pricing
            </Typography>
            <Typography className="text-[#ABB2C7] text-[14px]  sm:w-[80%] ">
              To enjoy all the features of Crafty Art with create design faster
            </Typography>

            <Box className="flex items-center gap-[12px] p-[5px] rounded-[5px] mt-5 w-fit  bg-[#F5F7F9]">
              {pricePlaneData?.map((res, index) => {
                return (
                  <Fragment key={index}>
                    <Button
                      className={`capitalize text-[14px] px-[10px] sm:px-[20px] ${
                        planeType?.desc === res?.desc
                          ? "bg-white text-black"
                          : "bg-[transparent] text-[black] opacity-70"
                      } `}
                      sx={{
                        boxShadow: "0px 1px 2px 0px rgba(26, 27, 28, 0.06)",
                      }}
                      onClick={() => {
                        setPlaneType(res);
                      }}
                    >
                      {res?.desc}
                    </Button>

                    <Box
                      className="w-[2px] bg-[#FFF] h-[30px]"
                      sx={{
                        display:
                          pricePlaneData?.length - 1 === index
                            ? "none"
                            : "block",
                      }}
                    ></Box>
                  </Fragment>
                );
              })}
            </Box>

            <Box className="mt-[40px] h-[100px] flex items-center relative justify-between border_linear py-[15px] px-[15px] rounded-[10px]">
              <Box className="flex justify-end absolute left-[-2px] top-[-16px] ">
                <span
                  style={{
                    padding: "5px 10px",
                    textAlign: "right",
                    backgroundSize: "cover",
                    fontSize: "14px",
                    color: "white",
                    display:
                      planeType?.price === maxPriceData?.price
                        ? "block"
                        : "none",
                  }}
                  className="bg_linear rounded-[5px]"
                >
                  Recommended
                </span>
              </Box>

              <Box>
                <Typography
                  variant="h3"
                  className="text-[#1C3048] text-[20px] font-[600] flex items-center gap-3"
                >
                  Crafty Art Pro
                  <Icons.pricingIcon svgProps={{ width: 30 }} />
                </Typography>

                <span
                  style={{
                    fontSize: "12px",
                    display: planeType?.offer_msg ? "block" : "none",
                    fontFamily: "Inter , sans-serif",
                  }}
                  className="rounded-[10px] ml-1 text-[red] font-medium mt-2 "
                >
                  {planeType?.offer_msg}
                </span>
              </Box>
              <Box>
                <Typography>
                  <span className="text-[24px] text-[#1C3048] font-[700]">
                    {planeType?.offer_price}
                  </span>{" "}
                  /{planeType?.package_name}
                </Typography>

                {planeType?.has_offer ? (
                  <Typography className="text-[#ABB2C7] text-[16px] text-right line-through	">
                    {planeType?.actual_price} /{planeType?.package_name}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
            </Box>

            <Box className="py-[30px] max-sm:p-[10px]">
              <Typography variant="h2" className="font-medium text-[22px] mb-5">
                Finalize Payment
              </Typography>
              {props.countryCode === "IN" && (
                <RazorpayPage
                  setOpen={props.setOpen}
                  amount={planeType?.offer_price}
                  actionType={1}
                />
              )}

              <Elements stripe={props.stripeTestPromise}>
                <Stripe
                  open={props.open}
                  countryCode={props.countryCode}
                  setOpen={props.setOpen}
                  amount={planeType?.offer_price}
                  actionType={1}
                />
              </Elements>
            </Box>
          </Box>
          <Box className="md:w-[50%] p-[30px] max-sm:p-[10px] overflow-auto custom_scroll">
            <Typography
              variant="h3"
              className="text-[#1C3048] text-[20px] font-[600] flex items-center gap-3"
            >
              Crafty Art Pro
              <Icons.pricingIcon svgProps={{ width: 30 }} />
            </Typography>

            <Box className="pt-5">
              <MarkTextRight text="Watermark Remover" />
              <MarkTextRight text="Background Remover" />
              <MarkTextRight text="Get high resolution templates" />
              <MarkTextRight text="Access to over 10,000+ templates" />
              <MarkTextRight text="100% fully customizable" />
              <MarkTextRight text="Full access of Latest Designs" />
              <MarkTextRight text="Easy Drag-and-drop interface" />
              <MarkTextRight text="Access to over 5,000+ variety of Backgrounds" />
              <MarkTextRight text="Smooth and Sleek Editor" />
              <MarkTextRight text="Ability to upload your own images and assets" />
              <MarkTextRight text="Design with custom dimensions" />
              <MarkTextRight text="Access to over 3,000+ design elements" />
              <MarkTextRight text="Ads-free content" />
              <MarkTextRight text="24/7 Customer Support" />
              <MarkTextRight text="Ability to save designs as templates for future use" />
              <MarkTextRight text="Edit and Download on the go" />
              <MarkTextRight text="Share and publish anywhere" />
              <MarkTextRight text="Access to over 1,000+ different font styles" />
            </Box>
          </Box>
        </Box>
      </DialogModal>
    </>
  );
}
