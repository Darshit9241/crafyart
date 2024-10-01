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
        image={`${assetsUrl}/w_assets/hindu/banner.png`}
        heading={"Hindu Wedding Cards Online | Wedding Invitation Cards"}
        text="Design elegant Hindu invitations with ease. Customize traditional templates to reflect your ceremony's cultural essence and make your event truly special"
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
                  name: "What are the different types of Hindu wedding ceremonies that I can mention in my invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hindu weddings often involve multiple ceremonies like the Mehndi, Sangeet, Haldi, and Mandap Puja. You can mention these ceremonies in your wedding invitation, along with their respective dates, times, and venues, to provide guests with a complete schedule of events.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I include multiple languages in my Hindu wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is common to include multiple languages in Hindu wedding invitations to accommodate guests from different regions or linguistic backgrounds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I incorporate traditional rituals into my Hindu wedding invitation design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can incorporate traditional rituals by including symbols like diyas, lotus flowers, sacred fire, or the holy knot known as Mangal Sutra in your wedding card design.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Designing Hindu Wedding Cards with a Personal Touch"}
        text="Bring Your Hindu Wedding Card to Life with These Simple Tips"
        buttonName="Get Started"
        navigate="/s/hindu"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/hindu/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to choose the perfect design for my Indian wedding card?"
        point={
          <Box>
            <MarkText
              text="Explore our wide range of Hindu wedding card designs inspired by traditional
motifs, deities, and cultural symbols."
            />
            <MarkText
              text="Consider the colour palette that resonates with your wedding theme and personal
style."
            />
            <MarkText
              text="Look for intricate detailing and craftsmanship that reflects the richness of Hindu
traditions."
            />
            <MarkText
              text="Seek inspiration from religious scriptures, mythology, or regional customs to
incorporate meaningful elements."
            />
            <MarkText
              text="Consult with our design experts who can guide you in selecting a design that aligns
with your vision."
            />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="Hindu"
        path="/s/hindu"
        image={`${assetsUrl}/w_assets/hindu/img1.png`}
      />

      <RightImageSection
        title="What information should I include
        in my Hindu wedding invitation?"
        point={
          <Box>
            <MarkText
              text="Begin with a warm and heartfelt invitation message expressing your joy and inviting
guests to be a part of your special day."
            />
            <MarkText
              text="Include key details such as the date, time, and venue of the wedding ceremonies
and any associated events."
            />
            <MarkText
              text="Mention the names of the hosts and the couple's names, along with their parents'
names, if desired."
            />
            <MarkText
              text="Provide RSVP information, including contact details for guests to confirm their
attendance."
            />
            <MarkText
              text="Consider adding a separate card for additional wedding-related functions such as
the sangeet, mehndi, or reception."
            />
          </Box>
        }
        buttonName={"Create Your Card"}
        alt="Hindu"
        path="/s/hindu"
        image={`${assetsUrl}/w_assets/hindu/img2.png`}
      />

      <LeftImageSection
        title="Can I incorporate personalised
        elements into my Hindu wedding
        invitation?"
        point={
          <Box>
            <MarkText
              text="Absolutely! Personalise your Hindu wedding invitation by adding monograms,
initials, or a custom logo representing your unique identity as a couple."
            />
            <MarkText
              text="Include photographs or illustrations that capture your love story or depict moments
from your relationship."
            />
            <MarkText text="Choose fonts and typography that reflect your style and personality." />
            <MarkText
              text="Add embellishments like gold foiling, embossing, or laser cutting to enhance the
visual appeal."
            />
            <MarkText
              text="Collaborate with our design team to create a one-of-a-kind invitation that truly
reflects your love and union."
            />
          </Box>
        }
        buttonName={"Design your Template"}
        alt="Hindu"
        path="/s/hindu"
        image={`${assetsUrl}/w_assets/hindu/img3.png`}
      />

      <ExploreTemplates getAll={"/s/hindu"} keyword="hindu" />

      <CustomerSaying />

      <GetTemplates
        heading="Create a Timeless Hindu Wedding Invitation that Reflects Your Love Story!"
        text="Elegant Designs. Lasting Impressions. Your Perfect Hindu Wedding Invitation Awaits."
        navigate="/s/hindu"
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
          heading="What are the different types of Hindu wedding ceremonies that I can mention in my
          invitation?"
          text={
            <>
              Hindu weddings often involve multiple ceremonies like the
              "Mehndi," "Sangeet," "Haldi," and "Mandap Puja." You can mention
              these ceremonies in your{" "}
              <FLink lk={`${domain}wedding`}>wedding</FLink> invitation, along
              with their respective dates, times, and venues, to provide guests
              with a complete schedule of events.
            </>
          }
        />

        <FaqsBox
          heading="Can I include multiple languages in my Hindu wedding invitation?"
          text={
            <>
              Yes, it is common to include multiple languages in Hindu wedding
              invitations to accommodate guests from different regions or
              linguistic backgrounds.
            </>
          }
        />

        <FaqsBox
          heading="How can I incorporate traditional rituals into my Hindu wedding invitation design?"
          text={
            <>
              You can incorporate traditional rituals by including symbols like
              diyas, lotus flowers, sacred fire, or the holy knot known as
              "Mangal Sutra" in your wedding card design.
            </>
          }
        />
      </Box>
    </>
  );
}
