import { ImageBox } from "@/components/core";
import React from "react";

export const OurApproach = () => {
  return (
    <div className="my-10">
      <ImageBox
        data={{
          image: "/images/our-approach-2.png",
          title: "Our Approach",
          description:
            "Using AI and gamification, we provide personalized, inclusive learning experiences that cater to each learner's needs and aspirations. Our platform supports high-quality education in various languages, focusing on mastery-based learning to ensure job readiness and confidence. We continuously innovate to stay at the forefront of educational technology.",
        }}
        imageAlign="left"
        type="style-4"
        color="orange"
        seqNumber="02"
      />
    </div>
  );
};
