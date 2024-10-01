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
  return (
    <>
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
                  name: "Are there options for addressing and mailing the birth announcements directly from the website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! You can conveniently enter recipient addresses and have the announcements mailed directly to them.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of photo formats are supported for the birth announcement designs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform accepts various popular photo formats, including JPEG, PNG, and GIF.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Create Beautiful Birth Announcements with Our Graphic Design Tools"
        }
        text="Unleash Your Creativity and Share the Joy of Your New Arrival with Stunning
        Birth Announcements."
        buttonName="Get Started"
        navigate="/s/birth-announcement"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/birth-announcement/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How can I design a unique birth
        announcement that captures the
        essence of my baby's arrival?"
        point={
          <Box>
            <MarkText text="Choose from a variety of adorable templates." />
            <MarkText text="Personalise with your baby's name and photo." />
            <MarkText text="Customise colours, fonts, and layout." />
            <MarkText text="Add heartfelt messages and birth details." />
            <MarkText text="Preview and make adjustments until you're satisfied." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Birth-Announcement"
        path="/s/birth-announcement"
        image={`${assetsUrl}/w_assets/birth-announcement/img1.png`}
      />

      <RightImageSection
        title="What are the essential steps to
        create a stylish and professional
        birth announcement?"
        point={
          <Box>
            <MarkText text="Select a theme that matches your style." />
            <MarkText text="Pick a high-quality photo that showcases your little one." />
            <MarkText text="Write a captivating headline or introduction." />
            <MarkText text="Include all the vital information, such as birth date, weight, and length." />
            <MarkText text="Opt for premium paper and printing options for a polished finish." />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Birth-Announcement"
        path="/s/birth-announcement"
        image={`${assetsUrl}/w_assets/birth-announcement/img2.png`}
      />

      <LeftImageSection
        title="How can I make my baby's birth
        announcement stand out from the
        rest?"
        point={
          <Box>
            <MarkText text="Add unique embellishments like foil accents or embossed elements." />
            <MarkText text="Incorporate hand-drawn illustrations or custom artwork." />
            <MarkText text="Choose a distinct colour scheme that complements your baby's nursery." />
            <MarkText text="Experiment with different shapes and sizes for a modern touch." />
            <MarkText
              text="Consider using a special delivery method, such as sending them in a box or as a
keepsake item."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="Birth-Announcement"
        path="/s/birth-announcement"
        image={`${assetsUrl}/w_assets/birth-announcement/img3.png`}
      />

      <ExploreTemplates
        getAll={"/s/birth-announcement"}
        keyword="birth announcement"
      />

      <CustomerSaying />

      <GetTemplates
        heading="Create Magical Birth Announcements Today and Celebrate Your Bundle of Joy!"
        text="Unleash Your Imagination and Announce Your Baby's Arrival with our Simple, Stylish, and Unique Birth Announcements."
        navigate="/s/birth-announcement"
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
          heading="Are there options for addressing and mailing the birth announcements directly from the
          website?"
          text={
            <>
              Absolutely! You can conveniently enter recipient addresses and
              have the announcements mailed directly to them.
            </>
          }
        />

        <FaqsBox
          heading="What types of photo formats are supported for the birth announcement designs?"
          text={
            <>
              Our platform accepts various popular photo formats, including
              JPEG, PNG, and GIF.
            </>
          }
        />
      </Box>
    </>
  );
}
