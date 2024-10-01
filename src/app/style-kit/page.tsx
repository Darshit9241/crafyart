"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);
const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);
const LeftImageSection = dynamic(
  () => import("../wedding/components/LeftImageSection")
);
const RightImageSection = dynamic(
  () => import("../wedding/components/RightImageSection")
);
const FLink = dynamic(() => import("@/src/components/common/FLink"));

const WithCraftyartBanner = dynamic(
  () => import("@/src/components/common/WithCraftyartBanner")
);
const CustomerSayingSmall = dynamic(
  () => import("@/src/components/common/CustomerSayingSmall")
);

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <div>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/marketingCatching.png`}
        heading="Style Kit - Modern & Versatile Graphic Design Styles | Crafty Art App"
        text="Discover graphic design tool's comprehensive style kit, curated with versatile color palettes, elegant typography, and cohesive design elements."
      />

      <Box>
        <link
          rel="canonical"
          title={
            "Style Kit - Modern & Versatile Graphic Design Styles | Crafty Art App"
          }
          href={`https://www.craftyartapp.com/style-kit`}
        />
      </Box>

      <Box
        sx={{
          background: "#BEE1BF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px auto",
            width: "100%",
            overflow: "hidden",
          }}
          className="lg:pl-[150px]  max-lg:px-[20px] h-auto sm:h-[420px] max-sm:py-[50px] max-w-[2400px]"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
            className="w-full lg:w-[57%] max-lg:items-center "
          >
            <Typography
              sx={{
                color: "#000",
                width: "100%",
                fontWeight: "600",
                lineHeight: "48px",
              }}
              className="max-lg:text-center text-[30px] sm:text-[40px]"
              variant="h1"
            >
              Effortless Design: Create Pro Designs with Style Kit!
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                color: "#000",
                width: "100%",
                fontWeight: "500",
              }}
              className="max-lg:text-center"
            >
              The Power of Set-and-Forget Fonts and Colors for Stunning
              Templates
            </Typography>

            <Button
              style={{
                width: "fit-content",
                textTransform: "unset",
                boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.15)",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",
                cursor: "not-allowed",
              }}
              className="bg_linear"
              // onClick={() => {
              //   if (token) {
              //     router.push("/");
              //   } else router.push("/login");
              // }}
            >
              Coming Soon
            </Button>
          </Box>
          <Box
            sx={{
              width: "43%",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="hidden lg:flex"
          >
            <img
              src={`${assetsUrl}/w_assets/images/styleKit/bannerSide.png`}
              alt="Effortless Design: Create Pro Designs with Style Kit!"
              style={{ width: "70%", height: "auto", paddingRight: "0px" }}
            />
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How does the Style Kit feature
        work?"
        point={
          <Box>
            <MarkText
              text="Style Kit is a feature that allows you to create a set of predefined brand elements,
              including colours and fonts, to use across multiple designs."
            />
            <MarkText
              text="Once you set up your Style Kit, you can easily apply it to any design to ensure
              consistency in branding."
            />
            <MarkText
              text="This feature saves time and effort by eliminating the need to manually select brand
              elements for every design."
            />
          </Box>
        }
        alt="Style Kit"
        image={`${assetsUrl}/w_assets/images/styleKit/side1.png`}
      />

      <RightImageSection
        title="How can Style Kit benefit graphic
        designers?"
        point={
          <Box>
            <MarkText
              text="Style Kit enables graphic designers to streamline their design process and increase
              efficiency."
            />
            <MarkText
              text="It allows them to focus on the creative aspects of the design instead of spending
              time on repetitive tasks like selecting brand elements."
            />
            <MarkText
              text="With Style Kit, graphic designers can maintain consistency across designs, which is
              important for building a strong brand identity."
            />
          </Box>
        }
        alt="Style Kit"
        image={`${assetsUrl}/w_assets/images/styleKit/side2.png`}
      />

      <LeftImageSection
        title="How can Style Kit be useful for
        students and marketers?"
        point={
          <Box>
            <MarkText
              text="Style Kit provides a simple solution for students and marketers who may not have
              experience in design but still want to create professional-looking designs."
            />
            <MarkText
              text="It helps them to easily incorporate brand elements like colours and fonts, which are
              important for brand recognition."
            />

            <MarkText
              text="By using Style Kit, students and marketers can ensure consistency in their designs
              and establish a strong brand identity."
            />
          </Box>
        }
        alt="Style Kit"
        image={`${assetsUrl}/w_assets/images/styleKit/side3.png`}
      />

      <WithCraftyartBanner />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Take Your Designs to the Next Level with Style Kit - Start Creating Now!"
        text="Make Design with Predetermined Colours and Fonts"
        bt_name="Coming Soon"
      />

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] my-[30px] lg:my-[100px]"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>

        <FaqsBox
          heading="1. Can I customise my Style Kit?"
          text={
            <>
              Yes, you can customise your{" "}
              <FLink lk={`${domain}style-kit`}>Style Kit</FLink> by selecting
              specific brand elements like colours and fonts.
            </>
          }
        />
        <FaqsBox
          heading="2. Is Style Kit available on all graphic design tools?"
          text={
            <>
              No, Style Kit may not be available on all graphic design tools.
              However, many popular tools offer similar features for creating
              brand consistency.
            </>
          }
        />

        <FaqsBox
          heading="3. Can I apply Style Kit to existing designs?"
          text={
            <>
              Yes, you can apply Style Kit to existing designs to ensure
              consistency in branding.
            </>
          }
        />

        <FaqsBox
          heading="4. Do I need design experience to use Style Kit?"
          text={
            <>
              No, you do not need design experience to use Style Kit. It is a
              simple and intuitive feature that can be used by anyone.
            </>
          }
        />

        <FaqsBox
          heading="5. Can Style Kit help me save time in my design process?"
          text={
            <>
              Yes, Style Kit can help you save time by eliminating the need to
              manually select brand elements for each design.
            </>
          }
        />
      </Box>
    </div>
  );
}
