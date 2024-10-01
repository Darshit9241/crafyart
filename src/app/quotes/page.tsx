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

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/qoutesDesign.png`}
        heading={
          "Best Practices for Designing Quotes Posts that Engage Your Audience"
        }
        text="Tips and Techniques for Crafting Distinctive and Memorable Quotes Posts"
      />
      <Box>
        <link
          rel="canonical"
          title={"Best Practices for Designing Quotes Posts that Engage Your Audience"}
          href={`https://www.craftyartapp.com/quotes`}
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
                  name: "How can I design a quotes post that resonates with my target audience?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: " To design a quotes post that resonates with your audience, make sure to choose a quote that is relevant to their interests or pain points. Additionally, use colours and fonts that align with your brand identity, and incorporate images or graphics that help convey the message of the quote.",
                  },
                },

                {
                  "@type": "Question",
                  name: "Should I include my logo or website URL in my quotes post design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: " Yes, including your logo or website URL in your quotes post design can help build brand recognition and drive traffic to your website.",
                  },
                },

                {
                  "@type": "Question",
                  name: "What are some common mistakes to avoid when designing quotes posts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: " Some common mistakes to avoid when designing quotes posts include using illegible fonts, choosing a background that clashes with the text, and overloading the design with too many elements. It's also important to ensure that the quote you've chosen is accurate and properly attributed.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <GetStartedLinearBanner
        heading={
          "Best Practices for Designing Quotes Posts that  Engage Your Audience"
        }
        text="Tips and Techniques for Crafting Distinctive and Memorable Quotes Posts"
        buttonName="Get Started"
        navigate="/templates/quotes-post-square"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/qoutesBanner.png`}
              alt="quotesBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="What elements should be included
        in a quotes post design?"
        point={
          <Box>
            <MarkText text="Choose a visually appealing background that complements the quote and your brand identity" />
            <MarkText text=" Select a legible font that is easy to read on any device" />
            <MarkText text=" Use contrasting colors to make the text stand out from the background" />
            <MarkText text=" Add a simple yet eye-catching border or frame to the quote" />
            <MarkText text=" Include your logo or website URL to build brand recognition" />
          </Box>
        }
        buttonName={"Design your Quotes"}
        alt="quotes post design"
        image={`${assetsUrl}/w_assets/images/qoutesDesign.png`}
        path="/templates/quotes-post-square"
      />
      <RightImageSection
        title="How to make unique quotes post?"
        point={
          <Box>
            <MarkText text="Use humour or wit to add a unique twist to the quote" />
            <MarkText text="Incorporate trending topics or current events into the quote" />
            <MarkText text="Create custom illustrations or graphics to accompany the quote" />
            <MarkText text="Experiment with different font styles or color schemes to create a distinctive look" />
            <MarkText text="Personalise the quote by using first-person narrative or including a relevant personal story" />
          </Box>
        }
        buttonName={"Create Your Quotes"}
        alt="quotes post design"
        path="/templates/quotes-post-square"
        image={`${assetsUrl}/w_assets/images/qoutesUnique.png`}
      />
      <LeftImageSection
        title="Top 5 trending designs for quotes post"
        point={
          <Box>
            <MarkText text="Minimalist design: using a simple layout with clean lines and a limited color palette" />
            <MarkText text="Vintage design: using retro typography and distressed textures to create an old-school vibe" />
            <MarkText text="Typographic design: using creative typography to showcase the quote as the main focus" />
            <MarkText text="Photographic design: using high-quality photos as the background to add visual interest to the quote" />
            <MarkText text="Abstract design: using geometric shapes or abstract patterns to create a modern and artistic look" />
          </Box>
        }
        buttonName={"Explore Quotes"}
        alt="quotes post design"
        path="/templates/quotes-post-square"
        image={`${assetsUrl}/w_assets/images/qoutesTrending.png`}
      />
      {/*  */}{" "}
      <ExploreTemplates
        getAll={"/templates/quotes-post-square"}
        keyword="Quotes"
      />
      <RightImageSection
        title="Transform Your Instagram Presence with
        Powerful Quotes"
        point={
          <Box>
            <MarkText
              text="Welcome to the ultimate source quote for post on instagram that will elevate your
profile to new heights."
            />
            <MarkText
              text="Our handpicked selection of inspirational, witty, and thought- provoking quotes will
captivate your audience and boost your engagement."
            />
            <MarkText text="Say goodbye to content struggles and hello to social media success." />
          </Box>
        }
        buttonName={"Create Your Quotes"}
        alt="quotes post design"
        path="/templates/quotes-post-square"
        image={`${assetsUrl}/w_assets/images/quotesPoweful.png`}
      />
      <LeftImageSection
        title="Daily Quotes Is Your Pathway to Inspired
        Living"
        point={
          <Box>
            <MarkText text="Are you tired of starting your day feeling uninspired?" />
            <MarkText text="The lack of motivation can lead to unproductive days and missed opportunities." />
            <MarkText text="Without a daily dose of inspiration, you may struggle to achieve your goals." />
            <MarkText
              text="Explore our daily quotes templates to revitalize your spirit, boost your motivation,
and seize the day."
            />
          </Box>
        }
        buttonName={"Explore Quotes"}
        alt="quotes post design"
        path="/templates/quotes-post-square"
        image={`${assetsUrl}/w_assets/images/flyerL.png`}
      />
      <RightImageSection
        title="Why Choose Us?"
        point={
          <Box>
            <MarkText text="Daily Inspiration: Get best quotes templates in our Crafty Art." />
            <MarkText
              text="Wide Variety: Explore quotes templates on different topics, from good morning to
              karma."
            />
            <MarkText text="Community: Join like-minded individuals on a journey of self-improvement." />
            <MarkText text="Expert Curation: Our team selects the most impactful quotes to brighten your day." />
          </Box>
        }
        buttonName={"Create Your Quotes"}
        alt="quotes post design"
        path="/templates/quotes-post-square"
        image={`${assetsUrl}/w_assets/images/flyerWhy.png`}
      />
      <CustomerSaying />
      <GetTemplates
        heading="Boost Engagement with Eye-Catching Quote Posts - Create Custom Designs Now!"
        text="Bring your words to life with our quotes post maker"
        navigate="/templates/invitation-card"
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
          heading="How can I design a quotes post that resonates with my target audience?"
          text={
            <>
              To <FLink lk="/quotes">design a quotes</FLink> post that resonates
              with your audience, make sure to choose a quote that is relevant
              to their interests or pain points. Additionally, use colours and
              fonts that align with your brand identity, and incorporate images
              or graphics that help convey the message of the quote.
            </>
          }
        />

        <FaqsBox
          heading="Should I include my logo or website URL in my quotes post design?"
          text={
            <>
              Yes, including your logo or website URL in your quotes post design
              can help build brand recognition and drive traffic to your
              website.
            </>
          }
        />

        <FaqsBox
          heading="What are some common mistakes to avoid when designing quotes posts?"
          text={
            <>
              Some common mistakes to avoid when designing quotes posts include
              using illegible fonts, choosing a background that clashes with the
              text, and overloading the design with too many elements. It's also
              important to ensure that the quote you've chosen is accurate and
              properly attributed.
            </>
          }
        />
      </Box>
    </>
  );
}
