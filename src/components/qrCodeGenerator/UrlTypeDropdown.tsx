import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const data = ["URL", "Contact", "Plain Text", "SMS", "Email", "Phone"];

export default function UrlTypeDropdown(props: {
  setUrlType: React.Dispatch<React.SetStateAction<string>>;
  urlType: string;
  setSelectTab: React.Dispatch<React.SetStateAction<string>>;
  selectTab: string;
  // handleClearState: Function;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    props.setSelectTab("");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={`w-[110px] normal-case px-[10px] rounded-[10px] whitespace-nowrap text-[14px] ${
          props.selectTab == ""
            ? "bg_linear text-[#fff]"
            : "bg-[#EFEFEF] text-[#A5AAB5]"
        }`}
      >
        {props?.urlType}

        <ArrowDropDownIcon className="ml-2" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data?.map((item) => (
          <MenuItem
            onClick={() => {
              // props.handleClearState();
              props.setUrlType(item);
              setAnchorEl(null);
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
