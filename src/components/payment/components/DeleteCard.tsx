import React from "react";
import DialogModal from "../../common/DialogBox";
import { Button } from "@mui/material";

interface PropsType {
  setOpenDeleteCard: React.Dispatch<React.SetStateAction<boolean>>;
  openDeleteCard: boolean;
  handleDeletePaymentMethod: () => void;
}

export default function DeleteCard(props: PropsType) {
  return (
    <DialogModal
      open={props?.openDeleteCard}
      setOpen={props?.setOpenDeleteCard}
      className="w-[100%] lg:w-[80%] xl:w-[550px]"
      scroll_none
    >
      <div className="py-[20px]">
        <h3 className="flex gap-[15px] font-semibold  px-[15px] text-[25px]  pb-4">
          Delete Payment Method
        </h3>

        <p className="px-[15px] pb-[35px]">
          Are you sure you want to delete this payment method? This action
          cannot be undone.
        </p>

        <div
          className="flex justify-end gap-4 px-[15px]"
          style={{ paddingBottom: "0" }}
        >
          <Button
            className={`${"normal-case bg-[#E6E8EE] text-black px-[15px]"} `}
            onClick={() => props?.setOpenDeleteCard(false)}
            style={{ height: "40px" }}
          >
            Cancel
          </Button>
          <Button
            className={`bg-[#C70000] text-white normal-case px-[15px]`}
            onClick={() => props?.handleDeletePaymentMethod()}
            style={{ height: "40px" }}
          >
            Delete
          </Button>
        </div>
      </div>
    </DialogModal>
  );
}
