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
        image={`${assetsUrl}/w_assets/engagement-party/banner.png`}
        heading={"Free and customizable engagement party invitations"}
        text="Discover the perfect way to kick off your engagement celebration with our free and fully customizable engagement party invitations."
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
                  name: "Can I customise the engagement party invitations to match our chosen colour scheme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! You can select colours that align with your engagement party theme or coordinate with your wedding colour palette.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it necessary to include RSVP cards with the engagement party invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Including RSVP cards or providing an online RSVP option helps you gather accurate guest counts and plan accordingly.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Make engagement party invites with Crafty Art"}
        text="Set the Perfect Tone for Your Engagement Party with Stylish and Memorable Invitations"
        buttonName="Get Started"
        navigate="/s/engagement-party"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/engagement-party/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      {/* section 2 */}

      <LeftImageSection
        title="How to design engagement
        invites that match our style and
        set the tone?"
        point={
          <Box>
            <MarkText
              text="Browse through a wide range of invitation templates tailored specifically for
engagement parties."
            />
            <MarkText
              text="Choose a colour scheme that complements your party theme or matches your
personal preferences."
            />
            <MarkText
              text="Incorporate symbols of love and romance, such as hearts or rings, to symbolise
your engagement."
            />
            <MarkText
              text="Experiment with different typography styles to find the one that reflects your
personality."
            />
            <MarkText
              text="Personalise the design by adding your names, date, and venue details to make it
truly unique."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Engagement-Party"
        path="/s/engagement-party"
        image={`${assetsUrl}/w_assets/engagement-party/img1.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="Steps to create attention-grabbing
        custom engagement invites?"
        point={
          <Box>
            <MarkText
              text="Start by determining the tone and style you want to convey, whether it's casual,
formal, or themed."
            />
            <MarkText
              text="Select a graphic design tool that offers a user-friendly interface and a variety of
customizable options."
            />
            <MarkText
              text="Choose an engaging and visually appealing layout that highlights the important
information."
            />
            <MarkText
              text="Incorporate high-quality images or illustrations that resonate with your engagement
party theme."
            />
            <MarkText
              text="Proofread the invitation carefully to ensure all details are accurate before finalising
the design."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Engagement-Party"
        path="/s/engagement-party"
        image={`${assetsUrl}/w_assets/engagement-party/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="Ways to create memorable
        engagement invites that impress
        guests?"
        point={
          <Box>
            <MarkText
              text="Opt for unique and creative designs that reflect your personal style and story as a
couple."
            />
            <MarkText
              text="Consider using special printing techniques, such as foil stamping or embossing, to
add a touch of luxury."
            />
            <MarkText
              text="Incorporate a touch of your engagement story or a memorable quote that captures
your love story."
            />
            <MarkText text="Use high-quality paper or cardstock for a premium feel and durability." />
            <MarkText
              text="Add a personal handwritten note or message to each invitation to make your
guests feel special."
            />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Engagement-Party"
        path="/s/engagement-party"
        image={`${assetsUrl}/w_assets/engagement-party/img3.png`}
      />

 
      <ExploreTemplates
        getAll={"/s/engagement-party"}
        keyword="engagement party"
      />

      <CustomerSaying />

       <GetTemplates
        heading="Spark the Celebration with Exquisite Engagement Invitations – Start Designing Now!"
        text="Unleash the Beauty of Love: Design Simple, Stylish, and Unique Engagement Invitations with Ease!"
        navigate="/s/engagement-party"
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
          heading="1. Can I customise the engagement party invitations to match our chosen colour scheme?"
          text={
            <>
              Absolutely! You can select colours that align with your engagement
              party theme or coordinate with your{" "}
              <FLink lk={`${domain}wedding`}>wedding</FLink> colour palette.
            </>
          }
        />

        <FaqsBox
          heading="2. Is it necessary to include RSVP cards with the engagement party invitations?"
          text={
            <>
              Including RSVP cards or providing an online RSVP option helps you
              gather accurate guest counts and plan accordingly.
            </>
          }
        />
      </Box>
    </>
  );
}
