import { TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";

interface EmailDataProps {
  emailAddress: string;
  emailSubject: string;
  message: string;
}

export default function Email(props: {
  emailData: EmailDataProps;
  setEmailData: React.Dispatch<React.SetStateAction<EmailDataProps>>;
}) {
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setEmailData({
      ...props.emailData,
      emailAddress: event.target.value,
    });
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setEmailData({
      ...props.emailData,
      emailSubject: event.target.value,
    });
  };

  const handleMessageChange = (event: ChangeEvent<any>) => {
    props.setEmailData({ ...props.emailData, message: event.target.value });
  };

  return (
    <div className="py-5 ">
      <TextField
        fullWidth
        label="Email address"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.emailData.emailAddress}
        onChange={handleEmailChange}
      />

      <TextField
        fullWidth
        label="Email subject"
        id="fullWidth"
        className="bg-white mb-4"
        size="small"
        value={props.emailData.emailSubject}
        onChange={handleSubjectChange}
      />

      <Typography className="mb-2 text-[15px]">Add message</Typography>

      <textarea
        className="w-full p-[10px] rounded-[5px] font-[300]"
        placeholder="Enter text here"
        style={{ border: "1px solid #d9d9d9" }}
        value={props.emailData.message}
        onChange={handleMessageChange}
      ></textarea>
    </div>
  );
}
