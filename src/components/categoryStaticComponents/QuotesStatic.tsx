import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import Head from "next/head";
import CustomHead from "../common/CustomHead";
import Icons from "@/src/assets";

const howMakeQuotes = [
  {
    heading: "Printable Options: ",
    text: "Some quotes are available in printable formats. Decorate your space or create thoughtful gifts with our printable quote templates.    ",
    icon: <Icons.SearchQuotesIcon />,
  },
  {
    heading: "Customization Options: ",
    text: "Personalize quotes to match your style or tailor them to specific occasions. Change fonts, colors, and layouts for a unique touch.    ",
    icon: <Icons.EditQuotesIcon />,
  },
  {
    heading: "Download and Share: ",
    text: " Easily download your favorite quotes and share them on social media, in presentations, or with friends and family.    ",
    icon: <Icons.DownloadQuotesIcon />,
  },
];

export default function QuotesStatic() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <div className="">
      <Box className="pt-[70px] px-[15px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
        >
          How to Use Our Quotes Templates
        </Typography>

        <Typography className="text-center md:w-[70%] mx-auto">
          The process of designing an invitation with our online utility is
          simple and straightforward. You can make a beautiful invitation for
          your event by following the easy set of rules given below.
        </Typography>

        <Box className="flex gap-5 py-[30px] sm:py-[50px] w-full xl:w-[85%]  mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  max-lg:pb-5 max-lg:order-1 ">
            <img
              src={`${assetsUrl}/w_assets/images/category/makeQuotes.png`}
              alt={"quotes template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>

          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%] relative">
            {howMakeQuotes?.map((item, index) => (
              <Box className="flex gap-8 items-center mb-10" key={index}>
                <Box className=" flex gap-3 items-center ">
                  <Box className=" text-[#ABB2C7] text-[23px]">{index + 1}</Box>
                  <Box className="bg-white">{item?.icon}</Box>
                </Box>
                <Box className="w-fit">
                  <Typography className="font-semibold">
                    {item?.heading}
                  </Typography>
                  <Typography className=" text-[14px] opacity-70">
                    {item?.text}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Box
              className="absolute top-[52px] left-[50px] bottom-[100px] "
              sx={{ borderLeft: "1px dashed #ABB2C7", zIndex: "-1" }}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box className="py-[20px] bg-[#F4F7FE]   ">
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
                Why Choose Our Quote Templates?
              </Typography>

              <FaqsBox
                heading="Quality Content                 "
                text="Our quotes are carefully curated to ensure relevance, authenticity, and impact.
                  "
              />
              <FaqsBox
                heading="Diverse Selection                 "
                text="From classic literature to contemporary thinkers, our collection spans a wide range of sources and themes."
              />
              <FaqsBox
                heading="User-Friendly"
                text="Easily navigate, download, and customize quotes to suit your needs.
                "
              />
            </Box>
          </Box>

          <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
            <img
              src={`${assetsUrl}/w_assets/images/category/whyChooseQuotes.png`}
              alt={"quotes template"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4"
        >
          Explore Our Categories
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/quotesC/img1.png`}
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
                Motivational Quotes
              </Typography>
              <Typography className="font-medium">
                Fuel your determination and inspire others with our handpicked
                selection of motivational quotes. From success to perseverance,
                find the words that drive you to achieve your goals.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Inspirational Quotes
              </Typography>
              <Typography className="font-medium">
                Discover a treasure trove of inspirational quotes that ignite
                creativity and spark positive change. Perfect for personal
                reflection or sharing encouragement with friends and family.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Love and Relationship Quotes
              </Typography>
              <Typography className="font-medium">
                Express your emotions with eloquence using our love and
                relationship quotes. Whether it's a romantic gesture or words of
                comfort, find the perfect quote for any relationship.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Wisdom and Life Lessons
              </Typography>
              <Typography className="font-medium">
                Gain insights and wisdom from our collection of quotes that
                distill the essence of life's lessons. Timeless advice and
                profound thoughts to guide you on your journey.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Funny and Witty Quotes
              </Typography>
              <Typography className="font-medium">
                Bring a smile to your face and others with our collection of
                funny and witty quotes. Perfect for lightening the mood and
                adding a touch of humor to your day.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]  bg-[#F4F7FE]">
        <Typography
          variant="h2"
          className="text-[#1C3048] text-[30px] text-center font-[600] mb-4 "
        >
          Creative Ways to Use Quotes Templates
        </Typography>

        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Social Media Engagement:
              </Typography>
              <Typography className="font-medium">
                Boost your social media presence by sharing insightful quotes.
                Engage your audience with meaningful content that sparks
                conversations and connections.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Presentation Enhancement:
              </Typography>
              <Typography className="font-medium">
                Elevate your presentations with impactful quotes. Whether it's a
                business meeting or a creative project, quotes add depth and
                resonance to your message.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Journaling and Scrapbooking:
              </Typography>
              <Typography className="font-medium">
                Enrich your personal journals or scrapbooks with quotes that
                capture the essence of your experiences. Create beautiful
                keepsakes filled with wisdom and memories.
              </Typography>
            </Box>

            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Event Decor:
              </Typography>
              <Typography className="font-medium">
                Whether it's a wedding, birthday party, or corporate event, use
                quotes as decorative elements. Frame them or incorporate them
                into event materials for a touch of sophistication.
              </Typography>
            </Box>
          </Box>
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/quotesC/img2.png`}
              alt={"Logo Maker"}
              className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
            />
          </Box>
        </Box>
      </Box>

      <Box className="pt-[50px]">
        <Box className="flex py-[30px] sm:py-[50px] px-[20px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <Box className="flex-1  flex justify-center max-lg:pb-5 max-lg:order-1">
            <img
              src={`${assetsUrl}/w_assets/images/quotesC/img1.png`}
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
                Our Commitment to Quality
              </Typography>
              <Typography className="font-medium">
                At Crafty Art, we are committed to delivering not just words,
                but an experience. Our team of curators ensures that each quote
                is a gem, chosen for its depth, relevance, and universal appeal.
                We believe in the transformative power of language and strive to
                provide you with quotes that resonate, motivate, and inspire.
              </Typography>
            </Box>
            <Box className="mb-5">
              <Typography
                className="text-[18px] text_linear font-semibold text-black max-lg:text-[18px]  mb-2 "
                variant="h3"
              >
                Crafty Art - Where Words Come to Life.
              </Typography>
              <Typography className="font-medium">
                Let the power of words elevate your moments. Dive into our
                Quotes Templates collection and discover the perfect expression
                for every emotion and occasion. Feel free to explore and share
                the wisdom encapsulated in these beautifully crafted quotes.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

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
            heading="What is a Quotes Post?"
            text="A Quotes Post is a curated collection of inspirational, motivational, or thought-provoking quotes presented in a visually appealing format. These posts aim to share wisdom, positivity, and insights with the audience."
          />

          <FaqsBox
            heading="How can I create a Quotes Post?"
            text="Creating a Quotes Post is simple. Choose a theme or topic, select relevant quotes, and pair them with engaging visuals. Use graphic design tools or apps to enhance the visual appeal of your post."
          />

          <FaqsBox
            heading="Where can I find quotes for my Quotes Post?"
            text="You can find quotes in Crafty Art Quotes Post Maker."
          />

          <FaqsBox
            heading="How can I measure the success of my Quotes Posts?"
            text="Track engagement metrics such as likes, shares, and comments. Pay attention to the quotes that resonate the most with your audience and adjust your content strategy accordingly."
          />

          <FaqsBox
            heading="How do I choose the right quotes for my audience?"
            text="Consider your audience's interests, values, and preferences. Tailor the quotes to resonate with your audience and align with the overall theme or message of your platform."
          />
        </Box>
      </Box>

      {/* <CustomHead
        image={`${assetsUrl}/w_assets/images/quotesC/img1.png`}
        heading={"Unlock Creativity with Inspiring Quotes Templates"}
        text="Explore our curated collection of Quotes Templates for a daily dose of inspiration. Elevate your content effortlessly!        "
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
                  name: "1. What is a Quotes Post?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Quotes Post is a curated collection of inspirational, motivational, or thought-provoking quotes presented in a visually appealing format. These posts aim to share wisdom, positivity, and insights with the audience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. How can I create a Quotes Post?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Creating a Quotes Post is simple. Choose a theme or topic, select relevant quotes, and pair them with engaging visuals. Use graphic design tools or apps to enhance the visual appeal of your post.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. Where can I find quotes for my Quotes Post?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can find quotes in Crafty Art Quotes Post Maker.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. How can I measure the success of my Quotes Posts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Track engagement metrics such as likes, shares, and comments. Pay attention to the quotes that resonate the most with your audience and adjust your content strategy accordingly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. How do I choose the right quotes for my audience?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Consider your audience's interests, values, and preferences. Tailor the quotes to resonate with your audience and align with the overall theme or message of your platform.",
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
