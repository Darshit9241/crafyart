"use client";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import CustomHead from "@/src/components/common/CustomHead";
import ImageBox from "@/src/components/common/ImageBox";
import {
  GetCategoryDataType,
  TemplateDataType,
} from "@/src/interface/commonType";
import { RootState } from "@/src/redux";
import { Box, Button, Rating, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackGrid from "react-stack-grid";

const Breadcrumb = dynamic(() => import("@/src/components/common/Breadcrumb"));
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));

const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);

const TemplateModal = dynamic(
  () => import("@/src/components/singleTemplate/TemplateModal")
);

const howMakeTemplate = [
  "Explore our wide range of categories to find the perfect Template for your needs.  ",
  "Personalize the Template with your text, images, and branding elements using easy-to-use editing tools.",
  "Once satisfied with your design, download it in your preferred format, ready to print or share digitally.",
];

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const screenWidth = useScreenWidth();
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<TemplateDataType | any>(null);
  const [data, setData] = useState<TemplateDataType[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const tempIdValue = useSelector((state: RootState) => state.actions.tempId);

  useEffect(() => {
    setLoadMore(true);
    api
      .getCategoryData({
        cat_id: "latest",
        page: page,
      })
      .then((response: unknown) => {
        const res = response as GetCategoryDataType;
        setLoadMore(false);
        setIsLastPage(res?.isLastPage);

        if (res?.datas) {
          setData((prevData) => [...(prevData || []), ...res?.datas]);
        }
      })
      .catch((err) => {
        setLoadMore(false);
        consoleLog("getCategoryData: ", err);
      });
  }, [page]);

  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(tempIdValue);
    element?.scrollIntoView();
  }, [data]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1600:
        return 7.47;
      case screenWidth > 1500:
        return 7.97;
      case screenWidth > 1330:
        return 6.47;
      case screenWidth > 1200:
        return 5.47;
      case screenWidth > 1200:
      case screenWidth > 1023:
        return 5.72;
      case screenWidth > 700:
        return 3.3;
      case screenWidth > 550:
        return 3.3;
      case screenWidth > 250:
        return 2.22;
      default:
        return 2.2;
    }
  }, [screenWidth]);

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/categoryBanner.png`}
        heading={"Latest Templates For You"}
        text={
          "Unleash Creativity Now with Our Latest Free Templates! 🚀 Transform Your Projects Instantly. Grab Yours Today! 🎨✨"
        }
      />

      <Box>
        <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px]">
          <Box className="pt-[15px]">
            <Breadcrumb
              data={[
                { name: "Home", path: "/" },
                { name: "Templates", current: true },
              ]}
            />
          </Box>

          <Box
            sx={{
              background:
                "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
              display: "flex",
              alignItems: "center",
              margin: "10px auto",
              width: "100%",
              overflow: "hidden",
            }}
            className="lg:pl-[80px]  max-lg:px-[20px] h-auto max-lg:py-[50px] max-sm:py-[20px] rounded-[8px]"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "10px 0",
              }}
              className="w-full lg:w-[57%] max-lg:items-center "
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  width: "100%",
                  fontWeight: "500",
                  lineHeight: "40px",
                }}
                className="max-lg:text-center text-[20px] sm:text-[40px]"
                variant="h1"
              >
                Latest Templates For You
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#ffff",
                  width: "100%",
                  marginBottom: "10px",
                }}
                className="max-lg:text-center max-sm:text-[14px]"
              >
                Explore graphic design with the latest templates using this
                powerful tool, unleashing your creativity effortlessly. Elevate
                your designs with ease and stay ahead in the world of visual
                aesthetics
              </Typography>
            </Box>
            <Box
              sx={{
                width: "43%",
                alignItems: "center",
                justifyContent: "end",
              }}
              className="hidden lg:flex"
            >
              <Box sx={{ width: "400px" }}>
                <img
                  src={`${assetsUrl}/w_assets/images/categoryBanner.png`}
                  alt=" Latest Free Templates For You"
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingRight: "0px",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box className="min-h-[800px]">
            <StackGrid
              columnWidth={screenWidth / multiSizeFixSize}
              duration={0}
            >
              {data?.map((templates, index) => (
                <ImageBox
                  key={index}
                  templates={templates}
                  screenWidth={screenWidth}
                  multiSizeFixSize={multiSizeFixSize}
                  setIdName={setIdName}
                  setOpenModal={setOpenModal}
                />
              ))}
            </StackGrid>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px 0",
              }}
            >
              {loadMore ? (
                <Box className="text_linear font-[700 text-[20px]">
                  Loading....
                </Box>
              ) : (
                <Button
                  className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
                  sx={{ display: isLastPage ? "none" : "block" }}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  LOAD MORE
                </Button>
              )}
            </div>
          </Box>
        </Box>
        <div>
          <Box className="py-[70px] px-[15px]">
            <Typography
              variant="h2"
              className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
            >
              How To Edit Template With Crafty Art?
            </Typography>

            <Typography className="text-center md:w-[70%] mx-auto">
              Transform templates effortlessly with Crafty Art: Simply open,
              customize, and save. Intuitive tools make editing a breeze for
              stunning results!"
            </Typography>

            <Box className="flex justify-center gap-5 py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
              <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-center">
                <img
                  src={`${assetsUrl}/w_assets/images/category/makeFlyer.png`}
                  alt={"flyer template"}
                  className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
                />
              </Box>
              <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
                {howMakeTemplate?.map((item, index) => (
                  <Box className="flex gap-3 mb-5" key={index}>
                    <Box className="bg-[#EDF0F9] h-[38px] w-[40px] rounded-full flex justify-center items-center">
                      {index + 1}
                    </Box>

                    <Typography className="w-fit text-[15px] font-medium">
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className="pt-[50px]  bg-[#F4F7FE]">
            <Typography
              variant="h2"
              className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 "
            >
              Explore Our Categories
            </Typography>

            <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
              <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Invitation Templates
                  </Typography>
                  <Typography className="font-medium">
                    Discover a variety of stunning invitation templates perfect
                    for any occasion. Easy to customize and download.
                  </Typography>
                </Box>
                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Business Card Designs
                  </Typography>
                  <Typography className="font-medium">
                    Professional and eye-catching business card designs that
                    leave a lasting impression. Customizable and print-ready.
                  </Typography>
                </Box>

                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Social Media Graphics
                  </Typography>
                  <Typography className="font-medium">
                    Enhance your online presence with our trendy and engaging
                    social media graphics. Tailored for all platforms.
                  </Typography>
                </Box>

                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Logo Designs
                  </Typography>
                  <Typography className="font-medium">
                    Get a unique and memorable logo design for your brand.
                    High-quality and customizable to fit your business identity.
                  </Typography>
                </Box>

                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Certificate Templates
                  </Typography>
                  <Typography className="font-medium">
                    Create professional certificates for achievements, events,
                    and more with our easy-to-customize templates.
                  </Typography>
                </Box>
              </Box>
              <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
                <img
                  src={`${assetsUrl}/w_assets/images/flyerC/img2.png`}
                  alt={"Logo Maker"}
                  className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
                />
              </Box>
            </Box>
          </Box>

          <Box className="pt-[10px]">
          <Typography
              variant="h2"
              className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 pt-5"
            >
              Why Choose Our Templates Design?
            </Typography>
            <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
              <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
                <img
                  src={`${assetsUrl}/w_assets/images/flyerC/img1.png`}
                  alt={"Logo Maker"}
                  className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
                />
              </Box>
              <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    High-Quality Designs
                  </Typography>
                  <Typography className="font-medium">
                    Experience top-notch quality in every template, crafted by
                    professional designers to ensure a polished and refined
                    look.
                  </Typography>
                </Box>
                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Easy Customization
                  </Typography>
                  <Typography className="font-medium">
                    Our templates are user-friendly and easily customizable,
                    allowing you to tailor each design to your specific needs
                    and preferences.
                  </Typography>
                </Box>

                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Wide Variety of Options
                  </Typography>
                  <Typography className="font-medium">
                    Choose from a vast collection of templates for various
                    occasions, ensuring you find the perfect match for your
                    project.
                  </Typography>
                </Box>

                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Affordable Pricing
                  </Typography>
                  <Typography className="font-medium">
                    Enjoy premium designs at budget-friendly prices, making
                    professional-quality graphics accessible to everyone.
                  </Typography>
                </Box>

                <Box className="mb-5">
                  <Typography
                    className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                    variant="h3"
                  >
                    Time-Saving Solutions
                  </Typography>
                  <Typography className="font-medium">
                    Save time with ready-made templates that streamline your
                    design process, allowing you to focus on other important
                    tasks.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="pt-[70px] pb-[20px]  px-[20px]">
            <Typography
              variant="h2"
              className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4 "
            >
              What are Customers Saying about Crafty Art
            </Typography>
            <Typography className="text-center">
              Crafty Art has a proven track record of delivering efficiency,
              results and excellent customer service.
            </Typography>

            <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center ">
              <Box
                className="w-full bg-[#F4F7FE] p-[30px] h-full "
                sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
              >
                <Box className="flex items-center space-x-4 mb-2">
                  <Box
                    className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                    sx={{
                      backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/girl1.jpg)`,
                    }}
                  ></Box>
                  <Box className="font-medium  ">
                    <Box>Olivia Davis</Box>
                  </Box>
                </Box>
                <Rating name="read-only" value={5} readOnly />
                <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
                  “Crafty Art's custom invitations exceeded my expectations.
                  Their user-friendly graphics design tools made it easy to
                  create a unique design. The quality and design of invitation
                  card was outstanding, and their customer service was
                  top-notch. Quick delivery and attention to detail set Crafty
                  Art apart. They made my event extra special!,”
                </Typography>
              </Box>
              <Box
                className="w-full bg-[#F4F7FE] p-[30px] h-full "
                sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
              >
                <Box className="flex items-center space-x-4 mb-2">
                  <Box
                    className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                    sx={{
                      backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man3.jpg)`,
                    }}
                  ></Box>
                  <Box className="font-medium  ">
                    <Box>Ethan Wilson</Box>
                  </Box>
                </Box>
                <Rating name="read-only" value={5} readOnly />
                <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
                  “Crafty Art Graphic Design Tool has been a game-changer for my
                  design projects. Here a reasons why Crafty Art has earned my
                  trust and loyalty: User Feedback Integration, Cross-Platform
                  Compatibility, Time-Saving Features, Regular Content Updates,
                  Security and Privacy, Advanced Export Options and Many More…”
                </Typography>
              </Box>
              <Box
                className="w-full bg-[#F4F7FE] p-[30px] h-full "
                sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
              >
                <Box className="flex items-center space-x-4 mb-2">
                  <Box
                    className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                    sx={{
                      backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man2.jpg)`,
                    }}
                  ></Box>
                  <Box className="font-medium  ">
                    <Box>James Johnson</Box>
                  </Box>
                </Box>
                <Rating name="read-only" value={5} readOnly />
                <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
                  “Crafty Art is a fantastic online caricature tool for creating
                  unique invitations. Its user-friendly interface make easy to
                  design personalized caricatures that bring fun and humor in to
                  my event. With excellent customer support and quick delivery,
                  I prefer to design Caricature invitations with Crafty Art!,”
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className="bg-[#F4F7FE] py-[70px]">
            <Box
              sx={{
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                maxWidth: "1000px",
              }}
              className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px]  "
            >
              <QuestionsTitle
                text1={"Some Popular"}
                text2={"Questions/Answered"}
                text3=""
              />
              <Box sx={{ p: "20px" }}></Box>

              <FaqsBox
                heading=" What makes Crafty Art unique in graphic design?"
                text="Crafty Art is known for its innovative and creative approach, delivering personalized and high-quality designs."
              />

              <FaqsBox
                heading="  How does Crafty Art approach branding and logo design?"
                text="Crafty Art takes a strategic approach, considering brand identity, target audience, and market positioning to create impactful visuals."
              />
              <FaqsBox
                heading=" How can I get started with Crafty Art for my design needs?"
                text="To begin, contact Crafty Art through their Contact us page or provided contact information to Crafty Art and otherwise going to the custom order page for your special design need,"
              />

              <FaqsBox
                heading=" How does Crafty Art ensure client satisfaction?"
                text="Crafty Art prioritizes client satisfaction through open communication, thorough understanding of project requirements, and incorporating feedback at every stage."
              />

              <FaqsBox
                heading=" Can Crafty Art handle small and large-scale projects?"
                text="Yes, Crafty Art is equipped to handle projects of any size, from small social media graphics to comprehensive branding campaigns."
              />
            </Box>
          </Box>
        </div>
      </Box>

      <TemplateModal
        open={openModal}
        template={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />
    </>
  );
}
