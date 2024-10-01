import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CustomHead from "../common/CustomHead";
import Head from "next/head";
import Icons from "@/src/assets";
import { MarkText } from "../Home/landingPage/LandingPage";
import RightImageSection from "@/src/app/wedding/components/RightImageSection";

export default function ResumeStatic() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById("brandIcons");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["brandIcons"]);

  const handleNextClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth + 100,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth - 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Box className="py-[70px] max-sm:pb-[30px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Create Resume on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="relative px-[10%] w-[100%] max-md:px-0 mt-14">
          <button
            onClick={handlePrevClick}
            className="pre_button left-[8%] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] hidden sm:flex"
          >
            <KeyboardArrowLeftIcon />
          </button>

          <Box
            className="flex mx-auto overflow-x-auto gap-[100px] items-center scroll_none max-md:gap-[100px]   max-sm:w-[100%]"
            id="brandIcons"
          >
            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src={`${assetsUrl}/w_assets/images/category/makeResume1.png`}
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  1
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Choose a Template
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Crafty Art resume-building platforms provide a variety of
                    templates. Choose one that suits your style and the industry
                    you're applying to.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src={`${assetsUrl}/w_assets/images/category/makeResume1.png`}
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  2
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Customize for Each Job
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Tailor your resume for each job application by emphasizing
                    the skills and experiences most relevant to the specific
                    position.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src={`${assetsUrl}/w_assets/images/category/makeResume1.png`}
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  3
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Save and Download
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Once you're satisfied with your resume, save your work and
                    download it in a format supported by Crafty Art or any other
                    platform (e.g., PDF, Word).
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex max-sm:flex-col gap-4 min-w-full">
              <Box className="bg-[#FFE3E3] rounded-[4px]  flex-1">
                <img
                  src={`${assetsUrl}/w_assets/images/category/makeResume1.png`}
                  alt="Resume Portrait Templates"
                />
              </Box>

              <Box className="flex-1">
                <Box className="bg-[#FFE3E3] mb-4 rounded-[4px] h-[134px] w-[134px] text-[50px] flex justify-center items-center">
                  4
                </Box>

                <Box className="bg-[#EDF0F9] py-[30px] px-[20px]  rounded-[4px]">
                  <Typography className="font-semibold text-[20px] mb-2">
                    Print or Submit Online
                  </Typography>

                  <Typography className="text-[#5C626A]">
                    Print physical copies for in-person applications, or submit
                    your resume online through job portals or directly to
                    employers.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="flex justify-center  sm:hidden my-8 gap-[30px]">
            <Button
              onClick={handlePrevClick}
              disabled={!showPrevButton ? true : false}
              sx={{
                opacity: !showPrevButton ? "0.3" : 1,
                width: "auto",
                minWidth: "auto",
              }}
            >
              <Icons.leftArrowIcon />
            </Button>
            <Button
              onClick={handleNextClick}
              disabled={!showNextButton ? true : false}
              sx={{
                opacity: !showNextButton ? "0.3" : 1,
                width: "auto",
                minWidth: "auto",
              }}
            >
              <Icons.rightArrowIcon />
            </Button>
          </Box>

          <button
            onClick={handleNextClick}
            className="next_button right-[8%] max-md:right-[20px] max-sm:top-[100px] max-sm:right-[30%] hidden sm:flex"
          >
            <KeyboardArrowRightIcon />
          </button>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE]    ">
        <Box className="flex gap-5 py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box
              sx={{
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h2"
                className="text-[#1C3048] text-[30px] max-sm:text-[25px] font-[600] mb-4"
              >
                Why Choose Crafty Art For Resume Designs ?
              </Typography>

              <FaqsBox
                heading="Creativity "
                text="Unique and visually appealing templates."
              />

              <FaqsBox
                heading="User-Friendly "
                text="Easy-to-navigate interface for all users."
              />

              <FaqsBox
                heading="Versatility "
                text="Diverse resume and design styles for various industries."
              />

              <FaqsBox
                heading="Time Savings "
                text="Streamlines the resume creation process."
              />

              <FaqsBox
                heading="Support "
                text="Offers feedback and assistance for a positive experience."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={`${assetsUrl}/w_assets/images/resumeMakerImage.png`}
              alt={"Resume Portrait Templates"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[10px]">
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/resumeC/img1.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Free Resume Templates
              </Typography>
              <Typography className="font-medium">
                Unlock your potential with our diverse collection of
                professionally designed, aesthetically pleasing resume
                templates. From traditional to modern, choose a layout that
                suits your style and showcases your unique strengths. These
                templates are not just visually appealing but also optimized to
                meet the current industry standards.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Resume Generator - Free and Easy
              </Typography>
              <Typography className="font-medium">
                Experience the simplicity of our online resume generator. Our
                user-friendly interface makes it a breeze to create a tailored
                resume in minutes. Input your details, choose a template, and
                let our platform guide you through the process. No design skills
                required – just focus on your accomplishments, and we'll handle
                the rest.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Resume Maker - Anytime, Anywhere
              </Typography>
              <Typography className="font-medium">
                Say goodbye to the hassle of desktop applications. Our online
                resume maker allows you to craft or update your resume from the
                comfort of your web browser. Access your work-in-progress from
                any device, ensuring you have the flexibility to refine your
                resume on the go.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Unleash Your Potential
              </Typography>
              <Typography className="font-medium">
                Your resume is more than a document; it's your personal brand.
                Our platform empowers you to present your skills, experience,
                and achievements in a compelling way. Whether you're applying
                for your dream job, making a career change, or seeking new
                opportunities, we've got you covered.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <RightImageSection
        title="How to Get Started"
        point={
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Browse our Collection: Explore our diverse range of professional resume templates. Find the one that aligns with your career goals and industry." />
              <MarkText text="Customize Your Template: Once you've chosen a template, personalize it with your information. Add your professional experience, skills, and education details effortlessly." />
              <MarkText text="Download and Share: Download your polished resume in various formats, such as PDF or Word. Share it with potential employers or upload it to job search platforms." />
            </Box>
          </Box>
        }
        buttonName={"Create a Resume"}
        alt="Resume Maker"
        path="/s/resume"
        image={`${assetsUrl}/w_assets/images/resumeC/img2.png`}
      />

      <Box className="pt-[10px]">
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/resumeC/img3.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Success Stories
              </Typography>
              <Typography className="font-medium">
                Our resume templates have helped countless individuals secure
                interviews and land their desired positions. Read our success
                stories to see how our users have transformed their job search
                experience with our professional templates.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Customer Support
              </Typography>
              <Typography className="font-medium">
                Have questions or need assistance? Our dedicated customer
                support team is here to help. Contact us for any inquiries
                regarding template selection, customization, or troubleshooting.
                We are committed to ensuring your experience with our resume
                templates is seamless and successful.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Start Building Your Future Today!
              </Typography>
              <Typography className="font-medium">
                Invest in your professional future by choosing a resume template
                that speaks to your unique qualifications and aspirations. Stand
                out from the competition and make a lasting impression with a
                professionally crafted resume. Your dream job awaits – get
                started now!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="pt-[70px] pb-[20px]  px-[20px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4 "
        >
          What are Customers Saying about Crafty Art
        </Typography>
        <Typography className="text-center">
          Crafty Art has a proven track record of delivering efficiency, results
          and excellent customer service.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center ">
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{
                  backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/girl1.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>Olivia Davis</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} readOnly />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art's custom invitations exceeded my expectations. Their
              user-friendly graphics design tools made it easy to create a
              unique design. The quality and design of invitation card was
              outstanding, and their customer service was top-notch. Quick
              delivery and attention to detail set Crafty Art apart. They made
              my event extra special!,”
            </Typography>
          </Box>
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{
                  backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man3.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>Ethan Wilson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} readOnly />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art Graphic Design Tool has been a game-changer for my
              design projects. Here a reasons why Crafty Art has earned my trust
              and loyalty: User Feedback Integration, Cross-Platform
              Compatibility, Time-Saving Features, Regular Content Updates,
              Security and Privacy, Advanced Export Options and Many More…”
            </Typography>
          </Box>
          <Box
            className="w-full bg-[#F4F7FE] p-[30px] h-full "
            sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
          >
            <Box className="flex items-center space-x-4 mb-2">
              <Box
                className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
                sx={{
                  backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man2.jpg)`,
                }}
              ></Box>
              <Box className="font-medium  ">
                <Box>James Johnson</Box>
              </Box>
            </Box>
            <Rating name="read-only" value={5} readOnly />
            <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
              “Crafty Art is a fantastic online caricature tool for creating
              unique invitations. Its user-friendly interface make easy to
              design personalized caricatures that bring fun and humor in to my
              event. With excellent customer support and quick delivery, I
              prefer to design Caricature invitations with Crafty Art!,”
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="bg-[#F4F7FE] py-[70px]">
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
          className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px]  "
        >
          <QuestionsTitle
            text1={"Some Popular"}
            text2={"Questions/Answered"}
            text3=""
          />
          <Box sx={{ p: "20px" }}></Box>

          <FaqsBox
            heading="What makes Crafty Art unique for resume designs?"
            text="Crafty Art offers a personalized approach, collaborating closely with clients for unique, industry-aligned resumes."
          />

          <FaqsBox
            heading="Can Crafty Art cater to different industries?"
            text="Yes, our diverse team tailors designs to match various professions, ensuring industry relevance."
          />

          <FaqsBox
            heading="What design elements does Crafty Art focus on?"
            text="Crafty Art combines aesthetics with readability, emphasizing clean and professional designs."
          />

          <FaqsBox
            heading="How does Crafty Art ensure industry standards are met?"
            text="Staying updated on trends, Crafty Art aligns resumes with current industry norms."
          />

          <FaqsBox
            heading="Can Crafty Art handle traditional and creative designs?"
            text="Yes, Crafty Art caters to both traditional and creative preferences, adapting to diverse needs."
          />
        </Box>
      </Box>

      {/* <CustomHead
        image={`${assetsUrl}/w_assets/images/logoC/img1.png`}
        heading={
          "Professional Resume Templates for Every Career | Editable CV Formats"
        }
        text="Discover tailored resume templates for diverse careers. Download editable formats for a standout CV. Impress employers and secure your dream job with our professional designs."
      /> */}

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
                  name: "1. What makes Crafty Art unique for resume designs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art offers a personalized approach, collaborating closely with clients for unique, industry-aligned resumes.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Can Crafty Art cater to different industries?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our diverse team tailors designs to match various professions, ensuring industry relevance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. What design elements does Crafty Art focus on?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art combines aesthetics with readability, emphasizing clean and professional designs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. How does Crafty Art ensure industry standards are met?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Staying updated on trends, Crafty Art aligns resumes with current industry norms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. Can Crafty Art handle traditional and creative designs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art caters to both traditional and creative preferences, adapting to diverse needs.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
    </div>
  );
}
