import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { auth } from "@/src/firebase";
import {
  DeleteAccountOtpType,
  DeleteAccountType,
} from "@/src/interface/commonType";
import { RootState } from "@/src/redux";
import { removeCookie } from "@/src/redux/action/AuthToken";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import { getIdToken } from "@firebase/auth";
import { Button, Dialog, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function DeleteAccount() {
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDeleteBox, setOpenDeleteBox] = React.useState(false);
  const [optVal, setOptVal] = useState<string>("");
  const [isValidOpt, setIsValidOpt] = useState(false);
  const [userIdToken, setUserIdToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const userDatas = useSelector(
    (state: RootState) => state.auth.fEventUserData
  );

  useEffect(() => {
    const isValid = optVal.length === 6 && /^\d+$/.test(optVal);
    setIsValidOpt(isValid);
  }, [optVal]);

  const handleClickOpen = async () => {
    if (user && userDatas?.email) {
      setLoading(true);
      const idToken = await getIdToken(user, true);
      setUserIdToken(idToken);
      api
        .deleteAccountOtp({ mail: userDatas?.email })
        .then((res: unknown) => {
          const response = res as DeleteAccountOtpType;
          setLoading(false);
          if (response.type === "success") {
            setOpenDeleteBox(true);
          } else {
            toast.error(response.message);
          }
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Something went wrong");
          consoleLog("error: ", error);
        });
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleClose = () => {
    setOpenDeleteBox(false);
  };

  function deleteAcc() {
    setLoading(true);
    api
      .deleteAccount({
        otp: optVal,
        idToken: userIdToken,
      })
      .then((res: unknown) => {
        const response = res as DeleteAccountType;
        setLoading(false);
        if (!response.success) {
          toast.error(response.message);
        } else {
          toast.success(response.message);
          setOpenDeleteBox(false);
          localStorage.clear();
          dispatch(openSidebar(false));
          removeCookie("_sdf");
          removeCookie("premium");
          window.location.reload();
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setLoading(false);
        consoleLog("error: ", error);
      });
  }

  return (
    <div className="max-sm:w-[50%]">
      <Button
        className="bg-[#E9EDF6] text-[black] h-[40px] normal-case whitespace-nowrap px-[80px] max-sm:w-[100%] max-sm:px-[20px]"
        onClick={handleClickOpen}
      >
        Delete Account
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={openDeleteBox}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="py-[20px] px-[15px]">
          <h3 className="flex gap-[15px] font-semibold text-[25px]  pb-4">
            Are you sure you want to delete your account?
          </h3>

          <p className="pb-[15px]">
            After submitting this form, your account will be{" "}
            <span className="font-semibold">permanently deleted</span>
          </p>

          <p className="pb-[10px]">The following will be deleted as well:</p>

          <ul className="px-[30px] pb-[15px]">
            <li>• All created design</li>
            <li>• All uploaded media</li>
          </ul>

          <p className="pb-[15px]">
            Enter the code we just sent to{" "}
            <span className="font-semibold">{userDatas?.email}</span> if you
            want to proceed:
          </p>

          <input
            type="text"
            maxLength={6}
            placeholder="Enter code"
            style={{ border: "1px solid #D9D9D9" }}
            className="w-full p-[10px] rounded-[5px] mb-8"
            value={optVal}
            autoFocus={true}
            onChange={(e) => {
              if (/^\d+$/.test(e.target.value)) {
                setOptVal(e.target.value);
              }
            }}
          />

          <div
            className="flex justify-end gap-4 px-[15px]"
            style={{ paddingBottom: "0" }}
          >
            <Button
              className={`${"normal-case bg-[#E6E8EE] text-black px-[15px]"} `}
              onClick={() => setOpenDeleteBox(false)}
              style={{ height: "40px" }}
            >
              Cancel
            </Button>
            <Button
              className={`normal-case px-[15px]`}
              onClick={() => {
                if (isValidOpt) {
                  deleteAcc();
                }
              }}
              style={{
                height: "40px",
                backgroundColor: isValidOpt ? "#C70000" : "#E6E8EE",
                color: isValidOpt ? "white" : "grey",
                cursor: isValidOpt ? "pointer" : "not-allowed",
              }}
            >
              Delete permanently
            </Button>
          </div>
        </div>
      </Dialog>

      {loading && (
        <main className="main">
          <span className="loader_span"></span>
        </main>
      )}
    </div>
  );
}
