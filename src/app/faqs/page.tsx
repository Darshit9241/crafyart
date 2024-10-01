"use client";
import Icons from "@/src/assets";
import { useScreenHeight } from "@/src/commonFunction/screenWidthHeight";
import CustomHead from "@/src/components/common/CustomHead";
import { faqsList } from "@/src/constants/faqsList";
import { Box, Typography } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

export default function Index() {
  const screenHeight = useScreenHeight();
  const [openFaqs, setOpenFaqs] = useState<number>(0);
  const [moreItems, setMoreItems] = useState<boolean>(false);

  return (
    <div
      className="bg-[#F4F7FE] py-[50px] px-[15px]"
      style={{ minHeight: `${screenHeight - 70}px` }}
    >
      <CustomHead
        heading={
          "Crafty Art FAQs: Unleash Your Creative Potential with Our Graphic Design Tool Insights"
        }
        text="Explore Crafty Art FAQs for expert insights on our graphic design tool. Unleash your creativity effortlessly with answers at your fingertips"
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
                  name: "What is Crafty Art Graphic Design Tool?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art is a versatile graphic design tool that empowers users to create stunning visual content for various purposes, including weddings, flyers, business cards, and more. It provides a user-friendly interface and a wide range of features to bring your creative ideas to life.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can Crafty Art enhance wedding invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art offers specialized templates and design elements tailored for wedding invitations. Users can personalize colors, fonts, and layouts to match the wedding theme, ensuring a unique and memorable invitation for the special day.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What flyer design options does Crafty Art provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art includes a diverse collection of pre-designed flyer templates suitable for events, promotions, or announcements. Users can customize these templates with their own text, images, and branding elements to create eye-catching and effective flyers.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Crafty Art be used for professional business card design?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Crafty Art provides professionally designed business card templates, allowing users to create polished and professional business cards. Customization options include adding logos, contact details, and choosing from various design styles to suit different industries.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How user-friendly is Crafty Art for beginners?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art is designed with a user-friendly interface, making it accessible for beginners. The drag-and-drop functionality, intuitive tools, and helpful tutorials ensure that users with varying levels of design experience can navigate and create with ease.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the pricing model for Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art Pro offers various pricing plans, including free trials, subscriptions, and single template purchases. The free trial provides limited access, while subscriptions offer full customization features, a broader range of templates, and additional resources. Alternatively, users can choose to purchase a single template for lifetime access.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between the Subscription Plan and the Single Template Purchase?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Subscription Plan: This plan provides access to all premium features, customization options, regular updates, and exclusive tools like the background remover. It is billed on a monthly, quarterly, or yearly basis. Single Template Purchase: With this plan, you can buy a specific template for a one-time payment, granting you lifetime access to the chosen template.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to Contact Crafty Art for any Subscription Related Query or Problems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To contact Crafty Art regarding any subscription-related queries or other issues, you can reach out to them at infiappsolution@gmail.com",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there a limit to how many templates I can purchase with the Single Template option?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, there is no limit. You can purchase as many templates as you like, and each template comes with lifetime access.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the billing work for the Subscription Plan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Subscription Plan is billed based on the selected frequency (monthly, quarterly, or yearly). Users enjoy uninterrupted access to premium features as long as their subscription is active.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <Box className="flex items-center flex-col">
        <Typography className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto mb-10">
          Can we help you?
        </Typography>

        {faqsList?.map((item, index) => (
          <Box
            key={index}
            className="bg-[#FFF] max-md:w-full w-[80%] p-[20px] rounded-[10px] mb-5 cursor-pointer"
            sx={{ boxShadow: "0px 0px 8px 1px rgba(28, 48, 72, 0.10)" }}
            onClick={() =>
              setOpenFaqs(openFaqs && openFaqs === index + 1 ? 0 : index + 1)
            }
          >
            <Typography
              className="flex items-center gap-8 font-semibold "
              sx={{ marginBottom: openFaqs === index + 1 ? "10px" : "0" }}
            >
              {openFaqs === index + 1 ? (
                <Icons.faqMinusIcon svgProps={{ width: 20 }} />
              ) : (
                <Icons.faqPlusIcon svgProps={{ width: 20 }} />
              )}

              {item?.title}
            </Typography>

            <Box sx={{ transition: "0.5s all" }}>
              <Typography
                className="flex items-center gap-10  overflow-hidden"
                sx={{
                  height: openFaqs === index + 1 ? "auto" : "0px",
                }}
              >
                <span className="w-[28px]"></span>
                {item?.value}
              </Typography>
            </Box>
          </Box>
        ))}

        {/* <Box className="py-4">
          <Button
            className="normal-case bg_linear text-white px-[20px] "
            onClick={() => setMoreItems(!moreItems)}
          >
            View more
          </Button>
        </Box> */}
      </Box>
    </div>
  );
}
