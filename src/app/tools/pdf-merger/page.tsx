"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const LeftImageSection = dynamic(
  () => import("../../wedding/components/LeftImageSection")
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
        heading={"Merge PDF File Free: Combine PDFs Easily Online"}
        text="Merge PDF file free with our convenient online tool. Easily combine multiple PDFs Free into one document without any hassle. Try it now!"
      />
      <Box>
        <link
          rel="canonical"
          title={"Merge PDF File Free: Combine PDFs Easily Online"}
          href={`https://www.craftyartapp.com/tools/pdf-merger`}
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

      {/* section 1 */}
      <div className="items-center text-center justify-center py-24 md:py-36 px-5 md:px-20 bg_linear mx-auto max-w-[2400px]">
        <div>
          <h1 className="font-bold text-4xl text-white">
            Free Online PDF Merger
          </h1>
          <p className="text-xl text-white pt-4">
            Combine PDF files to create a single document online for free. It’s
            easy to merge PDFs with our PDF combiner. No watermarks and no file
            size limits.
          </p>
          <div className="p-4">
            <button className="p-3 px-5 bg-white rounded-2xl pt- text-black font-semibold cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-0 mx-auto max-w-[2400px]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-6 px-2 md:px-5 lg:px-5 xl:px-10 2xl:px-32">
          <div className="p-2 md:p-5 rounded-2xl">
            <div className="flex pb-2 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-merger/icone1.png`}
                alt="Edit"
                className="h-[70px] w-[70px]"
              />
              <h3 className="text-base md:text-lg ml-2 sm::m-2 lg:m-3 font-bold">
                Free Online Tool To Combine PDFs
              </h3>
            </div>
            <div>
              <p>
                Combine several PDF files into a single document easily using
                Merge PDF. Just drag and drop your files, click a few times, and
                you're done! It's free to use, and you don't even have to create
                an account.
              </p>
            </div>
          </div>
          <div className="p-2 md:p-5 rounded-2xl">
            <div className="flex pb-2 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-merger/icone2.png`}
                alt="Edit"
                className="h-[70px] w-[70px]"
              />
              <h3 className="text-base md:text-xl ml-2 sm::m-2 lg:m-3 font-bold">
                Secure PDF Merger Online
              </h3>
            </div>
            <div>
              <p>
                When you upload or create files on our servers, we use a secure
                method called TLS encryption to protect them. After processing,
                we make sure to delete these files completely within an hour.
                Your files are kept safe and won't be stored for a long time.
              </p>
            </div>
          </div>
          <div className="p-2 md:p-5 rounded-2xl">
            <div className="flex pb-2 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-merger/icone3.png`}
                alt="Edit"
                className="h-[70px] w-[70px]"
              />
              <h3 className="text-base md:text-xl ml-2 sm::m-2 lg:m-3 font-bold">
                Works on Windows, Mac, & More
              </h3>
            </div>
            <div>
              <p>
                Our PDF combiner works in your web browser. It doesn't matter if
                you use a Mac, Windows, or Linux computer, or if you're using a
                mobile device. You can easily merge your files with Crafty Art.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-6 px-2 md:px-5 lg:px-5 xl:px-10 2xl:px-32">
          <div className="p-2 md:p-5 rounded-2xl">
            <div className="flex pb-2 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-merger/icone4.png`}
                alt="Edit"
                className="h-[70px] w-[70px]"
              />
              <h3 className="text-base md:text-xl ml-2 sm::m-2 lg:m-3 font-bold">
                Combine PDFs easily using Preview
              </h3>
            </div>
            <div>
              <p>
                When you use Merge PDF and upload your PDF files, we'll show you
                a preview. In this preview, you can change the order or remove
                specific pages and files. You can also add more PDFs to combine
                them.
              </p>
            </div>
          </div>
          <div className="p-2 md:p-5 rounded-2xl">
            <div className="flex pb-2 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-merger/icone5.png`}
                alt="Edit"
                className="h-[70px] w-[70px]"
              />
              <h3 className="text-base md:text-xl ml-2 sm::m-2 lg:m-3 font-bold">
                Combine PDFs securely
              </h3>
            </div>
            <div>
              <p>
                You can merge PDF files without spending money on expansive
                software. Crafty Art offers a free online tool with top-notch
                security features like TLS encryption. This keeps your files and
                information safe when you combine PDFs.
              </p>
            </div>
          </div>
          <div className="p-2 md:p-5 rounded-2xl">
            <div className="flex pb-2 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/pdf-merger/icone6.png`}
                alt="Edit"
                className="h-[70px] w-[70px]"
              />
              <h3 className="text-base md:text-xl ml-2 sm::m-2 lg:m-3 font-bold">
                Data Processing in the Cloud
              </h3>
            </div>
            <div>
              <p>
                Our online service has a great advantage: when you combine PDFs,
                it happens on our website, not on your computer. This means it
                won't slow down your device, and you can use our service from
                anywhere and at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LeftImageSection
        title="How to merge PDF files online free"
        point={
          <Box>
            <MarkText text="Choose the PDF files or other documents you want to merge using our PDF Merger." />
            <MarkText text="Our online tool quickly combines your PDF files into one." />
            <MarkText
              text="After putting together your PDF files, save the combined PDFs to your computer by
              downloading them."
            />
          </Box>
        }
        buttonName={"Coming Soon"}
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/pdf-merger/img1.png`}
      />

      <div className="pt-16">
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
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] pb-16"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>

        <FaqsBox
          heading="1. Which file formats can I merge using Crafty Art?"
          text={
            <>
              We can handle various types of files like PDFs, Word documents,
              PowerPoint presentations, Excel spreadsheets, images (JPG and
              PNG), iWork files, Open Office documents, and more. Plus, you can
              combine different file formats together.
            </>
          }
        />
        <FaqsBox
          heading="2. Can I merge JPG and PDF?"
          text={
            <>
              Yes, you can put together PDFs and images, different types of
              Office files, and more. You're able to merge as many files as you
              need into a single PDF. When combining them, we'll also change
              JPGs into PDFs and merge everything together.
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
      </Box>
    </>
  );
}
