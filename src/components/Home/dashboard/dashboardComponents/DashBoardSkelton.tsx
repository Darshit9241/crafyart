import Skelton from "@/src/components/common/Skelton";
import { RootState } from "@/src/redux";
import { Box, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";

export default function DashBoardSkelton(props: { height: number }) {
  const sideBarRedux = useSelector(
    (state: RootState) => state.actions.openSidebar
  );

  return (
    <div className="  bg-[white] z-[1000]">
      <div className="h-[20px]"></div>

      <div className="flex">
        <div
          className="hidden"
          style={{
            width: "15%",
            padding: "13px 10px   ",
            display: sideBarRedux ? "block" : "none",
          }}
        >
          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"80%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>
          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"50%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>
          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"70%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"60%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"70%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>

          <div className="flex gap-2 items-center py-2">
            <Skeleton
              variant="rectangular"
              width={"14%"}
              height={`30px`}
              style={{
                borderRadius: `5px`,
              }}
            />
            <Skeleton
              variant="rectangular"
              width={"70%"}
              height={`15px`}
              style={{
                borderRadius: `10px`,
              }}
            />
          </div>
        </div>

        <div
          className="py-2 px-4  w-full "
          style={{ width: sideBarRedux ? `85%` : "100%" }}
        >
          <Skeleton
            variant="rectangular"
            width={`100%`}
            height={`${270}px`}
            style={{
              borderRadius: `20px`,
              marginBottom: "10px",
            }}
          />
          <Box className="flex flex-col gap-5 pb-[50px]">
            <Box className="flex items-center overflow-hidden scroll_none gap-[20px]  ">
              <Skelton
                width={`${props?.height}px`}
                height={`${props?.height}px`}
                round="10px"
                fill={20}
                line="row"
                gap={"15px"}
                text
                textH={"10px"}
                textW={"100px"}
                title={true}
              />
            </Box>
            <Box className="flex  items-center overflow-hidden scroll_none gap-[20px]  ">
              <Skelton
                width={`${props?.height}px`}
                height={`${props?.height}px`}
                round="10px"
                fill={20}
                line="row"
                gap={"15px"}
                text
                textH={"10px"}
                textW={"100px"}
                title={true}
              />
            </Box>
            <Box className="flex items-center overflow-hidden scroll_none gap-[20px] mb-5 ">
              <Skelton
                width={`${props?.height}px`}
                height={`${props?.height}px`}
                round="10px"
                fill={20}
                line="row"
                gap={"15px"}
                text
                textH={"10px"}
                textW={"100px"}
                title={true}
              />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}
