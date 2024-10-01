"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, Typography } from "@mui/material";

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
    <Box>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/logoCreateLogo.png`}
        heading={"Free Logo | Design Your Own Logo | Create Free Logo"}
        text=" Looking for Create a Free Logo for Your Own Business? Explore Our 5000+ Logo Designs and Make Logo For Free And Stand Out in Market. Create Business Logo Now!"
      />

      <Box>
        <link
          rel="canonical"
          title={"Free Logo | Design Your Own Logo | Create Free Logo"}
          href={`https://www.craftyartapp.com/logos`}
        />
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
                  name: "What is Logo Design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Logo design is the process of creating a unique symbol or emblem that visually represents a brand, company, or individual. It involves the use of typography, colours, and graphic elements to create a distinctive visual identity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is a logo important for my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A logo is an essential component of your brand identity. It helps your customers to recognize and remember your business, products, and services. A well-designed logo can create a positive impression, build trust, and communicate your brand's values and personality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to design a logo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The time required to design a logo depends on various factors, such as the complexity of the design, the number of revisions needed, and the designer's availability. Typically, it can take anywhere from a few days to a few weeks to create a high-quality logo.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Create Your Own Logo Design with Our Free Logo Maker in Few Clicks"
        }
        text="Designing your own logo has never been simpler. With our user-friendly logo maker online for free, you can make logo in just a few clicks. Say goodbye to complicated design software and expensive graphic designers."
        buttonName="Get Started"
        navigate="/templates/logos"
        image={
          <Box sx={{ width: "450px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/logoBanner.png`}
              alt="logoBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="Design The Perfect Logo To Grow Your Business"
        point={
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Our user-friendly logo crafting tool simplifies the process of creating the perfect logo for your brand." />
              <MarkText text="Choose from a wide selection of design templates and customise them to suit your needs." />
              <MarkText text="Our intuitive drag-and-drop interface allows you to easily add and edit text, graphics and other design elements." />
              <MarkText text="With our powerful logo creation tools, you can experiment with different fonts, colours and layouts until you find the perfect combination for your brand identity." />
              <MarkText text="Craft a professional-grade logo that will set your business apart from the competition." />{" "}
            </Box>
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image={`${assetsUrl}/w_assets/images/logoCreateLogo.png`}
      />

      <RightImageSection
        title="Make Custom Logos in Just Few Clicks"
        point={
          <Box>
            <MarkText text="Our online logo maker enables you to create a custom logo for your business in just a few minutes." />
            <MarkText text="Choose from a vast selection of design templates, icons, and fonts to get started." />
            <MarkText text="Customise your logo by changing the colors, font styles, and layout to fit your brand personality." />
            <MarkText text="Easily save and download your logo once it's completed." />
            <MarkText text="Our logo maker is accessible from any device, making it easy to create a logo on-the-go." />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image={`${assetsUrl}/w_assets/images/logoCustom.png`}
      />

      <LeftImageSection
        title="How to Make a Stunning Logo with Our Logo Creator"
        point={
          <Box>
            <MarkText text="Our logo maker offers a range of high-quality design tools that help you create stunning logos quickly and easily." />
            <MarkText text="Choose from a range of professionally designed templates, or start from scratch." />
            <MarkText text="Experiment with a variety of fonts, colors, and graphic elements to create a unique logo that reflects your brand identity." />
            <MarkText text="Our user-friendly interface makes it easy to create multiple versions of your logo, so you can choose the one that best fits your needs." />
            <MarkText text="Best of all, our logo maker is completely free, ensuring that you can create a professional-grade logo without breaking the bank." />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image={`${assetsUrl}/w_assets/images/logoStunning.png`}
      />

      <ExploreTemplates
        category="logo"
        getAll="/templates/logos"
        keyword="Logo"
      />

      <Box className="py-[50px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4"
        >
          Features Of Our Logo Creator ?
        </Typography>

        <Typography className="text-center max-sm:w-[90%] w-[70%] mx-auto text-[15px]">
          Our Logo Creator is your one-stop destination for designing logos that
          captivate, engage, and leave a lasting impression. Whether you're a
          startup on a tight budget or an established business looking to
          refresh your brand identity, we've got you covered. Explore the
          remarkable features of our Logo Creator that will set your brand on
          the path to success.
        </Typography>
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/logoCreator.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Versatile Design Options:
              </Typography>
              <Typography className="font-medium">
                Our Logo Creator offers a plethora of templates, icons, and
                fonts, enabling you to craft a logo that truly represents your
                brand.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                User-Friendly Interface:
              </Typography>
              <Typography className="font-medium">
                Our intuitive interface simplifies the design process, allowing
                you to experiment with shapes, colors, and typography
                seamlessly.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                High-Resolution Export:
              </Typography>
              <Typography className="font-medium">
                Your logo deserves to look sharp and crisp on all platforms. Our
                Logo Creator provides high-resolution export options.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Time-Efficient Branding:
              </Typography>
              <Typography className="font-medium">
                Save time without compromising quality. Our Logo Creator
                streamlines the logo design process.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <RightImageSection
        title="Why Choose Our Logo Maker?"
        point={
          <Box>
            <MarkText
              text="Are you searching for a Logo Maker Online that combines quality and convenience?
              Look no further, because our Logo Maker is your ultimate choice."
            />
            <MarkText
              text="For businesses, a compelling logo is essential. It's the visual representation of your
              brand, and it must capture the essence of your company."
            />
            <MarkText
              text="Are you in the gaming industry? We've got you covered with our Gaming Logo
Maker features. Craft a logo that's as dynamic and exciting as your gaming content."
            />
            <MarkText
              text="Not everyone can afford a professional graphic designer, and that's where our
              Logo Maker steps in, offering affordability without compromising on quality."
            />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image={`${assetsUrl}/w_assets/images/logoMaker.png`}
      />

      <LeftImageSection
        title="Ready to Transform Your Brand?"
        point={
          <Box>
            <MarkText text="Is your current logo failing to make an impact or connect with your audience?" />
            <MarkText
              text="You're missing out on potential customers because your logo doesn't resonate with
              them. You might even be losing credibility in a competitive market."
            />
            <MarkText
              text="With the help of our logos that tell your unique story, boost your brand's visual
              appeal, and help you stand out in your industry. Don't settle for a forgettable logo,
              let us help you create a memorable one!"
            />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image={`${assetsUrl}/w_assets/images/transformBrand.png`}
      />

      <RightImageSection
        title="Start Designing Your Logo Today"
        point={
          <Box>
            <MarkText
              text="Unlock your creativity and bring your vision to life with our logo maker. Whether
              you need a logo for your business or personal use, our free logo generator tool is
              here to simplify the logo design process."
            />
            <MarkText
              text="Join the ranks of satisfied users who have transformed their brands and projects
              with our logo maker."
            />
            <MarkText text="Give your brand the identity it deserves with our Logo Maker!" />
            <MarkText
              text="Whether you need a business logo, gaming logo, hospital logos, shop logos, store
logos, fashion logos, gym logos, medical store logos,  our Logo Maker has you
covered."
            />
          </Box>
        }
        buttonName={"Create a logo"}
        alt="Logo Maker"
        path="/templates/logos"
        image={`${assetsUrl}/w_assets/images/logoToday.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Ready to take your branding to the next level? Browse our 5000+ logo designs and find the perfect fit."
        text="Build your own brand identity - start with custom logos."
        navigate="/templates/logos"
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
          heading="1. What is Logo Design?"
          text={
            <>
              <FLink lk={`${domain}logos`}>Logo design</FLink> is the process of
              creating a unique symbol or emblem that visually represents a
              brand, company, or individual. It involves the use of typography,
              colours, and graphic elements to create a distinctive visual
              identity.
            </>
          }
        />
        <FaqsBox
          heading="2. Why is a logo important for my business?"
          text={
            <>
              A logo is an essential component of your brand identity. It helps
              your customers to recognize and remember your business, products,
              and services. A well-designed logo can create a positive
              impression, build trust, and communicate your brand's values and
              personality.
            </>
          }
        />
        <FaqsBox
          heading="3. How long does it take to design a logo?"
          text={
            <>
              The time required to design a logo depends on various factors,
              such as the complexity of the design, the number of revisions
              needed, and the designer's availability. Typically, it can take
              anywhere from a few days to a few weeks to create a high-quality
              logo.
            </>
          }
        />
      </Box>
    </Box>
  );
}
