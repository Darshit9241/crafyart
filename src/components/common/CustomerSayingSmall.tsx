import React from "react";
import { Box, Rating, Typography } from "@mui/material";

export default function CustomerSayingSmall() {
  return (
    <Box className="pt-[70px] pb-[20px]  px-[20px]">
      <Typography
        variant="h2"
        className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-4 "
      >
        What are Customers Saying about Crafty Art
      </Typography>
      <Typography className="text-center">
        Crafty Art has a proven track record of delivering efficiency, results
        and excellent customer service.
      </Typography>

      <Box className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-between py-[30px] sm:py-[50px] w-full xl:w-[85%] mx-auto max-w-[2400px] items-center ">
        <Box
          className="w-full bg-[#F4F7FE] p-[30px] h-full "
          sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
        >
          <Box className="flex items-center space-x-4 mb-2">
            <Box
              className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
              sx={{
                backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/girl1.jpg)`,
              }}
            ></Box>
            <Box className="font-medium">
              <Box>Olivia Davis</Box>
            </Box>
          </Box>
          <Rating name="read-only" value={5} readOnly />
          <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
            “Crafty Art's custom invitations exceeded my expectations. Their
            user-friendly graphics design tools made it easy to create a unique
            design. The quality and design of invitation card was outstanding,
            and their customer service was top-notch. Quick delivery and
            attention to detail set Crafty Art apart. They made my event extra
            special!,”
          </Typography>
        </Box>
        <Box
          className="w-full bg-[#F4F7FE] p-[30px] h-full "
          sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
        >
          <Box className="flex items-center space-x-4 mb-2">
            <Box
              className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
              sx={{
                backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man3.jpg)`,
              }}
            ></Box>
            <Box className="font-medium  ">
              <Box>Ethan Wilson</Box>
            </Box>
          </Box>
          <Rating name="read-only" value={5} readOnly />
          <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
            “Crafty Art Graphic Design Tool has been a game-changer for my
            design projects. Here a reasons why Crafty Art has earned my trust
            and loyalty: User Feedback Integration, Cross-Platform
            Compatibility, Time-Saving Features, Regular Content Updates,
            Security and Privacy, Advanced Export Options and Many More…”
          </Typography>
        </Box>
        <Box
          className="w-full bg-[#F4F7FE] p-[30px] h-full "
          sx={{ boxShadow: "0px 0px 10px rgba(28, 48, 72, 0.20)" }}
        >
          <Box className="flex items-center space-x-4 mb-2">
            <Box
              className="w-12 h-12 rounded-full overflow-hidden bg-cover bg-center"
              sx={{
                backgroundImage: `url(https://assets.craftyart.in/w_assets/images/comment/man2.jpg)`,
              }}
            ></Box>
            <Box className="font-medium  ">
              <Box>James Johnson</Box>
            </Box>
          </Box>
          <Rating name="read-only" value={5} readOnly />
          <Typography className="text-[14px] 2sm:text-[16px] text-black my-4  min-h-[170px] ">
            “Crafty Art is a fantastic online caricature tool for creating
            unique invitations. Its user-friendly interface make easy to design
            personalized caricatures that bring fun and humor in to my event.
            With excellent customer support and quick delivery, I prefer to
            design Caricature invitations with Crafty Art!,”
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
