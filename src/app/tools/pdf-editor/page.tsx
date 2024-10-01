"use client";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
  
const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
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
        heading={"Online PDF Editor For Free | Edit PDF Anywhere, Anytime!"}
        text=" Discover a user-friendly online PDF editor for seamless document editing. Edit PDFs for free effortlessly with CraftyArt's efficient tools. Try it now!"
      />
       <Box>
        <link
          rel="canonical"
          title={"Online PDF Editor For Free | Edit PDF Anywhere, Anytime!"}
          href={`https://www.craftyartapp.com/tools/pdf-editor`}
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
                  name: " Is Crafty Art’s PDF Editor Free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sure! Everyone can use our free PDF editor to upload, personalize, and share their PDF documents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is a PDF Editor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PDF Editor and its capabilities in modifying, annotating, and managing PDF documents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the PDF Editor work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Add Image editing text, adding images, merging/splitting PDFs, and downloading.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data secure when using the PDF Editor?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Users All Data Is Secure In Crafty Art’s Fully Protected Servers.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <Box className="h-[463px] bg_linear bg-cover bg-no-repeat max-lg:px-[20px] max-sm:h-auto max-sm:pb-[100px]">
        <Box className="flex flex-col items-center pt-14 gap-5">
          <Typography
            className="text-[47px] font-bold	text-white text-center max-sm:text-[25px]"
            variant="h1"
          >
            Free Online PDF Editor
          </Typography>
          <Box className="flex flex-col items-center gap-2 ">
            <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 mx-auto	text-white text-center">
              Enhance your PDFs effortlessly with Crafty Art's free online PDF
              editor. Add visuals and make your documents more engaging.
              Collaborate seamlessly or quickly tweak your files with ease!
            </Typography>
          </Box>

          <Button
            sx={{
              textTransform: "unset",
              fontSize: "14px",
              fontWeight: "500",
              color: "white",
              whiteSpace: "nowrap",
              opacity: "1",
              width: "180px",
              borderRadius: "5px",
              cursor:"not-allowed",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            className="bg-white text-black py-2"
          >
            Coming Soon
          </Button>
        </Box>
      </Box>

      <Box className="w-[50%] mx-auto mt-[-180px]  max-lg:mt-[-125px] max-sm:mt-[-67px] max-lg:w-[80%] max-sm:w-[97%] min-h-[500px] max-sm:min-h-[200px]">
        <img
          src={`${assetsUrl}/w_assets/tools/pdf-editor/banner.png`}
          className="h-auto w-auto"
          alt="Placeholder Image"
        />

        <link
          rel="preload"
          href={`${assetsUrl}/w_assets/mainBanner.png`}
          as="image"
        />
      </Box>

      <RightImageSection
        point={
          <>
            <Box>
              <h1 className="text-xl md:text-3xl font-semibold">
                Easy-to-use PDF editing tools
              </h1>
              <h1 className="text_linear pt-2 font-semibold">
                Edit PDF Content
              </h1>
              <p>
                Make changes to PDFs quickly and easily. Correct typos, modify
                text and images, add or delete content, and draw lines, shapes,
                or signatures without switching between tools.
              </p>
              <h1 className="text_linear pt-2 font-semibold">
                Combine multiple PDF files and arrange their pages effortlessly
              </h1>
              <p>
                Update your document's arrangement easily using drag-and-drop
                tools. You can add, delete, rotate, and change the order of
                pages effortlessly.
              </p>
              <h1 className="text_linear pt-2 font-semibold">
                Split, add, and extract PDF pages
              </h1>
              <p>
                Update your document layout by using tools that mix content and
                modify the order of pages.
              </p>
            </Box>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/pdf-editor/img1.png`}
      />

      <LeftImageSection
        point={
          <>
            <Box>
              <h1 className="text-xl md:text-3xl font-semibold">
                Feel free to share and work together at any time.
              </h1>
              <h1 className="text_linear pt-2 font-semibold">
                Edit PDFs From other device
              </h1>
              <p>
                Once your PDF is imported to Crafty Art, conveniently edit PDFs,
                leave comments, and add annotations from any device.
              </p>
              <h1 className="text_linear pt-2 font-semibold">
                Easily send and share PDF files without any difficulty.
              </h1>

              <p>
                Change your PDFs into reports, presentations, videos, or
                printable materials. Or, change JPG files into PDFs.
              </p>
            </Box>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/pdf-editor/img2.png`}
      />

      <div className="py-10 mx-auto max-w-[2400px]">
        <div className="py-5">
          <h1 className="text-2xl md:text-3xl text-center p-2 font-bold text-black mx-10">
            All the features you need
          </h1>
          <p className="text-md md:text-xl text-center font-bold text-black mx-10">
            Crafty Arts has free tools where you can drag and drop to make
            designsquickly and easily!
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/jpg-pdf/icone1.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Pictures, symbols, and designs 
              </h3>
            </div>
            <div>
              <p>
                Gain access to our vast collection containing millions of
                photos, icons, graphics, media elements, audio files, and sound
                effects, among other resources.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/jpg-pdf/icone2.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Fonts library
              </h3>
            </div>
            <div>
              <p>
                Make small changes to your pictures using our easy-to-use
                editing tool.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/jpg-pdf/icone3.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Easy sharing and exporting tools
              </h3>
            </div>
            <div>
              <p>
                Convert your JPG file to a PDF for free by downloading your
                design as a PDF document.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}

      <div className="pt-16 mx-auto max-w-[2400px]">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <div className="bg_linear flex flex-col text-white justify-center items-center px-5 md:px-10 py-20 text-center mx-auto max-w-[2400px]">
        <h1 className="font-bold text-xl md:text-3xl">
          It’s time to create a unique QR code that matches your brand.
        </h1>
      </div>

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
          heading="1. Is Crafty Art’s PDF Editor Free?"
          text={
            <>
              Sure! Everyone can use our free PDF editor to upload, personalize,
              and share their PDF documents.
            </>
          }
        />
        <FaqsBox
          heading="2. What is a PDF Editor?"
          text={
            <>
              PDF Editor and its capabilities in modifying, annotating, and
              managing PDF documents.
            </>
          }
        />
        <FaqsBox
          heading="3. How does the PDF Editor work?"
          text={
            <>
              Add Image editing text, adding images, merging/splitting PDFs, and
              downloading.
            </>
          }
        />
        <FaqsBox
          heading="4. Is my data secure when using the PDF Editor?"
          text={
            <>
              Yes, Users All Data Is Secure In Crafty Art’s Fully Protected
              Servers.
            </>
          }
        />
      </Box>
    </>
  );
}
