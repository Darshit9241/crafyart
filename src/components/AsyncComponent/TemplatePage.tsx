"use client";
import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { isPurchased } from "@/src/commonFunction/isPurchased";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import TemplateModal from "@/src/components/singleTemplate/TemplateModal";
import { TemplateDataType } from "@/src/interface/commonType";
import { SingleTempType } from "@/src/interface/getSingleTempType";
import { RootState } from "@/src/redux";
import { authCookiesGet, userPremiumGet } from "@/src/redux/action/AuthToken";
import { openLogin, productData } from "@/src/redux/reducer/actionDataReducer";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import * as React from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";
import ImageBox from "../common/ImageBox";
import { SearchTempType } from "@/src/interface/searchTemplateType";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const ShowPremiumDialog = dynamic(
  () => import("@/src/components/templatePayment/ShowPremiumDialog")
);

interface PropType {
  image: string | any;
  text: string;
}

export const IconsText = ({ image, text }: PropType) => {
  return (
    <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
      {image}
      {text}
    </Typography>
  );
};

export default function TemplatePage(props: { templateData: SingleTempType }) {
  const editorUrl = process.env.NEXT_PUBLIC_EDITOR;
  const containerId = `slider`;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(true);
  const [token, setToken] = React.useState<string | null>(null);
  const [anotherData, setAnotherData] = React.useState<TemplateDataType[]>([]);
  const screenWidth = useScreenWidth();
  const [idName, setIdName] = React.useState<TemplateDataType | any>(null);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [showPrevButton, setShowPrevButton] = React.useState(true);
  const [showNextButton, setShowNextButton] = React.useState(true);
  const [showImage, setShowImage] = React.useState<string>("video-item");
  const [imageIndex, setImageIndex] = React.useState<number>(-1);
  const [showPremiumBox, setShowPremiumBox] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [reloadKey, setReloadKey] = React.useState(0);
  const [images, setImages] = React.useState<string[]>([]);
  const [videos, setVideos] = React.useState<string[]>([]);
  const videoRef = React.useRef<HTMLVideoElement>(null);  
  const handleClick = () => {
    setImageIndex(-1);
    setShowImage("video-item");

    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
    }
  };

  const purchaseItems = useSelector(
    (state: RootState) => state.auth.setPurchaseItems
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(authCookiesGet());
    }
  }, []);

  React.useEffect(() => {
    dispatch(
      productData({
        product_name: props?.templateData?.template_name,
        product_id: props?.templateData?.string_id,
        amount: props?.templateData?.payment?.inrAmount,
      })
    );
    setAnotherData([]);

    if (props?.templateData?.tags[0]) {
      api
        .searchTemplate({
          keywords:
            props?.templateData?.tags?.[0] === "Poster"
              ? props?.templateData?.tags?.[1]
              : props?.templateData?.tags?.[0],
          page: 1,
        })
        .then((response) => {
          const res = response as SearchTempType;
          setAnotherData(res?.datas);
          setLoading(false);
        })
        .catch((err) => {
          consoleLog("searchTemplate: ", err);
        });
    }
  }, [props?.templateData]);

  React.useEffect(() => {
    if (!props?.templateData.video) {
      setImageIndex(0);
      setShowImage(props?.templateData?.thumbArray?.[0]);
    }
  }, [props?.templateData]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 7.77;
      case screenWidth > 1200:
        return 6.49;
      case screenWidth > 1023:
        return 5.49;
      case screenWidth > 700:
        return 4.49;
      case screenWidth > 550:
        return 3.35;
      default:
        return 2.22;
    }
  }, [screenWidth]);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  React.useEffect(() => {
    const container = document.getElementById(containerId);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [containerId, handleScroll]);

  const handleNextClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(containerId) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleVidoshow = () => {
    if (isMobile || isTablet) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.crafty.art"
      );
      return;
    }
    if (!token) {
      dispatch(openLogin(true));
      return;
    }
    if (
      props?.templateData?.is_premium &&
      !userPremiumGet() &&
      !isPurchased(purchaseItems, {
        id: props?.templateData?.string_id,
        type: 0,
      })
    ) {
      setShowPremiumBox(true);
    } else window.open(`${editorUrl}${props?.templateData?.id_name}`);
  };

  const handleImageshow = () => {
    setReloadKey(reloadKey + 1);
    if (isMobile || isTablet) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.crafty.art"
      );
      return;
    }
    if (!token) {
      dispatch(openLogin(true));
      return;
    }
    if (
      props?.templateData?.is_premium &&
      !userPremiumGet() &&
      !isPurchased(purchaseItems, {
        id: props?.templateData?.string_id,
        type: 0,
      })
    ) {
      setShowPremiumBox(true);
    } else window.open(`${editorUrl}${props?.templateData?.id_name}`);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const preloadImages = (imageUrls: any) => {
    const loadedImages: string[] = [];
    imageUrls.forEach((url: any) => {
      const img = new Image();
      img.src = url;
      loadedImages.push(url);
    });
    setImages(loadedImages);
  };

  const preloadVideos = (videoUrls: any) => {
    const loadedVideos: string[] = [];
    videoUrls.forEach((url: any) => {
      const video = document.createElement("video");
      video.src = url;
      video.preload = "auto";
      loadedVideos.push(url);
    });
    setVideos(loadedVideos);
  };

  React.useEffect(() => {
    const videoPaths = [props?.templateData.video];

    preloadImages(props?.templateData?.thumbArray);
    preloadVideos(videoPaths);
  }, []);

  return (
    <Box className="px-[40px] max-sm:px-[10px] py-2">
      <CustomHead
        image={`/images/ogImage.png`}
        heading={props?.templateData?.template_name}
        text={props?.templateData?.meta_description}
      />
  

      <Box>
        <Box className="flex  my-[20px] gap-[50px] max-sm:gap-[10px] max-2md:flex-col max-2md:h-auto">
          <Box className="w-[66%]  max-sm:w-full mx-auto">
            <Box className="rounded-[4px] h-[450px]  bg-[#F4F7FE] flex justify-center items-center">
              <video
                preload="auto"
                src={`${showImage === "video-item" ? videos[0] : ""}`}
                 loop
                muted
                autoPlay
                onLoadedData={handleVideoLoaded}
                className="h-[430px] w-auto max-sm:w-auto  max-sm:h-auto max-sm:max-h-[400px] rounded-[4px] cursor-pointer"
                style={{
                  display: `${showImage === "video-item" ? "block" : "none"}`,
                }}
                onLoad={() => {
                  setIsLoading(true);
                }}
                onClick={handleVidoshow}
                poster={props?.templateData.thumbArray?.[0]}
              ></video>
              <img
                crossOrigin="anonymous"
                src={images[imageIndex]}
                alt={props?.templateData?.template_name}
                className="h-[430px] w-auto max-sm:w-auto  max-sm:h-auto max-sm:max-h-[400px] rounded-[4px] cursor-pointer"
                style={{
                   display: `${showImage === "video-item" ? "none" : "block"}`,
                }}
                onClick={handleImageshow}
              />
            </Box>

            <Box
              className="relative"
              sx={{
                display:
                  props?.templateData?.thumbArray?.length > 1
                    ? "block"
                    : "none",
              }}
            >
              <Box
                className="flex items-center overflow-auto py-[20px] scroll_none  "
                id={containerId}
                sx={{
                  justifyContent: showNextButton ? "start" : "center",
                }}
              >
                {showPrevButton && (
                  <Box>
                    <button
                      className="pre_button z-[1] left-[0] md:left-[-20px]  flex"
                      style={{ top: "52%" }}
                      onClick={handlePrevClick}
                    >
                      <Icons.leftArrowIcon svgProps={{ width: 8 }} />
                    </button>
                  </Box>
                )}

                {props?.templateData.video && (
                  <Box
                    className="cursor-pointer rounded-[4px] mx-[5px]"
                    sx={{
                      border:
                        showImage === "video-item"
                          ? "2px solid #2ec6b8"
                          : "2px solid #ffff",
                    }}
                    onClick={() => {
                      handleClick();
                      setImageIndex(-1);
                      setShowImage("video-item");
                    }}
                  >
                    <video
                      preload="auto"
                      src={props?.templateData.video}
                      loop
                      muted
                      autoPlay={showImage === "video-item"}
                      className="w-[80px] rounded-[4px] cursor-pointer"
                      onLoad={() => {
                        setIsLoading(true);
                      }}
                      poster={props?.templateData.thumbArray?.[0]}
                    ></video>
                  </Box>
                )}

                {props?.templateData?.thumbArray?.map(
                  (image: string, index: number) => (
                    <Box
                      key={index}
                      className="cursor-pointer rounded-[4px] mx-[5px]"
                      sx={{
                        border:
                          showImage === image
                            ? "2px solid #2ec6b8"
                            : "2px solid #ffff",
                      }}
                      onClick={() => {
                        setImageIndex(index);
                        setShowImage(image);
                      }}
                    >
                      <Box className="w-[80px]">
                        <img
                          src={image}
                          crossOrigin="anonymous"
                          alt={props?.templateData?.template_name}
                          className="h-auto rounded-[4px]"
                        />
                      </Box>
                    </Box>
                  )
                )}
                {showNextButton && (
                  <Box>
                    <button
                      className="next_button right-[0] md:right-[-20px] flex  "
                      style={{ top: "52%" }}
                      onClick={handleNextClick}
                    >
                      <Icons.rightArrowIcon svgProps={{ width: 8 }} />
                    </button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box className="w-[33%] max-2md:w-full">
            <h1 className="text-[#1C3048] text-[24px] max-sm:text-[20px] font-[500] mb-3">
              {props?.templateData?.template_name}
            </h1>

            <Typography className="text-[#ABB2C7] text-[15px] mb-4">
              {props?.templateData?.category_size}
            </Typography>

            <Box>
              <Box>
                <button
                  onClick={() => {
                    if (isMobile || isTablet) {
                      window.open(
                        "https://play.google.com/store/apps/details?id=com.crafty.art"
                      );
                      return;
                    }
                    if (!token) {
                      dispatch(openLogin(true));
                      return;
                    }
                    if (
                      props?.templateData?.is_premium &&
                      !userPremiumGet() &&
                      !isPurchased(purchaseItems, {
                        id: props?.templateData?.string_id,
                        type: 0,
                      })
                    ) {
                      setShowPremiumBox(true);
                    } else
                      window.open(
                        `${editorUrl}${props?.templateData?.id_name}`
                      );
                  }}
                  className="text-white w-full py-[10px] rounded-[6px] flex items-center cursor-pointer justify-center gap-3"
                  style={{
                    background:
                      "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                  }}
                >
                  {props?.templateData?.is_premium && (
                    <span className="w-[22px] ml-[8px]">
                      <Icons.pricingIcon svgProps={{ width: 22, height: 21 }} />
                    </span>
                  )}
                  Customize this template
                </button>
              </Box>
            </Box>

            <div className="py-4">
              <IconsText
                image={<Icons.tModalCustomizeIcon svgProps={{ width: 20 }} />}
                text={`Customize ${props?.templateData?.category_name} with our online editing tool`}
              />
              <IconsText
                image={<Icons.tModalSmartphoneIcon svgProps={{ width: 20 }} />}
                text="Edit and Download"
              />
              <IconsText
                image={<Icons.tModalPublishIcon svgProps={{ width: 20 }} />}
                text="Share and publish anywhere"
              />

              {props?.templateData?.is_premium && (
                <IconsText
                  image={<Icons.premiumIcon svgProps={{ width: 20 }} />}
                  text="This Template contains paid elements"
                />
              )}
            </div>
          </Box>
        </Box>

        <h2 className="text-[#1C3048] text-[23px] max-sm:text-[20px] font-[500] pt-4 my-3">
          Templates with the same style and concept
        </h2>
        <Box>
          {loading && (
            <Box
              sx={{
                minHeight: "500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box className="text_linear font-[700 text-[20px]">
                Loading....
              </Box>
            </Box>
          )}
          <Box>
            <StackGrid
              columnWidth={screenWidth / multiSizeFixSize}
              duration={0}
            >
              {anotherData
                ?.filter(
                  (t) => t.template_id !== props?.templateData?.template_id
                )
                ?.map((templates, index) => (
                  <ImageBox
                    key={index}
                    templates={templates}
                    screenWidth={screenWidth}
                    multiSizeFixSize={multiSizeFixSize}
                    setIdName={setIdName}
                    setOpenModal={setOpenModal}
                    index={index}
                  />
                ))}
            </StackGrid>
          </Box>
          <Box className="my-[50px] w-[80%] mx-auto px-[30px]  max-sm:w-full">
            <h2 className="text-[26px] max-sm:text-[23px] text-center text-[#1C3048] font-semibold mb-3">
              {props?.templateData?.h2_tag}
            </h2>

            {(Array.isArray(props?.templateData?.description)
              ? props.templateData.description
              : [props?.templateData?.description ?? ""]
            ).map((line: string, index: number) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{
                  __html: line.includes("<h2>")
                    ? line.replace(
                        "<h2>",
                        '<h2 style="font-size: 22px; margin-top: 25px;">'
                      )
                    : line,
                }}
                className="mb-3 html_content"
              />
            ))}
          </Box>
        </Box>
      </Box>

      <TemplateModal
        open={openModal}
        template={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />

      <ShowPremiumDialog
        scroll_none={false}
        open={showPremiumBox}
        setOpen={setShowPremiumBox}
        tempData={{
          id: props?.templateData?.string_id,
          type: 0,
          usdAmount: props?.templateData?.payment?.usdAmount,
          usdVal: props?.templateData?.payment?.usdVal,
          inrAmount: props?.templateData?.payment?.inrAmount,
          inrVal: props?.templateData?.payment?.inrVal,
        }}
      />
    </Box>
  );
}
