import Icons from "@/src/assets";
import { DraftDataType } from "@/src/interface/getDraftsType";
import { RootState } from "@/src/redux";
import { Box, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface BoxesType {
  item: DraftDataType | any;
  mouseEnterItem: string;
  multiSize: number;
  setMouseEnterItem: React.Dispatch<React.SetStateAction<string>>;
  setSelectedItems: any;
  selectedItems: string[];
}

export default function StickerBoxes({
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  //   const moveTrash = (id: string) => {
  //     api
  //       .uploadAction({
  //         id: id,
  //         type: "0",
  //       })
  //       .then(() => {
  //         toast.success("Moved to trash");
  //         setRemoveId(id);
  //       });
  //   };
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
        {/* <button
          onClick={handleClick}
          className="absolute right-[35px] top-[8px] z-[1]"
          style={{
            display: mouseEnterItem === item?.id || open ? "block" : "none",
          }}
        >
          <Icons.UntickBlackIcon />
        </button> */}
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
          className="ticked"
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

        <div className=" flex justify-center w-full overflow-hidden cursor-pointer">
          <img
            src={item?.thumbnail}
            alt={item?.image}
            style={{
              maxWidth: `${multiSize}px`,
              maxHeight: "180px",
              width: "auto",
            }}
          />

          {mouseEnterItem === item?.id && item?.thumbs?.length > 1 && (
            <p
              className="absolute bottom-[10px] w-[45px] flex justify-center left-[5px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
              style={{ transition: "0.5s all" }}
            >
              <span className="w-[9px]"> {currentIndex + 1} </span> OF{" "}
              {item?.thumbs?.length}
            </p>
          )}

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => {
              setAnchorEl(null);
              setMouseEnterItem("");
            }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              className="gap-2 min-w-[230px] mb-2"
              onClick={() => {
                setAnchorEl(null);
                // moveTrash(item?.id);
              }}
            >
              <Icons.DeleteIcon />
              Move to trash
            </MenuItem>
          </Menu>
        </div>
      </Box>
    </Box>
  );
}
