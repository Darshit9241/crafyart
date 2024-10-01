import Icons from "@/src/assets";
import { Box, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";

const styles = {
  container: {
    borderRadius: "5px",
    cursor: "pointer",
    overflow: "hidden",
    minHeight: "40px",
    minWidth: "40px",
  },
  contentBox: {
    backgroundColor: "#EFEFEF",
    width: "100%",
    height: "100%",
    padding: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const dotsVal = [
  { icon: <Icons.Dots1Icon />, type: "square" },
  { icon: <Icons.Dots2Icon />, type: "rounded" },
  { icon: <Icons.Dots3Icon />, type: "dots" },
];

const markerBorderVal = [
  { icon: <Icons.MarkerBorder1Icon />, type: "square" },
  { icon: <Icons.MarkerBorder2Icon />, type: "extra-rounded" },
  { icon: <Icons.MarkerBorder3Icon />, type: "dot" },
];

const markerCenterVal = [
  { icon: <Icons.MarkerCenter1Icon />, type: "square" },
  { icon: <Icons.MarkerCenter2Icon />, type: "dot" },
];

interface StyleItemProps {
  style: { icon: React.ReactElement; type: string };
  selectedStyle: string;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
}

const StyleItem: React.FC<StyleItemProps> = ({
  style,
  selectedStyle,
  setStyle,
}) => (
  <Box
    key={style.type}
    sx={styles.container}
    className={`${selectedStyle === style.type && "border_linear"}`}
    onClick={() => setStyle(style.type)}
  >
    <Box sx={styles.contentBox}>{style.icon}</Box>
  </Box>
);

interface StyleCategoryProps {
  title: string;
  styles: { icon: React.ReactElement; type: string }[];
  selectedStyle: string;
  setStyle: React.Dispatch<React.SetStateAction<string>>;
}

const StyleCategory: React.FC<StyleCategoryProps> = ({
  title,
  styles,
  selectedStyle,
  setStyle,
}) => (
  <Box className="flex items-center gap-4">
    <Typography className="text-[13px] w-[100px]">{title} :</Typography>
    <Box className="flex gap-3">
      {styles.map((style, index) => (
        <StyleItem
          key={index}
          style={style}
          selectedStyle={selectedStyle}
          setStyle={setStyle}
        />
      ))}
    </Box>
  </Box>
);

interface PropsType {
  markerCenterColor: any;
  setMarkerCenterColor: React.Dispatch<React.SetStateAction<any>>;
  markerBorderColorType: string;
  setMarkerBorderColorType: React.Dispatch<React.SetStateAction<string>>;
  dotsColor: any;
  setDotsColor: React.Dispatch<React.SetStateAction<any>>;
  markerBorderColor: any;
  setMarkerBorderColor: React.Dispatch<React.SetStateAction<any>>;
  markerCenterColorType: any;
  setMarkerCenterColorType: React.Dispatch<React.SetStateAction<any>>;
  dotsStyle: string;
  setDotsStyle: React.Dispatch<React.SetStateAction<string>>;
  dotColorType: string;
  setDotColorType: React.Dispatch<React.SetStateAction<string>>;
  markerBorderStyle: string;
  setMarkerBorderStyle: React.Dispatch<React.SetStateAction<string>>;
  markerCenterStyle: string;
  setMarkerCenterStyle: React.Dispatch<React.SetStateAction<string>>;
}

const Style = (props: PropsType) => (
  <Box>
    <Box
      className="bg-white px-[10px] py-[15px] rounded-[5px]"
      // sx={{
      //   boxShadow:
      //     "0px 1px 3px 0px #0000001A, 0px 5px 12px 0px #00000021, 0px 0px 0.5px 0px #00000026",
      // }}
    >
      <StyleCategory
        title="Dots"
        styles={dotsVal}
        selectedStyle={props.dotsStyle}
        setStyle={props.setDotsStyle}
      />

      <Box className="flex items-center gap-4 pt-[15px]">
        <Typography className="text-[13px] w-[100px]">Color Type :</Typography>
        <Box className="flex gap-3">
          <FormControlLabel
            value="Single color"
            control={<Radio />}
            label="Single color"
            checked={props?.dotColorType === "singleColor"}
            onClick={() => props.setDotColorType("singleColor")}
          />
          <FormControlLabel
            value=" Color gradient"
            control={<Radio />}
            label=" Color gradient"
            checked={props?.dotColorType === "gradientColor"}
            onClick={() => props.setDotColorType("gradientColor")}
          />
        </Box>
      </Box>

      <Box className="flex items-center gap-4 pt-[10px]">
        <Typography className="text-[13px] w-[100px]">
          {props?.dotColorType === "gradientColor" ? " Gradient :" : " Color :"}
        </Typography>
        <Box className="flex gap-3">
          <input
            type="color"
            value={props.dotsColor?.color1}
            onChange={(e) =>
              props.setDotsColor((prevState: any) => ({
                ...prevState,
                color1: e.target.value,
              }))
            }
          />

          {props?.dotColorType === "gradientColor" && (
            <input
              type="color"
              value={props.dotsColor?.color2}
              onChange={(e) =>
                props.setDotsColor((prevState: any) => ({
                  ...prevState,
                  color2: e.target.value,
                }))
              }
            />
          )}
        </Box>
      </Box>
    </Box>
    <Box
      className="bg-white p-[10px] rounded-[5px] mt-5"
      // sx={{
      //   boxShadow:
      //     "0px 1px 3px 0px #0000001A, 0px 5px 12px 0px #00000021, 0px 0px 0.5px 0px #00000026",
      // }}
    >
      <StyleCategory
        title="Marker border"
        styles={markerBorderVal}
        selectedStyle={props.markerBorderStyle}
        setStyle={props.setMarkerBorderStyle}
      />

      <Box className="flex items-center gap-4 pt-[15px]">
        <Typography className="text-[13px] w-[100px]">Color Type :</Typography>
        <Box className="flex gap-3">
          <FormControlLabel
            value="Single color"
            control={<Radio />}
            label="Single color"
            checked={props?.markerBorderColorType === "singleColor"}
            onClick={() => props.setMarkerBorderColorType("singleColor")}
          />
          <FormControlLabel
            value=" Color gradient"
            control={<Radio />}
            label=" Color gradient"
            checked={props?.markerBorderColorType === "gradientColor"}
            onClick={() => props.setMarkerBorderColorType("gradientColor")}
          />
        </Box>
      </Box>

      <Box className="flex items-center gap-4 pt-[10px]">
        <Typography className="text-[13px] w-[100px]">
          {props?.markerBorderColorType === "gradientColor"
            ? "Gradient :"
            : "Color :"}
        </Typography>
        <Box className="flex gap-3">
          <input
            type="color"
            value={props?.markerBorderColor?.color1}
            onChange={(e) =>
              props.setMarkerBorderColor((prevState: any) => ({
                ...prevState,
                color1: e.target.value,
              }))
            }
          />

          {props?.markerBorderColorType === "gradientColor" && (
            <input
              type="color"
              value={props?.markerBorderColor?.color2}
              onChange={(e) =>
                props.setMarkerBorderColor((prevState: any) => ({
                  ...prevState,
                  color2: e.target.value,
                }))
              }
            />
          )}
        </Box>
      </Box>
    </Box>
    <Box
      className="bg-white p-[10px] rounded-[5px] mt-5"
      // sx={{
      //   boxShadow:
      //     "0px 1px 3px 0px #0000001A, 0px 5px 12px 0px #00000021, 0px 0px 0.5px 0px #00000026",
      // }}
    >
      <StyleCategory
        title="Marker center"
        styles={markerCenterVal}
        selectedStyle={props.markerCenterStyle}
        setStyle={props.setMarkerCenterStyle}
      />

      <Box className="flex items-center gap-4 pt-[15px]">
        <Typography className="text-[13px] w-[100px]">Color Type :</Typography>
        <Box className="flex gap-3">
          <FormControlLabel
            value="Single color"
            control={<Radio />}
            label="Single color"
            checked={props?.markerCenterColorType === "singleColor"}
            onClick={() => props.setMarkerCenterColorType("singleColor")}
            sx={{ fontSize: "14px" }}
          />
          <FormControlLabel
            value="Color gradient"
            control={<Radio />}
            label="Color gradient"
            checked={props?.markerCenterColorType === "gradientColor"}
            onClick={() => props.setMarkerCenterColorType("gradientColor")}
          />
        </Box>
      </Box>

      <Box className="flex items-center gap-4 pt-[10px]">
        <Typography className="text-[13px] w-[100px]">
          {props?.markerCenterColorType === "gradientColor"
            ? "Gradient :"
            : "Color :"}
        </Typography>
        <Box className="flex gap-3">
          <input
            type="color"
            value={props.markerCenterColor?.color1}
            onChange={(e) =>
              props.setMarkerCenterColor((prevState: any) => ({
                ...prevState,
                color1: e.target.value,
              }))
            }
          />

          {props?.markerCenterColorType === "gradientColor" && (
            <input
              type="color"
              value={props.markerCenterColor?.color2}
              onChange={(e) =>
                props.setMarkerCenterColor((prevState: any) => ({
                  ...prevState,
                  color2: e.target.value,
                }))
              }
            />
          )}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Style;
