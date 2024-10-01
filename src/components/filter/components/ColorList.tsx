import Icons from "@/src/assets";
import { Box, Button, Typography } from "@mui/material";
import { valHooks } from "jquery";
import React, { useState, useRef, useEffect } from "react";
import { ChromePicker } from "react-color";
import { bool } from "sharp";

interface DataType {
  id: number;
  code: string;
}

export default function ColorList(props: {
  title: string;
  data: any[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
}) {
  const [openList, setOpenList] = useState<boolean>(false);
   const [openColor, setOpenColor] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [colorpicker, setColorpicker] = useState<string>("");
  const [showSelectedColorBox, setShowSelectedColorBox] =
    useState<boolean>(false);
   const pickerRef = useRef<HTMLDivElement>(null);

  const handleChangeComplete = (color: any) => {
    setColorpicker(color.hex);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target as Node)
    ) {
      setOpenColor(false);
    }
  };

  useEffect(() => {
    if (props.open) {
      setOpenList(props.open);
    }
  }, [props.open]);

  useEffect(() => {
    if (props.value != null && props.value.length > 6) {
      const isContain = props.data.some((value) => value.code === props.value);

      if (!isContain) {
        setShowSelectedColorBox(true);
        setSelectedColor(props.value);
      } else {
        setShowSelectedColorBox(false);
      }
    } else {
      setShowSelectedColorBox(false);
    }
  }, [props.value, props.data]);

  useEffect(() => {
    if (openColor) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openColor]);

  const handleColorClick = (color: string) => {
    if (props.value === color) {
      props.setValue("");
      setShowSelectedColorBox(false);
    } else {
      props.setValue(color);
      setShowSelectedColorBox(false);
    }
  };

  const handleApplyColor = () => {
    setSelectedColor(colorpicker);
    props.setValue(colorpicker);
    setOpenColor(false);
    setShowSelectedColorBox(true);
  };

  return (
    <Box>
      <Button
        className="flex justify-between px-[15px] w-full mt-3 items-center normal-case"
        onClick={() => setOpenList(!openList)}
      >
        <Typography className="text-[black]">{props.title}</Typography>
        <button className="px-2">
          {openList ? <Icons.TopArrowsIcon /> : <Icons.BottomArrowsIcon />}
        </button>
      </Button>

      <Box
        sx={{
          display: openList ? "flex" : "none",
          flexWrap: "wrap",
          gap: "5px",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              height: "37px",
              width: "37px",
              borderRadius: "100px",
              border: "2px solid black",
              padding: "2px",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <span
              className="absolute top-[-2px] left-[-1px] bottom-0 right-0 w-[37px] h-[37px] p-[6px]"
              onClick={() => setOpenColor(!openColor)}
            >
              <Icons.PaintBucketIcon />
            </span>

            {openColor && (
              <div
                ref={pickerRef}
                className="absolute z-10 bottom-[35px] flex flex-col"
                style={{ borderRadius: "50px" }}
              >
                <div
                  className="p-[13px] md:p-[18px] bg-white"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "2px 4px 8px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <ChromePicker
                    color={colorpicker}
                    onChange={handleChangeComplete}
                    disableAlpha={true}
                  />

                  <div className="pt-5 flex justify-center items-center rounded-[20px]">
                    <Button
                      className="bg_linear text-white w-[200px]"
                      onClick={handleApplyColor}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Box>

        {showSelectedColorBox && (
          <Box
            sx={{
              border:
                props.value === selectedColor
                  ? // ? `2px solid ${selectedColor}`
                    // : "2px solid gray",
                    `2px solid blue`
                  : `2px solid ${selectedColor}`,
              borderRadius: "100px",
            }}
          >
            <Box
              className="w-[33px] h-[33px] rounded-[100px] cursor-pointer"
              sx={{
                padding: `${props.value === selectedColor ? "2px" : "0"} `,
              }}
              onClick={() => handleColorClick(selectedColor)}
            >
              <Box
                className="w-full h-full rounded-[100px] cursor-pointer"
                sx={{ backgroundColor: selectedColor }}
              ></Box>
            </Box>
          </Box>
        )}

        {props.data.map((res: DataType) => (
          <Box key={res.id} className="rounded-[100px]">
            <Box
              key={res.id}
              sx={{
                border:
                  props.value === res.code
                    ? "2px solid gray"
                    : `2px solid ${res.code}`,

                borderRadius: "100px",
              }}
              style={{
                border:
                  props.value === res.code
                    ? "2px solid blue"
                    : "2px solid gray",
              }}
            >
              <Box
                className="w-[33px] h-[33px] rounded-[100px] cursor-pointer"
                sx={{
                  padding: `${props.value === res.code ? "2px" : "0"} `,
                }}
                onClick={() => handleColorClick(res.code)}
              >
                <Box
                  className="w-full h-full rounded-[100px] cursor-pointer"
                  sx={{
                    backgroundColor: res.code,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
