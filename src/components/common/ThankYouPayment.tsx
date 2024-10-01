"use client";
import React, { useEffect, useState } from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";
import { useRouter } from "next/navigation";
import NotFound from "@/src/components/common/NotFound";

export default function ThankYouPayment() {
  const router = useRouter();
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  const returnURL = useSelector(
    (state: RootState) => state.actions.currentPath
  );

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.replace(returnURL);
    }, 5000);

    const interval = setInterval(() => {
      setSecondsRemaining((prevSeconds: any) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearTimeout(redirectTimer);
      clearInterval(interval);
    };
  }, []);

  return !returnURL ? (
    <NotFound />
  ) : (
    <div className="not_found_page">
      <div className="inner_not_found">
        <div className="back_box">
          <CreditScoreIcon
            sx={{
              fontSize: "100px",
              backgroundColor: "#42d29d",
              borderRadius: "50%",
              padding: "10px",
              color: "white",
            }}
          />

          <h2
            style={{
              fontWeight: "600",
              marginTop: "30px",
              color: "#42d29d",
              fontSize: "40px",
            }}
          >
            Thank You!
          </h2>

          <h2
            style={{ fontWeight: "600", marginTop: "10px", fontSize: "18px" }}
          >
            Payment done Successfully
          </h2>

          <p style={{ marginTop: "10px" }}>
            Redirecting to page in {secondsRemaining} seconds...
          </p>
        </div>
      </div>
    </div>
  );
}
