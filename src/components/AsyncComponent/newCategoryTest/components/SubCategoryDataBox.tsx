import Icons from "@/src/assets";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SubCategoryDataBox(props: { data: any }) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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
    <div className="relative category_slider">
      {showNextButton && (
        <button className="next_button" onClick={handleNextClick}>
          <Icons.rightArrowIcon svgProps={{ width: 10, height: 15 }} />
        </button>
      )}

      <Box
        className="flex gap-4 my-5 overflow-auto scroll_none"
        id="brandIcons"
      >
        {props?.data?.map((item: any) => (
          <div key={item.id_name}>
            <Button
              className="bg-[#EDF0F9] normal-case px-[13px] py-[5px] cursor-pointer w-fit rounded-[5px]"
              onClick={() => {
                const currentPath = window.location.pathname;
                router.push(`${currentPath}/${item?.id_name}`);
                setSelectedCategory(item?.id_name);
              }}
            >
              <span
                className={`whitespace-nowrap text-[15px] ${"text-[#1C3048]"}`}
              >
                {item?.category_name}
              </span>
            </Button>
          </div>
        ))}
      </Box>
      {showPrevButton && (
        <button className="prev_button" onClick={handlePrevClick}>
          <Icons.leftArrowIcon svgProps={{ width: 10, height: 15 }} />
        </button>
      )}
    </div>
  );
}
