import Icons from "@/src/assets";
import { calculateHeight } from "@/src/commonFunction/calculateHeight";
import { TemplateDataType } from "@/src/interface/commonType";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";

interface ImageBoxProps {
  templates: TemplateDataType | any;
  screenWidth: number;
  multiSizeFixSize: number;
  setIdName: React.Dispatch<React.SetStateAction<TemplateDataType>>;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  index?: number;
  showTag?: boolean;
  setMobileStatVideo?: any;
  mobileStatVideo?: any;
  setIsPreviousMuted?: any;
  isPreviousMuted?: any;
}

export default function MobileImageBox({
  templates,
  screenWidth,
  multiSizeFixSize,
  setIdName,
  setOpenModal,
  showTag,
  mobileStatVideo,
  setMobileStatVideo,
  setIsPreviousMuted,
  isPreviousMuted,
}: ImageBoxProps) {
  const videoRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef: React.RefObject<HTMLInputElement> | any = useRef(null);
  const [showPreviewButton, setShowPreviewButton] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex: number) => (prevIndex + 1) % templates?.thumbArray.length
        );
      }, 1300);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered, templates?.thumbArray]);

  const handleMouseEnter = () => {
    setShowPreviewButton(true);
    if (screenWidth > 600) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setShowPreviewButton(false);
    if (screenWidth > 600) {
      setIsHovered(false);
      setCurrentIndex(0);
    }
  };

  const handleMouseEnterVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  // const handleMouseLeaveVideo = () => {
  //   videoRef.current.pause();
  //   setIsPlaying(false);
  // };

  const handleMouseLeaveVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (templates?.video && !videoRef.current.paused) {
      if (templates?.video != mobileStatVideo) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.muted = isPreviousMuted;
        setIsMuted(isPreviousMuted);
      }
    }
  }, [mobileStatVideo,templates?.video, isPreviousMuted]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      console.log("videoRef: ", videoRef);
      if (videoRef.current.paused) {
        videoRef.current.play();
        setMobileStatVideo(templates?.video);
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // const toggleMute = () => {
  //   videoRef.current.muted = !videoRef.current.muted;
  //    setIsMuted(videoRef.current.muted);
  //    setIsPreviousMuted(videoRef.current.muted);
  // };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      setIsPreviousMuted(videoRef.current.muted);
    }
  };

  return (
    <div
      className="relative"
      style={{
        height: `${calculateHeight(
          templates?.width,
          templates?.height,
          screenWidth / multiSizeFixSize
        )}px`,
        width: `${screenWidth / multiSizeFixSize}px`,
      }}
      onMouseLeave={handleMouseLeaveVideo}
    >
      <span
        className="w-[28px] absolute top-[16px] z-[1] cursor-pointer"
        style={{
          right: templates.is_premium ? "47px" : "15px",
          opacity: showPreviewButton && !(isMobile || isTablet) ? "1" : "0",
          transition: "0.3s all",
        }}
        onClick={() => {
          setOpenModal(true);
          setIdName(templates);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icons.PreviewIcon svgProps={{ width: 27, height: 27 }} />
      </span>

      {templates.is_premium && (
        <span className="w-[28px] absolute right-[13px] top-[16px] z-[1]">
          <Icons.proIcon svgProps={{ width: 27, height: 27 }} />
        </span>
      )}

      {templates.video && (
        <div className="absolute bottom-[20px] left-[10px] z-10 flex gap-[10px] ml-2">
          <button
            onClick={() => {
              console.log("wdefrghj");
              togglePlayPause();
            }}
          >
            {isPlaying ? (
              <Icons.PauseIcon
                svgProps={{ width: 14, height: 17, color: "#fff" }}
              />
            ) : (
              <Icons.PlayIcon
                svgProps={{ width: 14, height: 17, color: "#fff" }}
              />
            )}
          </button>
          <button onClick={toggleMute}>
            {!isMuted ? (
              <Icons.MuteIcon
                svgProps={{ width: 15, height: 18, color: "#fff" }}
              />
            ) : (
              <Icons.UnMuteIcon
                svgProps={{ width: 15, height: 18, color: "#fff" }}
              />
            )}
          </button>
        </div>
      )}
      <Link prefetch={false} href={`/templates/p/${templates?.id_name}`}>
        <div className="w-full h-full p-[8px] relative">
          <div
            className="custom-carousel w-full h-full overflow-hidden cursor-pointer rounded-[5px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ border: "1px solid #80808082" }}
          >
            {templates?.video ? (
              <div
                className="carousel-slider w-full h-full"
                onMouseEnter={handleMouseEnterVideo}
                style={{
                  backgroundImage: `url(${templates?.thumbArray[0]})`,
                  // backgroundSize: "contain",
                  backgroundSize: "cover",
                  // objectFit: "fill",
                  // backgroundPosition: "center",
                }}
              >
                <img
                  src={templates?.thumbArray[0]}
                  crossOrigin="anonymous"
                  style={{ display: isPlaying ? "none" : "block" }}
                />
                <video
                  className={`w-full h-full rounded-[5px] cursor-pointer`}
                  style={{
                    display: isPlaying ? "block" : "none",
                    objectFit: "fill",
                  }}
                  autoPlay
                  playsInline
                  ref={videoRef}
                  src={templates?.video}
                  loop
                  muted
                ></video>
              </div>
            ) : (
              <div
                className="carousel-slider w-full h-full"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {templates?.thumbArray.map((image: string, index: number) => (
                  <div
                    className="carousel-slide"
                    key={index}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src={image}
                      alt={image}
                      crossOrigin="anonymous"
                      className={`w-full h-full rounded-[5px] cursor-pointer`}
                    />
                  </div>
                ))}
              </div>
            )}

            {isHovered &&
              templates?.thumbArray?.length > 1 &&
              !templates?.video && (
                <p
                  className="absolute bottom-[10px] w-[60px] flex justify-center left-[10px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
                  style={{ transition: "0.5s all" }}
                >
                  <span className="w-[13px] text-right mr-1">
                    {currentIndex + 1}{" "}
                  </span>{" "}
                  OF {templates?.thumbArray.length}
                </p>
              )}
          </div>

          <div className="pt-2">
            <p className="text-ellipsis max-sm:text-[14px] w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
              {templates?.template_name}
            </p>
            {showTag ? (
              <div className="flex flex-wrap">
                {templates?.new_tags?.map((res: string, index: number) => (
                  <p
                    key={index}
                    className="text-[#ABB2C7] text-[12px] max-sm:text-[12px] pb-1 mr-1"
                  >
                    {res}
                    {index < templates.new_tags.length - 1 && ","}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-[#ABB2C7] text-[13px] max-sm:text-[12px] pb-1">
                {templates?.category_name}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

// import Icons from "@/src/assets";
// import { calculateHeight } from "@/src/commonFunction/calculateHeight";
// import { TemplateDataType } from "@/src/interface/commonType";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import { isMobile, isTablet } from "react-device-detect";

// interface ImageBoxProps {
//   templates: TemplateDataType | any;
//   screenWidth: number;
//   multiSizeFixSize: number;
//   setIdName: React.Dispatch<React.SetStateAction<TemplateDataType>>;
//   setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
//   index?: number;
//   showTag?: boolean;
//   setMobileStatVideo?: any;
//   mobileStatVideo?: any;
//   setIsPreviousMuted?: any;
//   isPreviousMuted?: any;
// }

// export default function MobileImageBox({
//   templates,
//   screenWidth,
//   multiSizeFixSize,
//   setIdName,
//   setOpenModal,
//   showTag,
//   mobileStatVideo,
//   setMobileStatVideo,
//   setIsPreviousMuted,
//   isPreviousMuted,
// }: ImageBoxProps) {
//   const videoRef = useRef<any>(null);
//   console.log('videoRef: ', videoRef);
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const intervalRef: React.RefObject<HTMLInputElement> | any = useRef(null);
//   const [showPreviewButton, setShowPreviewButton] = useState<boolean>(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   console.log('isPlaying: ', isPlaying);
//   const [isMuted, setIsMuted] = useState(true);
//   console.log('isMuted: ', isMuted);

//   useEffect(() => {
//     if (isHovered) {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex(
//           (prevIndex: number) => (prevIndex + 1) % templates?.thumbArray.length
//         );
//       }, 1300);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, [isHovered, templates?.thumbArray]);

//   const handleMouseEnter = () => {
//     setShowPreviewButton(true);
//     if (screenWidth > 600) {
//       setIsHovered(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     setShowPreviewButton(false);
//     if (screenWidth > 600) {
//       setIsHovered(false);
//       setCurrentIndex(0);
//     }
//   };

//   const handleMouseEnterVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   };

//   const handleMouseLeaveVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   useEffect(() => {
//     if (templates?.video && videoRef.current) {
//       if (templates?.video !== mobileStatVideo) {
//         videoRef.current.muted = true;
//         setIsMuted(true);
//         videoRef.current.pause();
//         setIsPlaying(false);
//       } else {
//         videoRef.current.muted = isPreviousMuted;
//         setIsMuted(isPreviousMuted);
//       }
//     }
//   }, [mobileStatVideo]);

//   const togglePlayPause = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//       videoRef.current.currentTime = 0;
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !videoRef.current.muted;
//       setIsMuted(videoRef.current.muted);
//       setIsPreviousMuted(videoRef.current.muted);
//     }
//   };

//   return (
//     <div
//       className="relative"
//       style={{
//         height: `${calculateHeight(
//           templates?.width,
//           templates?.height,
//           screenWidth / multiSizeFixSize
//         )}px`,
//         width: `${screenWidth / multiSizeFixSize}px`,
//       }}
//       onMouseLeave={handleMouseLeaveVideo}
//     >
//       <span
//         className="w-[28px] absolute top-[16px] z-[1] cursor-pointer"
//         style={{
//           right: templates.is_premium ? "47px" : "15px",
//           opacity: showPreviewButton && !(isMobile || isTablet) ? "1" : "0",
//           transition: "0.3s all",
//         }}
//         onClick={() => {
//           setOpenModal(true);
//           setIdName(templates);
//         }}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <Icons.PreviewIcon svgProps={{ width: 27, height: 27 }} />
//       </span>

//       {templates.is_premium && (
//         <span className="w-[28px] absolute right-[13px] top-[16px] z-[1]">
//           <Icons.proIcon svgProps={{ width: 27, height: 27 }} />
//         </span>
//       )}

//       {templates.video && (
//         <div className="absolute bottom-[20px] left-[10px] z-10 flex gap-[10px] ml-2">
//           <button onClick={togglePlayPause}>
//             {isPlaying ? (
//               <Icons.PauseIcon
//                 svgProps={{ width: 14, height: 17, color: "#fff" }}
//               />
//             ) : (
//               <Icons.PlayIcon
//                 svgProps={{ width: 14, height: 17, color: "#fff" }}
//               />
//             )}
//           </button>
//           <button onClick={toggleMute}>
//             {!isMuted ? (
//               <Icons.MuteIcon
//                 svgProps={{ width: 15, height: 18, color: "#fff" }}
//               />
//             ) : (
//               <Icons.UnMuteIcon
//                 svgProps={{ width: 15, height: 18, color: "#fff" }}
//               />
//             )}
//           </button>
//         </div>
//       )}
//       <Link prefetch={false} href={`/templates/p/${templates?.id_name}`}>
//         <div className="w-full h-full p-[8px] relative">
//           <div
//             className="custom-carousel w-full h-full overflow-hidden cursor-pointer rounded-[5px]"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             style={{ border: "1px solid #80808082" }}
//           >
//             {templates?.video ? (
//               <div
//                 className="carousel-slider w-full h-full"
//                 onMouseEnter={handleMouseEnterVideo}
//                 style={{
//                   backgroundImage: `url(${templates?.thumbArray[0]})`,
//                   backgroundSize: "cover",
//                   // objectFit: "fill",
//                 }}
//               >
//                 <img
//                   src={templates?.thumbArray[0]}
//                   crossOrigin="anonymous"
//                   style={{ display: isPlaying ? "none" : "block" }}
//                 />
//                 <video
//                   className={`w-full h-full rounded-[5px] cursor-pointer`}
//                   style={{
//                     display: isPlaying ? "block" : "none",
//                     objectFit: "fill",
//                   }}
//                   playsInline
//                   autoPlay
//                   ref={videoRef}
//                   src={templates?.video}
//                   loop
//                   muted
//                  ></video>
//               </div>
//             ) : (
//               <div
//                 className="carousel-slider w-full h-full"
//                 style={{
//                   transform: `translateX(-${currentIndex * 100}%)`,
//                 }}
//               >
//                 {templates?.thumbArray.map((image: string, index: number) => (
//                   <div
//                     className="carousel-slide"
//                     key={index}
//                     style={{ display: "flex", justifyContent: "center" }}
//                   >
//                     <img
//                       src={image}
//                       alt={image}
//                       crossOrigin="anonymous"
//                       className={`w-full h-full rounded-[5px] cursor-pointer`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}

//             {isHovered &&
//               templates?.thumbArray?.length > 1 &&
//               !templates?.video && (
//                 <p
//                   className="absolute bottom-[10px] w-[60px] flex justify-center left-[10px] bg-[#11171d99] font-[600] text-[white] text-[10px] py-[1px] px-[4px] rounded-[8px]"
//                   style={{ transition: "0.5s all" }}
//                 >
//                   <span className="w-[13px] text-right mr-1">
//                     {currentIndex + 1}{" "}
//                   </span>{" "}
//                   OF {templates?.thumbArray.length}
//                 </p>
//               )}
//           </div>

//           <div className="pt-2">
//             <p className="text-ellipsis max-sm:text-[14px] w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
//               {templates?.template_name}
//             </p>
//             {showTag ? (
//               <div className="flex flex-wrap">
//                 {templates?.new_tags?.map((res: string, index: number) => (
//                   <p
//                     key={index}
//                     className="text-[#ABB2C7] text-[12px] max-sm:text-[12px] pb-1 mr-1"
//                   >
//                     {res}
//                     {index < templates.new_tags.length - 1 && ","}
//                   </p>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-[#ABB2C7] text-[13px] max-sm:text-[12px] pb-1">
//                 {templates?.category_name}
//               </p>
//             )}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// }
