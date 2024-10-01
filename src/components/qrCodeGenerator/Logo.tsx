// import { Box } from "@mui/material";
// import React, { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// import toast from "react-hot-toast";

// interface PropsType {
//   value: string | null;
//   setValue: React.Dispatch<React.SetStateAction<string | null>>;
// }

// export default function Logo(props: PropsType) {
//   const handleImageUpload = (file: File) => {
//     const allowedFormats = ["image/jpeg", "image/png"];
//     if (!allowedFormats.includes(file.type)) {
//       props.setValue(null);
//       toast.error("Please upload a PNG or JPG image for the logo.");
//       return;
//     }
//     props.setValue(URL.createObjectURL(file));
//   };

//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       if (acceptedFiles && acceptedFiles.length > 0) {
//         handleImageUpload(acceptedFiles[0]);
//       }
//     },
//     [props.setValue]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//   });

//   return (
//     <>
//       <Box className="flex gap-2 items-center pt-[30px] cursor-pointer">
//         <div
//           {...getRootProps()}
//           className={`w-full imageUploadBox ${isDragActive ? "dragging" : ""}`}
//         >
//           <input
//             type="file"
//             accept="image/jpeg, image/png"
//             style={{ display: "none" }}
//             {...getInputProps()}
//           />
//           <img
//             src="/images/no logo.svg"
//             alt=""
//             className="w-[50px] block mx-auto"
//           />
//         </div>
//       </Box>
//     </>
//   );
// }

import { Box, Button } from "@mui/material";
import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

interface PropsType {
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  preview: string | null;
  setPreview: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Logo(props: PropsType) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (file: File) => {
    const allowedFormats = ["image/jpeg", "image/png"];
    if (!allowedFormats.includes(file.type)) {
      props.setValue(null);
      props.setPreview(null);
      toast.error("Please upload a PNG or JPG image for the logo.");
      return;
    }
    props.setValue(URL.createObjectURL(file));
    props.setPreview(URL.createObjectURL(file));
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        handleImageUpload(acceptedFiles[0]);
      }
    },
    [props.setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const handleChangePhoto = () => {
    // Trigger the file input click event
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <>
      <Box className="flex gap-2 items-center pt-[30px] cursor-pointer">
        {!props.preview && (
          <div
            {...getRootProps()}
            className={`w-full imageUploadBox ${
              isDragActive ? "dragging" : ""
            }`}
          >
            <input
              type="file"
              accept="image/jpeg, image/png"
              style={{ display: "none" }}
              {...getInputProps()}
            />
            {props.preview ? (
              <img
                src={props.preview}
                alt="Preview"
                className="w-[100px] block mx-auto"
              />
            ) : (
              <img
                src="/images/no logo.svg"
                alt=""
                className="w-[50px] block mx-auto"
              />
            )}
          </div>
        )}

        {props.preview && (
          <Box className="flex items-center gap-3">
            <img
              src={props.preview}
              alt="Preview"
              className="w-[100px] block mx-auto"
            />
            <Button
              className="h-[35px] normal-case px-[20px] text-black"
              onClick={() => {
                props.setValue(null);
                props.setPreview(null);
              }}
            >
              Remove
            </Button>

            <Button
              className="bg-[#E9EDF6] h-[35px] normal-case px-[20px] text-black"
              onClick={handleChangePhoto}
            >
              Change Photo
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </Box>
        )}
      </Box>
    </>
  );
}
