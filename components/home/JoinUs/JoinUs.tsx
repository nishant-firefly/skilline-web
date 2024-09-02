import { GridBox } from "@/components/core/GridBox";
import { Newsletter } from "@/components/core/Newsletter";
import Image from "next/image";
import React from "react";

export const JoinUs = () => {
  const data = {
    title: "Join Us",
    label: "Empowering a Skilled India Together",
  };

  return (
    <div className="JoinUs mt-[70px] xl:mx-0 lg:mx-0 md:mx-0 mx-3 md:mb-5 mb-0">
      <div className="container bg-black rounded-[20px] py-10 relative">
        <Image
          src="/images/half-circle.png"
          className="xl:block lg:block md:block hidden absolute w-[65px] left-[0px] z-[1]"
          alt={data.title}
          width={176}
          height={312}
        ></Image>
        <div className="absolute right-0 top-[9px] xl:block lg:block md:block hidden">
          <div className="w-[40px] h-[40px] bg-[#7A0302] rounded-[50%]"></div>
          <div className="w-[60px] h-[60px] bg-[#FB7E3E] rounded-[50%] mt-[-15px]"></div>
          <div className="w-[70px] h-[70px] bg-[#141C98] rounded-[50%] float-right mt-[-15px]"></div>
        </div>
        <GridBox
          columns={2}
          className="xl:px-[8%] lg:px-[8%] md:px-[8%] px-[2%] items-center xl:text-left lg:text-left md:text-left text-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-3"
        >
          <GridBox.GridItem
            columnMerge={1}
            className='xl:space-y-2 lg:space-y-2 md:space-y-2 space-y-1 xl:pl-5 lg:pl-5 md:pl-5 before:content-[""] before:w-[3px] before:left-0 before:h-full before:absolute before:bg-[#141C98]before:content-[""] before:w-[3px] before:left-0 before:h-full before:absolute xl:before:bg-[#141C98] lg:before:bg-[#141C98] md:before:bg-[#141C98] relative'
          >
            <h3 className="text-[22px] leading-[29px] md:text-[40px] md:leading-[40px] text-white font-[500]">
              {data.title}
            </h3>
            <div className="text-balance md:text-[22px] md:leading-[34px] text-[14px] leading-[28px] font-light text-white tracking-[_0.4px]">
              {data.label}
            </div>
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={1}>
            <Newsletter />
          </GridBox.GridItem>
        </GridBox>
      </div>
    </div>
  );
};
