import { TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

interface SMSDataProps {
  phone: string;
  message: string;
}

export default function SMS(props: {
  smsData: SMSDataProps;
  setSmsData: React.Dispatch<React.SetStateAction<SMSDataProps>>;
}) {
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setSmsData({
      ...props.smsData,
      phone: event.target.value,
    });
  };

  const handleMessageChange = (event: ChangeEvent<any>) => {
    props.setSmsData({ ...props.smsData, message: event.target.value });
  };

  return (
    <div className="py-5">
      <TextField
        fullWidth
        type="number"
        label="Phone number"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.smsData.phone}
        onChange={handlePhoneChange}
      />

      <Typography className="mb-2 text-[15px]">Add message</Typography>

      <textarea
        className="w-full p-[10px] rounded-[5px] font-[300]"
        placeholder="Enter text here"
        style={{ border: "1px solid #d9d9d9" }}
        value={props.smsData.message}
        onChange={handleMessageChange}
      ></textarea>
    </div>
  );
}
