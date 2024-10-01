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
        image={`${assetsUrl}/w_assets/muslim/banner.png`}
        heading={"Muslim Wedding Invitation Cards | Islamic Wedding Cards"}
        text="Explore our greatest Muslim wedding cards and Muslim wedding invitations collections for the Nikah ceremony. Check trendy Islamic wedding card designs now!"
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
                  name: "What makes Muslim wedding invitation cards unique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Muslim wedding invitation cards typically feature traditional Islamic symbols and motifs, making them distinct from other types of wedding invitations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I ensure my Muslim wedding invitation card is stylish and simple?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stick to a minimalist design and avoid overcrowding the card with too many design elements. Use a simple colour scheme and keep the text minimal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there any specific religious or cultural symbols that should be included in a Muslim wedding invitation card?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Islamic symbols such as the crescent moon and star, the Kaaba, or Quranic verses are often included in Muslim wedding invitation cards. However, it's important to consult with your religious leader or family members to ensure that any traditions or customs are followed appropriately.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Muslim Wedding Invitation Cards Unique and Elegant Designs"}
        text="Make Your Special Day Memorable with Our Muslim Wedding Invitation Cards"
        buttonName="Get Started"
        navigate="/s/muslim"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/muslim/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      {/* section 2 */}

      <LeftImageSection
        title="How to choose the Perfect Muslim
        Wedding Invitation Card Design?"
        point={
          <Box>
            <MarkText text="Browse through our exclusive collection of Muslim wedding invitation card designs" />
            <MarkText text="Select a design that reflects your unique style and personality" />
            <MarkText text="Customise the design according to your preferences" />
            <MarkText text="Choose an appropriate colour scheme to match your wedding theme " />
            <MarkText text="Preview the design and make any necessary adjustments before finalising" />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="muslim"
        path="/s/muslim"
        image={`${assetsUrl}/w_assets/muslim/img1.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="What Are the Key Elements of a
        Muslim Wedding Invitation Card?"
        point={
          <Box>
            <MarkText text="A traditional Islamic symbol, such as the Bismillah or Allah's name " />
            <MarkText text="The names of the bride and groom, along with their parents' names " />
            <MarkText text="The wedding date, time, and venue details " />
            <MarkText text="A heartfelt message or quote" />
            <MarkText text="Any additional information, such as dress code or RSVP instructions" />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="muslim"
        path="/s/muslim"
        image={`${assetsUrl}/w_assets/muslim/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="How to Personalise Your Muslim
        Wedding Invitation Card?"
        point={
          <Box>
            <MarkText text="Add a personal touch by including a photo of the bride and groom." />
            <MarkText text="Customise the font style and size for a more unique look." />
            <MarkText
              text="Use decorative elements like floral patterns, Islamic motifs or calligraphy to
enhance the design."
            />
            <MarkText text="Play around with different colour schemes to match your wedding theme." />
            <MarkText text="Opt for special finishes like foil stamping or embossing for added elegance." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="muslim"
        path="/s/muslim"
        image={`${assetsUrl}/w_assets/muslim/img3.png`}
      />

      {/* section 5 */}

      <ExploreTemplates getAll={"/s/muslim"} keyword="muslim" />

      <CustomerSaying />

      {/* section 6 */}
      <GetTemplates
        heading="Create Your Dream Muslim Wedding Invitation Card Today!"
        text="Elegant designs for a truly memorable occasion."
        navigate="/s/muslim"
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
          heading="hat makes Muslim wedding invitation cards unique?"
          text={
            <>
              Muslim wedding{" "}
              <FLink lk={`${domain}invitation`}>invitation</FLink> cards
              typically feature traditional Islamic symbols and motifs, making
              them distinct from other types of wedding invitations.
            </>
          }
        />

        <FaqsBox
          heading="How can I ensure my Muslim wedding invitation card is stylish and simple?"
          text={
            <>
              Stick to a minimalist design and avoid overcrowding the card with
              too many design elements. Use a simple colour scheme and keep the
              text minimal.
            </>
          }
        />

        <FaqsBox
          heading="Are there any specific religious or cultural symbols that should be included in a Muslim
          wedding invitation card?"
          text={
            <>
              Islamic symbols such as the crescent moon and star, the Kaaba, or
              Quranic verses are often included in Muslim{" "}
              <FLink lk={`${domain}wedding`}>Wedding</FLink>
              invitation cards. However, it's important to consult with your
              religious leader or family members to ensure that any traditions
              or customs are followed appropriately.
            </>
          }
        />
      </Box>
    </>
  );
}
