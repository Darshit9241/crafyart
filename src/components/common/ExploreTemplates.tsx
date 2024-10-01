import api from "@/src/clientApi/api";
import { calculateHeight } from "@/src/commonFunction/calculateHeight";
import { consoleLog } from "@/src/commonFunction/console";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import { TemplateDataType } from "@/src/interface/commonType";
import { SearchTempType } from "@/src/interface/searchTemplateType";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";

interface ExploreTemplatesProps {
  category?: string;
  getAll: string;
  keyword?: string;
}

export default function ExploreTemplates({
  category,
  getAll,
  keyword,
}: ExploreTemplatesProps) {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/");
  const lastSegment = pathSegments?.[pathSegments.length - 1];
  const screenWidth = useScreenWidth();
  const [data, setData] = useState<TemplateDataType[]>();

  useEffect(() => {
    api
      .searchTemplate({
        keywords: keyword ?? lastSegment ?? "",
        page: 1,
      })
      .then((response: unknown) => {
        const res = response as SearchTempType;
        setData(res.datas);
      })
      .catch((err) => consoleLog("err", err));
  }, [category, lastSegment]);

  const multiSizeFixSize = React.useMemo(() => {
    switch (true) {
      case screenWidth > 1500:
        return 6;
      case screenWidth > 1200:
        return 4.3;
      case screenWidth > 1023:
        return 4.3;
      case screenWidth > 700:
        return 3.3;
      case screenWidth > 550:
        return 3.3;
      case screenWidth > 250:
        return 2.4;
      default:
        return 2.2;
    }
  }, [screenWidth]);

  return (
    <Box>
      <Box sx={{ width: "90%", margin: "50px auto" }}>
        <Typography
          sx={{
            color: "#1C3048",
            textAlign: "center",
            fontWeight: "500",
          }}
          className="text-[25px] sm:text-[36px]"
        >
          Start Explore{" "}
          {keyword
            ? `${keyword} ${keyword.includes("templates") ? "" : "templates"}`
            : "templates"}
        </Typography>

        <Typography
          sx={{
            color: "#1C3048",
            fontSize: "18px",
            textAlign: "center",
            fontWeight: "500",
            mt: "20px",
            mb: "40px",
          }}
        >
          Get a head start with fully customizable{" "}
          {keyword
            ? `${keyword} ${keyword.includes("templates") ? "" : "templates"}`
            : "templates"}
        </Typography>

        <StackGrid columnWidth={screenWidth / multiSizeFixSize}>
          {data
            ?.filter((e, index) => index < 20)
            ?.map((templates, index) => (
              <div
                key={index}
                className=""
                style={{
                  height: `${calculateHeight(
                    templates.width,
                    templates.height,
                    screenWidth / multiSizeFixSize
                  )}px`,
                  width: `${screenWidth / multiSizeFixSize}px`,
                }}
                id={`content${index}`}
              >
                <Link
                  prefetch={false}
                  href={`/templates/p/${templates.id_name}`}
                >
                  <div className="w-full h-full p-[8px]">
                    <img
                      src={`/api/image/compress?url=${encodeURIComponent(
                        templates.template_thumb
                      )}`}
                      alt={templates.category_name}
                      className={`w-full h-full rounded-[5px] cursor-pointer`}
                      style={{
                        border: "1px solid #80808082",
                      }}
                    />
                    <div className="pt-2">
                      <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-black font-medium">
                        {templates.template_name}
                      </p>
                      <p className="text-[#ABB2C7] text-[13px] pb-1">
                        {templates.category_name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </StackGrid>

        <Box sx={{ display: "flex", justifyContent: "center", p: "30px" }}>
          <Link prefetch={false} href={getAll}>
            <button
              style={{
                background:
                  "linear-gradient(268.03deg, #5961F8 -0.66%, #15D8C5 100%, #15D8C5 100%)",
                width: "fit-content",
                fontSize: "17px",
                textTransform: "unset",
                borderRadius: "5px",
                fontWeight: "500",
                color: "white",
              }}
              className="bg_linear py-[10px] px-[15px]"
            >
              Get All Templates
            </button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
