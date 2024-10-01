import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import { ReactNode, useEffect } from "react";

interface DialogModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  scroll_none?: boolean;
  children: ReactNode;
}

const DialogModal = (props: DialogModalProps) => {
  const screenHeight = useScreenHeight();
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const htmlStyleElement = document.getElementById("html_style");

    if (htmlStyleElement && !props?.scroll_none) {
      if (props?.open) {
        htmlStyleElement.style.overflow = "hidden";
      } else {
        htmlStyleElement.style.overflow = "auto";
      }
    }
  }, [props?.open, props?.scroll_none]);

  return (
    <>
      <div
        className={"background_blur"}
        style={{
          visibility: props?.open ? "visible" : "hidden",
          opacity: props?.open ? "0.5" : "0",
          transition: "0.2s all",
        }}
        onClick={() => {
          props?.setOpen(false);
        }}
      ></div>

      <div
        className={`${props?.className} report_dialog `}
        style={{
          visibility: props?.open ? "visible" : "hidden",
          opacity: props?.open ? "1" : "0",
          transition: "0.2s all",
        }}
      >
        <div
          style={{
            maxHeight:
              screenWidth < 600
                ? `${screenHeight}px`
                : `${screenHeight - 50}px`,
            overflow: "auto",
          }}
        >
          <button
            className="fixed right-[20px] lg:right-[-50px] top-[15px] lg:top-[-10px] cursor-pointer"
            onClick={() => {
              props?.setOpen(false);
            }}
          >
            <img src="/icons/modalClose.png" alt="icon" />
          </button>

          {props?.children}
        </div>
      </div>
    </>
  );
};

export default DialogModal;
