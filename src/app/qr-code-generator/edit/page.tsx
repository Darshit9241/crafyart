"use client";
import { useScreenWidth } from "@/src/commonFunction/screenWidthHeight";
import Color from "@/src/components/qrCodeGenerator/Color";
import FileFormat from "@/src/components/qrCodeGenerator/FileFormat";
import Link from "@/src/components/qrCodeGenerator/Link";
import Logo from "@/src/components/qrCodeGenerator/Logo";
import Style from "@/src/components/qrCodeGenerator/Style";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Email from "../../../components/qrCodeGenerator/qrCodeContent/Email";
import SMS from "@/src/components/qrCodeGenerator/qrCodeContent/SMS";
import PlainText from "@/src/components/qrCodeGenerator/qrCodeContent/PlainText";
import Contact from "@/src/components/qrCodeGenerator/qrCodeContent/Contact";
import UrlTypeDropdown from "@/src/components/qrCodeGenerator/UrlTypeDropdown";
import Phone from "@/src/components/qrCodeGenerator/qrCodeContent/Phone";
import QRCodeStyling from "@/src/toolsLibrary/qrcode-generator";

const tab = ["Link", "Style", "Logo", "File Format"];

interface QRCodeGeneratorProps {}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = () => {
  const screenWidth = useScreenWidth();
  const [selectTab, setSelectTab] = useState<string>("");
  const [dotsStyle, setDotsStyle] = useState<string | any>("square");
  const [logo, setLogo] = useState<string | any>(null);
  const [urlType, setUrlType] = useState<string>("URL");
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);

  const [text, setText] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [emailData, setEmailData] = useState({
    emailAddress: "",
    emailSubject: "",
    message: "",
  });

  const [smsData, setSmsData] = useState({
    phone: "",
    message: "",
  });

  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: "",
    phone: "",
    mobilePhone: "",
    fax: "",
    street: "",
    city: "",
    region: "",
    postCode: "",
    country: "",
    websiteUrl: [""],
  });

  const [plainText, setPlainText] = useState<string>("");

  const [markerBorderStyle, setMarkerBorderStyle] = useState<string | any>(
    "square"
  );

  const [markerCenterStyle, setMarkerCenterStyle] = useState<string | any>(
    "square"
  );

  // const [dotsStyling, setDotsStyling] = useState<any>({
  //   color: "#000",
  //   colorType: "singleColor",
  //   dotsStyle: "square",
  //   gradient: { color1: "blue", color2: "red" },
  // });

  const [color, setColor] = useState<string>("#000");
  const [dotColorType, setDotColorType] = useState<string>("singleColor");
  const [dotsColor, setDotsColor] = useState<any>({
    color1: "#000",
    color2: "#000",
  });

  const [markerBorderColorType, setMarkerBorderColorType] =
    useState<string>("singleColor");
  const [markerBorderColor, setMarkerBorderColor] = useState<any>({
    color1: "#000",
    color2: "#000",
  });

  const [markerCenterColorType, setMarkerCenterColorType] =
    useState<string>("singleColor");

  const [markerCenterColor, setMarkerCenterColor] = useState<any>({
    color1: "#000",
    color2: "#000",
  });
  const [fileFormat, setFileFormat] = useState<string>("png");
  const [qrCode, setQRCode] = useState<QRCodeStyling | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  // const handleClearState = () => {
  //   setText("");
  //   setPhone("");
  //   setPlainText("");
  //   setSmsData({
  //     phone: "",
  //     message: "",
  //   });
  //   setContactData({
  //     firstName: "",
  //     lastName: "",
  //     organization: "",
  //     title: "",
  //     email: "",
  //     phone: "",
  //     mobilePhone: "",
  //     fax: "",
  //     street: "",
  //     city: "",
  //     region: "",
  //     postCode: "",
  //     country: "",
  //     websiteUrl: [""],
  //   });
  //   setEmailData({
  //     emailAddress: "",
  //     emailSubject: "",
  //     message: "",
  //   });
  // };

  const generateQRCode = () => {
    let data = "";

    switch (urlType) {
      case "URL":
        data = text;
        break;

      case "Contact":
        data = `BEGIN:VCARD
VERSION:3.0
N:${contactData.lastName};${contactData.firstName};
ORG:${contactData.organization}
TITLE:${contactData.title}               
TEL;TYPE=cell,voice:${contactData.mobilePhone}
TEL;TYPE=phone,voice:${contactData.phone}
TEL;TYPE=work,fax:${contactData.fax}
EMAIL:${contactData.email}
ADR;TYPE=ADDRESS:;;${contactData.street};${contactData.city};${
          contactData.region
        };${contactData.postCode};${contactData.country}
${contactData.websiteUrl.map((url) => `URL:${url}`).join("\n")}
END:VCARD`;

        break;

      case "Plain Text":
        data = plainText;
        break;

      case "SMS":
        data = `SMSTO:${smsData.phone}:${encodeURIComponent(smsData.message)}`;
        break;

      case "Email":
        data = `mailto:${emailData.emailAddress}?subject=${emailData.emailSubject}&body=${emailData.message}`;
        break;

      case "Phone":
        data = `tel:${phone}`;
        break;
    }

    if (!qrCode) {
      const qrCodeInstance = new QRCodeStyling({
        width: screenWidth < 1024 ? 250 : 410,
        height: screenWidth < 1024 ? 250 : 410,
        data: data,
        dotsOptions: {
          type: dotsStyle,
          gradient: {
            type: "linear",
            rotation: Math.PI / 2,
            colorStops: [
              { offset: 0, color: dotsColor?.color1 },
              {
                offset: 1,
                color:
                  dotColorType === "singleColor"
                    ? dotsColor?.color1
                    : dotsColor?.color2,
              },
            ],
          },
        },
        cornersSquareOptions: {
          type: markerBorderStyle,
          gradient: {
            type: "linear",
            rotation: Math.PI / 2,
            colorStops: [
              { offset: 0, color: markerBorderColor?.color1 },
              {
                offset: 1,
                color:
                  markerBorderColorType === "singleColor"
                    ? markerBorderColor?.color1
                    : markerBorderColor?.color2,
              },
            ],
          },
        },
        cornersDotOptions: {
          type: markerCenterStyle,
          gradient: {
            type: "linear",
            rotation: Math.PI / 2,
            colorStops: [
              { offset: 0, color: markerCenterColor?.color1 },
              {
                offset: 1,
                color:
                  markerCenterColorType === "singleColor"
                    ? markerCenterColor?.color1
                    : markerCenterColor?.color2,
              },
            ],
          },
        },
        image: logo,
      });

      setQRCode(qrCodeInstance);
    } else {
      qrCode?.update({
        width: screenWidth < 1024 ? 250 : 410,
        height: screenWidth < 1024 ? 250 : 410,
        data: data,
        dotsOptions: {
          type: dotsStyle,
          gradient: {
            type: "linear",
            rotation: Math.PI / 2,
            colorStops: [
              { offset: 0, color: dotsColor?.color1 },
              {
                offset: 1,
                color:
                  dotColorType === "singleColor"
                    ? dotsColor?.color1
                    : dotsColor?.color2,
              },
            ],
          },
        },
        cornersSquareOptions: {
          type: markerBorderStyle,
          gradient: {
            type: "linear",
            rotation: Math.PI / 2,
            colorStops: [
              { offset: 0, color: markerBorderColor?.color1 },
              {
                offset: 1,
                color:
                  markerBorderColorType === "singleColor"
                    ? markerBorderColor?.color1
                    : markerBorderColor?.color2,
              },
            ],
          },
        },
        cornersDotOptions: {
          type: markerCenterStyle,
          gradient: {
            type: "linear",
            rotation: Math.PI / 2,
            colorStops: [
              { offset: 0, color: markerCenterColor?.color1 },
              {
                offset: 1,
                color:
                  markerCenterColorType === "singleColor"
                    ? markerCenterColor?.color1
                    : markerCenterColor?.color2,
              },
            ],
          },
        },
        image: logo,
      });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      generateQRCode();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [
    dotsColor,
    text,
    color,
    dotsStyle,
    markerBorderStyle,
    markerCenterStyle,
    logo,
    emailData,
    smsData,
    plainText,
    contactData,
    phone,
    markerCenterColor,
    dotColorType,
    markerBorderColor,
    markerBorderColorType,
    markerCenterColor,
    markerCenterColorType,
  ]);

  useEffect(() => {
    qrCode?.append(ref.current as any);
  }, [qrCode, ref]);

  const handleDownload = () => {
    if (qrCode) {
      if (fileFormat === "svg") {
        qrCode.download({ name: "qrcode", extension: "svg" });
      } else {
        const canvas = qrCode?._canvas?._canvas;

        if (canvas?.toDataURL) {
          const dataURL = canvas?.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = dataURL;
          link.download = `qrcode.${fileFormat}`;
          link.click();
        }
      }
    }
  };

  return (
    <>
      <title>Free QR Code Generator</title>
      <meta name="robots" content="noindex" />

      <Box className="flex max-lg:flex-col gap-8 p-[30px] max-sm:p-[10px] max-sm:gap-[15px]">
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#F2F2F2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            border: "1px solid #e6e6e6",
            padding: "50px",
          }}
          className={`py-[70px] max-sm:py-[40px]`}
        >
          <div
            style={{ backgroundImage: "url(..//images/qrCode.svg)" }}
            className="w-[410px] h-[410px] max-lg:w-[250px] max-lg:h-[250px] bg-cover"
          >
            {<div className="w-full" ref={ref} />}
          </div>
        </Box>

        <Box
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "10px",
            border: "1px solid #e6e6e6",
          }}
          className="min-w-[500px] max-lg:min-w-[100%] p-[20px] max-sm:p-[10px]"
        >
          <Box>
            <Typography
              className="bg-[#EFEFEF] text-[24px] max-sm:text-[18px] w-fit py-[7px] px-[15px] rounded-[10px] font-[500]"
              variant="h1"
            >
              Generate QR Code
            </Typography>
          </Box>

          <Box className="flex justify-between pt-[30px] gap-2 flex-wrap max-lg:justify-start">
            {tab?.map((item: string, index: number) =>
              item === "Link" ? (
                <UrlTypeDropdown
                  setUrlType={setUrlType}
                  urlType={urlType}
                  setSelectTab={setSelectTab}
                  selectTab={selectTab}
                  // handleClearState={handleClearState}
                />
              ) : (
                <Button
                  key={index}
                  className={`normal-case px-[10px] rounded-[10px] whitespace-nowrap text-[14px] ${
                    item === selectTab
                      ? "bg_linear text-[#fff]"
                      : "bg-[#EFEFEF] text-[#A5AAB5]"
                  }`}
                  onClick={() => setSelectTab(item)}
                >
                  {item}
                </Button>
              )
            )}
          </Box>

          <Box className="py-[15px]">
            {selectTab == "" && (
              <Box>
                {urlType === "URL" && (
                  <Link
                    value={text}
                    setValue={setText}
                    generateQRCode={generateQRCode}
                  />
                )}

                {urlType === "Phone" && (
                  <Phone phone={phone} setPhone={setPhone} />
                )}

                {urlType === "Email" && (
                  <Email emailData={emailData} setEmailData={setEmailData} />
                )}

                {urlType === "SMS" && (
                  <SMS smsData={smsData} setSmsData={setSmsData} />
                )}

                {urlType === "Plain Text" && (
                  <PlainText
                    plainText={plainText}
                    setPlainText={setPlainText}
                  />
                )}

                {urlType === "Contact" && (
                  <Contact
                    contactData={contactData}
                    setContactData={setContactData}
                  />
                )}
              </Box>
            )}

            {selectTab === "Color" && (
              <div>
                <p className="pt-4 pb-2">Dots Color</p>
                <Color value={color} setValue={setColor} />

                <p className="pt-4 pb-2">Marker border Color</p>
                <Color
                  value={markerBorderColor}
                  setValue={setMarkerBorderColor}
                />

                <p className="pt-4 pb-2">Marker center Color</p>
                <Color
                  value={markerCenterColor}
                  setValue={setMarkerCenterColor}
                />
              </div>
            )}
            {selectTab === "File Format" && (
              <FileFormat value={fileFormat} setValue={setFileFormat} />
            )}

            {selectTab === "Logo" && (
              <Logo
                value={logo}
                setValue={setLogo}
                preview={previewLogo}
                setPreview={setPreviewLogo}
              />
            )}

            {selectTab === "Style" && (
              <Style
                markerCenterColor={markerCenterColor}
                setMarkerCenterColor={setMarkerCenterColor}
                markerCenterColorType={markerCenterColorType}
                setMarkerCenterColorType={setMarkerCenterColorType}
                markerBorderColor={markerBorderColor}
                setMarkerBorderColor={setMarkerBorderColor}
                markerBorderColorType={markerBorderColorType}
                setMarkerBorderColorType={setMarkerBorderColorType}
                dotsColor={dotsColor}
                setDotsColor={setDotsColor}
                dotColorType={dotColorType}
                setDotColorType={setDotColorType}
                dotsStyle={dotsStyle}
                setDotsStyle={setDotsStyle}
                markerBorderStyle={markerBorderStyle}
                setMarkerBorderStyle={setMarkerBorderStyle}
                markerCenterStyle={markerCenterStyle}
                setMarkerCenterStyle={setMarkerCenterStyle}
              />
            )}
          </Box>

          <Button
            className={`normal-case px-[25px] text-[16px] py-[7px] rounded-[10px] mt-[30px] ${
              qrCode ? "bg_linear text-[#fff]" : "bg-[#EFEFEF] text-[#A5AAB5]"
            }`}
            onClick={handleDownload}
          >
            Download
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default QRCodeGenerator;
