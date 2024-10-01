"use client";
import dynamic from "next/dynamic";

const Account = dynamic(() => import("@/src/components/userAccount/Account"));

export default function index() {
  return (
    <div>
      <Account defaultTab={"Personal Info"} />
    </div>
  );
}
