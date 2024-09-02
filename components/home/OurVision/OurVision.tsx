import { ImageBox } from "@/components/core";
import React from "react";

export const OurVision = () => {
  return (
    <div className="md:pt-[30px] pt-[10px] md:pb-[10px]">
      <ImageBox
        data={{
          image: "/image/images/Our Vision.jpeg",
          title: "Our Vision",
          description:
            "To skill that one individual of the nation with an equitable opportunity - in sync to their economic, geographical, or linguistic background so as his life becomes not just a mere living life like others but adds up courage for India's needlessly growth. We Need it!! We all want to dream India in which every person gets employed by their own hard work and self-sufficient, confident industrious workforce.",
          style: "style-1",
        }}
        type="style-2"
        imageAlign="right"
      />
    </div>
  );
};
