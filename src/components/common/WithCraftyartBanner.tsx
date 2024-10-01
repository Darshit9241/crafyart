import Link from "next/link";
import React from "react";

export default function WithCraftyartBanner() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <div
      style={{
        background:
          "linear-gradient(268deg, #5961f836 -0.66%, #15d8c536 100%, #15d8c53b 100%)",
      }}
      className="flex w-[70%] max-xl:w-[90%] mx-auto rounded-[30px] max-lg:flex-col max-w-[2400px]"
    >
      <div className="flex-1 p-[40px] max-sm:p-[30px]">
        <h3 className="text-[46px] max-sm:text-[28px] font-[700]">
          Go Ahead With Crafty Art
        </h3>
        <p>
          Are you ready to unbox new extremely powerful features like Image
          Resize, Style Kit, Brand Kit, Caricature, and Eprofile?
        </p>

        <div className="flex pt-[50px]">
          <Link
            prefetch={false}
            rel="nofollow"
            href="https://play.google.com/store/apps/details?id=com.crafty.art"
          >
            <img
              src={`${assetsUrl}/w_assets/images/bgRemove/playStore.png`}
              alt="playStore"
              className="w-[180px]"
            />
          </Link>
        </div>
      </div>

      <div className="flex-1 py-[40px]">
        <div className="mr-[-42px] max-lg:mr-0">
          <img
            src={`${assetsUrl}/w_assets/images/bgRemove/goHead.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
