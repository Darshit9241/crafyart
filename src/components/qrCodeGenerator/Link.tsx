import { Box, Typography } from "@mui/material";
import React from "react";

interface PropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  generateQRCode: Function;
}

export default function Link(props: PropsType) {
  return (
    <Box className="pt-[30px]">
      <Typography className="mb-2 text-[14px]">Enter or paste URL</Typography>

      <Box
        className="flex items-center"
        sx={{
          border: "1px solid #A5AAB5",
          backgroundColor: "#ffff",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          value={props?.value}
          placeholder="https://"
          style={{
            padding: "10px 20px",
            width: "100%",
            fontSize: "14px",
            borderRadius: "12px",
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props?.setValue(e.target.value);
          }}

          // onBlur={() => {
          //   if (props.value) {
          //     props?.generateQRCode();
          //   }
          // }}
          // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          //   if (e.key === "Enter") {
          //     if (props.value) {
          //       props?.generateQRCode();
          //     }
          //   }
          // }}
        />
      </Box>
    </Box>
  );
}
