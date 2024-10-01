import Icons from "@/src/assets";
import { Box, Input } from "@mui/material";
import React, { ChangeEvent } from "react";

interface PropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const predefinedColors = ["#000", "#19D2C8", "#5170F1", "#156F8B", "#111F5A"];

const Color: React.FC<PropsType> = (props) => {
  const handleColorSelect = (color: string) => {
    props.setValue(color);
  };

  // const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   props.setValue(event.target.value);
  // };

  const handleButtonClick = () => {
    const fontColorButton = document.getElementById(
      "fontColorButton"
    ) as HTMLInputElement | null;

    if (fontColorButton) {
      fontColorButton.click();
    }
  };

  return (
    <>
      <Box className="flex gap-2 ">
        <Box
          sx={{
            height: "40px",
            width: "40px",
            borderRadius: "5px",
            border: "2px solid black",
            padding: !predefinedColors.includes(props.value) ? "2px" : "",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Input
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              backgroundColor: "transparent",
              opacity: "0",
            }}
            type="color"
            id="fontColorButton"
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
          />

          <span
            className="absolute top-0 left-0 bottom-0 right-0 w-[36px] h-[40px] p-[5px]"
            onClick={handleButtonClick}
          >
            <Icons.PaintBucketIcon />
          </span>
        </Box>
        {/* {predefinedColors.map((color: string, index: number) => (
          <Box
            key={index}
            sx={{
              minHeight: "40px",
              minWidth: "40px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "2px solid black",
              padding: props.value === color ? "2px" : "",
              overflow: "hidden",
            }}
            onClick={() => handleColorSelect(color)}
          >
            <Box
              sx={{
                backgroundColor: color,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ))} */}

        {/* <input type="color" onChange={(e) => props.setValue(e.target.value)} /> */}
      </Box>
    </>
  );
};

export default Color;
