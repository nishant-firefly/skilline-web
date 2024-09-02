import { Heading, RoadmapItem, RoadmapItemType } from "@/components/core";
import React from "react";

export const OurRoadmap = () => {
  const data: RoadmapItemType[] = [
    {
      variant: "orange",
      year: "2023",
      heading: "Establishing",
      icon: "cog",
      description:
        "Establishing our offline presence, building a strong advisory board, and laying the foundation for our tech platform.",
    },
    {
      variant: "purple",
      year: "2024",
      heading: "Launching",
      icon: "rocket",
      description:
        "Launching our online platform with a focus on low-code/no-code development, AI/ML integration, and beta testing with a wide audience.",
    },
    {
      variant: "green",
      year: "2025",
      heading: "Expanding",
      icon: "graph",
      description:
        "Expanding our course offerings, forging strategic partnerships with educational institutions, and reaching out to a broader demographic, including rural areas and schools.",
    },
  ];
  return (
    <div className="pb-[50px] pt-[40px]">
      <div className="container">
        <Heading className="mb-10">Our Roadmap</Heading>
        <div className=" grid xl:grid-cols-3 grid-cols-1">
          {data.map((item, index: number) => {
            const { variant, heading, description, icon, year } = item;
            return (
              <RoadmapItem
                key={index}
                variant={variant}
                year={year}
                heading={heading}
                icon={icon}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
