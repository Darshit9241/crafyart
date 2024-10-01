import { Box, Typography } from "@mui/material";
import React from "react";

export default function PlanIconsText(props: { text: string; image: string }) {
  return (
    <Box className="flex items-center w-[33%] max-sm:w-[98%] mb-8 gap-2 max-sm:pl-[20px]">
      <img src={props?.image} alt={props?.text} className="w-[30px]" />

      <Typography className="mt-[3px]">{props?.text}</Typography>
    </Box>
  );
}
