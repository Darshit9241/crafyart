import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import { MarkText } from "../Home/landingPage/LandingPage";
import Head from "next/head";
import LeftImageSection from "@/src/app/wedding/components/LeftImageSection";

export default function LogoStatic() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <div>
      <Box className="pt-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How Does Customize Your Logo ?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an logo with our online utility is simple and
          straightforward. You can make a beautiful logo for your event by
          following the easy set of rules given below.
        </Typography>

        <Box className="flex gap-5 py-[30px] sm:py-[50px] w-full xl:w-[83%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="flex gap-3 mb-10">
              {["", "", "", ""].map((item, index) => (
                <Box
                  key={index}
                  className={`${
                    activeStep === index + 1
                      ? "bg-[#1C3048]  text-white"
                      : "bg-[#EDF0F9]  text-[#5C626A]"
                  }  text-[20px] font-semibold cursor-pointer h-[38px] w-[40px] rounded-full flex justify-center items-center`}
                  onClick={() => setActiveStep(index + 1)}
                >
                  {index + 1}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: activeStep === 1 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 1
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Browse
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                Explore our diverse collection of logo design templates. Filter
                by industry, style, or color to find options that resonate with
                your brand.
              </Typography>
            </Box>

            <Box sx={{ display: activeStep === 2 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 2
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Select
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                Once you've found the perfect template, click to view details.
                See how the design looks in different applications and envision
                how it can elevate your brand.
              </Typography>
            </Box>

            <Box sx={{ display: activeStep === 3 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 3
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Customize
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                Personalize your chosen template using our intuitive
                customization tools. Experiment with colors, fonts, and layout
                until you achieve the desired look.
              </Typography>
            </Box>

            <Box sx={{ display: activeStep === 4 ? "block" : "none" }}>
              <Typography
                className="inline-block mb-4"
                sx={{ borderBottom: "1px solid black" }}
              >
                Step 4
              </Typography>

              <Typography className="mb-5 font-semibold text-[20px]">
                Download
              </Typography>

              <Typography className="text-[#5C626A] text-[15px]">
                When you're satisfied with your design, download the
                high-resolution files. Our templates come in formats compatible
                with various design software for seamless integration into your
                branding strategy.
              </Typography>
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={`${assetsUrl}/w_assets/images/category/makeLogo1.png`}
              alt={"logo template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE]   ">
        <Box className="flex gap-5 py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box
              sx={{
                mx: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                className="text-[#1C3048] text-[30px] max-sm:text-[25px] font-[600] mb-5"
              >
                Why Choose Our Logo Design Templates?
              </Typography>

              <FaqsBox
                heading="Professional Craftsmanship"
                text="Our templates are created by skilled designers who understand the nuances of effective logo design. Each template reflects a commitment to quality and professionalism."
              />

              <FaqsBox
                heading="Versatility"
                text="From sleek and modern to classic and timeless, our collection encompasses a wide range of styles. Find the perfect match for your brand's personality, ensuring that your logo stands out in any industry."
              />

              <FaqsBox
                heading="Easy Customization"
                text="Tailor your chosen template to suit your brand with ease. Our templates are fully customizable, allowing you to adjust colors, fonts, and layout to create a logo that truly represents your vision."
              />

              <FaqsBox
                heading="Affordable Solutions"
                text="Hiring a designer for a custom logo can be expensive. Our templates offer a cost-effective alternative without compromising on quality. Invest in your brand without breaking the bank."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={`${assetsUrl}/w_assets/images/category/chooseLogo.png`}
              alt={"logo template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How It Works"
        point={
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Browse:  Explore our diverse collection of logo design templates. Filter by industry, style, or color to find options that resonate with your brand." />
              <MarkText text="Select:  Once you've found the perfect template, click to view details. See how the design looks in different applications and envision how it can elevate your brand." />
              <MarkText text="Customize:  Personalize your chosen template using our intuitive customization tools. Experiment with colors, fonts, and layout until you achieve the desired look." />
              <MarkText text="Download:  When you're satisfied with your design, download the high-resolution files. Our templates come in formats compatible with various design software for seamless integration into your branding strategy." />
            </Box>
          </Box>
        }
        alt={"logo template"}
        image={`${assetsUrl}/w_assets/images/logoC/Img1.png`}
      />

      <Box className="pt-[50px]  bg-[#F4F7FE]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 "
        >
          Customization Features
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Color Palettes
              </Typography>
              <Typography className="font-medium">
                Experiment with a spectrum of colors to find the perfect palette
                for your brand. Whether you want to convey trust, energy, or
                sophistication, our customization options make it easy.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Font Selection
              </Typography>
              <Typography className="font-medium">
                Choose from a curated selection of fonts to complement your
                logo. Find the perfect balance between readability and style to
                make your brand name memorable.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Layout Flexibility
              </Typography>
              <Typography className="font-medium">
                Adjust the layout to suit different applications. Whether it's a
                compact square for social media avatars or a horizontal layout
                for website headers, our templates are adaptable to your needs.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                File Formats for Every Occasion
              </Typography>
              <Typography className="font-medium">
                Download your logo in a variety of file formats, ensuring
                compatibility with all your branding needs. From high-resolution
                print files to web-friendly formats, we've got you covered.
              </Typography>
            </Box>
          </Box>
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/logoC/img2.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]   ">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 "
        >
          Your Brand, Your Journey
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/logoC/img3.png`}
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
                Inspiration Hub
              </Typography>
              <Typography className="font-medium">
                Stuck in the creative process? Explore our Inspiration Hub for
                design tips, case studies, and success stories. Get inspired by
                how other businesses have leveraged our logo design templates to
                create memorable brand identities.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Educational Resources
              </Typography>
              <Typography className="font-medium">
                Enhance your branding knowledge with our educational resources.
                From logo design basics to branding strategy tips, empower
                yourself to make informed decisions about your brand's visual
                representation.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Start Building Your Legacy
              </Typography>
              <Typography className="font-medium">
                Your brand deserves more than just a logo; it deserves a visual
                legacy that resonates with your audience. Begin your journey
                with Crafty Art’s Logo Design Templates. Explore, customize, and
                leave your mark on the world.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="pt-[70px] pb-[20px]  px-[20px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4"
        >
          What are Customers Saying about Crafty Art
        </Typography>
        <Typography className="text-center">
          Crafty Art has a proven track record of delivering efficiency, results
          and excellent customer service.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center ">
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{
                  backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/girl1.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>Olivia Davis</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art's custom invitations exceeded my expectations. Their
              user-friendly graphics design tools made it easy to create a
              unique design. The quality and design of invitation card was
              outstanding, and their customer service was top-notch. Quick
              delivery and attention to detail set Crafty Art apart. They made
              my event extra special!,”
            </Typography>
          </Box>
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{
                  backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man3.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>Ethan Wilson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art Graphic Design Tool has been a game-changer for my
              design projects. Here a reasons why Crafty Art has earned my trust
              and loyalty: User Feedback Integration, Cross-Platform
              Compatibility, Time-Saving Features, Regular Content Updates,
              Security and Privacy, Advanced Export Options and Many More…”
            </Typography>
          </Box>
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{
                  backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man2.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>James Johnson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art is a fantastic online caricature tool for creating
              unique invitations. Its user-friendly interface make easy to
              design personalized caricatures that bring fun and humor in to my
              event. With excellent customer support and quick delivery, I
              prefer to design Caricature invitations with Crafty Art!,”
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="bg-[#F4F7FE] py-[70px]">
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
          className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px]  "
        >
          <QuestionsTitle
            text1={"Some Popular"}
            text2={"Questions/Answered"}
            text3=""
          />
          <Box sx={{ p: "20px" }}></Box>

          <FaqsBox
            heading="1. What is Logo Design?"
            text="Logo design is the process of creating a unique symbol or emblem that visually represents a brand, company, or individual. It involves the use of typography, colours, and graphic elements to create a distinctive visual identity."
          />
          <FaqsBox
            heading="2. Why is a logo important for my business?"
            text="A logo is an essential component of your brand identity. It helps your customers to recognize and remember your
          business, products, and services. A well-designed logo can create a positive impression, build trust, and communicate
          your brand's values and personality."
          />
          <FaqsBox
            heading="3. How long does it take to design a logo?"
            text="The time required to design a logo depends on various factors, such as the complexity of the design, the number of
          revisions needed, and the designer's availability. Typically, it can take anywhere from a few days to a few weeks to
          create a high-quality logo."
          />
          <FaqsBox
            heading="4. How much should I expect to pay for a logo design?"
            text="The cost of a logo design can vary significantly depending on the designer's experience, the complexity of the design,
          and the level of customization required. Generally, you can expect to pay anywhere between $1 to $1000 for a
          professional logo design."
          />
          <FaqsBox
            heading="5. What should I consider when designing a logo for my business?"
            text="When designing a logo for your business, you should consider several factors to ensure that it reflects your brand
          identity and resonates with your target audience. These factors include selecting appropriate colours that represent
          your brand values and personality, choosing a font style that aligns with your brand messaging, and creating a design
          that is simple, memorable, and easily recognizable."
          />
        </Box>
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
                  name: "1. What is Logo Design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Logo design is the process of creating a unique symbol or emblem that visually represents a brand, company, or individual. It involves the use of typography, colours, and graphic elements to create a distinctive visual identity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Why is a logo important for my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A logo is an essential component of your brand identity. It helps your customers to recognize and remember your business, products, and services. A well-designed logo can create a positive impression, build trust, and communicate your brand's values and personality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. How long does it take to design a logo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The time required to design a logo depends on various factors, such as the complexity of the design, the number of revisions needed, and the designer's availability. Typically, it can take anywhere from a few days to a few weeks to create a high-quality logo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. How much should I expect to pay for a logo design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The cost of a logo design can vary significantly depending on the designer's experience, the complexity of the design, and the level of customization required. Generally, you can expect to pay anywhere between $1 to $1000 for a professional logo design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. What should I consider when designing a logo for my business?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "When designing a logo for your business, you should consider several factors to ensure that it reflects your brand identity and resonates with your target audience. These factors include selecting appropriate colours that represent your brand values and personality, choosing a font style that aligns with your brand messaging, and creating a design that is simple, memorable, and easily recognizable.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
    </div>
  );
}
