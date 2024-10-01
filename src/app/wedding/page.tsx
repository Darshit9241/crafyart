"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const CustomerSaying = dynamic(
  () =>
    import(
      "@/src/components/Home/landingPage/landingPageComponents/CustomerSaying"
    )
);
const ExploreTemplates = dynamic(
  () => import("@/src/components/common/ExploreTemplates")
);
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
const FLink = dynamic(() => import("@/src/components/common/FLink"));
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);
const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);
const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);
const LeftImageSection = dynamic(() => import("./components/LeftImageSection"));
const RightImageSection = dynamic(
  () => import("./components/RightImageSection")
);

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/weedingInvitationUnique.png`}
        heading={
          "Wedding Invitation Template Designs for Every Style and Theme"
        }
        text="Discover a Diverse Range of Wedding Invitation Templates - Classic, Modern, Rustic, and More! Create Your Perfect Invite Easily. Ideal for Every Wedding Theme."
      />

      <Box>
        <link
          rel="canonical"
          title={
            "Wedding Invitation Template Designs for Every Style and Theme"
          }
          href={`https://www.craftyartapp.com/wedding`}
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
                  name: "What is a wedding invitation template?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A wedding invitation template is a pre-designed digital file that contains the layout and design elements of a wedding invitation. It serves as a starting point for creating your own personalised invitations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customise a wedding invitation template?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, most wedding invitation templates are editable, which means you can make changes to the text, fonts, colours, and other design elements to suit your preferences.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What should I consider when choosing a wedding invitation template?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "When choosing a wedding invitation template, consider the theme, colour scheme, and overall style of your wedding. You should also evaluate the level of customization available with the template and whether it meets your needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What information should be included in a wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A wedding invitation typically includes the names of the couple, the date and time of the wedding, the location of the ceremony and reception, and RSVP information. You may also include additional details such as dress code, accommodations, and directions.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Browse Our Beautiful Collection of Wedding Invitation Templates"
        }
        text="Wedding invitation templates are pre-designed layouts or formats that serve as a foundation for creating personalized wedding invitations. These templates typically come in various styles, themes, colors, and designs, catering to different preferences and wedding themes."
        buttonName="Get Started"
        navigate="/s/wedding"
        image={
          <Box sx={{ width: "410px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/weddingBanner.png`}
              alt="weddingBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="What makes our wedding Invitation
        unique?"
        point={
          <Box>
            <MarkText text=" Handpicked Designs by Top Graphic Designers" />
            <MarkText text=" Range of Styles from Traditional to Modern" />
            <MarkText text=" Premium Quality Materials and Printing Techniques" />
            <MarkText text=" Unlimited Customization Options and Color Choices" />
            <MarkText text=" Affordable Pricing" />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="wedding Invitation"
        path="/s/wedding"
        image={`${assetsUrl}/w_assets/images/weedingInvitationUnique.png`}
      />

      <RightImageSection
        title="How to make a wedding invitation
        card?"
        point={
          <Box>
            <MarkText text="Log into your Crafty Art account and search for &#34;wedding invitation&#34; in the search bar." />
            <MarkText text="Choose a template that you like from the available options." />
            <MarkText text="Customise the template by changing the text, font, colour, and background to reflect your personal style and preferences." />
            <MarkText text="Review the final design to ensure all necessary information is included (such as the date, time, location, dress code, and RSVP details)." />
            <MarkText text="Download the finished design in your preferred format (PNG, JPG, PDF) and print it out on high-quality paper." />
          </Box>
        }
        buttonName={"Create your Card"}
        alt="wedding Invitation"
        path="/s/wedding"
        image={`${assetsUrl}/w_assets/images/weddingCard.png`}
      />

      <LeftImageSection
        title="What designs and styles are 
        available for Wedding Invitations?"
        point={
          <Box>
            <MarkText text="Traditional and Formal Designs" />
            <MarkText text="Modern and Minimalistic Designs" />
            <MarkText text="Floral and Botanical Designs" />
            <MarkText text="Beach and Destination Wedding Designs" />
            <MarkText text="Rustic and Vintage Designs" />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="wedding Invitation"
        path="/s/wedding"
        image={`${assetsUrl}/w_assets/images/weddingStyle.png`}
      />

      <ExploreTemplates getAll="/s/wedding" keyword="Wedding" />

      <RightImageSection
        title="Why Choose Crafty Art For Wedding
        Invitation Templates"
        point={
          <Box>
            <MarkText text="Versatile wedding invitation templates for every couple's style. From classic to modern, minimalist to intricate designs, we've got you covered." />
            <MarkText text="Customize effortlessly with our tools for your perfect wedding invite. Match colors, add names, details, and personal messages with ease." />
            <MarkText text="Crafty Art offers elegant, high-quality designs in various file formats. Our templates combine convenience with stunning invitation aesthetics." />
          </Box>
        }
        alt="wedding Invitation"
        image={`${assetsUrl}/w_assets/images/weddingCard2.png`}
      />

      <LeftImageSection
        title="Why Crafty Art Stands Out:"
        point={
          <Box>
            <MarkText text="Quality Assurance: Each template is meticulously crafted by talented designers, ensuring high-quality, print-ready invitations." />
            <MarkText text="Budget-Friendly Options: Access premium designs at affordable prices, catering to different budgets without compromising on elegance and style." />
            <MarkText text="Print and Digital Formats: Choose between print-ready formats or digital templates for email or social media sharing, providing flexibility and convenience." />
            <MarkText text="Crafty Art invites you to explore our extensive collection of wedding invitation templates. Let your invitations become a prelude to the beauty and magic of your special day. Celebrate love, individuality, and creativity with invitations that leave a lasting impression." />
          </Box>
        }
        alt="wedding Invitation"
        image={`${assetsUrl}/w_assets/images/weddingCard3.png`}
      />

      <Box className="py-[50px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4"
        >
          Customization Made Effortless
        </Typography>

        <Typography className="text-center max-sm:w-[90%] w-[70%] mx-auto text-[15px]">
          Crafty Art ensures that personalizing your chosen wedding invitation
          template is a seamless process:
        </Typography>
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/weddingCard4.png`}
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
                Editable Text Fields:
              </Typography>
              <Typography className="font-medium">
                Easily input your names, wedding date, venue details, and
                special messages using our user-friendly editing tools.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Font and Color Customization:
              </Typography>
              <Typography className="font-medium">
                Tailor the fonts, colors, and sizes to match your wedding theme
                and preferences.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Image and Layout Adjustments:
              </Typography>
              <Typography className="font-medium">
                Upload your images or tweak the layout to create a unique and
                personalized invitation.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <CustomerSaying />

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Wedding Templates."
        text="Love is in the air and we want you to be part of our big day! Join us as we begin our forever."
        navigate="/s/wedding"
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
          heading="What is a wedding invitation template?"
          text={
            <>
              A wedding <FLink lk={`${domain}invitation`}>invitation</FLink>
              template is a pre-designed digital file that contains the layout
              and design elements of a wedding invitation. It serves as a
              starting point for creating your own personalised invitations.
            </>
          }
        />

        <FaqsBox
          heading="Can I customise a wedding invitation template?"
          text={
            <>
              Yes, most wedding invitation templates are editable, which means
              you can make changes to the text, fonts, colours, and other design
              elements to suit your preferences.
            </>
          }
        />

        <FaqsBox
          heading="What should I consider when choosing a wedding invitation template?"
          text={
            <>
              When choosing a{" "}
              <FLink lk={`${domain}wedding`}>
                {" "}
                wedding invitation template,
              </FLink>{" "}
              consider the theme, colour scheme, and overall style of your
              wedding. You should also evaluate the level of customization
              available with the template and whether it meets your needs.
            </>
          }
        />

        <FaqsBox
          heading="What information should be included in a wedding invitation?"
          text={
            <>
              A wedding invitation typically includes the names of the couple,
              the date and time of the wedding, the location of the ceremony and
              reception, and RSVP information. You may also include additional
              details such as dress code, accommodations, and directions.
            </>
          }
        />
      </Box>
    </>
  );
}
