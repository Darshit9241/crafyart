import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Icons from "@/src/assets";
import { auth } from "@/src/firebase";
import { createUserApi } from "@/src/redux/action/AuthAction";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Input from "./Input";
import LoginPlatform from "./LoginPlatform";
import Password from "./Password";
import { mainLoad } from "@/src/redux/reducer/actionDataReducer";
import Link from "next/link";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { GetUserType } from "@/src/interface/user";

interface SignUpContentBoxProps {
  handleClose?: () => void;
  setOpenSignUp?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenLogin?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CreateAccount {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpContentBox(props: SignUpContentBoxProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [verifiedDone, setVerifiedDone] = useState<boolean>(false);
  const [emailDialogShow, setEmailDialogShow] = useState<boolean>(false);
  const [finalUser, setFinalUser] = useState<User | null>(null);

  const [agree, setAgree] = useState<boolean>(false);
  const [createAccount, setCreateAccount] = useState<CreateAccount>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    if (!currentUser?.emailVerified) {
      const interval = setInterval(() => {
        currentUser
          ?.reload()
          .then(() => {
            if (currentUser?.emailVerified) {
              setVerifiedDone(true);
              clearInterval(interval);
            }
          })
          .catch((err) => {
            consoleLog("emailVerified", err);
          });
      }, 1000);
    }
  }, [currentUser]);

  const handleSubmission = async () => {
    dispatch(mainLoad(true));

    if (
      !createAccount.name ||
      !createAccount.email ||
      !createAccount.password ||
      !createAccount.confirmPassword
    ) {
      toast.error("Please fill out all required fields.");
      dispatch(mainLoad(false));
      return;
    }

    if (!agree) {
      toast.error("Please agree to Crafty Art Term and Condition");
      dispatch(mainLoad(false));
      return;
    }

    if (createAccount?.password !== createAccount?.confirmPassword) {
      setCreateAccount({ ...createAccount, confirmPassword: "" });
      toast.error("Confirm password not match password");
      dispatch(mainLoad(false));
      return;
    }

    const data = await api.getUserData({ user_id: createAccount?.email });
    const user = (data as GetUserType)?.user;

    if (user) {
      toast.error(
        "User already registered. Please sign in to access your account."
      );
      dispatch(mainLoad(false));
      props?.setOpenSignUp && props?.setOpenSignUp(false);
      props?.setOpenLogin && props?.setOpenLogin(true);
      props?.setOpen && props?.setOpen(false);

      return;
    }

    createUserWithEmailAndPassword(
      auth,
      createAccount.email,
      createAccount.password
    )
      .then(async (res) => {
        const user = res?.user;
        updateProfile(user, {
          displayName: createAccount.name,
        });
        setFinalUser(user);
      })
      .then(() =>
        sendEmailVerification(auth.currentUser as User).then(async () => {
          toast.success(
            `A Verification email has been sent to ${createAccount.email}`
          );

          dispatch(mainLoad(false));
          setEmailDialogShow(true);
        })
      )
      .catch(async (error) => {
        toast.error(error?.code.split("auth/")[1]);
        dispatch(mainLoad(false));
      });
  };

  useEffect(() => {
    if (verifiedDone) {
      fetchData();
    }
  }, [verifiedDone, currentUser]);

  const fetchData = async () => {
    dispatch(
      createUserApi({
        user_id: finalUser?.uid ?? "",
        name: finalUser?.displayName ?? "",
        email: finalUser?.email ?? "",
        photo_uri: "",
        login_type: "email",
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmission();
    }
  };

  return (
    <div>
      {emailDialogShow ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            padding: "30px",
          }}
        >
          <Typography sx={{ fontSize: "23px" }}>
            Verify your Email Address
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              A Verification email has been sent to:
            </Typography>
            <Typography sx={{ fontSize: "15px", textAlign: "center" }}>
              {createAccount?.email}
            </Typography>
          </Box>

          <Typography
            sx={{ fontSize: "14px", textAlign: "center", opacity: "0.6" }}
          >
            Follow the instruction in the email to verify your account
          </Typography>
        </Box>
      ) : (
        <>
          <DialogTitle
            id="responsive-dialog-title"
            sx={{
              textAlign: "center",
              color: "#1C3048",
              fontWeight: "600",
              p: "35px  20px ",
            }}
            className="text-[24px] max-2sm:text-[18px]"
          >
            <Button
              onClick={props?.handleClose}
              className="min-w-[auto] relative left-[-20px]"
              sx={{ display: props?.handleClose ? "inline-block" : "none" }}
            >
              <Icons.leftArrowIcon />
            </Button>
            {"Create an Account"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{ color: "#1C3048", fontSize: "14px", textAlign: "center" }}
            >
              Sign up now and start your journey with Crafty Art (it's free)!
            </DialogContentText>
            <LoginPlatform />
            <Box className="flex items-center justify-between">
              <Box className="w-[45%] h-[1px] bg-[#ABB2C7]"></Box>
              <Typography className="text-black">or</Typography>
              <Box className="w-[45%] h-[1px] bg-[#ABB2C7]"></Box>
            </Box>

            <Box className="flex flex-col gap-4 my-5">
              <Input
                label="Name"
                value={createAccount?.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreateAccount({
                    ...createAccount,
                    name: e.target.value,
                  })
                }
              />
              <Input
                label="Email"
                value={createAccount?.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreateAccount({
                    ...createAccount,
                    email: e.target.value,
                  })
                }
              />
              <Password
                label="Password"
                value={createAccount?.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreateAccount({
                    ...createAccount,
                    password: e.target.value,
                  })
                }
              />
              <Password
                label="Confirm Password"
                value={createAccount?.confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCreateAccount({
                    ...createAccount,
                    confirmPassword: e.target.value,
                  })
                }
                onKeyDown={handleKeyDown}
              />
            </Box>

            <Box className="flex items-start mb-6">
              <Box className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={agree}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 text-[15px]"
                  required
                  onClick={() => setAgree(!agree)}
                />
              </Box>
              <label className="ml-2 text-sm font-medium text-gray-900  max-2sm:text-[12px]">
                I agree to CraftyArt's
                <span className="text-[#5961F8] cursor-pointer">
                  {" "}
                  <Link
                    prefetch={false}
                    href={"/term-condition"}
                    target="_blank"
                  >
                    Terms of Service
                  </Link>{" "}
                </span>
                and
                <span className="text-[#5961F8] cursor-pointer">
                  {" "}
                  <Link
                    prefetch={false}
                    href={"/privacy-policy"}
                    target="_blank"
                  >
                    Privacy policy
                  </Link>
                </span>
              </label>
            </Box>

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
              className="bg_linear  "
              onClick={handleSubmission}
            >
              Sign up
            </Button>

            <Typography className="text-black text-center my-2  max-2sm:text-[13px]">
              Already have an account?
              <span
                className="text-[#5961F8] cursor-pointer"
                onClick={() => {
                  if (
                    props?.setOpenSignUp &&
                    props?.setOpenLogin &&
                    props?.setOpen
                  ) {
                    props?.setOpenSignUp(false);
                    props?.setOpenLogin(true);
                    props?.setOpen && props?.setOpen(false);
                  } else router.push("/login");
                }}
              >
                {" "}
                Log in
              </span>
            </Typography>
          </DialogContent>
        </>
      )}
    </div>
  );
}
