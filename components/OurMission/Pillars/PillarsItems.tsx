import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Paragraph } from "@/components/core";

export type CourseItemtype = {
  image: string;
  title: string;
  pillarsDescription: string;
};

export const PillarsItems = ({
image,
title,
pillarsDescription,
}: CourseItemtype) => {
  return (
    
      <div className="bg-white grid md:grid-cols-4 grid-cols-1 rounded-xl py-4">
        <div className="md:w-[200px] w-full items-center px-6 py-4 md:text-center flex gap-4 md:gap-1 flex-fow md:flex-col md:justify-center ">
          <Image
            src={image}
            width={100}
            height={100}
            alt={title}
            className="md:w-full rounded-[15px]"
          />
          <div>
          <h3 className="mb-2 md:hidden block text-[23px]">{title}</h3>
          </div>
        </div>

        <div className="md:col-span-3  flex items-center">
          <div className="w-full h-full flex items-center justify-center flex-col md:flex-row px-10 md:px-0">
            <div className="bg-gray-200 w-full h-[1px] md:w-[1px] md:h-[100%] inline-block mx-10" />
            <div className="pr-5">
              <h3 className="mb-2 md:block hidden text-[21px]">{title}</h3>
              <Paragraph className=" font-[300]  interFont p-0 m-0 md:text-[18px] text-[20px] md:mt-0 mt-3 md:h-[unset] h-[390px]">
                {pillarsDescription}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
  );
};
