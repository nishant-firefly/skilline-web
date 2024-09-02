import React from "react";
import { ImageBox, ImageBoxStyle } from "@/components/core";
export const LearningPlatform = () => {
  // const data = {
  //   image: {
  //       url: "/image/images/ai based learning platform.jpg",
  //       width: 1024,
  //       height: 1024,
  //       size: "md:h-[400px] object-cover"
  //   },
  //   title: "SKILLINE- The AI-Based Learning Platform",
  //   description:
  //     "Skilline's AI-based self-learning platform offers personalized education that meets market demands, ensuring accessibility and affordability for all",
  //   button: {
  //     label: "Reveal More",
  //     links: "/policies",
  //     target: "_self"
  //   }
  //   };
  return (
    <div className="md:pb-[10px] md:mt-[30px]">

    <ImageBoxStyle
      data={{
        image: {
          url: "/image/images/ai based learning platform.jpg",
          width: 1024,
          height: 1024,
          size: "md:h-[400px] object-cover"
        },
        title: "SKILLINE- The AI-Based Learning Platform",
    description:
      "Skilline's AI-based self-learning platform offers personalized education that meets market demands, ensuring accessibility and affordability for all",
    button: {
      label: "Reveal More",
      url: "/policies",
      target: "_self"
    }
      }} imageAlign="left"
    />
  </div>
  );
};
