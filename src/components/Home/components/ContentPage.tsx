"use client";
import React from "react";
import Dashboard from "../dashboard/Dashboard";
import LandingPage from "../landingPage/LandingPage";
import { DashboardDataType } from "@/src/interface/dashboard";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { useSelector } from "react-redux";
import { RootState } from "@/src/redux";

export default function ContentPage(props: {
  data: DashboardDataType;
  sessionId: RequestCookie | undefined;
}) {
  const token = useSelector((state: RootState) => state.auth.cookieToken);

  return (
    <div>
      {props?.sessionId || token ? (
        <Dashboard data={props?.data} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
