import Icons from "@/src/assets";
import { Box, Button, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CustomSize() {
  const editorUrl = process.env.NEXT_PUBLIC_EDITOR;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [height, setHeight] = useState<number | any>(0);
  const [width, setWidth] = useState<number | any>(0);
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(false);
  const [enterHeight, setEnterHeight] = useState<number | any>(0);
  const [enterWidth, setEnterWidth] = useState<number | any>(0);
  const [focus, setFocus] = useState<boolean>(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<any> | any) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (lockAspectRatio) {
      setHeight((enterWidth * 1.018).toFixed());
    }
  }, [enterWidth, lockAspectRatio]);

  useEffect(() => {
    if (lockAspectRatio) {
      setWidth((enterHeight / 1.018).toFixed());
    }
  }, [enterHeight, lockAspectRatio]);

  const [base64String, setBase64String] = useState("");

  useEffect(() => {
    const jsonString = JSON.stringify({ w: width, h: height });

    const encodedString = btoa(jsonString);

    setBase64String(encodedString);
  }, [width, height]);

  useEffect(() => {
    if (focus) {
      document.getElementById("heightInput")?.focus();
      setFocus(false);
    }
  }, [focus]);

  return (
    <Box>
      <Button
        onClick={handleClick}
        className="bg-[#1C304833] text-white normal-case px-[20px]"
      >
        Custom size
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(e: React.KeyboardEvent<any>) => {
          if (e.key === "Tab") {
            e.preventDefault();
          } else setAnchorEl(null);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box>
          <Typography
            className="font-medium py-3 px-[20px]"
            sx={{ borderBottom: "1px solid #D9D9D9" }}
          >
            Enter custom size
          </Typography>

          <Box className="flex py-3 px-[20px] gap-4 items-end">
            <Box className="flex-1">
              <Typography className="mb-2">Width</Typography>
              <input
                type="number"
                value={width}
                min={40}
                max={2000}
                style={{ border: "1px solid  #D9D9D9" }}
                className="max-w-[120px] px-3 py-2 rounded-[4px]"
                onChange={(e) => {
                  setWidth(e.target.value);
                  setEnterWidth(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Tab") {
                    e.preventDefault();
                    setFocus(true);
                  }
                }}
              />
            </Box>

            <Box className="flex-1">
              <Typography className="mb-2">Height</Typography>
              <input
                type="number"
                id="heightInput"
                value={height}
                style={{ border: "1px solid  #D9D9D9" }}
                className="max-w-[120px] px-3 py-2 rounded-[4px]"
                onChange={(e) => {
                  setHeight(e.target.value);
                  setEnterHeight(e.target.value);
                }}
              />
            </Box>

            <Box
              style={{ border: "1px solid  #D9D9D9" }}
              className="max-w-[120px] min-w-[70px] px-3 py-2 rounded-[4px] flex justify-center items-center"
            >
              px
            </Box>
            {/* <CustomizedMenus value={selectedUnit} setValue={setSelectedUnit} /> */}
            <Box>
              <Button
                className="p-[12px]"
                onClick={() => setLockAspectRatio(!lockAspectRatio)}
              >
                {lockAspectRatio ? <Icons.lockIcon /> : <Icons.unLockIcon />}
              </Button>
            </Box>
          </Box>
          <Box className="py-3 px-[20px]">
            <Button
              className="bg_linear text-white w-full py-2 normal-case text-[16px]"
              onClick={() => {
                if (
                  height < 40 ||
                  height > 2000 ||
                  width < 40 ||
                  width > 2000
                ) {
                  toast.error(
                    "screenHeight and screenWidth must be between 40 and 2000."
                  );
                } else window.open(`${editorUrl}${base64String}`);
              }}
            >
              Create new design
            </Button>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}
