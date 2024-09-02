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

interface ImageWithTextProps {
  data: ImageWithTextItem;
  imageAlign?: "left" | "right";
}

export const ImageBoxStyleThree = ({ data }: ImageWithTextProps) => {
  const description = data.description.split("\n");
  return (
    <div className="relative container">
      <div className="flex items-center flex-wrap">
        <div className="md:w-1/2 w-full">
          <Image
            className=" z-[1] relative max-w-[80%] mx-auto"
            src={data.image}
            alt={data.title}
            width={1500}
            height={1000}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="lg:pl-[30px] lg:pr-[0px] px-8 pt-5">
            <Heading>{data.title}</Heading>

            <Paragraph className="flex flex-col gap-5 lg:pt-8 pt-4 pb-4 md:pb-12">
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
