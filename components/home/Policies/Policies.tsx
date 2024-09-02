import { ImageBox } from "@/components/core";
import React from "react";

export const Policies = () => {
  const data = {
    image: {
      url: "/image/images/Government Prefective Support.jpeg",
      width: 1024,
      height: 1024,
      size: ""
  },
    title: "Government Prefective Support",
    description:
      "Demonstrates ability to fulfill government policies Skilline is proud to support the Government of India's initiatives like Atma Nirbhar Bharat, Skill India as well as that aligned with #IndiaAIMission. The courses we offer and all the different aspects of it use to be done by engaging with Government policies like Rte Act, Sarva Shiksha abhiyan, Beti bachao beti padhao in humble help from our end for promoting overall educational mission in entire India.",
  };

  return (
    <div className="md:pt-[50px] pt-[10px] pb-[60px]">
      <ImageBox data={data} type="style-1" />
    </div>
  );
};
