import { ImageBox } from "@/components/core";
import React from "react";

export const Policies = () => {
  const data = {
    image: "/images/government-policies-2.png",
    title: "Alignment with Government Policies",
    description:
      "Skilline is proud to support the Government of India's initiatives, including Atma Nirbhar Bharat, Skill India, and the India AI Mission. \n Our courses are crafted to align with the Right to Education Act, Sarva Shiksha Abhiyan, and Beti Bachao, Beti Padhao, ensuring our contributions advance the nation's educational objectives.",
    button: {
      label: "Read More",
      links: "/policies",
      target: "_self",
    },
  };

  return (
    <div className="py-[50px]">
      <ImageBox data={data} type="style-4" />
    </div>
  );
};
