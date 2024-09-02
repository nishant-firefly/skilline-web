import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Paragraph } from "@/components/core";

export type CourseItemtype = {
  course: string;
  risk: {
    bgcolor: string;
    label: string;
  }
  image: string;
  title: string;
  cousedescription: string;
  link: {
    label: string;
    url: string;
    target: "_self" | "_blank";
  };
};

export const CourseItem = ({
course,
risk,
image,
title,
cousedescription,
  link,
}: CourseItemtype) => {
  return (
    // <Link href={link.url} target={link.target}>
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
            <span className="w-[30px] h-[3px] hidden  bg-gray-200 md:inline-block"></span>
            <h3 className="text-[18px] md:block hidden">{course} </h3>
            <h3 className="mb-2 md:hidden block text-[20px]">{title}</h3>
            {/* <div className={`w-full ${risk.bgcolor}`}>
            <p className={`text-[13px] leading-[1.38] text-center px-2.5 py-0.5 rounded-sm mt-2 md:block hidden `}>{risk.label}</p>
            </div> */}
          </div>
        </div>

        <div className="md:col-span-3  flex items-center">
          <div className="w-full h-full flex items-center justify-center flex-col md:flex-row px-10 md:px-0">
            <div className="bg-gray-200 w-full h-[1px] md:w-[1px] md:h-[100%] inline-block mx-10" />
            <div className="pr-5">
              <h3 className="mb-2 md:block hidden md:text-[21px]">{title}</h3>
              <Paragraph className=" font-[300]  interFont p-0 m-0 text-[18px] leading-[30px] md:mt-0 mt-2">
                {cousedescription}
              </Paragraph>
              {/* <div className="py-6 border-r-0 border-b-0 text-center md:w-[40%]">
                <p
                  // href={link.url}
                  // target={link.target}
                  className="bg-gray-900 text-white px-4 py-2 text-sm rounded-md"
                >
                  {link.label}
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    // </Link>
  );
};
