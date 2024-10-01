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
        image={`${assetsUrl}/w_assets/images/partyBanner.png`}
        heading="Party Invitation Template: Customize Now!"
        text="Discover stunning party invitation templates. Personalize your event effortlessly. Get started!"
      />

      <Box>
        <link
          rel="canonical"
          title={"Party Invitation Template: Customize Now!"}
          href={`https://www.craftyartapp.com/party-invitation`}
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
                  name: "What kind of party invitation templates do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our party invitation templates cover a wide range of occasions, from casual get-togethers to formal events. We have templates for birthdays, weddings, baby showers, holidays, and more. Each template is professionally designed and customizable to make your event stand out.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customise the party invitation templates to fit my event's theme and style?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our party invitation templates are fully editable, so you can personalise them to match your event's theme and style. You can change the colours, fonts, and wording to create a unique invitation that reflects your personality and sets the tone for your celebration.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Create Your Perfect Party Invitation"}
        text="A party invitation is a written or digital communication that extends a warm welcome to individuals, inviting them to attend a social gathering, celebration, or event. It typically includes essential details like the event's purpose, date, time, location, dress code and RSVP instructions."
        buttonName="Get Started"
        navigate="/s/party-celebration"
        image={
          <Box sx={{ width: "410px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/partyBanner.png`}
              alt="partyBanner"
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
            <MarkText text=" Choose a theme and incorporate it into your invitation." />
            <MarkText text=" Use high-quality images and graphics for a visually appealing design." />
            <MarkText text=" Keep it simple by including only essential details like date, time, location, and RSVP information." />
            <MarkText text=" Consider the tone of your party and use appropriate language in your invitation." />
            <MarkText text=" Proofread the invitation for errors or typos before sending it out." />
          </Box>
        }
        buttonName={"Design your Card"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image={`${assetsUrl}/w_assets/images/partyBirthday.png`}
      />

      <RightImageSection
        title="Craft the party invitation with
        ease?"
        point={
          <Box>
            <MarkText text="Use templates for a professional-looking invitation design." />
            <MarkText text="Organise the information using bullet points or numbered lists." />
            <MarkText text="Choose easy-to-read fonts and avoid using too many different fonts or colours." />
            <MarkText text="Add personality with a fun quote or image related to the theme." />
            <MarkText text="Use online tools and apps that have pre-made templates for quick and easy design." />
          </Box>
        }
        buttonName={"Party Invitation"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image={`${assetsUrl}/w_assets/images/partyEase.png`}
      />

      <LeftImageSection
        title="Make custom party invitations in
        minutes?"
        point={
          <Box>
            <MarkText text="Use online design tools with pre-made templates for quick customization." />
            <MarkText text="Include all essential details and personalise the invitation with the guest's name or message." />
            <MarkText text="Add high-quality images or graphics for a visually appealing design." />
            <MarkText text="Keep the design simple and easy to read." />
            <MarkText text="Proofread the invitation for errors or typos before sending it out." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image={`${assetsUrl}/w_assets/images/partyMinutes.png`}
      />

      <ExploreTemplates
        category="party celebration"
        getAll="/s/party-celebration"
        keyword="Party Celebration"
      />

      <RightImageSection
        title="Why Crafty Art for Party Invitation?
        "
        point={
          <Box>
            <MarkText text="Diverse Template Collection: Choose from a wide range of party invitation templates, ensuring there's one for every occasion and theme imaginable." />
            <MarkText text="Easy-to-Use Card Creation: Effortlessly design your party invitations with user-friendly tools—no design experience required!" />
            <MarkText text="Online Convenience: Create and customize your invitations entirely online, saving time and hassle. No downloads needed!" />
            <MarkText text="Free, Yet Professional: Craft professional-looking invitations without spending a money. Enjoy high-quality designs at zero cost." />
            <MarkText text="Quick and Customizable: Customize pre-made templates instantly to match your unique party style and preferences." />
            <MarkText text="Share and Impress: Share your invitations digitally or print them out—impress your guests with personalized, eye-catching invites!" />
          </Box>
        }
        buttonName={"Party Invitation"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image={`${assetsUrl}/w_assets/images/party.png`}
      />

      <LeftImageSection
        title="Features Of Crafty Art Party Invitation Templates"
        point={
          <Box>
            <MarkText text="Unique Design Options: Find an array of unique and eye-catching designs for party invitations, ensuring your event stands out from the start." />
            <MarkText text="User-Friendly Interface: Our intuitive online tool makes designing invitations a breeze, allowing you to effortlessly navigate through customization options." />
            <MarkText text="Print or Share Digitally: Download printable versions or share digital copies of your party invitations through email, social media, or messaging apps." />
            <MarkText text="Tailored for Every Occasion: Whether it's a birthday, wedding, baby shower, or corporate event, discover templates perfect for every celebration." />
            <MarkText text="Versatile Customization: Personalize your invitations with various font styles, colors, images, and even incorporate event-specific details for a truly bespoke touch." />
            <MarkText text="Save Time, Effort, and Money: Skip the hassle of designing from scratch or hiring a designer. Our free tool saves you time, effort, and unnecessary costs." />
            <MarkText text="Responsive Design Options: Ensure your invitations look stunning on any device, adapting seamlessly to desktops, tablets, and mobile screens." />
            <MarkText text="Security and Privacy: Rest assured knowing your information and designs are secure and private, giving you peace of mind while creating and sharing invitations." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="Party Invitation"
        path="/s/party-celebration"
        image={`${assetsUrl}/w_assets/images/party2.png`}
      />

      <GetTemplates
        heading="Design your dream party invitation with just a few clicks"
        text="start your creative journey today!"
        navigate="/s/party-celebration"
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
          heading="What kind of party invitation templates do you offer?"
          text={
            <>
              Our{" "}
              <FLink lk={`${domain}party-invitation`}>
                party invitation templates
              </FLink>{" "}
              cover a wide range of occasions, from casual get-togethers to
              formal events. We have templates for birthdays, weddings, baby
              showers, holidays, and more. Each template is professionally
              designed and customizable to make your event stand out.
            </>
          }
        />

        <FaqsBox
          heading="Can I customise the party invitation templates to fit my event's theme and style?"
          text={
            <>
              Absolutely! Our party invitation templates are fully editable, so
              you can personalise them to match your event's theme and style.
              You can change the colours, fonts, and wording to create a unique
              invitation that reflects your personality and sets the tone for
              your celebration.
            </>
          }
        />
      </Box>
    </>
  );
}
