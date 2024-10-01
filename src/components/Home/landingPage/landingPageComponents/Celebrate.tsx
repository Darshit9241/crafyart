import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";

export default function Celebrate() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (open) {
      timeoutId = setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [open]);
  return (
    <Box
      className="py-[70px] flex flex-col gap-20 max-lg:gap-5 items-center max-w-[2400px] mx-auto px-[20px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${assetsUrl}/landing-page/celebrateBackground.png)`,
      }}
    >
      <Box
        className="w-[80%]  py-5 rounded-[10px] bg-white flex  max-xl:w-[100%] max-lg:hidden"
        sx={{ boxShadow: "0px 0px 8px 4px rgba(28, 48, 72, 0.1)" }}
      >
        <Box className="w-[25%] justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            200 K+
          </Typography>
          <Typography className="text-[18px]  text-black text-center">
            Designer's time saving
          </Typography>
        </Box>
        <Box className="  w-[1px] bg_linear h-[100px] "></Box>
        <Box className="w-[25%] justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            1 M+
          </Typography>
          <Typography className="text-[18px]  text-black text-center">
            Monthly Designs Created
          </Typography>
        </Box>
        <Box className="  w-[1px] bg_linear h-[100px] "></Box>
        <Box className="w-[25%] justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            500 K+
          </Typography>
          <Typography className="text-[18px]  text-black">Users</Typography>
        </Box>
        <Box className="  w-[1px] bg_linear h-[100px] "></Box>
        <Box className="w-[25%] justify-center items-center flex flex-col">
          <Typography className="text-[40px] font-bold text-black">
            200 K+
          </Typography>
          <Typography className="text-[18px]  text-black text-center">
            Invitation created every month
          </Typography>
        </Box>
      </Box>
      <Box className="   gap-[25px] w-[100%] max-sm:flex-col hidden max-lg:flex ">
        <Box
          className="w-[50%] max-sm:w-full py-5 rounded-[10px] bg-white   flex  "
          sx={{ boxShadow: "0px 0px 8px 4px rgba(28, 48, 72, 0.1)" }}
        >
          <Box className="w-[100%] justify-center items-center flex flex-col">
            <Typography className="text-[30px] sm:text-[40px] font-bold text-black ">
              200 K+
            </Typography>
            <Typography className="text-[16px] sm:text-[18px]  text-black text-center px-2">
              Designer's time saving
            </Typography>
          </Box>
        </Box>
        <Box
          className="w-[50%] max-sm:w-full py-5 rounded-[10px] bg-white  flex"
          sx={{ boxShadow: "0px 0px 8px 4px rgba(28, 48, 72, 0.1)" }}
        >
          <Box className="w-[100%] justify-center items-center flex flex-col">
            <Typography className="text-[30px] sm:text-[40px] font-bold text-black ">
              1 M+
            </Typography>
            <Typography className="text-[16px] sm:text-[18px]  text-black text-center px-2">
              Monthly Designs Created
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="   gap-[25px] w-[100%] max-sm:flex-col hidden max-lg:flex ">
        <Box
          className="w-[50%] max-sm:w-full py-5 rounded-[10px] bg-white flex "
          sx={{ boxShadow: "0px 0px 8px 4px rgba(28, 48, 72, 0.1)" }}
        >
          <Box className="w-[100%] justify-center items-center flex flex-col">
            <Typography className="text-[30px] sm:text-[40px] font-bold text-black ">
              500 K+
            </Typography>
            <Typography className="text-[16px] sm:text-[18px]  text-black text-center px-2">
              Users
            </Typography>
          </Box>
        </Box>
        <Box
          className="w-[50%] max-sm:w-full py-5 rounded-[10px] bg-white flex"
          sx={{ boxShadow: "0px 0px 8px 4px rgba(28, 48, 72, 0.1)" }}
        >
          <Box className="w-[100%] justify-center items-center flex flex-col">
            <Typography className="text-[30px] sm:text-[40px] font-bold text-black ">
              200 K+
            </Typography>
            <Typography className="text-[16px] sm:text-[18px]  text-black text-center px-2">
              Invitation created every month
            </Typography>
          </Box>
        </Box>
      </Box>

      <Button
        style={{
          background:
            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
          width: "fit-content",
          fontSize: "17px",
          textTransform: "unset",
          borderRadius: "5px",
          fontWeight: "500",
          color: "white",
        }}
        className="bg_linear py-[7px] px-[40px] max-lg:mt-10 ring-out"
        onClick={() => setOpen(true)}
      >
        {"Celebrate with us"}
      </Button>

      {open && (
        <Iframe
          url="./data.html"
          height="auto"
          className="absolute h-[500px] top-[-50px] bottom-0 left-0 right-0 w-[1800px] max-lg:top-0 max-lg:left-[-500px] max-sm:left-[-700px] max-sm:bottom-[-200px] max-sm:h-[600px]"
        />
      )}
    </Box>
  );
}
