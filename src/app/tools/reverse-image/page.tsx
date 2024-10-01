"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Box, Button, Typography } from "@mui/material";
import LeftImageSection from "../../wedding/components/LeftImageSection";
import RightImageSection from "../../wedding/components/RightImageSection";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const FLink = dynamic(() => import("@/src/components/common/FLink"));
const FaqsBox = dynamic(() => import("@/src/components/common/FAQs"));
const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);

export default function page() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/tools/Indian/banner.png`}
        heading={"Free Reverse Image Search | Get Similar Images Online"}
        text="Harness the potential of our free reverse image search to unveil hidden details, find similar images, and explore the vast realm of visual information effortlessly."
      />
      <Box>
        <link
          rel="canonical"
          title={"Free Reverse Image Search | Get Similar Images Online"}
          href={`https://www.craftyartapp.com/tools/reverse-image`}
        />
      </Box>


      <Box className="h-[463px] bg_linear bg-cover bg-no-repeat max-lg:px-[20px] max-sm:h-auto max-sm:pb-[100px]">
        <Box className="flex flex-col items-center pt-14 gap-5">
          <Typography
            className="text-[47px] text-white text-center max-sm:text-[25px]"
            variant="h1"
          >
            Free Reverse Image Search
          </Typography>
          <Box className="flex flex-col items-center gap-2 ">
            <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 text-white mx-autotext-white text-center">
              You can find a picture by uploading it, pasting its URL, or typing
              a keyword related to the image you're looking for.
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
            {/* Upload your photo */}
            Coming Soon
          </Button>
        </Box>
      </Box>

      <div
        style={{
          background: "url(/images/tools/reverse-image/background.png)",
        }}
        className="w-[60%] mx-auto mt-[-180px] bg-cover p-[30px] max-lg:mt-[-125px] max-sm:mt-[-67px] max-lg:w-[80%] max-sm:w-[97%] min-h-[500px] max-sm:min-h-[200px] border rounded-lg"
      >
        <div className="md:px-10 py-10 bg-white rounded-xl ">
          <div className="border-t-[2px] border-l-[2px] border-r-[2px] flex flex-col justify-center items-center pt-10">
            <div>
              <img
                src={`${assetsUrl}/w_assets/tools/reverse-image/icone1.png`}
                alt="icon"
              />
            </div>
            <div className="text-2xl pt-3">Drag files to upload</div>
            <div className="pt-2">or copy paste screenshot</div>
            <div className="pt-3 pb-10 flex flex-row ">
              <div>
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
                    padding: "3px 20px",
                    cursor:"not-allowed",
                  }}
                  className="bg_linear text-[14px] 2sm:text-[17px]"
                >
                  {/* UPLOAD PHOTO */}
                  Coming Soon
                </Button>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="px-2">
                  <button>
                    <img
                      src={`${assetsUrl}/w_assets/tools/reverse-image/icone2.png`}
                      alt="icon"
                      className="h-[20px]"
                    />
                  </button>
                </div>
                |
                <div className="px-2">
                  <button>
                    <img
                      src={`${assetsUrl}/w_assets/tools/reverse-image/icone3.png`}
                      alt="icon"
                      className="h-[20px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ border: "2px solid #D5D8E3" }}
            className="flex flex-col xl:flex-row justify-center items-center py-10"
          >
            <div className="px-2">
              <div>
                <h1>-OR - Paste URL</h1>
              </div>
              <div className="flex flex-row justify-center items-center pt-2">
                <img
                  src={`${assetsUrl}/w_assets/tools/reverse-image/icone4.png`}
                  alt="icon"
                  className="h-[40px] w-[40px]"
                />
                <input
                  style={{ border: "2px solid gray" }}
                  className="border-blue-800 p-[5px] w-[200px] md:w-[300px]"
                  placeholder="Enter Image Url"
                ></input>
              </div>
            </div>
            <div className="px-2">
              <div>
                <h1>Search by keyword</h1>
              </div>
              <div className="flex flex-row justify-center items-center pt-2">
                <img
                  src={`${assetsUrl}/w_assets/tools/reverse-image/icone5.png`}
                  alt="icon"
                  className="h-[40px] w-[40px]"
                />
                <input
                  style={{ border: "2px solid gray" }}
                  className="border-blue-800 p-[5px] w-[200px] md:w-[300px]"
                  placeholder="Search by Keyword"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center pt-10">
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
              className="bg_linear  text-[14px] 2sm:text-[17px]"
            >
              {/* Search Similar Image */}
              Coming Soon
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-14 gap-5">
        <Typography
          className="text-[35px] font-bold text-black text-center max-sm:text-[25px] px-5"
          variant="h1"
        >
          Different ways to use reverse image search
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row justify-center pt-16 p-5">
        <div className="pt-5 md:mx-3 lg:pt-0 bg-[#F4F7FE]">
          <div>
            <img
              className="max-h-[300px] w-auto block mx-auto px-5 justify-center items-center"
              src={`${assetsUrl}/w_assets/tools/reverse-image/img14.png`}
              alt="icon"
            />
          </div>
          <div className="px-10 lg:px-8 p-5">
            <h1 className="font-semibold lg:text-xl">Search by Image URL</h1>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "10px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Provide the link to the image in the designated box.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "5px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Click the "Search Similar Images" button.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "5px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Explore results from Google, Yandex, and Bing.
              </Typography>
            </Box>
          </div>
        </div>
        <div className="pt-5 md:mx-3 lg:pt-0 bg-[#F4F7FE]">
          <div>
            <img
              className="max-h-[300px] w-auto block mx-auto px-5 justify-center items-center"
              src={`${assetsUrl}/w_assets/tools/reverse-image/img15.png`}
              alt="icon"
            />
          </div>
          <div className="px-10 lg:px-8 p-5">
            <h1 className="font-semibold lg:text-xl">Search by an Image</h1>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "10px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Click the "upload" button and pick the image you want.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "5px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Click on the "Search Similar Images" button.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "5px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Get results from Google, Yandex, and Bing.
              </Typography>
            </Box>
          </div>
        </div>
        <div className="pt-5 md:mx-3 lg:pt-0 bg-[#F4F7FE]">
          <div>
            <img
              className="max-h-[300px] w-auto block mx-auto px-5 justify-center items-center"
              src={`${assetsUrl}/w_assets/tools/reverse-image/img16.png`}
              alt="icon"
            />
          </div>
          <div className="px-10 lg:px-8 p-5">
            <h1 className="font-semibold lg:text-xl">
              Search Images by Keyword:
            </h1>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "10px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Enter keywords related to what you want to search for.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "5px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Press the "Search Similar Images" button.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                mb: "8px",
                pt: "5px",
              }}
            >
              <img
                src={"/images/rightMarks.svg"}
                alt="rightMark"
                className="w-[20px] max-sm:w-[15px]"
              />
              <Typography
                sx={{ color: "#1C3048", opacity: 1 }}
                className="text-[16px] max-sm:text-[14px] max-lg:text max-2sm:text-[14px]"
              >
                Explore results from Google, Yandex, and Bing.
              </Typography>
            </Box>
          </div>
        </div>
      </div>

      <div className="max-lg:px-[20px] max-sm:h-auto">
        <div className="flex flex-col items-center pt-14 gap-5">
          <Typography
            className="text-[35px] font-bold text-black text-center max-sm:text-[25px]"
            variant="h1"
          >
            Find images by following an easy process
          </Typography>
          <Box className="flex flex-col items-center gap-2 ">
            <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 mx-autotext-white text-center">
              This tool lets you find images by uploading them from your device
              or by dragging and dropping them into the search bar. Once you
              finish uploading a picture, the tool will use its advanced
              technology <br></br> to show you results from popular image search
              engines like Yandex, Google, and Bing.
            </Typography>
          </Box>
        </div>
        <div className="px-5 py-14 flex justify-center items-center">
          <img
            className="h-auto md:w-[900px] md:h-[500px]"
            src={`${assetsUrl}/w_assets/tools/reverse-image/img1.png`}
            alt="icon"
          />
        </div>
      </div>

      <RightImageSection
        point={
          <Box>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                <span className="text_linear">Google</span> Image Search
              </h1>
              <p className="pt-2">
                Google Image Search is the most popular tool for finding
                pictures online because it has a huge collection of billions of
                images from all over the internet. It's great for finding
                pictures that look the same as the one you're searching for. You
                can use it to find pictures that are similar but might be
                different in quality, size, or format.
              </p>
              <br />
              <p>
                With Google Image Search, you can easily find pictures that are
                like the one you're interested in with just one click.
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
                    cursor:"not-allowed",
                  }}
                  className="bg_linear text-[14px] 2sm:text-[17px]"
                >
                  Coming Soon
                </Button>
              </div>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img2.png`}
      />

      <LeftImageSection
        point={
          <Box>
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text_linear">Yandex Reverse</span> Keyword Search
            </h1>
            <p className="pt-2">
              You can use the Yandex image search engine to find identical
              images. Yandex is like the Russian version of Google. It's known
              for being really good at finding where a picture was taken and
              matching faces. You can use the Yandex image search engine to find
              identical images. Yandex is like the Russian version of Google.
              It's known for being really good at finding where a picture was
              taken and matching faces.
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
                  cursor:"not-allowed",
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                Coming Soon
                {/* Yandex Image Search */}
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img3.png`}
      />

      <RightImageSection
        point={
          <Box>
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text_linear">Bing Reverse</span> Image Search
            </h1>
            <p className="pt-2">
              Bing is a popular tool for finding similar images. With Crafty
              Art's reverse image search, you can use Bing to find related
              pictures in just one step.
            </p>
            <br />
            <p>
              Instead of going to different search engines separately, you can
              get results from all of them with our image search tool.
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
        image={`${assetsUrl}/w_assets/tools/reverse-image/img4.png`}
      />

      <div className="flex flex-col items-center p-10 gap-5">
        <Typography
          className="text-[35px] font-bold text-black text-center max-sm:text-[25px]"
          variant="h1"
        >
          Reverse Image Lookup on PC and Smartphone
        </Typography>
        <Box className="flex flex-col items-center">
          <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-1 mx-autotext-white text-center">
            Are you tired of only being able to use certain websites on your
            computer? Well, with Crafty Art's image finder tool, you can say
            goodbye to that problem!
          </Typography>
          <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 mx-autotext-white text-center">
            If you search for images using Google on your computer, you can do
            the same on your phone without any problems. So, you can use this
            tool on any device without worrying about compatibility.
          </Typography>
        </Box>
      </div>

      <LeftImageSection
        point={
          <div>
            <h1 className="font-bold text-xl">Android</h1>
            <p className="pt-2">
              If a friend sends you a picture on your Android phone and you
              don't understand what it's about, don't stress! We have a tool
              that lets you search for similar images on your smartphone.
            </p>
            <h1 className="font-bold pt-3 text-xl">IOS</h1>
            <p className="pt-2">
              With Google Image Search, you can easily find pictures that are
              like the one you're interested in with just one click.
            </p>
          </div>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img5.png`}
      />

      <RightImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">Window vs Mac</h1>
            <p className="pt-2">
              Searching for pictures on Windows is simple. You can easily upload
              images from your computer or cloud storage. Just drag and drop the
              image, and you'll quickly get similar image results.
            </p>
            <br />
            <h1 className="">
              Why are Mac users feeling sad when all the devices are getting
              attention?
            </h1>
            <p className="">
              Yes! On a Mac computer, you can use the image search feature just
              like you would on a web browser. This lets you find pictures for
              free on your Mac, allowing you to look for images in higher
              resolution or better quality.
            </p>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img6.png`}
      />

      <LeftImageSection
        point={
          <Box>
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text_linear">Reverse Photo Lookup -</span> How
              does this Work?
            </h1>
            <p className="pt-2">
              "Reverse photo lookup" is like doing a backward search online.
              Instead of typing words to find something, you upload a picture.
              Then the internet tries to find information based on that picture.
            </p>
            <br />
            <p>
              Google image search helps you find pictures that look like the one
              you're interested in. It also gives you information about what's
              in the picture, like objects or places.
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
                  cursor:"not-allowed",
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                {/* google image search */}
                Coming Soon
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img7.png`}
      />
      <div className="lg:px-20">
        <div
          style={{
            background: "url(/images/tools/reverse-image/background1.png)",
          }}
          className="bg-cover flex flex-col items-center p-10 lg:p-20 gap-5"
        >
          <Typography
            className="text-[30px] font-bold text-black text-center max-sm:text-[25px]"
            variant="h1"
          >
            <span className="text_linear">Content-Based</span> Visual
            Information Retrieval (CBVIR)
          </Typography>
          <Box className="flex flex-col items-center">
            <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 mx-autotext-white text-center">
              Reverse picture search works by using a clever technique called
              content-based image retrieval (CBIR). This fancy term simply means
              searching for pictures based on their content.
            </Typography>
            <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 mx-autotext-white text-center">
              It looks at things like objects, people, colors, and where the
              picture was taken to find similar images. So, when you search for
              a picture, it hunts down others that look like it by checking
              what's in them.
            </Typography>
          </Box>
        </div>
      </div>

      <RightImageSection
        point={
          <Box>
            <div className="pl-4">
              <button className="text-xl font-bold rounded-2xl px-3 py-1 text-[#5961F8] bg-[#EFECFF]">
                Benefit
              </button>
            </div>
            <h1 className="text-3xl font-bold pl-4 pt-2">
              Benefits of Using Reverse Image Search
            </h1>
            <p className="text-xl font-semibold pl-4 pt-2">
              Using reverse image photo lookup has many benefits, such as:
            </p>
            <FaqsBox
              heading="Find Similar Images"
              text={
                <>
                  If you want similar images but with different looks, reverse
                  image search helps you find them by looking for pictures that
                  are alike or related to the one you have.
                </>
              }
            />
            <FaqsBox
              heading="Find where the images originally came from?"
              text={
                <>
                  If you're struggling to figure out who made an image and need
                  to give them credit, an image source finder tool can help you
                  out.
                </>
              }
            />
            <FaqsBox
              heading="Find Plagiarized Images"
              text={
                <>
                  People who steal photos might feel clever, but using a reverse
                  image search makes you even smarter! If you have lots of your
                  own pictures and want to check if someone is using them
                  without permission or credit, you can use Google's reverse
                  image tool. It helps you find out if others have uploaded your
                  images on different websites too.
                </>
              }
            />
            <FaqsBox
              heading="Generate Backlink Opportunities"
              text={
                <>
                  Instead of only using a tool to find people who use your
                  photos without giving you credit, ask them to mention you as
                  the author and provide a link back to your page. This can
                  really help boost your visibility on search engines.
                </>
              }
            />
            <div className="pt-3 pl-4">
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
                {/* google image search */}
                Coming Soon
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img8.png`}
      />

      <div className="flex flex-col items-center p-5">
        <Typography
          className="text-[35px] font-bold text-black text-center max-sm:text-[25px]"
          variant="h1"
        >
          Learn More About the Object on Image
        </Typography>

        <LeftImageSection
          point={
            <Box>
              <div className="pl-4">
                <button className="text-xl font-bold bg-[#EFECFF] rounded-2xl px-3 py-1 text-[#5961F8]">
                  Benefit
                </button>
              </div>
              <h1 className="text-3xl font-bold pl-4 pt-2">
                What things are in the picture?
              </h1>
              <p className="text-xl font-semibold pl-4 pt-2">
                A tool that searches for similar images can help you learn more
                about a person, product, place, or animal shown in a picture.
                For example, if you have a picture of a dog, this tool can find
                out what breed it is and give you other details about it.
              </p>
              <FaqsBox
                heading="Find People by Photos"
                text={
                  <>
                    If you want to find someone's contact info or learn more
                    about an actor you saw in a trailer, you can use our tool to
                    search for their picture.
                  </>
                }
              />
              <FaqsBox
                heading="Discover Places to Visit for Tourists"
                text={
                  <>
                    Image reverse search is a helpful tool for finding tourist
                    spots. It works like this: you upload a picture of a place,
                    and it tells you where it is and more about it.
                  </>
                }
              />
              <FaqsBox
                heading="Product Searches by Images"
                text={
                  <>
                    Many times, people find pictures of items that need labels.
                    You can use an online tool to search for information about
                    these items by uploading the image. It only takes a few
                    clicks.
                  </>
                }
              />
              <FaqsBox
                heading="Find More Versions of a Particular Image"
                text={
                  <>
                    <p>
                      Your current picture isn't working well. By using reverse
                      image search, you can find more versions of the same
                      picture, like ones in different sizes or formats, or ones
                      that aren't as blurry.
                    </p>
                    <p className="pt-2">
                      If you can't find the right-sized image, you can use an
                      image resizer tool to change its dimensions as you like.
                      This tool lets you make images bigger or smaller by
                      adjusting their size or percentage.
                    </p>
                  </>
                }
              />
              <FaqsBox
                heading="Identify fake accounts"
                text={
                  <>
                    If you're worried someone is pretending to be you on social
                    media, use a reverse picture search to check. This can help
                    you find out if someone else is using your photo to trick
                    people.
                  </>
                }
              />
              <div className="pt-3 pl-5">
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
                  {/* google image search */}
                  Coming Soon
                </Button>
              </div>
            </Box>
          }
          alt="indian"
          path="/s/indian"
          image={`${assetsUrl}/w_assets/tools/reverse-image/img9.png`}
        />
      </div>

      <div className="bg_linear flex flex-col text-white justify-center items-center pxW-10 py-20 px-5 text-center">
        <h1 className="font-bold text-2xl md:text-3xl">
          Reverse Image Search - Simple Processing
        </h1>
        <p className="pt-2">
          Similar photo finder is a website tool that helps you find pictures
          that look alike without needing to do complicated steps. <br /> It's
          easy to use, and you can quickly find identical images without needing
          any special skills or help.
        </p>
        <p className="pt-2">
          If you want to make your images smaller without losing quality, you
          can use an image compressor tool. <br /> It reduces the size of your
          pictures without making them look worse.
        </p>
      </div>

      <RightImageSection
        point={
          <Box>
            <h1 className="text-3xl font-bold">We Respects Our all Users</h1>
            <p className="pt-2">
              Our reverse image search tool keeps your uploaded images
              completely safe and private. We don't share, sell, or store your
              photos in our database.
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
                  cursor:"not-allowed",
                }}
                className="bg_linear text-[14px] 2sm:text-[17px]"
              >
                {/* google image search */}
                Coming Soon
              </Button>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`${assetsUrl}/w_assets/tools/reverse-image/img13.png`}
      />

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
    </>
  );
}
