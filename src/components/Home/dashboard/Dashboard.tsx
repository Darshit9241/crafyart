"use client";
import Icons from "@/src/assets";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { DashboardDataType } from "@/src/interface/dashboard";
import dynamic from "next/dynamic";

const CustomSize = dynamic(() => import("./dashboardComponents/CustomSize"));
const TemplatesBox = dynamic(
  () => import("./dashboardComponents/templatesBox/TemplatesBox")
);

const bannerCategory = [
  {
    image: <Icons.invitationIcon svgProps={{ width: 50 }} />,
    name: "Invitation",
    path: "/templates/invitation",
  },
  {
    image: <Icons.quotesIcon svgProps={{ width: 50 }} />,
    name: "Quotes",
    path: "/templates/quotes-instagram-story",
  },
  {
    image: <Icons.resumeIcon svgProps={{ width: 50 }} />,
    name: "Resume",
    path: "/templates/resume-portrait",
  },
  {
    image: <Icons.flyerIcon svgProps={{ width: 50 }} />,
    name: "Flyer",
    path: "/templates/flyer",
  },
  {
    image: <Icons.bannerLogoIcon svgProps={{ width: 50 }} />,
    name: "Logo",
    path: "/templates/logos",
  },
  {
    image: <Icons.festivalIcon svgProps={{ width: 50 }} />,
    name: "Calendar",
    path: "/templates/calendar",
  },
  {
    image: <Icons.moreIcon svgProps={{ width: 50 }} />,
    name: "More",
    path: "/templates",
  },
];

const bannerCategoryM = [
  {
    image: <Icons.invitationMIcon svgProps={{ width: 50 }} />,
    name: "Invitation",
    path: "/templates/invitation",
  },
  {
    image: <Icons.quotesMIcon svgProps={{ width: 50 }} />,
    name: "Quotes",
    path: "/templates/quotes-instagram-story",
  },
  {
    image: <Icons.resumeMIcon svgProps={{ width: 50 }} />,
    name: "Resume",
    path: "/templates/resume-portrait",
  },
  {
    image: <Icons.flyerMIcon svgProps={{ width: 50 }} />,
    name: "Flyer",
    path: "/templates/flyer",
  },
  {
    image: <Icons.logoMIcon svgProps={{ width: 50 }} />,
    name: "Logo",
    path: "/templates/logos",
  },
  {
    image: <Icons.festivalMIcon svgProps={{ width: 50 }} />,
    name: "Calendar",
    path: "/templates/calendar",
  },
  {
    image: <Icons.moreMIcon svgProps={{ width: 50 }} />,
    name: "More",
    path: "/templates",
  },
];

export default function Dashboard(props: { data: DashboardDataType }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Box className="bg-[#F4F7FE]">
      <Box className="py-[10px] max-sm:py-[5px]"></Box>
      <Box className="mx-[20px] max-sm:mx-[10px] bg_linear rounded-[10px] px-[16px]">
        <Box className="max-sm:hidden">
          <Box className="flex justify-end py-[15px] gap-3">
            {/* <UploadButton /> */}
            <CustomSize />
          </Box>
          <Typography
            variant="h1"
            className="text-[30px] md:text-[47px] font-bold text-center text-white max-sm:pb-8 "
          >
            What would you like to create ?
          </Typography>
          <Box className="flex max-sm:hidden  justify-center items-center gap-[30px] md:gap-[50px] py-10 overflow-auto scroll_none">
            {bannerCategory?.map((item, index) => (
              <Link
                prefetch={false}
                key={index}
                href={item?.path}
                className="flex flex-col items-center cursor-pointer gap-[10px]"
              >
                {item?.image}

                <Typography className="text-white text-center text-[14px] whitespace-nowrap">
                  {item?.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>

        <Box className="sm:hidden py-[15px]">
          <Box className="flex">
            <Box>
              <Typography className="text-white mb-2">Pro+</Typography>
              <Typography className="text-white whitespace-nowrap text-[20px] font-medium mb-5">
                Crafty Art & Design
              </Typography>

              <Button
                className="normal-case bg-white px-[30px]"
                onClick={() => router.push("/plans")}
              >
                <span className="text_linear">Get Pro+</span>
              </Button>
            </Box>
            <img
              src="/images/getPro.png"
              alt="pro"
              className="max-fold:hidden"
            />
          </Box>
        </Box>
      </Box>

      <Box className="flex sm:hidden lg:justify-center items-center gap-[25px] md:gap-[50px] pt-5 px-[15px] overflow-auto scroll_none">
        {bannerCategoryM?.map((item, index) => (
          <Box
            key={index}
            className="flex flex-col items-center cursor-pointer gap-[10px]"
            onClick={() => {
              dispatch(openSidebar(false));
              router.push(item?.path);
            }}
          >
            {item?.image}
            <Typography className="text-center text-[12px] whitespace-nowrap">
              {item?.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className="min-h-[1000px]">
        <TemplatesBox data={props?.data} />
      </Box>
    </Box>
  );
}
