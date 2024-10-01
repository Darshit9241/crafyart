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
        image={`${assetsUrl}/w_assets/gujarati/banner.png`}
        heading={
          "Gujarati Wedding Invitation Cards | Customize Templates Online"
        }
        text="Perfect Gujarati Wedding Invitation Cards & Templates. Explore traditional and modern designs for your special day. Customize yours now!"
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
                  name: "What is the most popular Gujarati wedding card design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most popular design includes traditional motifs such as paisleys, lotus flowers, and peacocks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customise my Gujarati wedding card with my own text and images?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can easily personalise your wedding card with your own text and images using our graphic design tools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to design a Gujarati wedding card?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It depends on the complexity of the design, but our easy-to-use tools make the process much faster than traditional methods.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should I call a Gujarati wedding invitation card?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Gujarati wedding invitation card is commonly called a Lagan Patrika or Kankotri, which includes details about the wedding ceremony, date, time, location, and information about the couple and their families.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Design Your Dream Gujarati Wedding Card with Simple Steps"}
        text="Create Unique and Elegant Gujarati Wedding Invitations with Graphic Design Tools"
        buttonName="Get Started"
        navigate="/s/gujarati"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/gujarati/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      {/* section 2 */}

      <LeftImageSection
        title="How to Choose the Perfect
        Gujarati Wedding Card Design?"
        point={
          <Box>
            <MarkText text="Determine the theme and style of your wedding, and choose design that reflects it." />
            <MarkText text="Look for designs that have a balance of traditional and modern elements." />
            <MarkText
              text="Consider the message you want to convey with your wedding invitation, and
choose a design that fits it."
            />
            <MarkText text="Browse different websites and blogs for inspiration on designs and color schemes." />
            <MarkText text="Consult with a professional designer if you need help deciding on a design." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Gujarati"
        path="/s/gujarati"
        image={`${assetsUrl}/w_assets/gujarati/img1.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="What Are the Essential Elements
        of a Gujarati Wedding Card?"
        point={
          <Box>
            <MarkText text="Choose fonts that are easy to read and complement the overall design." />
            <MarkText
              text="The card should include the names of the bride and groom, along with their
parents' names."
            />
            <MarkText text="Include the date, time, location, and dress code for the wedding." />
            <MarkText text="Add any additional details such as RSVP information or directions to the venue. " />
            <MarkText
              text="Use traditional symbols and motifs such as lotus flowers, peacocks, or paisleys to
give your card an authentic feel."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Gujarati"
        path="/s/gujarati"
        image={`${assetsUrl}/w_assets/gujarati/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="How to Make Your Gujarati
        Wedding Card Stand Out?"
        point={
          <Box>
            <MarkText text="Experiment with bold colours and patterns that complement your wedding theme." />
            <MarkText text="Use high-quality paper stock and finishes such as foil stamping or embossing." />
            <MarkText
              text="Incorporate unique materials such as silk or fabric into the design of your wedding
card."
            />
            <MarkText text="Create a custom envelope liner that complements the design of your wedding card." />
            <MarkText
              text="Work with a professional designer to create a bespoke design that is truly one-of-
a-kind."
            />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Gujarati"
        path="/s/gujarati"
        image={`${assetsUrl}/w_assets/gujarati/img3.png`}
      />

      {/* section 5 */}

      <ExploreTemplates getAll={"/s/gujarati"} keyword="gujarati" />

      <CustomerSaying />

      {/* section 6 */}
      <GetTemplates
        heading="Ready to design your dream Gujarati wedding card? Get started now with
        our easy-to-use graphic design tools!"
        text="Create Simple, Stylish, and Unique Gujarati Wedding Invitations with Ease"
        navigate="/s/gujarati"
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
          heading="What is the most popular Gujarati wedding card design?"
          text={
            <>
              The most popular design includes traditional motifs such as
              paisleys, lotus flowers, and peacocks.
            </>
          }
        />

        <FaqsBox
          heading="Can I customise my Gujarati wedding card with my own text and images?"
          text={
            <>
              Yes, you can easily personalise your
              <FLink lk={`${domain}wedding`}>wedding</FLink> card with your own
              text and images using our graphic design tools.
            </>
          }
        />
        <FaqsBox
          heading="How long does it take to design a Gujarati wedding card?"
          text={
            <>
              It depends on the complexity of the design, but our easy-to-use
              tools make the process much faster than traditional methods.
            </>
          }
        />

        <FaqsBox
          heading="What should I call a Gujarati wedding invitation card?"
          text={
            <>
              A Gujarati wedding{" "}
              <FLink lk={`${domain}invitation`}>invitation.</FLink> card is
              commonly called a "Lagan Patrika" or "Kankotri", which includes
              details about the wedding ceremony, date, time, location, and
              information about the couple and their families.
            </>
          }
        />
      </Box>
    </>
  );
}
