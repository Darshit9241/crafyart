import React from "react";
import Login from "@/src/components/auth/Login";
import SignUp from "@/src/components/auth/SignUp";
import { Box } from "@mui/material";

interface LoginButtonProps {
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  openSignUp: boolean;
  setOpenSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginButton({
  openLogin,
  setOpenLogin,
  openSignUp,
  setOpenSignUp,
}: LoginButtonProps) {
  return (
    <Box className="w-[auto] flex justify-end sm:gap-4 items-center">
      <Login
        setOpenSignUp={setOpenSignUp}
        openLogin={openLogin}
        openSignUp={openSignUp}
        setOpenLogin={setOpenLogin}
      />

      <Box className="max-sm:hidden">
        <SignUp
          setOpenLogin={setOpenLogin}
          openSignUp={openSignUp}
          openLogin={openLogin}
          setOpenSignUp={setOpenSignUp}
        />
      </Box>
    </Box>
  );
}
