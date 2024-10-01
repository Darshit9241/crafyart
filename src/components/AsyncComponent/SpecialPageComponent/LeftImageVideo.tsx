import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type PropsType = {
  title: string;
  point?: React.ReactNode;
  buttonName?: string;
  path?: string | any;
  buttonSpace?: string;
  imageSection?: React.ReactNode;
};

export default function LeftImageVideo({
  title,
  point,
  buttonName,
  path,
  buttonSpace,
  imageSection,
}: PropsType) {
  return (
    <Box
      className={`flex py-[50px] w-full px-[20px] ${
        imageSection && "xl:px-[7%] xl:w-[92%]"
      } mx-auto max-w-[2400px] items-center lg:flex-row flex-col`}
    >
      <Box
        className="flex-1 justify-center"
        sx={{ display: imageSection ? "flex" : "none" }}
      >
        {imageSection}
      </Box>
      <Box className="flex-1 flex justify-center py-[30px] max-lg:pb-0 max-sm:mt-5 max-lg:w-[100%]">
        <Box className="w-[90%] flex flex-col gap-[20px] max-lg:w-[80%] max-sm:w-[100%]">
          {/* <Typography
            className="text-[28px] font-semibold text-black max-lg:text-[22px] max-sm:text-center"
            variant="h2"
          >
            {title}
          </Typography> */}

          <div
            style={{ textAlign: imageSection ? "left" : "center" }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>

          <div style={{ textAlign: imageSection ? "left" : "justify" }}>
            {point}
          </div>
          <div
            className={`flex ${
              !imageSection && "justify-center"
            } max-sm:justify-center`}
          >
            {path && (
              <Link href={path}>
                <Button
                  style={{
                    background:
                      "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                    width: "fit-content",
                    fontSize: "18px",
                    textTransform: "unset",
                    borderRadius: "5px",
                    fontWeight: "500",
                    color: "white",
                    padding: "8px 20px",
                    display: buttonName ? "block" : "none",
                    marginLeft: buttonSpace ?? "40px",
                  }}
                  className="bg_linear max-lg:mx-auto text-[14px] 2sm:text-[17px]"
                >
                  {buttonName}
                </Button>
              </Link>
            )}
          </div>
        </Box>
      </Box>
    </Box>
  );
}
