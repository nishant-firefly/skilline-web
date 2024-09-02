import { ImageBox, ImageBoxStyle } from "@/components/core";
import React from "react";

export const OurVision = () => {
  return (
    
    <div className="md:pb-[10px] md:mt-[30px]">
    <ImageBoxStyle
                    data={{
                        image: {
                            url: "/image/images/Our vision.jpg",
                            width: 1024,
                            height: 1024,
                            size: "h-[400px] object-cover"
                        },
                        title: "Our Vision",
                        description: `To skill that one individual of the nation with an equitable opportunity - in sync with their economic, geographical, or linguistic background so that their life becomes not just a mere existence but adds courage for India's needless growth. We need it! We all want to dream of an India in which every person gets employed through their own hard work and becomes part of a self-sufficient, confident, industrious workforce.`,
                    }} imageAlign="right"
                />
  </div>
  );
};
