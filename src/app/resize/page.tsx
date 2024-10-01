"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

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

const WithCraftyartBanner = dynamic(
  () => import("@/src/components/common/WithCraftyartBanner")
);
const CustomerSayingSmall = dynamic(
  () => import("@/src/components/common/CustomerSayingSmall")
);

export default function index() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <div>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/resize/designWithoutImage.png`}
        heading={"Image Resizer: Resize Images Effortlessly"}
        text="Effortlessly resize images with an intuitive image resizer tool. Perfectly adjust image dimensions for your needs. Save time and maintain quality effortlessly."
      />

      <Box>
        <link
          rel="canonical"
          title={"Image Resizer: Resize Images Effortlessly"}
          href={`https://www.craftyartapp.com/resize`}
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
                  name: "1. Can I resize multiple designs at once?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can select multiple designs and use the batch resize feature to adjust them simultaneously.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Is the resize feature easy to use for beginners?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely, the resize feature is designed to be user-friendly and intuitive.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. Can I customize the size of individual design elements?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can use the crop and transform features to adjust individual elements within your design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. How does the resize feature help with responsive design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "By optimizing your design for different screen sizes, you can ensure that it looks great on any device or platform.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. Are there any limitations to the resize feature?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The tool supports resizing up to a certain limit, depending on the file size and complexity of the design.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <Box
        sx={{
          background: "#1C3048",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "10px auto",
            width: "100%",
            overflow: "hidden",
          }}
          className="lg:pl-[150px]  max-lg:px-[20px] h-auto sm:h-[420px] max-sm:py-[50px] max-w-[2400px]"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
            className="w-full lg:w-[57%] max-lg:items-center "
          >
            <Typography
              sx={{
                color: "#ffffff",
                width: "100%",
                fontWeight: "600",
                lineHeight: "48px",
              }}
              className="max-lg:text-center text-[30px] sm:text-[40px]"
              variant="h1"
            >
              Easily Resize Your Designs with Our Graphic Design Tool 
            </Typography>

            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                width: "100%",
                fontWeight: "500",
              }}
              className="max-lg:text-center"
            >
              It helps in changing the resolution, aspect ratio, or overall file
              size of an image without compromising its quality. This is
              particularly useful for optimizing images for web pages, social
              media, or various digital platforms where specific size
              requirements might be necessary for optimal viewing or faster
              loading times.
            </Typography>

            <Button
              style={{
                width: "fit-content",
                textTransform: "unset",
                boxShadow: " 2px 2px 4px rgba(0, 0, 0, 0.15)",
                border: "none",
                padding: "8px 15px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                color: "white",
                cursor: "not-allowed",
              }}
              className="bg_linear"
            >
              Coming Soon
            </Button>
          </Box>
          <Box
            sx={{
              width: "43%",
              alignItems: "center",
              justifyContent: "end",
            }}
            className="hidden lg:flex"
          >
            <Box sx={{ width: "526px" }}>
              <img
                src={`${assetsUrl}/w_assets/images/resize/resizeBanner.png`}
                alt="resumeBanner"
                style={{ width: "100%", height: "100%", paddingRight: "0px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="How do I resize my designs using
        this graphic design tool?"
        point={
          <Box>
            <MarkText text="Use the resize feature located in the toolbar to adjust the dimension of your design." />
            <MarkText text="Input the desired height and width measurements in the resize menu." />
            <MarkText text="Select the aspect ratio lock to ensure your design is scaled proportionally." />
            <MarkText text="Preview your resized design and save it to your device or cloud storage." />
          </Box>
        }
        alt="resize "
        image={`${assetsUrl}/w_assets/images/resize/resizeYourImage.png`}
      />

      <RightImageSection
        title="Can I resize my designs without
        losing image quality?"
        point={
          <Box>
            <MarkText text="Yes, this tool uses advanced algorithm to maintain image quality even after resizing." />
            <MarkText
              text="Additionally, you can optimise your design for different screen sizes using the
export feature."
            />
            <MarkText text="This ensures that your design looks great no matter where it's viewed." />
          </Box>
        }
        alt="resize "
        image={`${assetsUrl}/w_assets/images/resize/designWithoutImage.png`}
      />

      <LeftImageSection
        title="How can I use the resize feature to
        create unique designs?"
        point={
          <Box>
            <MarkText
              text="Experiment with resizing your designs to create multiple versions with different
              dimensions."
            />
            <MarkText text="Use these different versions to cater to specific platforms or applications." />

            <MarkText
              text="You can also use the resize feature to create custom design for different marketing
campaigns."
            />
          </Box>
        }
        alt="resize "
        image={`${assetsUrl}/w_assets/images/resize/resizeFeature.png`}
      />

      <WithCraftyartBanner />

      <LeftImageSection
        title="Why Choose Crafty Art For Image Resizer?"
        point={
          <Box>
            <MarkText text="Bulk Resize in Seconds: Upload multiple images at once and resize them effortlessly in a matter of seconds, saving you valuable time." />
            <MarkText text="Preserve Image Quality: Our advanced algorithms ensure that resizing doesn't compromise image quality. Enjoy sharp, clear visuals after resizing." />
            <MarkText text="Customize for Any Platform: Tailor images for various platforms effortlessly - social media, websites, emails, and more - with our intuitive resizing options." />
            <MarkText text="Easy-to-Use Interface: Our user-friendly interface requires no technical expertise. Resize images hassle-free with a few clicks." />
            <MarkText text="File Format Flexibility: Resize images in any preferred format - JPEG, PNG, GIF, and more - maintaining the integrity of your visuals." />
            <MarkText text="Mobile-Friendly Resizing: Access our image resizer on-the-go. Resize images conveniently from your mobile device for quick sharing or uploading." />
          </Box>
        }
        alt="resize "
        image={`${assetsUrl}/w_assets/images/resize/side1.png`}
      />

      <RightImageSection
        title="Features Of Our Image Resizer"
        point={
          <Box>
            <MarkText text="Optimal Compatibility: Our tool supports a wide range of resolutions and aspect ratios, ensuring compatibility with various devices and platforms." />

            <MarkText text="Preserve Metadata: Retain essential image details such as EXIF data and timestamps during the resizing process, maintaining the integrity of your visuals." />

            <MarkText text="Cloud-Based Convenience: Access our image resizer from anywhere, anytime, and across different devices, providing flexibility and convenience." />

            <MarkText text="Advanced Filters and Effects: Enhance your images further by applying filters or effects during resizing, adding artistic touches effortlessly." />

            <MarkText text="Secure and Private: We prioritize data security - your images and information remain confidential throughout the resizing process." />
          </Box>
        }
        alt="resize"
        image={`${assetsUrl}/w_assets/images/resize/side2.png`}
      />

      <CustomerSayingSmall />

      <GetTemplates
        heading="Create Stunning Designs with the Best Resizing Tool Available!"
        text="Resize Like a Pro - Start Designing Today!"
        bt_name="Coming Soon"
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
          heading="1. Can I resize multiple designs at once?"
          text={
            <>
              Yes, you can select multiple designs and use the batch{" "}
              <FLink lk={`${domain}resize`}>resize</FLink>
              feature to adjust them simultaneously.
            </>
          }
        />
        <FaqsBox
          heading="2. Is the resize feature easy to use for beginners?"
          text={
            <>
              Absolutely, the resize feature is designed to be user-friendly and
              intuitive.
            </>
          }
        />

        <FaqsBox
          heading="3. Can I customise the size of individual design elements?"
          text={
            <>
              Yes, you can use the crop and transform features to adjust
              individual elements within your design.
            </>
          }
        />

        <FaqsBox
          heading="4. How does the resize feature help with responsive design?"
          text={
            <>
              By optimising your design for different screen sizes, you can
              ensure that it looks great on any device or platform.
            </>
          }
        />

        <FaqsBox
          heading="5. Are there any limitations to the resize feature?"
          text={
            <>
              The tool supports resizing up to a certain limit, depending on the
              file size and complexity of the design.
            </>
          }
        />
      </Box>
    </div>
  );
}
