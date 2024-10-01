import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface props {
  heading: string;
  text: string;
  path?: string;
}

export default function FreeTrialBlackBanner({ heading, text, path }: props) {
  return (
    <Box className="bg-[url('https://assets.craftyart.in/w_assets/images/invitationBanner.png')] bg-cover bg-no-repeat py-14 px-4">
      <Box className="flex flex-col items-center gap-8">
        <Typography
          className="text-[28px] sm:text-[47px] font-bold	text-white w-full lg:w-[60%] text-center"
          variant="h1"
        >
          {heading}
        </Typography>
        <Box className="flex flex-col items-center gap-2 lg:w-[60%]">
          <Typography className="text-[15px] sm:text-[18px] font-medium	text-white w-full text-center">
            {text}
          </Typography>
        </Box>

        {path ? (
          <Link prefetch={false} href={path}>
            <Button
              sx={{
                textTransform: "unset",
                fontSize: "14px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                opacity: "1",
                width: "180px",
                backgroundColor: "white",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              className="bg-white text-black py-2"
            >
              Start a free trial
            </Button>
          </Link>
        ) : (
          <Link prefetch={false} href={"/"}>
            <Button
              sx={{
                textTransform: "unset",
                fontSize: "14px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                opacity: "1",
                width: "180px",
                backgroundColor: "white",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              className="bg-white text-black py-2"
            >
              Start a free trial
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}
