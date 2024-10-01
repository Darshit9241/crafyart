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
        image={`${assetsUrl}/w_assets/tamil/banner.png`}
        heading={
          "Tamil Wedding Invitation Cards | Tamil, Telugu, Kannada Cards"
        }
        text="Elevate your Tamil wedding celebration with our stunning collection of Tamil wedding invitation cards. Discover the latest Tamil wedding card designs now!"
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
                  name: "Can I customise the colour palette of my Tamil wedding card design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our design experts can help you choose the perfect colours that match your wedding theme.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I include multiple languages on my Tamil wedding card?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! We offer bilingual or trilingual designs to accommodate your language preferences.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Exquisite Tamil Wedding Card Designs for Your Special Day"}
        text="Captivate Your Guests with Stunning Tamil Wedding Invitations "
        buttonName="Get Started"
        navigate="/s/tamil"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/tamil/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />
      {/* section 2 */}
      <LeftImageSection
        title="How to choose the perfect design
        for your Tamil wedding card?"
        point={
          <Box>
            <MarkText text="Explore traditional motifs with a modern twist." />
            <MarkText text="Opt for elegant typography that reflects your style." />
            <MarkText text="Incorporate vibrant colours that symbolise joy and celebration." />
            <MarkText text="Personalise your design with custom illustrations or photographs." />
            <MarkText text="Consider a blend of cultural elements to create a unique fusion." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Tamil"
        path="/s/tamil"
        image={`${assetsUrl}/w_assets/tamil/img1.png`}
      />
      {/* section 3 */}
      <RightImageSection
        title="Steps to Create a Memorable
        Tamil Wedding Invitation?"
        point={
          <Box>
            <MarkText text="Begin with selecting a captivating theme that resonates with your love story." />
            <MarkText text="Craft a heartfelt message that expresses your emotions and invites guests." />
            <MarkText text="Pay attention to the paper quality and texture for a luxurious feel." />
            <MarkText text="Choose complementary envelopes and add stylish seals for an elegant touch." />
            <MarkText text="Collaborate with a skilled graphic designer to bring your vision to life." />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Tamil"
        path="/s/tamil"
        image={`${assetsUrl}/w_assets/tamil/img2.png`}
      />
      {/* section 4 */}
      <LeftImageSection
        title="How to Make My Tamil Wedding
        Card Stand Out?"
        point={
          <Box>
            <MarkText text="Incorporate intricate and ornate patterns inspired by Tamil art and culture." />
            <MarkText text="Experiment with unconventional shapes and sizes for a unique presentation." />
            <MarkText text="Use gold or silver foil accents to add a touch of opulence." />
            <MarkText text="Include interactive elements like pull-out inserts or pop-up designs." />
            <MarkText text="Opt for high-quality printing techniques to enhance the overall aesthetics." />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="Tamil"
        path="/s/tamil"
        image={`${assetsUrl}/w_assets/tamil/img3.png`}
      />
      {/* section 5 */}
      <ExploreTemplates getAll={"/s/tamil"} keyword="tamil" />
      <CustomerSaying />
      {/* section 6 */}
      <GetTemplates
        heading="Design Your Dream Indian Wedding Invitation Today and Embrace the
        Grandeur of Tradition!"
        text="Creating Exquisite Indian Wedding Invitations - Unforgettable Designs for Your Special Day!"
        navigate="/s/tamil"
      />

      {/* section 7 */}

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
          heading="1. Can I customise the colour palette of my Tamil wedding card design?"
          text={
            <>
              Absolutely! Our design experts can help you choose the perfect
              colours that match your{" "}
              <FLink lk={`${domain}wedding`}>Wedding</FLink> theme.
            </>
          }
        />
        <FaqsBox
          heading="2. Can I include multiple languages on my Tamil wedding card?"
          text={
            <>
              Certainly! We offer bilingual or trilingual designs to accommodate
              your language preferences.
            </>
          }
        />
      </Box>
    </>
  );
}
