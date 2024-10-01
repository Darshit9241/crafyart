import Icons from "@/src/assets";
import { DashboardData } from "@/src/interface/dashboard";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ImageBox from "./ImageBox";
import { TemplateDataType } from "@/src/interface/commonType";
import ImageBoxNewCategory from "./ImageBoxNewCategory";

interface TemplatesBoxesProps {
  item: DashboardData;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIdName: React.Dispatch<React.SetStateAction<TemplateDataType>>;
  height: number | any;
  newCategory: boolean;
}

export default function TemplatesBoxes({
  item,
  setOpenModal,
  setIdName,
  height,
  newCategory,
}: TemplatesBoxesProps) {
  const uniqueCat =
    item?.category_name === "Latest" ||
    item?.category_name === "Trending" ||
    item?.category_name === "Invitation";
  const containerId = `carousel-slide-container-${item?.category_id}`;
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  React.useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerId, handleScroll]);

  const handleNextClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className="relative">
      <Box className="flex items-center justify-between pt-8 pb-4 max-sm:pb-2 max-sm:pt-5">
        <Typography className="text-black font-semibold text-[22px] max-sm:text-[14px]">
          {item?.category_name}
        </Typography>
        <Button>
          <Link
            prefetch={false}
            href={`/templates/${item?.id_name}`}
            className="normal-case flex items-center"
          >
            <span className="text-[#2EC6B8] font-semibold text-[16px] max-sm:text-[14px] flex items-center">
              See all
            </span>

            <span className="w-[7px] inline-block ml-3">
              <Icons.rightActiveArrowIcon svgProps={{ width: 7 }} />
            </span>
          </Link>
        </Button>
      </Box>
      <Box
        className="flex items-center overflow-auto scroll_none gap-[15px] max-sm:gap-[10px] "
        id={containerId}
      >
        {showPrevButton && (
          <Box>
            <button
              onClick={handlePrevClick}
              className="pre_button z-[1] left-[-18px] max-md:left-[20px] max-sm:top-[100px]  max-sm:left-[30%] flex max-sm:hidden"
              style={{ top: "52%" }}
            >
              <Icons.leftArrowIcon svgProps={{ width: 8 }} />
            </button>
          </Box>
        )}
        {item?.template_model?.map(
          (templates: TemplateDataType, index: number) => (
            <div key={index}>
              {newCategory ? (
                <ImageBoxNewCategory
                  templates={templates}
                  uniqueCat={uniqueCat}
                  height={height}
                  setIdName={setIdName}
                  setOpenModal={setOpenModal}
                />
              ) : (
                <ImageBox
                  templates={templates}
                  uniqueCat={uniqueCat}
                  height={height}
                  setIdName={setIdName}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          )
        )}
        {showNextButton && (
          <Box>
            <button
              onClick={handleNextClick}
              className="next_button right-[-18px] flex max-sm:hidden"
              style={{ top: "52%" }}
            >
              <span>
                <Icons.rightArrowIcon svgProps={{ width: 8 }} />
              </span>
            </button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
