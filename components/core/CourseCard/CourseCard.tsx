import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Paragraph } from "../Paragraph";

type CourseCard = {
  image: string;
  price?: string;
  language: string;
  title: string;
  label: string;
  level: string;
  link: {
    url: string;
    target: "_blank" | "_self";
  };
};

export const CourseCard = ({
  image,
  price,
  language,
  title,
  label,
  level,
  link,
}: any) => {
  return (
    <div className="relative grid-item col-span-1 group shadow-[0_0_10px_rgba(51,51,51,0.15)] bg-white rounded-[5px]">
      {/* <Link href={link.url} target={link.target}> */}
      <div className="relative pt-[50%] sm:pt-[70%] overflow-hidden xl:h-[203px] lg:h-[203px] md:h-[267px] rounded-[5px_5px_0px_0px]">
        <Image
          className="w-full aspect-[1.4] absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-[5px_5px_0px_0px]"
          src={image}
          alt={language}
          width={400}
          height={400}
        />
      </div>
      <div className="absolute left-0 top-0 z-[1]">
        {price ? (
          <div
            className={` ${
              price === "Free"
                ? "bg-[#6cbd7e] text-white font-normal"
                : "bg-[#F7BF27] text-black font-semibold"
            }     uppercase text-sm px-[13px] py-1.5 rounded-[5px_0px_0px_0px]`}
          >
            {price}
          </div>
        ) : null}
      </div>
      <div className="pt-4 pb-[22px] px-[30px] ">
        <div
          className={` ${
            level == "High"
              ? "bg-[rgba(254,137,91,0.15)] text-[#feb55b]"
              : "bg-[rgba(247,105,105,0.15)] text-[#d33434]"
          }  text-[13px] leading-[1.38] w-[40%] text-center px-2.5 py-0.5 rounded-sm`}
        >
          {level}
        </div>
        <div className="space-y-1 mt-3">
          <div className="text-slate-400">{language}</div>
          <h2 className="text-lg leading-[1.67] text-black line-clamp-2  text-balance">
            {title}
          </h2>
          <div className="line-clamp-3 text-balance text-[18px] leading-[1.86]  font-light text-[rgb(105,105,105)] tracking-normal">
            {label}
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
