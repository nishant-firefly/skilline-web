"use client";

import React from "react";
import { Slider, SliderItemType } from "@/components/core";

export const HeroSlider = () => {
  const sliderData: SliderItemType[] = [
    {
      preTitle: "",
      title: "Shaping the Future of Education",
      description: `On the path to transforming Bharat's education landscape with an innovative, interactive EdTech platform.`,
      image: {
        src: "/image/images/slider-5.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Aatmanirbhar Bharat",
      description: `Narrowing skill gaps, empowering rural youth, and advancing the objectives of 'Aatmanirbhar Bharat'.`,

      image: {
        src: "/image/images/slider-atma-nirbhar.jpg",
        width: 630,
        height: 456,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Industry-Ready Skills",
      description: `Building 100% job-guaranteed training in technology, manufacturing, and high-demand sectors.`,
      image: {
        src: "/image/images/industry-ready-skills.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Unleashing Individual Potential",
      description: `Personalized learning powered by innovative technology to maximize personal growth and success`,
      image: {
        src: "/image/images/empowering-india-fututre.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
  ];

  return <Slider data={sliderData} />;
};
