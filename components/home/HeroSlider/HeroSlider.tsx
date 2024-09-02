"use client";

import React from "react";
import { Slider, SliderItemType } from "@/components/core";

export const HeroSlider = () => {
  const sliderData: SliderItemType[] = [
    {
      preTitle: "",
      title: "Empowering India's Future",
      description: `Skilline is revolutionizing Bharat's education landscape with an affordable, AI-driven platform.`,
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
        src: "/revision/slider_2.png",
        width: 630,
        height: 456,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Industry-Ready Skills",
      description: `Delivering 100% job-guaranteed training in technology, manufacturing, and high-demand sectors.`,
      image: {
        src: "/image/images/Industry Ready skill.jpg",
        width: 1015,
        height: 735,
        alt: "",
      },
    },
    {
      preTitle: "",
      title: "Empowering Individual Potential",
      description: `Personalized learning to unleash individual growth and nationwide prosperity.`,
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
