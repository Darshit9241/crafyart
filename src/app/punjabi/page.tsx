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
        image={`${assetsUrl}/w_assets/panjabi/banner.png`}
        heading={"Punjabi Wedding Card Design | Punjabi Wedding Invitation"}
        text="Explore latest collections of Punjabi wedding cards designed specially for Sikh and Punjabi traditions. Elevate celebration with Punjabi wedding invitations"
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
                  name: "Are there specific colours that symbolise Punjabi weddings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Punjabi weddings are known for their vibrant colour palettes. Traditional colours like red, orange, yellow, and pink represent joy, celebration, and prosperity and can be incorporated into your wedding invitation design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I personalise the wording of my Punjabi wedding invitation in both Punjabi and English?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! We provide the option to include both Punjabi and English text on your wedding invitation, allowing you toconvey your message to all guests while preserving the cultural essence of Punjab.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I add my own photographs to the Punjabi wedding card design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: " Yes, you can personalise your wedding invitation by including your own photographs, such as pre-wedding shoots or pictures showcasing traditional Punjabi attire and customs.",
                  },
                },
                {
                  "@type": "Question",
                  name: " Is it possible to incorporate religious elements into my Punjabi wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! You can include religious symbols and verses from sacred texts such as the Guru Granth Sahib or hymns that hold significance in Punjabi customs and rituals. Our design experts can help you seamlessly integrate these elements into your wedding invitation design.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Punjabi Wedding Cards: Love and Tradition in Captivating Designs"
        }
        text="Design Your Perfect Punjabi Wedding Invitation and Showcase the Vibrance of Punjab"
        buttonName="Get Started"
        navigate="/s/punjabi"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/panjabi/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="Choosing the Perfect Design for
        Your Punjabi Wedding Card?"
        point={
          <Box>
            <MarkText
              text="Explore our extensive collection of Punjabi wedding card designs, inspired by the
rich culture and traditions of Punjab."
            />
            <MarkText
              text="Look for vibrant and lively colors that represent the spirit of Punjab, such as bright
reds, oranges, and yellows."
            />
            <MarkText
              text="Consider incorporating traditional Punjabi motifs like peacocks, kalire, dhol, or
phulkari patterns that symbolise joy and prosperity."
            />
            <MarkText
              text="Choose a design that reflects the elegance and grandeur of Punjabi weddings, with
intricate details and regal elements."
            />
            <MarkText
              text="Personalise the design by adding your names, wedding date, and heartfelt
messages that resonate with Punjabi traditions."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Punjabi"
        path="/s/punjabi"
        image={`${assetsUrl}/w_assets/panjabi/img1.png`}
      />

      <RightImageSection
        title="Key Steps to Personalise Your
        Punjabi Wedding Invitation?"
        point={
          <Box>
            <MarkText
              text="Select a Punjabi wedding invitation template that captures the essence of Punjab's
vibrant culture and festivities."
            />
            <MarkText
              text="Customise the fonts to include Punjabi scripts like Gurmukhi to add an authentic
touch to the invitation."
            />
            <MarkText
              text="Incorporate traditional symbols and motifs such as the Ik Onkar symbol, kalire, or
bhangra dancers to honour Punjabi heritage."
            />
            <MarkText
              text="Include verses from sacred texts or hymns that hold significance in Punjabi
customs and rituals."
            />
            <MarkText
              text="Add a touch of personalization by including photographs or illustrations depicting
traditional Punjabi elements like the groom on a horse or the bride in exquisite
bridal attire."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="punjabi"
        path="/s/punjabi"
        image={`${assetsUrl}/w_assets/panjabi/img2.png`}
      />

      <LeftImageSection
        title="Creating Unique and Stylish
        Punjabi Wedding Cards? "
        point={
          <Box>
            <MarkText
              text="Infuse your Punjabi wedding card with a blend of tradition and modernity to create
a unique and stylish invitation."
            />
            <MarkText
              text="Experiment with contemporary colour combinations while incorporating traditional
Punjabi hues to create a visually striking palette."
            />
            <MarkText
              text="Opt for innovative card formats such as gatefold or scroll designs that add a touch
of elegance and intrigue."
            />
            <MarkText
              text="Enhance the design with embellishments like gold foil accents, laser-cut patterns,
or intricate thread work inspired by Punjabi craftsmanship."
            />
            <MarkText
              text="Collaborate with our design experts to customise the invitation and ensure it
reflects your personal style while honouring Punjabi traditions."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="Punjabi"
        path="/s/punjabi"
        image={`${assetsUrl}/w_assets/panjabi/img3.png`}
      />

      <ExploreTemplates getAll={"/s/punjabi"} keyword="punjabi" />

      <CustomerSaying />

      <GetTemplates
        heading="Design Your Punjabi Wedding Card and Celebrate the Vibrant Traditions!"
        text="Immerse Yourself in the Colors and Joy of Punjab with Our Exquisite Punjabi Wedding Card Designs"
        navigate="/s/punjabi"
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
          heading="Are there specific colours that symbolise Punjabi weddings?"
          text={
            <>
              Yes! Punjabi weddings are known for their vibrant colour palettes.
              Traditional colours like red, orange, yellow, and pink represent
              joy, celebration, and prosperity and can be incorporated into your
              wedding invitation design.
            </>
          }
        />

        <FaqsBox
          heading="Can I personalise the wording of my Punjabi wedding invitation in both Punjabi and
          English?"
          text={
            <>
              Certainly! We provide the option to include both Punjabi and
              English text on your{" "}
              <FLink lk={`${domain}wedding`}>wedding</FLink> invitation,
              allowing you to convey your message to all guests while preserving
              the cultural essence of Punjab.
            </>
          }
        />

        <FaqsBox
          heading="Can I add my own photographs to the Punjabi wedding card design?"
          text={
            <>
               Yes, you can personalise your wedding invitation by including
              your own photographs, such as pre-wedding shoots or pictures
              showcasing traditional Punjabi attire and customs..
            </>
          }
        />

        <FaqsBox
          heading=" Is it possible to incorporate religious elements into my Punjabi wedding invitation?"
          text={
            <>
              Absolutely! You can include religious symbols and verses from
              sacred texts such as the Guru Granth Sahib or hymns that hold
              significance in Punjabi customs and rituals. Our design experts
              can help you seamlessly integrate these elements into your wedding{" "}
              <FLink lk={`${domain}invitation`}>invitation</FLink> design.
            </>
          }
        />
      </Box>
    </>
  );
}
