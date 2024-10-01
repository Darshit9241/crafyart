"use client";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Account = dynamic(() => import("@/src/components/userAccount/Account"));

export default function index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSidebar(false));
  }, []);

  return (
    <div>
      <Account defaultTab={"Subscription"} />
    </div>
  );
}
