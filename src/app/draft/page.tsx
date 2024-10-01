"use client";
import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import { DraftDataType } from "@/src/interface/getDraftsType";
import { RootState } from "@/src/redux";
import { Box, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { isMobile, isTablet } from "react-device-detect";
import { GetDraftApiDataType } from "@/src/interface/commonType";

interface DraftBoxesType {
  item: DraftDataType | any;
  mouseEnterItem: string;
  multiSize: number;
  setMouseEnterItem: React.Dispatch<React.SetStateAction<string>>;
}

const DraftBoxes = ({
  item,
  mouseEnterItem,
  multiSize,
  setMouseEnterItem,
}: DraftBoxesType) => {
  const editorUrl = process.env.NEXT_PUBLIC_EDITOR;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: React.RefObject<HTMLInputElement> | any = useRef(null);
  const [removeId, setRemoveId] = useState<string>("");

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex: number) => (prevIndex + 1) % item?.thumbs.length
        );
      }, 1300);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered, item?.thumbs.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  const moveTrash = (id: string) => {
    api
      .draftAction({
        id: id,
        type: "0",
      })
      .then(() => {
        setRemoveId(id);
        toast.success("Design moved to trash");
      });
  };

  return (
    <Box
      className="p-[10px]"
      sx={{
        width: `${multiSize}px`,
        display: removeId === item?.id ? "none" : "block",
      }}
    >
      <Box
        className="bg-[#e6e8ee8a] relative p-[10px] rounded-[8px] flex justify-center"
        sx={{ height: "200px" }}
        onMouseEnter={() => {
          setMouseEnterItem(item?.id);
          setCurrentIndex(0);
        }}
        onMouseLeave={() => {
          setMouseEnterItem("");
          setCurrentIndex(0);
        }}
      >
        <button
          onClick={handleClick}
          className={`absolute right-[10px] top-[8px] z-[1]   ${
            mouseEnterItem === item?.id || open ? "block" : "sm:hidden"
          }`}
        >
          <Icons.MoreIcon />
        </button>

        <div
          className="custom-carousel w-full overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="w-full h-full"
            onClick={() => {
              if (isMobile || isTablet) {
                window.open(
                  `https://play.google.com/store/apps/details?id=com.crafty.art`
                );
              } else window.open(`${editorUrl}${item?.id}`);
            }}
          >
            <div
              className="carousel-slider"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                height: "100%",
              }}
            >
              {item?.thumbs.map((image: string, index: number) => (
                <div
                  className="carousel-slide"
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={image}
                    alt={image}
                    style={{
                      maxWidth: `${multiSize}px`,
                      maxHeight: "180px",
                      width: "auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {mouseEnterItem === item?.id && item?.thumbs.length > 1 && (
            <p
              className="absolute bottom-[10px] w-[45px] flex justify-center left-[5px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
              style={{ transition: "0.5s all" }}
            >
              <span className="w-[9px]"> {currentIndex + 1} </span> OF{" "}
              {item?.thumbs.length}
            </p>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
              setIsHovered(false);
              setMouseEnterItem("");
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem className="gap-2 w-[200px] mb-2">
              <Icons.CopyIcon /> Make a copy
            </MenuItem> */}

            <MenuItem
              className="gap-2 w-[200px] mb-2"
              onClick={() => {
                setAnchorEl(null);
                moveTrash(item?.id);
              }}
            >
              <Icons.DeleteIcon /> Move to trash
            </MenuItem>
          </Menu>
        </div>
      </Box>

      <div className="pt-2 px-1">
        <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
          {item?.name}
        </p>
      </div>
    </Box>
  );
};

export default function index() {
  const sideBarRedux = useSelector(
    (state: RootState) => state.actions.openSidebar
  );
  const screenHeight = useScreenHeight();
  const screenWidth = useScreenWidth() - (sideBarRedux ? 289 : 40);
  const [draftData, setDraftData] = useState<DraftDataType[] | any>([]);
  const [mouseEnterItem, setMouseEnterItem] = useState<string>("");
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const multiSize = useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return screenWidth / 6;
      case screenWidth > 1400:
        return screenWidth / 6;
      case screenWidth > 1200:
        return screenWidth / 6;
      case screenWidth > 1000:
        return screenWidth / 3;
      case screenWidth > 600:
      case screenWidth > 550:
        return screenWidth / 3;
      default:
        return screenWidth / 2;
    }
  }, [screenWidth, sideBarRedux]);

  useEffect(() => {
    setLoadMore(true);
    api
      .getDraftData({
        type: "0",
        page: page,
      })
      .then((response: unknown) => {
        const res = response as GetDraftApiDataType;
        setLoadMore(false);

        if (res?.datas?.length > 0) {
          setDraftData((prevData: DraftDataType[]) => [
            ...(prevData || []),
            ...res?.datas,
          ]);
          setIsLastPage(res?.isLastPage);
        } else setDraftData(null);
      })
      .catch((err) => {
        setLoadMore(false);
        consoleLog("getDraftData: ", err);
      });
  }, [page]);

  return (
    <div className="px-[15px]">
      <title>Draft</title>
      <h1 className="text-[32px] font-medium p-[10px]">Draft</h1>
      <div className="flex flex-wrap" style={{ width: screenWidth }}>
        {draftData
          ? draftData?.map((item: DraftDataType, index: number) => (
              <DraftBoxes
                key={index}
                item={item}
                setMouseEnterItem={setMouseEnterItem}
                mouseEnterItem={mouseEnterItem}
                multiSize={multiSize}
              />
            ))
          : !loadMore && (
              <div
                className="flex justify-center items-center w-full"
                style={{ height: `${screenHeight - 230}px` }}
              >
                <img
                  src="/images/NoDataFound.svg"
                  alt="NoDataFound"
                  className="w-[250px]"
                />
              </div>
            )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        {loadMore ? (
          <Box className="text_linear font-[700 text-[20px]">Loading....</Box>
        ) : (
          !isLastPage &&
          draftData?.length > 0 && (
            <Button
              className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
              onClick={() => setPage((prev) => prev + 1)}
            >
              LOAD MORE
            </Button>
          )
        )}
      </div>
    </div>
  );
}
