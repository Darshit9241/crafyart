import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import {
  useScreenHeight,
  useScreenWidth,
} from "@/src/commonFunction/screenWidthHeight";
import { TemplateDataType } from "@/src/interface/commonType";
import { RootState } from "@/src/redux";
import { Box, Button } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Boxes from "./common/Boxes";

export default function Image({
  data,
  selectedItems,
  setSelectedItems,
  dataLoad,
}: any) {
  const sideBarRedux = useSelector(
    (state: RootState) => state.actions.openSidebar
  );
  const screenWidth = useScreenWidth() - (sideBarRedux ? 289 : 40);
  const screenHeight = useScreenHeight();
  const [uploadData, setUploadData] = useState<TemplateDataType[] | null>(null);
  const [mouseEnterItem, setMouseEnterItem] = useState<string>("");
  const [loadMore, setLoadMore] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const multiSize = useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return screenWidth / 6;
      case screenWidth > 1400:
        return screenWidth / 6;
      case screenWidth > 1200:
        return screenWidth / 6;
      case screenWidth > 1000:
        return screenWidth / 3;
      case screenWidth > 600:
      case screenWidth > 550:
        return screenWidth / 3;
      default:
        return screenWidth / 2;
    }
  }, [screenWidth, sideBarRedux]);

  useEffect(() => {
    setLoadMore(true);
    if (page === 1) {
      if (data?.data?.length > 0) {
        setUploadData(data?.data);
      }
      setIsLastPage(data?.isLastPage);
      setLoadMore(false);
    }
  }, [data]);

  useEffect(() => {
    if (page > 1) {
      api
        .getUploadData({
          type: "0",
          asset_type: 0,
          page: page,
        })
        .then((response: unknown) => {
          const res = response as any;
          setLoadMore(false);
          setUploadData((prevData) => [
            ...(prevData || []),
            ...res?.datas?.data,
          ]);

          setIsLastPage(res?.datas?.isLastPage);
        })
        .catch((err) => {
          consoleLog("getUploadData: ", err);
        });
    }
  }, [page]);

  return (
    <div>
      <div className="flex flex-wrap" style={{ width: screenWidth }}>
        {uploadData
          ? uploadData?.map((item, index) => (
              <Boxes
                key={index}
                item={item}
                setMouseEnterItem={setMouseEnterItem}
                mouseEnterItem={mouseEnterItem}
                multiSize={multiSize}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            ))
          : !loadMore &&
            !dataLoad && (
              <div
                className="flex justify-center items-center w-full"
                style={{
                  height: `${screenHeight - 230}px`,
                }}
              >
                <img
                  src="/images/NoDataFound.svg"
                  alt=""
                  className="w-[250px]"
                />
              </div>
            )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0",
        }}
      >
        {loadMore || dataLoad ? (
          <Box className="text_linear font-[700 text-[20px]">Loading....</Box>
        ) : (
          !isLastPage &&
          uploadData &&
          uploadData?.length > 0 && (
            <Button
              className="bg_linear px-[80px] py-[10px] rounded-[7px] text-[15px] text-white font-semibold"
              onClick={() => setPage((prev) => prev + 1)}
            >
              LOAD MORE
            </Button>
          )
        )}
      </div>
    </div>
  );
}
