"use client";
 import { Box, Button } from "@mui/material";
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
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
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
        heading={"Free Image Resizer: Quickly and Easily Resize Photos Online"}
        text="Effortlessly resize photos online with our free tool, perfect for social media, websites, and personal projects."
      />
      <Box>
        <link
          rel="canonical"
          title={"Free Image Resizer: Quickly and Easily Resize Photos Online"}
          href={`https://www.craftyartapp.com/tools/image-resizer`}
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
                  name: "What does your photo resizing service offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer a user friendly platform to resize images, adjusting dimensions without compromising quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will my resized images be watermarked?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, we do not add watermarks to the resized images.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What happens to the original images after resizing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We do not store or keep the original images after the resizing process is completed. Your privacy and data security are important to us.",
                  },
                },
                {
                  "@type": "Question",
                  name: " Is there an option for custom resizing beyond presets?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform allows for custom dimensions beyond preset sizes for more personalized resizing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. What kind of quality can I expect after resizing my images?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform utilizes advanced algorithms to maintain image quality during the resizing process, but some quality loss may occur based on the original image and resizing parameters.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Free Image resizer."}
        text="Resize your photos quickly, conveniently, and at no cost using our online tool. Adjust the dimensions
        of any picture to fit various social media channels effortlessly."
        buttonName="Coming Soon"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/tools/image-resizer/banner.png`}
              alt="resumeBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />
      {/* section 2 */}
      <Box>
        <div className="py-10 mx-auto max-w-[2400px]">
          <h1 className="text-3xl text-center p-6 font-bold text-black">
            How to resize an image
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-7 md:px-10 lg:px-12 xl:px-28 2xl:px-40 py-6">
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/image-resizer/icone7.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Select
              </h3>
            </div>
            <div>
              <p>Upload your Image to our image resize tool.</p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/image-resizer/icone8.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
                Resize
              </h3>
            </div>
            <div>
              <p>Resize the image as you need.</p>
            </div>
          </div>
          <div className="bg-[#F4F7FE] p-10 rounded-2xl">
            <div className="flex pb-5 items-center">
              <img
                src={`${assetsUrl}/w_assets/tools/image-resizer/icone9.png`}
                className="h-[50px] w-[50px]"
                alt="Edit"
              />
              <h3 className="text-lg xl:text-xl ml-2 sm::m-2 font-bold">
              Continue Editing
              </h3>
            </div>
            <div>
              <p>
              Instantly download your image.
              </p>
            </div>
          </div>
        </div>
      </Box>

      <LeftImageSection
        title="Resize images online for free."
        point={
          <Box>
            <p>
              Use our free online tool to change the size of your pictures
              quickly. You can make them smaller or adjust them to be vertical
              or horizontal. This is great for sharing on social media or
              printing. If you don't find the size you need, you can also create
              a custom size.
            </p>
            <div className="pt-5">
              <Button
                style={{
                  background:
                    "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                  width: "fit-content",
                  fontSize: "18px",
                  textTransform: "unset",
                  borderRadius: "5px",
                  fontWeight: "500",
                  color: "white",
                  padding: "8px 20px",
                  cursor:"not-allowed",
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                Coming Soon
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/image-resizer/img1.png`}
      />

      <div className="pt-10">
        <h1 className="text-3xl text-center p-2 font-bold text-black">
          How We Work
        </h1>
      </div>

      <div className="lg:flex md:px-8 lg:px-10 xl:px-28 m-3">
        <div className="p-5 bg-[#F4F7FE] m-5 w-7/6 lg:w-5/6 rounded-2xl">
          <div className="pb-10">
            <img
              className="h-[38px] w-[39px]"
               src={`${assetsUrl}/w_assets/tools/image-resizer/icone1.png`}
              alt="Edit"
            />
          </div>
          <div>
            <p className="font-semibold">Perfect quality</p>
          </div>
          <div className="flex pt-5 items-center">
            <div>
              The top online tool for changing the size of your pictures while
              keeping the best quality.
            </div>
          </div>
        </div>
        <div className="p-5 bg-[#F4F7FE] m-5 w-7/6 lg:w-5/6 rounded-2xl">
          <div className="pb-10">
            <img
              className="h-[38px] w-[39px]"
              src={`${assetsUrl}/w_assets/tools/image-resizer/icone2.png`}
              alt="Edit"
            />
          </div>
          <div>
            <p className="font-semibold">Lightning Fast</p>
          </div>
          <div className="flex pt-5 items-center">
            <div>
              This tool, hosted in the cloud, can quickly change the size of
              your pictures in just a few seconds!
            </div>
          </div>
        </div>
        <div className="p-5 bg-[#F4F7FE] m-5 w-7/6 lg:w-5/6 rounded-2xl">
          <div className="pb-10">
            <img
              className="h-[38px] w-[39px]"
              src={`${assetsUrl}/w_assets/tools/image-resizer/icone3.png`}
              alt="Edit"
            />
          </div>
          <div>
            <p className="font-semibold">Easy To Use</p>
          </div>
          <div className="flex pt-5 items-center">
            <div>
              Upload your image and specify the size you want. It's that simple.
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex md:px-10 lg:px-12 xl:px-28 m-3">
        <div className="p-5 bg-[#F4F7FE] m-5 w-7/6 lg:w-5/6 rounded-2xl">
          <div className="pb-10">
            <img
              className="h-[38px] w-[39px]"
              src={`${assetsUrl}/w_assets/tools/image-resizer/icone4.png`}
              alt="Edit"
            />
          </div>
          <div>
            <p className="font-semibold">Works Anywhere</p>
          </div>
          <div className="flex pt-5 items-center">
            <div>
              Crafty Art is browser-based (no software to install). It works on
              any platform (Windows, Linux, Mac).
            </div>
          </div>
        </div>

        <div className="p-5 bg-[#F4F7FE] m-5 w-7/6 lg:w-5/6 rounded-2xl">
          <div className="pb-10">
            <img
              className="h-[38px] w-[39px]"
              src={`${assetsUrl}/w_assets/tools/image-resizer/icone5.png`}
              alt="Edit"
            />
          </div>
          <div>
            <p className="font-semibold">Privacy Guaranteed</p>
          </div>
          <div className="flex pt-5 items-center">
            <div>
              The pictures you send are kept safe using a very strong security
              system. They are sent and stored in a way that makes it extremely
              hard for anyone else to access them.
            </div>
          </div>
        </div>

        <div className="p-5 bg-[#F4F7FE] m-5 w-7/6 lg:w-5/6 rounded-2xl">
          <div className="pb-10">
            <img
              className="h-[38px] w-[39px]"
              src={`${assetsUrl}/w_assets/tools/image-resizer/icone6.png`}
              alt="Edit"
            />
          </div>
          <div>
            <p className="font-semibold">It’s Free</p>
          </div>
          <div className="flex pt-5 items-center">
            <div>
              Our Tool Is Free! You don't need to install any software, sign up,
              or login.
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 mx-auto max-w-[2400px]">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <div className="bg_linear flex flex-col text-white justify-center items-center px-5 md:px-10 py-20 text-center mx-auto max-w-[2400px]">
        <h1 className="font-bold text-3xl">
          Easily change your image size online with Craftyart.
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
          heading="1. What does your photo resizing service offer?"
          text={
            <>
              We offer a user friendly platform to resize images, adjusting
              dimensions without compromising quality.
            </>
          }
        />
        <FaqsBox
          heading="2. Will my resized images be watermarked?"
          text={<>No, we do not add watermarks to the resized images.</>}
        />
        <FaqsBox
          heading="3. What happens to the original images after resizing?"
          text={
            <>
              We do not store or keep the original images after the resizing
              process is completed. Your privacy and data security are important
              to us.
            </>
          }
        />
        <FaqsBox
          heading="4. Is there an option for custom resizing beyond presets?"
          text={
            <>
              Our platform allows for custom dimensions beyond preset sizes for
              more personalized resizing.
            </>
          }
        />
        <FaqsBox
          heading="5. What kind of quality can I expect after resizing my images?"
          text={
            <>
              Our platform utilizes advanced algorithms to maintain image
              quality during the resizing process, but some quality loss may
              occur based on the original image and resizing parameters.
            </>
          }
        />
      </Box>
    </>
  );
}
