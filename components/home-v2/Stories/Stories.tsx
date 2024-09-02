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
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  EmblaOptionsType,
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
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <div className="container bg-[#fae5d1] md:rounded-xl md:my-[80px]">
      <div className="pt-10 md:px-10">
        <div className="flex items-center flex-col md:flex-row">
          <div className="md:w-[50%] w-full pb-10">
            <Heading className="mb-5">Success Stories</Heading>
            <Paragraph>
              {`Skilline revolutionizes Bharat's education with affordable, AI-driven,
          job-guaranteed courses in technology and high-demand sectors,
          empowering learners and fostering national skill development.`}
            </Paragraph>
          </div>
          <div className="md:w-[50%] w-full relative">
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
        </div>
      </div>
    </div>
  );
};
