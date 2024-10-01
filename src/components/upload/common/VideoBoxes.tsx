import Icons from "@/src/assets";
import { DraftDataType } from "@/src/interface/getDraftsType";
import { Box, Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";

interface BoxesType {
  item: DraftDataType | any;
  mouseEnterItem: string;
  multiSize: number;
  setMouseEnterItem: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItems: any;
  selectedItems: string[];
}

export default function VideoBoxes({
  item,
  mouseEnterItem,
  multiSize,
  setMouseEnterItem,
  setSelectedItems,
  selectedItems,
}: BoxesType) {
  const removeId = useSelector(
    (state: RootState) => state.actions.uploadRemoveId
  );
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [openVideoBox, setOpenVideoBox] = React.useState(false);
  const [openVideoUrl, setOpenVideoUrl] = useState<any>();

  const handleClickOpen = () => {
    setOpenVideoBox(true);
    setOpenVideoUrl(item);
  };

  const handleClose = () => {
    setOpenVideoBox(false);
  };

  const downloadVideo = () => {
    const link = document.createElement("a");
    link.href = openVideoUrl?.source_file;
    link.download = openVideoUrl?.title || "video";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      className="p-[10px]"
      sx={{
        width: `${multiSize}px`,
        display: removeId.includes(item?.id) ? "none" : "block",
      }}
    >
      <title>Upload</title>
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
          onClick={() => {
            const isSelected = selectedItems.includes(item.id);
            if (isSelected) {
              setSelectedItems((prevState: any) =>
                prevState.filter((e: any) => e !== item.id)
              );
            } else {
              setSelectedItems((prevState: any) => [...prevState, item.id]);
            }
          }}
          className={`absolute right-[10px] top-[8px] z-[1] ${
            item.id === mouseEnterItem && !selectedItems.includes(item.id)
              ? "block"
              : selectedItems.includes(item.id)
              ? "hidden"
              : "sm:hidden"
          }`}
        >
          <span
            style={{ border: "1px solid #4289e7" }}
            className="w-[24px] h-[24px] block rounded-[4px]"
          >
            <Icons.UntickBlackIcon svgProps={{ height: 23, width: 23 }} />
          </span>
        </button>

        <div
          onClick={() => {
            const isSelected = selectedItems.includes(item.id);
            if (isSelected) {
              setSelectedItems((prevState: any) =>
                prevState.filter((e: any) => e !== item.id)
              );
            } else {
              setSelectedItems((prevState: any) => [...prevState, item.id]);
            }
          }}
          className="ticked z-[1]"
          style={{
            display: selectedItems.includes(item.id) ? "block" : "none",
          }}
        >
          <button className="ml-[auto] mt-[6px] mr-[9px] w-[24px] h-[24px] flex items-center justify-center bg_linear rounded-[4px]">
            <Icons.RightSelectedTick
              svgProps={{ width: 15, height: 15, color: "#ffff" }}
            />
          </button>
        </div>

        <div className=" flex justify-center w-full overflow-hidden cursor-pointer relative">
          <img
            src={item?.thumbnail}
            alt={item?.thumbnail}
            style={{
              maxWidth: `${multiSize}px`,
              maxHeight: "180px",
              width: "auto",
            }}
          />
          <div
            className="absolute top-[50%] h-[50px] w-[50px] right-0 left-[50%] bottom-0"
            style={{ transform: "translate(-50%, -50%)" }}
            onClick={handleClickOpen}
          >
            <Icons.VideoPlayIcon />
          </div>
        </div>
      </Box>

      <Dialog
        fullScreen={fullScreen}
        open={openVideoBox}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "800px",
          },
        }}
      >
        <button
          className="absolute right-[10px] top-[10px] z-[100] bg-white w-[30px] h-[30px] max-sm:w-[35px] p-[5px] rounded-[50%] max-muiLG:bg-[aliceblue]"
          onClick={handleClose}
        >
          <Icons.modalCloseIcon svgProps={{ width: 20 }} />
        </button>
        <div className="p-[50px] flex gap-8 max-sm:flex-col">
          <div>
            <video src={openVideoUrl?.source_file} controls={true}></video>
          </div>
          <div className="min-w-[300px]">
            <h3 className="flex gap-[15px] font-semibold px-[15px] text-[20px] pb-4">
              {openVideoUrl?.title}
            </h3>

            <Button
              className="bg_linear text-[#ffff] normal-case w-full"
              onClick={downloadVideo}
            >
              Download
            </Button>
          </div>
        </div>
      </Dialog>
    </Box>
  );
}
