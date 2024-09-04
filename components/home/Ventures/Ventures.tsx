"use client"
import React, { useCallback } from "react";
import { Heading, Paragraph, TeamCard } from "@/components/core";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';


export const Ventures = () => {
  const data = [
    {
      src: "/image/teams/nishant-saxena.jpg",
      name: "Nishant Saxena",
      profession: "Entrepreneur & Tech Visionary",
      role: "CEO",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/nishantasaxena/",
        },
      ],
    },
    {
      src: "/image/teams/hansi-malhotra.jpeg",
      name: "Hansi Malhotra ",
      profession: "Finance Expert & Thought Leader",
      role: "Advisor",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/hansimehrotra/",
        },
      ],
    },
    {
      src: "/image/teams/monika-kulshreshtha.jpeg",
      name: "Monika Kulshreshtha",
      profession: "Marketing Strategist & Brand Builder",
      role: "Branding Head",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/monikakulshrestha/",
        },
      ],
    },
    {
      src: "/image/teams/upal-roy.jpeg",
      name: "Upal Roy",
      profession: "Business Innovator & GenAI Expert",
      role: "Advisor",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/upalroy/",
        },
      ],
    },
    {
      src: "/image/teams/raman-rajpal.jpeg",
      name: "Raman Rajpal",
      profession: "Technology & Transformation Leader",
      role: "Advisor",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/raman-rajpal-a8bb2458/",
        },
      ],
    },
    {
      src: "/image/teams/ashutosh-taiwal.jpeg",
      name: "Ashutosh Taiwal",
      profession: "Technology Architect & Cloud Expert",
      role: "Archiect",
      social: [
        {
          icon: "linkedin",
          label: "Linkedin",
          link: "https://www.linkedin.com/in/ashutaiwal/",
        },
      ],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);



  return (
    <div className="bg-gray-100 md:py-[30px] py-[20px]  relative">
      <div className="absolute left-0 top-0 w-full h-full">
        <Image
          src="/images/edumall-shape-01.png"
          width={300}
          height={300}
          className="opacity-30 w-[300px] absolute left-0 bottom-0"
          alt=""
        />
      </div>
      <div className="container relative">
        <Heading className="mb-5 text-center">The Squad at SKILLINE</Heading>
        <Paragraph className="text-center mb-10 md:px-10">
          {`Our team of professionals and advisors, with over 200 years of combined expertise, is dedicated to shaping India’s education future. With a shared vision and diverse backgrounds, we deliver exceptional outcomes and innovation for our learners.`}
        </Paragraph>
        <div className="md:block hidden">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 mt-3">
            {data.map((item: any, index: number) => {
              const { experence, profession, role, src, name, social } = item;
              return (
                <TeamCard
                  key={index}
                  role={role}
                  name={name}
                  profession={profession}
                  src={src}
                  social={social}
                  type="style-2"
                />
              );
            })}
          </div>
        </div>
        <div className="md:hidden relative overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {data.map((item: any, index: number) => {
              const { role, src, name, profession, social } = item;
              return (
                <div className="embla__slide min-w-[100%]" key={index}>
                  <TeamCard
                    key={index}
                    role={role}
                    name={name}
                    profession={profession}
                    src={src}
                    social={social}
                    type="style-2"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between w-full relative top-[-284px]">
            <button
              onClick={scrollPrev}
              className="embla__prev p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="embla__next p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
