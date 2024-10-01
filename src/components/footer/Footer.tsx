"use client";
import Icons from "@/src/assets";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  Box,
  Button,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState } from "react";
import { handleClickWhatsapp } from "../header/headerComponents/Menu";

const AccordionSummaryComponent = dynamic(
  () => import("@mui/material/AccordionSummary"),
  { ssr: false }
);

interface OptionButtonProps {
  children: React.ReactNode;
}

export const OptionButton: React.FC<OptionButtonProps> = (props) => {
  return (
    <Button
      className="mb-4 cursor-pointer text-[16px] normal-case text-white p-0 min-w-[auto] opacity-90 font-[300]"
      {...props}
    >
      {props?.children}
    </Button>
  );
};

interface MobileFooterProps {
  heading: string;
  button: React.ReactNode;
}

export const MobileFooter: React.FC<MobileFooterProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = React.useState<string | false>("panel2");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        border: "1px solid transparent",
      }}
    >
      <AccordionSummaryComponent
        aria-controls="panel1d-content"
        id={props?.heading}
        sx={{
          borderBottom: open ? "" : "1px solid #D9D9D9",
          "&.MuiAccordionSummary-content": { margin: "8px 0" },
        }}
        className="max-lg:px-[0px]"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={() => setOpen(!open)}
        >
          <Typography
            sx={{ color: "white", fontWeight: "500", fontSize: "19px" }}
            className="text-[17px] sm:text-[19px]"
          >
            {props?.heading}
          </Typography>
          <Button sx={{ color: "black" }} onClick={() => setOpen(!open)}>
            {open ? (
              <ExpandLessIcon sx={{ fontSize: "25px", color: "white" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "25px", color: "white" }} />
            )}
          </Button>
        </Box>
      </AccordionSummaryComponent>
      <AccordionDetails
        sx={{ borderBottom: "1px solid #D9D9D9" }}
        className="max-lg:px-[0px]"
      >
        {props?.button}
      </AccordionDetails>
    </Accordion>
  );
};

export const Special: React.FC = () => {
  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link prefetch={false} href={"/marketing"}>
        <OptionButton>Marketing</OptionButton>
      </Link>
      <Link prefetch={false} href={"/business"}>
        <OptionButton>Business</OptionButton>
      </Link>
      <Link prefetch={false} href={"/invitation"}>
        <OptionButton>Invitation</OptionButton>
      </Link>
      <Link prefetch={false} href={"/cards"}>
        <OptionButton>Cards</OptionButton>
      </Link>
    </Box>
  );
};

export const Company: React.FC = () => {
  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link prefetch={false} href={"/about-us"}>
        <OptionButton>About</OptionButton>
      </Link>
      <Link prefetch={false} href={"/plans"}>
        <OptionButton>Price and plan</OptionButton>
      </Link>
      <Link prefetch={false} href={"/refund-cancellation"}>
        <OptionButton>Refund and Cancellation</OptionButton>
      </Link>
      <Link prefetch={false} href={"/contact-us"}>
        <OptionButton>Contact us</OptionButton>
      </Link>
    </Box>
  );
};

export const Legal: React.FC = () => {
  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link prefetch={false} href={"/privacy-policy"}>
        <OptionButton>Privacy policy</OptionButton>
      </Link>
      <Link prefetch={false} href={"/referral-program"}>
        <OptionButton>Referral program</OptionButton>
      </Link>
      <Link prefetch={false} href={"/term-condition"}>
        <OptionButton>Terms and condition</OptionButton>
      </Link>
      <Link prefetch={false} href={"/copyright-information"}>
        <OptionButton>Copyright information</OptionButton>
      </Link>
      <Link prefetch={false} href={"/sitemap"}>
        <OptionButton>Sitemap</OptionButton>
      </Link>
      <Link prefetch={false} href={"/faqs"}>
        <OptionButton>FAQs</OptionButton>
      </Link>
    </Box>
  );
};

export const Discover: React.FC = () => {
  return (
    <Box className="flex flex-col items-start text-white font-normal">
      <Link prefetch={false} href={"/invitation"}>
        <OptionButton>Invitation</OptionButton>
      </Link>
      <Link prefetch={false} href={"/quotes"}>
        <OptionButton>Quotes</OptionButton>
      </Link>
      <Link prefetch={false} href={"/flyer"}>
        <OptionButton>Flyer</OptionButton>
      </Link>
      <Link prefetch={false} href={"/caricature"}>
        <OptionButton>Caricature</OptionButton>
      </Link>
      <Link prefetch={false} href={""} onClick={handleClickWhatsapp}>
        <OptionButton>Custom order</OptionButton>
      </Link>
      <Link prefetch={false} href={"/brand-kit"}>
        <OptionButton>Brand Kit</OptionButton>
      </Link>
    </Box>
  );
};

export default function Footer() {
  const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL;

  return (
    <Box className="bg-black">
      <Box className="max-w-[2400px] w-[100%] sm:w-[90%] lg:w-[100%] xl:w-[80%] mx-auto pt-[50px] max-sm:pt-[0px]">
        <Box className="grid grid-cols-1  sm:grid-cols-3  gap-5 xl:gap-8 px-4 py-6 lg:py-8 lg:grid-cols-5  xl:grid-cols-5">
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium text-white">
              Special(Industry)
            </Typography>
            <Special />
          </Box>
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium text-white">
              Company
            </Typography>
            <Company />
          </Box>
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium text-white">
              Legal
            </Typography>
            <Legal />
          </Box>
          <Box className="hidden sm:block">
            <Typography className="mb-6 text-[20px] font-medium text-white">
              Discover
            </Typography>
            <Discover />
          </Box>
          <Box className="block sm:hidden">
            <MobileFooter heading="Special(Industry)" button={<Special />} />
            <MobileFooter heading="Company" button={<Company />} />
            <MobileFooter heading="Legal" button={<Legal />} />
            <MobileFooter heading="Discover" button={<Discover />} />
          </Box>

          <Box>
            <Typography className="mb-6 text-[20px] font-medium text-white max-sm:text-center">
              Get the free app
            </Typography>
            <Box className="flex flex-col items-start text-white font-normal max-sm:items-center">
              <Box className="cursor-pointer">
                <Link
                  prefetch={false}
                  target="_blank"
                  rel="nofollow"
                  href="https://play.google.com/store/apps/details?id=com.crafty.art"
                >
                  <img
                    src={`${assetsUrl}/w_assets/images/playstore.png`}
                    alt="playstore"
                  />
                </Link>
              </Box>
              <Box className="flex items-center gap-5 my-8 max-sm:justify-center">
                <span className="cursor-pointer">
                  <Link
                    prefetch={false}
                    target="_blank"
                    rel="nofollow"
                    aria-label="Crafty Art Facebook Page"
                    href="https://www.facebook.com/craftyartapp/"
                  >
                    <Icons.facebookIcon svgProps={{ width: 25, height: 25 }} />
                  </Link>
                </span>

                <span className="cursor-pointer">
                  <Link
                    prefetch={false}
                    target="_blank"
                    rel="nofollow"
                    aria-label="Crafty Art Instagram Page"
                    href="https://www.instagram.com/craftyart_official?igsh=MnJuM3JydWxsYXZy&utm_source=qr"
                  >
                    <Icons.instagramIcon svgProps={{ width: 25, height: 25 }} />
                  </Link>
                </span>

                <span className="cursor-pointer">
                  <Link
                    prefetch={false}
                    target="_blank"
                    rel="nofollow"
                    aria-label="Crafty Art Pinterest Page"
                    href="https://in.pinterest.com/craftyart_official"
                  >
                    <Icons.pinterestIcon svgProps={{ width: 25, height: 25 }} />
                  </Link>
                </span>

                <span className="cursor-pointer">
                  <Link
                    prefetch={false}
                    target="_blank"
                    rel="nofollow"
                    aria-label="Crafty Art Twitter Page"
                    href="https://twitter.com/craftyartstudio"
                  >
                    <Icons.twitterIcon svgProps={{ width: 20, height: 20 }} />
                  </Link>
                </span>

                <span className="cursor-pointer">
                  <Link
                    prefetch={false}
                    target="_blank"
                    rel="nofollow"
                    aria-label="Crafty Art Youtube Page"
                    href="https://www.youtube.com/@craftyartgraphic7864"
                  >
                    <Icons.youtubeIcon svgProps={{ width: 25, height: 25 }} />
                  </Link>
                </span>
              </Box>
            </Box>

            <Typography className="mb-6 text-[20px] font-medium text-white max-sm:text-center">
              We Accept
            </Typography>
            <Box className="flex flex-col items-start text-white font-normal max-sm:items-center">
              <Icons.creditDebitCardIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="w-[90%] mx-auto py-5"
        sx={{ borderTop: "2px solid grey" }}
      >
        <Typography className="text-center text-[13px] sm:text-[16px] text-white">
          © 2024 Crafty Art, ALL Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
