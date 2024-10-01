"use client";
import dynamic from "next/dynamic";
import Head from "next/head";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
const ExploreTemplates = dynamic(
  () => import("@/src/components/common/ExploreTemplates")
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
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
 const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);
const WithCraftyartBanner = dynamic(
  () => import("@/src/components/common/WithCraftyartBanner")
);

export default function page() {
  const router = useRouter();
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/Indian/banner.png`}
        heading={"Free Bio Data Templates For Marriage - Download Online"}
        text="Discover 1000+ free bio data templates for marriage on our sites. Simplify your search easy & Customize your marriage biodata template today!"
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
                  name: "What is a biodata maker, and how does it work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A biodata maker is an online tool for creating personalized biodata for matrimonial resumes. Users select templates, add their information, and download or share the biodata.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What information can I include in my biodata created with CraftyArt's Biodata Maker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can include personal details, education, work experience, hobbies, and preferences. The templates are customizable to fit various types of information.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are the biodata templates customizable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, users can edit the templates by adding, modifying, or deleting sections as needed. They can also personalize them with text, photos, and formatting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. In what languages are the biodata templates available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "YCraftyArt's Biodata Maker offers templates in English, Hindi, Marathi, Gujarati, and more, catering to diverse linguistic backgrounds.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
       <Box className="h-auto bg_linear bg-cover bg-no-repeat max-sm:h-auto ">
        <Box className="flex flex-col items-center pt-14 gap-5">
          <Typography
            className="px-2 text-[47px] font-bold text-white text-center max-sm:text-[25px]"
            variant="h1"
          >
            Free Biodata Templates
          </Typography>
          <Box className="flex flex-col items-center gap-2 ">
            <Typography className="px-2 text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 mx-auto	text-white text-center">
              Easily create your perfect marriage biodata with CraftyArt's free
              templates. Express yourself and your dreams as you begin this
              journey together!
            </Typography>
          </Box>
          <Button
            sx={{
              textTransform: "unset",
              fontSize: "14px",
              fontWeight: "600",
              color: "white",
              whiteSpace: "nowrap",
              opacity: "1",
              width: "230px",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            onClick={() => router.push("/templates/bio-data-portrait")}
            className="bg-white text-black py-2"
          >
            Create your Biodata
          </Button>

          <div className="gap-4 justify-center items-center border-black ">
            <div className="m-5 rounded-2xl justify-center items-center">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  items-center justify-center border-black py-5">
                <div className="m-5">
                  <img
                    src={`${assetsUrl}/w_assets/bio-data/resume-image1.png`}
                    alt="Bio-Data"
                  />
                </div>
                <div className="m-5">
                  <img
                    src={`${assetsUrl}/w_assets/bio-data/resume-image2.png`}
                    alt="Bio-Data"
                  />
                </div>
                <div className="m-5">
                  <img
                    src={`${assetsUrl}/w_assets/bio-data/resume-image3.png`}
                    alt="Bio-Data"
                  />
                </div>
                <div className="m-5">
                  <img
                    src={`${assetsUrl}/w_assets/bio-data/resume-image4.png`}
                    alt="Bio-Data"
                  />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <div className="py-5 md:pt-10 items-center text-center justify-center px-5 md:px-20">
        <div className="px-2 md:px-2 lg:px-5 xl:px-32">
          <h1 className="font-bold text-2xl md:text-4xl text-black">
            Online Biodata Maker for Marriage
          </h1>
          <p className="text-lg text-black pt-4">
            Looking to impress your potential life partner? Look no further than
            CraftyArt's Online Biodata Maker for Marriage! With our creative
            biodata maker, you can easily create impressive biodata in just
            minutes
          </p>
          <p className="text-lg text-black pt-2">
            CraftyArt offers a variety of interesting biodata templates that you
            can customize with our user-friendly editing tools. Whether you
            prefer Marathi, English, Hindi, or Gujarati, we've got you covered.
          </p>
          <p className="text-lg text-black pt-2">
            Don't give up the chance to make a memorable impression. Start
            crafting your perfect biodata today with CraftyArt's Online Biodata
            Maker for Marriage!
          </p>
        </div>
        <div className="flex justify-center text-center items-center py-10">
          <img
            className="h-auto w-auto lg:h-[600px] lg:w-[1000px]"
            src={`${assetsUrl}/w_assets/bio-data/img1.png`}
            alt="image"
          />
        </div>
        <button
          style={{
            background:
              "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
            width: "fit-content",
            fontSize: "17px",
            textTransform: "unset",
            borderRadius: "5px",
            fontWeight: "500",
            color: "white",
          }}
          className="bg_linear py-[10px] px-[15px]"
          onClick={() => router.push("/templates/bio-data-portrait")}
        >
          Create your Biodata
        </button>
      </div>

      <ExploreTemplates
        getAll={"/templates/bio-data-portrait"}
        keyword="biodata"
      />

      <RightImageSection
        title="How to Make Biodata ?"
        point={
          <Box>
            <MarkText text="Log into your Crafty Art account and search for biodata in the search bar." />
            <MarkText text="Choose a template that you like from the available options." />
            <MarkText
              text="Customize the template by changing the text, font, color, and
background to reflect your personal style and preferences."
            />
            <MarkText
              text="Review the final design to ensure all necessary information is
included (such as the date, time, location, dress code, andDownload the finished design in your preferred format
(PNG, JPG, PDF) and print it out on high-quality paper.
RSVP details)."
            />
            <MarkText
              text="Download the finished design in your preferred format
(PNG, JPG, PDF) and print it out on high-quality paper."
            />
          </Box>
        }
        alt="bio-data"
        path="/s/bio-data"
        image={`${assetsUrl}/w_assets/bio-data/img1.png`}
      />

      <div className="pt-16">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      {/* section 9 */}
      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] mb-[30px] lg:mb-[100px]"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>

        <FaqsBox
          heading="1. What is a biodata maker, and how does it work?"
          text={
            <>
              A biodata maker is an online tool for creating personalized
              biodata for matrimonial resumes. Users select templates, add their
              information, and download or share the biodata.
            </>
          }
        />

        <FaqsBox
          heading="2. What information can I include in my biodata created with CraftyArt's
          Biodata Maker?"
          text={
            <>
              You can include personal details, education, work experience,
              hobbies, and preferences. The templates are customizable to fit
              various types of information.
            </>
          }
        />

        <FaqsBox
          heading="3. Are the biodata templates customizable?"
          text={
            <>
              Yes, users can edit the templates by adding, modifying, or
              deleting sections as needed. They can also personalize them with
              text, photos, and formatting.
            </>
          }
        />
        <FaqsBox
          heading="4. In what languages are the biodata templates available?"
          text={
            <>
              CraftyArt's Biodata Maker offers templates in English, Hindi,
              Marathi, Gujarati, and more, catering to diverse linguistic
              backgrounds.
            </>
          }
        />
      </Box>
    </>
  );
}
