"use client";
import { MarkText } from "@/src/components/Home/landingPage/LandingPage";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const CustomHead = dynamic(
  () => import("@/src/components/invitation/CustomHead")
);

const FaqsBox = dynamic(() => import("@/src/components/invitation/FAQs"));
const GetTemplates = dynamic(
  () => import("@/src/components/invitation/GetTemplates")
);

const CreateInvitation = dynamic(
  () => import("@/src/components/invitation/CreateInvitation")
);

const QuestionsTitle = dynamic(
  () => import("@/src/components/invitation/QuestionsTitle")
);

const FLink = dynamic(() => import("@/src/components/invitation/FLink"));

const ExploreTemplates = dynamic(
  () => import("@/src/components/invitation/ExploreTemplates")
);

const CustomizableSliderTemplates = dynamic(
  () => import("@/src/components/invitation/CustomizableSliderTemplates")
);

const NewBanner = dynamic(
  () => import("@/src/components/invitation/NewBanner")
);
const AutoSlider = dynamic(
  () => import("@/src/components/invitation/AutoSlider")
);
const LeftDetail = dynamic(
  () => import("@/src/components/invitation/LeftDetail")
);
const RightDetail = dynamic(
  () => import("@/src/components/invitation/RightDetail")
);
const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
const sliderTemplate = [
  {
    img: `${assetsUrl}/w_assets/invitationImage/last_slider/1.png`,
    buttonName: "Wedding Invitation",
    path: "/k/wedding-invitation-template",
  },
  {
    img: `${assetsUrl}/w_assets/invitationImage/last_slider/2.png`,
    buttonName: "Birthday Invitation",
    path: "/k/birthday-invitation-template",
  },
  {
    img: `${assetsUrl}/w_assets/invitationImage/last_slider/3.png`,
    buttonName: "Party Invitation",
    path: "/k/party-invitations",
  },
  {
    img: `${assetsUrl}/w_assets/invitationImage/last_slider/4.png`,
    buttonName: "Baby Shower Invitation",
    path: "/k/baby-shower-invitations",
  },
  {
    img: `${assetsUrl}/w_assets/invitationImage/last_slider/5.png`,
    buttonName: "Bridal Invitation",
    path: "/k/whatsapp-wedding-anniversary-wishes",
  },
];
export default function index() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>
      <CustomHead
        image={`${assetsUrl}/w_assets/images/invitationCreateWedding.png`}
        heading="Online Invitation Maker (Free) | Crafty Art"
        text="Design & create your own invitation cards using our wide selection of templates for birthdays, weddings, baby shower, parties, engagement and more. "
      />
      <Box>
        <link
          rel="canonical"
          title={"Online Invitation Maker (Free) | Crafty Art"}
          href={`https://www.craftyartapp.com/invitation`}
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
                  name: "1. What are the available design templates for invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our invitation maker offers a wide range of design templates to choose from, including options for birthdays, weddings, baby showers, graduations, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "2. Can I customize the text and images on the invitations?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our invitation maker allows you to personalize your invitations with your own text and images. You can also experiment with different fonts, colors, and layouts to create a unique look that matches your event.",
                  },
                },
                {
                  "@type": "Question",
                  name: "3. How can I share my invitations with guests?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can share your invitations via email or social media. Our platform makes it easy to send your invitations directly to your guests' inboxes or share them on your social media accounts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "4. Can I preview my invitations before sending them out?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our invitation maker comes with a preview feature that allows you to see how your finished invitations will look. You can make any necessary changes before sending them out to ensure they are error-free and visually appealing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "5. Is the invitation maker free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer both free and paid options for using our invitation maker. The free version allows you to access basic features and templates, while the paid version offers advanced customization options and premium templates.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <NewBanner
        heading={
          <>
            <h1 className="text-[28px] sm:text-[47px] font-bold text-[#2F1150] w-full lg:w-[60%] text-center">
              Create{" "}
              <span className="text-[#7F51F2]">Beautiful Invitation </span> With
              Our Invitation Maker
            </h1>
          </>
        }
        text={
          <>
            Elevate your event with personalized invitations crafted
            effortlessly using our Invitation <br /> Maker. Design, customize,
            and share with ease.
          </>
        }
        path="/templates/invitation"
      />
      <br />
      <AutoSlider
        img_1={`${assetsUrl}/w_assets/invitationImage/slider/wedding.jpg`}
        img_2={`${assetsUrl}/w_assets/invitationImage/slider/party_i.jpg`}
        img_3={`${assetsUrl}/w_assets/invitationImage/slider/baby_shower.jpg`}
        img_4={`${assetsUrl}/w_assets/invitationImage/slider/birthday.jpg`}
        img_5={`${assetsUrl}/w_assets/invitationImage/slider/engagment.jpg`}
        img_6={`${assetsUrl}/w_assets/invitationImage/slider/bridal.jpg`}
        img_1_url="/k/wedding-invitation-template"
        img_2_url="/k/party-invitations"
        img_3_url="/k/baby-shower-invitations"
        img_4_url="/k/birthday-invitation-template"
        img_5_url="/k/engagement-invitation"
        img_6_url="/bridal-shower"
      />
      {/* <AutoSlider/> */}
      <div
        style={{
          backgroundImage: "url(/images/invitationImage/first_bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <LeftDetail
            title="Crafty Art Invitation Card Maker: Unveiling Its Key Features"
            point={
              <Box>
                <MarkText text="Streamlined user experience for effortless online invitation cards creation" />
                <MarkText text="Diverse selection of templates catering to different events and themes" />
                <MarkText text="Extensive customization tools allowing for personalized invite card designst" />
                <MarkText text="Seamless integration of personal photos to enhance design of invitation card appeal" />
                <MarkText text="Convenient sharing options facilitating digital distribution of invite cards" />
                <MarkText text="Mobile-friendly interface for on-the-go access and design flexibility" />
              </Box>
            }
            buttonName={"Create Your Wedding Invitation"}
            alt="Invitation Maker"
            image={`${assetsUrl}/w_assets/invitationImage/contant/1.jpg`}
            path="/k/wedding-invitation-template"
          />
        </div>
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img1.png`}
          alt="resumeBanner"
          style={{ width: "200px", height: "350px", paddingRight: "0px" }}
          className="absolute right-0 mt-[-8%] invisible md:visible"
        />
        <div>
          <RightDetail
            title="Explore Our Exclusive Invitation Designs"
            point={
              <Box>
                <MarkText text="Diverse range of exclusive designs to suit every occasion" />
                <MarkText text="Personalization options for customizing invitation card" />
                <MarkText text="High-quality workmanship for premium look and feel" />
                <MarkText text="Versatile themes catering to various events" />
                <MarkText text="User-friendly interface for easy navigation" />
                <MarkText text="Fast and convenient online ordering process" />
              </Box>
            }
            buttonName={"Create Your Invitation Card"}
            alt="Invitation Maker"
            image={`${assetsUrl}/w_assets/invitationImage/contant/2.jpg`}
            path="/k/wedding-invitation-template"
          />
        </div>
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img2.png`}
          alt="resumeBanner"
          // style={{ width: "200px", height: "500px", paddingRight: "0px" }}
          className="absolute w-[200px] h-[500px] pl-0 mt-[-8%] invisible md:visible"
        />

        <LeftDetail
          title="Craft Beautiful Invites Quickly with Our Online Invitation Maker!"
          point={
            <Box>
              <MarkText text="Accessible online invitation cards maker for quick and effortless design" />
              <MarkText text="Vast selection of templates for various events and themes" />
              <MarkText text="User-friendly interface enabling seamless customization of invite cards" />
              <MarkText text="High-quality printing options for professional-looking results" />
              <MarkText text="Convenient digital sharing and distribution of invitations" />
              <MarkText text="Mobile compatibility for designing on-the-go" />
            </Box>
          }
          buttonName={"Create Your Invitation Card"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/3.jpg`}
          path="/templates/invitation"
        />
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img6.png`}
          alt="resumeBanner"
          style={{ width: "200px", height: "350px", paddingRight: "0px" }}
          className="absolute right-0  mt-[-8%] invisible md:visible"
        />
        <RightDetail
          title="How to create a heartwarming baby shower invitation that celebrates the new arrival?"
          point={
            <Box>
              <MarkText text="Choose a design that reflects the baby's gender or incorporates elements of the nursery theme" />
              <MarkText text="Include all necessary information, such as the date, time, location, and gift registry details" />
              <MarkText text="Use soft colors and playful fonts to create a warm and welcoming feelUse soft colors and playful fonts to create a warm and welcoming feel" />
              <MarkText text="Consider adding a fun activity, such as a name guessing game or diaper raffle, to make the shower more memorable" />
              <MarkText text="Send out the invitation template with a personalized message or note to show your appreciation for guests' attendance." />
            </Box>
          }
          buttonName={"Create your baby shower Invitation"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/4.jpg`}
          path="/k/baby-shower-invitations"
        />
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img3.png`}
          alt="resumeBanner"
          className="absolute w-[320px] h-[460px] pl-0 py-[10px] mt-[-15%]"
        />
        <CreateInvitation
          heading="Design your dream invitations today and take your brand to the next level with Premium!"
          text="Get started now with our customizable templates."
          navigate="/templates/invitation-card"
        />
      </div>
      <div
        style={{
          backgroundImage: "url(/images/invitationImage/second_bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LeftDetail
          title="How to create a unique wedding invitation that perfectly captures your love story?"
          point={
            <Box>
              <MarkText text="Utilize customizable templates from an invitation card generator" />
              <MarkText text="Incorporate personalized details reflecting your love story's journey." />
              <MarkText text="Select theme options that resonate with your unique relationship" />
              <MarkText text="Experiment with fonts, colors, and graphics for a personalized touch." />
              <MarkText text="Ensure seamless sharing and distribution through the invitation maker website." />
              <MarkText text="Preview and refine designs to ensure they reflect your love story accurately." />
            </Box>
          }
          buttonName={"Find Your Anniversary Invitation"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/5.png`}
          path="/k/wedding-anniversary-invitation-card"
        />
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img4.png`}
          alt="resumeBanner"
          style={{ width: "250px", height: "350px", paddingRight: "0px" }}
          className="absolute right-0 mt-[-10%] invisible md:visible"
        />
        <RightDetail
          title="How to craft an exciting birthday invitation card?"
          point={
            <Box>
              <MarkText text="Simplify Your Event Planning: Our invitation card maker streamlines the process, saving you time and stress." />
              <MarkText text="Stunning Designs, Effortlessly: Access a vast library of professionally designed templates, ensuring your invitations stand out." />
              <MarkText text="Personalization Made Easy: Customize every aspect of your invitations, from colors to fonts, to reflect your unique style." />
              <MarkText text="Budget-Friendly Solutions: Create beautiful invitations without breaking the bank, thanks to our cost-effective options." />
              <MarkText text="Fast and Easy Download Invitations: We offer quick turnaround times and high- quality flawless invitations." />
            </Box>
          }
          buttonName={"Start Designing"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/6.png`}
          path="/birthday-invitation"
        />
        <LeftDetail
          title="Our Unique Invitations Selection"
          point={
            <Box>
              <MarkText text="Looking for the perfect invitation? Our Innovative Invitation Card Design offers a wide range of options to suit any occasion:" />
              <MarkText text="Weddings: Craft the perfect wedding invitation that reflects your love story." />
              <MarkText text="Corporate Events: Impress clients & partners with professional & creative invites." />
              <MarkText text="Birthdays: Celebrate another year with invitations that match your style." />
              <MarkText text="Anniversaries: Commemorate milestones with elegant and personalized designs." />
              <MarkText text="Special Occasions: From baby showers, house warming to retirements, we have you covered." />
              <MarkText text="Engagement: Create a Perfect Engagement Invitation Card For Your Special Event. " />
            </Box>
          }
          buttonName={"Start Desiging"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/7.png`}
          path="/templates"
        />
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img5.png`}
          alt="resumeBanner"
          // style={{ width: "200px", height: "500px", paddingRight: "0px" }}
          className="absolute w-[200px] h-[460px] pl-0 pt-[10px] mt-[-10%] invisible md:visible"
        />
        <RightDetail
          title="How to craft a cozy baby shower invite for the newest addition?"
          point={
            <Box>
              <MarkText text="Simplify Your Event Planning: Our invitation card maker streamlines the process, saving you time and stress." />
              <MarkText text="Stunning Designs, Effortlessly: Access a vast library of professionally designed templates, ensuring your invitations stand out." />
              <MarkText text="Personalization Made Easy: Customize every aspect of your invitations, from colors to fonts, to reflect your unique style." />
              <MarkText text="Budget-Friendly Solutions: Create beautiful invitations without breaking the bank, thanks to our cost-effective options." />
              <MarkText text="Fast and Easy Download Invitations: We offer quick turnaround times and high- quality flawless invitations." />
            </Box>
          }
          buttonName={"Design your Baby Shower Invitation"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/8.png`}
          path="/baby-shower-invitation"
        />
        <ExploreTemplates
          getAll={"/templates/invitation"}
          keyword="invitation"
        />
        <LeftDetail
          title="How to design an anniversary invitation that embodies the couple's lasting love?"
          point={
            <Box>
              <MarkText text="Choose a romantic color palette that reflects the couple's love story" />
              <MarkText text="Include heartfelt wording that expresses their enduring commitment" />
              <MarkText text="Consider adding a personal touch, such as a photo or monogram, to make it unique" />
              <MarkText text="Select high-quality paper and printing techniques for a luxurious feel" />
              <MarkText text="Ensure the design reflects the overall theme of the anniversary celebration" />
              <MarkText text="Proofread carefully to avoid errors and ensure clarity of information" />
            </Box>
          }
          buttonName={"Start Designing"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/9.png`}
          path="/k/whatsapp-wedding-anniversary-wishes"
        />
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/img1.png`}
          alt="resumeBanner"
          style={{ width: "250px", height: "350px", paddingRight: "0px" }}
          className="absolute right-0 mt-[-10%] invisible md:visible"
        />
        <RightDetail
          title="How to create a bridal shower invitation for a stylish celebration?"
          point={
            <Box>
              <MarkText text="Choose a stylish theme that reflects the bride-to-be's personality" />
              <MarkText text="Select a sophisticated color palette that enhances the invitation's elegance" />
              <MarkText text="Incorporate elegant typography and design elements for a polished look" />
              <MarkText text="Personalize the invitation with essential details such as the bride's name, date, and location" />
              <MarkText text="Consider adding special touches like metallic accents or floral motifs for added flair" />
              <MarkText text="Consider sending digital invitations to save time and resources while still maintaining a stylish aesthetic" />
            </Box>
          }
          buttonName={"Start Designing"}
          alt="Invitation Maker"
          image={`${assetsUrl}/w_assets/invitationImage/contant/10.png`}
          path="/bridal-shower"
        />
        <img
          src={`${assetsUrl}/w_assets/tools/invitation-page/Vector.png`}
          alt="resumeBanner"
          style={{ width: "64px", height: "130px", paddingRight: "0px" }}
          className="absolute ml-52 invisible lg:visible mt-10"
        />
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
            heading="1. What are the available design templates for invitations? "
            text={
              <>
                Our invitation maker offers a wide range of design templates to
                choose from, including options for birthdays,
                <FLink lk={`${domain}k/wedding-invitation-template`}>
                  weddings,
                </FLink>
                baby showers, graduations, and more.
              </>
            }
          />
          <FaqsBox
            heading="2. Can I customize the text and images on the invitations?"
            text={
              <>
                Yes, our invitation maker allows you to personalize your
                invitations with your own text and images. You can also
                experiment with different fonts, colors, and layouts to create a
                unique look that matches your event.
              </>
            }
          />
          <FaqsBox
            heading="3. How can I share my invitations with guests? "
            text={
              <>
                You can share your invitations via email or social media. Our
                platform makes it easy to send your{" "}
                <FLink lk={`${domain}templates/invitation`}>
                  invitation card
                </FLink>{" "}
                directly to your guests' inboxes or share them on your social
                media accounts.
              </>
            }
          />
          <FaqsBox
            heading="4. Can I preview my invitations before sending them out?"
            text={
              <>
                Yes, our invitation maker comes with a preview feature that
                allows you to see how your finished invitations will look. You
                can make any necessary changes before sending them out to ensure
                they are error-free and visually appealing.
              </>
            }
          />
          <FaqsBox
            heading="5. Is the invitation maker free to use?"
            text={
              <>
                We offer both free and paid options for using our
                <FLink lk={`${domain}k/free-wedding-invitation-maker`}>
                  invitation maker.
                </FLink>{" "}
                The free version allows you to access basic features and
                templates, while the paid version offers advanced customization
                options and premium templates.
              </>
            }
          />
        </Box>
      </div>
      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Invitation Templates."
        text="Create unforgettable moments with personalized invitations"
        navigate="/templates/invitation"
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

        <div className="flex justify-center mx-5">
          <h1 className="text-xl md:text-3xl text-center py-5 font-bold text-black">
            <p>
              {" "}
              <span className="text_linear">
                Get a headstart with fully
              </span>{" "}
              customizable templates
            </p>
          </h1>
          <div className="flex justify-center items-center invisible md:visible">
            <img
              className="h-[25px] w-[25px] md:h-[55px] md:w-[55px]"
              src={`${assetsUrl}/w_assets/invitationImage/last_slider/icon4.png`}
              alt="Placeholder Image invisible md:visible mt-10"
            />
          </div>
        </div>
        <CustomizableSliderTemplates data={sliderTemplate} />
      </Box>
    </>
  );
}
