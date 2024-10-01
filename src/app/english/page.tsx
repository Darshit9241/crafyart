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
        image={`${assetsUrl}/w_assets/english/banner.png`}
        heading={
          "Premium English Wedding Invitation Cards Templates | No1 Designs"
        }
        text="Get free English wedding invitation cards with customizable templates. Explore our range of elegant designs for your special day."
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
                  name: "Can I include the wedding dress code in my English wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it's recommended to mention the dress code on your wedding invitation, guiding guests on the appropriate attire for your special day.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I incorporate traditional English quotes or poetry in my wedding card?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Adding excerpts from famous English poets or quotes about love and marriage can add a touch of sophistication and literary charm to your wedding invitation.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Design Your Dream English Wedding Cards with Crafty Art"}
        text="Unleash Your Creativity and Craft Stunning English Wedding Invitations"
        buttonName="Get Started"
        navigate="/s/english"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/english/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="Design a Sophisticated English
        Wedding Card with Ease!"
        point={
          <Box>
            <MarkText
              text="Opt for classic and ornate designs featuring intricate patterns, lace motifs, and
floral elements."
            />
            <MarkText
              text="Choose a colour palette that reflects sophistication, such as ivory, champagne, or
pastel shades."
            />
            <MarkText
              text="Incorporate regal touches like metallic foiling, embossing, or laser-cut details for a
luxurious feel."
            />
            <MarkText
              text="Consider using traditional English typography styles to add a touch of elegance
and authenticity."
            />
            <MarkText
              text="Explore motifs inspired by English heritage, such as crowns, castles, roses, or
vintage tea sets."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="English"
        path="/s/english"
        image={`${assetsUrl}/w_assets/english/img1.png`}
      />

      <RightImageSection
        title="What are some popular English
        wedding card themes and styles?"
        point={
          <Box>
            <MarkText
              text="Romantic garden: Embrace floral illustrations, water colour details, and whimsical
fonts for a dreamy and enchanting look."
            />
            <MarkText
              text="Vintage elegance: Choose antique-inspired designs, delicate lace patterns, and
vintage typography for a timeless appeal."
            />
            <MarkText
              text="English countryside: Capture the rustic charm with nature-inspired motifs,
countryside landscapes, and earthy tones."
            />
            <MarkText
              text="Royal sophistication: Infuse regal elements like crests, monograms, and opulent
gold accents for a majestic and grand invitation."
            />
            <MarkText
              text="Modern chic: Opt for clean lines, minimalistic layout, and contemporary typography
for a sleek and sophisticated card."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="English"
        path="/s/english"
        image={`${assetsUrl}/w_assets/english/img2.png`}
      />

      <LeftImageSection
        title="How can I personalise my English
        wedding invitation to reflect my
        unique love story?"
        point={
          <Box>
            <MarkText
              text="Incorporate illustrations or icons that symbolise significant milestones or shared
interests as a couple."
            />
            <MarkText
              text="Include a custom monogram or emblem featuring your initials or a design that holds
personal meaning."
            />
            <MarkText
              text="Showcase your wedding venue or destination through a hand-drawn illustration or
an elegant map design."
            />
            <MarkText
              text="Add a heartfelt message or a love quote that resonates with your relationship and
sets the tone for your special day."
            />
            <MarkText
              text="Experiment with different fonts and typography styles to create a personalised and
stylish invitation."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="English"
        path="/s/english"
        image={`${assetsUrl}/w_assets/english/img3.png`}
      />

      <ExploreTemplates getAll={"/s/english"} keyword="english" />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Perfect English Wedding Invitations and Set the Stage
        for Your Unforgettable Day!"
        text="Elegant and Timeless Designs for Your English Wedding - Exquisite Cards that Reflect Your Love Svtory"
        navigate="/s/english"
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
          heading="Can I include the wedding dress code in my English wedding invitation?"
          text={
            <>
              Yes, it's recommended to mention the dress code on your wedding{" "}
              <FLink lk={`${domain}invitation`}>invitation.</FLink>, guiding
              guests on the appropriate attire for your special day.
            </>
          }
        />

        <FaqsBox
          heading="Can I incorporate traditional English quotes or poetry in my wedding card?"
          text={
            <>
              Absolutely! Adding excerpts from famous English poets or quotes
              about love and marriage can add a touch of sophistication and
              literary charm to your{" "}
              <FLink lk={`${domain}wedding`}>wedding</FLink> invitation.
            </>
          }
        />
      </Box>
    </>
  );
}
