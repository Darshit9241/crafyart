import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

type PropsType = {
  title?: string;
  point?: React.ReactNode;
  image?: string;
  buttonName?: string;
  alt?: string;
  path?: string | any;
  buttonSpace?: string;
};

export default function LeftImageSection({
  title,
  point,
  image,
  buttonName,
  path,
  alt,
  buttonSpace,
}: PropsType) {
  return (
    <Box className="flex py-[50px]  px-[20px] xl:px-[7%] w-full  xl:w-[92%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
      <Box className="flex-1 flex justify-center">
        <img
          src={image}
          alt={alt}
          className="object-contain w-[500px] max-sm:w-[90%] "
        />
      </Box>
      <Box className="flex-1 flex justify-center py-[30px]  max-lg:pb-0  max-lg:w-[100%]">
        <Box className="w-[90%] flex  flex-col gap-[20px]   max-lg:w-[8 0%] max-sm:w-[100%]">
          <Typography
            className="text-[28px] font-semibold text-black max-lg:text-[22px]  max-sm:text-center"
            variant="h2"
          >
            {title}
          </Typography>
          {point}

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
            {path ? <Link href={path}>{buttonName}</Link> : ""}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
