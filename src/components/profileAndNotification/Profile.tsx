import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { GetUserType, User } from "@/src/interface/user";
import {
  authCookiesGet,
  removeCookie,
  userPremium,
} from "@/src/redux/action/AuthToken";
import {
  customerId,
  fEventUserData,
  setPurchaseItems,
  userData,
} from "@/src/redux/reducer/AuthDataReducer";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import { Box, Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Profile() {
  const router = useRouter();
  const uid = authCookiesGet();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [imageBaseUrl, setImageBaseUrl] = useState<string | null>(null);

  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    api
      .getUserData({ user_id: uid })
      .then((response: unknown) => {
        const res = response as GetUserType;

        const user = res?.user;
        const url = res?.url;
        const purData = res?.purDatas;

        const photoUri = user?.photo_uri
          ? user?.photo_uri.includes("googleusercontent")
            ? user?.photo_uri
            : `${url}${user?.photo_uri}`
          : null;
        dispatch(setPurchaseItems(purData));
        userPremium(`${user?.is_premium}`);
        dispatch(userData(user));
        dispatch(
          fEventUserData({
            name: user?.name,
            id: user?.uid,
            number: user?.number,
            email: user?.email,
            photo_uri: photoUri,
          })
        );
        setImageBaseUrl(url);
        setUserProfile(user);
        dispatch(customerId(user?.stripe_cus_id));
      })
      .catch((error) => {
        consoleLog("getUserData: ", error);
      });
  }, []);

  const ProfileImage = () => {
    const hasPhotoUri =
      userProfile?.photo_uri && userProfile?.photo_uri !== "null";
    const photoUri =
      hasPhotoUri && userProfile?.photo_uri.includes("googleusercontent")
        ? userProfile?.photo_uri
        : `${imageBaseUrl}${userProfile?.photo_uri}`;

    if (hasPhotoUri) {
      return (
        <img
          src={photoUri}
          alt="Selected file preview"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      );
    } else {
      return (
        <p
          style={{
            background:
              "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            fontSize: "23px",
            textTransform: "capitalize",
          }}
        >
          {userProfile?.name?.charAt(0)}
        </p>
      );
    }
  };

  return (
    <>
      <Box className="flex items-center">
        <Box onClick={handleClick} className="cursor-pointer">
          <Box className="rounded-[50%] w-[40px] h-[40px] overflow-hidden">
            <ProfileImage />
          </Box>
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            padding: "10px 30px",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              overflow: "hidden",
            }}
          >
            <ProfileImage />
          </div>
          <div>
            <h4 className="mb-0">
              {userProfile?.name || userProfile?.displayName}
            </h4>
            <p
              style={{
                fontSize: "13px",
                opacity: "0.7",
                maxWidth: "173px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                marginBottom: "0",
              }}
            >
              {userProfile?.email}
            </p>
          </div>
        </Box>

        <Divider />
        <MenuItem
          className="text-[14px] mt-2"
          onClick={() => {
            router.push("/your-account");
            setAnchorEl(null);
          }}
        >
          My Account
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            dispatch(openSidebar(false));
            removeCookie("_sdf");
            removeCookie("premium");
            window.location.reload();
          }}
          className="text-[14px] "
        >
          Sign Out
        </MenuItem>
      </Menu>
    </>
  );
}
