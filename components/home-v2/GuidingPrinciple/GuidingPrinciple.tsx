import Image from "next/image";
import React from "react";

export const GuidingPrinciple = () => {
  const data = {
    title: "Our Guiding Principle",
    description:
      "“Skilling, reskilling, and upskilling, focusing on the multidimensional approach to make our youth more competitive, is the biggest need of the hour. These endeavours are aimed at making the youngsters flexible and adaptable in the current fast-changing job market.”",
    image: "/images/Narendra-modis.png",
  };

  return (
    <div className="bg-[#121B32] md:mt-0 mt-10 md:mb-[100px] relative xl:pt-0 lg:pt-0 md:pt-0 pt-[50px]">
      <div className="container ">
        <div className="flex flex-wrap items-center">
          <div className="space-y-9 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full text-center">
            <h2 className="text-[30px] leading-[29px] md:text-[50px] md:leading-[40px] text-white font-[500]">
              {data.title}
            </h2>
            <div className="md:text-[22px] text-[15px] leading-[28px] md:leading-[34px] font-light text-white tracking-[_0.4px]">
              {data.description}
            </div>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
            <Image
              className="float-left relative z-[1] w-full pt-10"
              src={data.image}
              alt={data.title}
              width={1200}
              height={894}
            />
            <Image
              className="xl:block lg:block md:block hidden absolute w-[30%] right-0"
              src="/images/dotted-wave.png"
              alt={data.title}
              width={1200}
              height={894}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
