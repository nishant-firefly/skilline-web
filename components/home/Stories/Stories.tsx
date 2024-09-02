"use client";
import {
  Paragraph,
  StoryItem,
  Heading,
  type StoryItemtype,
} from "@/components/core";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import React, { useState } from "react";
import { storiesData } from "@/components/content";

export const Stories = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const data: StoryItemtype[] = storiesData as StoryItemtype[];

  return (
    <div className="container bg-[#fae5d1] md:rounded-xl mb-10">
      <div className="pt-10 pb-10 md:px-10">
        <div className="flex items-center flex-col md:flex-row">
          <div className="md:w-[50%] w-full pb-10 space-y-3">
            <Heading className="mb-5">Our Success Story</Heading>
            <Paragraph>
              {`Skilline was founded to address critical skill shortages in India, particularly in rural areas. Starting with offline courses, we have transformed countless careers. Now, we are harnessing the power of AI to expand our reach and impact`}
            </Paragraph>
          </div>
          <div className="md:w-[50%] w-full relative md:block hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className="w-full "
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent className="-mt-1 h-[400px]">
                {data.map((item, index) => {
                  const { name, city, image, story, link, id, linkdin, content } = item;
                  return (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <div className="p-1 mb-4">
                        <StoryItem
                          city={city}
                          image={image}
                          link={link}
                          name={name}
                          story={story}
                          id={id}
                          linkdin={linkdin}
                          content={content}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="absolute hidden md:flex flex-col right-[-30px]  items-center justify-center h-full top-0 ml-[-120px] gap-2 mt-[-20px]">
                {/* <CarouselNext className="relative -rotate-90" /> */}
                <div className="flex flex-col text-slate-500 text-xs py-2 items-center justify-center w-full">
                  <span>{current}</span> <span>/</span> <span>{count}</span>
                </div>
                {/* <CarouselPrevious className="relative -rotate-90" /> */}
              </div>
            </Carousel>
            <div className="pt-1 h-[40%] w-full bg-gradient-to-t  from-[#fae5d1]  to-transparent bottom-0 left-0 absolute hidden md:block"></div>
          </div>
          <div className="md:w-[50%] w-full relative md:hidden">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="horizontal"
              className="w-full "
             
            >
              <CarouselContent className="-mt-1 h-[420px]">
                {data.map((item, index) => {
                  const { name, city, image, story, link, id, linkdin, content } = item;
                  return (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <div className="p-1 mb-4">
                        <StoryItem
                          city={city}
                          image={image}
                          link={link}
                          name={name}
                          story={story}
                          id={id}
                          linkdin={linkdin}
                          content={content}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
            </Carousel>
            <div className="relative top-[-240px] flex items-center justify-between w-full">
                                <button
                                    onClick={() => api?.scrollPrev()}
                                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => api?.scrollNext()}
                                    className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
