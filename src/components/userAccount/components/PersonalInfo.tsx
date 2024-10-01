import api from "@/src/clientApi/api";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { setPurchaseItems } from "@/src/redux/reducer/AuthDataReducer";
import { useDispatch } from "react-redux";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { consoleLog } from "@/src/commonFunction/console";
import { GetUserType, User } from "@/src/interface/user";
import DeleteAccount from "./DeleteAccount";

interface AccountDetailType {
  name: string | undefined;
  user_id: string | undefined;
  updateDp: number | any;
  photo_uri: string | any;
}

export default function PersonalInfo() {
  const dispatch = useDispatch();
  const uid = authCookiesGet();
  const [removeImage, setRemoveImage] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [imageBaseUrl, setImageBaseUrl] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [editNameInput, setEditNameInput] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [accountDetail, setAccountDetail] = useState<AccountDetailType>({
    name: "",
    user_id: "",
    updateDp: 0,
    photo_uri: null,
  });

  useEffect(() => {
    setAccountDetail({
      ...accountDetail,
      name: userProfile?.name,
      user_id: userProfile?.uid,
    });
  }, [userProfile]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file) {
        const imageUrl: string = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setAccountDetail({ ...accountDetail, photo_uri: file, updateDp: 1 });
      }
    }
  };

  const handleFileRemove = () => {
    setAccountDetail({ ...accountDetail, photo_uri: null, updateDp: 1 });
    setImagePreview("");
    setRemoveImage(true);
  };

  const fetchData = async () => {
    api
      .getUserData({ user_id: uid })
      .then((response: unknown) => {
        const res = response as GetUserType;

        const user = res?.user;
        const url = res?.url;
        const purData = res?.purDatas;

        dispatch(setPurchaseItems(purData));
        setImageBaseUrl(url);
        setUserProfile(user);
      })
      .catch((error) => {
        consoleLog("getUserData", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateFetchData = () => {
    setLoading(true);
    const sendData = {
      name: accountDetail?.name ?? "",
      updateDp: accountDetail.updateDp ?? "",
      photo_uri: accountDetail?.photo_uri ?? "",
    };

    setLoading(true);

    api
      .updateUser(sendData)
      .then(() => {
        setTimeout(() => {
          fetchData();
          toast.success("User updated successfully");
          window.location.reload();
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        consoleLog("updateUser: ", error);
        setLoading(false);
      });
  };

  return (
    <Box>
      <Typography variant="h1" className="font-semibold text-[24px]">
        Personal Info
      </Typography>

      <Box className="w-[60%] max-xl:w-full">
        <Box className="pt-[35px]">
          <Typography className="font-medium text-[16px] mb-2">
            Profile Photo
          </Typography>
          <Box
            className="flex justify-between items-end pb-4"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <Box
              style={{
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                overflow: "hidden",
              }}
            >
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Selected file preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
              {userProfile?.photo_uri !== "null" &&
              userProfile?.photo_uri &&
              !removeImage ? (
                userProfile?.photo_uri.includes("googleusercontent") ? (
                  <img
                    src={`${userProfile?.photo_uri}`}
                    alt="Selected file preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={`${imageBaseUrl}${userProfile?.photo_uri}`}
                    alt="Selected file preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )
              ) : (
                <div
                  style={{
                    background:
                      "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    fontSize: "30px",
                    textTransform: "capitalize",
                  }}
                >
                  {userProfile?.name?.charAt(0)}
                </div>
              )}
            </Box>

            <Box className="flex items-center gap-3">
              <Button
                className="h-[35px] normal-case px-[20px] text-black"
                onClick={handleFileRemove}
              >
                Remove
              </Button>

              <Button className="bg-[#E9EDF6] h-[35px] normal-case px-[20px] text-black">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="imageUpload">Change Photo</label>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box className="pt-[35px]">
          <Typography className="font-medium text-[16px] mb-2">Name</Typography>
          <Box
            className="flex justify-between items-end pb-4 gap-2"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <Box className="w-full">
              {editNameInput ? (
                <input
                  type="text"
                  className="w-full h-[40px] px-[10px] border_linear_1px rounded-[4px]"
                  placeholder="name"
                  value={accountDetail?.name}
                  onChange={(e) =>
                    setAccountDetail({
                      ...accountDetail,
                      name: e.target.value,
                    })
                  }
                  autoFocus={true}
                />
              ) : (
                <Typography>{accountDetail?.name}</Typography>
              )}
            </Box>

            {editNameInput ? (
              <Box className="flex items-center gap-2">
                <Button
                  className="bg-[#E9EDF6] h-[40px] normal-case px-[20px] text-black"
                  onClick={() => {
                    setEditNameInput(false);
                    setAccountDetail({
                      ...accountDetail,
                      name: userProfile?.name,
                    });
                  }}
                >
                  Cancel
                </Button>

                <Button
                  className="bg_linear h-[40px] normal-case px-[20px] text-white"
                  onClick={() => setEditNameInput(false)}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Button
                className="bg-[#E9EDF6] h-[40px] normal-case px-[20px] text-black"
                onClick={() => setEditNameInput(true)}
              >
                Edit
              </Button>
            )}
          </Box>
        </Box>

        <Box className="pt-[35px]">
          <Typography className="font-medium text-[16px] mb-2">
            Email Address
          </Typography>
          <Box
            className="flex justify-between items-end pb-4 gap-2"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            <Box className="w-full">
              <Typography className="opacity-[0.7] font-medium">
                {userProfile?.email}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="py-10 flex gap-4 justify-end max-2md:justify-center">
          <DeleteAccount />
          <Button
            className="bg_linear h-[40px] normal-case px-[80px] max-sm:w-[50%] text-white"
            onClick={updateFetchData}
          >
            Save
          </Button>
        </Box>
      </Box>

      {loading && (
        <main className="main">
          <span className="loader_span"></span>
        </main>
      )}
    </Box>
  );
}
