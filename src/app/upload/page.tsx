"use client";
import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import Audio from "@/src/components/upload/Audio";
import Image from "@/src/components/upload/Image";
import Sticker from "@/src/components/upload/Sticker";
import Video from "@/src/components/upload/Video";
import { GetDraftApiDataType } from "@/src/interface/commonType";
import { uploadRemoveId } from "@/src/redux/reducer/actionDataReducer";
import { Button, useMediaQuery } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const uploadType = ["Image", "Video", "Audio", "Sticker", "GIF"];

export default function index() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [uploadData, setUploadData] = useState<any | null>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedTabType, setSelectedTabType] = useState<string>("Image");
  const [openDeleteBox, setOpenDeleteBox] = React.useState(false);
  const [dataLoad, setDataLoad] = useState<boolean>(true);

  const handleClickOpen = () => {
    setOpenDeleteBox(true);
  };

  const handleDelete = (id: any) => {
    api
      .uploadAction({
        type: "0",
        id: id,
      })
      .then((res) => {
        toast.success("Moved to trash");
        dispatch(uploadRemoveId(id));
      })
      .catch((err) => {
        consoleLog("err: ", err);
      });
  };

  const handleClose = () => {
    setOpenDeleteBox(false);
  };

  useEffect(() => {
    api
      .getUploadData({
        type: "0",
        asset_type: 3,
        page: 1,
      })
      .then((response: unknown) => {
        const res = response as GetDraftApiDataType;
        setDataLoad(false);
        setUploadData(res?.datas);
      })
      .catch((err) => {
        consoleLog("getUploadData: ", err);
        setDataLoad(false);
      });
  }, []);

  return (
    <div className="px-[15px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[32px] font-medium p-[10px]">Upload</h1>

        <div style={{ display: selectedItems?.length > 0 ? "block" : "none" }}>
          <button
            className="flex bg-[#E9EDF6] px-[15px] py-[5px] items-center rounded-[4px] gap-2"
            onClick={handleClickOpen}
          >
            <Icons.DeleteIcon svgProps={{ width: 20 }} /> Delete
          </button>
        </div>
      </div>

      <div className="flex gap-2 py-5 pl-3">
        {uploadType?.map((item) => (
          <Button
            onClick={() => {
              setSelectedTabType(item);
            }}
            className={`text-[black] normal-case px-[20px] ${
              selectedTabType === item ? "border_linear" : "border_grey"
            } `}
          >
            {item}
          </Button>
        ))}
      </div>

      {selectedTabType === "Image" && (
        <Image
          data={uploadData?.image}
          dataLoad={dataLoad}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}

      {selectedTabType === "Video" && (
        <Video
          data={uploadData?.video}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}

      {selectedTabType === "GIF" && (
        <Video
          data={uploadData?.gif}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}

      {selectedTabType === "Audio" && (
        <Audio
          data={uploadData?.audio}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}

      {selectedTabType === "Sticker" && (
        <Sticker
          data={uploadData?.svg}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}

      <Dialog
        fullScreen={fullScreen}
        open={openDeleteBox}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="py-[20px]">
          <h3 className="flex gap-[15px] font-semibold  px-[15px] text-[25px] pb-4">
            Delete permanently?
          </h3>

          <p className="px-[15px] pb-[35px]">
            You're about to delete this design permanently. This can't be
            undone.
          </p>

          <div className="button_tabs" style={{ paddingBottom: "0" }}>
            <button
              className={`${"text_style"}`}
              onClick={() => setOpenDeleteBox(false)}
              style={{ height: "40px" }}
            >
              Cancel
            </button>
            <button
              className={`font bg_change_red`}
              onClick={() => {
                setOpenDeleteBox(false);
                handleDelete(selectedItems);
              }}
              style={{ height: "40px" }}
            >
              Delete permanently
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
