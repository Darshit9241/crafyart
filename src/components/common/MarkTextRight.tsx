import Icons from "@/src/assets";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function MarkTextRight(props: { text: string }) {
  return (
    <Box sx={{ display: "flex", gap: "10px", alignItems: "center", mb: "9px" }}>
      <Icons.rightMarkGreenIcon svgProps={{ width: 18 }} />
      <Typography
        sx={{ color: "#1C3048", opacity: 1 }}
        className="text-[15px] max-sm:text-[14px]"
      >
        {props?.text}
      </Typography>
    </Box>
  );
}
