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
  image: {
    url: string;
    width: number;
    height: number;
    size: string;
  },
  title: string;
  description: string;
  button?: ButtonItem;
}

interface ImageWithTextProps {
  data: ImageWithTextItem;
  imageAlign?: "left" | "right";
}

export const ImageBoxStyleOne = ({ data }: ImageWithTextProps) => {
  return (
    <div className="relative my-10" id="about-us">
      <GridBox
        gap={10}
        className={cn(
          "container  xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5  xl:bg-transparent lg:bg-transparent",
          "pt-[0px] pb-[0px]"
        )}
        columns={2}
      >
        <GridBox.GridItem columnMerge={1} className="relative">
      
          <Image
            className={`shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] relative ${data.image.size}`}
            src={data.image.url}
            alt={data.title}
            width={data.image.width}
            height={data.image.height}
          />
        </GridBox.GridItem>
        <GridBox.GridItem
          columnMerge={1}
          className="xl:px-px-[30px] lg:px-[30px] md:px-[30px] space-y-2 flex flex-col justify-around"
        >
          <Heading>{data.title}</Heading>
          <Paragraph>{data.description}</Paragraph>

          {data.button && (
            <Button asChild={true}>
              <Link href={data.button.links} target={data.button.target} className="w-[30%]">
                {data.button.label}
              </Link>
            </Button>
          )}
        </GridBox.GridItem>
      </GridBox>
    </div>
  );
};
