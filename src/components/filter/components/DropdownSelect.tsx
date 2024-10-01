import Icons from "@/src/assets";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface DataType {
  name: string;
  id_name: string | number;
}

export default function DropdownSelect(props: {
  title: string;
  data: DataType[] | any;
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any> | string>;
  singleSelect?: boolean;
  open?: boolean;
  twoSelect?: boolean;
}) {
  const [openList, setOpenList] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(false);
 
  useEffect(() => {
    if (props.open) {
      setOpenList(props.open);
    }
  }, [props.open]);

  useEffect(() => {
    if (props.open) {
      setOpenList(props.open);
    }
     if (props.value) {
      const selectedIndex = props.data.findIndex(
        (item: DataType) => item.id_name === props.value || props.value.includes(item.id_name)
      );
      if (selectedIndex >= 6) {
        setShowAll(true);
        setOpenList(true);
      }
    }
  }, [props.open, props.value, props.data]);

  return (
    <Box className="mb-5">
      <Button
        className="flex justify-between px-[15px] w-full items-center normal-case"
        onClick={() =>setOpenList(!openList)}
      >
        <Typography className="text-[black]">{props?.title}</Typography>

        <button className="px-2">
          {openList ? <Icons.TopArrowsIcon /> : <Icons.BottomArrowsIcon />}
        </button>
      </Button>

      {props.singleSelect ? (
        <Box sx={{ display: openList ? "block" : "none" }}>
          {props?.data
            ?.filter((e: any, index: number) => (showAll ? e : index < 6))
            ?.map((res: DataType, index: number) => (
              <Box
                key={index}
                className="flex gap-3 px-[15px] py-[7px] items-center cursor-pointer"
                onClick={() => {
                  if (res?.id_name === props.value) {
                    props.setValue("");
                  } else props.setValue(res?.id_name);
                }}
              >
                <div
                  style={{
                    border:
                      props?.value !== res?.id_name
                        ? "1px solid var(--Gray, #ABB2C7)"
                        : "",
                        background: !props?.value.includes(`${res?.id_name}`)
                        ? ""
                        : "linear-gradient(268deg, #5961f8 -0.66%, #15d8c5 100%, #30b1a4 100%)",
                    padding: "0",
                    borderRadius: "4px",
                  }}
                  className="w-[17px] h-[17px]"
                >
                  {props?.value === res?.id_name ? (
                    <Icons.TickBlueIcon svgProps={{width: 17, height: 17, radius:4 }}/>
                  ) : (
                    <div className="w-[17px] h-[17px]"></div>
                  )}
                </div>

                <Typography
                  style={{
                    opacity: "0.7",
                    fontWeight: "300",
                    fontSize: "15px",
                  }}
                >
                  {res?.name}
                </Typography>
              </Box>
            ))}

          <Box
            className="gap-2 px-[15px] py-[7px] items-center cursor-pointer"
            onClick={() => setShowAll(!showAll)}
            sx={{ display: props?.data?.length > 6 ? "flex" : "none" }}
          >
            {showAll ? (
              <RemoveIcon sx={{ opacity: "0.6", fontSize: "20px" }} />
            ) : (
              <AddIcon sx={{ opacity: "0.6", fontSize: "20px" }} />
            )}

            <Typography
              style={{ opacity: "0.6", fontSize: "15px", fontWeight: "500" }}
            >
              {showAll ? "View less" : "View more"}
            </Typography>
          </Box>
        </Box>
      ) : props?.twoSelect ? (
        <Box sx={{ display: openList ? "block" : "none" }}>
          {props?.data
            ?.filter((e: any, index: number) => (showAll ? e : index < 6))
            ?.map((res: DataType, index: number) => {
              const isSelected = props?.value.includes(`${res?.id_name}`);
              const isDisabled = !isSelected && props?.value.length >= 2;

              return (
                <Box
                  key={index}
                  className={`flex gap-3 px-[15px] py-[7px] items-center  ${
                    isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (isDisabled) return;

                    const valueIndex = props.value.indexOf(`${res?.id_name}`);
                    if (valueIndex !== -1) {
                      const newValue = [
                        ...props.value.slice(0, valueIndex),
                        ...props.value.slice(valueIndex + 1),
                      ];
                      props.setValue(newValue);
                    } else {
                      if (props.value.length < 2) {
                        props.setValue((prevState: any) => [
                          ...prevState,
                          `${res?.id_name}`,
                        ]);
                      }
                    }
                  }}
                >
                  <div
                    style={{
                      border: !isSelected
                        ? "1px solid var(--Gray, #ABB2C7)"
                        : "",
                      padding: "0",
                      background: !props?.value.includes(`${res?.id_name}`)
                      ? ""
                      : "linear-gradient(268deg, #5961f8 -0.66%, #15d8c5 100%, #30b1a4 100%)",
                      borderRadius: "4px",
                    }}
                    className="w-[17px] h-[17px]"
                  >
                    {isSelected ? (
                      <Icons.TickBlueIcon svgProps={{width: 17, height: 17}}/>
                     ) : (
                      <div className="w-[17px] h-[17px]"></div>
                    )}
                  </div>

                  <Typography
                    style={{
                      opacity: isDisabled ? "0.5" : "0.7",
                      fontWeight: "300",
                      fontSize: "15px",
                      // cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    {res?.name}
                  </Typography>
                </Box>
              );
            })}

          <Box
            className="gap-2 px-[15px] py-[7px] items-center cursor-pointer"
            onClick={() => setShowAll(!showAll)}
            sx={{ display: props?.data?.length > 6 ? "flex" : "none" }}
          >
            {showAll ? (
              <RemoveIcon sx={{ opacity: "0.6", fontSize: "20px" }} />
            ) : (
              <AddIcon sx={{ opacity: "0.6", fontSize: "20px" }} />
            )}

            <Typography
              style={{ opacity: "0.6", fontSize: "15px", fontWeight: "500" }}
            >
              {showAll ? "View less" : "View more"}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: openList ? "block" : "none" }}>
          {props?.data
            ?.filter((e: any, index: number) => (showAll ? e : index < 6))
            ?.map((res: DataType, index: number) => {            
              return (
                <Box
                  key={index}
                  className="flex gap-3 px-[15px] py-[7px] items-center cursor-pointer"
                  onClick={() => {
                    const valueIndex = props.value.indexOf(`${res?.id_name}`);
                    if (valueIndex !== -1) {
                      const newValue = [
                        ...props.value.slice(0, valueIndex),
                        ...props.value.slice(valueIndex + 1),
                      ];
                      props.setValue(newValue);
                    } else {
                      props.setValue((prevState: any) => [
                        ...prevState,
                        `${res?.id_name}`,
                      ]);
                    }
                  }}
                >
                  <div
                    style={{
                      border: !props?.value.includes(`${res?.id_name}`)
                        ? "1px solid var(--Gray, #ABB2C7)"
                        : "",
                        background: !props?.value.includes(`${res?.id_name}`)
                        ? ""
                        : "linear-gradient(268deg, #5961f8 -0.66%, #15d8c5 100%, #30b1a4 100%)",
                        padding: "0",
                      borderRadius: "4px",
                    }}
                    className="w-[17px] h-[17px]"
                  >
                    {props?.value.includes(`${res?.id_name}`) ? (
                       <Icons.TickBlueIcon svgProps={{width: 17, height: 17}}/>
                    ) : (
                      <div className="w-[17px] h-[17px]"></div>
                    )}
                  </div>
  
                  <Typography
                    style={{
                      opacity: "0.7",
                      fontWeight: "300",
                      fontSize: "15px",
                    }}
                  >
                    {res?.name}
                  </Typography>
                </Box>
              )
            })}

          <Box
            className="gap-2 px-[15px] py-[7px] items-center cursor-pointer"
            onClick={() => setShowAll(!showAll)}
            sx={{ display: props?.data?.length > 6 ? "flex" : "none" }}
          >
            {showAll ? (
              <RemoveIcon sx={{ opacity: "0.6", fontSize: "20px" }} />
            ) : (
              <AddIcon sx={{ opacity: "0.6", fontSize: "20px" }} />
            )}

            <Typography
              style={{ opacity: "0.6", fontSize: "15px", fontWeight: "500" }}
            >
              {showAll ? "View less" : "View more"}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
