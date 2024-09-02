import { FaCog } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiGraphBold } from "react-icons/pi";

import React from "react";
import { cn } from "@/lib/utils";
import { Paragraph } from "../Paragraph";
import Image from "next/image";
type IconType = "cog" | "rocket" | "graph";
type VariantType = "purple" | "green" | "orange";
export type RoadmapItemType = {
  year: string;
  heading: string;
  description: string;
  variant: VariantType;
  icon: IconType;
  type?: "image" | "icon";
  src?: string;
};

export const RoadmapItem = ({
  year,
  description,
  variant,
  heading,
  icon,
  type,
  src,
}: RoadmapItemType) => {
  const iconStyle: Record<VariantType, string> = {
    purple: "bg-purple-500 text-white",
    green: "bg-green-500 text-white",
    orange: "bg-orange-500 text-white",
  };

  const textStyle: Record<VariantType, string> = {
    purple: "text-purple-500",
    green: "text-green-500",
    orange: "text-orange-500",
  };

  const lineStyle: Record<VariantType, string> = {
    purple: "bg-purple-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
  };

  const Icons: Record<IconType, any> = {
    cog: FaCog,
    rocket: IoRocketSharp,
    graph: PiGraphBold,
  };

  const ItemIcon = Icons[icon];

  return (
    <div className="relative md:mb-6 mb-[50px] sm:mb-0">
      <div className="md:h-[199px] md:w-auto w-[149px] relative">
        <div className="absolute w-full h-[10px] bg-gray-200 top-[125px] hidden md:inline-block"></div>
        <div className="w-max relative  lg:rotate-0">
          {type === "image" ? (
            <Image
              alt=""
              src={src || ""}
              width={150}
              height={150}
              className="size-[80px]"
            />
          ) : (
            <ItemIcon
              size={20}
              className={cn(
                "w-[50px] h-[50px] p-3.5 rounded-full inline-flex items-center justify-center",
                iconStyle[variant]
              )}
            />
          )}

          <span
            className={cn(
              "absolute lg:w-[10px] md:block hidden w-[3px] h-[80px] left-0 right-0 mx-auto",
              lineStyle[variant],
              "top-[90px]",
              "lg:border-[4px] border-white border-t-0 border-b-0  "
            )}
          />

          <span
            className={cn(
              "absolute md:block hidden rounded-full w-[15px] h-[15px] left-0 right-0 mx-auto",
              lineStyle[variant],
              "top-[160px]"
            )}
          />
        </div>
        <h3
          className={cn(
            "lg:pl-[100px] pl-[100px] lg:translate-y-[-55px] translate-y-[-52px] text-2xl font-bold",
            textStyle[variant]
          )}
        >
          {year}
        </h3>
      </div>
      <div className="lg:pr-[36px] pr-0 lg:mt-0 mt-[0px] lg:pl-[5px] pl-[0px]">
        <h3 className="text-[24px]">{heading}</h3>
        <Paragraph className="text-black font-[300]  mt-2  inline-block ">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};
