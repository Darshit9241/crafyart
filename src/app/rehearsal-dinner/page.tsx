"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);

const LeftImageSection = dynamic(
  () => import("../wedding/components/LeftImageSection")
);

const RightImageSection = dynamic(
  () => import("../wedding/components/RightImageSection")
);

const ExploreTemplates = dynamic(
  () => import("@/src/components/common/ExploreTemplates")
);

const CustomerSaying = dynamic(
  () =>
    import(
      "@/src/components/Home/landingPage/landingPageComponents/CustomerSaying"
    )
);

const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);

const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));

const FLink = dynamic(() => import("@/src/components/common/FLink"));

const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);

export default function page() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/rehearsal-dinner-invitation/banner.png`}
        heading={"Personalized Rehearsal Dinner Invitations"}
        text="Create memorable rehearsal dinner invitations with our customizable templates. Easily design and personalize your invites to perfectly match your wedding theme."
      />

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
                  name: "Can I include additional information, such as a dress code or menu options, on my rehearsal dinner invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! You can include any relevant information to provide your guests with all the necessary details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it possible to match the colour scheme of my rehearsal dinner invitations to my wedding colours?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can choose from a wide range of colour options to match your rehearsal dinner invitations to your wedding colour scheme.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Unforgettable Rehearsal Dinner Invitations that Set the Stage"
        }
        text="Design Personalized and Stylish Rehearsal Dinner Invites with Ease"
        buttonName="Get Started"
        navigate="/s/rehearsal-dinner"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/rehearsal-dinner-invitation/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="Choosing the Perfect Design:"
        point={
          <Box>
            <MarkText
              text="Reflect your theme: Select a design that matches your rehearsal dinner's theme
and ambiance."
            />
            <MarkText
              text="Coordinate with wedding invites: Ensure design elements align with your wedding
invitations for a cohesive look."
            />
            <MarkText
              text="Personalise the details: Add names, date, venue, and relevant information to make
the invitations unique."
            />
            <MarkText
              text="Consider the tone: Decide on a formal, casual, or themed style that suits your
desired atmosphere."
            />
            <MarkText
              text="Incorporate visual elements: Use imagery or graphics that represent the location or
theme."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Rehearsal-Dinner-Invitation"
        path="/s/rehearsal-dinner"
        image={`${assetsUrl}/w_assets/rehearsal-dinner-invitation/img1.png`}
      />

      <RightImageSection
        title="Ordering Process:"
        point={
          <Box>
            <MarkText text="Browse designs: Explore pre-designed templates or create a custom design." />
            <MarkText text="Customise details: Input event-specific information into the template." />
            <MarkText text="Choose paper and finishes: Select quality, colour, and finishes for a polished look." />
            <MarkText text="Review and proofread: Double-check all details and review the digital proof." />
            <MarkText
              text="Place the order: Add invitations to your cart, provide shipping/payment information,
and complete the purchase."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Rehearsal-Dinner-Invitation"
        path="/s/rehearsal-dinner"
        image={`${assetsUrl}/w_assets/rehearsal-dinner-invitation/img2.png`}
      />

      <LeftImageSection
        title="Making Invitations Stand Out:"
        point={
          <Box>
            <MarkText text="Add a personal touch: Include a meaningful photo or symbol." />
            <MarkText text="Unique format or shape: Consider non-traditional formats or die-cut shapes.." />
            <MarkText text="Embellishments and textures: Use ribbons, foiling, or textured paper." />
            <MarkText text="Handwritten or calligraphic fonts: Choose elegant and artistic fonts." />
            <MarkText text="Custom envelope design: Design envelopes that match the style of your invitations." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Rehearsal-Dinner-Invitation"
        path="/s/rehearsal-dinner"
        image={`${assetsUrl}/w_assets/rehearsal-dinner-invitation/img3.png`}
      />

      <ExploreTemplates
        getAll={"/s/rehearsal-dinner"}
        keyword="rehearsal dinner"
      />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Perfect Rehearsal Dinner Invitations Today!"
        text="Elevate Your Rehearsal Dinner with Stylish and Personalised Invitations"
        navigate="/s/rehearsal-dinner"
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
          heading="1. Can I include additional information, such as a dress code or menu options, on my
          rehearsal dinner invitations?"
          text={
            <>
              Absolutely! You can include any relevant information to provide
              your guests with all the necessary details.
            </>
          }
        />

        <FaqsBox
          heading="2. Is it possible to match the colour scheme of my rehearsal dinner invitations to my
          wedding colours?"
          text={
            <>
              Yes, you can choose from a wide range of colour options to match
              your rehearsal dinner{" "}
              <FLink lk={`${domain}invitation`}>invitations</FLink> to your
              wedding colour scheme.
            </>
          }
        />
      </Box>
    </>
  );
}
