import React from "react";
import { ImageBox, Paragraph } from "@/components/core";
export const About = () => {
  const data = {
    image: {
      url: "/image/images/about-us.jpg",
      width: 1024,
      height: 1024,
      size: "md:h-[500px] object-cover"
  },
    title: "Greetings from Skilline!",
    description:
      "At Skilline, we make education engaging, accessible, and affordable for everyone, from bustling cities to rural areas. Our AI-driven programs offer job-guaranteed training in technology and high-demand sectors, fostering sustainable employment and self-employment across Bharat. We provide innovative, cost-effective learning solutions tailored to support rural youth, the unemployed, and those seeking specialized skills. Skilline is a transformative platform bridging traditional education and modern job market needs. Our focus is on creating AI-powered training programs that address the diverse needs of India’s population, including rural youth, job seekers, and professionals looking to enhance their skills.",
  };
  return (
    <div className="container py-3 ">
      {/* <ImageBox data={data} type="style-1" /> */}
      <Paragraph>{`At Skilline, we make education engaging, accessible, and affordable for everyone, from bustling cities to rural areas. Our AI-driven programs offer job-guaranteed training in technology and high-demand sectors, fostering sustainable employment and self-employment across Bharat. We provide innovative, cost-effective learning solutions tailored to support rural youth, the unemployed, and those seeking specialized skills. Skilline is a transformative platform bridging traditional education and modern job market needs. Our focus is on creating AI-powered training programs that address the diverse needs of India’s population, including rural youth, job seekers, and professionals looking to enhance their skills.`}</Paragraph>
    </div>
  );
};
