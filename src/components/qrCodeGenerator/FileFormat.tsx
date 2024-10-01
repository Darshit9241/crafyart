import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React from "react";

interface PropsType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function FileFormat(props: PropsType) {
  return (
    <Box className="pt-[30px]">
      <Typography className="text-[#A5AAB5] mb-3 ml-2">File Format</Typography>

      <FormControl sx={{ minWidth: "150px" }} className="ml-2" size="small">
        <Select
          value={props.value}
          onChange={(event: SelectChangeEvent) =>
            props.setValue(event.target.value)
          }
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value={"png"}>PNG</MenuItem>
          <MenuItem value={"jpg"}>JPG</MenuItem>
          <MenuItem value={"svg"}>SVG</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
