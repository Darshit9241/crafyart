"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Head from "next/head";
import dynamic from "next/dynamic";
 import { useDispatch } from "react-redux";
import { authCookiesGet, userPremiumGet } from "@/src/redux/action/AuthToken";
import { consoleLog } from "@/src/commonFunction/console";
import toast from "react-hot-toast";
import api from "@/src/clientApi/api";
import { saveAs } from "file-saver";
import axios, { AxiosResponse } from "axios";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";




const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const RightImageSection = dynamic(
  () => import("../../wedding/components/RightImageSection")
);
const LeftImageSection = dynamic(
  () => import("../../wedding/components/LeftImageSection")
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const dispatch = useDispatch();
  const [mainLoader, setMainLoader] = useState<boolean>(false);
  const [imageTab, setImageTab] = useState<string>("after");


 
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef: React.RefObject<HTMLInputElement> | any = useRef(null);

  const handleButtonClick = () => {
      // if (!token) {
        // dispatch(openLogin(true));
      // } else if (!userPremiumGet()) {
        // router.push("/plans");
      // } else 
    fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);

      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setImagePreviewUrl(imageUrl);
    }
  };

  // const handleFileChange = (event:any) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     setSelectedFile(file);

  //     const url = URL.createObjectURL(file);
  //     setImageUrl(url);
  //     setImagePreviewUrl(url); // Assuming you want to preview the same image initially
  //   }
  // };
  
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    if (event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleDownload = async () => {
    const blob = await fetch(imageUrl).then((res) => res.blob());

    saveAs(blob, "downloaded_image.png");
  };

  const [imageUrl, setImageUrl] = useState<string | any>(null);

  const imageEnhancer = async (payload: { image: File }): Promise<Blob> => {
    try {
      const formData = new FormData();
      
      formData.append('file', payload.image);
  
      const response = await axios.post<ArrayBuffer>(
        'http://192.168.1.23:8001/Enhancer/upload/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'accept': 'application/json',
          },
          responseType: 'arraybuffer',
        }
      );
  
      const blob = new Blob([response.data], { type: 'image/png' });
      
  
      return blob;
    } catch (error) {
      
      throw new Error('Image enhancement failed');
    } 
  }


  useEffect(() => {
    if (selectedFile) {
      setMainLoader(true);
      imageEnhancer({ image: selectedFile })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setMainLoader(false);
        setImageUrl(imageUrl);
         
      })
      .catch((error) => {
        toast.error("Error in Image Enhancer");
        setMainLoader(false);
        consoleLog("Error in Image Enhancer:", error);
      });
    }
  }, [selectedFile]);

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/tools/Indian/banner.png`}
        heading={"Free Image Enhancer - Enhance Photo Quality Online With Ai"}
        text="Enhance your images quality for free with our free image enhancer tool.Upgrade your visuals effortlessly through just one click.Try it now & see the difference."
      />
      <Box>
        <link
          rel="canonical"
          title={"Free Image Enhancer - Enhance Photo Quality Online With Ai"}
          href={`https://www.craftyartapp.com/tools/image-enhancer`}
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
                  name: "1. How do I enhance the brightness and contrast of my images on CratyArt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To enhance brightness and contrast, navigate to the adjustment tools section in CratyArt and use the sliders provided for brightness and contrast. Simply drag the sliders to increase or decrease the values until you achieve the desired enhancement.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a tool for sharpening images on CratyArt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, CratyArt offers a sharpening tool that allows you to enhance the sharpness and clarity of your images. You can adjust the intensity of the sharpening effect to your preference.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. How to make a picture clearer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Upload Your Photo: Begin by uploading your photo to CratyArt. Utilize the AI Image Enhancer: Select the AI Image Enhancer feature. CratyArt will automatically analyze your image and apply enhancements to improve clarity, sharpness, colors, and overall quality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. How can I adjust the colors in my images using CratyArt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CratyArt offers various color adjustment tools such as saturation, vibrance, and hue adjustments. You can use these tools to enhance the colors in your images and make them more vibrant.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. How do I save and export my enhanced images from CratyArt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Once you're satisfied with your edits, simply click on the save/export button in CratyArt to save your image in the desired quality. CratyArt supports file formats including JPEG & PNG.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      
       
      <Box  className="bg-[#F4F7FE] px-5 md:px-5 lg:px-24 p-5 bg-white-700 fle md:flex justify-center items-center">
       <Box className=" py-[50px] max-sm:py-[20px]  px-[15px]">
        <Typography
          className="text-[45px] max-sm:text-[28px] text-center font-[700] mb-2 w-[70%] max-md:w-full mx-[auto]"
          variant="h1"
        >
          Photo Enhancer-Enhance Images
        </Typography>

        <Typography className="text-center font-medium text-[20px] ">
        Easily enhance your photos with our AI-powered photo enhancer. Boost
            image resolution, <br />
            enhance colors, and sharpen details with a single click!
        </Typography>
        <Box
          className={` mx-auto py-[50px] ${
            imageUrl ? "w-[900px] max-sm:w-full " : " w-[80%] max-sm:w-full"
          }`}
        >
          <Box
            className={`flex items-center gap-[100px] max-sm:gap-[35px] max-lg:gap-[30px]  mx-auto pt-[20px]  max-sm:py-[20px]  max-md:flex-col   `}
          >
            {/* <Box
              className="flex-1 rounded-[10px]"
              // sx={{
              //   backgroundImage: imageUrl
              //     ? "url(https://assets.craftyart.in/w_assets/images/transparent.png)"
              //     : "",
              //   border: imageUrl ? "3px solid #8080803b" : "",
              // }}
            >
                {imageUrl ? (
                  imageTab === "after" ? (
                    <>
                    <div>
                      <img src={imageUrl} alt="image" className="h-[500px] object-contain" />
                    </div>
                    </>
                  ) 
                  : (
                    <img src={imagePreviewUrl} alt="imagePreview" className="h-[500px] object-contain " /> 
                  )
                ) : (
                  <img
                     src={`${assetsUrl}/w_assets/tools/enhancer-images/banner.png`}
                    alt="bg remove"
                  />
                )}
            </Box> */}

          <Box className="flex-1 rounded-[10px]">
                {imageUrl ? (
                    <>
                      <div style={{objectFit:'contain', margin: 'auto', padding: '10px' }}>
                        <ReactCompareSlider
                          // itemOne={<ReactCompareSliderImage src={imageUrl} alt="Image one" />}
                          // itemTwo={<ReactCompareSliderImage  src={imagePreviewUrl} alt="Image two" />}
                          itemOne={<ReactCompareSliderImage src={imagePreviewUrl} alt="Image one" />}
                          itemTwo={<ReactCompareSliderImage  src={imageUrl} alt="Image two" />}
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </>   
                ) : (
                  // <img
                  //   src={`${assetsUrl}/w_assets/tools/enhancer-images/banner.png`}
                  //   alt="bg remove"
                  // />
                  <>
                    <div className="cursor-pointer">  
                  <ReactCompareSlider
                      itemOne={<ReactCompareSliderImage src={`/images/imageenhancer/blur.png`} alt="Image one" className="rounded-[15px]"/>}
                      itemTwo={<ReactCompareSliderImage  src={`/images/imageenhancer/img.png`} alt="Image two"  className="rounded-[15px]"/>}
                  />
                    </div>
                  </>
                )}
          </Box>


            {imageUrl ? (
              <Box>
                <button
                  className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                  onClick={handleDownload}
                >
                  Download HD
                </button>

                <p className="text-[18px] opacity-70 text-center pb-4">
                  1200 × 1200 px
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <button
                  onClick={handleButtonClick}
                  className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                >
                  Upload New
                </button>
              </Box>
            ) : (
              <Box className="flex-1 max-md:w-full">
                <div
                  className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[50px] rounded-[5px] "
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: isDragOver
                      ? "1px dashed black"
                      : "1px dashed #ABB2C7",
                    display: selectedFile ? "none" : "flex",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>

                  <div>
                    <h2 className="font-medium text-center mb-2">
                      or drag and drop here to remove background
                    </h2>

                    <p className="text-center text-[14px]">
                       JPEG, JPG, PNG or WEBP
                    </p>
                  </div>
                </div>
                <Box>
                  <div className="text-center">
                    <p className="text-sm pt-5">
                      You have no image? Try one of these
                    </p>
                  </div>
                  <div className="flex justify-center px-5 pt-3">
                    <button>
                      <img
                        className="px-2 h-auto"
                        src={`${assetsUrl}/w_assets/tools/enhancer-images/img1.png`}
                        alt="image"
                      />
                    </button>
                    <button>
                      <img
                        className="px-2 h-auto"
                        src={`${assetsUrl}/w_assets/tools/enhancer-images/img2.png`}
                        alt="image"
                      />
                    </button>
                    <button>
                      <img
                        className="px-2 h-auto"
                        src={`${assetsUrl}/w_assets/tools/enhancer-images/img3.png`}
                        alt="image"
                      />
                    </button>
                    <button>
                      <img
                        className="px-2 h-auto"
                        src={`${assetsUrl}/w_assets/tools/enhancer-images/img4.png`}
                        alt="image"
                      />
                    </button>
                    <button>
                      <img
                        className="px-2 h-auto"
                        src={`${assetsUrl}/w_assets/tools/enhancer-images/img5.png`}
                        alt="image"
                      />
                    </button>
                  </div>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      </Box>

 
      <Box className="py-5 md:py-10 rounded-[10px] flex justify-center max-xl:w-[100%] flex-wrap mx-auto max-w-[2400px]">
        <Box className="w-full sm:w-[50%] lg:w-[25%] max-lg:mb-3 justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            2 M+
          </Typography>
          <Typography className="text-[18px] text-black whitespace-nowrap text-center">
            Happy users
          </Typography>
        </Box>

        <Box className="w-full sm:w-[50%] lg:w-[25%] max-lg:mb-3 justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            30 M+
          </Typography>
          <Typography className="text-[18px] text-black whitespace-nowrap text-center">
            Image Enhanced
          </Typography>
        </Box>

        <Box className="w-full sm:w-[50%] lg:w-[25%] max-lg:mb-3 justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            100%
          </Typography>
          <Typography className="text-[18px] text-black whitespace-nowrap">
            Result
          </Typography>
        </Box>
      </Box>

      <Box className="px-[15px] mx-auto max-w-[2400px] py-10">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How can you improve the quality of your photos?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          Enhancing photo quality of you image with the Craftyart free online AI
          image enhancer tool.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 lg:w-[85%] xl:w-[78%] max-xl:w-full mx-auto mt-[30px] max-w-[2400px]">
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img6.png`}
                alt="invitation template"
                className="max-h-[300px] block mx-auto"
              />
            </Box>

            <Typography className="font-semibold text-[20px] mt-4 mb-2">
              1. Upload Your Photo
            </Typography>

            <Typography>
              Upload your photo you wish to enhance using CraftyArt's AI photo
              quality enhancer.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img7.png`}
                alt="invitation template"
                className="max-h-[300px] block mx-auto"
              />
            </Box>

            <Typography className=" font-semibold text-[20px] mt-4 mb-2">
              2. Click On Photo Enhancer
            </Typography>

            <Typography>
              Our photo enhancer auto adjusts and enhances your photo to improve
              its quality.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img8.png`}
                alt="invitation template"
                className="max-h-[300px] block mx-auto"
              />
            </Box>

            <Typography className="font-semibold text-[20px] mt-4 mb-2">
              3. Download & Share it
            </Typography>

            <Typography>
              Once it's finished, download your enhanced photo in high quality
              for free. It's as simple as that!
            </Typography>
          </Box>
        </Box>
        <div className="flex justify-center mt-5">
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
              cursor: "not-allowed",
             }}
            className="bg_linear  px-5 max-lg:mx-auto text-[14px] 2sm:text-[17px]"
          >
            {/* Upload your photo */}
            Coming Soon
          </Button>
        </div>
      </Box>

      <RightImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">
              Improve Photo Quality Free Online Through AI Tool
            </h1>
            <p className="pt-2">
              With our AI image enhancement tool, easily enhance your photos
              online in seconds! CraftyArt uses state-of-the-art AI technology
              to analyze your images, enhancing colors, sharpness, and restoring
              clarity for instant improvement.
            </p>
            <br />
            <p>
              The process is fully automated and lightning-fast, making it
              simpler than ever to enhance image quality online.
            </p>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/enhancer-images/img9.png`}
      />

      <Box className="px-[15px] mx-auto max-w-[2400px] ">
        <Box className="flex justify-center flex-wrap gap-2 lg:w-[85%] xl:w-[78%] max-xl:w-full mx-auto mt-[30px] max-w-[2400px]">
          <Box
            className="bg-white py-[20px] w-[31.33%] max-sm:w-full px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img10.png`}
                alt="invitation template"
                className=" block mx-auto"
              />
            </Box>

            <Typography className="font-semibold text-[20px] mt-4 mb-2">
              1. Upload Your Photo
            </Typography>

            <Typography>
              Upload your photo you wish to enhance using CraftyArt's AI photo
              quality enhancer.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] px-[20px] w-[31.33%] max-sm:w-full"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img11.png`}
                alt="invitation template"
                className="  block mx-auto"
              />
            </Box>

            <Typography className="font-semibold text-[20px] mt-4 mb-2">
              2. Click On Photo Enhancer
            </Typography>

            <Typography>
              Our photo enhancer auto adjusts and enhances your photo to improve
              its quality.
            </Typography>
          </Box>

          <Box
            className="bg-white py-[20px] px-[20px] w-[31.33%] max-sm:w-full"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img12.png`}
                alt="invitation template"
                className=" block mx-auto"
              />
            </Box>

            <Typography className="font-semibold text-[20px] mt-4 mb-2">
              3. Download & Share it
            </Typography>

            <Typography>
              Once it's finished, download your enhanced photo in high quality
              for free. It's as simple as that!
            </Typography>
          </Box>

          <Box
            className="bg-white py-[20px] px-[20px] w-[31.33%] max-sm:w-full"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img13.png`}
                alt="invitation template"
                className=" block mx-auto"
              />
            </Box>

            <Typography className="font-semibold text-[20px] mt-4 mb-2">
              4. AI Portrait Enhancement
            </Typography>

            <Typography>
              Our potent image enhancer effortlessly identifies faces and
              applies subtle, natural facial enhancements for a refined look.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] px-[20px] w-[31.33%] max-sm:w-full"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box>
              <img
                src={`${assetsUrl}/w_assets/tools/enhancer-images/img14.png`}
                alt="invitation template"
                className="  block mx-auto"
              />
            </Box>

            <Typography className=" font-semibold text-[20px] mt-4 mb-2">
              5. AI Photo Restoration
            </Typography>

            <Typography>
              Restore old photos by repairing tears, scratches, and damage,
              effortlessly transforming them into HD quality images.
            </Typography>
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        point={
          <Box>
            <h1 className="font-bold text-3xl text_linear">
              Boost Image Resolution Without Losing Quality
            </h1>
            <p className="pt-2">
              Searching for a way to upgrade your image quality and size?Our AI
              image enhancer has got you covered.Crafty Art can easily handle
              any kind of image, whether it one created through photography or
              one generated by  Ai No more pixelated, low quality images.
              Leverage AI to convert small photos to HD, 4k, 8k, and higher
              resolution today.
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
                  cursor: "not-allowed",
                  //   display: buttonName ? "block" : "none",
                }}
                className="bg_linear  px-5 max-lg:mx-auto text-[14px] 2sm:text-[17px]"
              >
                {/* Enhance Photo Now */}
                Coming Soon
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/enhancer-images/img15.png`}
      />

      <Typography
        variant="h2"
        className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
      >
        Why Choose Our Background Changer?
      </Typography>
      <div className="px-5 lg:px-5 xl:px-16 2xl:px-44 py-10 md:flex justify-center items-center mx-auto max-w-[2400px]">
        <div className="mx-5 lg:px-10 bg-[#F4F7FE] py-14 m-5 lg:m-5  rounded-md">
          <div className="flex justify-center items-center">
            <img
              src={`${assetsUrl}/w_assets/tools/enhancer-images/icon1.png`}
              alt="indianBanner"
              className="h-[60px] w-[60px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center pt-8">
            <h1 className="font-semibold">Automatic & Quick</h1>
            <p className="px-3">
              Our AI-powered photo enhancer guarantees exceptional results. Make
              your photos clearer and better than ever before.
            </p>
          </div>
        </div>
        <div className="mx-5 lg:px-10 bg-[#F4F7FE] py-14 m-8 lg:m-5 rounded-md">
          <div className="flex justify-center items-center">
            <img
              src={`${assetsUrl}/w_assets/tools/enhancer-images/icon2.png`}
              alt="indianBanner"
              className="h-[60px] w-[60px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center pt-8">
            <h1 className="font-semibold">Enhance to HD Quality</h1>
            <p className="px-3">
              Our AI-powered photo enhancer guarantees exceptional results. Make
              your photos clearer and better than ever before.
            </p>
          </div>
        </div>
        <div className="mx-5 lg:px-10 bg-[#F4F7FE] py-14 m-5 lg:m-5 rounded-md">
          <div className="flex justify-center items-center">
            <img
              src={`${assetsUrl}/w_assets/tools/enhancer-images/icon3.png`}
              alt="indianBanner"
              className="h-[60px] w-[60px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-center pt-8">
            <h1 className="font-semibold">Photo Enhancement</h1>
            <p className="px-3">
              Utilize our CraftyArt website to enhance your photos conveniently,
              anytime, and anywhere, right at your fingertips.
            </p>
          </div>
        </div>
      </div>

      <RightImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">
              Instantly Make a Blurry Photo Clear
            </h1>
            <p className="pt-2">
              Blurry photos? No worries. Our AI photo enhancer can unblur images
              and turn fuzzy pictures into sharp and clear ones in an instant.
              Whether your photos are blurry due to shaky hands or dim lighting,
              we've got you covered. Simply upload your image, and let
              CraftyArt's photo quality enhancer automatically sharpen it and
              enhance clarity for you. In just seconds, you'll have a clear
              photo with improved quality and detail.
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
                  cursor: "not-allowed",

                  //   display: buttonName ? "block" : "none",
                }}
                className="bg_linear  px-5 max-lg:mx-auto text-[14px] 2sm:text-[17px]"
              >
                {/* Enhance Photo Now */}
                Coming Soon
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/enhancer-images/img16.png`}
      />

      <CustomerSaying />

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
          heading="1. How do I enhance the brightness and contrast of my images on CratyArt?"
          text={
            <>
              To enhance brightness and contrast, navigate to the adjustment
              tools section in CratyArt and use the sliders provided for
              brightness and contrast. Simply drag the sliders to increase or
              decrease the values until you achieve the desired enhancement.
            </>
          }
        />

        <FaqsBox
          heading="2. Is there a tool for sharpening images on CratyArt?"
          text={
            <>
              Yes, CratyArt offers a sharpening tool that allows you to enhance
              the sharpness and clarity of your images. You can adjust the
              intensity of the sharpening effect to your preference.
            </>
          }
        />

        <FaqsBox
          heading="3. How to make a picture clearer?"
          text={
            <>
              Upload Your Photo: Begin by uploading your photo to CratyArt.
              Utilize the AI Image Enhancer: Select the AI Image Enhancer
              feature. CratyArt will automatically analyze your image and apply
              enhancements to improve clarity, sharpness, colors, and overall
              quality.
            </>
          }
        />
        <FaqsBox
          heading="4. How can I adjust the colors in my images using CratyArt?"
          text={
            <>
              CratyArt offers various color adjustment tools such as saturation,
              vibrance, and hue adjustments. You can use these tools to enhance
              the colors in your images and make them more vibrant.
            </>
          }
        />
        <FaqsBox
          heading="5. How do I save and export my enhanced images from CratyArt?"
          text={
            <>
              Once you're satisfied with your edits, simply click on the
              save/export button in CratyArt to save your image in the desired
              format and quality. CratyArt supports file formats including JPEG
              & PNG.
            </>
          }
        />
      </Box>

      {mainLoader && (
        <main className="main">
          <span className="loader_span"></span>
        </main>
      )}
    </>
  );
}




{/* <div className="py-5 md:pt-10 items-center text-center justify-center px-5 md:px-20 mx-auto max-w-[2400px]">
        <div className="px-2 md:px-2 lg:px-5 xl:px-32">
          <h1 className="font-bold text-2xl md:text-4xl text-black">
            Photo Enhancer-Enhance Images
          </h1>
          <p className="text-lg text-black pt-4">
            Easily enhance your photos with our AI-powered photo enhancer. Boost
            image resolution, <br />
            enhance colors, and sharpen details with a single click!
          </p>
        </div>
      </div>
      <div  className="px-5 md:px-5 lg:px-24 p-5 bg-white-700 fle md:flex justify-center items-center">
        <div className="flex justify-center">
          <img
            className="p-5 h-auto w-auto lg:h-[410px] lg:w-[500px]"
            src={`${assetsUrl}/w_assets/tools/enhancer-images/banner.png`}
            alt="image"
          />
        </div>
        <div></div> */}




        {/* <div
            style={{
              border: "2px dashed #ABB2C7",
              display: selectedFile ? "none" : "flex-col",
            }}
            className="p-12"
          >
            <div onChange={handleFileChange} className="flex justify-center">
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
                className="bg_linear  px-5 max-lg:mx-auto text-[14px] 2sm:text-[17px]"
              >
                Coming Soon
              </Button>
            </div>


            <div className="text-center items-center pt-2">
              <h1 className="font-semibold">
                or drag and drop here to remove <br />
                background
              </h1>
              <p className="text-sm pt-2">JPEG, JPG, PNG or WEBP</p>
            </div>
          </div> */}

           {/* <Box className="flex-1 max-md:w-full">
                <div
                  className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[50px] rounded-[5px] "
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: isDragOver
                      ? "1px dashed black"
                      : "1px dashed #ABB2C7",
                    display: selectedFile ? "none" : "flex",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                  >
                    Upload Image
                  </button>

              <div className="text-center items-center pt-2">
                <h1 className="font-semibold">
                      or drag and drop here to remove <br />
                      background
                </h1>
              <p className="text-sm pt-2">JPEG, JPG, PNG or WEBP</p>
            </div>
                </div>
              </Box> */}


      {/* <Box className="bg-[#F4F7FE] py-[50px] max-sm:py-[20px]  px-[15px]">
        <Box
          className={` mx-auto py-[50px] ${
            imageUrl ? "w-[900px] max-sm:w-full " : " w-[80%] max-sm:w-full"
          }`}
        >
          <Box
            className="gap-1  w-fit p-[2px] bg-[#80808017] rounded-[5px]"
            sx={{ display: imageUrl ? "flex" : "none" }}
          >
            <Button
              className={`normal-case ${
                imageTab === "before" ? "bg-white text-black " : "text-[grey]"
              }`}
              onClick={() => setImageTab("before")}
            >
              Before
            </Button>
            <Button
              className={`normal-case ${
                imageTab === "after" ? "bg-white text-black " : "text-[grey]"
              }`}
              onClick={() => setImageTab("after")}
            >
              After
            </Button>
          </Box>
          <Box
            className={`flex items-center gap-[100px] max-sm:gap-[35px] max-lg:gap-[30px]  mx-auto pt-[20px]  max-sm:py-[20px]  max-md:flex-col   `}
          >
            {imageUrl ? (
              <Box>
                <button
                  className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                  onClick={handleDownload}
                >
                  Download HD
                </button>

                <p className="text-[18px] opacity-70 text-center pb-4">
                  1200 × 1200 px
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <button
                  onClick={handleButtonClick}
                  className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                >
                  Upload New
                </button>
              </Box>
            ) : (
              <Box className="flex-1 max-md:w-full">
                <div
                  className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[50px] rounded-[5px] "
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: isDragOver
                      ? "1px dashed black"
                      : "1px dashed #ABB2C7",
                    display: selectedFile ? "none" : "flex",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                  >
                    Upload Image
                  </button>

                  <div>
                    <h2 className="font-medium text-center mb-2 text-lg">
                      or drag and drop here to remove background
                    </h2>

                    <p className="text-center text-[14px]">
                       JPEG, JPG, PNG or WEBP
                    </p>
                  </div>
                </div>
              </Box>
            )}
          </Box>
        </Box>
      </Box> */}

    {/* <Box className="bg-[#F4F7FE] py-[50px] max-sm:py-[20px]  px-[15px]">
        <Box
          className={` mx-auto py-[50px] ${
            imageUrl ? "w-[900px] max-sm:w-full " : " w-[80%] max-sm:w-full"
          }`}
        >
          <Box
            className="gap-1  w-fit p-[2px] bg-[#80808017] rounded-[5px]"
            sx={{ display: imageUrl ? "flex" : "none" }}
          >
            <Button
              className={`normal-case ${
                imageTab === "before" ? "bg-white text-black " : "text-[grey]"
              }`}
              onClick={() => setImageTab("before")}
            >
              Before
            </Button>
            <Button
              className={`normal-case ${
                imageTab === "after" ? "bg-white text-black " : "text-[grey]"
              }`}
              onClick={() => setImageTab("after")}
            >
              After
            </Button>
          </Box>
          <Box
            className={`flex items-center gap-[100px] max-sm:gap-[35px] max-lg:gap-[30px]  mx-auto pt-[20px]  max-sm:py-[20px]  max-md:flex-col   `}
          >
            {imageUrl ? (
              <Box>
                <button
                  className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                  onClick={handleDownload}
                >
                  Download HD
                </button>

                <p className="text-[18px] opacity-70 text-center pb-4">
                  1200 × 1200 px
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <button
                  onClick={handleButtonClick}
                  className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                >
                  Upload New
                </button>
              </Box>
            ) : (
              <Box className="flex-1 max-md:w-full">
                <div
                  className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[50px] rounded-[5px] "
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: isDragOver
                      ? "1px dashed black"
                      : "1px dashed #ABB2C7",
                    display: selectedFile ? "none" : "flex",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg_linear text-white px-[50px] py-[10px] rounded-[5px] mb-3"
                  >
                    Upload Image
                  </button>

                  <div>
                    <h2 className="font-medium text-center mb-2">
                      or drag and drop here to remove background
                    </h2>

                    <p className="text-center text-[14px]">
                       JPEG, JPG, PNG or WEBP
                    </p>
                  </div>
                </div>
              </Box>
            )}
          </Box>
        </Box>
      </Box> */}



       {/* <div className="relative">
                      <img src={imageUrl} alt="image" className="h-[500px] object-contain" />
                      <img src={`../images/image-enhancer/icon.png`} alt="image" className="absolute inset-0 m-auto h-[50px] w-[50px]" />
                    </div> */}









                      // videoRef.current.pause();
    // setShowPreviewButton(false);
    // setIsPlaying(false);
    // setIsMuted(true);
    //   // if (screenWidth > 600) {
    //   setIsHovered(false);
    //   // setIsMuted(false)
    //   setCurrentIndex(0);
    // // }
