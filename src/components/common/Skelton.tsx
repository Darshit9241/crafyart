import { Box, Skeleton } from "@mui/material";
import React from "react";

interface SkeletonProps {
  height?: string;
  width?: string;
  round?: string;
  fill?: number;
  line?: string;
  gap?: string;
  text?: boolean;
  textH?: string;
  textW?: string;
  title?: boolean;
}

const Skelton: React.FC<SkeletonProps> = ({
  height,
  width,
  round,
  fill,
  line,
  gap,
  text,
  textH,
  textW,
  title,
}) => {
  return (
    <div>
      {title && (
        <Skeleton
          variant="rectangular"
          width={"150px"}
          height={"20px"}
          style={{
            borderRadius: `20px`,
            marginBottom: "10px",
          }}
        />
      )}
      <Box
        className={` flex    ${line === "row" ? "flex-row" : "flex-col"} `}
        style={{ gap: gap ? gap : "10px" }}
      >
        {Array(fill)
          .fill("")
          .map((item, index) => (
            <div key={index}>
              <Skeleton
                variant="rectangular"
                width={width}
                height={height}
                style={{
                  borderRadius: `${round}`,
                  marginBottom: text ? "10px" : "",
                }}
              />

              {text && (
                <Skeleton
                  variant="rectangular"
                  width={textW}
                  height={textH}
                  style={{ borderRadius: `${round}` }}
                />
              )}
            </div>
          ))}
      </Box>
    </div>
  );
};

export default Skelton;
