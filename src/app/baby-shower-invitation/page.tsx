"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const ExploreTemplates = dynamic(
  () => import("@/src/components/common/ExploreTemplates")
);
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);
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
const CustomerSaying = dynamic(
  () =>
    import(
      "@/src/components/Home/landingPage/landingPageComponents/CustomerSaying"
    )
);
const FLink = dynamic(() => import("@/src/components/common/FLink"));

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/babyShowerInvitation.png`}
        heading={
          "2.5K Free Baby Shower Invitation Templates"
        }
        text="Spark Joy with Stunning Invites! Elevate Your Baby Shower with Unique Invitations. Personalize & Delight Guests. Customize it Today for Unforgettable Memories!"
      />

<Box>
        <link
          rel="canonical"
          title={"2.5K Free Baby Shower Invitation Templates"}
          href={`https://www.craftyartapp.com/baby-shower-invitation`}
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
                  name: "How do I customize my baby shower invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use Crafty Art's user-friendly tool to personalize your chosen design effortlessly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer gender-neutral options for baby shower invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! Explore our diverse collection with themes suitable for any celebration, ensuring inclusivity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of customization are available for the baby shower invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can customize colors, fonts, and add personal details to create a truly unique and special invitation for your celebration.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={
          "Celebrate the upcoming arrival of your little one with beautiful baby shower templates!"
        }
        text="Celebrate the imminent arrival of joy with our adorable baby shower invitation template! Delicately designed, it exudes charm and warmth, perfect for inviting loved ones to share in the excitement. Customize effortlessly for a personalized touch that sets the tone for a memorable celebration.
        "
        buttonName="Get Started"
        navigate="/k/baby-shower-invitations"
        image={
          <Box sx={{ width: "450px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/babyShowerBanner.png`}
              alt="babyShowerBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect baby shower
        invitations?"
        point={
          <Box>
            <MarkText text="Choose a theme or color scheme that reflects the gender of the baby or the nursery decor. It could be traditional pastels, gender-neutral colors, or even something unique like a favorite children's book." />
            <MarkText text="Use creative and visually appealing designs. You can find templates online or create your own using graphic design software. Consider adding cute baby-related images like rattles, strollers, or baby animals." />
            <MarkText text="Clearly mention the key details such as the date, time, and location of the baby shower. Include RSVP information, gift registry details, and any specific requests (like bringing a favorite childhood book)." />
          </Box>
        }
        buttonName={"Design your Card"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShowerInvitation.png`}
      />

      <RightImageSection
        title="Make custom party baby shower
        in minutes:"
        point={
          <Box>
            <MarkText text="Choose a design template that matches your theme." />
            <MarkText text="Customise the details, double-checking for accuracy." />
            <MarkText text="Pick complementary colours using a palette generator." />
            <MarkText text="Add images like ultrasound pictures or themed graphics." />
            <MarkText text="Download and print on high-quality paper or save as a digital file to send via email or social media." />
          </Box>
        }
        buttonName={"Explore Cards"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShowerMinute.png`}
      />

      <ExploreTemplates
        category="baby Shower"
        getAll="/k/baby-shower-invitations"
        keyword="Baby Shower"
      />

      <RightImageSection
        title="Unique Baby Shower Invitations for Every Celebration
        "
        point={
          <Box>
            <MarkText text="Explore a charming collection of babyshower cards designed for unforgettable moments." />
            <MarkText text="Personalize your invites to perfection, ensuring a one-of-a-kind experience." />
            <MarkText text="Find the perfect balance between style and sentimentality for your baby shower invitations." />
            <MarkText text="Browse diverse themes and styles that cater to every taste and celebration." />
            <MarkText text="Stand out with invitations that reflect the uniqueness of your joyous occasion." />
          </Box>
        }
        buttonName={"Create Invitation"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShower.png`}
      />

      <LeftImageSection
        title="Adorable Baby Shower Invitations for Boys and Girls"
        point={
          <Box>
            <MarkText text="Discover an enchanting array of baby shower invitations tailored for boys and girls." />
            <MarkText text="From playful themes for baby boys to elegant designs for baby girls, we have it all." />
            <MarkText text="Ensure your celebration starts with the perfect invitation that sets the tone for a memorable event." />
            <MarkText text="Choose from a spectrum of colors, motifs, and illustrations designed specifically for boys and girls." />
            <MarkText text="Capture the essence of childhood with invitations that radiate charm and sweetness." />
          </Box>
        }
        buttonName={"Explore Cards"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShower2.png`}
      />

      <RightImageSection
        title="Celebrate Your Bundle of Joy with Trendy Babyshower Cards        "
        point={
          <Box>
            <MarkText text="Stay on-trend with Crafty Art collection of modern and stylish babyshower cards." />
            <MarkText text="Choose from a variety of designs that reflect the latest in baby shower invitation trends." />
            <MarkText text="Make a statement with invitations that capture the essence of your joyous occasion." />
            <MarkText text="Experience the joy of staying fashionable with invitations that keep up with contemporary design trends." />
            <MarkText text="Impress your guests with invitations that reflect your keen sense of style and trendiness." />
          </Box>
        }
        buttonName={"Create Invitation"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShower3.png`}
      />

      <LeftImageSection
        title="Create Lasting Memories with Custom Baby Shower Invitations"
        point={
          <Box>
            <MarkText text="Craft invitations that tell your unique story with our easy-to-use customization options." />
            <MarkText text="Add a personal touch to baby shower invitations for a truly special and cherished keepsake." />
            <MarkText text="Design invitations that reflect your style and create lasting memories for you and your guests." />
            <MarkText text="Enjoy the flexibility of customization, allowing you to tailor every detail to your preferences." />
            <MarkText text="Create invitations that become treasured mementos, capturing the spirit of your celebration." />
          </Box>
        }
        buttonName={"Explore Cards"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShower4.png`}
      />

      <RightImageSection
        title="Express Your Joy with Baby Shower Invitations Full of Character"
        point={
          <Box>
            <MarkText text="Infuse personality into your invitations with charming and character-filled designs." />
            <MarkText text="Explore a delightful range of options that perfectly match the joy of your baby shower." />
            <MarkText text="From whimsical to elegant, find the ideal baby shower invitation to express your excitement." />
            <MarkText text="Select invitations that mirror the personality of the parents-to-be or the theme of the celebration." />
            <MarkText text="Make a lasting impression with invitations that not only invite but also radiate joy and anticipation." />
          </Box>
        }
        buttonName={"Create Invitation"}
        path="/k/baby-shower-invitations"
        alt="baby shower invitations"
        image={`${assetsUrl}/w_assets/images/babyShower5.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Baby Shower Invitation Templates. "
        text="Design your dream baby shower invitations today and celebrate in style!"
        navigate="/k/baby-shower-invitations"
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
          heading="How do I customize my baby shower invitations?"
          text={
            <>
              Use <FLink lk={`${domain}`}> Crafty Art's</FLink>
              user-friendly tool to personalize your chosen design effortlessly.
            </>
          }
        />

        <FaqsBox
          heading="Do you offer gender-neutral options for baby shower invitations?"
          text={
            <>
              Certainly! Explore our diverse collection with themes suitable for
              any celebration, ensuring inclusivity.
            </>
          }
        />

        <FaqsBox
          heading="What types of customization are available for the baby shower invitations?"
          text={
            <>
              You can customize colors, fonts, and add personal details to
              create a truly unique and special invitation for your celebration.
            </>
          }
        />
      </Box>
    </>
  );
}
