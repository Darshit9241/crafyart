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
  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/christening-invitation/banner.png`}
        heading={
          "Elegant Christening Invitation Templates for Memorable Celebrations"
        }
        text="Discover elegant Christening invitation templates & cards. Create personalized designs for your event with CraftyArt Maker."
      />

       <GetStartedLinearBanner
        heading={
          "Exquisite Christening Invitations for a Cherished Celebration"
        }
        text="Design Beautiful and Personalized Christening Invitations with Ease"
        buttonName="Get Started"
        navigate="/s/christian"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/christening-invitation/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

 
      <LeftImageSection
        title="How to choose the perfect design
        for my christening invitation?"
        point={
          <Box>
            <MarkText text="Explore our extensive collection of designs." />
            <MarkText text="Filter by theme, colours, or styles to narrow down options." />
            <MarkText text="Customise the design with your preferred details." />
            <MarkText text="Preview the invitation to see the final look." />
            <MarkText text="Order high-quality printed invitations that capture the essence of the occasion." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Christening-Invitation"
        path="/s/christian"
        image={`${assetsUrl}/w_assets/christening-invitation/img1.png`}
      />

 
      <RightImageSection
        title="Order high-quality printed invitations that capture the essence of the occasion."
        point={
          <Box>
            <MarkText text="Select a colour palette that reflects the theme and tone." />
            <MarkText text="Choose an elegant and legible font for the text." />
            <MarkText text="Incorporate religious symbols or motifs." />
            <MarkText text="Include essential details such as the date, time, and venue." />
            <MarkText
              text="Add a heartfelt message or a special Bible verse to convey the significance of the
event."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Christening-Invitation"
        path="/s/christian"
        image={`${assetsUrl}/w_assets/christening-invitation/img2.png`}
      />

       <LeftImageSection
        title="How can I make my christening
        invitations more personal and
        unique?"
        point={
          <Box>
            <MarkText text="Feature a photo of the child or the family." />
            <MarkText text="Customise the text with the child's name and other relevant information." />
            <MarkText text="Opt for specialty finishes like foil accents or embossing." />
            <MarkText text="Add a personal touch with custom envelope addressing." />
            <MarkText text="Consider premium paper options for a luxurious feel." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Christening-Invitation"
        path="/s/christian"
        image={`${assetsUrl}/w_assets/christening-invitation/img3.png`}
      />

 
      <ExploreTemplates
        getAll={"/s/christening-inviation"}
        keyword="christian"
      />

      <CustomerSaying />

       <GetTemplates
        heading="Create Your Perfect Christening Invitation Today!"
        text="Elegant and Meaningful Christening Invitations: Celebrate a Sacred Milestone with Style."
        navigate="/s/christian"
      />
    </>
  );
}
