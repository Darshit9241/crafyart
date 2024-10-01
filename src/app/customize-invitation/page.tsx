"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { useRouter } from "next/navigation";
import Head from "next/head";
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
        image={`/images/ogImage.png`}
        heading={
          "Create Your Perfect Custom Invitation Templates"
        }
        text="Design an invitation with ease! Explore customized invitations for weddings, baby showers, graduations, and more. Create unique designs that reflect your style."
      />

<Box>
        <link
          rel="canonical"
          title={
            "Create Your Perfect Custom Invitation Templates"
          }
          href={`https://www.craftyartapp.com/customize-invitation`}
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
                  name: "How do I customize my invitations on your platform?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our user-friendly customization tool allows you to easily personalize your invitations. Simply choose a design, add your details, and customize elements such as colors and fonts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of events can I create customized invitations for?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform offers a wide range of design options suitable for various events. Whether it's a birthday, wedding, baby shower, bridal shower, or graduation, you can find customizable templates that fit the theme and mood of your celebration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any design limitations or restrictions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, there are no design limitations. Our customization tool is designed to give you the freedom to express your creativity. You can customize colors, fonts, and other details to match your unique style. Create invitations that reflect your personality without any constraints.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a cost for using the custom invitation maker on your website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, our custom invitation maker is free to use. You can explore the tool, try out different designs, and customize it to your heart's content without any charges. You only pay when you decide to order the final, printed invitations. Enjoy the freedom to design without breaking the bank.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <Box
        sx={{
          background: "#D9EEDE",
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
              Make Custom Invitations As You Want
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
              Create Stunning Invitations that Reflect Your Unique Perspective
            </Typography>

            {/* <Button
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
              }}
              className="bg_linear"
              onClick={() => router.push("/templates")}
            >
              Customize Your Invitation
            </Button> */}

            <Button
              style={{
                width: "fit-content",
                textTransform: "unset",
                boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.15)",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",
                cursor: "not-allowed",
                padding: "0",
              }}
              className="bg_linear"
              // onClick={() => {
              //   if (token) {
              //     router.push("/");
              //   } else router.push("/login");
              // }}
            >
              <a
                href={`${domain}templates/invitation`}
                style={{ padding: "8px 15px" }}
              >
                Create Now
              </a>
            </Button>
          </Box>
          <Box
            sx={{
              width: "43%",
              alignItems: "center",
              justifyContent: "end",
            }}
            className="hidden lg:flex"
          >
            <Box sx={{ width: "100%" }}>
              <img
                src={`${assetsUrl}/w_assets/images/customizeOrder/bannerSide.png`}
                alt="resumeBanner"
                style={{ width: "100%", height: "100%", paddingRight: "0px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How to order customize invitations
        using Crafty Art?"
        point={
          <Box>
            <MarkText text="Choose the Customize Invitation option from the main menu." />
            <MarkText text="Select the type of invitation you want to create (birthday, wedding, baby shower)." />
            <MarkText text="Use the design editor to customize the invitation's layout, colors, fonts, and graphics." />
            <MarkText text="Add personalized text and details to make the invitation unique." />
            <MarkText
              text="Once satisfied with the design, click on the Order Now button to finalize
your order and proceed to payment."
            />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side1.png`}
        alt="Customize invitation"
      />

      <RightImageSection
        title="Key benefits of using this feature
        for designing invitations."
        point={
          <Box>
            <MarkText
              text="Endless customization options allow you to create invitations that perfectly match
your event's theme and style."
            />
            <MarkText
              text="The intuitive design editor makes it easy to personalise every aspect of the
              invitation, even if you're not a professional graphic designer."
            />
            <MarkText
              text="You can choose from a wide range of templates and design elements to jumpstart
your creative process."
            />
            <MarkText
              text="Ordering through the graphic design tool ensures high-quality prints and
              professional results."
            />
            <MarkText
              text="The convenience of online ordering saves you time and effort compared to
              traditional printing methods."
            />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side2.png`}
        alt="Customize invitation"
      />

      <LeftImageSection
        title="Benefits of this feature for : "
        point={
          <Box>
            <MarkText
              text="Graphic Designers: This feature provides a convenient platform to showcase their
              design skills and offer customizable invitations to clients, expanding their service
              offeringsNavigate to the Custom Order feature on our website"
            />
            <MarkText
              text="Students: It offers an opportunity for students to practise their graphic design skills
              and create eye-catching invitations for various events and projects."
            />

            <MarkText
              text="Marketers: The customizable invitation feature allows marketers to design
              professional looking invitations for promotional events, product launches, or special
              campaigns, enhancing their brand image."
            />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side3.png`}
        alt="Customize invitation"
      />

      <WithCraftyartBanner />

      <LeftImageSection
        title="Customize Invitations for Every Occasion"
        point={
          <Box>
            <MarkText text="Tailor your event experience with personalized invitations." />
            <MarkText text="Explore options for birthdays, weddings, baby showers, graduations, and more." />
            <MarkText text="Create invitations that uniquely capture the essence of each celebration." />
            <MarkText text="Express your style through customizable designs." />
            <MarkText text="Enjoy the flexibility to match your invitations to the theme of your event." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side4.png`}
        alt="Customize invitation"
      />

      <RightImageSection
        title="Customized Invitations for Wedding Bliss
        "
        point={
          <Box>
            <MarkText text="Browse Crafty Art’s exquisite collection of customized wedding invitations." />
            <MarkText text="Reflect on the unique beauty of your love story through personalized designs." />
            <MarkText text="Choose from various themes and styles to set the perfect tone for your special day." />
            <MarkText text="Add a touch of sophistication with elegantly crafted wedding invitations." />
            <MarkText text="Guarantee your invitations become appreciated mementos for yourself as well as your visitors." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side5.png`}
        alt="Customize invitation"
      />

      <LeftImageSection
        title="Customized Invitations for Baby and Bridal Showers        "
        point={
          <Box>
            <MarkText text="Celebrate new beginnings with whimsical and customized baby shower invitations." />
            <MarkText text="Capture the joy of upcoming nuptials with charming bridal shower invitations." />
            <MarkText text="Choose designs that radiate happiness and anticipation for these special occasions." />
            <MarkText text="Customize every detail, from colors to wording, to match the theme of your event." />
            <MarkText text="Make your baby and bridal showers memorable with uniquely crafted invitations." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side6.png`}
        alt="Customize invitation"
      />

      <RightImageSection
        title="Custom Invitations for Your Milestone Achievement"
        point={
          <Box>
            <MarkText text="Commemorate your academic journey with custom graduation invitations." />
            <MarkText text="Reflect on your achievements with designs that capture the spirit of accomplishment." />
            <MarkText text="Choose personalized elements to make your graduation celebration truly unique." />
            <MarkText text="Create invitations that stand out and mark the significance of your milestone." />
            <MarkText text="Celebrate your educational journey with style through customized graduation invitations." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side7.png`}
        alt="Customize invitation"
      />

      <LeftImageSection
        title="Customize Invitations with Our User-Friendly Tool"
        point={
          <Box>
            <MarkText text="Design invitations effortlessly using our intuitive and user-friendly platform." />
            <MarkText text="Enjoy a seamless customization process without any design limitations." />
            <MarkText text="Express your creativity freely with our easy-to-use custom invitation tool." />
            <MarkText text="Customize invitations at your own pace with no hassle or learning curve." />
            <MarkText text="Experience the joy of designing invitations with the freedom to bring your ideas to life." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side8.png`}
        alt="Customize invitation"
      />

      <RightImageSection
        title="Custom Invitation Maker for Any Event "
        point={
          <Box>
            <MarkText text="Showcase your unique style and personality with a Crafty Art custom invitation maker." />
            <MarkText text="Create invitations that reflect your individuality and event theme seamlessly." />
            <MarkText text="Share your creations with friends and family to gather excitement for your event." />
            <MarkText text="Ensure your invitations leave a lasting impression with your distinct style." />
            <MarkText text="Use our custom invitation maker to make the process enjoyable and tailored to your preferences." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/customizeOrder/side9.png`}
        alt="Customize invitation"
      />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Design the Perfect Invitation, Your Way!"
        text="Craft Personalized Invitations Tailored to Your Vision"
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
          heading="How do I customize my invitations on your platform?"
          text={
            <>
              Our user-friendly customization tool allows you to easily
              personalize your{" "}
              <FLink lk={`${domain}invitation`}>invitations.</FLink> Simply
              choose a design, add your details, and customize elements such as
              colors and fonts.
            </>
          }
        />

        <FaqsBox
          heading="What types of events can I create customized invitations for?"
          text={
            <>
              Our platform offers a wide range of design options suitable for
              various events. Whether it's a birthday, wedding, baby shower,
              bridal shower, or graduation, you can find customizable templates
              that fit the theme and mood of your celebration.
            </>
          }
        />

        <FaqsBox
          heading="Are there any design limitations or restrictions?"
          text={
            <>
              No, there are no design limitations. Our customization tool is
              designed to give you the freedom to express your creativity. You
              can customize colors, fonts, and other details to match your
              unique style. Create invitations that reflect your personality
              without any constraints.
            </>
          }
        />

        <FaqsBox
          heading="Is there a cost for using the custom invitation maker on your website?"
          text={
            <>
              No, our custom invitation maker is free to use. You can explore
              the tool, try out different designs, and customize it to your
              heart's content without any charges. You only pay when you decide
              to order the final, printed invitations. Enjoy the freedom to
              design without breaking the bank.
            </>
          }
        />
      </Box>
    </div>
  );
}
