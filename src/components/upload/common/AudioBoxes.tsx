import Icons from "@/src/assets";
import { DraftDataType } from "@/src/interface/getDraftsType";
import { RootState } from "@/src/redux";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

interface BoxesType {
  item: DraftDataType | any;
  mouseEnterItem: string;
  multiSize: number;
  setMouseEnterItem: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItems: any;
  selectedItems: string[];
}

export default function AudioBoxes({
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

  return (
    <Box
      className="p-[10px]"
      sx={{
        width: `${multiSize}px`,
        display: removeId.includes(item?.id) ? "none" : "block",
      }}
    >
      <title>Upload</title>
      <div>
        <Box
          className="bg-[#e6e8ee8a] relative p-[10px] rounded-[8px] flex justify-center"
          sx={{ height: "200px" }}
          onMouseEnter={() => {
            setMouseEnterItem(item?.id);
          }}
          onMouseLeave={() => {
            setMouseEnterItem("");
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
              src={"/images/audioImage.png"}
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
            >
              <Icons.AudioIcon />
            </div>
          </div>
        </Box>
        <p
          className="p-[13px] text-ellipsis whitespace-nowrap overflow-hidden"
          style={{ width: `${multiSize}px` }}
        >
          {item?.title}
        </p>
      </div>
    </Box>
  );
}
