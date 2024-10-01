"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
const FLink = dynamic(() => import("@/src/components/common/FLink"));
const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);
const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);

const CustomizableSliderTemplates = dynamic(
  () => import("@/src/components/common/CustomizableSliderTemplates")
);
const FreeTrialBlackBanner = dynamic(
  () => import("@/src/components/common/FreeTrialBlackBanner")
);
const LeftDetail = dynamic(() => import("@/src/components/common/LeftDetail"));
const RightDetail = dynamic(
  () => import("@/src/components/common/RightDetail")
);

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

const sliderTemplate = [
  {
    img: `${assetsUrl}/w_assets/images/marketingCreateFlyer.png`,
    buttonName: "Create Flyer",
    path: "/flyer",
  },
  {
    img: `${assetsUrl}/w_assets/images/marketingCreateLogo.png`,
    buttonName: "Create Logo",
    path: "/logos",
  },
  {
    img: `${assetsUrl}/w_assets/images/marketingCreateBussiness.png`,
    buttonName: "Create Business Card",
    path: "/business-card",
  },
  {
    img: `${assetsUrl}/w_assets/images/marketingCreatePoster.png`,
    buttonName: "Create Poster",
    path: "/poster",
  },
  {
    img: `${assetsUrl}/w_assets/images/marketingCreateBrochure.png`,
    buttonName: "Create Brochure",
    path: "/brochure-design",
  },
];

export default function index() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/marketingCatching.png`}
        heading="Elevate your marketing game with stunning marketing templates!"
        text="Make custom posters using marketing templates in minutes to create professional business cards, flyers, logos, posters, brochures, menus, and infographics."
      />
        <Box>
        <link rel="canonical" title={"Elevate your marketing game with stunning marketing templates!"} href={`https://www.craftyartapp.com/marketing`} />
        </Box>

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
                  name: "What are customizable marketing templates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Customizable marketing templates are pre-designed marketing materials, such as business cards, flyers, logos, posters, brochures, menus, and infographics, that can be edited and filled out with the necessary information for your business or organisation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customize Marketing Templates to match my brand?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Crafty Art Marketing Templates are meant to be flexible. You can easily customize colors, fonts, and imagery to align with your artistic style and overall brand identity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Crafty Art Marketing Templates be used for online and offline promotion?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art Marketing Templates are designed to be versatile and can be used for both online platforms, such as social media and websites, as well as offline mediums, like printed promotional materials for art exhibitions or events.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What information should be included in marketing posters?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The type of information included in marketing posters will depend on the purpose of the material. However, common elements include company or organisation name, logo, products or services offered, contact information, and call-to-action.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <FreeTrialBlackBanner
        heading="Elevate your marketing game with stunning marketing templates!"
        text="Make an unforgettable impression with custom marketing posters
              created in minutes. Choose from a variety of design templates to
              create professional and impactful business cards, flyers, logos,
              posters, brochures, menus, and infographics."
        path="/s/marketing"
      />

      <RightDetail
        title="How to create an eye-catching
        flyer?"
        point={
          <Box>
            <MarkText text="Browse through various templates and select one that matches your message and target audience" />
            <MarkText text="Customize the text, images, and colors to align with your branding and message" />
            <MarkText text="Use clear and concise language to convey your message effectively" />
            <MarkText text="Add a call-to-action to encourage viewers to take action" />
            <MarkText text="Print the final design using high-quality materials for maximum impact." />
          </Box>
        }
        buttonName={"Create your flyer now"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingCatching.png`}
        path="/flyer"
      />

      <LeftDetail
        title="How to make a business card with
        ease?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects your brand and industry" />
            <MarkText text="Customise the layout to include all necessary information, such as your name, title, business name, contact information, and social media handles" />
            <MarkText text="Use high-quality paper and printing for a professional look and feel" />
            <MarkText text="Consider adding special finishes, such as embossing or foil stamping, to make your card stand out" />
            <MarkText text="Verify all details before sending for printing to avoid any errors." />
          </Box>
        }
        buttonName={"Find a Business Card"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingBussinessCard.png`}
        path="/business-card"
      />

      <RightDetail
        title="What are the key elements of a
        successful logo design?"
        point={
          <Box>
            <MarkText text="A clear representation of the brand identity and values" />
            <MarkText text="A simple and memorable visual symbol" />
            <MarkText text="A versatile design that works across various mediums and sizes" />
            <MarkText text="A timeless appeal that can withstand changes in trends and styles" />
            <MarkText text="A unique and distinctive style that sets it apart from competitors." />
          </Box>
        }
        buttonName={"Create your Logo"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingLogoDesign.png`}
        path="/logos"
      />

      <LeftDetail
        title="How to design an effective
        poster?"
        point={
          <Box>
            <MarkText text="Choose a size and orientation that fits the purpose and display location" />
            <MarkText text="Select a template or start from scratch and customize the design using graphics, text, and visual effects" />
            <MarkText text="Use contrasting colors and bold typography to grab attention" />
            <MarkText text="Include a clear message and call-to-action to motivate viewers" />
            <MarkText text="Print final design using high-quality paper and techniques for maximum visibility." />
          </Box>
        }
        buttonName={"Create Poster"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingEffectivePoster.png`}
        path="/poster"
      />

      <RightDetail
        title="How to create an attractive
        brochure?"
        point={
          <Box>
            <MarkText text="Define the purpose and audience of the brochure" />
            <MarkText text="Choose a layout and format that suits the type of information you want to convey" />
            <MarkText text="Use high-quality images and graphics to enhance visual appeal" />
            <MarkText text="Keep the text clear, concise, and easy to understand" />
            <MarkText text="Print the final design using high-quality paper and folding techniques for a professional look." />
          </Box>
        }
        buttonName={"Create your Brochure"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingBrochure.png`}
        path="/brochure-design"
      />

      <LeftDetail
        title="How to make a restaurant menu
        that stands out?"
        point={
          <Box>
            <MarkText text="Choose a template that matches your restaurant's theme and cuisine" />
            <MarkText text="Customize the design to reflect your brand personality and highlight key dishes or promotions" />
            <MarkText text="Use descriptive language and appetising images to entice customers" />
            <MarkText text="Organise the menu into logical sections with clear headings and prices" />
            <MarkText text="Print final design using high-quality paper and lamination if desired for maximum durability." />
          </Box>
        }
        buttonName={"Design your Menu"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingRestaurantMenu.png`}
        path="/s/menu"
      />

      <RightDetail
        title="How to create an informative
        infographic?"
        point={
          <Box>
            <MarkText text=" Choose a topic that lends itself well to visual representation" />
            <MarkText text=" Research and gather all necessary data and organise it into logical sections" />
            <MarkText text=" Choose graphics, icons, and charts that complement the information and are easy to understand" />
            <MarkText text=" Use colour and contrast to highlight important information and create visual interest" />
            <MarkText text=" Use a clean and uncluttered design that emphasises hierarchy and flow." />
          </Box>
        }
        buttonName={"Design your own Infographic"}
        alt="marketing templates"
        image={`${assetsUrl}/w_assets/images/marketingInfoGraphic.png`}
        path="/templates/infographics"
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
          heading="What are customizable marketing templates?"
          text={
            <>
              Customizable{" "}
              <FLink lk={`${domain}marketing`}>marketing templates</FLink> are
              pre-designed marketing materials, such as business cards, flyers,
              logos, posters, brochures, menus, and infographics, that can be
              edited and filled out with the necessary information for your
              business or organisation.
            </>
          }
        />
        <FaqsBox
          heading=" Can I customize Marketing Templates to match my brand?"
          text={
            <>
              Absolutely! Crafty Art Marketing Templates are meant to be
              flexible. You can easily customize colors, fonts, and imagery to
              align with your artistic style and overall brand identity.
            </>
          }
        />

        <FaqsBox
          heading=" Can Crafty Art Marketing Templates be used for online and offline promotion?"
          text={
            <>
              Yes, Crafty Art Marketing Templates are designed to be versatile
              and can be used for both online platforms, such as social media
              and websites, as well as offline mediums, like printed promotional
              materials for art exhibitions or events.
            </>
          }
        />

        <FaqsBox
          heading=" What information should be included in marketing posters ?"
          text={
            <>
              The type of information included in marketing posters will depend
              on the purpose of the material. However, common elements include
              company or organisation name,{" "}
              <FLink lk={`${domain}logos`}>logo,</FLink> products or services
              offered, contact information, and call-to-action.
            </>
          }
        />
      </Box>

      <GetTemplates
        heading="Design your dream marketing posters today and take your brand to the next level!"
        text="Get started now with our customizable templates."
        navigate="/s/marketing"
      />
      <Box
        sx={{
          width: "100%",
          my: "50px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "2400px",
        }}
      >
        <QuestionsTitle
          text1={""}
          text2={"Get a headstart with fully customizable templates"}
          text3=""
        />

        <CustomizableSliderTemplates data={sliderTemplate} />
      </Box>
    </>
  );
}
