import Icons from "@/src/assets";
import { Diversity1TwoTone } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const brandIcons = [
  {
    image: <Icons.backgroundIcon svgProps={{ width: 30 }} />,
    name: "Background Remover",
    link: "/background-remover",
  },
  {
    image: <Icons.brandKitIcon svgProps={{ width: 30 }} />,
    name: "Brand Kit",
    link: "/brand-kit",
  },
  {
    image: <Icons.resizeIcon svgProps={{ width: 30 }} />,
    name: "Resize Options",
    link: "/resize",
  },
  {
    image: <Icons.textEditorIcon svgProps={{ width: 27, height: 27 }} />,
    name: "Style kit",
    link: "/style-kit",
  },
  {
    image: <Icons.coupleIcon svgProps={{ width: 30 }} />,
    name: "Caricature",
    link: "/caricature",
  },
  {
    image: <Icons.loveLetterIcon svgProps={{ width: 30 }} />,
    name: "Customize Invitation",
    link: "/customize-invitation",
  },
  {
    image: (
      <Icons.schedulePostIcon
        svgProps={{ width: 30, height: 30, color: "#1C3048" }}
      />
    ),
    name: "Schedule Post",
  },
];

export default function TrendingFunctionalities() {
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
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box className="w-[100%] ">
      <Box className="bg-[#F4F7FE] py-[50px] max-sm:py-[30px]  flex flex-col items-center gap-[50px] max-sm:px-[20px]">
        <Typography className="text-[37px] font-semibold text-black max-sm:text-[24px] text-center">
          Explore Trending Functionalities Of Crafty Art
        </Typography>

        <Box className="relative px-[5%] w-[100%]">
          <button
            onClick={handlePrevClick}
            className="pre_button left-[2%] sm:left-[5%] rounded-[0] h-[80px] w-[50px] sm:w-[150px] px-3"
            style={{
              background:
                "linear-gradient(90deg, #F4F7FE 37.05%, rgba(255, 255, 255, 0.00) 69.06%)",
              boxShadow: "none",
              display: !showPrevButton ? "none" : "block",
            }}
            aria-label="Prev"
          >
            <Icons.leftArrowIcon svgProps={{ width: 10 }} />
          </button>

          <Box
            className="flex   mx-auto overflow-x-auto gap-[30px] items-center scroll_none max-md:gap-[30px]   max-sm:w-[100%]"
            id="brandIcons"
          >
            {brandIcons?.map((item, index: number) =>
              item?.link ? (
                <Link
                  href={item?.link}
                  key={index}
                  className="flex items-center bg-white min-w-[150px] sm:min-w-[230px] py-[5px] px-[10px] sm:px-[20px] gap-3 rounded-[4px] h-[70px]"
                  style={{
                    boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                  {item?.image}

                  <Typography className="text-[15px] max-sm:text-[14px] font-[500]">
                    {item?.name}
                  </Typography>
                </Link>
              ) : (
                <div
                  key={index}
                  className="flex items-center bg-white min-w-[150px] sm:min-w-[230px] py-[5px] px-[10px] sm:px-[20px] gap-3 rounded-[4px] h-[70px]"
                  style={{
                    boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.10)",
                  }}
                >
                  {item?.image}

                  <Typography className="text-[15px] max-sm:text-[14px] font-[500]">
                    {item?.name}
                  </Typography>
                </div>
              )
            )}
          </Box>

          <button
            onClick={handleNextClick}
            className="next_button  right-[2%] sm:right-[5%] rounded-[0] h-[80px] w-[50px] sm:w-[150px] px-3 text-center"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.00) ,  #F4F7FE 37.05% 69.06%)",
              boxShadow: "none",
              display: !showNextButton ? "none" : "flex",
            }}
            aria-label="Next"
          >
            <Icons.rightArrowIcon svgProps={{ width: 10 }} />
          </button>
        </Box>
      </Box>
    </Box>
  );
}
