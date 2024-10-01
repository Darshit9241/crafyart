"use client";

import CustomHead from "../components/common/CustomHead";

export default function NotFoundPage() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <>


    <CustomHead
        // image={`${assetsUrl}/w_assets/Indian/banner.png`}
        heading={
          "Error 404"
        }
        // text="Discover latest Indian wedding cards online at Crafty Art. From Luxury Indian Marriage Card designs, find the best Indian wedding invitations for a special day."
      />


    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-[1001]">
      <div className="text-center">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="w-[150px] mx-auto"
          onClick={() => {
            window.location.href = `${domain}`;
          }}
        />

        <h2 style={{ fontWeight: "600", marginTop: "30px", fontSize: "22px" }}>
          Not found (404)
        </h2>

        <p style={{ marginTop: "10px" }}>
          Sorry, the page you are looking for does not exist.
        </p>

        <p
          style={{
            textDecoration: "underline",
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = `${domain}`;
          }}
        >
          Go back to the Crafty Art homepage
        </p>
      </div>
    </div>
    </>
  );
}
