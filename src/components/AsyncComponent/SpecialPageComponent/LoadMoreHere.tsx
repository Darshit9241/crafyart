import { Box, Button, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import TemplateModal from "../../singleTemplate/TemplateModal";
import { consoleLog } from "@/src/commonFunction/console";
import { SearchTempType } from "@/src/interface/searchTemplateType";
import api from "@/src/clientApi/api";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import { TemplateDataType } from "@/src/interface/commonType";
import ImageBox from "../../common/ImageBox";

export default function LoadMoreHere(props: { keyword: string }) {
  const screenWidth = useScreenWidth();
  const screenHeight = useScreenHeight();
  const [data, setData] = useState<TemplateDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [idName, setIdName] = useState<TemplateDataType | any>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  const getSearchList = (pages: number) => {
    setLoadMore(true);
    setNotFound(false);
    api
      .specialTemplates({
        keywords: props.keyword,
        page: pages,
      })
      .then((res) => {
        setLoadMore(false);
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
        consoleLog("specialTemplates: ", error);
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
  }, [page]);

  return (
    <div>
      <>
        <Box className="px-[10px] sm:px-[50px] pt-[15px]">
          <Typography
            sx={{
              color: "#1C3048",
              textAlign: "center",
              fontWeight: "500",
            }}
            className="text-[25px] sm:text-[36px]"
          >
            Start Explore {props.keyword ? `${props.keyword} ` : "Templates"}
          </Typography>

          <Typography
            sx={{
              color: "#1C3048",
              fontSize: "18px",
              textAlign: "center",
              fontWeight: "500",
              mt: "20px",
              mb: "40px",
            }}
          >
            Get a head start with fully customizable{" "}
            {props.keyword ? `${props.keyword}` : "Templates"}
          </Typography>
          <Box sx={{ display: notFound ? "none" : "block" }}>
            <StackGrid
              columnWidth={screenWidth / multiSizeFixSize}
              duration={0}
            >
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
              {loadMore ? (
                <Box className="text_linear font-[700 text-[20px]">
                  Loading....
                </Box>
              ) : (
                <Button
                  className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
                  sx={{ display: isLastPage ? "none" : "block" }}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  LOAD MORE
                </Button>
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
    </div>
  );
}
