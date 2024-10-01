import Icons from "@/src/assets";
import { Box, Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import React, { useRef, useState } from "react";

export default function UploadButton() {
  const fileInputRef: React.RefObject<HTMLInputElement> | any = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    if (event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        className="bg-[#1C304833] text-white normal-case px-[20px]"
      >
        Upload
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box className="max-w-[500px]">
          <Typography
            className="font-medium py-3 px-[20px]"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            Start from designs
          </Typography>

          <Typography className="px-[20px] pt-3">
            Begin by selecting a file and uploading your personal photos or
            videos to use. Our system will convert them into a customizable
            format that you can edit, resize and collaborate on.
          </Typography>

          <Box className="flex-1 max-md:w-full px-[20px]">
            <div
              className=" mt-[20px] mx-auto flex gap-[15px] flex-col justify-center items-center py-[20px] rounded-[5px] "
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              style={{
                border: isDragOver ? "1px dashed black" : "1px dashed #ABB2C7",
                display: selectedFile ? "none" : "flex",
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <Icons.uploadIcon />

              <div>
                <p className="text-center text-[14px]">
                  Drag your file here or
                </p>
              </div>

              <button
                onClick={handleButtonClick}
                className="bg-[#E6E8EE] flex gap-3 items-center px-[50px] py-[10px] rounded-[5px] mb-3"
              >
                <Icons.uploadSmallIcon /> Upload Image
              </button>
            </div>

            <div className="my-4">
              <Typography className="text-center ">
                Crafty Art supports image, videos and files
              </Typography>
            </div>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}
