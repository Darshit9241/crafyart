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
        image={`${assetsUrl}/w_assets/pragnancy-announcement/banner.png`}
        heading={
          "Creative Pregnancy Announcement Templates for Your Special News"
        }
        text="Discover charming pregnancy announcement templates & cards. Share your joy with loved ones using our elegant designs. Perfect for your special news!"
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
                  name: "What are popular pregnancy announcement ideas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Include siblings or pets in announcement photos or videos. Create a creative countdown series of images.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I make my pregnancy announcement stand out on social media?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Craft catchy captions to accompany your announcement. Engage your audience by inviting guesses or sharing a short video.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Pregnancy Announcement Ideas: A Creative Approach"}
        text="Unique Pregnancy Announcement Ideas to Celebrate Your Joyful News."
        buttonName="Get Started"
        navigate="/s/pregnancy-announcement"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/pragnancy-announcement/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      {/* section 2 */}

      <LeftImageSection
        title="How can I make my pregnancy
        announcement special and unique?"
        point={
          <Box>
            <MarkText text="Involve your partner for a genuine and memorable surprise." />
            <MarkText text="Create a photo collage showcasing your journey to pregnancy." />
            <MarkText text="Make personalised handcrafted gifts or DIY cards." />
            <MarkText text="Send a surprise delivery with a thoughtful message or ultrasound image." />
            <MarkText text="Choose a significant date or occasion to reveal the news for added excitement." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Pregnancy-Announcement"
        path="/s/pregnancy-announcement"
        image={`${assetsUrl}/w_assets/pragnancy-announcement/img1.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="Types of  templates for pregnancy
        announcements"
        point={
          <Box>
            <MarkText
              text="Social media templates: Eye-catching and customizable templates for Instagram
and Facebook."
            />
            <MarkText
              text="Photo collage templates: Showcasing multiple pregnancy photos or special
moments."
            />
            <MarkText text="Typography templates: Adding meaningful quotes or baby-related words." />
            <MarkText text="Illustration templates: Cute and playful illustrations like baby icons or animals." />
            <MarkText
              text="Customizable card templates: Ready-made cards for personalising with photos and
messages."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Pregnancy-Announcement"
        path="/s/pregnancy-announcement"
        image={`${assetsUrl}/w_assets/pragnancy-announcement/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="How to design memorable pregna
        ncy announcement templates?"
        point={
          <Box>
            <MarkText text="Explore popular graphic design tools like Crafty Art, Adobe Photoshop, or Illustrator." />
            <MarkText
              text="Customise chosen templates by adding photos, text, and colours to match your
desired style."
            />
            <MarkText text="Experiment with different layouts, such as grid-based or collage-style designs." />
            <MarkText
              text="Incorporate relevant graphics or illustrations like baby footprints or gender reveal
elements."
            />
            <MarkText
              text="Pay attention to typography, choosing legible fonts that complement the overall
design."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="Pregnancy-Announcement"
        path="/s/pregnancy-announcement"
        image={`${assetsUrl}/w_assets/pragnancy-announcement/img3.png`}
      />

      {/* section 5 */}

      <ExploreTemplates
        getAll={"/s/pragnancy-announcement"}
        keyword="pragnancy announcement"
      />

      <CustomerSaying />

      {/* section 6 */}
      <GetTemplates
        heading="Design Your Perfect Pregnancy Announcement Today!"
        text="Celebrate Your Joyful News with Simple, Stylish, and Unique Pregnancy Announcement Ideas"
        navigate="/s/pregnancy-announcement"
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
          heading="1. What are popular pregnancy announcement ideas?"
          text={
            <>
              Include siblings or pets in announcement photos or videos. Create
              a creative countdown series of images.
            </>
          }
        />

        <FaqsBox
          heading="2. How can I make my pregnancy announcement stand out on social media?"
          text={
            <>
              Craft catchy captions to accompany your announcement. Engage your
              audience by <FLink lk={`${domain}invitation`}>inviting</FLink>{" "}
              guesses or sharing a short video.
            </>
          }
        />
      </Box>
    </>
  );
}
