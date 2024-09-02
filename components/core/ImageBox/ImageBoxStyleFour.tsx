"use client";
import React from "react";
import Image from "next/image";
import { GridBox } from "@/components/core/GridBox";
import { Heading } from "@/components/core/Heading/Heading";
import { Paragraph } from "@/components/core/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonItem {
  label: string;
  links: string;
  target: "_blank" | "_self";
}

interface ImageWithTextItem {
  image: string;
  title: string;
  description: string;
  button?: ButtonItem;
}

export type ColorStyleType = "blue" | "orange";

interface ImageWithTextProps {
  data: ImageWithTextItem;
  imageAlign?: "left" | "right";
  color: ColorStyleType;
  seqNumber?: string;
}

export const ImageBoxStyleFour = ({
  data,
  imageAlign = "left",
  color = "blue",
  seqNumber,
}: ImageWithTextProps) => {
  const description = data.description.split("\n");

  const BorderColor = {
    orange: "border-orange-500/20",
    blue: "border-blue-500/20",
    green: "border-green-500/20",
    yellow: "border-yellow-500/20",
    gray: "border-gray-500/20",
  };
  const backgroundColor = {
    orange: "bg-orange-500/5",
    blue: "bg-blue-500/5",
    green: "bg-green-500/5",
    yellow: "bg-yellow-500/5",
    gray: "bg-gray-500/5",
  };

  return (
    <div className="md:container">
      <div
        className={cn(
          "flex items-center flex-wrap rounded-xl md:pt-[74px] md:pb-[74px] pt-[20px] pb-[20px]",
          "flex-col",
          imageAlign === "right" ? "flex-row-reverse" : "flex-row",
          backgroundColor[color],
          color
        )}
      >
        <div className="md:w-[54%] w-full pl-5 pr-5 md:pl-0 md:pr-0">
          <div className="w-auto h-auto relative md:mx-auto md:max-w-[80%]">
            <div
              className={cn(
                "",
                BorderColor[color]
              )}
            ></div>
            <Image
              className=" z-[1] relative w-full   rounded-xl md:h-[480px] md:object-cover"
              src={data.image}
              alt={data.title}
              width={1500}
              height={1000}
            />
          </div>
        </div>
        <div className="md:w-[46%] w-full">
          <div
            className={cn(
              imageAlign === "left" ? "px-8 md:pr-5" : "px-8 md:pl-[80px]"
            )}
          >
            {seqNumber ? <h1 className="number">{seqNumber}</h1> : null}

            <Heading className="pb-4">{data.title}</Heading>

            <Paragraph className="flex flex-col gap-5">
              {description.map((item: string, index) => {
                return <span key={index}>{item}</span>;
              })}
            </Paragraph>
            {data.button && (
              <Link
                href={data.button.links}
                target={data.button.target}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-white shadow hover:bg-primary md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[13px] md:text-[15px]"
              >
                {data.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
