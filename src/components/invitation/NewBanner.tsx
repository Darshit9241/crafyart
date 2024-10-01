import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface props {
  heading: any;
  text: any;
  path?: string;
}

export default function FreeTrialBlackBanner({ heading, text, path }: props) {
  return (
    <Box
      className="bg-cover bg-no-repeat py-14 px-4 main_bg"
      sx={{ backgroundImage: `url(/images/invitationImage/4.png)` }}
    >
      <Box className="flex flex-col items-center gap-8">
        {heading}
        <Box className="flex flex-col items-center gap-2 lg:w-[60%]">
          <Typography className="text-[15px] sm:text-[18px] font-bold text-[#2F1150] w-full text-center">
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
                backgroundColor: "#7F51F2",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              className="text-white py-2"
              style={{
                backgroundColor: "#7F51F2",
              }}
            >
              Create an invitation
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
              Create an invitation
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
}
