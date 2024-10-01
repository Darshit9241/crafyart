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
        image={`${assetsUrl}/w_assets/engagement-invitation/banner.png`}
        heading={"Engagement Invitation: Your Key to Unforgettable Moments"}
        text="Create elegant engagement invitations with ease. Customize stylish templates to reflect your unique celebration and make your special moment truly memorable."
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
                  name: "Can I personalise my engagement invitations with photos and messages?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Add a personal touch by incorporating your favourite photos and heartfelt messages into your engagement invitations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any design limitations or restrictions for engagement invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Not at all! Our design tools offer limitless possibilities, allowing you to unleash your creativity and design invitations that reflect your unique style.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
       <GetStartedLinearBanner
        heading={
          "Design Stunning Engagement Invitations to Celebrate Your Love Story"
        }
        text="Crafting Unforgettable Engagement Party Invitations: Ignite the Celebration of a Lifetime."
        buttonName="Get Started"
        navigate="/s/engagement"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/engagement-invitation/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

 
      <LeftImageSection
        title="How to choose the perfect design
        for my wedding save the dates?"
        point={
          <Box>
            <MarkText
              text="Explore a vast collection of captivating templates designed exclusively for
engagements."
            />
            <MarkText
              text="Personalise your invitations with cherished photos and heartfelt messages,
capturing the essence of your love."
            />
            <MarkText
              text="Personalise your invitations with cherished photos and heartfelt messages,
capturing the essence of your love."
            />
            <MarkText
              text="Embrace themes and motifs that symbolise your unique relationship and the joy of
your upcoming union."
            />
            <MarkText
              text="Reflect your personal style and taste by selecting a design that resonates with your
vision."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Engagement-Invitation"
        path="/s/engagement"
        image={`${assetsUrl}/w_assets/engagement-invitation/img1.png`}
      />

 
      <RightImageSection
        title="What are the essential steps to
        creating remarkable engagement
        invitations?"
        point={
          <Box>
            <MarkText text="Define your engagement party theme and select a color palette that sets the mood." />
            <MarkText text="Utilise a professional graphic design tool to bring your vision to life with precision." />
            <MarkText text="Customise the wording to convey the significance of this momentous occasion." />
            <MarkText text="Experiment with fonts, layouts, and graphics to achieve an invitation that stand out." />
            <MarkText
              text="Review and finalise your design, ensuring every detail aligns with your desired
aesthetic."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Engagement-Invitation"
        path="/s/engagement"
        image={`${assetsUrl}/w_assets/engagement-invitation/img2.png`}
      />

       <LeftImageSection
        title="How can I make my engagement
        invitations stand out and leave a
        lasting impression?"
        point={
          <Box>
            <MarkText text="Opt for premium paper and finishes, adding a touch of elegance and sophistication." />
            <MarkText
              text="Incorporate eye-catching embellishments such as foiling, embossing, or delicate
laser-cut details."
            />
            <MarkText
              text="Showcase your love and excitement by featuring engagement photos or a collage
of cherished moments."
            />
            <MarkText
              text="Explore unique formats like pocket-style invitations or interactive elements that
captivate your guests."
            />
            <MarkText
              text="Craft a personalised message or quote that encapsulates the love and joy
surrounding your engagement."
            />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Engagement-Invitation"
        path="/s/engagement"
        image={`${assetsUrl}/w_assets/engagement-invitation/img3.png`}
      />

      {/* section 5 */}

      <ExploreTemplates
        getAll={"/s/engagement-invitation"}
        keyword="engagement"
      />

      <CustomerSaying />

      {/* section 6 */}
      <GetTemplates
        heading="Spark the Celebration with Exquisite Engagement Invitations – Start Designing Now!"
        text="Unleash the Beauty of Love: Design Simple, Stylish, and Unique Engagement Invitations with Ease!"
        navigate="/s/engagement"
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
          heading="1. Can I personalise my engagement invitations with photos and messages?"
          text={
            <>
              Absolutely! Add a personal touch by incorporating your favourite
              photos and heartfelt messages into your{" "}
              <FLink lk={`${domain}s/engagement`}>engagement</FLink>{" "}
              invitations.
            </>
          }
        />

        <FaqsBox
          heading="2. Are there any design limitations or restrictions for engagement invitations?"
          text={
            <>
              Not at all! Our design tools offer limitless possibilities,
              allowing you to unleash your creativity and design{" "}
              <FLink lk={`${domain}invitation`}>invitations</FLink>
              that reflect your unique style.
            </>
          }
        />
      </Box>
    </>
  );
}
