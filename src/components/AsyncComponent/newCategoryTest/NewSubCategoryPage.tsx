"use client";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import ImageBox from "@/src/components/common/ImageBox";
import { TemplateDataType } from "@/src/interface/commonType";
import { RootState } from "@/src/redux";
import { Box, Button, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StackGrid from "react-stack-grid";
import FilterBox from "../../filter/FilterBox";
import SubSubCategoryDataBox from "./components/SubSubCategoryDataBox";
import api from "@/src/clientApi/api";
import MobileImageBox from "../../common/MobileImageBox";

const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const FestivalBanner = dynamic(
  () => import("@/src/components/categoryStaticComponents/FestivalStatic")
);

const FlyerStatic = dynamic(
  () => import("@/src/components/categoryStaticComponents/FlyerStatic")
);

const InvitationStatic = dynamic(
  () => import("@/src/components/categoryStaticComponents/InvitationStatic")
);

const LogoStatic = dynamic(
  () => import("@/src/components/categoryStaticComponents/LogoStatic")
);

const QuotesStatic = dynamic(
  () => import("@/src/components/categoryStaticComponents/QuotesStatic")
);

const ResumeStatic = dynamic(
  () => import("@/src/components/categoryStaticComponents/ResumeStatic")
);

const Breadcrumb = dynamic(() => import("@/src/components/common/Breadcrumb"));

const TemplateModal = dynamic(
  () => import("@/src/components/singleTemplate/TemplateModal")
);

const staticBox: Record<string, JSX.Element> = {
  invitation: <InvitationStatic />,
  "a4-invitation": <InvitationStatic />,
  flyer: <FlyerStatic />,
  "quotes-post-square": <QuotesStatic />,
  "quotes-instagram-story": <QuotesStatic />,
  logos: <LogoStatic />,
  "resume-portrait": <ResumeStatic />,
  latest: <FestivalBanner />,
};

export default function NewSubCategoryTest(props: {
  categoryData: CategoryDataApiResponse;
  slug1: string;
  slugId: string;
  categoryId: string;
  searchData: SearchParamsType;
  filterData: any;
}) {
  const id = props?.categoryId;
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const screenWidth = useScreenWidth();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [contentData, setContentData] = useState<any | any>([]);
  const [page, setPage] = useState<number>(1);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [idName, setIdName] = useState<TemplateDataType | any>(null);
  const tempIdValue = useSelector((state: RootState) => state.actions.tempId);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPreviousMuted, setIsPreviousMuted] = useState(true);
  const [mobileStatVideo, setMobileStatVideo] = useState(null);


  useEffect(() => {
    setData([]);
    setIsLoading(true);
    setTimeout(() => {
      setData(props?.categoryData?.data?.template_data);
      setPage(1);
      setIsLastPage(props?.categoryData?.data?.isLastPage);
      setIsLoading(false);
    }, 100);
  }, [props.categoryData]);

  useEffect(() => {
    setLoadMore(true);
    if (page > 1) {
      api
        .getCategoryDatas({
          ...props.filterData,
          page: page,
        })
        .then((response: unknown) => {
          const res = response as any;
          setLoadMore(false);
          setIsLastPage(res?.data?.isLastPage);
          if (res?.data?.template_data) {
            setData((prevData) => [
              ...(prevData || []),
              ...(res?.data?.template_data || []),
            ]);
          }
        })
        .catch((err) => {
          setLoadMore(false);
        });
    } else setLoadMore(false);
  }, [page]);

  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(tempIdValue);
    element?.scrollIntoView();
  }, [data]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1600:
        return 7.47;
      case screenWidth > 1500:
        return 7.97;
      case screenWidth > 1330:
        return 6.47;
      case screenWidth > 1200:
        return 5.47;
      case screenWidth > 1200:
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

  return (
    <>
      <Box className="bg-[#F4F7FE] px-[10px] sm:px-[16px]">
        <CustomHead
          image={`/images/ogImage.png`}
          heading={props?.categoryData?.data?.seo_data?.meta_title}
          text={props?.categoryData?.data?.seo_data?.meta_desc}
        />

        <Box>
          <link
            rel="canonical"
            title={props?.categoryData?.data?.seo_data?.meta_title}
            href={`https://www.craftyartapp.com/${props.slugId}`}
          />
        </Box>

        <Box className="pt-[15px] gap-[50px] flex items-center">
          <FilterBox
            searchData={props.searchData}
            category_id={props.categoryData?.data?.category_id}
          />

          <div className="max-sm:hidden">
            <Breadcrumb
              data={[
                { name: "Home", path: "/" },
                ...(props.slug1
                  ? [
                      {
                        name: props.slug1,
                        current: false,
                        path: `/templates/${props.slug1}`,
                      },
                    ]
                  : []),
                ...(props?.categoryId
                  ? [
                      {
                        name: props.categoryId,
                        current: props.searchData?.query ? false : true,
                        path: props.searchData?.query
                          ? `/templates/${props.slug1}/${props.categoryId}`
                          : "",
                      },
                    ]
                  : []),

                ...(props.searchData?.query
                  ? [{ name: props.searchData?.query, current: true }]
                  : []),
              ]}
            />
          </div>
        </Box>
        <Box sx={{ minHeight: `${1000}px` }}>
          <Box
            sx={{
              background:
                "linear-gradient(268.03deg, #5961F8 -0.66%, #5961F8 -0.65%, #497DEC 22.41%, #15D8C5 100%, #15D8C5 100%)",
              display: "flex",
              alignItems: "center",
              margin: "10px auto",
              width: "100%",
              overflow: "hidden",
            }}
            className="lg:pl-[80px] max-lg:px-[20px] h-auto max-lg:py-[50px] max-sm:py-[20px] rounded-[8px]"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "10px 0",
              }}
              className="w-full lg:w-[57%] max-lg:items-center"
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  width: "100%",
                  fontWeight: "500",
                  lineHeight: "40px",
                }}
                className="max-lg:text-center text-[20px] sm:text-[40px]"
                variant="h1"
              >
                {props?.categoryData?.data?.seo_data?.h1_tag}
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#ffff",
                  width: "100%",
                  marginBottom: "10px",
                }}
                className="max-lg:text-center max-sm:text-[14px]"
              >
                {props?.categoryData?.data?.seo_data?.short_desc}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "43%",
                alignItems: "center",
                justifyContent: "end",
              }}
              className="hidden lg:flex"
            >
              <Box sx={{ height: "100%" }}>
                <img
                  src={`${assetsUrl}/w_assets/images/categoryBanner.png`}
                  alt={contentData?.h1_tag}
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingRight: "0px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <SubSubCategoryDataBox
            data={props?.categoryData?.data?.new_related_tags}
            searchData={props?.searchData}
          />

          {data?.length > 0 ? (
            <StackGrid
              columnWidth={screenWidth / multiSizeFixSize}
              duration={0}
            >
              {data?.map((templates: any, index: number) =>
                screenWidth > 600 ? (
                  <ImageBox
                    key={index}
                    templates={templates}
                    screenWidth={screenWidth}
                    multiSizeFixSize={multiSizeFixSize}
                    setIsMuted={setIsMuted}
                    isMuted={isMuted}
                    setIsPreviousMuted={setIsPreviousMuted}
                    isPreviousMuted={isPreviousMuted}
                    setIdName={setIdName}
                    setOpenModal={setOpenModal}
                    index={index}
                  />
                ) : (
                  <MobileImageBox
                    key={index}
                    templates={templates}
                    screenWidth={screenWidth}
                    multiSizeFixSize={multiSizeFixSize}
                    setMobileStatVideo={setMobileStatVideo}
                    mobileStatVideo={mobileStatVideo}
                    setIdName={setIdName}
                    setOpenModal={setOpenModal}
                    index={index}
                  />
                )
              )}
            </StackGrid>
          ) : !isLoading ? (
            <Box className="flex flex-col h-full items-center justify-center pt-[40px]">
              <img
                crossOrigin="anonymous"
                src="/images/NoDataFound.svg"
                alt="NoDataFound"
                className="w-[250px]"
              />
            </Box>
          ) : (
            ""
          )}

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
      </Box>

      <Box className="my-[50px] w-[80%] mx-auto px-[30px] max-sm:w-full">
        <h2 className="text-[26px]  max-sm:text-[23px] text-[#1C3048] font-semibold mb-3 text-center">
          {props?.categoryData?.data.seo_data?.h2_tag}
        </h2>
        <div>
          {(Array.isArray(props?.categoryData?.data?.seo_data?.long_desc)
            ? props.categoryData.data.seo_data.long_desc
            : [props?.categoryData?.data?.seo_data?.long_desc ?? ""]
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
        </div>
      </Box>

      {staticBox[id]}

      <TemplateModal
        open={openModal}
        template={idName}
        setOpen={setOpenModal}
        setId={setIdName}
      />
    </>
  );
}
