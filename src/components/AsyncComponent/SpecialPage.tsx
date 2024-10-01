"use client";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import CustomHead from "../common/CustomHead";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import LeftImageVideo from "./SpecialPageComponent/LeftImageVideo";
import LoadMoreHere from "./SpecialPageComponent/LoadMoreHere";
import RightImageVideo from "./SpecialPageComponent/RightImageVideo";
import SpecialTemplates from "./SpecialPageComponent/SpecialTemplates";

export default function SpecialPage(props: { data: any; slug: string }) {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: props?.data?.faqs?.map((item: any) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </Head>

      <Box>
        <CustomHead
          image={props?.data?.image}
          heading={props?.data?.meta_title}
          text={props?.data?.meta_desc}
        />
        <Box className="px-[10px] sm:px-[16px]">
          <Box className="pt-[15px]">
            <Breadcrumb
              data={[
                { name: "Home", path: "/" },
                { name: props?.data?.breadcrumb, current: true },
              ]}
            />
          </Box>

          <Box
            className="bg_linear"
            sx={{ display: props?.data?.banner ? "block" : "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                margin: "10px auto",
                width: "100%",
                overflow: "hidden",
              }}
              className="lg:pl-[150px] max-lg:px-[20px] h-auto sm:h-[420px] max-sm:py-[50px] max-w-[2400px]"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
                className="w-full lg:w-[57%] max-lg:items-center max-w-[2400px]"
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "100%",
                    fontWeight: "600",
                    lineHeight: "48px",
                  }}
                  className="max-lg:text-center text-[30px] sm:text-[40px]"
                  variant="h1"
                >
                  {props?.data?.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#000",
                    width: "100%",
                    fontWeight: "500",
                  }}
                  className="max-lg:text-center"
                >
                  {props?.data?.description}
                </Typography>

                <Link prefetch={false} href={props?.data?.button_link}>
                  <Button
                    style={{
                      backgroundColor: "white",
                      width: "auto",
                      textTransform: "unset",
                      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
                      border: "none",
                      padding: "8px 10px",
                      borderRadius: "5px",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <span className="text_linear">{props?.data?.button}</span>
                  </Button>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "43%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="hidden lg:flex"
              >
                {props?.data?.banner_type === "video" ? (
                  <video
                    src={`https://specialpage.epsilonitservice.com/assets/banners/${props?.data?.banner}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-contain w-[550px] max-lg:w-[400px] max-sm:w-full"
                  >
                    <track
                      kind="captions"
                      label="English"
                      src={`https://specialpage.epsilonitservice.com/assets/banners/${props?.data?.banner}`}
                      default
                    />
                  </video>
                ) : (
                  <img
                    src={`${assetsUrl}/${props?.data?.banner}`}
                    alt="resumeBanner"
                    style={{
                      width: "auto",
                      height: "auto",
                      paddingRight: "0px",
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              background:
                "url(https://assets.craftyart.in/w_assets/images/sKeywordBanner.png)",
              margin: "10px auto",
              width: "100%",
              overflow: "hidden",
              backgroundSize: "cover",
              py: "50px",
              display: props?.data?.banner ? "none" : "block",
            }}
            className="lg:pl-[80px] max-lg:px-[20px] h-auto max-lg:py-[50px] rounded-[8px] max-sm:py-[20px]"
          >
            <Typography
              sx={{
                color: "#ffffff",
                width: "100%",
                fontWeight: "500",
                lineHeight: "40px",
              }}
              className="text-center text-[20px] sm:text-[35px] "
              variant="h1"
            >
              {props?.data?.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#ffff",
                width: "100%",
                marginBottom: "10px",
              }}
              className="text-center max-sm:text-[14px] py-[10px] w-[95%] sm:w-[70%] mx-auto my-[10px]"
            >
              {props?.data?.description}
            </Typography>
          </Box>
        </Box>

        <Box className="dynamic_content">
          {props?.data?.contents?.map((item: any, index: number) => (
            <Box>
              {item?.type === "content" ? (
                index % 2 === 0 ? (
                  <RightImageVideo
                    title={item?.value?.h2}
                    point={item?.value?.content?.map(
                      (e: any, index: number) => (
                        <div className="special_box">
                          <React.Fragment key={index}>
                            <div
                              dangerouslySetInnerHTML={{ __html: e.value }}
                            ></div>
                          </React.Fragment>
                        </div>
                      )
                    )}
                    buttonName={item?.value?.button?.value}
                    buttonSpace={"0px"}
                    path={item?.value?.button?.link}
                    imageSection={
                      item?.value?.images || item?.value?.video ? (
                        <>
                          {item?.value?.images ? (
                            <img
                              src={item?.value?.images?.link}
                              alt={item?.value?.images?.alt}
                              className="object-contain w-[500px] max-sm:w-[90%]"
                            />
                          ) : (
                            <video
                              src={`${item?.value?.video?.link}`}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="object-contain w-[550px] max-lg:w-[400px] max-sm:w-full"
                            >
                              <track
                                kind="captions"
                                label="English"
                                src={`${item?.value?.video?.link}`}
                                default
                              />
                            </video>
                          )}
                        </>
                      ) : (
                        ""
                      )
                    }
                  />
                ) : (
                  <LeftImageVideo
                    title={item?.value?.h2}
                    point={item?.value?.content?.map(
                      (e: any, index: number) => (
                        <div className="special_box">
                          <React.Fragment key={index}>
                            <div
                              dangerouslySetInnerHTML={{ __html: e.value }}
                            ></div>
                          </React.Fragment>
                        </div>
                      )
                    )}
                    buttonName={item?.value?.button?.value}
                    buttonSpace={"0px"}
                    path={item?.value?.button?.link}
                    imageSection={
                      item?.value?.images || item?.value?.video ? (
                        <>
                          {item?.value?.images ? (
                            <img
                              src={item?.value?.images?.link}
                              alt={item?.value?.images?.alt}
                              className="object-contain w-[500px] max-sm:w-[90%] "
                            />
                          ) : (
                            <video
                              src={`${item?.value?.video?.link}`}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="object-contain w-[550px] max-lg:w-[400px] max-sm:w-full"
                            >
                              <track
                                kind="captions"
                                label="English"
                                src={`${item?.value?.video?.link}`}
                                default
                              />
                            </video>
                          )}
                        </>
                      ) : (
                        ""
                      )
                    }
                  />
                )
              ) : item?.type === "api" ? (
                item?.value?.keyword_target === "loadmore_here" ? (
                  <LoadMoreHere keyword={item?.value?.keyword} />
                ) : (
                  <SpecialTemplates
                    getAll={item?.value?.keyword_link}
                    keyword={item?.value?.keyword}
                  />
                )
              ) : (
                <div
                  style={{
                    background:
                      "linear-gradient(268deg, #5961f836 -0.66%, #15d8c536 100%, #15d8c53b 100%)",
                  }}
                  className="flex w-[70%] max-xl:w-[90%] mx-auto rounded-[30px] mb-10 max-lg:flex-col max-w-[2400px] mt-[40px]"
                >
                  <div className="flex-1 p-[40px] max-sm:p-[30px]">
                    <h3 className="text-[46px] max-sm:text-[28px] font-[700]">
                      {item?.value.title}
                    </h3>
                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.value?.description,
                        }}
                      ></div>
                    </p>

                    <div className="flex pt-[50px]">
                      <Button
                        style={{
                          background:
                            "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                          width: "fit-content",
                          fontSize: "18px",
                          textTransform: "unset",
                          borderRadius: "5px",
                          fontWeight: "500",
                          color: "white",
                          padding: "8px 20px",
                        }}
                        className="bg_linear ml-[40px] max-lg:mx-auto text-[14px] 2sm:text-[17px]"
                      >
                        <Link
                          prefetch={false}
                          rel="nofollow"
                          href={item?.value?.button_link}
                        >
                          {item?.value?.button}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 py-[40px]">
                    <div className="mr-[-42px] max-lg:mr-0">
                      <img
                        src={item?.value?.image}
                        alt=""
                        className="max-h-[300px] w-auto block mx-auto"
                      />
                    </div>
                  </div>
                </div>
              )}
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            mx: "auto",
            display: props?.data?.faqs ? "flex" : "none",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "1000px",
          }}
          className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] mb-[100px] mt-[50px] special_box"
        >
          <QuestionsTitle
            text1={"Some Popular"}
            text2={"Questions/Answered"}
            text3=""
          />

          <Box sx={{ p: "20px" }}></Box>

          {props?.data?.faqs?.map((item: any) => (
            <FaqsBox
              heading={item?.question}
              text={
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.answer,
                    }}
                  ></div>
                </>
              }
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
