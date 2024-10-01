import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import TemplateModal from "@/src/components/singleTemplate/TemplateModal";
import { TemplateDataType } from "@/src/interface/commonType";
import {
  DashboardData,
  DashboardDataType,
  DashboardNewDataType,
} from "@/src/interface/dashboard";
import { RootState } from "@/src/redux";
import {
  dashboardPage,
  isLastPage,
  templatesData,
} from "@/src/redux/reducer/AuthDataReducer";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import TemplatesBoxes from "./components/TemplatesBoxes";
import TemplatesSkelton from "../TemplatesSkelton";

export default function TemplatesBox(props: { data: DashboardDataType }) {
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [idName, setIdName] = useState<TemplateDataType | any>(null);
  const dispatch = useDispatch();
  const pages = useSelector((state: RootState) => state?.auth?.dashboardPage);
  const datas = useSelector((state: RootState) => state?.auth?.templatesData);
  const [loadNewCategory, setLoadNewCategory] = useState<boolean>(true);
  const isLastPageRedux = useSelector(
    (state: RootState) => state?.auth?.isLastPage
  );

  const [data, setData] = useState<DashboardData[]>([]);
  const [newCategoryData, setNewCategoryData] = useState<DashboardData[]>([]);

  useEffect(() => {
    if (props?.data?.datas && datas?.length < 1) {
      dispatch(templatesData(props?.data?.datas));
      setData(data);
    }

    api
      .getNewDashboardData({ page: 1 })
      .then((res: unknown) => {
        const dashboardData = res as DashboardNewDataType;
        setNewCategoryData(dashboardData?.datas);
        setLoadNewCategory(false);
      })
      .catch((error) => {
        consoleLog("error: ", error);
        setLoadNewCategory(false);
      });
  }, [props?.data?.datas]);

  const apiCall = () => {
    dispatch(dashboardPage(pages + 1));
    setLoadMore(true);
    api
      .getDashboardData({ page: pages + 1 })
      .then((res: unknown) => {
        setLoadMore(false);
        const dashboardData = res as DashboardDataType;
        const updatedData = [
          ...(datas || []),
          ...(Array.isArray(dashboardData?.datas) ? dashboardData?.datas : []),
        ];
        dispatch(templatesData(updatedData));
        dispatch(isLastPage(dashboardData?.isLastPage));
      })
      .catch((err) => {
        setLoadMore(false);
        consoleLog("err", err);
      });
  };

  return (
    <Box className="px-[20px] max-sm:px-[10px] pb-10">
      {newCategoryData?.length > 0
        ? newCategoryData?.map((item: DashboardData, index: number) => (
            <Box key={index}>
              <TemplatesBoxes
                newCategory={true}
                item={item}
                setOpenModal={setOpenModal}
                setIdName={setIdName}
                height={isMobile ? 100 : 200}
              />
            </Box>
          ))
        : loadNewCategory && <TemplatesSkelton />}

      {datas?.length > 0
        ? datas?.map((item: DashboardData, index: number) => (
            <Box key={index}>
              <TemplatesBoxes
                newCategory={false}
                item={item}
                setOpenModal={setOpenModal}
                setIdName={setIdName}
                height={isMobile ? 100 : 200}
              />
            </Box>
          ))
        : true && <TemplatesSkelton />}

      <TemplateModal
        open={openModal}
        template={idName}
        setOpen={setOpenModal}
        setId={setIdName}
        currentPathname={""}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        {loadMore ? (
          <Box className="text_linear font-[700 text-[20px]">Loading....</Box>
        ) : (
          <Button
            className="bg_linear px-[80px] max-sm:px-[50px] py-[10px] max-sm:py-[7px] rounded-[7px] text-[15px] max-sm:text-[13px] text-white font-semibold"
            sx={{ display: isLastPageRedux ? "none" : "block" }}
            onClick={apiCall}
          >
            LOAD MORE
          </Button>
        )}
      </div>
    </Box>
  );
}
