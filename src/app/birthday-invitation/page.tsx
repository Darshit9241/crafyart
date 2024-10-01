"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

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
        image={`${assetsUrl}/w_assets/images/birthdayBanner.png`}
        heading={
          "2.5k Free Birthday Invitation Cards Design"
        }
        text="Create memorable birthday invitation cards with ease. Customize stylish templates to reflect your celebration and make your special day truly unforgettable"
      />
      <Box>
        <link
          rel="canonical"
          title={"2.5k Free Birthday Invitation Cards Design"}
          href={`https://www.craftyartapp.com/birthday-invitation`}
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
                  name: "How can I personalize my birthday invitation with your templates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Explore Crafty Art’s collection of templates and use our user-friendly customization tools to add your personal touch. Whether it's text, images, or details, make it uniquely yours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are the birthday invitation templates free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, all our birthday invitation templates are entirely free. Enjoy the freedom of designing professional invitations without any hidden fees – design, customize, and download at no cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the invitation maker suitable for users with no design experience?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art’s invitation maker is designed to be user-friendly for everyone. No design skills are necessary. Simply drag, drop, and customize to create professional-looking invitations effortlessly, even if you're a beginner.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What themes are available in your birthday invitation template collection?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Discover a diverse range of themes suitable for all ages in our template library. From birthdays for kids to milestones and surprise parties, find the perfect match for your celebration, whether it's playful and vibrant or elegant and sophisticated.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Create custom birthday invitations in minutes and make your celebration extra special!"
        }
        text="Elevate Your Celebration! Explore Trendy Birthday Invitations for a Memorable Bash and Invitation Designs That Spark Joy.Unleash the Fun with Exclusive Designs! 🎂🎈 Your Perfect Party Awaits. Don't Miss Out on the Excitement."
        buttonName="Get Started"
        navigate="/s/birthday"
        image={
          <Box sx={{ width: "450px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/birthdayBanner.png`}
              alt="birthdayBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect birthday
        invitations?"
        point={
          <Box>
            <MarkText text=" Choose a template or start from scratch" />
            <MarkText text=" Add your own images, text, and graphics" />
            <MarkText text=" Customise colours, fonts, and layouts" />
            <MarkText text=" Preview and edit until you're satisfied" />
            <MarkText text=" Download, print or share your invitation" />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayInvitation.png`}
      />

      <RightImageSection
        title="Craft the birthday invitation with
        ease :"
        point={
          <Box>
            <MarkText text="Determine the type of party you want to host and choose a suitable theme." />
            <MarkText text="Decide on the budget for the party and determine how much you can spend on invitations." />
            <MarkText text="Consider the guest list and ensure that the invitations reflect the appropriate tone and style." />
            <MarkText text="Crafty Art allows you to create birthday invitations easily and effectively." />
            <MarkText text="Plan ahead and allot enough time to complete the invitation design and send them out to your guests." />
          </Box>
        }
        buttonName={"Create your Card "}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayEase.png`}
      />

      <LeftImageSection
        title="Make custom birthday invitations
        in minutes"
        point={
          <Box>
            <MarkText text="Choose a customizable template or create one from scratch using a design platform." />
            <MarkText text="Personalise the invitation by adding text, images, and other details that match the party's theme and style." />
            <MarkText text="Use tools such as colour schemes, fonts, and layouts to create an eye-catching design." />
            <MarkText text="Preview the invitation before finalising it and make any necessary changes or adjustments." />
            <MarkText text="Save the finished product as a high-quality file format for easy sharing and printing options." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayMinute.png`}
      />

      <ExploreTemplates
        getAll={"/s/birthday"}
        category="birthday"
        keyword="Birthday"
      />

      <LeftImageSection
        title="
        Explore Creative Birthday Invitation Templates
        "
        point={
          <Box>
            <MarkText text="Discover a diverse collection of birthday invitation templates tailored to your unique style." />
            <MarkText text="Choose from a variety of themes and designs to make your celebration truly special." />
            <MarkText text="Effortlessly customize your invites with our easy-to-use tools." />
            <MarkText text="Find the perfect template that resonates with the theme of your celebration." />
            <MarkText text="Express your personality through our wide range of creative options." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayInvitation2.png`}
      />

      <RightImageSection
        title="Personalized Birthday Invitation Cards Online"
        point={
          <Box>
            <MarkText text="Create lasting memories with Crafty Art’s customizable birthday invitation cards." />
            <MarkText text="Add a personal touch by including photos, messages, and event details." />
            <MarkText text="Experience the joy of sending unique and heartfelt invitations." />
            <MarkText text="Showcase your individuality by personalizing fonts, colors, and layouts." />
            <MarkText text="Impress your guests with invitations that reflect your style and thoughtfulness." />
          </Box>
        }
        buttonName={"Create your Card "}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayEase2.png`}
      />

      <LeftImageSection
        title="Celebrate Freely with Online Birthday Invitations"
        point={
          <Box>
            <MarkText text="Go digital and send your birthday invitations online for free." />
            <MarkText text="Save time and money while reducing environmental impact with paperless invites." />
            <MarkText text="Enjoy the convenience of managing RSVPs and updates effortlessly." />
            <MarkText text="Share your online invitations across various platforms with just a few clicks." />
            <MarkText text="Keep your guests informed and engaged with real-time event updates." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayMinute2.png`}
      />

      <RightImageSection
        title="Craft Your Own Birthday Invitations
        With Crafty Art’s Free
        Invitation Maker"
        point={
          <Box>
            <MarkText text="Unleash your creativity with our user-friendly birthday invitation maker." />
            <MarkText text="Design stunning invitations without any design skills – it's that simple!" />
            <MarkText text="Save and share your creations instantly with friends and family." />
            <MarkText text="Access a library of design elements to enhance your invitation aesthetics." />
            <MarkText text="Enjoy a seamless and enjoyable invitation-making experience from start to finish." />
          </Box>
        }
        buttonName={"Create your Card "}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayEase3.png`}
      />

      <LeftImageSection
        title="Unlock a World of Birthday Invitations Online Free"
        point={
          <Box>
            <MarkText text="Access a vast array of free birthday invitation templates for every age and theme." />
            <MarkText text="Embrace the freedom to design, customize, and download invitations at no cost." />
            <MarkText text="Elevate your celebration with professional-looking invites without breaking the bank." />
            <MarkText text="Browse through a diverse selection, from playful and fun to elegant and sophisticated." />
            <MarkText text="Create a memorable and visually appealing invitation suite effortlessly." />
          </Box>
        }
        buttonName={"Choose your Template"}
        alt="birthday invitations"
        path="/s/birthday"
        image={`${assetsUrl}/w_assets/images/birthdayMinute3.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Birthday Invitation Templates. "
        text="Design your perfect birthday invitation in just a few clicks!"
        navigate="/s/birthday"
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
          heading="How can I personalize my birthday invitation with your templates?"
          text={
            <>
              Explore Crafty Art’s collection of templates and use our
              user-friendly customization tools to add your personal touch.
              Whether it's text, images, or details, make it uniquely yours.
            </>
          }
        />

        <FaqsBox
          heading="Are the birthday invitation templates free to use?"
          text={
            <>
              Yes, all our{" "}
              <FLink lk={`${domain}birthday-invitation`}>
                {" "}
                birthday invitation templates
              </FLink>{" "}
              are entirely free. Enjoy the freedom of designing professional
              invitations without any hidden fees – design, customize, and
              download at no cost.
            </>
          }
        />

        <FaqsBox
          heading="Is the invitation maker suitable for users with no design experience?"
          text={
            <>
              Yes, Crafty Art’s invitation maker is designed to be user-friendly
              for everyone. No design skills are necessary. Simply drag, drop,
              and customize to create professional-looking{" "}
              <FLink lk={`${domain}invitation`}> invitations</FLink>
              effortlessly, even if you're a beginner.
            </>
          }
        />

        <FaqsBox
          heading="What themes are available in your birthday invitation template collection?"
          text={
            <>
              Discover a diverse range of themes suitable for all ages in our
              template library. From birthdays for kids to milestones and
              surprise parties, find the perfect match for your celebration,
              whether it's playful and vibrant or elegant and sophisticated.
            </>
          }
        />
      </Box>
    </>
  );
}
