import Icons from "@/src/assets";
import { Box, Button, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

const customerComment = [
  {
    rating: 5,
    image: `${assetsUrl}/landing-page/man1.jpg`,
    name: "Emily Smith",
    comment:
      "As a photographer, I rely on Crafty Art Background Remover to quickly separate subjects from their backgrounds. It's fast, accurate, and has saved me a ton of time. Highly recommended",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/man2.jpg`,
    name: "James Johnson",
    comment:
      "Crafty Art is a fantastic online caricature tool for creating unique invitations. Its user-friendly interface make easy to design personalized caricatures that bring fun and humor in to my event. With excellent customer support and quick delivery, I prefer to design Caricature invitations with Crafty Art!",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/girl1.jpg`,
    name: "Olivia Davis",
    comment:
      "Crafty Art's custom invitations exceeded my expectations. Their user-friendly graphics design tools made it easy to create a unique design. The quality and design of invitation card was outstanding, and their customer service was top-notch. Quick delivery and attention to detail set Crafty Art apart. They made my event extra special!",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/girl2.jpg`,
    name: "Pooja Sharma",
    comment:
      "Crafty Art's invitation maker tool is perfect for those last-minute invitations. I used it for a surprise party and had invitations ready within an hour. The templates are so stylish, and you can quickly personalize them with the event details. The speed at which I could create and print the invitations saved the day for me.",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/man3.jpg`,
    name: "Ethan Wilson",
    comment:
      "Crafty Art Graphic Design Tool has been a game-changer for my design projects. Here a reasons why Crafty Art has earned my trust and loyalty: User Feedback Integration, Cross-Platform Compatibility, Time-Saving Features, Regular Content Updates, Security and Privacy, Advanced Export Options and Many More…",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/girl3.jpg`,
    name: "Sophia Brown",

    comment:
      "I run a small business, and the Crafty Art Daily Post Maker has transformed the way I handle my social media marketing. With this tool, I can easily schedule posts in advance, ensuring a consistent online presence for my brand. The convenience it offers is incredible. It has allowed me to grow my online following and connect with my customers in a more meaningful way.  ",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/man4.jpg`,
    name: "Siddharth Reddy",

    comment:
      "I recently had the pleasure of using the Crafty Art Invitation Card Maker Tool for an upcoming special event, and I couldn't be more delighted with the results. This online platform has truly transformed the way I create invitations, making the process both fun and effortless.",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/man5.jpg`,
    name: "kevin Smith",

    comment:
      "Crafty Art's invitation maker tool is so versatile. I used it for a baby shower invitation, and it allowed me to add personal photos and text. The final product looked professional and heartwarming. Being able to incorporate pictures of the mom-to-be it made the invitation extra special. ",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/man6.jpg`,
    name: "devid johnson",

    comment:
      "Crafty Art Logo Maker is a fantastic online tool! I am able to design a stunning logo for my small business in less time. its user-friendly interface and a wide range of logo designs make the process very easy. I impress with the simplicity of the platform, which allowed me to review with various design elements, colors, and fonts until I found the perfect logo that represented my business.",
  },

  {
    rating: 5,
    image: `${assetsUrl}/landing-page/girl4.jpg`,
    name: "Sophia devis",

    comment:
      "Crafty Art Flyer Maker is a great tool for quick and easy flyer design. The only downside is the limited export options. I'd love to have more file format choices for my designs, but it's still a solid choice for businesses on a budget.",
  },
];
interface CustomerComment {
  rating: number;
  comment: string;
  image: string;
  name: string;
}

interface CustomerBoxProps {
  value: number;
  text: string;
  image: string;
  name: string;
}

export const CustomerBox = ({ text, value, image, name }: CustomerBoxProps) => {
  return (
    <Box
      className="w-[32%] max-sm:mx-3 bg-white p-8 rounded-[10px] max-lg:w-[100%] min-w-[300px] max-sm:min-w-[100%] max-2sm:min-w-[230px]"
      sx={{ boxShadow: "0px 0px 10px 3px rgba(0, 0, 0, 0.1)" }}
    >
      <Box className="flex items-center space-x-4 mb-2">
        <Box
          className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
          sx={{ backgroundImage: `url(${image})` }}
        ></Box>
        <Box className="font-medium">
          <Box>{name}</Box>
        </Box>
      </Box>
      <Rating name="read-only" value={value} readOnly />
      <Typography className="text-[14px] sm:text-[16px] text-black my-4  min-h-[170px] ">
        {text}
      </Typography>
    </Box>
  );
};

export default function CustomerSaying() {
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
    const container = document.getElementById("customer");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["customer"]);

  const handleNextClick = () => {
    const container = document.getElementById("customer") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("customer") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box className="flex flex-col items-center py-24 max-w-[2400px] mx-auto mb-0 max-sm:mb-0 px-[20px] max-lg:py-10 ">
      <Typography className="text-[35px] font-bold text-black max-sm:text-[24px] text-center">
        What are Customers Saying about Crafty Art
      </Typography>
      <Typography className="text-[18px] max-sm:text-[15px] text-black my-2 text-center">
        Crafty Art has a proven track record of delivering efficiency, results
        and excellent customer service.
      </Typography>

      <Box className="flex  justify-center relative w-[100%] overflow-auto ">
        <Box
          className=" flex pr-[23px]  w-full xl:w-[80%] justify-between  z-[1] max-lg:mt-[0]  gap-[30px] max-sm:gap-[0px] overflow-auto scroll_none   sm:px-10 py-5 sm:py-15  mt-5"
          id="customer"
        >
          {customerComment?.map((item: CustomerComment, index: number) => (
            <CustomerBox
              key={index}
              value={item?.rating}
              text={`“${item?.comment}”`}
              image={item?.image}
              name={item?.name}
            />
          ))}
        </Box>
      </Box>
      <Box className="flex justify-center px-[15%] pt-5 w-[100%]">
        <Box className="flex  ">
          <Button
            onClick={handlePrevClick}
            disabled={!showPrevButton ? true : false}
            sx={{
              opacity: !showPrevButton ? "0.3" : 1,
            }}
            aria-label="Prev"
          >
            <Icons.leftArrowIcon svgProps={{ width: 10 }} />
          </Button>
          <Button
            onClick={handleNextClick}
            disabled={!showNextButton ? true : false}
            sx={{ opacity: !showNextButton ? "0.3" : 1 }}
            aria-label="Next"
          >
            <Icons.rightArrowIcon svgProps={{ width: 10 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
