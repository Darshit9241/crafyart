import api from "@/src/clientApi/api";
import { auth } from "@/src/firebase";
import { authCookiesSet } from "@/src/redux/action/AuthToken";
import { mainLoad } from "@/src/redux/reducer/actionDataReducer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  Box,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  UserCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Input from "./Input";
import Password from "./Password";
import { consoleLog } from "@/src/commonFunction/console";
import { GetUserType } from "@/src/interface/user";

interface ForgotPassProps {
  setForgot: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ForgotPass(props: ForgotPassProps) {
  const dispatch = useDispatch();
  const [enterNewPass, setEnterNewPass] = useState<boolean>(false);
  const [emailPassword, setEmailPassword] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [emailDialogShow, setEmailDialogShow] = useState<boolean>(false);

  const handleResetPassSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(mainLoad(true));

    if (!emailPassword.email) {
      toast.error("Please fill out all required fields.");
      dispatch(mainLoad(false));
      return;
    }

    const data = await api.getUserData({ user_id: emailPassword.email });
    const user = (data as GetUserType)?.user;

    if (!user) {
      toast.error("User not found.");
      dispatch(mainLoad(false));
      return;
    }

    sendPasswordResetEmail(auth, emailPassword.email)
      .then(() => {
        setEnterNewPass(true);
        toast.success("Password reset email sent.");
        setEmailDialogShow(true);
        dispatch(mainLoad(false));
      })
      .catch((error) => {
        consoleLog("sendPasswordResetEmail: ", error);
        toast.error(error.message);
        dispatch(mainLoad(false));
      });
  };

  const handleSignIn = async () => {
    dispatch(mainLoad(true));
    if (!emailPassword.email || !emailPassword.password) {
      toast.error("Please fill out all required fields.");
      dispatch(mainLoad(false));
      return;
    }

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        emailPassword.email,
        emailPassword.password
      );

      toast.success("Success Login");
      authCookiesSet(userCredential.user?.uid || "");

      setTimeout(() => {
        window.location.reload();
      }, 100);
      dispatch(mainLoad(false));
    } catch (error: any) {
      consoleLog("signInWithEmailAndPassword: ", error);
      dispatch(mainLoad(false));
      toast.error(error?.code.split("auth/")[1]);
    }
  };

  return (
    <div>
      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          textAlign: "center",
          color: "#1C3048",
          fontWeight: "600",
          p: "35px 30px 5px ",
          fontSize: "24px",
        }}
        className=" max-2sm:text-[18px]"
      >
        {emailDialogShow
          ? "Login With Your New Password"
          : "Forgot your password?"}
      </DialogTitle>

      {emailDialogShow && (
        <div>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            A Verification Reset Password has been sent to:
          </Typography>
          <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
            {emailPassword.email}
          </Typography>
        </div>
      )}

      <DialogContent sx={{ padding: emailDialogShow ? "0 35px 35px" : "35px" }}>
        {emailDialogShow ? (
          <DialogContentText
            sx={{
              color: "#1C3048",
              fontSize: "13px",
              textAlign: "center",
              maxWidth: "350px",
              marginBottom: "20px",
            }}
          >
            <Typography sx={{ opacity: "0.7", textAlign: "center", mt: 2 }}>
              Check your email <strong>{emailPassword.email}</strong> and create
              a new password and enter that password here
            </Typography>
          </DialogContentText>
        ) : (
          <DialogContentText
            sx={{
              color: "#1C3048",
              fontSize: "13px",
              textAlign: "center",
              maxWidth: "350px",
            }}
          >
            Just give us the email address you used to create your account and
            we will send you reset instructions.
          </DialogContentText>
        )}
        <Box className="flex flex-col gap-4 my-5">
          {emailDialogShow ? (
            <Password
              label="New Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmailPassword({
                  ...emailPassword,
                  password: e.target.value,
                })
              }
            />
          ) : (
            <Input
              label="Email"
              value={emailPassword.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmailPassword({
                  ...emailPassword,
                  email: e.target.value,
                })
              }
            />
          )}
        </Box>

        {enterNewPass ? (
          <Button
            sx={{
              textTransform: "unset",
              fontSize: "14px",
              fontWeight: "400",
              color: "white",
              whiteSpace: "nowrap",
              opacity: "1",
              width: "100%",
              borderRadius: "8px",
              padding: "12px 10px",
            }}
            className="bg_linear"
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        ) : (
          <Button
            sx={{
              textTransform: "unset",
              fontSize: "14px",
              fontWeight: "400",
              color: "white",
              whiteSpace: "nowrap",
              opacity: "1",
              width: "100%",
              borderRadius: "8px",
              padding: "12px 10px",
            }}
            className="bg_linear"
            onClick={handleResetPassSubmit}
          >
            Send email
          </Button>
        )}

        {emailDialogShow && (
          <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
            Didn’t receive the email?
            <span
              className="text-[#5961F8] cursor-pointer"
              onClick={handleResetPassSubmit}
            >
              {" "}
              Click to resend
            </span>
          </Typography>
        )}

        <Box className="flex justify-center mt-2">
          <Button
            className="gap-2 flex text-[#000] normal-case"
            onClick={() => props?.setForgot(false)}
          >
            <KeyboardBackspaceIcon />
            Back to log in
          </Button>
        </Box>
      </DialogContent>
    </div>
  );
}
