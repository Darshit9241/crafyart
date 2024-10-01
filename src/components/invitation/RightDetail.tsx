import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface RightDetailProps {
  title: string;
  point?: React.ReactNode;
  image: string;
  buttonName?: string;
  path?: string;
  alt: string;
}

export default function RightDetail({
  title,
  point,
  image,
  buttonName,
  path,
  alt,
}: RightDetailProps) {
  const router = useRouter();
  return (
    <Box className="flex py-[30px] sm:py-[50px] px-[20px] xl:px-[7%] w-full xl:w-[92%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
      <Box className="flex-1 flex justify-center max-lg:order-2 max-lg:w-[100%]">
        <Box className="w-[90%] flex flex-col gap-[20px] max-lg:w-[80%] max-sm:w-[100%]">
          <Typography
            className="text-[28px] font-semibold text-[#2F1150] max-lg:text-[22px] max-sm:text-center mt-5"
            variant="h2"
          >
            {title}
          </Typography>
          {point}
          <Button
            style={{
              background:
                "#7F51F2",
              width: "fit-content",
              textTransform: "unset",
              borderRadius: "5px",
              color: "white",
              fontWeight: "500",
              display: buttonName ? "block" : "none",
            }}
            className="bg_linear py-[7px] px-[20px] ml-[40px] max-lg:mx-auto text-[14px] 2sm:text-[17px] target=_blank"
            onClick={() => router.push(path || "")}
          >
            {buttonName}
          </Button>
        </Box>
      </Box>
      <Box className="flex-1 flex justify-center max-lg:pt-10">
        <img
          src={image}
          alt={alt}
          className="object-contain w-[545px] max-sm:w-[90%]"
        />
      </Box>
    </Box>
  );
}
