"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./index.css";
import { ReactNode } from "react";

// Next Arrow:

function SliderNextArrow(props: any) {
  const { className, style, onClick } = props;

  return (
    <IconButton
      sx={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "-50px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <ArrowForwardIos sx={{ fontSize: "20px" }} />
    </IconButton>
  );
}

//   Prev Arrow:

function SliderBackArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      sx={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "-50px",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <ArrowBackIosNew sx={{ fontSize: "20px" }} />
    </IconButton>
  );
}

const SliderProvider = ({ children }: { children: ReactNode }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderBackArrow />,
    variableHeight: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderProvider;
