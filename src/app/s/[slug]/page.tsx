"use client";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import ImageBox from "@/src/components/common/ImageBox";
import { TemplateDataType } from "@/src/interface/commonType";
import { SearchTempType } from "@/src/interface/searchTemplateType";
import { Box, Skeleton, Typography } from "@mui/material";
import { debounce } from "lodash";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";

const TemplateModal = dynamic(
  () => import("@/src/components/singleTemplate/TemplateModal")
);

export default function page({ params }: any) {
  const { slug } = params;
  const searchName: string | any = slug;
  const formattedSearchName = searchName?.replace(/-/g, " ");
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [data, setData] = useState<TemplateDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<TemplateDataType | any>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  const getSearchList = (pages: number) => {
    setNotFound(false);
    api
      .searchTemplate({
        keywords: formattedSearchName,
        page: pages,
      })
      .then((res) => {
        const response = res as SearchTempType;
        if (response?.datas) {
          if (response?.datas?.length > 0) {
            setData((prevData) => [
              ...(prevData || []),
              ...(Array.isArray(response?.datas) ? response?.datas : []),
            ]);
            setNotFound(false);
          } else {
            setData([]);
            setNotFound(true);
          }
        }
        setIsLastPage(response?.isLastPage);
        setLoading(false);
      })
      .catch((error) => {
        consoleLog("searchTemplate: ", error);
        setNotFound(true);
      });
  };

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1600:
        return 7.47;
      case screenWidth > 1500:
        return 7.97;
      case screenWidth > 1200:
        return 7.47;
      case screenWidth > 1023:
        return 5.72;
      case screenWidth > 700:
        return 3.3;
      case screenWidth > 550:
        return 3.3;
      case screenWidth > 250:
        return 2.22;
      default:
        return 2.2;
    }
  }, [screenWidth]);

  useEffect(() => {
    getSearchList(page);
  }, [page, formattedSearchName]);

  useEffect(() => {
    setLoading(true);
    setPage(1);
    setData([]);
  }, [formattedSearchName]);

  const debouncedHandleScroll = debounce(() => {
    const scrollOffset = 200;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - scrollOffset
    ) {
      if (!isLastPage) {
        setPage((prev) => prev + 1);
      }
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [isLastPage, debouncedHandleScroll]);

  return (
    <>
      <title>{formattedSearchName + " " + "templates"}</title>
      <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px] pt-[15px]">
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={"100%"}
            height={`250px`}
            style={{
              borderRadius: `4px`,
              margin: "0px 0",
            }}
          />
        ) : (
          <Box
            sx={{
              background:
                "url(https://assets.craftyart.in/w_assets/images/searchBanner.png)",
              margin: "10px auto",
              width: "100%",
              overflow: "hidden",
              backgroundSize: "cover",
              py: "50px",
              display: data?.length > 0 ? "block" : "none",
            }}
            className="lg:pl-[80px]  max-lg:px-[20px] h-auto max-lg:py-[50px] max-sm:py-[20px] rounded-[8px]"
          >
            <Typography
              sx={{
                color: "#ffffff",
                width: "100%",
                fontWeight: "500",
                lineHeight: "40px",
              }}
              className="text-center text-[20px] sm:text-[35px]"
              variant="h1"
            >
              <span className="capitalize"> {formattedSearchName} </span>
              {formattedSearchName.includes("templates") ? "" : "templates"}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#ffff",
                width: "100%",
                marginBottom: "10px",
              }}
              className="text-center py-[10px] w-[70%] max-sm:w-full max-sm:text-[14px] mx-auto my-[10px]"
            >
              Explore High-Quality{" "}
              <span className="capitalize"> {formattedSearchName} </span>{" "}
              Templates for Your Next Design Project
            </Typography>
          </Box>
        )}

        <Box sx={{ display: notFound ? "none" : "block" }}>
          <StackGrid columnWidth={screenWidth / multiSizeFixSize} duration={0}>
            {data?.map((templates, index) => (
              <ImageBox
                key={index}
                templates={templates}
                screenWidth={screenWidth}
                multiSizeFixSize={multiSizeFixSize}
                setIdName={setIdName}
                setOpenModal={setOpenModal}
              />
            ))}
          </StackGrid>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "40px 0",
            }}
          >
            {!isLastPage && (
              <Box className="text_linear font-[700 text-[20px]">
                Loading....
              </Box>
            )}
          </div>
        </Box>

        {notFound && (
          <Box
            className="flex flex-col items-center justify-center"
            sx={{ minHeight: `${screenHeight - 87}px` }}
          >
            <img
              crossOrigin="anonymous"
              src="/images/NoDataFound.svg"
              alt="NoDataFound"
              className="w-[250px]"
            />
          </Box>
        )}
      </Box>

      <TemplateModal
        open={openModal}
        template={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />
    </>
  );
}
