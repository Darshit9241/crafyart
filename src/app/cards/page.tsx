"use client";
import Icons from "@/src/assets";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { useRouter } from "next/navigation";

const CustomerSaying = dynamic(
  () =>
    import(
      "@/src/components/Home/landingPage/landingPageComponents/CustomerSaying"
    )
);
const GetTemplates = dynamic(
  () => import("@/src/components/common/GetTemplates")
);
const RightImageSection = dynamic(
  () => import("../wedding/components/RightImageSection")
);
const QuestionsTitle = dynamic(
  () => import("@/src/components/common/QuestionsTitle")
);
const CustomizableSliderTemplates = dynamic(
  () => import("@/src/components/common/CustomizableSliderTemplates")
);
const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));
const GetStartedLinearBanner = dynamic(
  () => import("@/src/components/common/GetStartedLinearBanner")
);

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

const sliderTemplate = [
  {
    img: `${assetsUrl}/w_assets/images/invitationwedding.png`,
    buttonName: "Wedding Invitation",
    path: "/wedding",
  },
  {
    img: `${assetsUrl}/w_assets/images/invitationFooterBirthday.png`,
    buttonName: "Birthday Invitation",
    path: "/birthday-invitation",
  },
  {
    img: `${assetsUrl}/w_assets/images/partyBanner.png`,
    buttonName: "Party Invitation",
    path: "/party-invitation",
  },
  {
    img: `${assetsUrl}/w_assets/images/babyShowerEase.png`,
    buttonName: "Baby Shower Invitation",
    path: "/baby-shower-invitation",
  },
  {
    img: `${assetsUrl}/w_assets/images/bridalEase.png`,
    buttonName: "Bridal Shower Invitation",
    path: "/bridal-shower",
  },
];
export default function page() {
  const router = useRouter();
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/Indian/banner.png`}
        heading={"Online Card Maker (Free) | Crafty Art"}
        text="Create your cards to send online. Choose from thousands of templates for every event: birthday, thank you, wedding, anniversary, love & more."
      />
      {/* section 1 */}
      <GetStartedLinearBanner
        heading={"Online Free Card Maker"}
        text="Design beautiful cards effortlessly with our online free card maker. Customize templates,
        add text, images, and more. Try our easy-to-use card maker tool now!"
        buttonName="Get Started"
        image={
          <Box sx={{ width: "500px" }}>
            <img
              src={`${assetsUrl}/w_assets/cards/banner.png`}
              alt="resumeBanner"
              style={{ width: "100%", height: "100%", paddingRight: "0px" }}
            />
          </Box>
        }
      />

      <div className="py-5 md:py-10 mx-auto max-w-[2400px]">
        <img
          src={`${assetsUrl}/w_assets/cards/img18.png`}
          alt="resumeBanner"
          className="absolute w-[200px] h-[500px] pr-0 max-md:hidden"
        />
        <Box className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] flex items-center justify-between pb-4 max-sm:pb-2 max-sm:pt-5">
          <Typography className="text-black font-semibold text-[30px] max-sm:text-[17px] text_linear cursor-pointer">
            Birthday Cards
          </Typography>
          <Link
            prefetch={false}
            href={`${domain}templates`}
            className="normal-case flex items-center"
          >
            <span className="text-[#2EC6B8] font-semibold text-[16px] max-sm:text-[13px] flex items-center">
              View all Templates
            </span>

            <span className="w-[7px] inline-block ml-3">
              <Icons.rightActiveArrowIcon svgProps={{ width: 7 }} />
            </span>
          </Link>
        </Box>

        <div className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 relative mx-auto max-w-[2400px]">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/kids")}
          >
            <img
              src={
                hoveredIndex === 0
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img1i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img1.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 0 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
            />

            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Kids
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/for-her")}
          >
            <img
              src={
                hoveredIndex === 1
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img2i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img2.png`
              }
              alt="Image 2"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 1 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              For her
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/for-him")}
          >
            <img
              src={
                hoveredIndex === 2
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img3i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img3.png`
              }
              alt="Image 2"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 2 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              For him
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/add-a-photo")}
          >
            <img
              src={
                hoveredIndex === 3
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img4i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img4.png`
              }
              alt="Image 2"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 3 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Add a Photo
            </h1>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-10 mx-auto max-w-[2400px]">
        <img
          src={`${assetsUrl}/w_assets/cards/img19.png`}
          alt="resumeBanner"
          style={{ width: "200px", height: "500px", paddingRight: "0px" }}
          className="absolute right-0 max-md:hidden"
        />
        <Box className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] flex items-center justify-between pb-4 max-sm:pb-2 max-sm:pt-5">
          <Typography className="text-black font-semibold text-[30px] max-sm:text-[17px] text_linear">
            Thank you
          </Typography>
          <Link
            prefetch={false}
            href={`${domain}templates`}
            className="normal-case flex items-center"
          >
            <span className="text-[#2EC6B8] font-semibold text-[16px] max-sm:text-[13px] flex items-center">
              View all Templates
            </span>

            <span className="w-[7px] inline-block ml-3">
              <Icons.rightActiveArrowIcon svgProps={{ width: 7 }} />
            </span>
          </Link>
        </Box>

        <div className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 relative mx-auto max-w-[2400px]">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/thank-you")}
          >
            <img
              src={
                hoveredIndex === 4
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img5i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img5.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 4 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Thank you
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/teacher-appreciation")}
          >
            <img
              src={
                hoveredIndex === 5
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img6i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img6.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 5 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Teacher appreciation
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/wedding")}
          >
            <img
              src={
                hoveredIndex === 6
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img7i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img7.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 6 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Wedding
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/birthday-invitation")}
          >
            <img
              src={
                hoveredIndex === 7
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img8i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img8.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 7 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Birthday
            </h1>
          </div>
        </div>
      </div>

      <RightImageSection
        title="Easily Download & Send Online"
        point={
          <Box>
            <h1 className="pb-2 font-medium text-xl">
              Design customized cards for your loved ones
            </h1>
            <MarkText text="Select from our designs, add your touch with simple click." />
            <MarkText text="Download it from your browser & mobile with 1 click." />
            <MarkText text="Share it with your loved ones & make your day memorable." />
          </Box>
        }
        alt="bio-data"
        path="/s/bio-data"
        image={`${assetsUrl}/w_assets/cards/birthday-cards-img9.png`}
      />
      {/* section 5 */}

      <div className="py-5 md:py-10 mx-auto max-w-[2400px]">
        <img
          src={`${assetsUrl}/w_assets/cards/img20.png`}
          alt="resumeBanner"
          style={{ width: "311px", height: "500px", paddingRight: "0px" }}
          className="absolute max-md:hidden"
        />
        <Box className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] flex items-center justify-between pb-4 max-sm:pb-2 max-sm:pt-5">
          <Typography className="text-black font-semibold text-[30px] max-sm:text-[17px] text_linear">
            Events & Occasions
          </Typography>
          <Link
            prefetch={false}
            href={`${domain}templates`}
            className="normal-case flex items-center"
          >
            <span className="text-[#2EC6B8] font-semibold text-[16px] max-sm:text-[13px] flex items-center">
              View all Templates
            </span>

            <span className="w-[7px] inline-block ml-3">
              <Icons.rightActiveArrowIcon svgProps={{ width: 7 }} />
            </span>
          </Link>
        </Box>

        <div className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 relative mx-auto max-w-[2400px]">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/k/wedding-invitation-template")}
          >
            <img
              src={
                hoveredIndex === 8
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img10i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img10.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 8 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Wedding
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() =>
              router.push("/k/wedding-anniversary-invitation-card")
            }
          >
            <img
              src={
                hoveredIndex === 9
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img11i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img11.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 9 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Anniversary
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/k/baby-shower-invitations")}
          >
            <img
              src={
                hoveredIndex === 10
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img12i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img12.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 10 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(10)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              New baby
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/k/graduation-party-invitations")}
          >
            <img
              src={
                hoveredIndex === 11
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img13i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img13.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 11 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(11)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Graduation
            </h1>
          </div>
        </div>
      </div>

      <div className="py-5 md:py-10 mx-auto max-w-[2400px]">
        <img
          src={`${assetsUrl}/w_assets/cards/img21.png`}
          alt="resumeBanner"
          style={{ width: "200px", height: "500px", paddingRight: "0px" }}
          className="absolute right-0 max-md:hidden"
        />
        <Box className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] flex items-center justify-between pb-4 max-sm:pb-2 max-sm:pt-5">
          <Typography className="text-black font-semibold text-[30px] max-sm:text-[17px] text_linear">
            Thoughts & Feelings
          </Typography>
          <Link
            prefetch={false}
            href={`${domain}templates`}
            className="normal-case flex items-center"
          >
            <span className="text-[#2EC6B8] font-semibold text-[16px] max-sm:text-[13px] flex items-center">
              View all Templates
            </span>

            <span className="w-[7px] inline-block ml-3">
              <Icons.rightActiveArrowIcon svgProps={{ width: 7 }} />
            </span>
          </Link>
        </Box>

        <div className="px-5 lg:px-[80px] xl:px-[100px] 2xl:px-[300px] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 relative mx-auto max-w-[2400px]">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/congratulations")}
          >
            <img
              src={
                hoveredIndex === 12
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img14i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img14.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 12 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(12)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Congratulations
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/love-and-romance")}
          >
            <img
              src={
                hoveredIndex === 13
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img15i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img15.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 13 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(13)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Love & Romance
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/friendship")}
          >
            <img
              src={
                hoveredIndex === 14
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img16i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img16.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 14 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(14)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Friendship
            </h1>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => router.push("/s/miss-you")}
          >
            <img
              src={
                hoveredIndex === 15
                  ? `${assetsUrl}/w_assets/cards/birthday-cards-img17i.png`
                  : `${assetsUrl}/w_assets/cards/birthday-cards-img17.png`
              }
              alt="Image 1"
              className="md:h-[220px] object-cover cursor-pointer"
              style={{
                width: hoveredIndex === 15 ? "260px" : "250px",
              }}
              onMouseEnter={() => handleMouseEnter(15)}
              onMouseLeave={handleMouseLeave}
            />
            <h1 className="flex justify-center items-center pt-5 font-semibold text-xl max-sm:text-[15px]">
              Miss you
            </h1>
          </div>
        </div>
      </div>

      <div className="py-5 md:pt-10 items-center text-center justify-center px-5 md:px-20 mx-auto max-w-[2400px]">
        <div className="px-2 md:px-2 lg:px-5 xl:px-32">
          <h1 className="font-bold text-2xl md:text-4xl text-black">
            Customize Birthday Cards With Photos
          </h1>
          <p className="text-lg text-black max-sm:text-[15px] pt-4">
            Looking to create personalized Birthday Cards with Photos? CraftyArt
            has you covered! Upload your favorite picture and let the fun begin.
            Choose from mock-ups, framed snapshots, or full-edge designs with
            text or trim for added interest. Feeling playful? Add stickers like
            glasses or bow ties from our menu, or opt for floral touches or
            birthday cakes.
          </p>
          <p className="text-lg text-black max-sm:text-[15px] pt-2">
            Customize the editable text with a wide selection of fonts and
            colors. Once you're happy with your creation, you have two great
            options: print it for free directly from our site or share it online
            instantly.
          </p>
          <p className="text-lg text-black max-sm:text-[15px] pt-2">
            The best part? It's all completely free! If you prefer eCards, share
            your greeting via email or Facebook in seconds, whether you're using
            your phone, computer, or tablet.
          </p>
          <p className="text-lg text-black max-sm:text-[15px] pt-2">
            That's it! Spread smiles on their special day with a custom card
            designed by you, all thanks to CraftyArt. Well done!
          </p>
        </div>
      </div>

      <CustomerSaying />

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Cards."
        text="Create unforgettable moments with personalized Cards."
        navigate="/s/cards"
      />

      <Box
        sx={{
          width: "100%",
          my: "50px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "2400px",
        }}
      >
        <QuestionsTitle
          text1={""}
          text2={"Get a headstart with fully customizable Cards"}
          text3=""
        />

        <CustomizableSliderTemplates data={sliderTemplate} />
      </Box>
    </>
  );
}
