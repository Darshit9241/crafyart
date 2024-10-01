"use client";
import Icons from "@/src/assets";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ForgotPass = dynamic(
  () => import("@/src/components/auth/authComponents/ForgotPass")
);
const LoginContentBox = dynamic(
  () => import("@/src/components/auth/authComponents/LoginContentBox")
);

export default function index() {
  const router = useRouter();
  const userLoginStatus = authCookiesGet();
  const [forgot, setForgot] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (userLoginStatus) {
      router.push("/");
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [userLoginStatus]);

  return (
    <Box>
      {loading ? (
        <>
          <main className="main bg-white">
            <span className="loader_span"></span>
          </main>
        </>
      ) : (
        <Box
          className="fixed top-0 left-0 right-0 bottom-0 bg-[#fff] z-[10002] bg-cover bg-left flex items-center"
          style={{
            backgroundImage:
              "url(https://assets.craftyart.in/w_assets/images/loginBanner.png)",
          }}
        >
          <Box
            className="bg-white max-sm:mx-auto w-[95%] sm:w-[450px] sm:ml-[100px] rounded-[10px]"
            sx={{ boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.10)" }}
          >
            {forgot ? (
              <ForgotPass setForgot={setForgot} />
            ) : (
              <LoginContentBox setForgot={setForgot} />
            )}
          </Box>

          <Box className="mx-[50px] w-[450px] max-md:hidden">
            <h1 className="text-[38px] font-[700] text-[#ffff] mb-5">
              Welcome to a World of Creative Designs!
            </h1>

            <Box className="flex gap-3 items-start mb-2">
              <Icons.setting1Icon svgProps={{ width: 20 }} />
              <p className="text-[#fff]">All in One Graphic Design Tool</p>
            </Box>
            <Box className="flex gap-3 items-start mb-2">
              <Icons.penToolIcon svgProps={{ width: 20 }} />
              <p className="text-[#fff]">
                Discover Limitless Possibilities with Crafty Art Graphic Design
                Tool
              </p>
            </Box>

            <Box className="flex gap-3 items-start mb-2">
              <Icons.customization1Icon svgProps={{ width: 20 }} />
              <p className="text-[#fff]">Ready To Use Customizable Templates</p>
            </Box>

            <Box className="flex gap-3 items-start mb-2">
              <Icons.dragAndDropIcon svgProps={{ width: 20 }} />
              <p className="text-[#fff]">
                User Friendly Drag-and-Drop Interface
              </p>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
