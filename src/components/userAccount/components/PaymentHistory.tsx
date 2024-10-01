import { dateFormate } from "@/src/commonFunction/dateFormate";
import { CurrentPlanProps, PurchaseHistoryItem } from "@/src/interface/user";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function PaymentHistory(props: {
  userSubscription: CurrentPlanProps | null;
}) {
  const [openHistoryItem, setOpenHistoryItem] = useState<string>("");
  return (
    <>
      <Box>
        <Typography variant="h1" className="font-semibold text-[24px] mb-8">
          Payment History
        </Typography>

        <div className="max-sm:hidden">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className=" text-gray-700 bg-gray-50">
                <tr className="bg-[#F4F7FE] border-b">
                  <th className="px-6 py-4 whitespace-nowrap">Package Name</th>
                  <th className="px-6 py-4 whitespace-nowrap">
                    Transaction Id
                  </th>
                  <th className="px-6 py-4 whitespace-nowrap">Date</th>
                  <th className="px-6 py-4 whitespace-nowrap">Amount</th>
                  <th className="px-6 py-4 whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody>
                {props?.userSubscription?.history === "No History exist." ? (
                  <div className=" w-full p-[24px] text-[16px]">
                    No History Exist.
                  </div>
                ) : (
                  props?.userSubscription?.hasHistory &&
                  props?.userSubscription?.history?.map(
                    (item: PurchaseHistoryItem, index: number) => (
                      <tr key={index} className="bg-[#F4F7FE] border-b">
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.package_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.transaction_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {dateFormate(item?.purchase_date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
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
                                color: "#E83C3C",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Inactive
                            </p>
                          )}
                        </td>
                      </tr>
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="sm:hidden">
          {props?.userSubscription?.hasHistory &&
            props?.userSubscription?.history?.map((item: any) => (
              <div
                className="bg-[#F4F7FE] py-[25px] px-[15px] mb-3"
                onClick={() => {
                  if (openHistoryItem === "") {
                    setOpenHistoryItem(item.transaction_id);
                  } else if (openHistoryItem !== item.transaction_id) {
                    setOpenHistoryItem(item.transaction_id);
                  } else setOpenHistoryItem("");
                }}
              >
                <div className="flex justify-between">
                  <div className="flex gap-[20px] items-center">
                    <p className="font-medium">{item?.package_name}</p>
                    <p className="opacity-50 text-[16px]">{item?.amount}</p>
                  </div>

                  <div>
                    {item?.status === "Active" ? (
                      <p
                        style={{
                          color: "green",
                          fontSize: "13px",
                          fontWeight: "500",
                          border: "1px solid green",
                          padding: "2px 12px",
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
                          border: "1px solid #E83C3C",
                          padding: "2px 12px",
                          borderRadius: "4px",
                        }}
                      >
                        Expired
                      </p>
                    )}
                  </div>
                </div>

                <div
                  className="pt-5"
                  style={{
                    display:
                      openHistoryItem === item?.transaction_id
                        ? "block"
                        : "none",
                  }}
                >
                  <div className="flex mb-3">
                    <p className="w-[150px] text-[#1C3048] text-[14px]">
                      Package Name
                    </p>
                    <p className="text-[14px] opacity-70">
                      {item?.package_name}
                    </p>
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
                    <p className="text-[14px] opacity-70">{item?.validity}</p>
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
                </div>
              </div>
            ))}
        </div>
      </Box>
    </>
  );
}
