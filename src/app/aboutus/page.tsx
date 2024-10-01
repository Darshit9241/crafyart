"use client";
import { openSidebar } from "@/src/redux/reducer/actionDataReducer";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function index() {
  const router = useRouter();
  // const dispatch = useDispatch();
  useEffect(() => {
    router.push("/about-us");
  }, []);
  return <div></div>;
}
