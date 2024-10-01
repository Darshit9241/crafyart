"use client";
import CustomerSayingReview from "@/src/components/review/CustomerSayingReview";
import { authCookiesGet } from "@/src/redux/action/AuthToken";
import { openLogin } from "@/src/redux/reducer/actionDataReducer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import { Box, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const CustomHead = dynamic(() => import("@/src/components/common/CustomHead"));

const RightImageSection = dynamic(
  () => import("../wedding/components/RightImageSection")
);

const labels: { [index: string]: string } = {
  0: "0",
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL_2;
  const accessKey = process.env.NEXT_PUBLIC_API_KEY;
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;
  const [feedback, setFeedBack] = useState<string>("");
  const [editingReview, setEditingReview] = useState<any>(null);
  const [ratingValue, setRatingValue] = useState<number | null>(null);
  const [hover, setHover] = React.useState(-1);
  const [allReview, setAllReview] = useState<number>();
  const [analyticData, setAnalyticData] = useState<any>(null);
  const [userReview, setUserReview] = useState<any>([]);
  const uid = authCookiesGet();
  const textareaRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openTextArea, setOpenTextArea] = useState(true);
  const [loading, setLoading] = useState<boolean>(true);
  const data = { feedback: feedback, user_id: uid, rate: ratingValue };

  const toggleMenu = (index: number | null) => {
    setMenuOpen(!menuOpen);
  };

  const fetchAnalyticData = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/templates/api/reviews/allAnalytic`,
        { ...data, key: `${accessKey}` }
      );
      response.data;
      setLoading(false);
      setAnalyticData(response.data);
    } catch (error) {
      console.error("Error fetching analytic data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (openTextArea && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [openTextArea]);

  const handleEdit = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/templates/api/reviews/update/`,
        {
          key: `${accessKey}`,
          review_id: editingReview?.review_id,
          feedback: feedback,
          rate: ratingValue,
        }
      );
      response;
      handleSubmitList();
      toast.success("Review Updated successfully");
      fetchUserReviews();
      setOpenTextArea(false);
      setFeedBack("");
      setEditingReview(null);
      setRatingValue(null);
      await fetchUserReviews();
    } catch (error: any) {
      console.error("Error updating review:", error);
      toast.error(error.message);
    }
  };

  const handleDelete = async (id: any) => {
    toggleMenu(null);
    try {
      const response = await axios.post(
        `${apiUrl}/templates/api/reviews/delete/`,
        { id: id }
      );
      response;
      handleSubmitList();
      fetchUserReviews();
      setOpenTextArea(true);
    } catch (error) {
      console.error("Error deleting review:", error);
    } finally {
      toggleMenu(null);
    }
  };

  useEffect(() => {
    handleSubmitList();
    fetchAnalyticData();
    fetchUserReviews();
  }, []);

  const fetchUserReviews = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/templates/api/reviews/user_review`,
        { user_id: uid, key: `${accessKey}` }
      );
      if (response && response.status === 200) {
        handleSubmitList();
        setUserReview(response.data.datas);
        if (response.data.datas && uid) {
          setOpenTextArea(false);
        }
      }
    } catch (error) {
      console.error("Error fetching user reviews:", error);
    }
  };

  useEffect(() => {
    if (editingReview) {
      setFeedBack(editingReview?.feedback);
      setRatingValue(editingReview?.rate);
    }
  }, [editingReview]);

  const handleSubmit = async () => {
    if (!uid) {
      dispatch(openLogin(true));
      return;
    }

    if (!ratingValue) {
      toast.error("Please, Give Us Rating or Star");
      return;
    }

    if (!feedback) {
      toast.error("Please, Write Review");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/templates/api/reviews/submit`,
        { ...data, key: `${accessKey}` }
      );
      response.data;
      if (response && response.status === 200) {
        handleSubmitList();
        setFeedBack("");
        setRatingValue(null);
        fetchUserReviews();
        toast.success("Review submitted successfully");
      } else {
        toast.error("Failed to submit review.");
      }
    } catch (error) {
      toast.error("please fill all required fields");
    }
  };

  const handleSubmitList = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/templates/api/reviews/list`,
        { key: `${accessKey}` }
      );
      response.data;
      setAllReview(response.data.datas);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <>
      <CustomHead
        image={"/tools/Indian/banner.png"}
        heading={"Crafty Art Reviews: Customer Experiences & Testimonials"}
        text={"Read honest and detailed reviews from our satisfied customers at Crafty Art. Discover why we are the go-to choice for creative and customizable invitation cards for all occasions."}
      />

<Box>
        <link
          rel="canonical"
          title={
            "Customer Reviews - Unlimited Graphic Design Tool"
          }
          href={`https://www.craftyartapp.com/review`}
        />
      </Box>

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can I customise the colors of my Indian wedding card design to match my wedding theme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! Our design tool allows you to choose from a wide range of colours and create a personalised colour palette.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it possible to include multiple languages on my Indian wedding invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Certainly! Our customizable templates accommodate multiple languages, celebrating the diversity of your guests.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I add religious symbols or motifs specific to my Indian culture on the invitation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our design tool provides a variety of religious symbols and traditional motifs to help you personalise your invitation.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* section 3 */}

      <RightImageSection
        point={
          <Box>
            <div className="">
              <h1 className="text-3xl font-semibold">
                Our <span className="text-[#7F51F2]">Reviews</span>
              </h1>
              <p className="pt-3">
                Crafty Art has a proven track record of delivering efficiency,
                results and excellent customer service.
              </p>
            </div>
            <div className="flex flex-col md:flex-row pt-5 items-center">
              {!loading && analyticData && (
                <Rating
                  sx={{
                    "& .MuiSvgIcon-fontSizeInherit": {
                      width: "44px",
                      height: "35px",
                    },
                  }}
                  name="text-feedback"
                  value={analyticData?.overall_rating}
                  getLabelText={getLabelText}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              )}
              <p className="justify-center ml-3 text-xl font-semibold pt-5 md:pt-2">
                {analyticData?.overall_rating} out of 5
              </p>
            </div>
          </Box>
        }
        alt="indian"
        path="/s/indian"
        image={`/images/review/banner.png`}
      />

      <div className="h-[400px] md:h-[250px] bg-[#7F51F2] flex flex-col md:flex-row justify-center items-center">
        <div className="mx-7 lg:mx-16">
          <h1 className="text-white text-xl md:text-xl lg:text-[  22px] xl:text-2xl">
            Google
          </h1>
          <div className="flex flex-row justify-center pt-3">
            <h1 className="text-xl md:text-lg lg:text-xl text-white">4.9</h1>
            <img
              src={`/images/review/review-img2.png`}
              className="w-[160px] h-[25px] md:w-[122px] md:h-[20px] lg:w-[160px] lg:h-[25px] ml-2"
              alt={"logo template"}
            />
          </div>
        </div>
        <img
          src={`/images/review/line.png`}
          className="w-[2px] h-[100px] ml-2 flex-col hidden md:block"
          alt={"logo template"}
        />

        <div className="mx-7 lg:mx-16 pt-5 md:pt-0">
          <h1 className="text-white text-xl md:text-xl lg:text-[22px] xl:text-2xl">
            Facebook
          </h1>
          <div className="flex flex-row justify-center pt-3">
            <h1 className="text-xl md:text-lg lg:text-xl text-white">4.9</h1>
            <img
              src={`/images/review/review-img2.png`}
              className="w-[160px] h-[25px] md:w-[122px] md:h-[20px] lg:w-[160px] lg:h-[25px] ml-2"
              alt={"logo template"}
            />
          </div>
        </div>
        <img
          src={`/images/review/line.png`}
          className="w-[2px] h-[100px] ml-2 flex-col hidden md:block"
          alt={"logo template"}
        />
        <div className="mx-7 lg:mx-16 pt-5 md:pt-0">
          <h1 className="text-white text-xl md:text-xl lg:text-[22px] xl:text-2xl">
            ★ Trustpilot
          </h1>
          <div className="flex flex-row justify-center pt-3">
            <h1 className="text-xl md:text-lg lg:text-xl text-white">4.9</h1>
            <img
              src={`/images/review/review-img2.png`}
              className="w-[160px] h-[25px] md:w-[122px] md:h-[20px] lg:w-[160px] lg:h-[25px] ml-2"
              alt={"logo template"}
            />
          </div>
        </div>
        <img
          src={`/images/review/line.png`}
          className="w-[2px] h-[100px] ml-2 flex-col hidden md:block"
          alt={"logo template"}
        />
        <div className="mx-7 lg:mx-16 pt-5 md:pt-0">
          <h1 className="text-white text-xl md:text-xl lg:text-[22px] xl:text-2xl">
            G2
          </h1>
          <div className="flex flex-row justify-center pt-3">
            <h1 className="text-xl md:text-lg lg:text-xl text-white">4.9</h1>
            <img
              src={`/images/review/review-img2.png`}
              className="w-[160px] h-[25px] md:w-[122px] md:h-[20px] lg:w-[160px] lg:h-[25px] ml-2"
              alt={"logo template"}
            />
          </div>
        </div>
      </div>

      <div className="third_contain">
        <Box className="flex py-[50px]  px-[20px] xl:px-[7%] w-full xl:w-[92%] mx-auto max-w-[2400px] items-center lg:flex-row flex-col">
          <div className="w-[340px] md:w-[700px]  justify-center items-center bg-white">
            <h1 className="flex justify-center item-center items-center font-bold text-2xl">
              Customer reviews
            </h1>
            <div className="flex justify-center item-center items-center mb-2 pt-5">
              {!loading && analyticData && (
                <Rating
                  sx={{
                    "& .MuiSvgIcon-fontSizeInherit": {
                      width: "44px",
                      height: "35px",
                    },
                  }}
                  name="text-feedback"
                  value={analyticData?.overall_rating}
                  getLabelText={getLabelText}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              )}
              <p className="ms-1 text-xl font-medium text-gray-500 dark:text-gray-400 ">
                {analyticData?.overall_rating} out of 5
              </p>
            </div>
            <p className="text-xl flex justify-center item-center items-center font-medium text-gray-500 dark:text-gray-400 pt-5">
              {analyticData?.total_approved_user_reviews} customer ratings
            </p>

            <div className="flex justify-center items-center mt-4 pt-5">
              <a className="text-sm font-medium text-blue-600 dark:text-blue-500">
                5 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded ">
                <div
                  style={{
                    width: `${
                      analyticData?.rating_percentages["5_star"] ?? 0
                    }%`,
                  }}
                  className="h-5 bg-[#FCC419] rounded"
                ></div>
              </div>
              <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 w-[25px]">{`${
                analyticData?.rating_percentages["5_star"] ?? "0"
              }%`}</h1>
            </div>

            <div className="flex justify-center items-center mt-4">
              <a className="text-sm font-medium text-blue-600 dark:text-blue-500">
                4 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                <div
                  style={{
                    width: `${
                      analyticData?.rating_percentages["4_star"] ?? 0
                    }%`,
                  }}
                  className="h-5 bg-[#FCC419] rounded"
                ></div>
              </div>
              <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 w-[25px]">{`${
                analyticData?.rating_percentages["4_star"] ?? "0"
              }%`}</h1>
            </div>

            <div className="flex justify-center items-center mt-4">
              <a className="text-sm font-medium text-blue-600 dark:text-blue-500">
                3 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                <div
                  style={{
                    width: `${
                      analyticData?.rating_percentages["3_star"] ?? 0
                    }%`,
                  }}
                  className="h-5 bg-[#FCC419] rounded"
                ></div>
              </div>
              <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 w-[25px]">{`${
                analyticData?.rating_percentages["3_star"] ?? "0"
              }%`}</h1>
            </div>

            <div className="flex justify-center items-center mt-4">
              <a className="text-sm font-medium text-blue-600 dark:text-blue-500">
                2 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                <div
                  style={{
                    width: `${
                      analyticData?.rating_percentages["2_star"] ?? 0
                    }%`,
                  }}
                  className="h-5 bg-[#FCC419] rounded"
                ></div>
              </div>
              <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 w-[25px]">{`${
                analyticData?.rating_percentages["2_star"] ?? "0"
              }%`}</h1>
            </div>

            <div className="flex justify-center items-center mt-4">
              <a className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">
                1 star
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                <div
                  style={{
                    width: `${
                      analyticData?.rating_percentages["1_star"] ?? 0
                    }%`,
                  }}
                  className="h-5 bg-[#FCC419] rounded"
                ></div>
              </div>
              <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400 w-[25px]">{`${
                analyticData?.rating_percentages["1_star"] ?? "0"
              }%`}</h1>
            </div>
          </div>

          {openTextArea && (
            <Box className="flex-1 flex justify-center py-[30px] max-lg:pb-0 max-lg:w-[100%]">
              <Box className="w-[90%] flex flex-col gap-[20px] max-lg:w-[80%] max-sm:w-[100%]">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-2xl font-bold">
                      Why did you leave this rating?
                    </h1>
                    <p className="pt-2 text-[#677588]">
                      Amazing, above expectations!
                    </p>
                  </div>
                  <Stack key="rating-stack" spacing={1}>
                    <Rating
                      sx={{
                        "& .MuiSvgIcon-fontSizeInherit": {
                          width: "44px",
                          height: "70px",
                        },
                      }}
                      name="hover-feedback"
                      value={ratingValue}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setRatingValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </Stack>

                  <textarea
                    onChange={(e) => {
                      setFeedBack(e.target.value);
                    }}
                    value={feedback}
                    ref={textareaRef}
                    name="feedback"
                    id="message"
                    className="block p-2.5 h-[130px] w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Typing Review......"
                  ></textarea>

                  <div className="pt-5 flex justify-end w-[100%]">
                    {editingReview ? (
                      <Button
                        onClick={() => handleEdit()}
                        sx={{
                          textTransform: "unset",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "white",
                          whiteSpace: "nowrap",
                          opacity: "1",
                          borderRadius: "5px",
                          "&:hover": {
                            backgroundColor: "white",
                            paddingTop: "10px",
                          },
                        }}
                        className="bg-[#7F51F2] py-[10px] px-[20px] text-white text-[15px]"
                      >
                        Update Review
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        sx={{
                          textTransform: "unset",
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "white",
                          whiteSpace: "nowrap",
                          opacity: "1",
                          borderRadius: "5px",
                          "&:hover": {
                            backgroundColor: "white",
                            paddingTop: "10px",
                          },
                        }}
                        className="bg-[#7F51F2] py-[10px] px-[20px] text-white text-[15px]"
                      >
                        Submit Review
                      </Button>
                    )}
                  </div>
                </div>
              </Box>
            </Box>
          )}
          {!openTextArea && userReview && (
            <Box className="flex-1 flex justify-center py-[30px] max-lg:pb-0 max-lg:w-[100%]">
              <Box className="w-[90%] flex flex-col gap-[20px] max-lg:w-[80%] max-sm:w-[100%]">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-xl lg:text-2xl font-bold">
                      Your Review
                    </h1>
                    <div className="w-[100%] max-sm:mx-3 bg-white rounded-[10px] max-lg:w-[100%] min-w-[325px] max-2sm:min-w-[230px] pt-5">
                      <div className="p-6 bg-[#F4F7FE] rounded-2xl relative w-[100%] overflow-auto border border-gray-200">
                        <div className="grid grid-cols-[auto_1fr] gap-4 w-[100%] overflow-auto">
                          <img
                            src={userReview?.user?.profile_photo}
                            className="w-[60px] h-[60px] ml-2 flex-col "
                          />
                          <div className="relative flex justify-end overflow-hidden h-[106px]">
                            <MoreVertIcon
                              fontSize="large"
                              onClick={() => toggleMenu(null)}
                              className="cursor-pointer"
                            />
                            {menuOpen && (
                              <div className="absolute right-8 w-38 bg-white rounded-md shadow-lg">
                                <ul className="py-1">
                                  <li
                                    onClick={() => {
                                      setEditingReview(userReview);
                                      toggleMenu(null);
                                      setOpenTextArea(true);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  >
                                    Edit
                                  </li>
                                  <li
                                    onClick={() => handleDelete(userReview)}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  >
                                    Delete
                                  </li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-4">
                          <div className="flex items-center">
                            <h3 className="text-lg font-bold">
                              {userReview?.user?.name}
                            </h3>
                            <div className="flex items-center ml-2">
                              <img
                                src={`/images/review/img4.png`}
                                className="w-[20px] h-[20px]"
                                alt="logo template"
                              />
                              <h1 className="ml-3">{userReview?.rate}</h1>
                            </div>
                          </div>
                          <p className="font-semibold mt-4">
                            {userReview?.feedback}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          )}
        </Box>

        <div className="flex flex-col items-center justify-center pb-10 mx-5 md:mx-0">
          <h1 className="text-2xl font-bold flex text-center">
            Our Customer Feedback
          </h1>
          <p className="pt-2 text-[#677588] mx-8 md:mx-0 flex text-center">
            Don’t take our word for it. Trust our customers
          </p>
        </div>

        <CustomerSayingReview allReview={allReview} />

        <div className="py-0 xl:py-28">
          <div
            className=" xl:mx-20 2xl:mx-40 mb-3 h-[650px] lg:h-[400px] flex flex-col lg:flex-row justify-around items-center review-bg1  xl:review-bg bg-cover xl:rounded-3xl py-20"
            style={{
              backgroundImage: "url(/images/review/BG.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="order-2 lg:order-1 mx-10 md:mx-16 pt-7 lg:pt-0">
              <h1 className="font-bold sm:text-3xl">
                Elevate Your Brand to New Heights!
              </h1>
              <p className="pt-2 text-lg">
                Create a project or start your subscription in 10 minutes or
                less. Transform your brand into a
              </p>
              <p className="pb-5 text-lg">powerhouse with innovative design.</p>

              <a href="/plans">
                <Button className="bg-[#7F51F2] px-[15px] py-[10px] rounded-[5px] text-white normal-case">
                  See Plan
                </Button>
              </a>
            </div>
            <div className="order-1 lg:order-2 mx-16">
              <img
                src={`/images/review/img1.png`}
                className="h-auto"
                alt={"logo template"}
              />
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <main className="main">
          <span className="loader_span"></span>
        </main>
      )}
    </>
  );
}
