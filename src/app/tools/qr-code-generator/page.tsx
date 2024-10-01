"use client";
import { Box, Button } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import RightImageSection from "../../wedding/components/RightImageSection";
import LeftImageSection from "../../wedding/components/LeftImageSection";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

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
        image={`${assetsUrl}/w_assets/create-qr/banner.png`}
        heading={"Free Online QR Code Generator | Crafty Art"}
        text="Create custom QR codes for free with our online QR code generator. Easily generate QR codes for websites, contact information, Wi-Fi access, and more."
      />

      <Box>
        <link
          rel="canonical"
          title={"Free Online QR Code Generator | Crafty Art"}
          href={`https://www.craftyartapp.com/tools/qr-code-generator`}
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
                  name: "What is a QR Code?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A QR code, or Quick Response code, is a two-dimensional barcode that can store various types of information. It can be scanned using a smartphone or QR code reader to quickly access the encoded data.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the QR Code Generator work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our QR code generator tool allows you to create QR codes by entering relevant information such as URLs, text, or contact details. Once you input the data, the tool generates a unique QR code that users can download and share.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of QR codes can I generate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our tool supports various types of QR codes, including URL QR codes, plain text QR codes, contact information QR codes (vCard), and more. Choose the type that best suits your needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the QR Code Generator free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our QR Code Generator is completely free to use. You can create as many QR codes as you need without any cost.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I customize the appearance of the QR code?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our tool allows you to customize the appearance of the QR code. You can choose different colors, add a logo, and adjust the size to match your preferences.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <GetStartedLinearBanner
        heading={"Make your own free QR code online."}
        text="Generate custom QR codes for your website, social media, and other online links effortlessly using
        Crafty Art's free QR code generator. Enhance customer engagement by adding these
        QR codes to your promotional materials. Simply enter a URL, and you'll receive your
        personalized QR code with just a few stapes!"
        buttonName="Get Started"
        navigate="/qr-code-generator/edit"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/create-qr/banner.png`}
              alt="indianBanner"
              style={{ width: "80%", height: "80%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <div>
        <div className="pt-5 md:pt-10">
          <h1 className=" text-xl md:text-3xl text-center p-5 font-bold text-black">
            To quickly create a QR code online, use an online QR
            <br />
            code generator.
          </h1>
        </div>
        <div className="lg:flex xl:px-20 2xl:px-48 m-3 pt-5">
          <div className="p-6 bg-white shadow-md m-5 w-7/6 lg:w-5/6 rounded-3xl">
            <div className=" flex justify-center">
              <img
                className="items-center justify-center h-[96px] w-[96px]"
                src={`${assetsUrl}/w_assets/create-qr/icon1.png`}
                alt="Placeholder Image"
              />
            </div>
            <div className="text-center">
              <div>
                <h1 className="font-bold pt-2">
                  Write a Website Address or Link.
                </h1>
              </div>
              <div>
                <p className="pt-2">
                  Go to our website's QR code generator. Put your website link
                  in the box. Click the 'Create QR Code' button, and a new QR
                  code will show up right away.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md m-5 w-7/6 lg:w-5/6 rounded-3xl">
            <div className=" flex justify-center">
              <img
                className="items-center justify-center h-[96px] w-[96px]"
                src={`${assetsUrl}/w_assets/create-qr/icon2.png`}
                alt="Placeholder Image"
              />
            </div>
            <div className="text-center">
              <div>
                <h1 className="font-bold pt-2">Customize Your Design</h1>
              </div>
              <div>
                <p className="pt-2">
                  Personalize your free online QR code to fit your brand.
                  Customize as Your Own Need.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md m-5 w-7/6 lg:w-5/6 rounded-3xl">
            <div className=" flex justify-center">
              <img
                className="items-center justify-center h-[96px] w-[96px]"
                src={`${assetsUrl}/w_assets/create-qr/icon3.png`}
                alt="Placeholder Image"
              />
            </div>
            <div className="text-center">
              <div>
                <h1 className="font-bold pt-2">Download QR code</h1>
              </div>
              <div>
                <p className="pt-2">
                  After you've designed your QR code and are satisfied with how
                  it looks, you can save it in three file formats: PNG or JPG.
                  If you want to change the QR code size without losing quality,
                  it's recommended to download it in PNG format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">
              Get a free QR code quickly in just a few seconds
            </h1>
            <p className="pt-2">
              Making your own custom QR code with our online generator is super
              easy. You don't have to download any special software – just use
              your computer or phone browser. Our website is user-friendly. Make
              it unique by changing the color and style, adding your company
              logo, and putting it in our free templates.
            </p>
            <div className="pt-3">
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
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                <Link href={"/qr-code-generator/edit"}>
                  Create Your QR Code Now
                </Link>
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        image={`${assetsUrl}/w_assets/create-qr/img1.png`}
      />

      <LeftImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">Make an eye-catching QR code</h1>
            <p className="pt-2">
              QR codes are really common now, and most phones can scan them
              easily. You can make them look even cooler by adding a design or
              frame from the free image library in Crafty Art. There are lots of
              ways to make your QR code stand out!
            </p>
            <br />
            <p>
              This tool lets you find out more about famous people or beautiful
              places by searching for their pictures. And it's free!
            </p>
            <div className="pt-3">
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
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                <Link href={"/qr-code-generator/edit"}>
                  Create Your QR Code Now
                </Link>
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        image={`${assetsUrl}/w_assets/create-qr/img2.png`}
      />

      <RightImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">
              Get more visitors to your website with an eye-catching QR code
              design.
            </h1>
            <p className="pt-2">
              QR codes don't have to be plain and boring! With Crafty Art, you
              can use your imagination to make them special. The more
              eye-catching your QR code is, the better it will grab people's
              attention and lead them to your website. Whether you want
              feedback, payment, or to guide customers to your contact or
              support page, make sure your QR code stands out on signs and
              brochures. Explore our templates and photos to create a unique
              image for any format whether it's for print, digital, web, or
              mobile. So, start making your QR codes and bring your creative
              ideas to life!
            </p>
            <div className="pt-3">
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
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                <Link href={"/qr-code-generator/edit"}>
                  Create Your QR Code Now
                </Link>
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        image={`${assetsUrl}/w_assets/create-qr/img3.png`}
      />

      <LeftImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">
              Create your QR code to stand out with thousands of professional
              looking templates.
            </h1>
            <p className="pt-2">
              You don't need to be a professional to make cool QR codes for your
              marketing stuff. Crafty Art has lots of fancy templates you can
              use. Just add your QR codes, and it makes it super easy for people
              to check out your webpage. You can make QR codes for all sorts of
              things like videos, ads, web pages, PDFs, menus, apps, and more.
              Crafty Art templates give you hundreds of creative options!
            </p>
            <br />
            <p>
              This tool lets you find out more about famous people or beautiful
              places by searching for their pictures. And it's free!
            </p>
            <div className="pt-3">
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
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                <Link href={"/qr-code-generator/edit"}>
                  Create Your QR Code Now
                </Link>
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        image={`${assetsUrl}/w_assets/create-qr/img4.png`}
      />

      <div className="bg_linear flex flex-col text-white justify-center items-center pxW-10 py-20 text-center">
        <h1 className="font-bold text-2xl lg:text-4xl">
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
          heading="1. What is a QR Code?"
          text={
            <>
              A QR code, or Quick Response code, is a two-dimensional barcode
              that can store various types of information. It can be scanned
              using a smartphone or QR code reader to quickly access the encoded
              data.
            </>
          }
        />

        <FaqsBox
          heading="2. How does the QR Code Generator work?"
          text={
            <>
              Our QR code generator tool allows you to create QR codes by
              entering relevant information such as URLs, text, or contact
              details. Once you input the data, the tool generates a unique QR
              code that users can download and share.
            </>
          }
        />

        <FaqsBox
          heading="3. What types of QR codes can I generate?"
          text={
            <>
              Our tool supports various types of QR codes, including URL QR
              codes, plain text QR codes, contact information QR codes (vCard),
              and more. Choose the type that best suits your needs.
            </>
          }
        />
        <FaqsBox
          heading="4. Is the QR Code Generator free to use?"
          text={
            <>
              Yes, our QR Code Generator is completely free to use. You can
              create as many QR codes as you need without any cost.
            </>
          }
        />
        <FaqsBox
          heading="5. Can I customize the appearance of the QR code?"
          text={
            <>
              Yes, our tool allows you to customize the appearance of the QR
              code. You can choose different colors, add a logo, and adjust the
              size to match your preferences.
            </>
          }
        />
      </Box>
    </>
  );
}
