import LeftImageSection from "@/src/app/wedding/components/LeftImageSection";
import RightImageSection from "@/src/app/wedding/components/RightImageSection";
import { Box, Rating, Typography } from "@mui/material";
import Head from "next/head";
import { MarkText } from "../Home/landingPage/LandingPage";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";

const howMakeFlyer = [
  "Explore our wide range of categories to find the perfect flyer for your needs.  ",
  "Personalize the flyer with your text, images, and branding elements using easy-to-use editing tools.",
  "Once satisfied with your design, download it in your preferred format, ready to print or share digitally.",
];

export default function FlyerStatic() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <div>
      <Box className="pt-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Make a Flyer on CraftyArt?
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an flyer with our online utility is simple
          and straightforward. You can make a beautiful flyer for your event by
          following the easy set of rules given below.
        </Typography>

        <Box className="flex justify-center gap-5 py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-center">
            <img
              src={`${assetsUrl}/w_assets/images/category/makeFlyer.png`}
              alt={"flyer template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            {howMakeFlyer?.map((item, index) => (
              <Box className="flex gap-3 mb-5" key={index}>
                <Box className="bg-[#EDF0F9] h-[38px] w-[40px] rounded-full flex justify-center items-center">
                  {index + 1}
                </Box>

                <Typography className="w-fit text-[15px] font-medium">
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]  bg-[#F4F7FE]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 "
        >
          Explore Our Categories
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Event Flyers
              </Typography>
              <Typography className="font-medium">
                From concerts and parties to corporate gatherings, find the
                perfect design to capture the essence of your event.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Business Promotion
              </Typography>
              <Typography className="font-medium">
                Make your business shine with eye-catching flyers designed for
                marketing, promotions, and special offers.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Product Launch
              </Typography>
              <Typography className="font-medium">
                Introduce your latest products in style with attention-grabbing
                templates tailored for successful launches.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Educational Flyers
              </Typography>
              <Typography className="font-medium">
                Promote your school, courses, workshops, or educational events
                with designs that convey professionalism and credibility.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Real Estate
              </Typography>
              <Typography className="font-medium">
                Showcase properties and attract potential buyers with visually
                appealing flyers for real estate listings and open houses
              </Typography>
            </Box>
          </Box>
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/flyerC/img2.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[10px]">
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/flyerC/img1.png`}
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
                Dazzling Flyer Designs
              </Typography>
              <Typography className="font-medium">
                Explore a world of captivating designs that cater to every
                occasion. From events and parties to business promotions, our
                collection boasts a diverse array of visually striking flyers.
                Let your imagination run wild as you discover designs that make
                a lasting impression.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Free Flyer Templates
              </Typography>
              <Typography className="font-medium">
                Budget-friendly brilliance awaits with our range of free flyer
                templates. Access a treasure trove of professionally crafted
                designs without breaking the bank. Perfect for small businesses,
                startups, or anyone looking for high-quality designs at no cost.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Flyer Creator Extraordinaire
              </Typography>
              <Typography className="font-medium">
                Ready to be the master of your own design destiny? Our intuitive
                Flyer Creator empowers you to customize templates, add your
                personal touch, and bring your vision to life. No graphic design
                skills? No problem! Our user-friendly interface ensures a
                seamless design experience for everyone.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Cutting-Edge Flyer Template Designs
              </Typography>
              <Typography className="font-medium">
                Stay ahead of the curve with our trendsetting flyer template
                designs. Whether you're aiming for modern minimalism, vintage
                vibes, or bold and vibrant aesthetics, we have templates that
                cater to every taste and style.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Flyer Design Online
              </Typography>
              <Typography className="font-medium">
                Embrace the convenience of designing on the go with our online
                flyer design platform. No need for complicated software create,
                edit, and download your masterpiece directly from your browser.
                Effortless, efficient, and designed to suit your busy lifestyle.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <RightImageSection
        title="Why Choose Crafty Art For Flyer Designs ?"
        point={
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Variety: Explore an extensive range of flyer designs and templates for every occasion." />
              <MarkText text="Affordability: Access high-quality designs without breaking the bank with our free templates." />
              <MarkText text="Ease of Use: Our Flyer Creator makes designing a breeze, ensuring a stress-free experience for all users." />
              <MarkText text="Innovation: Stay on the cutting edge with our constantly updated collection of trendsetting designs." />
              <MarkText text="Quality Assurance: We pride ourselves on delivering top-notch Flyers that exceed industry standards." />
            </Box>
          </Box>
        }
        buttonName={"Create a flyer"}
        alt="flyer Maker"
        path="/s/flyer"
        image={`${assetsUrl}/w_assets/images/category/whyChooseFlyer.png`}
      />

      <LeftImageSection
        title="How It Works"
        point={
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MarkText text="Browse: Explore our wide range of categories to find the perfect template for your needs." />
              <MarkText text="Customize: Personalize the template with your text, images, and branding elements using easy-to-use editing tools." />
              <MarkText text="Download: Once satisfied with your design, download it in your preferred format, ready to print or share digitally." />
            </Box>
          </Box>
        }
        alt="flyer Maker"
        image={`${assetsUrl}/w_assets/images/flyerC/img3.png`}
      />

      <Box className="pt-[70px] pb-[20px]  px-[20px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4"
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
            <Rating name="read-only" value={5} />
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
            <Rating name="read-only" value={5} />
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
            <Rating name="read-only" value={5} />
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
            heading="1. Can I use Crafty Art for free?"
            text="Yes, Crafty Art offers a free online flyer maker. To access it, select the Flyer Maker option from the main page and
          choose one of the premade templates. You can then add your own images, text, and design elements to customize the
          post. When you’re finished, click Save, and your logo will be ready to download."
          />
          <FaqsBox
            heading="2. What are the benefits of a premium subscription?"
            text="As a premium user you can download unlimited Crafty Art assets, and various services."
          />

          <FaqsBox
            heading="3. Why do i have to purchase Crafty Art Pro?"
            text="With the premium user, you can access unlimited service of Crafty Art Pro."
          />

          <FaqsBox
            heading="4. Are my downloads unlimited as a premium user?"
            text="Yes, as a premium user, you have unlimited downloads. There is no limitations on the use of Crafty Art assets, templates,
          and the Background Remover Tool."
          />
        </Box>
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
                  name: "1. Can I use Crafty Art for free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Crafty Art offers a free online flyer maker. To access it, select the Flyer Maker option from the main page and choose one of the premade templates. You can then add your own images, text, and design elements to customize the post. When you’re finished, click Save, and your logo will be ready to download.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. What are the benefits of a premium subscription?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "As a premium user, you can download unlimited Crafty Art assets and enjoy various premium services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. Why do I have to purchase Crafty Art Pro?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Purchasing Crafty Art Pro provides premium users with unlimited access to Crafty Art Pro services.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. Are my downloads unlimited as a premium user?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, as a premium user, you have unlimited downloads. There are no limitations on the use of Crafty Art assets, templates, and the Background Remover Tool.",
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
