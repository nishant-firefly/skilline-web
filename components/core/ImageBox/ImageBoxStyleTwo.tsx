import { Heading } from "@/components/core/Heading";
import { Paragraph } from "@/components/core/Paragraph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonItem {
  label: string;
  url: string;
  target: "_blank" | "_self";
}

interface ImageTextItem {
  image: {
    url: string;
    width: number;
    height: number;
    size: string;
  },
  title: string;
  description: string;
  additional_description?: string;
  style: string;
  button?: ButtonItem;
}

interface ImageTextProps {
  data: ImageTextItem;
  imageAlign: "left" | "right";
}

export const ImageBoxStyleTwo: React.FC<ImageTextProps> = ({
  data,
  imageAlign,
}: ImageTextProps) => {
  return (
    <div className="" id="about-us">
      {imageAlign === "right" ? (
        <div className="container items-center flex-col-reverse md:flex-row xl:flex lg:flex md:flex flex flex-wrap  xl:bg-transparent lg:bg-transparent md:bg-[#F4F9FF] bg-[#F4F9FF]  xl:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] lg:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] md:bg-[linear-gradient(90deg,#F4F9FF_70%,#FFFFFF_30%)] py-10">
          <div className="xl:pl-8 lg:pl-8 md:pl-8 xl:pt-0 lg:pt-0 md:pt-0 pt-5 xl:w-[45%] lg:w-[45%] md:w-[45%] w-full space-y-5">
            <Heading>{data.title}</Heading>
            <Paragraph>{data.description}</Paragraph>
            {data.button ? (
              <Button asChild={true}>
                <Link href={data.button.url} target={data.button.target}>{data.button.label}</Link>
              </Button>
            ) : (null)}
          </div>
          <div className="relative xl:w-[50%] lg:w-[50%] md:w-[50%] w-full">

            <Image
              className="xl:h-[400px] lg:h-[400px] md:h-[400px] h-[200px] object-cover shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] xl:w-[85%] lg:w-[85%] md:w-[85%] w-full relative float-right"
              src={data.image.url}
              alt={data.title}
              width={1500}
              height={1000}
            />
          </div>
        </div>
      ) : (
        <div className="container xl:flex lg:flex md:flex flex flex-wrap  items-center xl:bg-transparent lg:bg-transparent md:bg-[#F4F9FF] bg-[#F4F9FF]  xl:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] lg:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] md:bg-[linear-gradient(90deg,#FFFFFF_30%,#F4F9FF_30%)] pb-[50px] xl:pt-[20px] lg:pt-[20px] md:pt-[20px] pt-[50px] xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
          <div className="relative xl:w-[50%] lg:w-[50%] md:w-[50%] w-full">
            <Image
              className="xl:h-[400px] lg:h-[480px] md:h-[480px] h-[200px] object-cover shadow-[0px_0px_20px_0px_rgba(51,51,51,0.1)] rounded-[10px_10px_10px_10px] xl:w-[85%] lg:w-[96%] md:w-[93%] w-full relative "
              src={data.image.url}
              alt={data.title}
              width={1500}
              height={1000}
            />
          </div>
          <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-full xl:pr-8 lg:pr-8 md:pr-8 space-y-5">
            <Heading>{data.title}</Heading>
            <Paragraph>{data.description}</Paragraph>
            <Paragraph>{data.additional_description}</Paragraph>
          </div>
        </div>
      )}
    </div>
  );
};
