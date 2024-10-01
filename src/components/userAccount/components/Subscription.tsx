import { CurrentPlanProps } from "@/src/interface/user";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Subscription(props: {
  userSubscription: CurrentPlanProps | null;
}) {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const router = useRouter();
  return (
    <Box>
      <Typography variant="h1" className="font-semibold text-[24px]">
        Subscription
      </Typography>
      <Box
        className="pt-14  justify-center "
        sx={{
          display: !props?.userSubscription?.hasCurrentPlan ? "flex" : "none",
        }}
      >
        <Box className="w-[600px] mx-auto flex flex-col items-center justify-center">
          <img
            src={`${assetsUrl}/w_assets/images/subcriptionNote.png`}
            alt="subscriptionNote"
            className="w-[300px] mb-5"
          />
          <h3 className="text-[18px] pt-5 pb-5 text-[#1C3048] font-medium">
            Unlock Premium Benefits: Upgrade Your Crafty Art Account Now!
          </h3>

          <Typography className="text-center text-[#ABB2C7] mb-8">
            Upgrade your Crafty Art account for an ad-free experience, exclusive
            templates, and advanced design tools. Gain access to premium
            features, stay ahead with regular updates, and invest in enhancing
            your creative workflow. Elevate your design journey with a valuable
            and cutting-edge upgrade.
          </Typography>

          <Link prefetch={false} href={"/plans"}>
            {" "}
            <Button className="bg_linear h-[40px] normal-case px-[50px] text-white">
              Buy Now
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        className="pt-[35px]"
        sx={{
          display: props?.userSubscription?.hasCurrentPlan ? "block" : "none",
        }}
      >
        <Typography className="font-medium text-[16px] mb-4">
          Current Plan
        </Typography>

        <Box className="bg-[#F4F7FE] p-[25px] w-[700px] max-xl:w-full rounded-[8px]">
          <Box className="flex items-center justify-between mb-1">
            <Box className="flex gap-2 items-end">
              <Typography className="font-semibold">
                {props?.userSubscription?.current?.package_name}
              </Typography>
              <Typography className="font-semibold text-[#ABB2C7] text-[14px]">
                {props?.userSubscription?.current?.amount}
              </Typography>
            </Box>

            <Typography
              className="text_linear text-[14px] cursor-pointer"
              onClick={() => router.push("plans")}
            >
              Upgrade your plan
            </Typography>
          </Box>

          <Typography className=" text-[14px]">
            Your current plan{" "}
            <span className="font-semibold">
              {" "}
              {props?.userSubscription?.current?.amount}
            </span>{" "}
            is end on{" "}
            <span>{props?.userSubscription?.current?.billing_date}</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
