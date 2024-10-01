import Icons from "@/src/assets";
import { auth } from "@/src/firebase";
import { createUserApi } from "@/src/redux/action/AuthAction";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "@firebase/auth";
import { Box, Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const provider = new GoogleAuthProvider();

interface LoginButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const LoginButton = (props: LoginButtonProps) => {
  return (
    <Button
      sx={{
        display: "flex",
        gap: "18px",
        color: "#1C3048",
        textTransform: "unset",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F4F7FE !important",
        boxShadow: "0px 0px 3px 1px rgba(28, 48, 72, 0.15)",
        borderRadius: "10px",
        padding: "9px",
      }}
      className="text-[16px] max-2sm:text-[12px]"
      {...props}
    >
      {props?.children}
    </Button>
  );
};

export default function LoginPlatform() {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((data: UserCredential) => {
      const userData = data?.user;

      dispatch(
        createUserApi({
          name: userData?.displayName ?? "",
          email: userData?.email ?? "",
          photo_uri: userData?.photoURL ?? "",
          user_id: userData?.uid,
          login_type: "google",
        })
      );
    });
  };

  return (
    <Box className="flex flex-col gap-4 my-5">
      <LoginButton onClick={handleGoogleLogin}>
        <Icons.googleIcon />
        Continue with Google
      </LoginButton>
    </Box>
  );
}
