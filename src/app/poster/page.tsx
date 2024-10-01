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
        image={`${assetsUrl}/w_assets/images/posterPerfact.png`}
        heading={
          "Poster Design Online: Create Graphic Design Posters with Ease"
        }
        text="Elevate your brand with our online poster design tool. Design custom graphic posters effortlessly, collaborating from anywhere."
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
                  name: "What types of posters can I create?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can create posters for a variety of purposes, including marketing, events, education, and more. Our templates cover a wide range of themes and styles, so you're sure to find something that fits your needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I choose the right size for my poster?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Consider where you'll be displaying your poster design and what type of information you want to include. Standard sizes include 18x24 inches and 24x36 inches, but you can also customise the size to fit your specific needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use my own images and graphics?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! You can upload your own images and graphics to make your poster design truly unique. Just make sure they are high-quality and relevant to your message.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to create a poster?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "With our easy-to-use poster design maker, you can create a professional-looking design in minutes. Of course, the time it takes may vary depending on the complexity of your design and how much customization you want to do.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <GetStartedLinearBanner
        heading={"Make attractive posters by using plenty of poster designs."}
        text="Browse Crafty Art's poster design and customise them to communicate your message, and raise your
        brand awareness."
        buttonName="Get Started"
        navigate="/s/poster"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`/images/posterBanner.png`}
              alt="posterBanner"
              style={{ width: "100%", height: "100%", paddingRight: "80px" }}
            />
          </Box>
        }
      />
      <LeftImageSection
        title="How to create the perfect poster
        design?"
        point={
          <Box>
            <MarkText text="Determine your message and purpose beforehand to guide your poster's content and design." />
            <MarkText text="Choose a visual theme that aligns with your message and consider your audience and context." />
            <MarkText text="Keep it simple by using clear and concise language and avoiding clutter." />
            <MarkText text="Use high-quality images to make your poster stand out." />
            <MarkText text="Print on quality paper to enhance the final look of your poster." />
          </Box>
        }
        buttonName={"Design your Poster"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/posterPerfact.png`}
      />
      <RightImageSection
        title="Create stunning posters with these
        easy steps:"
        point={
          <Box>
            <MarkText text=" Choose a template from a collection of styles and themes." />
            <MarkText text=" Customise the design with your text, images, and branding elements to fit your preferences." />
            <MarkText text=" Preview and revise your design, checking for errors and clarity of message." />
            <MarkText text=" Print or download your design on high-quality paper or share it online or via social media." />
          </Box>
        }
        buttonName={"Create Your Poster"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/posterCreate.png`}
      />
      <LeftImageSection
        title="Create professional posters with
        ease:"
        point={
          <Box>
            <MarkText text="1. Determine the size and orientation of your poster." />
            <MarkText text="2. Choose a background colour or image that complements your message." />
            <MarkText text="3. Add clear and legible text, as well as images and graphics that enhance the visual appeal." />
            <MarkText text="4. Preview and revise your design, checking for errors and typos." />
            <MarkText text="5. Print your design on high-quality paper and distribute through appropriate channels." />
          </Box>
        }
        buttonName={"Explore Posters"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/posterEase.png`}
      />
      {/*  */} <ExploreTemplates getAll="/s/poster" keyword="Poster" />
      <RightImageSection
        title="Transform Your Ideas into Stunning Visuals with Poster Design Online
        "
        point={
          <Box>
            <MarkText text="Unlock Creative Potential: Access an intuitive online platform for poster design." />
            <MarkText text="Effortless Graphic Design: Craft visually appealing posters without the learning curve." />
            <MarkText text="Collaborate Anywhere: Work on your designs from anywhere, anytime." />
            <MarkText text="Customization Options: Tailor your posters to suit your unique vision." />
            <MarkText text="Time-Saving Features: Streamline the design process with efficient tools." />
            <MarkText text="Version Control: Easily manage and revert to previous versions of your designs." />
            <MarkText text="Responsive Design: Ensure your posters look great on various devices." />
          </Box>
        }
        buttonName={"Explore Posters"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/poster1.png`}
      />
      <LeftImageSection
        title="Graphic Design Posters That Speak Volumes
        "
        point={
          <Box>
            <MarkText text="Expressive Visuals: Create impactful designs with our extensive graphic design tools." />
            <MarkText text="Professional Templates: Choose from a diverse range of templates tailored for various themes." />
            <MarkText text="Print-Ready Output: Download high-resolution files ready for printing or online sharing." />
            <MarkText text="Font and Color Options: Customize text and color schemes to match your brand or theme." />
            <MarkText text="Image Editing: Edit and enhance images directly within the design platform." />
            <MarkText text="Layer Functionality: Arrange and manage design elements with ease." />
            <MarkText text="Real-Time Previews: See how your poster will look before finalizing your design." />
          </Box>
        }
        buttonName={"Explore Posters"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/poster2.png`}
      />
      <RightImageSection
        title="Inform and Engage with Innovative Informational Poster Design
        "
        point={
          <Box>
            <MarkText text="Effective Communication: Design posters that convey information clearly and effectively." />
            <MarkText text="Data Visualization: Turn complex information into visually appealing graphics." />
            <MarkText text="Educational Impact: Enhance learning experiences with compelling informational posters." />
            <MarkText text="Infographic Tools: Utilize built-in tools for creating engaging infographics." />
            <MarkText text="Content Collaboration: Collaborate with team members to create informative content." />
            <MarkText text="Interactive Elements: Add clickable elements to engage viewers further." />
            <MarkText text="Accessibility Features: Ensure your informational posters are accessible to all." />
          </Box>
        }
        buttonName={"Explore Posters"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/poster3.png`}
      />
      <LeftImageSection
        title="Elevate Your Brand with Striking Custom Poster Designs
        "
        point={
          <Box>
            <MarkText text="Brand Consistency: Create posters that align seamlessly with your brand identity." />
            <MarkText text="Unique Aesthetics: Stand out from the crowd with personalized and eye-catching designs." />
            <MarkText text="Versatile Applications: Perfect for events, promotions, or any marketing campaign." />
            <MarkText text="Logo Integration: Easily incorporate your logo into your poster designs." />
            <MarkText text="Social Media Integration: Share your custom posters directly on social media platforms." />
            <MarkText text="Analytics Tools: Track the performance of your branded posters." />
            <MarkText text="Printing Options: Explore various printing options for your custom designs." />
          </Box>
        }
        buttonName={"Explore Posters"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/poster4.png`}
      />
      <RightImageSection
        title="Master the Art of Poster Design with Our User-Friendly Tools
        "
        point={
          <Box>
            <MarkText text="Intuitive Interface: Easily navigate our platform, even if you're a beginner." />
            <MarkText text="Time-Efficient: Design posters quickly without compromising quality." />
            <MarkText text="Feedback Integration: Collaborate seamlessly with others using built-in feedback features." />
            <MarkText text="Tutorials and Guides: Access resources to master advanced design techniques." />
            <MarkText text="Undo/Redo Functionality: Easily correct mistakes with comprehensive undo and redo options." />
            <MarkText text="Export Options: Save and export your designs in various file formats." />
            <MarkText text="Cross-Platform Compatibility: Access your work across different devices seamlessly." />
          </Box>
        }
        buttonName={"Explore Posters"}
        alt="poster designs"
        path="/s/poster"
        image={`${assetsUrl}/w_assets/images/poster5.png`}
      />
      <CustomerSaying />
      <GetTemplates
        heading="Unlock your creativity with 5000+ customizable poster templates to choose from."
        text="Design your perfect poster design today with our easy-to-use poster maker!"
        navigate="/s/poster"
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
          heading="What types of posters can I create?"
          text={
            <>
              You can create <FLink lk={`${domain}poster`}>posters</FLink> for a
              variety of purposes, including marketing, events, education, and
              more. Our templates cover a wide range of themes and styles, so
              you're sure to find something that fits your needs.
            </>
          }
        />

        <FaqsBox
          heading="How do I choose the right size for my poster?"
          text={
            <>
              Consider where you'll be displaying your poster design and what
              type of information you want to include. Standard sizes include
              18x24 inches and 24x36 inches, but you can also customise the size
              to fit your specific needs.
            </>
          }
        />

        <FaqsBox
          heading="Can I use my own images and graphics?"
          text={
            <>
              Absolutely! You can upload your own images and graphics to make
              your poster design truly unique. Just make sure they are
              high-quality and relevant to your message.
            </>
          }
        />

        <FaqsBox
          heading="How long does it take to create a poster?"
          text={
            <>
              With our easy-to-use{" "}
              <FLink lk={`${domain}poster`}>poster design maker,</FLink> you can
              create a professional-looking design in minutes. Of course, the
              time it takes may vary depending on the complexity of your design
              and how much customization you want to do.
            </>
          }
        />
      </Box>
    </>
  );
}
