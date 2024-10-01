import React, { useState, useEffect } from "react";
import { Button, Dialog, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginContentBox from "./authComponents/LoginContentBox";
import ForgotPass from "./authComponents/ForgotPass";
import { useDispatch } from "react-redux";
import { openLogin } from "@/src/redux/reducer/actionDataReducer";
import { useRouter } from "next/navigation";

interface LoginProps {
  openLogin: boolean;
  openSignUp: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  width?: boolean;
}

export default function Login(props: LoginProps) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const router = useRouter();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(openLogin(false));
    props?.setOpenLogin(false);
  };

  useEffect(() => {
    setOpen(props?.openLogin);
  }, [props?.openLogin]);

  useEffect(() => {
    const htmlStyleElement = document.getElementById("html_style");

    if (htmlStyleElement) {
      if (open) {
        htmlStyleElement.style.overflow = "hidden";
      } else if (!props?.openSignUp) {
        htmlStyleElement.style.overflow = "auto";
      }
    }
  }, [open]);

  return (
    <div className="w-full">
      <Button
        sx={{
          textTransform: "unset",
          fontSize: "14px",
          fontWeight: "400",
          color: "#1C3048",
          whiteSpace: "nowrap",
          opacity: "1",
          backgroundColor: "#F4F7FE !important",
          borderRadius: "6px",
          px: 2,
        }}
        className={`sm:flex hidden ${props?.width && "w-[100%]"}`}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Button
        sx={{
          textTransform: "unset",
          fontSize: "14px",
          fontWeight: "400",
          color: "white",
          whiteSpace: "nowrap",
          opacity: "1",
          px: 2,
          borderRadius: "6px",
        }}
        className={`flex sm:hidden ${
          props?.width
            ? "bg-[#F4F7FE] w-full text-black"
            : "bg_linear text-white"
        }`}
        onClick={handleClickOpen}
      >
        Login
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {forgot ? (
          <ForgotPass setForgot={setForgot} />
        ) : (
          <LoginContentBox
            setOpenLogin={props?.setOpenLogin}
            setOpenSignUp={props?.setOpenSignUp}
            handleClose={handleClose}
            setOpen={setOpen}
            setForgot={setForgot}
          />
        )}
      </Dialog>
    </div>
  );
}
