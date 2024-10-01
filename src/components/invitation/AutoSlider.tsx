import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
interface props {
  img_1: any;
  img_2: any;
  img_3: any;
  img_4: any;
  img_5: any;
  img_6: any;
  img_1_url: any;
  img_2_url: any;
  img_3_url: any;
  img_4_url: any;
  img_5_url: any;
  img_6_url: any;
}
export default function AutoSlider({
  img_1,
  img_2,
  img_3,
  img_4,
  img_5,
  img_6,
  img_1_url,
  img_2_url,
  img_3_url,
  img_4_url,
  img_5_url,
  img_6_url,
}: props) {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          <div className="slide hover:shadow-xl">
            <a href={img_1_url}>
              <img src={img_1} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_2_url}>
              <img src={img_2} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_3_url}>
              <img src={img_3} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_4_url}>
              <img src={img_4} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_5_url}>
              <img src={img_5} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_6_url}>
              <img src={img_6} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_1_url}>
              <img src={img_1} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_2_url}>
              <img src={img_2} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_3_url}>
              <img src={img_3} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_4_url}>
              <img src={img_4} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_5_url}>
              <img src={img_5} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_6_url}>
              <img src={img_6} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_1_url}>
              <img src={img_1} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_2_url}>
              <img src={img_2} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_3_url}>
              <img src={img_3} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_4_url}>
              <img src={img_4} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_5_url}>
              <img src={img_5} />
            </a>
          </div>
          <div className="slide hover:shadow-xl">
            <a href={img_6_url}>
              <img src={img_6} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
