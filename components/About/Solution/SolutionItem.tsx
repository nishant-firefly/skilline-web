import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Paragraph } from "@/components/core";

export type SolutionType = {
  course: string;
  image: string;
  title: string;
  cousedescription: string;
  link: {
    label: string;
    url: string;
    target: "_self" | "_blank";
  };
};

export const SolutionItem = ({
  course,
  image,
  title,
  cousedescription,
  link,
}: SolutionType) => {
  return (
    <div className="bg-white grid md:grid-cols-4 grid-cols-1 rounded-xl py-4">
      <div className="md:w-[200px] w-full items-center px-6 py-4 md:text-center flex gap-4 md:gap-1 flex-fow md:flex-col md:justify-center ">
        <Image
          src={image}
          width={512}
          height={512}
          alt={title}
          className="w-[50px]"
        />
        <div>
          <span className="w-[30px] h-[3px] hidden  bg-gray-200 md:inline-block"></span>
          <h3 className="md:text-[16px] text-[22px]">{course} </h3>
        </div>
      </div>

      <div className="md:col-span-3  flex items-center">
        <div className="w-full h-full flex items-center justify-center flex-col md:flex-row md:px-10 md:px-0">
          <div className=" w-full h-[1px] md:w-[1px] md:h-[100%] inline-block" />
          <div className="px-5 pt-3">
            <h3 className="mb-2 md:text-[20px] text-[18px]">{title}</h3>
            <Paragraph className=" font-[300]  interFont p-0 m-0 md:text-[17px] md:line-clamp-3 line-clamp-4 ">
              {cousedescription}
            </Paragraph>
            <Link href={link.url} target={link.target} className='text-[#1D70A2] font-semibold hover:text-black text-[17px]'>
              See More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
