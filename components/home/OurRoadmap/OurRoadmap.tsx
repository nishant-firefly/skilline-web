import { Heading, RoadmapItem, RoadmapItemType } from "@/components/core";
import React from "react";

export const OurRoadmap = () => {
  const data: RoadmapItemType[] = [
    {
      variant: "orange",
      year: "2023",
      heading: "Establishing",
      icon: "cog",
      type: "image",
      src: "/images/building.png",
      description:
        "Establishing a strong presence offline, building an influential advisory board, and laying the groundwork for our tech platform - ONGOING!",
    },
    {
      variant: "purple",
      year: "2024",
      heading: "Launching",
      icon: "rocket",
      type: "image",
      src: "/images/rocket.png",
      description:
        "Launching the first iteration of our online platform with a special focus on low-code/no-code development and AI/ML integration, and beta testing this version with a high number of users.",
    },
    {
      variant: "green",
      year: "2025",
      heading: "Expanding",
      icon: "graph",
      type: "image",
      src: "/images/scalable.png",
      description:
        "Expanding our course offerings, partnering with prospective educational institutions, and broadening demographic reach to include rural areas and schools.",
    },
  ];
  return (
    <div className="md:py-[50px] pt-[30px]">
      <div className="container">
        <Heading className="mb-10 md:text-center">Our Roadmap</Heading>
        <div className=" grid xl:grid-cols-3 grid-cols-1">
          {data.map((item, index: number) => {
            const { variant, heading, description, icon, year, type, src } =
              item;
            return (
              <RoadmapItem
                key={index}
                variant={variant}
                year={year}
                heading={heading}
                icon={icon}
                description={description}
                type={type}
                src={src}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
