import Icons from "@/src/assets";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { handleClickWhatsapp } from "../header/headerComponents/Menu";
import Link from "next/link";
import {
  getCookie,
  removeCookie,
  setCookie,
} from "@/src/redux/action/AuthToken";

export default function OfferBox() {
  const [showOfferBox, setShowOfferBox] = useState(false);

  useEffect(() => {
    const storedOfferBoxStatus = getCookie("offerBoxStatus");
    if (storedOfferBoxStatus) {
      const offerBoxStatus = JSON.parse(storedOfferBoxStatus);
      const { isClosed, timestamp } = offerBoxStatus;
      const now = new Date().getTime();

      const threeHoursInMillis = 3 * 60 * 60 * 1000;

      if (!isClosed || now - timestamp > threeHoursInMillis) {
        removeCookie("offerBoxStatus");
      }

      setShowOfferBox(isClosed ? false : true);
    } else {
      setShowOfferBox(true);
    }
  }, []);

  const handleClose = () => {
    const now = new Date().getTime();

    setCookie(
      "offerBoxStatus",
      JSON.stringify({ isClosed: true, timestamp: now })
    );

    setShowOfferBox(false);
  };

  return (
    <>
      {showOfferBox && (
        <div
          className={`rounded-[20px] w-[350px] thread_shadow bg-white fixed bottom-[50px] z-[100] text-[22px] transition-all duration-500 max-sm:hidden`}
          style={{
            right: showOfferBox ? "50px" : "-500px",
            transition: "0.5s all",
          }}
        >
          <div className="relative">
            <div className="text-center py-[10px]">
              <h2 className="font-[600] text-[23px]">Custom Order</h2>
            </div>

            <img
              src="/images/bellImage.png"
              alt=""
              className="absolute w-[65px] top-[-23px] left-[20px]"
            />

            <div
              className="w-[22px] h-[22px] rounded-[50%] bg-[#1C3048] flex items-center justify-center absolute right-[25px] z-[100] top-[15px] cursor-pointer"
              onClick={handleClose}
            >
              <Icons.modalCloseIcon
                svgProps={{ color: "white", width: 10, height: 10 }}
              />
            </div>

            <img
              src="/images/pricingImage.png"
              alt=""
              className="absolute w-[107px] right-[-46px] top-[15px]"
            />

            <div
              className="py-[15px] pb-[10px] pr-[45px] pl-[25px] w-full bg_linear rounded-[20px] bg-cover bg-center"
              style={{ backgroundImage: "url(/images/offerBackground.png)" }}
            >
              <p className="text-white text-[15px] font-[400] text-center order_text">
                Get Your{" "}
                <span className="font-[700]">
                  {" "}
                  Custom Order in Just 48 Hours!
                </span>{" "}
                Don't Miss Out – Place Your Custom Order Now!
              </p>

              <div className="flex justify-center mt-3 gap-4">
                <Button
                  className="bg-white my-2 px-[15px] py-[7px] thread_shadow_button"
                  onClick={handleClickWhatsapp}
                  id="order_now"
                >
                  <span className="text_linear text-[15px] capitalize">
                    Order Now
                  </span>
                </Button>
                <Link href={"/contact-us"} target={"_blank"}>
                  <Button
                    className="bg-white my-2 px-[15px] py-[7px] thread_shadow_button"
                    id="contact_us"
                  >
                    <span className="text_linear text-[15px] capitalize">
                      Contact us
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// import Icons from "@/src/assets";
// import { Button } from "@mui/material";
// import React from "react";

// export default function OfferBox() {
//   return (
//     <>
//       <div className="rounded-[30px] w-[350px]  thread_shadow bg-white fixed bottom-[50px] right-[50px] z-[100] text-[22px] ">
//         <div className="relative">
//           <div className="text-center py-[10px]">
//             <h2 className="font-[600] text-[23px]">Custom Order</h2>
//           </div>
//           <img
//             src="/images/bellImage.png"
//             alt=""
//             className="absolute w-[65px] top-[-23px] left-[20px]"
//           />

//           <div className="w-[22px] h-[22px] rounded-[50%] bg-[#1C3048] flex items-center justify-center absolute right-[25px] z-[100] top-[15px] cursor-pointer">
//             <Icons.modalCloseIcon
//               svgProps={{ color: "white", width: 10, height: 10 }}
//             />
//           </div>

//           <img
//             src="/images/pricingImage.png"
//             alt=""
//             className="absolute w-[120px] right-[-52px] top-[15px]"
//           />

//           <div
//             className="py-[30px] pb-[20px] pr-[50px] pl-[30px] w-full bg_linear rounded-[30px] bg-cover bg-center"
//             style={{ backgroundImage: "url(/images/offerBackground.png)" }}
//           >
//             <p className="text-white text-[16px] text-center">
//               Place Your Custom Order Now!
//             </p>

//             <div className="flex justify-center mt-4 gap-4">
//               <Button className="bg-white my-2 px-[15px] py-[7px] thread_shadow_button">
//                 <span className="text_linear text-[15px] capitalize">
//                   Order Now
//                 </span>
//               </Button>
//               <Button className="bg-white my-2 px-[15px] py-[7px] thread_shadow_button">
//                 <span className="text_linear text-[15px] capitalize">
//                   Contact us
//                 </span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import Icons from "@/src/assets";
// import { Button } from "@mui/material";
// import React from "react";

// export default function OfferBox() {
//   return (
//     <>
//       <div className="rounded-[30px] w-[300px]  thread_shadow bg-white fixed bottom-[50px] right-[50px] z-[100] text-[22px] ">
//         <div className="relative">
//           <div className="text-center py-[10px]">
//             <h2 className="font-[600] text-[20px]">Custom Order</h2>
//           </div>
//           <img
//             src="/images/bellImage.png"
//             alt=""
//             className="absolute w-[65px] top-[-23px] left-[7px]"
//           />

//           <div className="w-[22px] h-[22px] rounded-[50%] bg-[#1C3048] flex items-center justify-center absolute right-[25px] z-[100] top-[15px] cursor-pointer">
//             <Icons.modalCloseIcon
//               svgProps={{ color: "white", width: 10, height: 10 }}
//             />
//           </div>

//           <img
//             src="/images/pricingImage.png"
//             alt=""
//             className="absolute w-[120px] right-[-52px] top-[15px]"
//           />

//           <div
//             className="py-[30px] pb-[20px] px-[30px] w-full bg_linear rounded-[30px] bg-cover bg-center"
//             style={{ backgroundImage: "url(/images/offerBackground.png)" }}
//           >
//             <p className="text-white text-[16px] text-center">
//               Place Your Custom Order Now!
//             </p>

//             <div className="flex justify-center mt-4 gap-4">
//               <Button className="bg-white my-2 px-[22px] py-[7px] thread_shadow_button">
//                 <span className="text_linear text-[15px] capitalize">
//                   Order Now
//                 </span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
