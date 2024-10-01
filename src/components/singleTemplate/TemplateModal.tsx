import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { calculateHeight } from "@/src/commonFunction/calculateHeight";
import { isPurchased } from "@/src/commonFunction/isPurchased";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import { TemplateDataType } from "@/src/interface/commonType";
import { SearchTempType } from "@/src/interface/searchTemplateType";
import { RootState } from "@/src/redux";
import { authCookiesGet, userPremiumGet } from "@/src/redux/action/AuthToken";
import { openLogin, productData } from "@/src/redux/reducer/actionDataReducer";
import { Box, Skeleton, Typography } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import StackGrid from "react-stack-grid";
import ShowPremiumDialog from "../templatePayment/ShowPremiumDialog";

interface PropType {
  image: string | any;
  text: string;
  isLoading: boolean;
}

const IconsText = ({ image, text, isLoading }: PropType) => {
  return isLoading ? (
    <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
      <Skeleton
        variant="rectangular"
        width={"30px"}
        height={`30px`}
        style={{
          borderRadius: `5px`,
        }}
      />

      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={`10px`}
        style={{
          borderRadius: `5px`,
        }}
      />
    </Typography>
  ) : (
    <Typography className="flex text-[#1C3048] text-[14px] gap-3 items-center py-2">
      {image}
      {text}
    </Typography>
  );
};

interface TemplateModalPropType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  template: TemplateDataType;
  setId: React.Dispatch<React.SetStateAction<TemplateDataType | any>>;
  currentPathname?: string;
}

export default function TemplateModal({
  open,
  setOpen,
  template,
  setId,
}: TemplateModalPropType) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const containerId = `slider`;
  const dispatch = useDispatch();
  const [token, setToken] = React.useState<string | null>(null);
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [anotherData, setAnotherData] = React.useState<SearchTempType[] | any>(
    null
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [anotherTempLoad, setAnotherTempLoad] = useState<boolean>(true);
  const [showImage, setShowImage] = useState<string>("");
  const [showPremiumBox, setShowPremiumBox] = useState<boolean>(false);
  const [showPrevButton, setShowPrevButton] = React.useState(false);
  const [showNextButton, setShowNextButton] = React.useState(false);
  const [showPreviewButton, setShowPreviewButton] = useState<string>("");

  const purchaseItems = useSelector(
    (state: RootState) => state.auth.setPurchaseItems
  );

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(authCookiesGet());
    }
  }, []);

  const searchApi = async (data: TemplateDataType) => {
    return api
      .searchTemplate({
        keywords:
          data?.tags?.[0] === "Poster" ? data?.tags?.[1] : data?.tags?.[0],
        page: 1,
      })
      .then((response: unknown) => {
        const res = response as SearchTempType;
        setAnotherData(res);
        setAnotherTempLoad(false);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    dispatch(
      productData({
        product_name: template?.template_name,
        product_id: template?.string_id,
        amount: template?.payment?.inrAmount,
      })
    );
    setShowImage(template?.thumbArray?.[0]);
    setAnotherTempLoad(true);
    setIsLoading(true);
    searchApi(template);
  }, [template, open]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6.92;
      case screenWidth > 1200:
        return 5.97;
      case screenWidth > 1023:
        return 6.92;
      case screenWidth > 700:
        return 4.92;
      case screenWidth > 600:
      case screenWidth > 550:
        return 2.35;
      default:
        return 2.35;
    }
  }, [screenWidth]);

  useEffect(() => {
    const htmlStyleElement = document.getElementById("html_style");

    if (htmlStyleElement) {
      if (open) {
        htmlStyleElement.style.overflow = "hidden";
      } else {
        htmlStyleElement.style.overflow = "auto";
      }
    }
  }, [open]);

  const scrollContainerRef: React.RefObject<HTMLDivElement> =
    React.useRef(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [isLoading, template]);

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

  return (
    <Box
      className="fixed top-0 bottom-0 left-0 right-0 z-[1000]"
      style={{
        backgroundColor: "#1c3048ba",
        visibility: open ? "visible" : "hidden",
      }}
    >
      <Box
        className="overflow-auto"
        ref={scrollContainerRef}
        sx={{
          height: `${screenHeight}px`,
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            background: "white",
            width: { xs: "100%", lg: "80%" },
            mx: "auto",
            borderRadius: "5px",
          }}
          className="my-[20px] max-sm:my-[0]"
        >
          <>
            <button
              className="fixed  z-[100] right-[8%] max-muiLG:right-[3%] max-muiLG:top-[3%] bg-white w-[30px] h-[30px] max-sm:w-[35px] max-sm:top-[2%] max-sm:right-[3%] p-[5px] rounded-[50%] max-muiLG:bg-[aliceblue] "
              onClick={() => {
                setId(null);
                setAnotherData(null);
                setOpen(false);
              }}
            >
              <Icons.modalCloseIcon svgProps={{ width: 20 }} />
            </button>
          </>
          <DialogContent className="px-[40px] max-sm:px-[20px]">
            <Box className="flex my-[20px] gap-[50px] max-2md:flex-col max-2md:h-auto">
              <Box className="w-[66%] mx-auto  max-sm:w-full">
                <Box className="rounded-[4px] h-[450px]  bg-[#F4F7FE] flex justify-center items-center">
                  <img
                    crossOrigin="anonymous"
                    src={showImage}
                    alt={template?.template_name}
                    className="h-[430px] w-auto max-sm:w-auto max-sm:max-h-[400px] rounded-[4px]"
                  />
                </Box>

                <Box
                  className="relative"
                  sx={{
                    display:
                      template?.thumbArray?.length > 1 ? "block" : "none",
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
                    {template?.thumbArray?.map(
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
                          onClick={() => setShowImage(image)}
                        >
                          <Box className="w-[80px]">
                            <img
                              crossOrigin="anonymous"
                              src={image}
                              alt={template?.template_name}
                              className="h-auto rounded-[4px]"
                            />
                          </Box>
                        </Box>
                      )
                    )}
                    {showNextButton && (
                      <Box>
                        <button
                          className="next_button right-[0] md:right-[-20px] flex "
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
                {open && (
                  <h1 className="text-[#1C3048] text-[24px] font-[500] mb-3">
                    {template?.template_name}
                  </h1>
                )}

                <Typography className="text-[#ABB2C7] text-[15px] mb-4">
                  {template?.category_size}
                </Typography>

                <Box>
                  <button
                    onClick={() => {
                      if (!token) {
                        dispatch(openLogin(true));
                        return;
                      }
                      if (
                        template?.is_premium &&
                        !userPremiumGet() &&
                        !isPurchased(purchaseItems, {
                          id: template?.string_id,
                          type: 0,
                        })
                      ) {
                        setShowPremiumBox(true);
                      } else window.open(`${domain}${template?.id_name}`);
                    }}
                    className="text-white w-full py-[10px] rounded-[6px] flex items-center cursor-pointer justify-center gap-3"
                    style={{
                      background:
                        "linear-gradient(266deg, #2EC6B8 43.07%, #32E4D4 131.91%)",
                    }}
                  >
                    {template?.is_premium && (
                      <span className="w-[22px] ml-[8px]">
                        <Icons.pricingIcon
                          svgProps={{ width: 22, height: 21 }}
                        />
                      </span>
                    )}
                    Customize this template
                  </button>
                </Box>

                <div className="py-4">
                  <IconsText
                    image={
                      <Icons.tModalCustomizeIcon svgProps={{ width: 20 }} />
                    }
                    text={`Customize ${template?.category_name} with our online editing tool`}
                    isLoading={false}
                  />
                  <IconsText
                    image={
                      <Icons.tModalSmartphoneIcon svgProps={{ width: 20 }} />
                    }
                    text="Edit and Download"
                    isLoading={false}
                  />
                  <IconsText
                    image={<Icons.tModalPublishIcon svgProps={{ width: 20 }} />}
                    text="Share and publish anywhere"
                    isLoading={false}
                  />

                  {template?.is_premium && (
                    <IconsText
                      image={<Icons.premiumIcon svgProps={{ width: 20 }} />}
                      text="This Template contains paid elements"
                      isLoading={false}
                    />
                  )}
                </div>
              </Box>
            </Box>

            <h2 className="text-[#1C3048] text-[23px] font-[500] pt-4 my-3">
              Templates with the same style and concept
            </h2>

            <Box>
              {anotherTempLoad && (
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
              <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
                {anotherData?.datas
                  ?.filter(
                    (t: TemplateDataType) =>
                      t.template_id !== template?.template_id
                  )
                  ?.map((templates: TemplateDataType, index: number) => (
                    <div
                      className="relative"
                      onMouseEnter={() =>
                        setShowPreviewButton(templates?.id_name)
                      }
                      onMouseLeave={() => setShowPreviewButton("")}
                    >
                      <span
                        className="w-[28px] absolute top-[16px] z-[1] cursor-pointer"
                        style={{
                          right: templates.is_premium ? "47px" : "15px",
                          opacity:
                            showPreviewButton === templates.id_name &&
                            !(isMobile || isTablet)
                              ? "1"
                              : "0",
                          transition: "0.3s all",
                        }}
                        onClick={() => {
                          setId(null);
                          setAnotherData(null);
                          setId(templates);
                          searchApi(templates);
                        }}
                        onMouseEnter={() =>
                          setShowPreviewButton(templates?.id_name)
                        }
                        onMouseLeave={() => setShowPreviewButton("")}
                      >
                        <Icons.PreviewIcon
                          svgProps={{ width: 27, height: 27 }}
                        />
                      </span>
                      {templates.is_premium && (
                        <span className="w-[28px] absolute right-[13px] top-[16px] z-[1]">
                          <Icons.proIcon svgProps={{ width: 27, height: 27 }} />
                        </span>
                      )}{" "}
                      <Link
                        prefetch={false}
                        key={index}
                        href={`/templates/p/${templates.id_name}`}
                        onClick={() => setOpen(false)}
                      >
                        <div
                          className=""
                          style={{
                            height: `${calculateHeight(
                              templates?.width,
                              templates?.height,
                              screenWidth / multiSizeFixSize
                            )}px`,
                            width: `${screenWidth / multiSizeFixSize}px`,
                          }}
                        >
                          <div className="w-full h-full p-[8px] relative">
                            <img
                              src={`/api/image/compress?url=${encodeURIComponent(
                                templates?.template_thumb
                              )}`}
                              alt={templates?.category_name}
                              className={`w-full h-full rounded-[5px] cursor-pointer `}
                              style={{
                                border: "1px solid #80808082",
                              }}
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </StackGrid>
            </Box>
          </DialogContent>
        </Box>
      </Box>
      {open && (
        <ShowPremiumDialog
          scroll_none={true}
          open={showPremiumBox}
          setOpen={setShowPremiumBox}
          tempData={{
            id: template?.string_id,
            type: 0,
            usdAmount: template?.payment?.usdAmount,
            usdVal: template?.payment?.usdVal,
            inrAmount: template?.payment?.inrAmount,
            inrVal: template?.payment?.inrVal,
          }}
        />
      )}
    </Box>
  );
}
