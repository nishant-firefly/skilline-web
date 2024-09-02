import { Heading, IconBox } from "@/components/core";
import { cn } from "@/lib/utils";
import React from "react";

type ItemType = {
  title: string;
  description: string;
  image: string;
  link: { url: string; target: "_blank" | "_self" };
};

export const OurImpact = ({
  isWhite,
  heading,
}: {
  isWhite?: boolean;
  heading?: string;
}) => {
  const data: ItemType[] = [
    {
      title: "Economic Independence",
      description:
        "We have been able to triple the salary and help Maharaju transform to high-demand tech jobs, which has enabled individuals like Kishore and Sonu switch roles leading towards their Economic dependency.",
      image: "/images/economic-independence.png",
      link: { url: "/impact/economic-independence", target: "_self" },
    },
    {
      title: "Global Recognition",
      description:
        "Our workforce of trained professionals has been contributing to the bottom line for clients in worldwide markets, a level including Mindmaster Singapore and XULifestyle.",
      image: "/images/global-recognition.png",
      link: { url: "/impact/global-recognition", target: "_self" },
    },
    {
      title: "Women Empowerment",
      description:
        "Deepti's transformation from a homemaker to an already confident Python developer is the testimony of our dreams about how we were meant to help women rejoin back at workplaces.",
      image: "/images/empowering-women.png",
      link: { url: "/impact/empowering-women", target: "_self" },
    },
    {
      title: "Elevate Personal Skills",
      description:
        "Empower learners with the necessary resources for educational or coaching purposes in coding.",
      image: "/images/enhance-personal-skills.png",
      link: { url: "/impact/enhance-personal-skills", target: "_self" },
    },
    {
      title: "You Have Enough Knowledge to Study",
      description:
        "Good studying keeps your brain growing, as we all know that there is no cap on knowledge.",
      image: "/images/sufficient-knowledge.png",
      link: { url: "/impact/sufficient-knowledge", target: "_self" },
    },
    {
      title: "Self Paced",
      description:
        "You have the flexibility to study at your own pace and time using our tools and courses.",
      image: "/images/self-learning.png",
      link: { url: "/impact/self-learning", target: "_self" },
    },
  ];
  return (
    <div className={cn("py-[70px]", isWhite ? "" : "bg-gray-100")}>
      <div className="container space-y-10">
        <Heading className="text-center">
          {heading ? heading : "Our Impact"}
        </Heading>
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
                isBordered={isWhite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
