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
        image={`${assetsUrl}/w_assets/baptism-invitation/banner.png`}
        heading={
          "Customizable Baptism Invitation Templates | Design Your Invite (Free)"
        }
        text="CraftyArt Maker offers Baptism Invitation Templates for crafting beautiful cards. Personalize your invitations for a memorable event."
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
                  name: "Can I customize an baptism invitation template?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can customize an baptism invitationn template.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the invitation maker suitable for users with no design experience?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the invitation maker is suitable for users with no design experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What file formats are supported for baptism invitation templates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Supported file formats for baptism invitation templates include JPG, PNG, and PDF.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need design experience to use CraftyArt's invitation card maker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you do not need design experience to use CraftyArt's invitation card maker just edit text & design which you prefer from our library.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Exquisite Baptism Invitations for Your Special Day"}
        text="Create Memorable and Personalized Baptism Invitations with Ease"
        buttonName="Get Started"
        navigate="/s/Baptism-Invitation"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/baptism-invitation/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to choose the perfect design
            for my baptism invitation?"
        point={
          <Box>
            <MarkText text="Browse through our diverse collection." />
            <MarkText text="Filter by theme, colours, or styles." />
            <MarkText text="Personalise with your preferred details." />
            <MarkText text="Preview the design to see how it looks." />
            <MarkText text="Order and receive high-quality printed invitations." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Baptism-Invitation"
        path="/s/Baptism-Invitation"
        image={`${assetsUrl}/w_assets/baptism-invitation/img1.png`}
      />

      <RightImageSection
        title="What are the key elements to
            consider when designing a
            baptism invitation?"
        point={
          <Box>
            <MarkText text="Choose a suitable colour palette." />
            <MarkText text="Select a font that complements the theme." />
            <MarkText text="Incorporate religious symbols or imagery." />
            <MarkText text="Include essential details like the date, time, and location." />
            <MarkText text="Add a heartfelt message or Bible verse." />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Baptism-Invitation"
        path="/s/Baptism-Invitation"
        image={`${assetsUrl}/w_assets/baptism-invitation/img2.png`}
      />

      <LeftImageSection
        title="How can I make my baptism
            invitations more personalised?"
        point={
          <Box>
            <MarkText text="Use a photo of the child being baptised." />
            <MarkText text="Customise the text with the child's name." />
            <MarkText text="Include a meaningful quote or poem." />
            <MarkText text="Add a personal message for the guests." />
            <MarkText text="Opt for premium paper or finish options for a luxurious touch." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Baptism-Invitation"
        path="/s/Baptism-Invitation"
        image={`${assetsUrl}/w_assets/baptism-invitation/img3.png`}
      />

      <ExploreTemplates
        getAll={"/s/Baptism-Invitation"}
        keyword="Baptism Invitation"
      />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Perfect Baptism Invitation Today!"
        text="Elegant and Meaningful Baptism Invitations: Celebrate a Sacred Milestone with Style."
        navigate="/s/Baptism-Invitation"
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
          heading="Can I customize an baptism invitation template?
            "
          text={
            <>
              Yes, you can customize an baptism{" "}
              <FLink lk={`${domain}invitation`}>invitation</FLink> template.
            </>
          }
        />

        <FaqsBox
          heading="Is the invitation maker suitable for users with no design experience?
            "
          text={
            <>
              Yes, the invitation maker is suitable for users with no design
              experience.
            </>
          }
        />

        <FaqsBox
          heading="What file formats are supported for baptism invitation templates?"
          text={
            <>
              Supported file formats for baptism invitation{" "}
              <FLink lk={`${domain}template`}>template</FLink>
              include JPG, PNG, and PDF.
            </>
          }
        />

        <FaqsBox
          heading="Do I need design experience to use CraftyArt's invitation card maker?
            "
          text={
            <>
              No, you do not need design experience to use CraftyArt's
              invitation card maker just edit text & design which you prefer
              from our library.
            </>
          }
        />
      </Box>
    </>
  );
}
