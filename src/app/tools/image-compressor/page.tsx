"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box, Button } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";

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
        heading={"Free Image Compressor Tool | Reduce Image File Size Quickly"}
        text="Reduce image file sizes online effortlessly with our free image compressor tool. Compress images without compromising quality for faster web loading times."
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
                  name: "Is there an option for custom resizing beyond presets?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our platform allows for custom dimensions beyond preset sizes for more personalized resizing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What kind of quality can I expect after resizing my images?",
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

      <div className="items-center text-center justify-center py-24 px-5 md:px-20 bg_linear mx-auto max-w-[2400px]">
        <div>
          <h1 className="font-bold text-4xl text-white">Image Compressor</h1>
          <p className="text-xl text-white pt-4">
            Best website to compress image files online for free.
          </p>
          <div className="p-4">
            <button className="p-3 px-5 bg-white rounded-2xl pt- text-black font-semibold cursor-not-allowed">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-center px-2 pt-16 font-bold text-black">
          Why Choose Crafty Art
        </h1>
      </div>

      <div className="grid grid-row-4 lg:grid-cols-4 gap-4 lg:px-5 xl:px-20 2xl:px-32 pt-10 mx-auto max-w-[2400px]">
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[50px]"
              src={`${assetsUrl}/w_assets/tools/image-compressor/icone1.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">Perfect Quality</h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              We use smart compression to make images much smaller without
              losing their quality.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[50px]"
              src={`${assetsUrl}/w_assets/tools/image-compressor/icone2.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">Best Compression</h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              Make your pictures smaller by up to 80% or even more by using a
              method called lossy compression and making other adjustments to
              reduce the file size.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[60px]"
              src={`${assetsUrl}/w_assets/tools/image-compressor/icone3.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">Easy To Use</h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              Just upload your pictures, and see our tool work its magic. It can
              quickly compress even large images in just a few seconds.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10 text-center">
          <div className="flex justify-center">
            <img
              className="h-[50px] w-[70px]"
              src={`${assetsUrl}/w_assets/tools/image-compressor/icone4.png`}
              alt="Logo"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold pt-5">Image Formats</h1>
          </div>
          <div className="text-center px-5 pt-2">
            <p>
              Our image compression tool can shrink the file size of both JPEG
              and PNG images. It allows you to compress a batch of up to 50
              images
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-row-4 lg:grid-cols-4 gap-4 px-10 mx-auto max-w-[2400px]">
        <div className="lg:grid grid-cols-subgrid gap-4 col-span-3">
          <div className="col-start-2">
            <div className="py-5 lg:py-10 text-center">
              <div className="flex justify-center">
                <img
                  className="h-[50px] w-[50px]"
                  src={`${assetsUrl}/w_assets/tools/image-compressor/icone5.png`}
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold pt-5">Privacy Guaranteed</h1>
              </div>
              <div className="text-center px-2 pt-2">
                <p>
                  We take your file privacy seriously. When you upload images,
                  they are sent securely using a strong 256-bit encryption. Your
                  images are automatically deleted within 1 hour.
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-3">
            <div className="py-5 lg:py-10 text-center">
              <div className="flex justify-center">
                <img
                  className="h-[50px] w-[50px]"
                  src={`${assetsUrl}/w_assets/tools/image-compressor/icone6.png`}
                  alt="Logo"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold pt-5">It’s Free</h1>
              </div>
              <div className="text-center px-2 pt-2">
                <p>
                    We've compressed millions of images for free! No need to
                    install software, sign up, or without watermarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeftImageSection
        title="How to compress images?"
        point={
          <Box>
            <MarkText text="Click the 'Select Images' button to choose JPG, JPEG, or PNG files." />
            <MarkText
              text="Our Tool will automatically compress images. Or you can adjust the quality with our
              free editor."
            />
            <MarkText text="Click on the Download button to save your compressed images." />
          </Box>
        }
        // buttonName={"Upload your photo"}
        buttonName={"Coming Soon"}
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/image-compressor/img1.png`}
      />

      <div className="pt-16">
        <WithCraftyartBanner />
      </div>

      <CustomerSaying />

      <div className="bg_linear flex flex-col text-white justify-center items-center px-5 md:px-10 py-20 text-center mx-auto max-w-[2400px]">
        <h1 className="font-bold text-3xl">
          Easily Compress your image online with CraftyArt.
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
