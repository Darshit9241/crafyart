import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import CustomHead from "../common/CustomHead";
import Head from "next/head";

export default function FestivalBanner() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <div>
      <Box className="py-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Create Festival Banner On CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-[85%] max-xl:w-full mx-auto mt-[30px] md:mt-[40px] ">
          <Box
            className="bg-[#F6ECE0] rounded-[5px] py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className=" lg:min-h-[200px]">
              <img
                src={`${assetsUrl}/w_assets/images/category/Cfestival1.png`}
                alt={"Festival"}
                className="max-h-[200px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              1. Choose A Template
            </Typography>

            <Typography className="text-center ">
              Turn up the volume and set the stage on fire with our Music
              Festival Madness templates. Bold, dynamic, and pulsating with
              energy, these designs are perfect for concerts, music festivals,
              and any event where the beats never stop.
            </Typography>
          </Box>
          <Box
            className="bg-[#F6ECE0] rounded-[5px] py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className=" lg:min-h-[200px]">
              <img
                src={`${assetsUrl}/w_assets/images/category/Cfestival2.png`}
                alt={"Festival"}
                className="max-h-[200px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              2. Customize This Template
            </Typography>

            <Typography className="text-center ">
              Immerse yourself in the rich tapestry of cultures with our
              Cultural Extravaganza templates. From traditional motifs to modern
              interpretations, these templates bring the essence of diverse
              celebrations to your event.
            </Typography>
          </Box>
          <Box
            className="bg-[#F6ECE0] rounded-[5px] py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className=" lg:min-h-[200px]">
              <img
                src={`${assetsUrl}/w_assets/images/category/Cfestival3.png`}
                alt={"Festival"}
                className="max-h-[200px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              3. Download And Share
            </Typography>

            <Typography className="text-center ">
              After customizing the festival template to your satisfaction,
              download the final version. Save it in a format that is compatible
              with your needs, such as PDF or image formats.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE]    ">
        <Box className="flex gap-5 py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box
              sx={{
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                className="text-[#1C3048] text-[30px] max-sm:text-[25px] font-[600] mb-4"
              >
                Why Choose Our Festival Templates?
              </Typography>

              <FaqsBox
                heading="Versatility"
                text="Our templates are versatile and customizable to suit a variety of festivals and events."
              />

              <FaqsBox
                heading="High-Quality Design"
                text="Each template is crafted with precision, ensuring a visually stunning and professional look."
              />

              <FaqsBox
                heading="Easy Customization"
                text="Customize colors, fonts, and elements effortlessly to match your event theme."
              />

              <FaqsBox
                heading="Print-Ready"
                text="Whether digital or print, our templates are ready for use in various formats."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={`${assetsUrl}/w_assets/images/category/whyChooseFestival.png`}
              alt={""}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4"
        >
          Explore Our Categories
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/festivalC/img1.png`}
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
                Cultural Extravaganza
              </Typography>
              <Typography className="font-medium">
                Immerse yourself in the rich tapestry of cultures with our
                Cultural Extravaganza templates. From traditional motifs to
                modern interpretations, these templates bring the essence of
                diverse celebrations to your event.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Music Festival Madness
              </Typography>
              <Typography className="font-medium">
                Turn up the volume and set the stage on fire with our Music
                Festival Madness templates. Bold, dynamic, and pulsating with
                energy, these designs are perfect for concerts, music festivals,
                and any event where the beats never stop.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Holiday Cheer
              </Typography>
              <Typography className="font-medium">
                Spread the holiday joy with our Holiday Cheer templates. Whether
                it's Christmas, New Year, Diwali, or any other festive occasion,
                these templates add a touch of magic and warmth to your
                celebrations.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Seasonal Spectacle
              </Typography>
              <Typography className="font-medium">
                Embrace the beauty of the seasons with our Seasonal Spectacle
                templates. From spring blossoms to winter wonderlands, these
                designs capture the essence of nature's changing moods.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Family and Friends Fiesta
              </Typography>
              <Typography className="font-medium">
                For intimate gatherings and close-knit celebrations. Create
                invitations, banners, and more that reflect the love and
                togetherness of your special moments.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]  bg-[#F4F7FE]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 "
        >
          How to Get Started
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Browse:
              </Typography>
              <Typography className="font-medium">
                Explore our diverse collection and find the perfect template for
                your festival.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Customize:
              </Typography>
              <Typography className="font-medium">
                Tailor the template to your specific event details and theme.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Download:
              </Typography>
              <Typography className="font-medium">
                Download the finalized template and use it for invitations,
                posters, banners, and more.
              </Typography>
            </Box>
          </Box>
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/festivalC/img2.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Unleash the Festive Magic with Our Templates
          </Typography>
          <Typography className="font-medium">
            At Crafty Art, we understand that every celebration is unique, and
            our Festival Templates are designed to reflect that uniqueness.
            Whether you're organizing a city-wide carnival, a community
            gathering, or a private soirée, our templates cater to all scales of
            festivities. Let's explore more reasons why our templates are the
            perfect choice for your event:
          </Typography>
        </Box>

        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Captivating Visuals
          </Typography>
          <Typography className="font-medium">
            Our Festival Templates aren't just pieces of paper; they're visual
            stories that unfold the magic of your celebration. From eye-catching
            graphics to thoughtfully chosen color palettes, each template is a
            work of art that resonates with the vibrancy of your festival.
          </Typography>
        </Box>
        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Responsive Design
          </Typography>
          <Typography className="font-medium">
            In this digital age, accessibility is key. Our templates are
            optimized for various platforms and devices, ensuring a seamless
            experience for both online and offline promotions. Share the
            excitement on social media, through emails, or in print – our
            templates are ready for it all.
          </Typography>
        </Box>

        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Thematic Consistency
          </Typography>
          <Typography className="font-medium">
            Maintaining a consistent theme throughout your festival is essential
            for creating a memorable experience. Our templates are designed to
            complement each other, allowing you to create a cohesive visual
            identity across all aspects of your event, from invitations to
            signage.
          </Typography>
        </Box>

        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Effortless Editing
          </Typography>
          <Typography className="font-medium">
            You don't need to be a design guru to use our templates. With
            user-friendly editing tools, you can effortlessly customize text,
            images, and layout elements. Bring your creative vision to life
            without the hassle, and let our templates be the canvas for your
            imagination.
          </Typography>
        </Box>

        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Time-Saving Solutions
          </Typography>
          <Typography className="font-medium">
            Planning a festival involves juggling multiple tasks, and time is of
            the essence. Our templates save you valuable time, offering a
            shortcut to professional, polished designs. Spend less time worrying
            about graphics and more time focusing on the success of your event.
          </Typography>
        </Box>

        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Unleash the Festive Magic with Our Templates:
          </Typography>
          <Typography className="font-medium">
            At Crafty Art, we understand that every celebration is unique, and
            our Festival Templates are designed to reflect that uniqueness.
            Whether you're organizing a city-wide carnival, a community
            gathering, or a private soirée, our templates cater to all scales of
            festivities. Let's explore more reasons why our templates are the
            perfect choice for your event:
          </Typography>
        </Box>

        <Box className="mb-5">
          <Typography
            className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
            variant="h3"
          >
            Unleash the Festive Magic with Our Templates:
          </Typography>
          <Typography className="font-medium">
            At Crafty Art, we understand that every celebration is unique, and
            our Festival Templates are designed to reflect that uniqueness.
            Whether you're organizing a city-wide carnival, a community
            gathering, or a private soirée, our templates cater to all scales of
            festivities. Let's explore more reasons why our templates are the
            perfect choice for your event:
          </Typography>
        </Box>
      </Box>

      <Box className="pt-[70px] pb-[20px]  px-[20px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4 "
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
                  backgroundImage: `url(${assetsUrl}/w_assets/images/comment/girl1.jpg)`,
                }}
              ></Box>
              <Box className="font-medium">
                <Box>Olivia Davis</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} readOnly />
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
                  backgroundImage: `url(${assetsUrl}/w_assets/images/comment/man3.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>Ethan Wilson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} readOnly />
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
                  backgroundImage: `url(${assetsUrl}/w_assets/images/comment/man2.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>James Johnson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} readOnly />
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
            heading="1. Can I use Crafty Art for free?"
            text="Yes, Crafty Art offers a free online festival post maker. To access it, select the Logo Maker option from the main page and
          choose one of the premade templates. You can then add your own images, text, and design elements to customise the
          post. When you’re finished, click Save, and your logo will be ready to download."
          />
          <FaqsBox
            heading="2. What are the benefits of a premium subscription?"
            text="As a premium user you can download unlimited Crafty Art assets, and various services."
          />

          <FaqsBox
            heading="3. Why do i have to purchase Crafty Art Pro?"
            text="With the premium user, you can access unlimited service of Crafty Art Pro."
          />

          <FaqsBox
            heading="4. Are my downloads unlimited as a premium user?"
            text="Yes, as a premium user, you have unlimited downloads. There is no limitations on the use of Crafty Art assets, templates,
          and the Background Remover Tool."
          />
        </Box>
      </Box>

      {/* <CustomHead
        image={`${assetsUrl}/w_assets/images/festivalC/img2.png`}
        heading={
          "Dazzle Your Celebrations with Festive Vibes: Festival Templates for Memorable Events "
        }
        text="Elevate your festivities effortlessly! Explore stunning festival templates for invitations, decorations, and more. Make every moment unforgettable.        "
      /> */}
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
                  name: "1. Can I use Crafty Art for free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art offers a free online festival post maker. To access it, select the Logo Maker option from the main page and choose one of the premade templates. You can then add your own images, text, and design elements to customize the post. When you’re finished, click Save, and your logo will be ready to download.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. What are the benefits of a premium subscription?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a premium user, you can download unlimited Crafty Art assets and enjoy various premium services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. Why do I have to purchase Crafty Art Pro?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Purchasing Crafty Art Pro gives you access to unlimited premium services and features.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. Are my downloads unlimited as a premium user?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, as a premium user, you have unlimited downloads. There are no limitations on the use of Crafty Art assets, templates, and the Background Remover Tool.",
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
