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
        image={`${assetsUrl}/w_assets/images/flyersCreate.png`}
        heading={"Create Stunning Flyers with Our Easy-to-Use Templates"}
        text="Catch the Eye with Our Flyer Templates Collection! Stand Out and Impress 🌟 Explore 1500+ Designs Here!"
      />

      <Box>
        <link
          rel="canonical"
          title={"Create Stunning Flyers with Our Easy-to-Use Templates"}
          href={`https://www.craftyartapp.com/flyer`}
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
                  name: "What are flyer templates? ",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Flyer templates are pre-designed flyers that can be customised and filled out with the necessary information for an event.",
                  },
                },

                {
                  "@type": "Question",
                  name: "Where can I find flyer templates?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art flyer maker offers a wide range of free templates that you can customise to create a unique and personalised invitation.",
                  },
                },

                {
                  "@type": "Question",
                  name: "How do I customise a flyer template?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our flyer maker offers an easy-to-use interface where you can change the text, colours, and images to suit your preferences.",
                  },
                },

                {
                  "@type": "Question",
                  name: "What information should be included in a flyer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A typical flyer should include the expectant mother's name, date, time, and location of the event, as well as RSVP details and any other relevant information, such as gift registry information or dress code.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <GetStartedLinearBanner
        heading={"Stand out from the crowd with our unique flyers"}
        text="Unlock creativity with our vibrant flyer templates! From sleek corporate events to lively parties, our designs cater to every occasion. Easily customize and captivate your audience with eye-catching visuals."
        buttonName="Get Started"
        navigate="/templates/flyer"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/images/flyersBanner.png`}
              alt="flyersBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="Tips on how to create the perfect
        flyer templates:"
        point={
          <Box>
            <MarkText text="  Choose a theme that reflects the personality of the parents-to-be and the gender of the baby. Our flyer maker offers a wide range of pre-designed templates for you to choose from." />
            <MarkText text="  Select colours that match the theme of your. You can choose from a variety of colours and shades to customise your design." />
            <MarkText text=" Make sure to include all the important details, such as the name of the parents-to-be, the date and time of the event, and the location. Also, consider including any additional information, such as gift registry or dress code." />
            <MarkText text="  Choose high-quality images that are visually appealing and fit the theme of your. Our flyer maker comes with a huge library of stock images and graphics to choose from." />
            <MarkText text="Keep it simple: Don't overcrowd your flyers with too much information or design elements. Keep it simple and clean, with easy-to-read fonts and a clear message that tells potential guests what they need to know." />
          </Box>
        }
        buttonName={"Design your Flyer"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyersCreate.png`}
      />
      <RightImageSection
        title="What makes your flyers unique?"
        point={
          <Box>
            <MarkText text="Eye-catching design that grabs attention" />
            <MarkText text="Informative content that provides key details in a concise format" />
            <MarkText text="Tangibility that engages the viewer in a more tactile way" />
            <MarkText text="Versatility that allows for distribution in multiple ways" />
            <MarkText
              text="Cost-effectiveness that makes them accessible to businesses and organisations
with limited budgets."
            />
          </Box>
        }
        buttonName={"Create Your Flyer"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyersUnique.png`}
      />
      <LeftImageSection
        title="The process to make stunning
       flyers"
        point={
          <Box>
            <MarkText text="  Choose a design template: We offer a wide selection of design templates for flyers. Choose one that matches your party's theme." />
            <MarkText text="  Customise the details: Add your own text and details, including the date, time, location, RSVP information, and any other relevant information." />
            <MarkText text="  Pick your colour scheme: Select colours that match the party's theme or the baby's gender. You can also use a colour palette generator to help you choose complementary colours." />
            <MarkText text="  Add images: Consider adding images such as ultrasound pictures, baby photos, or themed graphics to make the flyer more visually appealing." />
            <MarkText text="  Print or share digitally: Once you're happy with your design, print it on high-quality paper or save it as a digital file to share via email or social media." />
          </Box>
        }
        buttonName={"Explore Flyers"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyersStunning.png`}
      />
      <RightImageSection
        title="Elevate Your Designs with Flyer
        Design Excellence"
        point={
          <Box>
            <MarkText
              text="Eye-Catching Design: Our creative experts craft visually captivating flyers
templates that grab attention."
            />
            <MarkText
              text="Brand-Centric: We tailor designs to align with your brand identity, maintaining
consistency."
            />
            <MarkText text="Compelling Content: Our designs feature persuasive content to encourage action." />
            <MarkText text="High-Quality graphic: We optimize high quality graphics for flyer design." />
            <MarkText text="Strategic Layout: We guide readers through the flyer for maximum impact." />
            <MarkText
              text="Fast Turnaround:Quick design delivery ensures your materials are ready when you
need them."
            />
          </Box>
        }
        buttonName={"Create Your Flyer"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyerDesign.png`}
      />

      <LeftImageSection
        title="Unleash Your Creativity with
        Crafty Art Flyer Templates!"
        point={
          <Box>
            <MarkText
              text="Captivating Designs: Discover a range of eye-catching flyer templates that grab
attention."
            />
            <MarkText
              text="Easy Customization: Effortlessly personalize templates with your content and
branding."
            />
            <MarkText text="Versatile for All Occasions: Ideal for events, businesses, and personal projects." />
            <MarkText text="Saves Time and Money: Skip costly design work and lengthy design processes." />
            <MarkText
              text="Professional-Quality Flyers: Achieve polished, high-quality results, even with
limited design experience."
            />
          </Box>
        }
        buttonName={"Explore Flyers"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyerTemplate.png`}
      />

      <ExploreTemplates getAll={"/templates/flyer"} keyword="Flyer" />

      <LeftImageSection
        title="Get Started with Flyer Templates
        Absolutely Free!"
        point={
          <Box>
            <MarkText
              text="Save on Design Costs : Our templates eliminate the need for expensive design
              services. You can create professional-looking flyers without breaking the bank."
            />
            <MarkText
              text="Variety of Styles : Whether you need a flyer for a business event, a party, a
              fundraiser, or any other occasion, we offer a wide range of styles to choose from.
              You're sure to find the perfect template to match your message."
            />
            <MarkText
              text="Easy Download and Editing : Downloading and editing our templates is a breeze.
We provide user-friendly templates that allow you to customize text, colors,
images, and more with ease."
            />
            <MarkText
              text="Create in Minutes : With our templates, you can design your flyer in no time. We
offer pre-made layouts, so you can focus on delivering your message effectively."
            />
          </Box>
        }
        buttonName={"Explore Flyers"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyerFree.png`}
      />

      <RightImageSection
        title="Stunning Flyers Begin with the
        Right Background"
        point={
          <Box>
            <MarkText
              text="Diverse Selection: Choose from a wide variety of backgrounds to match any
              theme."
            />
            <MarkText
              text="Easy Customization: Customize your backgrounds effortlessly to achieve the
              desired look."
            />
            <MarkText
              text="Professional Results: Create polished and captivating flyers every time with our
backgrounds."
            />
            <MarkText text="Make your designs truly stand out with the perfect background." />
          </Box>
        }
        buttonName={"Create Your Flyer"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyerRbg.png`}
      />

      <LeftImageSection
        title="Join the Flyers Design Revolution!"
        point={
          <Box>
            <MarkText
              text="Innovative Flyer Solutions: We provide cutting-edge solutions to meet all your flyer
              design needs. Our platform is equipped with the latest design trends and tools,
              ensuring your flyers are always on the forefront of creativity."
            />
            <MarkText
              text="Easy and Fun Design Process: Crafting flyers has never been this enjoyable! Our
              user-friendly interface makes the design process a pleasure, allowing you to
              unleash your creativity without any hassle."
            />
            <MarkText
              text="Stunning Results: Your flyers deserve to stand out, and with our platform, they will
              Expect stunning results that leave a lasting impression on your target audience."
            />
          </Box>
        }
        buttonName={"Explore Flyers"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyerRevolution.png`}
      />

      <RightImageSection
        title="Transform Your Vision into
        Captivating Flyers"
        point={
          <Box>
            <MarkText
              text="Our AI-powered design platform allows you to turn your ideas into stunning
              promotional materials"
            />
            <MarkText
              text="Transform Your Vision into Reality: Watch your creative concepts come to life with
              ease."
            />
            <MarkText
              text="Instantly Generate Captivating Flyers: Say goodbye to lengthy design processes 
              our AI technology does the heavy lifting."
            />
            <MarkText text="Simplify the Design Process: Make designing medium-sized flyers a breeze." />
          </Box>
        }
        buttonName={"Create Your Flyer"}
        alt="flyer templates"
        path="/templates/flyer"
        image={`${assetsUrl}/w_assets/images/flyerC.png`}
      />

      <CustomerSaying />

      <GetTemplates
        heading="Start designing your perfect flyer today with our easy-to-use flyer maker!"
        text="Get ready to take off with our stunning flyers - Order now!"
        navigate="/templates/flyer"
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
          heading="What are flyer templates? "
          text={
            <>
              <FLink lk={`${domain}flyer`}>Flyer templates</FLink>
              are pre-designed flyers that can be customised and filled out with
              the necessary information for an event.
            </>
          }
        />

        <FaqsBox
          heading="Where can I find flyer templates?"
          text={
            <>
              Crafty Art <FLink lk={`${domain}flyer`}>flyer maker</FLink> offers
              a wide range of free templates that you can customise to create a
              unique and personalised invitation.
            </>
          }
        />

        <FaqsBox
          heading="How do I customise a flyer template?"
          text={
            <>
              Our <FLink lk={`${domain}flyer`}>flyer maker</FLink> offers an
              easy-to-use interface where you can change the text, colours, and
              images to suit your preferences.
            </>
          }
        />

        <FaqsBox
          heading="What information should be included in a flyer?"
          text={
            <>
              A typical flyer should include the expectant mother's name, date,
              time, and location of the event, as well as RSVP details and any
              other relevant information, such as gift registry information or
              dress code.
            </>
          }
        />
      </Box>
    </>
  );
}
