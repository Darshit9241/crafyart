import React, { useEffect, useState } from "react";
import api from "@/src/clientApi/api";
import { GetUserType, User } from "@/src/interface/user";
import { Box, Button } from "@mui/material";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { consoleLog } from "@/src/commonFunction/console";
import { Akaya_Kanadaka } from "next/font/google";

export default function CustomerSayingReview({ allReview }: any) {
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const uid = authCookiesGet();
  const [expandedReviewIndexes, setExpandedReviewIndexes] = useState<any>([]);

  const toggleReadMore = (index: any) => {
    if (expandedReviewIndexes.includes(index)) {
      setExpandedReviewIndexes(
        expandedReviewIndexes.filter((i: any) => i !== index)
      );
    } else {
      setExpandedReviewIndexes([...expandedReviewIndexes, index]);
    }
  };

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById("customer");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["customer"]);

  const handleNextClick = () => {
    const container = document.getElementById("customer") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("customer") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    api
      .getUserData({ user_id: uid })
      .then((response: unknown) => {
        const res = response as GetUserType;
        const user = res?.user;
        setUserProfile(user);
      })
      .catch((error) => {
        consoleLog("getUserData: ", error);
      });
  }, []);

  // // Check if the number of reviews is more than 4
  // useEffect(() => {
  //   if (allReview?.length > 4) {
  //     setShowPrevButton(false); // Initially hide the Prev button
  //     setShowNextButton(true); // Initially show the Next button
  //   } else {
  //     setShowPrevButton(false); // Hide the Prev button
  //     setShowNextButton(false); // Hide the Next button
  //   }
  // }, [allReview]);

  return (
    <>
      {allReview?.length >= 4 && (
        <Box className="flex justify-end mx-24 2xl:mx-40">
         <Button
          onClick={handlePrevClick}
          // disabled={!showPrevButton}
          aria-label="Prev"
          href=""
          className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-black-900 rounded-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </Button>
        <Button
          onClick={handleNextClick}
          // disabled={!showNextButton}
           aria-label="Next"
          href=""
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
      </Box>
      )}
      <Box
        className={`flex pr-[23px] w-full xl:w-[100%] z-[1] max-lg:mt-[0] gap-[30px] max-sm:gap-[0px] overflow-auto scroll_none sm:px-10 py-5 sm:py-15 mt-5
            ${allReview?.length <= 2 ? "justify-center" : ""}`}
        id="customer"
      >
        {allReview?.map((item: any, index: number) => (
          <div
            key={index}
            className="w-[32%] max-sm:mx-3 rounded-[10px] max-lg:w-[100%] min-w-[500px] max-sm:min-w-[100%] max-2sm:min-w-[230px]"
          >
            <div className="p-6 bg-[#F4F7FE] rounded-2xl relative w-[100%] border border-gray-200 h-[300px] overflow-auto">
              <div className="grid grid-cols-[auto_1fr] gap-4 w-[100%] overflow-auto">
                <img
                  className="h-[85px] w-[85px]"
                  src={item?.user?.profile_photo}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-bold">{item?.user?.name}</h3>
                  <div className="flex items-center ml-2">
                    <img
                      src="/images/review/img4.png"
                      className="w-[20px] h-[20px]"
                      alt="logo template"
                    />
                    <h1 className="ml-3">{item?.rate}</h1>
                  </div>
                </div>
                <p
                  className={`font-semibold mt-4 ${
                    expandedReviewIndexes.includes(index) ? "" : "line-clamp-3"
                  }`}
                >{`“${item?.feedback}”`}</p>
              </div>
              {item.feedback.length > 80 && (
                <div className="justify-end">
                  <button
                    className="text-blue-500 mt-2"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedReviewIndexes.includes(index)
                      ? "Read Less"
                      : "Read More"}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Box>
    </>
  );
}


// import React, { useEffect, useState } from "react";
// import api from "@/src/clientApi/api";
// import { GetUserType, User } from "@/src/interface/user";
// import { Box, Button } from "@mui/material";
// import { authCookiesGet } from "@/src/redux/action/AuthToken";
// import { consoleLog } from "@/src/commonFunction/console";
// import { Akaya_Kanadaka } from "next/font/google";
// export default function CustomerSayingreview({ allReview }: any) {
//   const [showPrevButton, setShowPrevButton] = useState(true);
//   const [showNextButton, setShowNextButton] = useState(true);
//   const [userProfile, setUserProfile] = useState<User | null>(null);
//   const uid = authCookiesGet();
//   const [expandedReviewIndexes, setExpandedReviewIndexes] = useState<any>([]);
//   const toggleReadMore = (index: any) => {
//     if (expandedReviewIndexes.includes(index)) {
//       setExpandedReviewIndexes(
//         expandedReviewIndexes.filter((i: any) => i !== index)
//       );
//     } else {
//       setExpandedReviewIndexes([...expandedReviewIndexes, index]);
//     }
//   };
//   const handleScroll = (e: Event) => {
//     const container = e.target as HTMLElement;
//     setShowPrevButton(container.scrollLeft > 0);
//     setShowNextButton(
//       container.scrollLeft < container.scrollWidth - container.clientWidth
//     );
//   };
//   useEffect(() => {
//     const container = document.getElementById("customer");
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       handleScroll({ target: container } as unknown as Event);
//       return () => container.removeEventListener("scroll", handleScroll);
//     }
//   }, ["customer"]);
  
//   const handleNextClick = () => {
//     const container = document.getElementById("customer") as HTMLElement;
//     if (container) {
//       container.scrollBy({
//         left: container.offsetWidth,
//         behavior: "smooth",
//       });
//     }
//   };
//   const handlePrevClick = () => {
//     const container = document.getElementById("customer") as HTMLElement;
//     if (container) {
//       container.scrollBy({
//         left: -container.offsetWidth,
//         behavior: "smooth",
//       });
//     }
//   };
//   useEffect(() => {
//     api
//       .getUserData({ user_id: uid })
//       .then((response: unknown) => {
//         const res = response as GetUserType;
//         const user = res?.user;
//         setUserProfile(user);
//       })
//       .catch((error) => {
//         consoleLog("getUserData: ", error);
//       });
//   }, []);
//   return (
//     <>
//       <Box className="flex justify-end mx-24 2xl:mx-40">
//         <Button
//           onClick={handlePrevClick}
//           // disabled={!showPrevButton}
//           sx={
//             {
//              }
//           }
//           aria-label="Prev"
//           href=""
//           className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-black-900 rounded-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         >
//           <svg
//             className="w-3.5 h-3.5 me-2 rtl:rotate-180"
//             aria-hidden="true"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 5H1m0 0 4 4M1 5l4-4"
//             />
//           </svg>
//           Previous
//         </Button>
//         <Button
//           onClick={handleNextClick}
//           // disabled={!showNextButton}
//            aria-label="Next"
//           href=""
//           className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         >
//           Next
//           <svg
//             className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
//             aria-hidden="true"
//             fill="none"
//             viewBox="0 0 14 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 5h12m0 0L9 1m4 4L9 9"
//             />
//           </svg>
//         </Button>
//       </Box>
//       <Box
//         className={`flex pr-[23px] w-full xl:w-[100%] z-[1] max-lg:mt-[0] gap-[30px] max-sm:gap-[0px] overflow-auto scroll_none sm:px-10 py-5 sm:py-15 mt-5
//             ${allReview?.length <= 2 ? "justify-center" : ""}`}
//         id="customer"
//       >
//         {allReview?.map((item: any, index: number) => (
//           <div
//             key={index}
//             className="w-[32%] max-sm:mx-3 rounded-[10px] max-lg:w-[100%] min-w-[500px] max-sm:min-w-[100%] max-2sm:min-w-[230px]"
//           >
//             <div className="p-6 bg-[#F4F7FE] rounded-2xl relative w-[100%] border border-gray-200 h-[300px] overflow-auto">
//               <div className="grid grid-cols-[auto_1fr] gap-4 w-[100%] overflow-auto">
//                 <img
//                   className="h-[85px] w-[85px]"
//                    src={item?.user?.profile_photo}
//                 />
//               </div>
//               <div className="mt-4">
//                 <div className="flex items-center">
//                   <h3 className="text-lg font-bold">{item?.user?.name}</h3>
//                   <div className="flex items-center ml-2">
//                     <img
//                       src="/images/review/img4.png"
//                       className="w-[20px] h-[20px]"
//                       alt="logo template"
//                     />
//                     <h1 className="ml-3">{item?.rate}</h1>
//                   </div>
//                 </div>
//                 <p
//                   className={`font-semibold mt-4 ${
//                     expandedReviewIndexes.includes(index) ? "" : "line-clamp-3"
//                   }`}
//                 >{`“${item?.feedback}”`}</p>
//               </div>
//               {item.feedback.length > 50 && (
//                 <div className="justify-end">
//                   <button
//                     className="text-blue-500 mt-2"
//                     onClick={() => toggleReadMore(index)}
//                   >
//                     {expandedReviewIndexes.includes(index)
//                       ? "Read Less"
//                       : "Read More"}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </Box>
//     </>
//   );
// }
