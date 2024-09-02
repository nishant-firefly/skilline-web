import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLock } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { IoRibbonOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";
import { PiPersonSimpleSkiLight } from "react-icons/pi";

export type IconBoxType = {
  title: string;
  description: string;
  icon: string;
  link: {
    url: string;
    target: "_blank" | "_self";
  };
  isBordered?: boolean;
};

export const IconBoxStyle2 = ({
  title,
  description,
  icon,
  link,
}: IconBoxType) => {
  const Icons: Record<string, any> = {
    currency: MdOutlineCurrencyExchange,
    ribbon: IoRibbonOutline,
    women: GrRestroomWomen,
    bulb: HiOutlineLightBulb,
    book: FiBookOpen,
    skill: PiPersonSimpleSkiLight,
  };

  const Icon = Icons[icon];

  return (
    <div className=" bg-white rounded-[15px] p-6 hover:shadow-xl transition-all group h-full border border-purple-100">
      <Link
        className="flex flex-col gap-3"
        href={link.url}
        target={link.target}
      >
        <div className="bg-purple-100 w-max p-3 rounded-[5px]">
          <Icon className="text-purple-500" size={28} />
        </div>
        <h3 className="text-[18px] font-[600] text-slate-800 leading-[28px] mt-3 ">
          {title}
        </h3>
        <div className="text-[15px] text-[rgb(105,105,105)] leading-[28px] font-[300]">
          {description}
        </div>
      </Link>
    </div>
  );
};
