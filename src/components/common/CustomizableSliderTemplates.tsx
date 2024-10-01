import Icons from "@/src/assets";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";

interface MyObject {
  img: string;
  buttonName: string;
  path: string;
}

interface props {
  data: MyObject[];
}

export default function CustomizableSliderTemplates({ data }: props) {
  const router = useRouter();
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

  const colors = [
    "#B8D182",
    "#D7AF7B",
    "#D4C3F8",
    "#89C6DA",
    "#FECDA9",
    "#BAECCB",
  ];
  return (
    <Box className="py-0 max-w-[100%]">
      <Box
        className="flex py-10 px-8 w-[100%]  gap-10 scroll_none overflow-auto"
        id="brandIcons"
      >
        {data.map((item, index) => {
          const color = colors[index % colors.length];
          return (
            <Box
              key={index}
              className="flex flex-col justify-center  cursor-pointer"
              onClick={() => router.push(item?.path)}
            >
              <Box
                className="w-[270px] h-[320px]  flex justify-center items-center rounded-[10px]"
                sx={{ backgroundColor: color }}
              >
                <img src={item?.img} alt={item?.img} className="w-[220px]" />
              </Box>
              <Button
                className="w-fit mx-auto my-4 text-black normal-case text-[16px] py-1 px-3"
                sx={{ border: "2px solid #1C3048" }}
              >
                {item?.buttonName}
              </Button>
            </Box>
          );
        })}
      </Box>

      <Box className="flex justify-center px-[15%] py-10 sm:hidden">
        <Box className="flex">
          <Button
            onClick={handlePrevClick}
            disabled={!showPrevButton ? true : false}
            sx={{
              opacity: !showPrevButton ? "0.3" : 1,
            }}
          >
            <Icons.leftArrowIcon svgProps={{ width: 10 }} />
          </Button>
          <Button
            onClick={handleNextClick}
            disabled={!showNextButton ? true : false}
            sx={{ opacity: !showNextButton ? "0.3" : 1 }}
          >
            <Icons.rightArrowIcon svgProps={{ width: 10 }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
