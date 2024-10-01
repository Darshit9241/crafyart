"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import ToolBox from "@/src/components/common/ToolBox";
 import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);
const LeftImageSection = dynamic(
  () => import("../wedding/components/LeftImageSection")
);
const RightImageSection = dynamic(
  () => import("../wedding/components/RightImageSection")
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
        image={"./images/invitationImage/Indian/banner.png"}
        heading={"Create PDFs Online Tool: Transform Files Free PDF Creator"}
        text=" Discover the Best Online PDF Creator! Easily Convert Files to PDFs with Our Free Tool. No Downloads Needed! Try It Now."
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
                  name: "Which is the best Website for PDF related Work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art is the best website for PDF related Work.",
                  },
                },
                {
                  "@type": "Question",
                  name: "I need To Pay for Editing PDF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, you don’t need to pay for that.",
                  },
                },
                {
                  "@type": "Question",
                  name: " Can I use this tool without Sign-in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can use this tool without Sign-in.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}

      <GetStartedLinearBanner
        heading={"We simplify creating PDFs."}
        text="Here are the essential tools for boosting productivity and working smarter with documents."
        buttonName="Coming Soon"
        navigate="/s/indian"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/tools/create-pdf/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <div className="mx-auto max-w-[2400px]">
        <h1 className="text-3xl text-center p-6 font-bold text-black">
          Most Popular PDF Tools
        </h1>
        <p className="text-center font-semibold p-3 text-black">
          6 tools to convert, compress, and edit PDFs for free. Try it out
          today!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone1.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                <a target="_blank" href="/tools/image-to-pdf">
                  Image To PDF
                </a>
              </h3>
            </div>
            <div>
              <p>Convert Image Into PDF</p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone2.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                <a target="_blank" href="/tools/pdf-editor">
                  PDF Editor
                </a>
              </h3>
            </div>
            <div>
              <p>Edit Your PDF For Free</p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone3.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                <a target="_blank" href="/tools/pdf-merger">
                  PDF Merger
                </a>
              </h3>
            </div>
            <div>
              <p>Merge Your PDF With Us</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone4.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />

              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                <a target="_blank" href="/tools/png-to-jpg">
                  PDF To JPG
                </a>
              </h3>
            </div>
            <div>
              <p>Convert your PDF Into JPG</p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone5.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                <a target="_blank" href="/tools/png-to-jpg">
                  PNG To JPG
                </a>
              </h3>
            </div>
            <div>
              <p>Convert Your PNG Image To JPG</p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/create-pdf/icone6.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold cursor-pointer">
                <a target="_blank" href="/tools/jpg-to-pdf">
                  JPG To PDF
                </a>
              </h3>
            </div>
            <div>
              <p>Convert your JPG Image Into PDF</p>
            </div>
          </div>
        </div>
      </div>

      <Box className="pb-10 p-5">
        <Typography className="text-3xl text-center p-6 font-bold text-black">
          Make easy tasks stay easy
        </Typography>
        <Typography className="text-center font-semibold text-black">
          Crafty Art is the best website for PDF. It has everything you need to
          create, organize, and complete your digital document
        </Typography>
      </Box>

      <RightImageSection
        title="How to Edit PDF Files Online?"
        point={
          <>
            <h1>Change your file format quickly using an online tool.</h1>
            <Box>
              <MarkText text="Please click on Upload PDF To Convert or choose, drag and drop your file into the Drop Here area." />
              <MarkText text="Make Any Edit or Changes you need." />
              <MarkText text="Please click Convert and choose the format you prefer." />
              <MarkText text="Get the transformed file downloaded or easily share it with others!" />
            </Box>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/create-pdf/img1.png`}
       />

      <LeftImageSection
        title="How To Convert PDF To JPG."
        point={
          <Box>
            <MarkText text="Open your PDF with the PDF To JPG" />
            <MarkText text="Convert all pages or select pages you want to convert" />
            <MarkText text="Select image format PNG, JPG" />
            <MarkText text="Choose a higher resolution" />
            <MarkText text="Quickly convert a PDF page to PNG And JPG" />
            <MarkText text="Download all the converted images" />
          </Box>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/create-pdf/img2.png`}
       />

      {/* section 3 */}

      <RightImageSection
        title="How to type on a PDF"
        point={
          <>
            <Box>
              <MarkText text="Open your file using the PDF editor" />
              <MarkText text="Fill Out PDF forms easily" />
              <MarkText text="Get the transformed file downloaded or easily share it with others!" />
              <MarkText text="Save And download your document" />
            </Box>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/create-pdf/img3.png`}
       />

      {/* section 4 */}
      <RightImageSection
        title="How to type on a PDF"
        point={
          <>
            <Box>
              <h1 className="text_linear pt-2">Convert Anytime, Anywhere</h1>
              <p>
                Convert PDF to other files online from your mobile and desktop!
                This works with Google Drive, Dropbox, and Microsoft OneDrive.
                It works on all web browsers and on both Mac and Windows
                computers.
              </p>
              <h1 className="text_linear pt-2">100% Safe and Secure</h1>
              <p>
                We don’t save your info or keep your data. So, your private docs
                and privacy are safe with us.
              </p>
              <h1 className="text_linear pt-2">
                No Downloads or Installations needed
              </h1>
              <p>
                You don't need to install anything extra. Our online PDF editor
                and converter work when you're connected to the internet.
              </p>
              <h1 className="text_linear pt-2">Free Online Editor Features</h1>
              <p>
                Use all our tools without paying! Change text easily by editing,
                removing, or adding words.
              </p>
              <h1 className="text_linear pt-2">
                No Technical knowledge Needed
              </h1>
              <p>Zero skill required for using our Tool.</p>
            </Box>
          </>
        }
        alt="Resume"
        path="/templates/resume-portrait"
        image={`${assetsUrl}/w_assets/tools/create-pdf/img4.png`}
       />

      <div className="pt-16 mx-auto max-w-[2400px]">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <div className="bg_linear flex flex-col text-white justify-center items-center px-5 md:px-10 py-20 text-center mx-auto max-w-[2400px]">
        <h1 className="font-bold text-3xl">
          All the tools you need to work with PDFs are in one convenient place
        </h1>
      </div>

      <div className="mx-auto max-w-[2400px] py-5">
        <div className="flex justify-center">
          <h1 className="text-xl md:text-3xl text-center py-5 font-bold text-black">
            <p>
              {" "}
              <span className="text_linear">Check Out</span> Our Other Features
            </p>
          </h1>
        </div>
        <div className="flex flex-wrap justify-center px-0 lg:px-5 xl:px-48">
          <div className="flex-shrink-0 w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <a href="/tools/image-resizer">
              <div className="p-2 lg:p-5 rounded-3xl flex items-center justify-center bg-[#FAF5F0] cursor-pointer">
                <img
                  className="h-[200px] md:h-auto 2xl:h-[300px] w-auto"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/img1.png`}
                  alt="Placeholder Image"
                />
              </div>
            </a>
            <h1 className="text-center font-bold text-xl pt-4">Resize image</h1>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <a href="/tools/image-compressor">
              <div className="p-2 lg:p-5 rounded-3xl flex items-center justify-center bg-[#FAF5F0] cursor-pointer">
                <img
                  className="h-[200px] md:h-auto 2xl:h-[300px] w-auto"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/img2.png`}
                  alt="Placeholder Image"
                />
              </div>
            </a>
            <h1 className="text-center font-bold text-xl pt-4">
              Image compressor
            </h1>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
            <a href="/tools/qr-code-generator">
              <div className="p-2 lg:p-5 rounded-3xl flex items-center justify-center bg-[#FAF5F0] cursor-pointer">
                <img
                  className="h-[200px] md:h-auto 2xl:h-[300px] w-auto"
                  src={`${assetsUrl}/w_assets/tools/png-to-jpg/img3.png`}
                  alt="Placeholder Image"
                />
              </div>
            </a>
            <h1 className="text-center font-bold text-xl pt-4">
              Qr code generator
            </h1>
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
          heading="1. Which is the best Website for PDF related Work?"
          text={<>Crafty Art is the best website for PDF related Work.</>}
        />

        <FaqsBox
          heading="2. I need To Pay for Editing PDF?"
          text={<>No, you don’t need to pay for that.</>}
        />

        <FaqsBox
          heading="3. Can I use this tool without Sign-in?"
          text={<>Yes, you can use this tool without Sign-in.</>}
        />
      </Box>
    </>
  );
}
