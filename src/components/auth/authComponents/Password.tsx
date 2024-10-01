import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { ChangeEvent } from "react";

interface PasswordProps {
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Password(props: PasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {props?.label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        sx={{
          input: {
            padding: "13.5px 14px",
          },
          ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ABB2C7",
            borderRadius: "10px",
          },
          "&:hover": {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "1px solid #1976d2",
            },
          },
        }}
        {...props}
      />
    </FormControl>
  );
}
