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
        image={`${assetsUrl}/w_assets/south-indian/banner.png`}
        heading={
          " South Indian Wedding Invitation | South-Indian Wedding Cards"
        }
        text="Browse 100+ South Indian wedding invitations that blend tradition with elegance. Explore our collection of South-Indian wedding cards for your special day."
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
                  name: "Can I customise the colours of my South Indian wedding card design to match my wedding theme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our design tool offers a wide range of colour options, allowing you to customise your South Indian wedding card to match your unique wedding theme.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I include religious symbols and verses specific to South Indian traditions on my wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! Our customizable templates include options for incorporating religious symbols and verses from South Indian culture, adding a sacred touch to your invitation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there specific design elements that represent South Indian weddings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Look for designs featuring traditional South Indian motifs like Kolam patterns, mango motifs, or intricate temple art to capture the essence of South Indian weddings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I ensure my South Indian wedding card design showcases both tradition and modernity?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our design tool provides the flexibility to blend traditional South Indian elements with modern design aesthetics, allowing you to create a wedding card that beautifully reflects both your cultural roots and contemporary style.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={
          "Create Stunning South Indian Wedding Cards with our Graphic Design Tool"
        }
        text="Elegant Invitation Designs will help you create your South Indian wedding card."
        buttonName="Get Started"
        navigate="/s/south-indian"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/south-indian/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      {/* section 2 */}

      <LeftImageSection
        title="How to choose the perfect design
        for my south indian wedding card?"
        point={
          <Box>
            <MarkText
              text="Browse through our exclusive collection of South Indian wedding card designs,
inspired by the rich cultural heritage of the region."
            />
            <MarkText
              text="Look for traditional elements like intricate kolam patterns, mango motifs, or temple
art that represent South Indian aesthetics."
            />
            <MarkText
              text="Consider the significance of colours in South Indian culture, such as vibrant red,
auspicious yellow, or royal purple."
            />
            <MarkText
              text="Customise the design with your names, wedding date, and other personalised
details to make it truly special."
            />
            <MarkText
              text="Seek recommendations from our design experts or explore customer reviews to 
find a design that captures the essence of your South Indian wedding."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="South-indian"
        path="/s/south-indian"
        image={`${assetsUrl}/w_assets/south-indian/img1.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="What are the essential steps to
        personalise your South Indian
        wedding invitation?"
        point={
          <Box>
            <MarkText
              text="Choose a South Indian wedding invitation template that reflects the grandeur of
your celebration."
            />
            <MarkText
              text="Customise the font styles and sizes to match the traditional and elegant feel of
South Indian scripts."
            />
            <MarkText
              text="Incorporate iconic South Indian motifs like peacocks, lotus flowers, or Nandi the
bull for an authentic touch."
            />
            <MarkText
              text="Add religious symbols and verses from sacred scriptures to honour your cultural
and spiritual traditions."
            />
            <MarkText
              text="Experiment with different printing techniques like embossing or gold foil to
enhance the visual appeal of your invitation."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="south-indian"
        path="/s/south-indian"
        image={`${assetsUrl}/w_assets/south-indian/img2.png`}
      />

      {/* section 4 */}
      <LeftImageSection
        title="How can I make my South Indian
        wedding card unique and stylish?"
        point={
          <Box>
            <MarkText
              text="Infuse your South Indian wedding card with contemporary design elements while
preserving its cultural essence."
            />
            <MarkText
              text="Combine traditional patterns with modern color palettes for a fresh and captivating
look."
            />
            <MarkText
              text="Opt for unique card formats like fan-shaped or scroll-style invitations to add a
touch of uniqueness."
            />
            <MarkText
              text="Incorporate innovative materials such as textured papers or velvet finishes for a
luxurious feel."
            />
            <MarkText
              text="Collaborate with our design experts to create a custom design that reflects your
style and celebrates the uniqueness of your South Indian wedding."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="South-indian"
        path="/s/south-indian"
        image={`${assetsUrl}/w_assets/south-indian/img3.png`}
      />

      {/* section 5 */}

      <ExploreTemplates getAll={"/s/south-indian"} keyword="south indian" />

      <CustomerSaying />

      {/* section 6 */}
      <GetTemplates
        heading="Design Your Perfect South Indian Wedding Invitation and Begin Your
        Celebrations in Style!"
        text="Elegant, Stylish, and Unforgettable South Indian Wedding Invitations - Celebrate Your Love in Grandeur"
        navigate="/s/south-indian"
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
          heading="Can I customise the colours of my South Indian wedding card design to match my
          wedding theme?"
          text={
            <>
              Absolutely! Our design tool offers a wide range of colour options,
              allowing you to customise your South Indian wedding card to match
              your unique <FLink lk={`${domain}wedding`}>Wediing</FLink> theme.
            </>
          }
        />

        <FaqsBox
          heading="Can I include religious symbols and verses specific to South Indian traditions on my
          wedding invitation?"
          text={
            <>
              Certainly! Our customizable templates include options for
              incorporating religious symbols and verses from South Indian
              culture, adding a sacred touch to your invitation.
            </>
          }
        />

        <FaqsBox
          heading="Are there specific design elements that represent South Indian weddings?"
          text={
            <>
              Yes! Look for designs featuring traditional South Indian motifs
              like Kolam patterns, mango motifs, or intricate temple art to
              capture the essence of South Indian weddings.
            </>
          }
        />
        <FaqsBox
          heading="How can I ensure my South Indian wedding card design showcases both tradition and
          modernity?"
          text={
            <>
              Our design tool provides the{" "}
              <FLink lk={`${domain}invitation`}>invitation</FLink> to blend
              traditional South Indian elements with modern design aesthetics,
              allowing you to create a wedding card that beautifully reflects
              both your cultural roots and contemporary style.
            </>
          }
        />
      </Box>
    </>
  );
}
