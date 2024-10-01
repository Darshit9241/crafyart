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
        image={`${assetsUrl}/w_assets/save-the-date/banner.png`}
        heading={"Unique Wedding Save the Date Cards | Free online Templates"}
        text="Personalize your wedding with stunning save the date cards & templates. Find the perfect design to announce your special day!"
      />

      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Capture the Moment: Wedding Save the Dates"}
        text="Design Unique and Memorable Wedding Save the Dates with Ease."
        buttonName="Get Started"
        navigate="/s/save-the-date"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/save-the-date/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      {/* section 2 */}

      <LeftImageSection
        title="How to choose the perfect design
        for my wedding save the dates?"
        point={
          <Box>
            <MarkText text="Explore our extensive collection of designs." />
            <MarkText text="Filter by theme, colours, or styles to match your wedding vision." />
            <MarkText text="Personalise the design with your preferred details." />
            <MarkText text="Preview the save the date to ensure it captures the essence of your special day." />
            <MarkText text="Order high-quality printed save the dates that leave a lasting impression." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Save-The-Date"
        path="/s/save-the-date"
        image={`${assetsUrl}/w_assets/save-the-date/img1.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="Tips for designing wedding save-
        the-dates?"
        point={
          <Box>
            <MarkText text="Select a design that reflects your wedding theme and style." />
            <MarkText text="Choose a font that complements the overall aesthetic." />
            <MarkText text="Highlight the essential details: date, time, location." />
            <MarkText text="Incorporate engagement photos for a personal touch." />
            <MarkText text="Add a heartfelt message or a unique quote to make it memorable." />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Save-The-Date"
        path="/s/save-the-date"
        image={`${assetsUrl}/w_assets/save-the-date/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="How to make wedding save the
        dates stand out?"
        point={
          <Box>
            <MarkText text="Opt for custom shapes or sizes to create a unique look." />
            <MarkText text="Include a beautiful photo that showcases your love story." />
            <MarkText text="Use premium paper and finishes for a luxurious feel." />
            <MarkText text="Add an interactive element, such as a magnet or a scratch-off reveal." />
            <MarkText text="Consider personalised envelope addressing for an extra touch of elegance." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="Save-The-Date"
        path="/s/save-the-date"
        image={`${assetsUrl}/w_assets/save-the-date/img3.png`}
      />

      {/* section 5 */}

      <ExploreTemplates getAll={"/s/save-the-date"} keyword="save-the-date" />

      <CustomerSaying />

      {/* section 6 */}
      <GetTemplates
        heading="Create Your Perfect Wedding Save the Dates Today!"
        text="Capture the Joy: Create Lasting Memories with Our Stylish and Personalized Wedding Save the Dates."
        navigate="/s/save-the-date"
      />
    </>
  );
}
