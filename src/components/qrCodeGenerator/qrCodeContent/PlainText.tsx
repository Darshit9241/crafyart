import { Typography } from "@mui/material";
import React from "react";

export default function PlainText(props: {
  plainText: string;
  setPlainText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="py-5">
      <Typography className="mb-2 text-[15px]">Add message</Typography>

      <textarea
        className="w-full p-[10px] rounded-[5px] font-[300]"
        placeholder="Enter text here"
        style={{ border: "1px solid #d9d9d9" }}
        value={props.plainText}
        onChange={(e) => props?.setPlainText(e.target.value)}
      ></textarea>
    </div>
  );
}
