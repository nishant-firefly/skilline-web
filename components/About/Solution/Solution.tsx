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
import { solution } from "@/components/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { SolutionItem, SolutionType } from "./SolutionItem";

export const Solution = () => {
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
    const data: SolutionType[] = solution as SolutionType[];

    return (
        <div className="bg-[#F3F4F6] md:rounded-xl mb-10">
            <div className="container py-10 ">
                <div className="flex items-center flex-col md:flex-row md:gap-10 gap-3">
                    <div className="md:w-[50%] w-full pb-10">
                        <Heading className="mb-5 md:text-[33px]">{`Tackling India's Skill Crisis: Our Solution`}</Heading>
                        <Paragraph>
                            {`India's youthful population, with over 65% under the age of 35, has the potential to drive the nation’s economic growth and position it as a global skills leader. However, significant skill gaps persist in key sectors like manufacturing and services, exacerbated by rapid technological advancements and an outdated education system. This disconnect hampers productivity and employability, leaving many first-time job seekers unprepared for industry demands. Skilline addresses this issue by offering industry-relevant content, equal learning opportunities, and personalized job-guaranteed courses to bridge the skills gap and enhance workforce readiness.`}
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
                                    const { course, image, title, cousedescription, link} = item;
                                    return (
                                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                                            <div className="p-1 mb-4">
                                                <SolutionItem
                                                    image={image}
                                                    link={link}
                                                    course={course}
                                                    title={title}
                                                    cousedescription={cousedescription}
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
                        <div className="pt-1 h-[40%] w-full bg-gradient-to-t  from-[#F3F4F6]  to-transparent bottom-0 left-0 absolute hidden md:block"></div>
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
                            <CarouselContent className="-mt-1 h-[400px]">
                                {data.map((item, index) => {
                                    const { course, image, title, cousedescription, link} = item;
                                    return (
                                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                                            <div className="p-1 mb-4">
                                                <SolutionItem
                                                    image={image}
                                                    link={link}
                                                    course={course}
                                                    title={title}
                                                    cousedescription={cousedescription}
                                                />
                                            </div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                        </Carousel>
                        <div className="relative top-[-250px] flex items-center justify-between w-full">
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
