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
        image={`${assetsUrl}/w_assets/haldi-ceremony/banner.png`}
        heading={"Haldi Ceremony Invitation: Celebrate with Us"}
        text="Create beautiful Haldi ceremony invitations with ease. Customize vibrant templates to reflect the joy and tradition of your special celebration."
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
                  name: "What is the significance of haldi in a traditional Indian wedding ceremony?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Haldi holds a special place in Indian weddings as it signifies purity, good luck, and blessings for the couple.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I incorporate my own photographs into the Haldi ceremony invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Adding personal photographs adds a heartfelt touch to your invitations, making them even more memorable.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customize the color palette of the Haldi ceremony invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can choose colors that resonate with your ceremony's theme and reflect your personal style.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any traditional symbols or motifs specific to Haldi ceremony invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, popular symbols include turmeric, marigold flowers, peacock feathers, and traditional patterns inspired by Indian culture.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Create Stunning Haldi Ceremony Invitations with Crafty Art"}
        text="Capture the Essence of Your Haldi Ceremony with Unique and Stylish Invitations"
        buttonName="Get Started"
        navigate="/s/haldi-ceremony"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/haldi-ceremony/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How can I design the perfect Haldi
        ceremony invitation that reflects
        the essence of the event?"
        point={
          <Box>
            <MarkText text="Explore vibrant color schemes to capture the festive spirit." />
            <MarkText text="Incorporate traditional motifs and symbols to honor cultural significance." />
            <MarkText text="Use playful and elegant fonts to convey the joyous atmosphere." />
            <MarkText text="Add images of turmeric or haldi to symbolize the traditional rituals." />
            <MarkText text="Experiment with different layouts to find the one that best suits your style." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Haldi-Ceremony"
        path="/s/haldi-ceremony"
        image={`${assetsUrl}/w_assets/haldi-ceremony/img1.png`}
      />

      <RightImageSection
        title="What are the essential steps to
        create a personalized Haldi
        ceremony invitation?"
        point={
          <Box>
            <MarkText text="Start by gathering inspiration from traditional Haldi ceremony elements." />
            <MarkText text="Choose a graphic design tool that offers customizable templates." />
            <MarkText text="Customize the invitation by adding relevant details such as names, date, and venue." />
            <MarkText text="Select a color palette that complements the overall theme of your ceremony." />
            <MarkText
              text="Incorporate personal touches like photos or illustrations that represent you and your
partner."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Haldi-Ceremony"
        path="/s/haldi-ceremony"
        image={`${assetsUrl}/w_assets/haldi-ceremony/img2.png`}
      />

      <LeftImageSection
        title="How can I ensure that my Haldi
        ceremony invitations stand out
        and leave a lasting impression?"
        point={
          <Box>
            <MarkText text="Opt for unique and eye-catching designs that set your invitations apart." />
            <MarkText text="Experiment with different paper textures or finishes for a tactile experience." />
            <MarkText text="Use high-quality images and graphics to enhance the overall visual appeal." />
            <MarkText text="Pay attention to typography and choose fonts that align with the theme and mood." />
            <MarkText text="Seek feedback from friends or family to ensure your design resonates with others." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Haldi-Ceremony"
        path="/s/haldi-ceremony"
        image={`${assetsUrl}/w_assets/haldi-ceremony/img3.png`}
      />

      <ExploreTemplates getAll={"/s/haldi-ceremony"} keyword="haldi " />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Dream Haldi Ceremony Invitation Today!"
        text="Haldi Ceremony Invitations - Human Attractive, Simple, Stylish, Best, and Unique."
        navigate="/s/haldi-ceremony"
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
          heading="1. What is the significance of haldi in a traditional Indian wedding ceremony?"
          text={
            <>
              Haldi holds a special place in Indian{" "}
              <FLink lk={`${domain}wedding`}>weddings</FLink> as it signifies
              purity, good luck, and blessings for the couple.
            </>
          }
        />

        <FaqsBox
          heading="2. Can I incorporate my own photographs into the Haldi ceremony invitations?"
          text={
            <>
              Absolutely! Adding personal photographs adds a heartfelt touch to
              your <FLink lk={`${domain}invitation`}>invitation</FLink>, making
              them even more memorable.
            </>
          }
        />
        <FaqsBox
          heading="3. Can I customize the color palette of the Haldi ceremony invitations?"
          text={
            <>
              Yes, you can choose colors that resonate with your ceremony's
              theme and reflect your personal style.
            </>
          }
        />

        <FaqsBox
          heading="4. Are there any traditional symbols or motifs specific to Haldi ceremony invitations?"
          text={
            <>
              Yes, popular symbols include turmeric, marigold flowers, peacock
              feathers, and traditional patterns inspired by Indian culture.
            </>
          }
        />
      </Box>
    </>
  );
}
