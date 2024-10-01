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
        image={`${assetsUrl}/w_assets/christian/banner.png`}
        heading={"100+ Christian Wedding Invitations | Christian Wedding Cards"}
        text="Explore the largest collection of Christian wedding invitation cards online and Celebrate your dream day with 100+ Christian wedding cards designs. Explore Now!"
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
                  name: "What is the significance of the Unity Candle ceremony in a Christian wedding?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Unity Candle ceremony symbolises the joining of two families and the unity of the couple. During the ceremony, the couple lights a single candle together, representing their individual lives merging into one.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I include the Lord's Prayer in my Christian wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Including the Lord's Prayer in your wedding invitation adds a meaningful touch, expressing your faith and inviting guests to join you in prayer and celebration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Should I include the dress code in my Christian wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It's a good idea to mention the dress code in your invitation, providing guidance to your guests on the expected attire for your special day. You can mention if it's a formal, semi-formal, or casual dress code.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Create Memorable Christian Wedding Invitations with Crafty Art"
        }
        text="Designs that Capture the Essence of Your Christian Wedding Celebration"
        buttonName="Get Started"
        navigate="/s/christian"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/christian/banner.png`}
              alt="christianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How can I design a Christian
        wedding invitation that reflects
        my faith and values?"
        point={
          <Box>
            <MarkText text=" Incorporate religious symbols like the cross, dove, ring to represent faith and unity." />
            <MarkText text="Choose colours like white, gold, or silver that symbolise purity and elegance." />
            <MarkText
              text="Include Bible verses or inspirational quotes that hold personal meaning to you and
your partner."
            />
            <MarkText text="Opt for classic and timeless design elements that align with Christian traditions." />
            <MarkText
              text="Seek guidance from our design experts who can assist you in creating a meaningful
and customised invitation."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Christian"
        path="/s/christian"
        image={`${assetsUrl}/w_assets/christian/img1.png`}
      />

      <RightImageSection
        title="What are some popular Christian
        wedding invitation styles to
        consider?"
        point={
          <Box>
            <MarkText
              text="Traditional elegance: Choose formal fonts, embossed details, and luxurious paper
for a timeless look."
            />
            <MarkText
              text="Rustic charm: Embrace natural textures, botanical illustrations, and earthy colours
for a warm and inviting feel."
            />
            <MarkText
              text="Modern simplicity: Opt for clean lines, minimalistic designs, and contemporary
typography for a sleek and sophisticated invitation."
            />
            <MarkText
              text="Vintage-inspired: Incorporate ornate borders, antique motifs, and sepia tones to
evoke a sense of nostalgia and romance."
            />
            <MarkText
              text="Whimsical touches: Add playful elements like illustrated church buildings, angelic
motifs, or delicate floral patterns for a touch of whimsy."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="christian"
        path="/s/christian"
        image={`${assetsUrl}/w_assets/christian/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="How can I personalize my christian
        wedding invitation to reflect my
        love story?"
        point={
          <Box>
            <MarkText
              text="Include a photo of you and your partner, capturing a special moment or showcasing
your engagement shoot."
            />
            <MarkText
              text="Incorporate a monogram or custom logo that represents your initials or a symbol
significant to your relationship."
            />
            <MarkText text="Highlight important milestone or shared experience through illustration or graphics." />
            <MarkText
              text="Showcase your unique wedding theme or venue through visual elements like icons
or sketches."
            />
            <MarkText
              text="Add a heartfelt message that reflects your love, commitment, and excitement for
the upcoming celebration."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="Christian"
        path="/s/christian"
        image={`${assetsUrl}/w_assets/christian/img3.png`}
      />

      <ExploreTemplates getAll={"/s/christian"} keyword="christian" />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Divine Christian Wedding Invitations Today and Spread the
        Joy of Your Special Day!"
        text="Elegant Designs for Faith-Filled Celebrations – Making Your Christian Wedding Unforgettable   "
        navigate="/s/christian"
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
          heading="1. What is the significance of the Unity Candle ceremony in a Christian wedding?"
          text={
            <>
              The Unity Candle ceremony symbolises the joining of two families
              and the unity of the couple. During the ceremony, the couple
              lights a single candle together, representing their individual
              lives merging into one.
            </>
          }
        />

        <FaqsBox
          heading="2. Can I include the Lord's Prayer in my Christian wedding invitation?"
          text={
            <>
              Absolutely! Including the Lord's Prayer in your wedding{" "}
              <FLink lk={`${domain}invitation`}>invitation</FLink> adds a
              meaningful touch, expressing your faith and inviting guests to
              join you in prayer and celebration.
            </>
          }
        />

        <FaqsBox
          heading="3. Should I include the dress code in my Christian wedding invitation?"
          text={
            <>
              It's a good idea to mention the dress code in your invitation,
              providing guidance to your guests on the expected attire for your
              special day. You can mention if it's a formal, semi-formal, or
              casual dress code.
            </>
          }
        />
      </Box>
    </>
  );
}
