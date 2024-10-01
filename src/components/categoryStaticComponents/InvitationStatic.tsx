import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import Head from "next/head";
import CustomHead from "../common/CustomHead";
import RightImageSection from "@/src/app/wedding/components/RightImageSection";
import LeftImageSection from "@/src/app/wedding/components/LeftImageSection";
import { MarkText } from "../Home/landingPage/LandingPage";

export default function InvitationStatic() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <div>
      <Box className="py-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Make a Invitation on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-[85%] max-xl:w-full mx-auto mt-[30px] md:mt-[150px] ">
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="md:mt-[-80px] lg:min-h-[300px]">
              <img
                src={`${assetsUrl}/w_assets/images/category/Cinvitation1.png`}
                alt="invitation template"
                className="max-h-[300px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Choose A Template
            </Typography>

            <Typography className="text-center ">
              Start by selecting a suitable template for your invitation card.
              Crafty Art offer a variety of templates based on different themes
              and occasions.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="md:mt-[-80px] lg:min-h-[300px]">
              <img
                src={`${assetsUrl}/w_assets/images/category/Cinvitation2.png`}
                alt="invitation template"
                className="max-h-[300px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Customize This Template
            </Typography>

            <Typography className="text-center ">
              Once you've chosen a template, personalize it to fit your event.
              Modify the text to include essential details such as the event
              name, date, time, venue, and RSVP information.
            </Typography>
          </Box>
          <Box
            className="bg-white py-[20px] md:pb-[50px] px-[20px]"
            sx={{ boxShadow: "0px 0px 8.33333px 0px rgba(0, 0, 0, 0.08)" }}
          >
            <Box className="md:mt-[-80px] lg:min-h-[300px]">
              <img
                src={`${assetsUrl}/w_assets/images/category/Cinvitation3.png`}
                alt="invitation template"
                className="max-h-[300px] w-auto block mx-auto"
              />
            </Box>

            <Typography className="text-center font-semibold text-[20px] mt-4 mb-2">
              Download And Share
            </Typography>

            <Typography className="text-center ">
              After customizing the invitation to your satisfaction, download
              the final version. Save it in a format that is compatible with
              your needs, such as PDF or image formats.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE] pt-[300px] mt-[-300px]">
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
                Why Choose Crafty Art For Invitation Designs ?
              </Typography>

              <FaqsBox
                heading="Creativity and Uniqueness:"
                text="Crafty Art offers creative and unique invitation card designs."
              />

              <FaqsBox
                heading="Customization Options:"
                text="Extensive customization options for personalized invitations."
              />

              <FaqsBox
                heading="Wide Range of Occasions:"
                text="Covers diverse occasions, ensuring a suitable design for any event."
              />

              <FaqsBox
                heading="Quality Materials:"
                text="High-quality materials for a premium look and feel."
              />

              <FaqsBox
                heading="User-Friendly Platform:"
                text="Easy-to-navigate platform for a seamless design process."
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={`${assetsUrl}/w_assets/images/category/whyChooseInvitation.png`}
              alt={"invitation template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <LeftImageSection
        title="Wedding Invitations"
        point={
          <Box>
            <MarkText text="Celebrate the most special day of your life with our elegant wedding invitation card templates." />
            <MarkText text="From classic and timeless designs to modern and chic styles, we have a variety of options to match your wedding theme and color scheme." />
            <MarkText text="Personalize your invites with your names, event details, and a touch of your unique love story." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="calendar design"
        path="/k/wedding-invitation-template"
        image={`${assetsUrl}/w_assets/images/InvitationC/img1.png`}
      />

      <RightImageSection
        title="Birthday Party Invites"
        point={
          <Box>
            <MarkText text="Make your birthday celebration unforgettable with our vibrant and fun birthday party invitation templates." />
            <MarkText text="Whether you're throwing a milestone birthday bash or hosting a themed party, our collection has designs that cater to all ages." />
            <MarkText text="Add your party details and choose colors that reflect the joyous spirit of the occasion." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="calendar design"
        path="/k/birthday-invitation"
        image={`${assetsUrl}/w_assets/images/InvitationC/img2.png`}
      />

      <LeftImageSection
        title="Baby Shower Invitations"
        point={
          <Box>
            <MarkText text="Welcome the newest member of your family with adorable baby shower invitation card templates." />
            <MarkText text="Our cute and customizable designs capture the excitement of the upcoming arrival." />
            <MarkText text="Customize the invites with the baby's name, shower details, and choose from soft pastels to lively patterns for a perfect touch." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="calendar design"
        path="/k/baby-shower-invitations"
        image={`${assetsUrl}/w_assets/images/InvitationC/img3.png`}
      />

      <RightImageSection
        title="Special Events"
        point={
          <Box>
            <MarkText text="For all other special events and occasions, explore our diverse range of invitation card templates." />
            <MarkText text="From engagement parties and anniversaries to holiday gatherings and corporate events, we have designs that suit every type of celebration." />
            <MarkText text="Personalize the templates to make your event invitations truly one-of-a-kind." />
          </Box>
        }
        buttonName={"Design your Invitation"}
        alt="calendar design"
        path="/s/event"
        image={`${assetsUrl}/w_assets/images/InvitationC/img4.png`}
      />

      <LeftImageSection
        title="How It Works"
        point={
          <Box>
            <MarkText text="Browse: Explore our collection and choose the category that matches your event." />
            <MarkText text="Select: Click on your preferred template and view the details." />
            <MarkText text="Personalize: Add your event information, customize colors, and choose fonts." />
            <MarkText text="Download: Once satisfied, download your customized invitation for printing or digital sharing." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/InvitationC/img5.png`}
      />

      <RightImageSection
        title="Tips for Customization"
        point={
          <Box>
            <MarkText text="Colors: Match your invitation to your event's color scheme. Experiment with different shades and combinations to find the perfect palette that resonates with your theme." />
            <MarkText text="Fonts: Choose fonts that complement the style of your event. Whether it's formal and traditional or casual and contemporary, we offer a variety of font options to suit your preferences." />
            <MarkText text="Photos: Some templates allow you to add personal photos. Showcase engagement pictures for wedding invitations or baby bump photos for baby showers, adding a personal touch to your invites." />
            <MarkText text="Details: Double-check all event details, including date, time, venue, and any additional information. Ensure accuracy to avoid confusion and make your invitation informative and clear." />
          </Box>
        }
        image={`${assetsUrl}/w_assets/images/InvitationC/img6.png`}
      />

      <Box className="pt-[50px]">
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/InvitationC/img7.png`}
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
                Print or Digital Options
              </Typography>
              <Typography className="font-medium">
                Selecting the right format for your invitations is essential.
                Choose between traditional printed cards or go for a modern
                digital approach. Our templates are designed to accommodate
                both, giving you the flexibility to print at home, use a
                professional printing service, or share digital invitations via
                email or social media.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                RSVP and Additional Inserts
              </Typography>
              <Typography className="font-medium">
                Enhance your invitation with matching RSVP cards and additional
                inserts. Encourage your guests to respond promptly and include
                any extra information, such as accommodation details,
                directions, or gift registry information, to make the planning
                process smoother.
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
            heading="Why choose Crafty Art for invitation card designs?"
            text="Crafty Art offers a unique blend of creativity, quality, and customization in every design."
          />

          <FaqsBox
            heading="Can I customize my invitation cards?"
            text="Yes, Crafty Art specializes in customization, allowing you to personalize colors, themes, and details."
          />

          <FaqsBox
            heading="How do I order custom invitation cards?"
            text="Visit Crafty Art, choose a design, and contact us to discuss customization and place your order."
          />

          <FaqsBox
            heading="What is the turnaround time for customized cards?"
            text="Turnaround time varies; our team provides an estimated timeline during customization discussions."
          />

          <FaqsBox
            heading="Do you offer bulk discounts?"
            text="Yes, Crafty Art provides competitive pricing and discounts for bulk orders."
          />
        </Box>
      </Box>

      {/* <CustomHead
        image={`${assetsUrl}/w_assets/images/InvitationC/img7.png`}
        heading={
          "Create Stunning Invitation Cards with Our Elegant Templates | Customize for Every Occasion"
        }
        text="Create unforgettable moments with our stylish invitation card templates. Perfect for weddings, birthdays, and more. Customize with ease and celebrate in unique style. Start designing now!"
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
                  name: "1. Why choose Crafty Art for invitation card designs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art offers a unique blend of creativity, quality, and customization in every design.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Can I customize my invitation cards?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art specializes in customization, allowing you to personalize colors, themes, and details.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. How do I order custom invitation cards?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Visit Crafty Art, choose a design, and contact us to discuss customization and place your order.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. What is the turnaround time for customized cards?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Turnaround time varies; our team provides an estimated timeline during customization discussions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. Do you offer bulk discounts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art provides competitive pricing and discounts for bulk orders.",
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
