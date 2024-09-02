"use client";

import React from "react";
import { Slider, SliderItemType } from "@/components/core";

export const HeroSlider = () => {
  const sliderData: SliderItemType[] = [
    {
      preTitle: "Envisioning the future",
      title: "Empowering India's Future",
      description: `Unlocking Potential, Empowering Dreams. Join the Skilline Revolution.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-1.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "AI-Driven \n Education",
      description: `Where AI Meets Education, Creating Opportunities for All.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-2.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Industry \n Ready Skills",
      description: `Bridging the Skill Gap, Empowering \n India's Workforce.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-3.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
    {
      preTitle: "Envisioning the future",
      title: "Cultural & Policy Awareness",
      description: `Nurturing Minds, Building a Better India.`,
      // button: {
      //   label: "Explore Solution",
      //   links: "",
      //   target: "_self",
      // },
      image: {
        src: "/images/banner-4.png",
        width: 400,
        height: 428,
        alt: "",
      },
    },
  ];

  return <Slider data={sliderData} />;
};
