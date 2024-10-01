import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import Skelton from "@/src/components/common/Skelton";
import { Box } from "@mui/material";
import { useMemo } from "react";

export default function TemplatesSkelton() {
  const screenWidth = useScreenWidth();

  const height = useMemo(() => {
    let val;
    if (screenWidth) {
      if (screenWidth < 600) {
        val = 100;
      } else val = 250;
    }
    return val;
  }, [screenWidth]);
  return (
    <Box className="flex flex-col gap-5 py-[50px]">
      <Box className="flex items-center overflow-hidden scroll_none gap-[20px]  ">
        <Skelton
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
          width={`${height ? height : 250}px`}
          height={`${height ? height : 250}px`}
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
  );
}
