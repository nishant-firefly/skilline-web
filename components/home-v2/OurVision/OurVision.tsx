import { ImageBox } from "@/components/core";
import React from "react";

export const OurVision = () => {
  return (
    <div className="pt-10">
      <ImageBox
        data={{
          image: "/images/vision-2.png",
          title: "Our Vision",
          description:
            "To create an India where every individual, regardless of their geographical, economic, or linguistic background, has the opportunity to acquire skills that not only secure their future but also contribute to the nation's growth. We envision a self-reliant India, powered by a skilled and confident workforce.",
        }}
        type="style-4"
        imageAlign="right"
        color="blue"
        seqNumber="01"
      />
    </div>
  );
};
