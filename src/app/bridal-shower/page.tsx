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
        image={`${assetsUrl}/w_assets/images/bridalShowerBanner.png`}
        heading={"Bridal Shower Invitations - Rustic, Floral, and Beach Themes"}
        text="Explore our collection of custom bridal shower invitations at Crafty Art. Create picture-perfect moments with free, digital, and elegantly designed invites for a unique celebration."
      />

      <Box>
        <link
          rel="canonical"
          title={"Bridal Shower Invitations - Rustic, Floral, and Beach Themes"}
          href={`https://www.craftyartapp.com/bridal-shower`}
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
                  name: "How can I personalize my bridal shower invitations on Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art offers a user-friendly platform where you can personalize your bridal shower invitations effortlessly. Choose from a variety of themes, add photos, and customize details to match the bride's style.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there free bridal shower invitation options available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art provides a selection of free bridal shower invitation examples. Explore these templates to kickstart your creative process without incurring any costs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I include a photo on my bridal shower invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Crafty Art allows you to create picture-perfect invitations by easily adding a photo of the bride. Choose a template that accommodates a picture to capture those special moments.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I find inspiration for unique bridal shower invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art provides a diverse array of bridal shower invitation samples to spark your creativity. Explore different themes, styles, and designs to find inspiration that aligns with the bride's personality and the overall celebration theme.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Find Your Perfect Bridal Shower Invitations Template Here!"}
        text="Our Bridal Shower Invitation templates are designed with creativity and elegance in mind, offering a variety of styles to suit any theme or aesthetic preference. Whether you're going for a classic and timeless look or a modern and trendy design, we have something for everyone."
        buttonName="Get Started"
        navigate="/s/bridal-Shower"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/bridalShowerBanner.png`}
              alt="bridalShowerBanner"
              style={{ width: "100%", height: "100%", paddingRight: "100px" }}
            />
          </Box>
        }
      />

      <LeftImageSection
        title="How to make perfect bridal shower
        invitations?"
        point={
          <Box>
            <MarkText text="Choose a theme that reflects the bride-to-be's personality and style, from bohemian chic to modern minimalist." />
            <MarkText text="Select colours that complement the theme, from pastels to bold and bright hues." />
            <MarkText text="Include personal details like name, date, time, and location, along with fun elements like pictures or favourite quotes." />
            <MarkText text="Choose top-notch paper for your wedding shower invitation to make it look professional and last longer." />
            <MarkText text="Keep it simple with easy-to-read fonts and clear messaging." />
          </Box>
        }
        buttonName={"Design your Card"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridalInvitation.png`}
      />

      <RightImageSection
        title="Craft the perfect invitation bridal shower
         with ease:"
        point={
          <Box>
            <MarkText text="Use an online invitation maker with customizable templates." />
            <MarkText text="Choose from pre-made designs that fit your party's theme." />
            <MarkText text="Add all necessary details and customise font types and sizes." />
            <MarkText text="Consider adding pictures or design elements that reflect the chosen theme." />
            <MarkText text="Preview and proofread before sending out." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridalEase.png`}
      />

      <LeftImageSection
        title="Make custom bridal shower
        invitations in minutes:"
        point={
          <Box>
            <MarkText text="Choose a design template that matches your party's theme." />
            <MarkText text="Customise the details, double-checking for accuracy." />
            <MarkText text="Pick complementary colours using a palette generator." />
            <MarkText text="Add pictures or other design elements that reflect the chosen theme." />
            <MarkText text="Download and print on high-quality paper, or save as a digital file to send via email or social media." />
          </Box>
        }
        buttonName={"Explore Cards"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridalMinute.png`}
      />

      <ExploreTemplates
        category="bridal Shower"
        getAll={"/s/bridal-Shower"}
        keyword="Bridal Shower"
      />

      <RightImageSection
        title="Elegant Bridal Shower Invitations for Your Celebration"
        point={
          <Box>
            <MarkText text="Discover a curated collection of custom bridal shower invitations for a truly unique celebration." />
            <MarkText text="Personalize each invitation to match the bride's style, whether it's rustic, floral, or elegant." />
            <MarkText text="Choose from various themes that capture the essence of the upcoming joyous occasion." />
            <MarkText text="Tailor every detail to make your bridal shower invites a perfect reflection of the celebration." />
            <MarkText text="Craft invites that set the tone for an unforgettable event, celebrating the bride-to-be." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal1.png`}
      />

      <LeftImageSection
        title="Picture-Perfect Moments: Bridal Shower Invitations with Your Photo"
        point={
          <Box>
            <MarkText text="Cherish special moments with personalized invite to bridal shower featuring a photo of the bride." />
            <MarkText text="Add a personal touch to your invites, sharing the excitement of the upcoming celebration." />
            <MarkText text="Explore diverse themes, including beach, rustic, and floral, to find the perfect backdrop." />
            <MarkText text="Create invitations that not only invite but also beautifully capture the essence of the occasion." />
            <MarkText text="Choose from a variety of customizable templates for a truly memorable experience." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal2.png`}
      />

      <RightImageSection
        title="Digital Elegance: Invitations for Wedding Shower"
        point={
          <Box>
            <MarkText text="Embrace the modern convenience of digital bridal shower invitations." />
            <MarkText text="View samples of exquisitely crafted digital invites designed for a seamless online experience." />
            <MarkText text="Personalize and send invitations effortlessly, ensuring a stylish and eco-friendly celebration." />
            <MarkText text="Explore the ease of managing RSVPs and updates digitally, adding efficiency to your event planning." />
            <MarkText text="Enjoy the convenience of online invitations without compromising on elegance." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal3.png`}
      />

      <LeftImageSection
        title="Free and Easy: Design Your Bridal Shower Invitations Hassle-Free"
        point={
          <Box>
            <MarkText text="Access a variety of free bridal shower invitation examples to kickstart your creative process." />
            <MarkText text="Utilize our user-friendly platform to customize your invites effortlessly." />
            <MarkText text="Enjoy the freedom to design unique and charming invitations without incurring any costs." />
            <MarkText text="Create beautiful invitation bridal shower that reflect your style and convey the excitement of the upcoming celebration." />
            <MarkText text="Share your invites with confidence, knowing they are both cost-effective and captivating." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal4.png`}
      />

      <RightImageSection
        title="Rustic Charm and Floral Elegance: Custom Bridal Shower Invitations        "
        point={
          <Box>
            <MarkText text="Immerse yourself in the charm of rustic and floral themes with our custom bridal shower invitations." />
            <MarkText text="Choose from a range of elegantly designed templates that add a touch of sophistication." />
            <MarkText text="Personalize each aspect of your invites, ensuring they harmonize with the beauty of the occasion." />
            <MarkText text="Create invitations that become cherished keepsakes, capturing the unique spirit of the celebration." />
            <MarkText text="Infuse your invites with a timeless elegance that complements the bride's vision and style." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal5.png`}
      />

      <LeftImageSection
        title="Samples to Spark Inspiration: Bridal Shower Invitations Ideas "
        point={
          <Box>
            <MarkText text="Explore a diverse array of bridal shower invitation samples to ignite your creative inspiration." />
            <MarkText text="Find ideas that resonate with the bride's personality and seamlessly align with the celebration's theme." />
            <MarkText text="Craft invitations that not only invite but also tell a visual story, setting the stage for a joyous event." />
            <MarkText text="Draw inspiration from various designs to create invites that leave a lasting impression on your guests." />
            <MarkText text="Navigate through samples that showcase different styles, ensuring your invitations are truly one-of-a-kind." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal6.png`}
      />

      <RightImageSection
        title="Beach Bliss: Bridal Shower Invitations for a Seaside Celebration"
        point={
          <Box>
            <MarkText text="Plan a coastal-inspired bridal shower with our specially designed beach-themed invitations." />
            <MarkText text="Choose from beach-themed templates that evoke the relaxed and enjoyable atmosphere of a seaside celebration." />
            <MarkText text="Personalize your invites to convey the coastal charm of the upcoming event, setting the perfect tone." />
            <MarkText text="Craft beach-themed invitations that transport guests to a blissful coastal escape, even before the celebration begins." />
            <MarkText text="Enjoy the ease of creating invitations that capture the unique spirit of a beachside bridal shower." />
          </Box>
        }
        buttonName={"Create Invitation"}
        alt="bridal shower invitations"
        path="/s/bridal-Shower"
        image={`${assetsUrl}/w_assets/images/bridal7.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Invitation Templates. "
        text="Design your dream invitations today and celebrate in style!"
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
          heading="How can I personalize my bridal shower invitations on Crafty Art?"
          text={
            <>
              Crafty Art offers a user-friendly platform where you can
              personalize your{" "}
              <FLink lk={`${domain}bridal-shower`}>
                bridal shower invitations
              </FLink>{" "}
              effortlessly. Choose from a variety of themes, add photos, and
              customize details to match the bride's style.
            </>
          }
        />

        <FaqsBox
          heading="Are there free bridal shower invitation options available?"
          text={
            <>
              Yes, <FLink lk={`${domain}`}>Crafty Art</FLink> provides a
              selection of free bridal shower invitation examples. Explore these
              templates to kickstart your creative process without incurring any
              costs.
            </>
          }
        />

        <FaqsBox
          heading="Can I include a photo on my bridal shower invitations?"
          text={
            <>
              Absolutely! <FLink lk={`${domain}`}>Crafty Art</FLink> allows you
              to create picture-perfect invitations by easily adding a photo of
              the bride. Choose a template that accommodates a picture to
              capture those special moments.
            </>
          }
        />

        <FaqsBox
          heading="How do I find inspiration for unique bridal shower invitations?"
          text={
            <>
              Crafty Art provides a diverse array of{" "}
              <FLink lk={`${domain}bridal-shower`}>
                bridal shower invitation
              </FLink>{" "}
              samples to spark your creativity. Explore different themes,
              styles, and designs to find inspiration that aligns with the
              bride's personality and the overall celebration theme.
            </>
          }
        />
      </Box>
    </>
  );
}
