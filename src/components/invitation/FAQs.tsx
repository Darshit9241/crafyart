import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, Box, Button, Typography } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const AccordionSummaryComponent = dynamic(
  () => import("@mui/material/AccordionSummary"),
  { ssr: false }
);

interface FaqsBoxProps {
  heading: string;
  text: string | Element | any;
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function FaqsBox(props: FaqsBoxProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setOpen(!open);
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "100%", backgroundColor: "transparent" }}
      >
        <AccordionSummaryComponent
          aria-controls="panel1d-content "
          id="panel1d-header"
          sx={{
            borderBottom: !open ? "1px solid #D9D9D9" : "",
            maxlg: { px: "[0px]" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              width: "100%",
            }}
          >
            <Typography
              sx={{ color: "#1C3048", fontWeight: "500", fontSize: "19px" }}
              className="text-[14px] 2sm:text-[17px] sm:text-[19px] font-semibold"
            >
              {props?.heading}
            </Typography>
            <Button sx={{ color: "black" }} onClick={() => setOpen(!open)}>
              {open ? (
                <ExpandLessIcon sx={{ fontSize: "25px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "25px" }} />
              )}
            </Button>
          </Box>
        </AccordionSummaryComponent>
        <AccordionDetails sx={{ borderBottom: "1px solid #D9D9D9" }}>
          <Typography className="text-black max-sm:text-[15px] max-2sm:text-[13px]">
            {props?.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
