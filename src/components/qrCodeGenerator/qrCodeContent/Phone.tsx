import { Box, Typography } from "@mui/material";
import React from "react";

export default function Phone(props: { phone: any; setPhone: any }) {
  return (
    <Box className="pt-[30px]">
      <Typography className="mb-2 text-[14px]">Phone number</Typography>

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
          type="number"
          value={props?.phone}
          placeholder=""
          style={{
            padding: "10px 20px",
            width: "100%",
            fontSize: "14px",
            borderRadius: "12px",
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props?.setPhone(e.target.value);
          }}
        />
      </Box>
    </Box>
  );
}
