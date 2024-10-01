"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

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
const CustomerSayingSmall = dynamic(
  () => import("@/src/components/common/CustomerSayingSmall")
);
const WithCraftyartBanner = dynamic(
  () => import("@/src/components/common/WithCraftyartBanner")
);

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <div>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/brand/bannerSide.png`}
        heading={
          "Elevate your brand with a comprehensive brand kit. Explore the tools to establish a distinct and memorable identity."
        }
        text="Elevate your brand with a comprehensive Brand Kit. Unify your identity, logo, fonts, colors, and more in a powerful package. Enhance recognition and credibility effortlessly."
      />

      <Box>
        <link
          rel="canonical"
          title={
            "Elevate your brand with a comprehensive brand kit. Explore the tools to establish a distinct and memorable identity."
          }
          href={`https://www.craftyartapp.com/brand-kit`}
        />
      </Box>

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes the Brand Kit feature unique compared to other design tools?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Brand Kit automates formatting of your brand assets for consistency and saves time. You can easily update brand assets in one centralised location.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customise my Brand Kit settings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can add or remove brand assets to tailor to your specific needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the Brand Kit feature benefit marketers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ensures consistency across marketing materials and saves time. Allows marketers to focus on the creative aspects of their designs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will the Brand Kit feature work with any design template?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it's designed to work with any design template for consistency and to save time.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <Box
        sx={{
          background: "#DDD7FD",
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
            className="w-full lg:w-[57%] max-lg:items-center max-w-[2400px]"
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
              Boost your Productivity with the Brand Kit feature{" "}
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
              Create professional designs in minutes with efficient template
              editing{" "}
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
            className="hidden lg:flex "
          >
            <img
              src={`${assetsUrl}/w_assets/images/brand/bannerSide.png`}
              alt="resumeBanner"
              style={{ width: "70%", height: "auto", paddingRight: "0px" }}
            />
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How does the Brand Kit feature
        work?"
        point={
          <Box>
            <MarkText
              text="The Brand Kit feature provides a centralised location to manage your brand assets,
such as logos, fonts, and colours."
            />
            <MarkText
              text="When editing a template, simply add your brand assets to the design, and the Brand 
Kit will automatically arrange text according to your chosen font and color scheme."
            />
            <MarkText
              text="This feature ensures consistency across all your designs and saves you time by
eliminating the need to manually format each text box."
            />
          </Box>
        }
        alt="Brand Kit"
        image={`${assetsUrl}/w_assets/images/brand/side1.png`}
      />

      <RightImageSection
        title="What are the benefits of using the
        Brand Kit feature?"
        point={
          <Box>
            <MarkText
              text="The Brand Kit feature streamlines your design process, allowing you to quickly
create high-quality designs without the hassle of manual formatting."
            />
            <MarkText
              text="It ensures brand consistency across all your designs, which is crucial for building a
strong brand identity."
            />
            <MarkText
              text="You can easily update your brand assets in the Brand Kit, and all designs using
those assets will automatically update, saving you even more time."
            />
          </Box>
        }
        alt="Brand Kit"
        image={`${assetsUrl}/w_assets/images/brand/side2.png`}
      />

      <LeftImageSection
        title="How can the Brand Kit feature
        improve my design workflow?"
        point={
          <Box>
            <MarkText
              text="The Brand Kit feature eliminates the need for manual formatting, allowing you to
focus on the creative aspects of your design."
            />
            <MarkText
              text="It saves you time by automating the process of arranging text boxes and ensuring
brand consistency."
            />
            <MarkText
              text="You can easily create new designs or update existing ones with your brand assets,
which helps to maintain a consistent brand identity."
            />
          </Box>
        }
        alt="Brand Kit"
        image={`${assetsUrl}/w_assets/images/brand/side3.png`}
      />

      <WithCraftyartBanner />

      <LeftImageSection
        title="Why Use Crafty Art’s Brand Kit?"
        point={
          <Box>
            <MarkText
              text="Unified Visual Elements : 
Create a cohesive brand identity with customizable logos, colors, and fonts for a consistent look and feel."
            />

            <MarkText
              text="Brand Guidelines & Usage : 
Access clear guidelines ensuring consistent brand representation across all channels and materials."
            />

            <MarkText
              text="Asset Repository & Management : 
Centralize and manage all brand assets efficiently, ensuring easy access and maintenance."
            />

            <MarkText
              text="Customizable Templates : 
Utilize ready-to-use templates for social media, presentations, and more, aligning with your brand's aesthetics effortlessly."
            />

            <MarkText
              text="Collaboration & Sharing : 
Foster collaboration among teams and seamlessly share brand assets for unified brand communication."
            />
          </Box>
        }
        alt="Brand Kit"
        image={`${assetsUrl}/w_assets/images/brand/side4.png`}
      />

      <RightImageSection
        title="Features Of Crafty Art Brand Kit."
        point={
          <Box>
            <MarkText text="Unified Visual Identity: Create a cohesive brand presence with logo variations, color palettes, and typography that reflect your essence." />
            <MarkText text="Consistent Branding Elements: Ensure consistency across platforms with standardized templates for social media, business cards, presentations, and more." />
            <MarkText text="Brand Guidelines and Documentation: Receive comprehensive guidelines outlining logo usage, color codes, and design specifications for seamless communication of your brand's essence." />
            <MarkText text="Customizable Assets: Access a suite of customizable design elements like icons, patterns, and graphics tailored to your brand's needs." />
            <MarkText text="Brand Package Delivery: Receive a curated package of digital assets and files optimized for various platforms and applications." />
          </Box>
        }
        alt="Brand Kit"
        image={`${assetsUrl}/w_assets/images/brand/side5.png`}
      />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Streamline your design process with the efficient editing power of Brand Kit"
        text="The unique and stylish tool for effortless design creation"
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
          heading="What makes the Brand Kit feature unique compared to other design tools?"
          text={
            <>
              The <FLink lk={`${domain}brand-kit`}>Brand Kit</FLink> automates
              formatting of your brand assets for consistency and saves time.
              You can easily update brand assets in one centralised location.
            </>
          }
        />
        <FaqsBox
          heading="Can I customise my Brand Kit settings?"
          text={
            <>
              Yes, you can add or remove brand assets to tailor to your specific
              needs.
            </>
          }
        />

        <FaqsBox
          heading="How does the Brand Kit feature benefit marketers?"
          text={
            <>
              Ensures consistency across{" "}
              <FLink lk={`${domain}marketing`}>marketing</FLink> materials and
              saves time. Allows marketers to focus on the creative aspects of
              their designs.
            </>
          }
        />

        <FaqsBox
          heading="Will the Brand Kit feature work with any design template?"
          text={
            <>
              Yes, it's designed to work with any design template for
              consistency and to save time.
            </>
          }
        />
      </Box>
    </div>
  );
}
