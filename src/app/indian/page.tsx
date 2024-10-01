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
        image={`${assetsUrl}/w_assets/Indian/banner.png`}
        heading={
          "Best Indian Wedding Cards | Online Indian Wedding Invitations"
        }
        text="Discover latest Indian wedding cards online at Crafty Art. From Luxury Indian Marriage Card designs, find the best Indian wedding invitations for a special day."
      />

        <Box>
        <link rel="canonical" title={"Best Indian Wedding Cards | Online Indian Wedding Invitations"} href={`https://www.craftyartapp.com/indian`} />
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
                  name: "Can I customise the colors of my Indian wedding card design to match my wedding theme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our design tool allows you to choose from a wide range of colours and create a personalised colour palette.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it possible to include multiple languages on my Indian wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! Our customizable templates accommodate multiple languages, celebrating the diversity of your guests.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I add religious symbols or motifs specific to my Indian culture on the invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our design tool provides a variety of religious symbols and traditional motifs to help you personalise your invitation.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Create Exquisite Indian Wedding Cards with Our Graphic Design Tool"
        }
        text="Embrace the Beauty of Indian Traditions with Unforgettable Invitation Designs"
        buttonName="Get Started"
        navigate="/s/indian"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/indian/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to choose the perfect design for my Indian wedding card?"
        point={
          <Box>
            <MarkText text="Explore a rich collection of culturally-inspired templates for an authentic touch." />
            <MarkText text="Select colours that resonate with the vibrancy and significance of Indian traditions." />
            <MarkText text="Incorporate traditional motifs like paisleys, mehndi patterns, or mandalas to honour your heritage." />
            <MarkText text="Customise fonts and typography to reflect the style and theme of your wedding." />
            <MarkText text="Personalise your card with photos, illustrations, or quotes that capture your unique love story" />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/indian/img1.png`}
      />

      <RightImageSection
        title="What are the essential steps to
            personalise your Indian wedding
            invitation?"
        point={
          <Box>
            <MarkText text="Browse through our extensive range of customizable templates inspired by diverse Indian regions and customs." />
            <MarkText text="Tailor the text, fonts, and colours to align with your personal preferences and wedding theme." />
            <MarkText text="Include elements that showcase your cultural heritage, such as religious symbols or traditional designs." />
            <MarkText text="Experiment with layouts and arrangements to create a visually captivating and harmonious invitation." />
            <MarkText text="Preview and refine your customized design, ensuring it perfectly reflect your vision." />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/indian/img2.png`}
      />

      <LeftImageSection
        title="How can I ensure my Indian
                wedding card stands out from the
                rest?"
        point={
          <Box>
            <MarkText text="Infuse intricate embellishments like foil stamping, embossing, or laser-cut details for an opulent touch." />
            <MarkText text="Choose high-quality paper and finishes that exude elegance and luxury." />
            <MarkText text="Opt for unique presentation formats, such as scroll invitations or pocket-fold designs." />
            <MarkText text="Integrate digital elements like QR codes or augmented reality for a modern and interactive experience." />
            <MarkText text="Collaborate with our professional designers to create a bespoke design that captures your unique style." />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/indian/img3.png`}
      />

      <ExploreTemplates getAll={"/s/indian"} keyword="indian" />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Dream Indian Wedding Invitation Today and Embrace the
        Grandeur of Tradition!"
        text="Creating Exquisite Indian Wedding Invitations - Unforgettable Designs for Your Special Day!"
        navigate="/s/indian"
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
          heading="1. Can I customise the colors of my Indian wedding card design to match my wedding
          theme?"
          text={
            <>
              Absolutely! Our design tool allows you to choose from a wide range
              of colours and create a personalised colour palette.
            </>
          }
        />

        <FaqsBox
          heading="2. Is it possible to include multiple languages on my Indian wedding invitation?"
          text={
            <>
              Certainly! Our customizable{" "}
              <FLink lk={`${domain}templates`}>templates</FLink>
              accommodate multiple languages, celebrating the diversity of your
              guests.
            </>
          }
        />
        <FaqsBox
          heading="2. Is it possible to include multiple languages on my Indian wedding invitation?"
          text={
            <>
              Certainly! Our customizable{" "}
              <FLink lk={`${domain}templates`}>templates</FLink>
              accommodate multiple languages, celebrating the diversity of your
              guests.
            </>
          }
        />
        <FaqsBox
          heading="2. Is it possible to include multiple languages on my Indian wedding invitation?"
          text={
            <>
              Certainly! Our customizable{" "}
              <FLink lk={`${domain}templates`}>templates</FLink>
              accommodate multiple languages, celebrating the diversity of your
              guests.
            </>
          }
        />
      </Box>
    </>
  );
}
