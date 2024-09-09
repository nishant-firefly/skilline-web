"use client";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
export type SliderItemType = {
  preTitle: string;
  title: string;
  description: string;
  button?: {
    label: string;
    links: string;
    target: "_blank" | "_self";
  };
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  EmblaOptionsType,
} from "@/components/ui/carousel";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type SliderType = {
  data: SliderItemType[];
};

export const Slider = ({ data }: SliderType) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [plugin, setPlugin] = useState<any>([]);

  useEffect(() => {
    setPlugin([
      ...plugin,
      Autoplay({
        delay: 1000,
        stopOnInteraction: false
      }),
    ]);
  }, []);

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
  const OPTIONS: EmblaOptionsType = { loop: true };

  const redirect = (otp: {
    label: string;
    href: string;
    target: "_blank" | "_self";
  }) => {};

  return (
    <div className="w-full inline-block">
      <Carousel setApi={setApi} plugins={plugin} opts={OPTIONS}>
        <CarouselContent>
          {data.map((item: SliderItemType, index: number) => {
            const { preTitle, title, description, button, image } = item;
            const headingArray = title.split("\n");
            const descriptionArray = description.split("\n");
            return (
              <CarouselItem key={index}>
                <div className="md:h-[580px] md:pb-[80px] h-[580px] bg-gradient-to-b  from-gray-50 via-white to-gray-100 flex items-center pt-[60px] pb-[70px] md:py-0">
                  <div className="container">
                    <div className="flex justify-between md:flex-row flex-col items-center">
                      <div
                        className={cn(
                          "md:w-[50%]  md:px-0 md:text-left text-center flex flex-col gap-5 md:items-start items-center"
                        )}
                      >
                        {/* <h3 className="interFont uppercase text-[13px] tracking-[5px] leading-[26px] text-gray-400">
                          {preTitle}
                        </h3> */}
                        <h2
                          className={cn(
                            "md:text-[60px] leading-[35px] text-[22px] font-[600]  md:leading-[85px] text-black text-balance",
                            "flex flex-col"
                          )}
                        >
                          {headingArray.map((headingItem: string, index) => {
                            return <span key={index}>{headingItem}</span>;
                          })}
                        </h2>
                        <div className="text-[18px] leading-[35px] md:text-[27px] md:leading-[39px] interFont text-black">
                          {descriptionArray.map(
                            (headingItem: string, index) => {
                              return <span key={index}>{headingItem}</span>;
                            }
                          )}
                        </div>
                        {button ? (
                          <Button
                            onClick={() =>
                              redirect({
                                label: button.label,
                                href: button.links,
                                target: button.target,
                              })
                            }
                            type="button"
                          >
                            {button.label}
                          </Button>
                        ) : null}
                      </div>
                      <div className="flex justify-center relative">
                        <Image
                          src="/images/edumall-shape-grid-dots.png"
                          width={400}
                          height={400}
                          alt=""
                          className="absolute left-[-30%] bottom-[-20%]"
                        />
                        <Image
                          src={image.src}
                          width={image.width}
                          height={image.height}
                          alt={image.alt}
                          title={image.alt}
                          className="relative md:w-[570px] w-[100%] md:h-[400px] md:object-cover rounded-[15px] md:mt-0 mt-[20px] z-[1]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute py-3 md:py-0 w-full mt-[-50px] ">
          <div className="container ">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 font-[500] text-slate-500 text-[15px]">
                <span className="text-slate-900">{`${
                  current < 9 ? "0" : ""
                }${current}`}</span>
                <span>|</span>
                <span>{`${count < 9 ? "0" : ""}${count}`}</span>
              </div>
              <div className="gap-2 hidden md:flex">
                {data.map((_, index) => {
                  return (
                    <div
                      key={index}
                      className={cn(
                        "h-1 w-[50px] ",
                        current === index + 1 ? "bg-gray-900" : "bg-gray-200"
                      )}
                    ></div>
                  );
                })}
              </div>
              <div className="flex  gap-4 justify-end">
                <CarouselPrevious className="relative m-0 " />
                <CarouselNext className="relative m-0" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
