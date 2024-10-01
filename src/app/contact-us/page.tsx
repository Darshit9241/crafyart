"use client";
import { handleEmailClick } from "@/src/commonFunction/emailCheck";
import FaqsBox from "@/src/components/common/FAQs";
import QuestionsTitle from "@/src/components/common/QuestionsTitle";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

export default function index() {
  return (
    <div className="py-[50px] max-sm:py-[20px] px-[15px]">
      <CustomHead
        heading={"Contact Us - Crafty Art"}
        text="Need Help? Contact Us Instantly! Your Solution Awaits. Expert Assistance 24/7. Don't Miss Out – Act Now!"
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
                  name: "What is the pricing model for Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Crafty Art Pro offers various pricing plans, including free trials, subscriptions, and single template purchases. With the free trial, users can access a limited set of resources or templates. However, by opting for a subscription plan, customers gain full access to customization features, a broader range of templates, and additional resources. Alternatively, users can choose to purchase a single template, allowing them to acquire a specific template or resource of their choice.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between the Subscription Plan and the Single Template Purchase?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Subscription Plan: This plan provides access to all premium features, customization options, regular updates, and exclusive tools like the background remover and many more. It is billed on a monthly, quarterly, or yearly basis, depending on your preference. Single Template Purchase: With this plan, you can buy a specific template for a one-time payment. This option grants you lifetime access to the chosen template.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to Contact Crafty Art for any Subscription Related Query or Problems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To contact Crafty Art regarding any subscription-related queries or other issues, you can reach out to them at infiappsolution@gmail.com.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I purchase a single template from Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Choose the premium template you wish to purchase. Once you've selected the template, click on the 'Customize This Template' button. After clicking the button, a pop-up will appear with two options: the first is to buy a subscription, and the second is to buy a single template. Choose the 'Buy Single Template' option. Selecting 'Buy Single Template' will allow you to proceed with the purchase of the individual template. After the purchase, customize the template according to your needs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I purchase a subscription of Crafty Art?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "There are two convenient ways to purchase a subscription from Crafty Art: 1. Navigate to the 'Pricing' section in the header. Here, you'll find three subscription plans - monthly, quarterly, and yearly. Choose the plan that suits your needs and proceed to purchase the subscription. 2. Alternatively, select a premium template and click on the 'Customize This Template' button. A pop-up will appear presenting two options: the first is to buy a subscription, and the second is to buy a single template. Opt for the 'Buy a Subscription' option. After completing the subscription purchase, you will gain access to the full range of Crafty Art's offerings.",
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
        <Typography
          className="text_linear max-sm:text-[30px] text-[45px] font-[700] text-center mx-auto mb-3 sm:mb-10"
          variant="h1"
        >
          Contact Us
        </Typography>

        <Box className="w-[80%] max-sm:w-full mx-auto">
          <Typography>
            Thank you for your interest in CraftyArt! We're thrilled to hear
            from you and assist with any inquiries or collaborations you might
            have. Please feel free to get in touch using the following contact
            information:
          </Typography>
          <Typography
            variant="h2"
            className=" text-[20px] mt-5 mb-2 font-[700]"
          >
            Contact Information:
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold"> Company Name :</span> Infiapp
            Solution
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold mb-1">
              {" "}
              Operational Address with Pincode :
            </span>{" "}
            <br />B - 815, IT Park, Opposite AR Mall, Uttran, Surat - 394105
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold">Email :</span>{" "}
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              infiappsolution@gmail.com
            </span>
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold">Mobile Number :</span>{" "}
            <Link
              prefetch={false}
              href="tel:+919898978207"
              className="text-[blue] cursor-pointer"
              target="_blank"
            >
              +91 9898978207
            </Link>
          </Typography>

          <Typography className="mb-2">
            <span className="font-semibold"> Business Hours :</span> 9AM to 6PM
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-8 mb-2 font-[700]"
          >
            Get in Touch:
          </Typography>

          <Typography className="mb-3">
            Whether you have a question about our services, want to discuss a
            potential project, or simply want to say hello, we're here and eager
            to help. You can reach us through the following methods:
          </Typography>
          <Typography className="mb-3">
            <span className="font-semibold">Email :</span> For general inquiries
            or project proposals, please email us at{" "}
            <span
              className="text-[blue] cursor-pointer"
              onClick={handleEmailClick}
            >
              infiappsolution@gmail.com
            </span>
            . Our team will respond within 1-2 business days.
          </Typography>

          <Typography
            variant="h2"
            className=" text-[20px] mt-8 mb-2 font-[700]"
          >
            Social Media :
          </Typography>

          <Typography className="mb-3">
            Stay connected and updated on our latest projects, design tips, and
            news by following us on our social media channels:
          </Typography>

          <ul
            style={{
              listStyleType: "unset",
              color: "blue",
              marginLeft: "20px",
            }}
          >
            <li className="cursor-pointer mb-1">
              <Link
                prefetch={false}
                target="_blank"
                rel="nofollow"
                href="https://www.instagram.com/craftyart_official?igsh=MnJuM3JydWxsYXZy&utm_source=qr"
              >
                Instagram
              </Link>
            </li>

            <li className="cursor-pointer mb-1">
              <Link
                prefetch={false}
                target="_blank"
                rel="nofollow"
                href="https://www.facebook.com/craftyartapp/"
              >
                Facebook
              </Link>
            </li>

            <li className="cursor-pointer mb-1">
              <Link
                prefetch={false}
                target="_blank"
                rel="nofollow"
                href="https://in.pinterest.com/craftyart_official"
              >
                Pinterest
              </Link>
            </li>

            <li className="cursor-pointer mb-1">
              <Link
                prefetch={false}
                target="_blank"
                rel="nofollow"
                href="https://twitter.com/craftyartstudio"
              >
                Twitter
              </Link>
            </li>

            <li className="cursor-pointer mb-1">
              <Link
                target="_blank"
                rel="nofollow"
                href="https://www.youtube.com/@craftyartgraphic7864"
              >
                Youtube
              </Link>
            </li>
          </ul>

          <Typography
            variant="h2"
            className=" text-[20px] mt-8 mb-2 font-[700]"
          >
            Shipping Policy :
          </Typography>

          <Typography className="mb-3">
            Our business focuses solely on digital products, which means that
            physical shipping is not applicable. Therefore, there is no need for
            customers to provide shipping details when making a purchase. Rest
            assured, your digital products will be delivered electronically, and
            you can enjoy them without the hassle of traditional shipping.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] mt-5 mb-[100px]"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />

        <FaqsBox
          heading="What is the pricing model for Crafty Art?"
          text="Crafty Art Pro offers various pricing plans, including free trials, subscriptions, and purchase single templates. With the free trial, users can access a limited set of resources or templates. However, by opting for a subscription plan, customers gain full access to customization features, a broader range of templates, and additional resources. Alternatively, users can choose to purchase a single template, allowing them to acquire a specific template or resource of their choice."
        />

        <FaqsBox
          heading="What is the difference between the Subscription Plan and the Single Template Purchase?"
          text={
            <>
              <Typography className="text-black max-sm:text-[15px]  max-2sm:text-[13px] mb-3">
                Subscription Plan: This plan provides access to all premium
                features, customization options, regular updates, and exclusive
                tools like the background remover and many more.. It is billed
                on a monthly, quarterly, or yearly basis, depending on your
                preference.
              </Typography>
              <Typography className="text-black max-sm:text-[15px] max-2sm:text-[13px]  ">
                Single Template Purchase: With this plan, you can buy a specific
                template for a one-time payment. This option grants you lifetime
                access to the chosen template.
              </Typography>
            </>
          }
        />

        <FaqsBox
          heading="How to Contact Crafty Art for any Subscription Related Query or Problems?"
          text={
            <>
              To contact Crafty Art regarding any subscription-related queries
              or other issues, you can reach out to them at
              <span
                className="text-[blue] cursor-pointer"
                onClick={handleEmailClick}
              >
                {" "}
                infiappsolution@gmail.com
              </span>
              .
            </>
          }
        />

        <FaqsBox
          heading=" How do I purchase a single template from Crafty Art?"
          text={
            <>
              <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
                Choose the premium template you wish to purchase.
              </li>
              <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
                Once you've selected the template, click on the "Customize This
                Template" button.
              </li>{" "}
              <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
                After clicking the button, a pop-up will appear with two
                options: the first is to buy a subscription, and the second is
                to buy a single template. Choose the "Buy Single Template"
                option.
              </li>{" "}
              <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
                Selecting "Buy Single Template" will allow you to proceed with
                the purchase of the individual template{" "}
              </li>{" "}
              <li className="text-black max-sm:text-[15px] mb-2 max-2sm:text-[13px]  ">
                After the purchase, customize the template according to your
                needs.
              </li>
            </>
          }
        />

        <FaqsBox
          heading="How do I purchase a subscription of Crafty Art?"
          text={
            <>
              <Typography className="text-black max-sm:text-[15px] font-medium max-2sm:text-[13px] mb-3">
                There are two convenient ways to purchase a subscription from
                Crafty Art:
              </Typography>

              <Typography className="text-black max-sm:text-[15px] max-2sm:text-[13px] mb-3">
                1. Navigate to the "Pricing" section in the header. Here, you'll
                find three subscription plans - monthly, quarterly, and yearly.
                Choose the plan that suits your needs and proceed to purchase
                the subscription.
              </Typography>

              <Typography className="text-black max-sm:text-[15px] max-2sm:text-[13px]">
                2. Alternatively, select a premium template and click on the
                "Customize This Template" button. A pop-up will appear
                presenting two options: the first is to buy a subscription, and
                the second is to buy a single template. Opt for the "Buy a
                Subscription" option. After completing the subscription
                purchase, you will gain access to the full range of Crafty Art's
                offerings.
              </Typography>
            </>
          }
        />
        <FaqsBox
          heading="Is there a limit to how many templates I can purchase with the Single Template option?"
          text="No, there is no limit. You can purchase as many templates as you like, and each template comes with lifetime access."
        />
        <FaqsBox
          heading="How does the billing work for the Subscription Plan?"
          text="The Subscription Plan is billed based on the selected frequency (monthly, quarterly, or yearly). Users enjoy uninterrupted access to premium features as long as their subscription is active."
        />
      </Box>
    </div>
  );
}
