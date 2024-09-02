import React from "react";
import { ImageBoxStyle } from "@/components/core";
export const About = () => {
  const json = {
    data: {
      image: {
        url: "/image/images/About Us.jpg",
        width: 1024,
        height: 1024,
        size: ""
      },
      title: "Our Mission",
      description: `Skilline's mission is to revolutionize Bharat's education by providing affordable, AI-driven, personalized training that bridges skill gaps and empowers job seekers, corporate employees, and rural youth. We aim to enhance education accessibility through collaboration with corporates and educational institutions, focusing on niche resources and skill development. Our goal is to make learning engaging and effective, particularly in tech and manufacturing, to foster growth, create fair opportunities, and drive nationwide prosperity.`,
      button: {
        label: "Aligned with Govt Goals",
        url: "/our-mission",
        target: "_self" as "_self",
      }
    },
    imageAlign: "right" as "right",
  };
  return (
    <>
      <div className="md:pb-[10px] md:mt-[30px]">
       <ImageBoxStyle 
       data={json.data} imageAlign={json.imageAlign}
       />
      </div>
    </>
  );
};
