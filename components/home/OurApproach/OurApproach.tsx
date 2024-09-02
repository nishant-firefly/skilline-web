import { ImageBox, ImageBoxStyle } from "@/components/core";
import React from "react";

export const OurApproach = () => {

  return (
    <div className="md:pb-[10px] md:mt-[30px]">

      <ImageBoxStyle
        data={{
          image: {
            url: "/image/images/our_approach.jpg",
            width: 1024,
            height: 1024,
            size: "h-[400px] object-cover"
          },
          title: "Our Impact",
          description: `Changing Lives: Skilline prepares people from diverse backgrounds for the job market. Our graduates work with top companies in Singapore and the US, including NYSE-listed firms. Indian startups and million-dollar clients also hire our professionals, showcasing the real-world impact of our education programs.`,
          button: {
            label: "Get The Full Story",
            url: "/about",
            target: "_self"
          }
        }} imageAlign="left"
      />
    </div>
  );
};
