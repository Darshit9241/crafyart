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
  const hiddenButtonRefSubs = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    hiddenButtonRefSubs?.current?.click();
  }, [hiddenButtonRefSubs]);

  return (
    <Box id={"event_subscription"}>
      <Button
        ref={hiddenButtonRefSubs}
        className="hidden"
        id={"event_subscription"}
        onClick={() => {
          if (typeof window !== "undefined") {
            gtag("event", "Purchase Subscription", {
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
