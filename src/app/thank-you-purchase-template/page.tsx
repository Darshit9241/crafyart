"use client";
import ThankYouPayment from "@/src/components/common/ThankYouPayment";
import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }

  function gtag(...args: any[]): void;
}

export default function page() {
  const hiddenButtonRefTemp = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    hiddenButtonRefTemp?.current?.click();
  }, [hiddenButtonRefTemp]);

  return (
    <Box id={"event_template"}>
      <Button
        ref={hiddenButtonRefTemp}
        className="hidden"
        id={"event_template"}
        onClick={() => {
          if (typeof window !== "undefined") {
            gtag("event", "Purchase Template", {
              send_to: "AW-299239286/eLkeCKzwmJUZEPaO2I4B",
              transaction_id: "",
            });
          }
        }}
      />
      <ThankYouPayment />
    </Box>
  );
}
