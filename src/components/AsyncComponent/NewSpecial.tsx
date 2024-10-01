"use client";
import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import CustomHead from "../common/CustomHead";
import FaqsBox from "../common/FAQs";
import QuestionsTitle from "../common/QuestionsTitle";
import LeftImageVideo from "./SpecialPageComponent/LeftImageVideo";
import LoadMoreHere from "./SpecialPageComponent/LoadMoreHere";
import RightImageVideo from "./SpecialPageComponent/RightImageVideo";
import SpecialTemplates from "./SpecialPageComponent/SpecialTemplates";
import Breadcrumb from "../common/Breadcrumb";

export default function NewSpecialPage(props: { data: any; slug: string;   slugId: string;}) {
 const [activeStep, setActiveStep] = useState<number>(1);

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

        <Box>
          <link
            rel="canonical"
            title={props?.data?.meta_title}
            href={`https://www.craftyartapp.com/${props.slugId[0]}/templates`}
          />
        </Box>

        <Box className="">
          <Box className="py-[10px] px-[10px]">
            <Breadcrumb
              data={[
                { name: "Home", path: "/" },
                { name: props?.data?.breadcrumb, current: true },
              ]}
            />
          </Box>
          <Box
            className=" bg-cover bg-no-repeat max-lg:px-[20px] max-sm:h-auto"
            sx={{
              backgroundImage:
                props?.data?.hero_bg_option === "image"
                  ? `url(${props?.data?.hero_background_image})`
                  : "",
              backgroundColor:
                props?.data?.hero_bg_option === "color"
                  ? props?.data?.colors
                  : "",
            }}
          >
            <Box className="flex flex-col items-center p-5 lg:p-[70px] gap-5">
              <Typography
                className="text-[30px] 2xl:text-[47px] text-center max-sm:text-[25px] font-semibold"
                variant="h1"
              >
                {props?.data?.title}
              </Typography>
              <Box className="flex flex-col items-center gap-2">
                <Typography className="text-[18px] max-sm:text-[15px] font-medium w-[70%] max-sm:w-full mb-3 text-black mx-auto text-center">
                  {props?.data?.description}
                </Typography>
              </Box>
              <Button
                sx={{
                  textTransform: "unset",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "white",
                  whiteSpace: "nowrap",
                  opacity: "1",
                  width: "180px",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                className="bg-[#7F51F2] py-[10px] px-[15px] text-white"
              >
                {props?.data?.button}
              </Button>
            </Box>
          </Box>
        </Box>

        <div
          style={{
            backgroundImage: `url(${props.data.body_background_image})` ?? "",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
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
                ) : item?.type === "how_to_make" ? (
                  <Box className="pt-[30px] px-[15px]">
                    <Typography
                      variant="h2"
                      className="text-[#1C3048] text-[30px] max-sm:text-[25px] text-center font-[600] mb-3"
                    >
                      {item?.value[0].heading_title}
                    </Typography>
                    <Typography className="text-center md:w-[70%] mx-auto">
                      {item?.value[0].heading_desc}
                    </Typography>
                    <Box className="flex gap-5 py-[30px] sm:py-[50px] w-full xl:w-[75%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
                      <Box className="flex-1 max-lg:order-2  max-lg:w-[100%]">
                        <Box className="flex gap-3 mb-10">
                          {item?.value.map((item: any, index: number) => (
                            <Box
                              key={index}
                              className={`${
                                activeStep === index + 1
                                  ? "bg-[#7F51F2] text-white"
                                  : "bg-[#EDF0F9] text-[#5C626A]"
                              } text-[20px] font-semibold cursor-pointer h-[38px] w-[40px] rounded-full flex justify-center items-center`}
                              onClick={() => setActiveStep(index + 1)}
                            >
                              {index + 1}
                            </Box>
                          ))}
                        </Box>

                        {item?.value.map((item: any, index: number) => (
                          <Box
                            sx={{
                              display:
                                activeStep === index + 1 ? "block" : "none",
                            }}
                          >
                            <Typography
                              className="inline-block mb-4"
                              sx={{ borderBottom: "1px solid black" }}
                            >
                              Step {activeStep}
                            </Typography>
                            <Typography className="mb-5 font-semibold text-[20px]">
                              {item?.title}
                            </Typography>
                            <Typography className="text-[#5C626A] text-[15px]">
                              {item?.description}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      <Box className="flex-1  flex  max-lg:pb-5 max-lg:order-1 justify-end">
                        {item?.value.map((item: any, index: number) => (
                          <img
                            style={{
                              display:
                                activeStep === index + 1 ? "block" : "none",
                            }}
                            src={item?.image}
                            alt={"logo template"}
                            className="object-contain w-[500px] max-lg:w-[400px] max-sm:w-full"
                          />
                        ))}
                      </Box>
                    </Box>
                    <Box className="flex justify-center">
                      <Button
                        sx={{
                          textTransform: "unset",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "white",
                          whiteSpace: "nowrap",
                          opacity: "1",
                          width: "180px",
                          borderRadius: "5px",
                          "&:hover": {
                            backgroundColor: "white",
                          },
                        }}
                        className="bg-[#7F51F2] text-white my-10 p-0"
                      >
                        <a
                          target={
                            item?.value[0]?.button_open_in_new_tab === "on"
                              ? "_blank"
                              : "_self"
                          }
                          className="py-[10px] px-[15px w-full"
                          href={item?.value[0]?.button_url}
                        >
                          {item?.value[0]?.button_title}
                        </a>
                      </Button>
                    </Box>
                  </Box>
                ) : item?.type === "category_content" ? (
                  <div className="pt-20">
                    <div className="h-auto 2xl:mx-64 bg-[#EBF6FC] rounded-2xl border border-black">
                      <div className="mx-16 pt-20">
                        <img
                          src="/images/tools/resume-maker/img1.png"
                          alt={"logo template"}
                        />
                      </div>
                      <div>
                        <Box className="h-auto  bg-cover bg-no-repeat max-lg:px-[20px] max-sm:h-auto max-sm:pb-[100px]">
                          <Box className="flex flex-col items-center gap-5">
                            <div className="flex justify-center">
                              <div className="max-lg:hidden">
                                <img
                                  src="/images/tools/resume-maker/img2.png"
                                  alt={"logo template"}
                                  className="w-[50px] h-[112px] mx-10"
                                />
                              </div>
                              <h1 className="text-[20px] lg:text-[30px] text-center max-sm:text-2xl font-semibold lg:w-[50%] pt-20">
                                {item?.value[0].title}
                              </h1>
                            </div>
                            <Box className="flex flex-col items-center gap-2">
                              <p className="px-4">
                                {item?.value[0]?.description}
                              </p>
                              <Button
                                sx={{
                                  textTransform: "unset",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "white",
                                  whiteSpace: "nowrap",
                                  opacity: "1",
                                  width: "180px",
                                  borderRadius: "5px",
                                  "&:hover": {
                                    backgroundColor: "white",
                                  },
                                }}
                                className="bg-[#7F51F2] text-white ] my-10 p-0"
                              >
                                <a
                                  className="py-[10px] px-[15px w-full"
                                  href={item?.value[0]?.button_url}
                                >
                                  {item?.value[0]?.button_title}
                                </a>
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </div>
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
                          {/* <Link
                          prefetch={false}
                          rel="nofollow"
                          href={item?.value?.button_link}
                        >
                          {item?.value?.button}
                        </Link> */}
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
        </div>

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
