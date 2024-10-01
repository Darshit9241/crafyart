"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);
const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);
const LeftImageSection = dynamic(
  () => import("../wedding/components/LeftImageSection")
);
const RightImageSection = dynamic(
  () => import("../wedding/components/RightImageSection")
);
const FLink = dynamic(() => import("@/src/components/common/FLink"));
const CustomerSaying = dynamic(
  () =>
    import(
      "@/src/components/Home/landingPage/landingPageComponents/CustomerSaying"
    )
);
const ExploreTemplates = dynamic(
  () => import("@/src/components/common/ExploreTemplates")
);
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/bussinessCardDesign.png`}
        heading={
          "Business Card Maker Online - Design Professional Cards for Business"
        }
        text="Design professional business cards with ease. Customize templates to showcase your brand and make a lasting impression. Perfect for networking and branding."
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
                  name: "Are there free business card templates available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art offers a range of free business card templates. You can access them through our online tool, customize them to suit your needs, and create professional-looking business cards without any cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of industries do your business card templates cater to?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art offers a diverse collection of business card templates suitable for various industries. Whether you're in a creative field, corporate sector, or a casual business, you'll find templates that align with your industry and style.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I ensure my business cards look professional and stand out?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To ensure professional and standout business cards, choose a clean and well-designed template, use high-quality images and fonts, maintain a balance between text and visuals, and personalize the content to reflect your brand. Preview the design before finalizing it to ensure a polished look.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Design professional business cards with business card maker"}
        text="Create a lasting impression with our Business Card Template! Elevate your professional identity with a sleek design that showcases your brand. Easily customize details, fonts, and colors for a personalized touch. Make networking memorable and leave a lasting impact."
        buttonName="Get Started"
        navigate="/templates/business-cards"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/bussinessCardBanner.png`}
              alt="businessCardBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="What elements should be included
        in a business card design?"
        point={
          <Box>
            <MarkText text=" Start with the basics: Include your name, job title, company name, phone number, email address, and website URL." />
            <MarkText text=" Consider adding a logo or image that represents your brand identity." />
            <MarkText text=" Choose a font that is easy to read and complements your brand's aesthetic." />
            <MarkText text=" Keep the design simple and uncluttered, including only essential information." />
            <MarkText text=" Use high-quality materials and printing techniques to create a professional look and feel." />
          </Box>
        }
        buttonName={"Design your Card"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCardDesign.png`}
      />

      <RightImageSection
        title="How to make a unique business
        card?"
        point={
          <Box>
            <MarkText text="Identify what makes your business unique and incorporate it into the design." />
            <MarkText text="Experiment with colour schemes that stand out, while still complimenting your brand." />
            <MarkText text="Consider using a non-traditional shape or material for your card." />
            <MarkText text="Showcase your creativity by incorporating graphics, patterns, or illustrations that align with your brand identity." />
            <MarkText text="Make your business card interactive by including QR codes, augmented reality, or other technologies that add an extra layer of engagement." />
          </Box>
        }
        buttonName={"Create Your Business Card"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCardCreate.png`}
      />

      <LeftImageSection
        title="Top 5 trending designs for
        business cards"
        point={
          <Box>
            <MarkText text="Minimalist: A simple and clean design that's both professional and attention-grabbing." />
            <MarkText text="Embossed or Debossed: A textured effect that adds a tactile dimension to the design and creates an elegant touch." />
            <MarkText text="Metal or Wood: A non-traditional material that gives off a luxury and exclusive impression, perfect for high-end businesses." />
            <MarkText text="Transparent: A modern and sleek design that stands out among traditional business cards." />
            <MarkText text="Die-cut: Custom-shaped cards that allow for creative and unique designs that reflect your brand personality." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCardTrending.png`}
      />

      <ExploreTemplates
        category="business card"
        getAll="/templates/business-cards"
        keyword="Business Card"
      />

      <RightImageSection
        title="Craft Your Professional Identity with
        Business Card Design at Crafty Art"
        point={
          <Box>
            <MarkText text="Explore our business card maker to create a unique and impactful professional identity." />
            <MarkText text="Choose from a variety of templates to design business cards that leave a lasting impression." />
            <MarkText text="Personalize every detail to reflect your style and make your business cards truly yours." />
            <MarkText text="Craft professional business cards effortlessly with our user-friendly online design tools." />
            <MarkText text="Elevate your small business with business cards that make a big statement." />
          </Box>
        }
        buttonName={"Create Your Business Card"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard.png`}
      />

      <LeftImageSection
        title="Online Business Card Maker: Design and Print at Your Fingertips"
        point={
          <Box>
            <MarkText text="Utilize our online business card maker to design and print your cards with ease." />
            <MarkText text="Access a range of digital business card templates, ensuring a seamless design process." />
            <MarkText text="Create professional business cards that showcase your brand identity and stand out." />
            <MarkText text="Enjoy the convenience of designing, editing, and printing your cards all in one place." />
            <MarkText text="Make a memorable first impression with business cards crafted using our intuitive online tool." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard2.png`}
      />

      <RightImageSection
        title="Digital and Print Perfection: Business Cards Online at Crafty Art        "
        point={
          <Box>
            <MarkText text="Dive into the world of digital and print business cards with our online platform." />
            <MarkText text="Browse through examples of expertly designed business cards for inspiration." />
            <MarkText text="Choose from a variety of styles, from classic to modern, to suit your business persona." />
            <MarkText text="Elevate your networking game with digital and print business cards that make an impact." />
            <MarkText text="Personalize templates to align with your business goals and enhance your professional image." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard3.png`}
      />

      <LeftImageSection
        title="Business Card Ideas and Examples:
        Spark Your Creativity"
        point={
          <Box>
            <MarkText text="Spark your creativity with a plethora of business card ideas and examples." />
            <MarkText text="Explore unique and innovative designs that stand out in various industries." />
            <MarkText text="Use examples as inspiration to create business cards that reflect your business's essence." />
            <MarkText text="Find ideas that resonate with your brand identity, ensuring a memorable and impactful design." />
            <MarkText text="Craft business cards that not only convey information but also tell a visual story." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard4.png`}
      />

      <RightImageSection
        title="Free Business Card Maker: Elevate
        Your Small Business Presence"
        point={
          <Box>
            <MarkText text="Elevate your small business presence with our free business card maker." />
            <MarkText text="Access a wide range of free business card templates designed for various industries." />
            <MarkText text="Design professional-looking business cards without the need for a significant budget." />
            <MarkText text="Personalize your cards to effectively communicate your brand message to potential clients." />
            <MarkText text="Utilize our free tool to enhance your small business branding effortlessly." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard5.png`}
      />

      <LeftImageSection
        title="Business Card Samples and Templates: Tailored to Your Needs"
        point={
          <Box>
            <MarkText text="Browse through diverse business card samples and templates tailored to different industries." />
            <MarkText text="Find the perfect template to represent your business, whether it's creative, corporate, or casual." />
            <MarkText text="Use samples as a starting point and customize them to suit your specific business requirements." />
            <MarkText text="Create business cards that resonate with your target audience and leave a lasting impression." />
            <MarkText text="Utilize our extensive collection to find the ideal template for your professional needs." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard6.png`}
      />

      <RightImageSection
        title="Design Your Success: Business Card Template Free at Crafty Art"
        point={
          <Box>
            <MarkText text="Design your success with our free business card templates, tailored for your industry." />
            <MarkText text="Choose from a variety of professionally designed templates that align with your business goals." />
            <MarkText text="Access a wealth of creative possibilities without the constraints of a budget." />
            <MarkText text="Craft business cards that effectively represent your brand and make a memorable impact." />
            <MarkText text="Utilize our free templates to enhance your business's visual identity and professionalism." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard7.png`}
      />

      <LeftImageSection
        title="Personalized Business Cards for Small Businesses: Crafty Art's Touch of Excellence        "
        point={
          <Box>
            <MarkText text="Experience effortless branding for your small business with our online business card maker." />
            <MarkText text="Design and customize business cards that align with your brand's visual identity." />
            <MarkText text="Utilize our user-friendly online tool for a seamless and efficient design process." />
            <MarkText text="Create professional business cards that communicate credibility and build trust." />
            <MarkText text="Elevate your small business with visually stunning and impactful business cards crafted online." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="business card maker"
        path="/templates/business-cards"
        image={`${assetsUrl}/w_assets/images/bussinessCard8.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Get Started Now and Create Your Professional Business Card Today!"
        text="Your business card is your first impression – Make it count by creating your own today!"
        navigate="/templates/business-cards"
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
          heading="Are there free business card templates available?"
          text={
            <>
              Yes, Crafty Art offers a range of free business card templates.
              You can access them through our online tool, customize them to
              suit your needs, and create professional-looking business cards
              without any cost.
            </>
          }
        />

        <FaqsBox
          heading="What types of industries do your business card templates cater to?"
          text={
            <>
              <FLink lk={`${domain}`}>Crafty Art</FLink> offers a diverse
              collection of business card templates suitable for various
              industries. Whether you're in a creative field, corporate sector,
              or a casual business, you'll find templates that align with your
              industry and style.
            </>
          }
        />

        <FaqsBox
          heading="How can I ensure my business cards look professional and stand out?"
          text={
            <>
              To ensure professional and standout business cards, choose a clean
              and well-designed template, use high-quality images and fonts,
              maintain a balance between text and visuals, and personalize the
              content to reflect your brand. Preview the design before
              finalizing it to ensure a polished look.
            </>
          }
        />
      </Box>
    </>
  );
}
