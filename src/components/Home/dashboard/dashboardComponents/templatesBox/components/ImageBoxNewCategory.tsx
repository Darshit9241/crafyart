import Icons from "@/src/assets";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import { TemplateDataType } from "@/src/interface/commonType";
import { modalClosePath } from "@/src/redux/reducer/actionDataReducer";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch } from "react-redux";

interface ImageBoxesProps {
  templates: TemplateDataType;
  uniqueCat: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIdName: React.Dispatch<React.SetStateAction<TemplateDataType>>;
  height: number | any;
}

export default function ImageBoxNewCategory({
  templates,
  uniqueCat,
  height,
  setIdName,
  setOpenModal,
}: ImageBoxesProps) {
  const dispatch = useDispatch();
  const screenWidth = useScreenWidth();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: React.RefObject<HTMLInputElement> | any = useRef(null);
  const [showPreviewButton, setShowPreviewButton] = useState<boolean>(false);
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex: number) => (prevIndex + 1) % templates?.thumbArray.length
        );
      }, 1300);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered, templates?.thumbArray]);

  const handleMouseEnter = () => {
    setShowPreviewButton(true);
    if (screenWidth > 600) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPreviewButton(false);
    if (screenWidth > 600) {
      setIsHovered(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div
      key={templates?.id_name}
      className={`relative max-sm:w-[150px] w-[200px] `}
    >
      <span
        className="w-[28px] absolute top-[16px] z-[1] cursor-pointer"
        style={{
          right: templates.is_premium ? "47px" : "15px",
          opacity: showPreviewButton && !(isMobile || isTablet) ? "1" : "0",
          transition: "0.3s all",
        }}
        onClick={() => {
          setOpenModal(true);
          setIdName(templates);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icons.PreviewIcon svgProps={{ width: 27, height: 27 }} />
      </span>

      {templates.is_premium && (
        <span className="w-[28px] absolute right-[13px] top-[16px] z-[1]">
          <Icons.proIcon svgProps={{ width: 27, height: 27 }} />
        </span>
      )}
      <div className={` w-full `}>
        <Link
          className={`h-auto bg-white cursor-pointer block p-3 max-sm:p-1  w-full rounded-[12px]`}
          href={`/templates/p/${templates?.id_name}`}
          prefetch={false}
          shallow={true}
        >
          <Box>
            <Box
              className={`bg-[#E6E8EE] p-2 max-sm:p-1 h-[165px] max-sm:h-[150px] 
                rounded-[10px] relative`}
              style={{
                height: "auto",
                width: "auto",
              }}
              onClick={() => {
                dispatch(modalClosePath(`/`));
              }}
            >
              <div
                className="custom-carousel w-full h-full overflow-hidden cursor-pointer rounded-[5px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="carousel-slider w-full h-full "
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {templates?.thumbArray.map((image: string, index: number) => (
                    <div
                      className="bg-slate-200 flex justify-center w-full h-full rounded-[4px] carousel-slide"
                      key={index}
                    >
                      <img
                        src={image}
                        crossOrigin="anonymous"
                        alt={image}
                        className={`w-[auto] ${
                          uniqueCat ? "h-[100%]" : ""
                        }  mx-auto rounded-[4px]`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {isHovered && templates?.thumbArray?.length > 1 && (
                <p
                  className="absolute bottom-[10px] w-[60px] flex justify-center left-[10px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
                  style={{ transition: "0.5s all" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="w-[13px] text-right mr-1">
                    {" "}
                    {currentIndex + 1}{" "}
                  </span>{" "}
                  OF {templates?.thumbArray.length}
                </p>
              )}
            </Box>
          </Box>

          <Box className="pt-2 w-[170px] max-sm:w-[130px]">
            <Typography className="text-ellipsis max-sm:text-[12px] w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
              {templates?.template_name}
            </Typography>
            <Typography className="text-[#ABB2C7] text-[13px] pb-1 max-sm:hidden">
              {templates?.category_name}
            </Typography>
          </Box>
        </Link>
      </div>
    </div>
  );
}
