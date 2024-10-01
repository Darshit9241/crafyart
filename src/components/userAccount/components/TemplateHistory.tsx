"use client";
import api from "@/src/clientApi/api";
import { dateFormate } from "@/src/commonFunction/dateFormate";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import { Product, PurchaseTemplate } from "@/src/interface/purchaseTemplates";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

// const dummyData = [
//   {
//     product_image:
//       "https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/24cc1897b3323de41e61f4f95060de74e4a5a58d1718779145.jpg",
//     product_name: "Latest Caricature Wedding Invitation Card",
//     transaction_id: "pay_LMcPDBrtRHXYzX",
//     amount: "₹399",
//     purchase_date: "27/02/2024 15:37:53",
//     status: "Expired",
//     method: "Razorpay",
//   },

//   {
//     product_image:
//       "https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/5106f846f56f13470aa0e73a0acd774e4bc500371696315747.jpg",
//     product_name: "New Caricature Wedding Landscape Invitation",
//     transaction_id: "pay_LMcPDBrtRHXYnX",
//     amount: "₹359",
//     purchase_date: "27/02/2024 15:37:53",
//     status: "Active",
//     method: "Stripe",
//   },

//   {
//     product_image:
//       "https://panel.craftyartapp.com/templates/uploadedFiles/thumb_file/24cc1897b3323de41e61f4f95060de74e4a5a58d1718779145.jpg",
//     product_name: "Latest Caricature Wedding Invitation Card",
//     transaction_id: "pay_LMcPDBrtRHXYsX",
//     amount: "₹399",
//     purchase_date: "27/02/2024 15:37:53",
//     status: "Expired",
//     method: "Razorpay",
//   },
// ];

export default function TemplateHistory() {
  const editor = process.env.NEXT_PUBLIC_EDITOR;
  const screenWidth = useScreenWidth();
  const [loadMoreTemplate, setLoadMoreTemplate] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [templateData, setTemplateData] = useState<Product[]>([]);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [openTemplateDetail, setOpenTemplateDetail] = useState<string>("");

  useEffect(() => {
    setLoadMoreTemplate(true);
    api
      .getUserTemplate({ page: page })
      .then((templateData: unknown) => {
        const res = templateData as PurchaseTemplate;
        setLoadMoreTemplate(false);
        setIsLastPage(!res?.hasNextPage);

        if (res?.data) {
          setTemplateData((prevData: Product[]) => [
            ...(prevData || []),
            ...(res?.data || []),
          ]);
        }
      })
      .catch(() => {
        setLoadMoreTemplate(false);
      });
  }, [page]);
  return (
    <>
      <Box>
        <Typography variant="h1" className="font-semibold text-[24px] mb-8">
          Template Purchase History
        </Typography>

        <div className="relative overflow-x-auto max-sm:hidden">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className=" text-gray-700 bg-gray-50">
              <tr className="bg-[#F4F7FE] border-b ">
                <th className="px-4 py-4 whitespace-nowrap">Template</th>
                <th className="px-4 py-4 whitespace-nowrap">Name</th>
                <th className="px-4 py-4 whitespace-nowrap">Transaction Id</th>
                <th className="px-4 py-4 whitespace-nowrap">Date</th>
                <th className="px-4 py-4 whitespace-nowrap">Amount</th>
                <th className="px-4 py-4 whitespace-nowrap">Status</th>
                <th className="px-4 py-4 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {!loadMoreTemplate &&
              (!templateData?.length || templateData.length === 0) ? (
                <div className=" w-full p-[24px] text-[16px]">
                  No History Exist.
                </div>
              ) : (
                templateData &&
                templateData?.map((item: Product, index: number) => (
                  <tr key={index} className="bg-[#F4F7FE] border-b">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="w-[100px] border h-[100px] flex justify-center items-center p-[5px] bg-white rounded-[5px]">
                        <img
                          src={item?.product_image}
                          alt=""
                          className="max-w-full max-h-full w-auto h-auto"
                        />
                      </div>
                    </td>
                    <td className="px-4 max-w-[150px] py-4">
                      {item?.product_name}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item?.transaction_id}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {dateFormate(item?.purchase_date)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item?.amount}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      {item?.status === "Active" ? (
                        <p
                          style={{
                            color: "green",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Active
                        </p>
                      ) : (
                        <p
                          style={{
                            color: "red",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          Inactive
                        </p>
                      )}
                    </td>

                    <td className="px-4 py-4 whitespace-nowrap">
                      {screenWidth < 800 ? (
                        <Link
                          prefetch={false}
                          href={`https://play.google.com/store/apps/details?id=com.crafty.art`}
                          target="_blank"
                        >
                          <button className="bg_linear px-[30px] py-[5px] text-white rounded-[4px]">
                            Edit
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="bg_linear px-[30px] py-[5px] text-white rounded-[4px]"
                          onClick={() =>
                            window.open(
                              `${editor}${item?.product_id}`,
                              "_blank"
                            )
                          }
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="sm:hidden">
          {!loadMoreTemplate &&
          (!templateData?.length || templateData.length === 0) ? (
            <div className=" w-full p-[24px] text-[16px]">
              No History Exist.
            </div>
          ) : (
            templateData &&
            templateData?.map((item: any) => (
              <div
                className="bg-[#F4F7FE] py-[8px] px-[15px] mb-3"
                onClick={() => {
                  if (openTemplateDetail === "") {
                    setOpenTemplateDetail(item.transaction_id);
                  } else if (openTemplateDetail !== item.transaction_id) {
                    setOpenTemplateDetail(item.transaction_id);
                  } else setOpenTemplateDetail("");
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="gap-[20px]">
                    <p className="font-medium text-ellipsis max-w-[200px] whitespace-nowrap overflow-hidden">
                      {item?.product_name}
                    </p>
                    <p className="text-[16px] text_linear">{item?.amount}</p>
                  </div>

                  <div className="w-[70px] h-[70px] flex justify-center items-center p-[5px] rounded-[5px]">
                    <img
                      src={item?.product_image}
                      alt=""
                      className="max-w-full max-h-full w-auto h-auto"
                    />
                  </div>
                </div>

                <div
                  className="pt-5"
                  style={{
                    display:
                      openTemplateDetail === item?.transaction_id
                        ? "block"
                        : "none",
                  }}
                >
                  <div className="flex items-center mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Template
                    </p>
                    <div className="w-[70px] h-[70px] flex justify-center items-center p-[5px] rounded-[5px]">
                      <img
                        src={item?.product_image}
                        alt=""
                        className="max-w-full max-h-full w-auto h-auto"
                      />
                    </div>
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Transaction Id
                    </p>
                    <p className="text-[14px] opacity-70">
                      {item?.transaction_id}
                    </p>
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Start Date
                    </p>
                    <p className="text-[14px] opacity-70">
                      {dateFormate(item?.purchase_date)}
                    </p>
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Validity
                    </p>
                    <p className="text-[14px] opacity-70">Life Time</p>
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Payment Method
                    </p>
                    <p className="text-[14px] opacity-70">{item?.method}</p>
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Status
                    </p>

                    {item?.status === "Active" ? (
                      <p
                        style={{
                          color: "green",
                          fontSize: "13px",
                          fontWeight: "500",
                          borderRadius: "4px",
                        }}
                      >
                        Active
                      </p>
                    ) : (
                      <p
                        style={{
                          color: "#E83C3C",
                          fontSize: "13px",
                          fontWeight: "500",

                          borderRadius: "4px",
                        }}
                      >
                        Expired
                      </p>
                    )}
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Price
                    </p>
                    <p className="text-[14px] opacity-70">{item?.amount}</p>
                  </div>

                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Action
                    </p>
                    <button
                      style={{
                        color: "#000",
                        fontSize: "13px",
                        fontWeight: "500",
                        border: "1px solid #000",
                        padding: "2px 12px",
                        borderRadius: "4px",
                        opacity: "0.7",
                      }}
                      onClick={() =>
                        window.open(`${editor}${item?.product_id}`, "_blank")
                      }
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 0",
          }}
        >
          {loadMoreTemplate ? (
            <Box className="text_linear font-[700 text-[20px]">Loading....</Box>
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
    </>
  );
}
