import { Heading, IconBox } from "@/components/core";
import { url } from "inspector";
import React from "react";

type ItemType = {
  title: string;
  description: string;
  image: string;
  link: { url: string; target: "_blank" | "_self" };
};

export const OurImpact = () => {
  const data: ItemType[] = [
    {
      title: "Economic Independence",
      description:
        "We have successfully helped individuals like Maharaju, Kishore, and Sonu triple their salaries and transition into high-demand tech roles, contributing to their economic independence.",
      image: "currency",
      link: { url: "/", target: "_self" },
    },
    {
      title: "Global Recognition",
      description:
        "Our skilled workforce has served international clients, optimizing operations and saving costs for companies like Mindmaster Singapore and XULifestyle.",
      image: "ribbon",
      link: { url: "/", target: "_self" },
    },
    {
      title: "Empowering Women",
      description:
        "Deepti's journey from a housewife to a confident Python developer exemplifies our commitment to empowering women and helping them re-enter the workforce.",
      image: "women",
      link: { url: "/", target: "_self" },
    },
    {
      title: "Enhance personal skills",
      description:
        "Empower learners with comprehensive coding knowledge for educational and coaching purposes.",
      image: "skill",
      link: { url: "/", target: "_self" },
    },
    {
      title: "Sufficient Knowledge",
      description:
        "Studying keeps your brain growing because we all know that there is no limit to knowledge.",
      image: "bulb",
      link: { url: "/", target: "_self" },
    },
    {
      title: "Self Learning",
      description:
        "You can learn anytime from anywhere, giving you full control over your studies with our tools and courses.",
      image: "skill",
      link: { url: "/", target: "_self" },
    },
  ];
  return (
    <div className="md:py-[70px] ">
      <div className="container space-y-10">
        <Heading className="text-center">Our Impact</Heading>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item: ItemType, index: number) => {
            const { link, description, image, title } = item;
            return (
              <IconBox
                key={index}
                title={title}
                description={description}
                icon={image}
                link={link}
                type="style-2"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
