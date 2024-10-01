"use client";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
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
        heading={"PDF To JPG Converter Online - Documents to Image Files Free"}
        text="Easily convert PDF files to JPG images with our efficient PDF to JPG converter Tool. Transform documents into high-quality image files for free! "
      />
       <Box>
        <link
          rel="canonical"
          title={"PDF To JPG Converter Online - Documents to Image Files Free"}
          href={`https://www.craftyartapp.com/tools/pdf-to-jgg`}
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
                  name: "What is a JPG to PDF converter tool?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A JPG to PDF converter tool is an online service that allows you to convert JPG format to PDF documents easily and quickly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the JPG to PDF converter work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our tool operates by allowing you to upload one or multiple JPG image files. Once uploaded, it processes these images and merges them into a single PDF file, maintaining the quality and layout of the original images.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the tool free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our JPG to PDF converter is free to use. You can convert JPG images to PDF without any cost or hidden charges.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I rearrange the order of the images before converting them to PDF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our tool allows you to rearrange the order of the uploaded images. You can easily drag and drop images to arrange them in the desired sequence before conversion.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the converted PDF file editable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The resulting PDF file generated from the JPG images is typically a non-editable document. However, you can use other tools or software to edit the PDF after conversion if needed.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <div className="flex flex-col justify-center items-center py-20 bg_linear">
        <img
          className="h-[244px] w-[406px]"
          src={`${assetsUrl}/w_assets/tools/pdf-jpg/banner.png`}
          alt="Logo"
        />
        <h1 className=" text-center text-3xl font-bold text-white px-2">
          Free PDF to JPG Converter
        </h1>
        <p className=" text-center p-5 px-8 lg:px[50px] xl:px-[100px] 2xl:px-[300px]  text-white">
          Don't overlook the cool stuff hidden in documents like reports and
          records saved as PDFs. Now, you can easily make them social media or
          website-friendly! How? By using Crafty Art’s free online tool to
          convert those PDF files into JPG images. It's super easy and helps you
          share and post them anywhere you like!
        </p>
        <button className="bg-white text-black text-xl px-5 md:px-10 py-3 md:py-3  rounded-2xl font-bold cursor-not-allowed">
           Coming Soon
        </button>
      </div>

      <div>
        <div className="py-10 mx-auto max-w-[2400px]">
          <h1 className="text-3xl text-center p-6 font-bold text-black">
            How to convert JPG to PDF
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-jpg/icone1.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Upload your PDF
              </h3>
            </div>
            <div>
              <p>
                Click on the Upload your file button or simply drag and drop
                your files into the designated area.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-jpg/icone2.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Edit your designs
              </h3>
            </div>
            <div>
              <p>
                Make minor adjustments to your PDF file using our easy-to-use
                editor.
              </p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-jpg/icone3.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Download your design
              </h3>
            </div>
            <div>
              <p>
                You can get your design as a JPG for free by converting it from
                a PDF file. Simply download the JPG version.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}

      <RightImageSection
        point={
          <>
            <div className="pt-7 lg:pt-0">
              <Box
                sx={{
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  maxWidth: "1000px",
                }}
                className="w-[100%]"
              >
                <Typography
                  className="text-[28px] w-full font-semibold text-black max-lg:text-[22px] max-sm:text-center mt-5"
                  variant="h2"
                >
                  Why Crafty Art for PDF to Jpg Converter
                </Typography>

                <FaqsBox
                  heading="Fast PDF to Jpg Converter"
                  text={
                    <>
                      Please choose and upload the PDF document you want to
                      change into an image file. Once uploaded, select the JPG
                      format. Crafty Art will quickly convert your online PDF
                      file into an image within seconds.
                    </>
                  }
                />
                <FaqsBox
                  heading="Use your favorite platform"
                  text={
                    <>
                      Crafty Art's PDF to image converter tool can be used in
                      any web browser like Microsoft Edge or Google Chrome. It
                      works on any operating system, allowing you to convert
                      PDFs to images hassle-free.
                    </>
                  }
                />
                <FaqsBox
                  heading="We respect your privacy"
                  text={
                    <>
                      Crafty Art's PDF to image converter tool can be used in
                      any web browser like Microsoft Edge or Google Chrome. It
                      works on any operating system, allowing you to convert
                      PDFs to images hassle-free.
                    </>
                  }
                />
                <FaqsBox
                  heading="The best PDF to JPG converter"
                  text={
                    <>
                      Our tool changes PDF files into JPG pictures really well,
                      making sure they look just like you'd want them to.
                    </>
                  }
                />
              </Box>
            </div>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/pdf-jpg/img1.png`}
        // image={`${assetsUrl}/w_assets/images/resumeImpact.png`}
      />

      <div className="pt-16 mx-auto max-w-[2400px]">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <div className="px-10 py-20 bg_linear">
        <div className="lg:flex justify-center">
          <div className="pt-3 lg:pt-0">
            <h1 className="text-white text-2xl lg:text-3xl font-bold text-center">
              Rate our Free PDF to JPG Converter.
            </h1>
          </div>
          <div className="lg:pl-5 pt-3 lg:pt-0  flex justify-center items-center">
            <img
              className="h-[42px] w-[240px]"
              src={`${assetsUrl}/w_assets/tools/pdf-jpg/rating.png`}
              alt="Placeholder Image"
            />
          </div>
        </div>
        <div className="lg:flex pt-7 items-center justify-center">
          <div className="text-white pt-2 lg:pt-0 text-lg text-center">
            <p>You need to use the Quick Action before you can rate it</p>
          </div>
          <div className="lg:pl-5 pt-3 lg:pt-0 flex justify-center">
            <button className="p-2 px-5 rounded-lg text-black bg-white cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
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
          heading="1. What is a JPG to PDF converter tool?"
          text={
            <>
              A JPG to PDF converter tool is an online service that allows you
              to convert JPG format to PDF documents easily and quickly.
            </>
          }
        />
        <FaqsBox
          heading="2. How does the JPG to PDF converter work?"
          text={
            <>
              Our tool operates by allowing you to upload one or multiple JPG
              image files. Once uploaded, it processes these images and merges
              them into a single PDF file, maintaining the quality and layout of
              the original images.
            </>
          }
        />
        <FaqsBox
          heading="3. Is the tool free to use?"
          text={
            <>
              Yes, our JPG to PDF converter is free to use. You can convert JPG
              images to PDF without any cost or hidden charges.
            </>
          }
        />
        <FaqsBox
          heading="4. Can I rearrange the order of the images before converting them to PDF?"
          text={
            <>
              Yes, our tool allows you to rearrange the order of the uploaded
              images. You can easily drag and drop images to arrange them in the
              desired sequence before conversion.
            </>
          }
        />
        <FaqsBox
          heading="5. Is the converted PDF file editable?"
          text={
            <>
              The resulting PDF file generated from the JPG images is typically
              a non-editable document. However, you can use other tools or
              software to edit the PDF after conversion if needed.
            </>
          }
        />
      </Box>
    </>
  );
}
