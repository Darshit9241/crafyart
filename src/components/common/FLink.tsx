import Link from "next/link";
import React, { ReactNode } from "react";

interface FLinkProps {
  lk: string;
  children: ReactNode;
}

const FLink: React.FC<FLinkProps> = (props) => {
  return (
    <Link
      prefetch={false}
      href={props?.lk}
      className="text_linear"
      target="_blank"
      style={{ display: "unset", fontWeight: "500" }}
    >
      {" "}
      {props?.children}{" "}
    </Link>
  );
};

export default FLink;
