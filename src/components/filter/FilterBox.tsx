import Icons from "@/src/assets";
import api from "@/src/clientApi/api";
import { consoleLog } from "@/src/commonFunction/console";
import { useScreenHeight } from "@/src/commonFunction/screenWidthHeight";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ColorList from "./components/ColorList";
import DropdownSelect from "./components/DropdownSelect";
import { colorsData } from "@/src/aes-crypto";

export default function (props: { searchData?: any; category_id: number }) {
  const router = useRouter();
  const screenHeight = useScreenHeight();
  const [openFilterBar, setOpenFilterBar] = useState<boolean>(false);
  const [selectedStyle, setSelectedStyle] = useState<any>([]);
  const [selectedLicense, setSelectedLicense] = useState<string>("");
  const [selectedAnimation, setSelectedAnimation] = useState<string>("");
  const [selectedOrientation, setSelectedOrientation] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<any[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<any>([]);
  const [selectedTheme, setSelectedTheme] = useState<any>([]);
  const [selectedReligion, setSelectedReligion] = useState<any>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<any>([]);
  const [languageData, setLanguageData] = useState<CommonFilterDataType[]>([]);
  const [themesData, setThemesData] = useState<CommonFilterDataType[]>([]);
  const [interestData, setInterestData] = useState<CommonFilterDataType[]>([]);
  const [styleData, setStyleData] = useState<CommonFilterDataType[]>([]);
  const [sizeData, setSizeData] = useState<SizeDataType[]>([]);
  const [newsizeData, setNewSizeData] = useState<SizeDataType[]>([]);
  const [religionData, setReligionData] = useState<ReligionsDataType[]>([]);

  useEffect(() => {
 
    let filteredData: SizeDataType[] = [];
    if (selectedOrientation.includes("square")) {
      filteredData = sizeData.filter(
        (value) =>
          value.height_ration === value.width_ration ||
          value.height === value.width
      );
    }

    if (selectedOrientation.includes("landscape")) {
      const landscapefiltered: SizeDataType[] = sizeData.filter(
        (value) =>
          value.width_ration > value.height_ration || value.width > value.height
      );
      filteredData = [...filteredData, ...landscapefiltered];
    }

    if (selectedOrientation.includes("portrait")) {
      const portraitfiltered: SizeDataType[] = sizeData.filter(
        (value) =>
          value.height_ration > value.width_ration || value.height > value.width
      );
      filteredData = [...filteredData, ...portraitfiltered];
    }

    if (selectedOrientation.length <= 0) {
      filteredData = sizeData;
    }
    const uniqueNamesMap = new Map<string, SizeDataType>();

    filteredData.forEach((item) => {
      if (!uniqueNamesMap.has(item.name)) {
        uniqueNamesMap.set(item.name, item);
      }
    });

    filteredData = Array.from(uniqueNamesMap.values());

    setNewSizeData(filteredData);
    setSelectedSize([]);

    if (selectedSize.length > 0) {
      let isContain: boolean = false;
      filteredData.map((value) => {
        selectedSize.map((value2) => {
           if (value2 == value.id_name) isContain = true;
        });
      });

      if (!isContain) {
        setSelectedSize([]);
      } else {
        const newSelectedSize = selectedSize.filter((size) =>
          filteredData.some((value) => value.id_name === size)
        );

        setSelectedSize(newSelectedSize);
      }
    }

  //   if (selectedSize.length > 0) {
  //      const isAnySizeInFilteredData = selectedSize.some((size) =>
  //       filteredData.some((data) => data.id_name === size)
  //     );
    
  //     if (!isAnySizeInFilteredData) {
  //       setSelectedSize([]);
  //     } else {
  //        const newSelectedSize = selectedSize.filter((size) =>
  //         filteredData.some((data) => data.id_name === size)
  //       );
    
  //       setSelectedSize(newSelectedSize);
  //     }
  //   }
    
  }, [selectedOrientation]);

    useEffect(() => {
      const searchData = props.searchData.size;
      if (searchData != null) {
        setSelectedSize(Array.isArray(searchData) ? searchData : [searchData]);
        // setSelectedSize(searchData);
      }
    }, [sizeData]);


  const isAnyFilterSelected = () => {
    return (
      selectedStyle.length > 0 ||
      selectedLicense.length > 0 ||
      selectedAnimation.length > 0 ||
      selectedOrientation.length > 0 ||
      selectedColor.length > 0 ||
      selectedSize.length > 0 ||
      selectedInterest.length > 0 ||
      selectedTheme.length > 0 ||
      selectedReligion.length > 0 ||
      selectedLanguage.length > 0
    );
  };

  const clearAllFilters = () => {
    setSelectedStyle([]);
    setSelectedLicense("");
    setSelectedAnimation("");
    setSelectedOrientation([]);
    setSelectedColor("");
    setSelectedSize([]);
    setSelectedInterest([]);
    setSelectedTheme([]);
    setSelectedReligion([]);
    setSelectedLanguage([]);
  };

  useEffect(() => {
    const {
      language,
      theme,
      religion,
      interest,
      size,
      style,
      license,
      animation,
      orientation,
      color,
    } = props?.searchData;

    if (color) {

      setSelectedColor(color);
     } else {
      setSelectedColor("");
    }

    if (license) {
      setSelectedLicense(license);
    } else {
      setSelectedLicense("");
    }

    if (animation) {
      setSelectedAnimation(animation);
    } else {
      setSelectedAnimation("");
    }

    

    if (orientation) {
      setSelectedOrientation(
        Array.isArray(orientation) ? orientation : [orientation]
      );
     } else {
       setSelectedOrientation([]);
    }

    // if (size) {
    //   setSelectedSize(size);
    // } else {
    //   setSelectedSize("");
    // }

    if (size) {
      setSelectedSize(Array.isArray(size) ? size : [size]);
     } else {
      setSelectedSize([]);
    }

    if (language) {
      setSelectedLanguage(Array.isArray(language) ? language : [language]);
    } else {
      setSelectedLanguage([]);
    }

    if (theme) {
      setSelectedTheme(Array.isArray(theme) ? theme : [theme]);
    } else {
      setSelectedTheme([]);
    }

    if (religion) {
      setSelectedReligion(Array.isArray(religion) ? religion : [religion]);
    } else {
      setSelectedReligion([]);
    }

    if (interest) {
      setSelectedInterest(Array.isArray(interest) ? interest : [interest]);
    } else {
      setSelectedInterest([]);
    }

    if (style) {
      setSelectedStyle(Array.isArray(style) ? style : [style]);
    } else {
      setSelectedStyle([]);
    }
  }, [props?.searchData]);

  useEffect(() => {
     api
      .getLanguageData()
      .then((res: unknown) => {
        const response = res as ThemeDataListResponse;

        const transformedData = response?.data.map((item) => {
          if (!item.id_name) {
            const idName = item.name.toLowerCase().replace(/\s+/g, "-");
            return {
              ...item,
              id_name: idName,
            };
          }
          return item;
        });

        setLanguageData(transformedData);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });

    api
      .getThemeData({ cat_id: props?.category_id })
      .then((res: unknown) => {
        const response = res as ThemeDataListResponse;
        setThemesData(response?.data);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });

    api
      .getStyleData()
      .then((res: unknown) => {
        const response = res as CommonFilterDataListResponse;

        const transformedData = response.data.map((item) => {
          if (!item.id_name) {
            const idName = item.name.toLowerCase().replace(/\s+/g, "-");
            return {
              ...item,
              id_name: idName,
            };
          }
          return item;
        });

        setStyleData(transformedData);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });

    api
      .getSizeData({ cat_id: props?.category_id })
      .then((res: unknown) => {
        const response = res as SizeDataListResponse;
        setSizeData(response?.data);
        setNewSizeData(response?.data);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });

    api
      .getReligionsData()
      .then((res: unknown) => {
        const response = res as ReligionsDataListResponse;
        setReligionData(response?.data);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });

    api
      .getInterestData({ cat_id: props?.category_id })
      .then((res: unknown) => {
        const response = res as CommonFilterDataListResponse;
        setInterestData(response?.data);
      })
      .catch((error) => {
        consoleLog("error: ", error);
      });
  }, []);

  const handleApply = () => {
    let queryParams = new URLSearchParams();

    props?.searchData?.query &&
      queryParams.append("query", props?.searchData?.query.toString());
    selectedLicense !== "" &&
      queryParams.append("license", selectedLicense?.toString());
    selectedAnimation !== "" &&
      queryParams.append("animation", selectedAnimation?.toString());

    selectedColor !== "" &&
      queryParams.append("color", selectedColor.toString());

    // selectedSize !== "" &&
    // queryParams.append("size", selectedSize.toString());

    selectedSize.forEach((selectedSize: number) =>
      queryParams.append("size", selectedSize.toString())
    );

    selectedOrientation.forEach((item: string) =>
      queryParams.append("orientation", item)
    );

    selectedStyle.forEach((style: number) =>
      queryParams.append("style", style.toString())
    );
    selectedInterest.forEach((interest: number) =>
      queryParams.append("interest", interest.toString())
    );
    selectedTheme.forEach((theme: number) =>
      queryParams.append("theme", theme.toString())
    );
    selectedReligion.forEach((religion: number) =>
      queryParams.append("religion", religion.toString())
    );
    selectedLanguage.forEach((language: number) =>
      queryParams.append("language", language.toString())
    );

    const currentPath = window.location.pathname;
     
    router.push(
      `${currentPath}?${queryParams.toString().replace(/%20/g, "+")}`
    );  
    
     setOpenFilterBar(false);
  };

  useEffect(() => {
    const htmlStyleElement = document.getElementById("html_style");

    if (htmlStyleElement) {
      if (openFilterBar) {
        htmlStyleElement.style.overflow = "hidden";
      } else {
        htmlStyleElement.style.overflow = "auto";
      }
    }
  }, [openFilterBar]);

  return (
    <div>
      <Button
        className="flex normal-case bg_linear text-white p-0"
        onClick={() => setOpenFilterBar(true)}
      >
        <Box className="flex gap-2 items-center py-[5px] px-[10px]">
          <Icons.SettingIcon svgProps={{ width: 15 }} />
          <Typography>All Filters</Typography>
        </Box>

        <Box className="h-full bg-white w-[1px]"></Box>
        <Box className="px-[10px]">
          <Icons.RightArrowsIcon />
        </Box>
      </Button>

      <Box>
        <Box
          className={`fixed
       bottom-0 right-0 top-0 bg-[#4f4f4f6b] w-[100%] py-[20px] block`}
          sx={{
            left: openFilterBar ? "0" : "-100%",
            zIndex: "1000",
          }}
          onClick={() => setOpenFilterBar(false)}
        ></Box>
        <Box
          className={`fixed
       bottom-[10px] top-[10px] bg-white w-[280px] rounded-[10px]
           ${openFilterBar ? "left-[10px]" : "left-[-280px]"}`}
          sx={{
            zIndex: "1000",
            borderRight: "1px solid #D5D8E3",
          }}
        >
          <Box>
            <Box className="flex justify-between px-[20px] py-[15px] items-center">
              <p>Filters</p>
              <Button
                className="min-w-[40px]"
                onClick={() => setOpenFilterBar(false)}
              >
                <Icons.modalCloseIcon />
              </Button>
            </Box>

            <Divider />

            <Box
              sx={{
                height: `${screenHeight - 140}px`,
                overflow: "auto",
                paddingBottom: "20px",
              }}
              className="custom_scroll"
            >
              <DropdownSelect
                title={"License"}
                data={[
                  { name: "Free", id_name: "false" },
                  { name: "Pro", id_name: "true" },
                ]}
                open={selectedLicense.length > 0}
                value={selectedLicense}
                setValue={setSelectedLicense}
                singleSelect
              />

              <DropdownSelect
                title={"Animation"}
                data={[
                  { name: "Yes", id_name: "true" },
                  { name: "No", id_name: "false" },
                ]}
                open={selectedAnimation.length > 0}
                value={selectedAnimation}
                setValue={setSelectedAnimation}
                singleSelect
              />

              <DropdownSelect
                title={"Orientation"}
                data={[
                  { name: "Portrait", id_name: "portrait" },
                  { name: "Landscape", id_name: "landscape" },
                  { name: "Square", id_name: "square" },
                ]}
                open={selectedOrientation.length > 0} 
                value={selectedOrientation}
                setValue={setSelectedOrientation}
                twoSelect
              />

              <DropdownSelect
                title={"Style"}
                data={styleData}
                open={selectedStyle.length > 0}
                value={selectedStyle}
                setValue={setSelectedStyle}
               />

              <DropdownSelect
                title={"Interest"}
                data={interestData}
                open={selectedInterest.length > 0}
                value={selectedInterest}
                setValue={setSelectedInterest}
               />

              <DropdownSelect
                title={"Size"}
                open={selectedSize.length > 0}
                data={newsizeData}
                value={selectedSize}
                setValue={setSelectedSize}
              />

              <DropdownSelect
                title={"Theme"}
                data={themesData}
                open={selectedTheme.length > 0}
                value={selectedTheme}
                setValue={setSelectedTheme}
               />

              <DropdownSelect
                title={"Religion"}
                data={religionData}
                open={selectedReligion.length > 0}
                value={selectedReligion}
                setValue={setSelectedReligion}
 
              />

              <DropdownSelect
                title={"Language"}
                data={languageData}
                open={selectedLanguage.length > 0}
                value={selectedLanguage}
                setValue={setSelectedLanguage}
              />

              <ColorList
                title={"Color"}
                data={colorsData}
                open={selectedColor.length > 0}
                value={selectedColor}
                setValue={setSelectedColor}
              />
            </Box>

            <Divider />

            <Box className="flex justify-between p-[13px]">
              <button
                className={`bg-[#E6E8EE] rounded-[4px] text-black w-[48%]
                   ${
                  !isAnyFilterSelected() ? "cursor-not-allowed opacity-50" : ""
                }`}
                onClick={clearAllFilters}
                disabled={!isAnyFilterSelected()}
              >
                Clear All
              </button>
              <Button
                className="bg_linear text-[white] w-[48%]"
                onClick={handleApply}
              >
                Apply
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
