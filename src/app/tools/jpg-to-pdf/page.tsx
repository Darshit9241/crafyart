"use client";
import ToolBox from "@/src/components/common/ToolBox";
 import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

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
const FLink = dynamic(() => import("@/src/components/common/FLink"));
const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);

export default function page() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/tools/Indian/banner.png`}
        heading={"Convert JPG to PDF for Free - Simple Online Tool"}
        text="Convert your JPG images to PDF format effortlessly with our free and easy-to-use online tool. No downloads or registration required. Fast and secure conversion in just a few clicks!"
      />
      <Box>
        <link
          rel="canonical"
          title={"Convert JPG to PDF for Free - Simple Online Tool"}
          href={`https://www.craftyartapp.com/tools/jpg-to-pdf`}
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
      <div className="flex flex-col justify-center items-center h-auto py-20 bg-[#F2F6FF] mx-auto max-w-[2400px]">
        <div>
          <img
            src={`${assetsUrl}/w_assets/tools/jpg-pdf/banner.png`}
            alt="Logo"
          />
        </div>
        <div>
          <h1 className=" text-center text-3xl font-bold px-2">
            Convert JPG to PDF for free
          </h1>
          <p className=" text-center px-4 py-2 md:py-5">
            Organize your picture files more effectively and save storage space
            by changing JPG images into PDFs. Try Crafty Art's free JPG to PDF
            converter to <br></br>modify or enhance your photos without reducing
            their quality or dealing with unwanted watermarks.
          </p>
        </div>
        <div className="p-5 md:p-10 w-8/12 text-center bg-white rounded-2xl mt-5">
          <button className="bg-[#5961F8] px-5 md:px-20 py-3 md:py-3 rounded-2xl text-white font-bold cursor-not-allowed">
             Coming Soon
          </button>
          <p className="md:p-5 pt-2">
            Drag and drop an image file (JPG, PNG, BMP, and more) to use our PDF
            converter
          </p>
        </div>
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
                src={`${assetsUrl}/w_assets/tools/jpg-pdf/icone1.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Customize Your Design
              </h3>
            </div>
            <div>
              <p>
                A JPG to PDF converter tool is an online service that allows you
                to convert JPG format to PDF documents easily and quickly.
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
                Edit your design
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
                Download your design
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

      <div className="pb-10 p-5">
        <h1 className="text-2xl md:text-3xl text-center p-6 font-bold text-black">
          Try our free JPG to PDF converter
        </h1>
        <p className="text-center font-semibold text-black px-10 md:px-28">
          Organize your picture files more effectively and save storage space by
          changing JPG images into PDFs. Try Crafty Art's free JPG to PDF
          converter to modify or enhance your photos without reducing their
          quality or dealing with unwanted watermarks.
        </p>
      </div>
      <RightImageSection
        point={
          <>
            <Box>
              <h1 className="text_linear pt-2">Convert JPG to PDF online</h1>
              <p>
                You can change a picture into a PDF using Crafty Art online. It
                works for both PNG and JPG image types.
              </p>
              <h1 className="text_linear pt-2">
                Converting Images to PDFs Quickly and Easily
              </h1>
              <p>
                Simply drag and drop or upload an image file to convert it into
                a PDF within seconds. After conversion, you can download the PDF
                file or sign in to share it.
              </p>
              <h1 className="text_linear pt-2">
                Top tool for changing JPG into PDF
              </h1>
              <p>
                When you use Crafty Art's online tools, you can trust that
                you'll get the best quality when converting images to PDFs.
              </p>
              <h1 className="text_linear pt-2">Convert any image file</h1>
              <p>
                Our tool changes different types of picture files like JPG and
                PNG into a PDF.
              </p>
              <h1 className="text_linear pt-2">Works on any platform</h1>
              <p>
                You can use our JPG to PDF tool online. It works in web browsers
                like Microsoft Edge or Google Chrome. This tool also works on
                different operating systems such as Mac, Windows, or Linux.
              </p>
            </Box>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/create-pdf/img4.png`}
        // image={`${assetsUrl}/w_assets/images/resumeImpact.png`}
      />

      <div className="pt-16 mx-auto max-w-[2400px]">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      {/* <div className="bg_linear flex flex-col text-white justify-center items-center px-5 md:px-10 py-20 text-center mx-auto max-w-[2400px]">
        <h1 className="font-bold text-3xl">
        It’s time to create PDF To JPG
        </h1>
      </div> */}

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] my-[30px] lg:my-[30px]"
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
