"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);
const LeftImageSection = dynamic(
  () => import("../../wedding/components/LeftImageSection")
);
const RightImageSection = dynamic(
  () => import("../../wedding/components/RightImageSection")
);
const WithCraftyartBanner = dynamic(
  () => import("@/src/components/common/WithCraftyartBanner")
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

export default function page() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/tools/Indian/banner.png`}
        heading={"PNG to JPG: Convert Your Images Easily"}
        text="Converting PNG images to JPG format can significantly reduce file size and improve compatibility across various platforms and devices."
      />
      <Box>
        <link
          rel="canonical"
          title={"PNG to JPG: Convert Your Images Easily"}
          href={`https://www.craftyartapp.com/tools/png-to-jpg`}
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
                  name: "How can I convert JPG files for free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Crafty Art PNG to JPG converter is quick, free, and simple to use. Just open the converter, upload your PNG file, and download your new JPG image right away.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I convert a PNG to a JPG?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This free tool is great for changing PNG images into JPG format.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I change JPG files on my phone?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This JPG converter works on both websites and mobile phones, so you can change your pictures whenever and wherever you want.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}

      <GetStartedLinearBanner
        heading={"Free PNG to JPG converter"}
        text="Convert your PNG images to JPG quickly and easily using our free online tool."
        buttonName="Coming Soon"
        navigate="/s/indian"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/tools/png-to-jpg/png-jpg-image1.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <div className="mx-auto max-w-[2400px]">
        <Box>
        <Typography className="text-3xl text-center p-6 font-bold text-black">
          Most Popular PDF Tools
        </Typography>
        <Typography className="text-center font-semibold p-3 text-black">
          6 tools to convert, compress, and edit PDFs for free. Try it out
          today!
        </Typography>
        </Box>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone1.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Select
              </h3>
            </div>
            <div>
              <p>
                Select a PNG picture from your photo collection that is smaller
                than 1GB in size.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone2.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Convert
              </h3>
            </div>
            <div>
              <p>
                Upload your image and it will be instantly converted to JPG
                format.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone3.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Continue editing
              </h3>
            </div>
            <div>
              <p>
                After you upload an image, save it as a JPG file. You can then
                keep it, share it, or edit it more.
              </p>
            </div>
          </div>
        </div>
      </div>

        <Box className="pb-10 p-5">
          <Typography className="text-3xl text-center p-6 font-bold text-black">
            Make easy tasks stay easy
          </Typography>
          <Typography className="text-center font-semibold text-black">
            Crafty Art is the best website for PDF. It has everything you need
            to create, organize, and complete your digital document
          </Typography>
        </Box>
      <LeftImageSection
        title="Change your PNG pictures to high-quality JPG images"
        point={
          <Box>
            <MarkText text="JPG files are smaller in size compared to PNG, which makes them perfect for sharing on social media  or blogs." />
            <MarkText text="Save time formatting your photos to meet upload requirements for any platform. " />
            <MarkText text="With this tool, you can publish your images more efficiently and capture even more opportunities." />
          </Box>
        }
        alt="png-to-jpg"
        buttonName="Coming Soon"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/png-to-jpg/png-jpg-image2.png`}
      />

      {/* section 3 */}

      <RightImageSection
        title="Share your new JPG pictures on the internet"
        point={
          <>
            <Box>
              <MarkText text="You can quickly download your newly converted image directly to your device." />
              <MarkText text="Then, share it with your friends, family, and followers on all your digital platforms." />
            </Box>
          </>
        }
        alt="png-to-jpg"
        buttonName="Coming Soon"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/png-to-jpg/png-jpg-image3.png`}
      />

      <LeftImageSection
        title="Edit image with us"
        point={
          <Box>
            <MarkText text="Transform your image into a masterpiece with Crafty Art's editing tools!" />
            <MarkText text="Add text in cool fonts, use filters for a unique look, touch up your photo, or even add fun GIFs and animations." />
            <MarkText text="Let your creativity run wild as you enhance your project with our easy-to-use design features." />
          </Box>
        }
        alt="png-to-jpg"
        buttonName="Coming Soon"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/png-to-jpg/png-jpg-image4.png`}
      />

      <RightImageSection
        title="Change PNG pictures to JPG format for free and save storage."
        point={
          <>
            <Box>
              <MarkText text="Do you have PNG images that are too big for your device or website?" />
              <MarkText text="We can help! Crafty Art offers a free solution to make your PNG files smaller without losing quality." />
              <MarkText text="We'll convert them into web-friendly JPG format." />
              <MarkText text="Say goodbye to slow-loading websites and bulky PNG files!" />
            </Box>
          </>
        }
        alt="png-to-jpg"
        buttonName="Coming Soon"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/png-to-jpg/png-jpg-image6.png`}
      />

      <LeftImageSection
        title="An easy method to keep your picture quality good, even if you're just starting out."
        point={
          <Box>
            <MarkText text="Why stick with blurry, low-quality images when you can switch from PNG to JPG smoothly without losing any quality?" />
            <MarkText text="With Crafty Art's PNG to JPG converter, you can shrink your image size without losing clarity." />
            <MarkText text="It's way better than converting from JPG to SVG, where you might lose quality." />
            <MarkText text="Crafty Art's converter keeps all the tiny details of your images intact when you switch from PNG to JPG, including colors and sharpness." />
          </Box>
        }
        alt="png-to-jpg"
        buttonName="Coming Soon"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/png-to-jpg/png-jpg-image7.png`}
      />

      <div className="pt-16 mx-auto max-w-[2400px]">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="pb-16"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>

        <FaqsBox
          heading="1. How can I convert JPG files for free?"
          text={
            <>
              The Crafty Art PNG to JPG converter is quick, free, and simple to
              use. Just open the converter, upload your PNG file, and download
              your new JPG image right away.
            </>
          }
        />

        <FaqsBox
          heading="2.Can I convert a PNG to a JPG?"
          text={
            <>
              This free tool is great for changing PNG images into JPG format.
            </>
          }
        />

        <FaqsBox
          heading="3. Can I change JPG files on my phone?"
          text={
            <>
              This JPG converter works on both websites and mobile phones, so
              you can change your pictures whenever and wherever you want.
            </>
          }
        />
      </Box>
    </>
  );
}
