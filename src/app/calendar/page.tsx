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
        image={`${assetsUrl}/w_assets/images/calendarDesign.png`}
        heading={"Create Personalized Calendars with Our Custom Calendar Maker"}
        text="Design your own unique calendars effortlessly with our custom calendar maker. Choose themes, add photos, and personalize dates for a truly one-of-a-kind calendar experience."
      />

<Box>
        <link
          rel="canonical"
          title={"Create Personalized Calendars with Our Custom Calendar Maker"}
          href={`https://www.craftyartapp.com/calendar`}
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
                  name: "What customization options are offered for Crafty Art's custom calendars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art's custom calendar maker allows you to personalize with photos, themes, colors, and fonts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use my own photos in the custom calendar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can easily upload and use your own photos to create a unique and personalized calendar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What sizes and formats are available for custom calendars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art offers various sizes and formats, including wall, desk, and poster-style calendars.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a limit to the number of photos I can include in my custom calendar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art's custom calendar maker typically allows you to include multiple photos for each month, but there may be a limit based on the chosen design. Check the options during customization.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Stay organized and stylish all year round with our custom calendar maker!"
        }
        text="Create personalized calendars effortlessly with our Custom Calendar Maker. Tailor each month with your favorite photos, events, and themes. Design a unique calendar that reflects your style and memories. Easy-to-use, creative, and perfect for gifts or personal use.
        "
        buttonName="Get Started"
        navigate="/templates/calendar"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/calendarBanner.png`}
              alt="calendarBanner"
              style={{
                width: "100%",
                height: "100%",
                paddingRight: "0px",
              }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="What elements should be included
        in a calendar design?"
        point={
          <Box>
            <MarkText text="Identify the purpose of your calendar and essential information to convey." />
            <MarkText text="Choose a visual style that aligns with your brand identity and target audience preferences." />
            <MarkText text="Consider the layout and organisation of the calendar, including size and placement of elements." />
            <MarkText text="Use clear and consistent formatting with grid lines, labels, and icons." />
            <MarkText text="Include interactive features and calls-to-action to increase user engagement." />
          </Box>
        }
        buttonName={"Design your Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendarDesign.png`}
      />
      <RightImageSection
        title="How to make a unique calendar?"
        point={
          <Box>
            <MarkText text="Brainstorm creative concepts and themes that align with your brand messaging." />
            <MarkText text="Experiment with design elements such as colour schemes, fonts, textures, and imagery." />
            <MarkText text="Incorporate multimedia and interactive components, like videos, animations, and games." />
            <MarkText text="Consider adding user-generated content, such as photos or testimonials." />
            <MarkText text="Test different variations of your design with user feedback and analytics data for optimization." />
          </Box>
        }
        buttonName={"Create Your Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendarUnique.png`}
      />

      <LeftImageSection
        title="Top 5 trending designs for calendar"
        point={
          <Box>
            <MarkText text="Minimalist design with white space and simple fonts." />
            <MarkText text="Vintage design with retro-inspired graphics and muted colours." />
            <MarkText text="Illustrative design with hand-drawn or digital illustrations." />
            <MarkText text="Interactive design with gamification elements like quizzes and challenges." />
            <MarkText text="Typography-driven design with bold, expressive typography as the primary visual element." />
          </Box>
        }
        buttonName={"Explore Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendarTrending.png`}
      />

      <ExploreTemplates getAll={"/s/calendar"} keyword="Calendar" />

      <RightImageSection
        title="Unlock Your Creativity with Our Free Calendar Maker!"
        point={
          <Box>
            <MarkText text="Create Personalized Calendars Effortlessly" />
            <MarkText text="Tailor Your Calendar with Free Customization Options" />
            <MarkText text="Express Your Style: Design a Calendar That Reflects You" />
            <MarkText text="No Cost, No Hassle: Enjoy a Seamless Free Calendar-Making Experience" />
            <MarkText text="Get Started Now: Craft Your Perfect Calendar Online" />
          </Box>
        }
        buttonName={"Create Your Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendar1.png`}
      />

      <LeftImageSection
        title="Crafting Memories: Making a Custom Calendar Has Never Been Easier!
        "
        point={
          <Box>
            <MarkText text="Capture Moments: Turn Your Photos into a Custom Calendar" />
            <MarkText text="Highlight Special Occasions with Personalized Dates" />
            <MarkText text="Share Your Creations: Gift Custom Calendars to Loved Ones" />
            <MarkText text="Simple Steps, Stunning Results: Your Unique Calendar Awaits" />
            <MarkText text="Discover the Joy of Making a Calendar Tailored Just for You" />
          </Box>
        }
        buttonName={"Explore Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendar2.png`}
      />

      <RightImageSection
        title="Your Vision, Your Calendar: Try Our Online Calendar Maker Today!

        "
        point={
          <Box>
            <MarkText text="Access Anywhere: Design Your Calendar from Any Device" />
            <MarkText text="Real-Time Editing: Watch Your Calendar Come to Life Instantly" />
            <MarkText text="Save and Share: Seamlessly Collaborate with Friends and Family" />
            <MarkText text="User-Friendly Interface: No Design Skills Required" />
            <MarkText text="Online Convenience: Your Custom Calendar, Anytime, Anywhere" />
          </Box>
        }
        buttonName={"Create Your Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendar3.png`}
      />

      <LeftImageSection
        title="Express Yourself with Our Free Online Calendar Maker!
        "
        point={
          <Box>
            <MarkText text="Unlimited Designs: Choose from a Vast Array of Templates" />
            <MarkText text="Customize Colors, Fonts, and Themes at Your Fingertips" />
            <MarkText text="Effortless Editing: Drag, Drop, and Design with Ease" />
            <MarkText text="Stand Out: Create a Calendar as Unique as Your Personality" />
            <MarkText text="Download and Print: Enjoy Your Custom Calendar in Minutes" />
          </Box>
        }
        buttonName={"Explore Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendar4.png`}
      />

      <RightImageSection
        title="Transform Ideas into Reality: Experience the Best Calendar Maker Online!        "
        point={
          <Box>
            <MarkText text="Professional Results: Print High-Quality Calendars at Home" />
            <MarkText text="Time-Saving Templates: Kickstart Your Calendar-Making Journey" />
            <MarkText text="Free and Easy: No Hidden Costs, No Learning Curve" />
            <MarkText text="Interactive Design: Make Changes on the Fly with Our Intuitive Tools" />
            <MarkText text="Start Today: Your Dream Calendar is Just a Click Away!" />
          </Box>
        }
        buttonName={"Explore Calendar"}
        alt="calendar design"
        path="/templates/calendar"
        image={`${assetsUrl}/w_assets/images/calendar5.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Stay organised, stay on schedule - with our customizable calendar maker!"
        text="Start planning your days the way you want them - create your perfect calendar today!"
        navigate="/templates/calendar"
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
          heading="What customization options are offered for Crafty Art's custom calendars?"
          text={
            <>
              Crafty Art's{" "}
              <FLink lk={`${domain}calendar`}>custom calendar maker</FLink>{" "}
              allows you to personalize with photos, themes, colors, and fonts.
            </>
          }
        />

        <FaqsBox
          heading="Can I use my own photos in the custom calendar?"
          text={
            <>
              Yes, you can easily upload and use your own photos to create a
              unique and{" "}
              <FLink lk={`${domain}calendar`}>personalized calendar.</FLink>{" "}
            </>
          }
        />

        <FaqsBox
          heading="What sizes and formats are available for custom calendars?"
          text={
            <>
              <FLink lk={`${domain}`}>Crafty Art</FLink> offers various sizes
              and formats, including wall, desk, and poster-style calendars.
            </>
          }
        />

        <FaqsBox
          heading="Is there a limit to the number of photos I can include in my custom calendar?"
          text={
            <>
              <FLink lk={`${domain}calendar`}>
                Crafty Art's custom calendar maker
              </FLink>{" "}
              typically allows you to include multiple photos for each month,
              but there may be a limit based on the chosen design. Check the
              options during customization.
            </>
          }
        />
      </Box>
    </>
  );
}
