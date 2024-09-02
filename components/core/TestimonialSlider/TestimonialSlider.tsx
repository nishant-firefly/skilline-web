"use client"
import { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

type QuoteItem = {
    rating: number;
    title: string;
    description: string;
    name: string;
}

type TestimonialItem = {
    heading: string;
    description: string;
    quote: QuoteItem[];
}

export const TestimonialSlider = ({ heading, description, quote }: TestimonialItem) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const prevDesktopRef = useRef<HTMLButtonElement | null>(null);
    const nextDesktopRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            const keenSlider = new KeenSlider(
                sliderRef.current,
                {
                    loop: true,
                    slides: {
                        origin: 'center',
                        perView: 1,
                        spacing: 16,
                    },
                    breakpoints: {
                        '(min-width: 1024px)': {
                            slides: {
                                origin: 'auto',
                                perView: 1,
                                spacing: 32,
                            },
                        },
                    },
                },
                []
            );

            const handlePrevClick = () => keenSlider.prev();
            const handleNextClick = () => keenSlider.next();

            prevRef.current?.addEventListener('click', handlePrevClick);
            nextRef.current?.addEventListener('click', handleNextClick);
            prevDesktopRef.current?.addEventListener('click', handlePrevClick);
            nextDesktopRef.current?.addEventListener('click', handleNextClick);

            return () => {
                prevRef.current?.removeEventListener('click', handlePrevClick);
                nextRef.current?.removeEventListener('click', handleNextClick);
                prevDesktopRef.current?.removeEventListener('click', handlePrevClick);
                nextDesktopRef.current?.removeEventListener('click', handleNextClick);
            };
        }
    }, []);

    const button = "p-2 bg-white rounded-full shadow-lg hover:bg-gray-200";

    return (
        <section className="container">
            <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:items-center lg:items-center lg:gap-16">
                    <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right md:space-y-2 space-y-3">
                        <Heading>{heading}</Heading>
                        <Paragraph>{description}</Paragraph>
                        <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                aria-label="Previous slide"
                                ref={prevDesktopRef}
                                className={button}
                            >
                                
                                <IoIosArrowBack />
                            </button>

                            <button
                                aria-label="Next slide"
                                ref={nextDesktopRef}
                                className={button}
                            >
                              <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
 
                    <div className="-mx-6 lg:col-span-2 lg:mx-0">
                        <div id="keen-slider" ref={sliderRef} className="keen-slider ">
                            {quote.map((item, index) => (
                                <div key={index} className="keen-slider__slide bg-[#F3F4F6] rounded-[15px]">
                                    <blockquote
                                        className="flex h-full flex-col justify-between shadow-sm sm:p-8 lg:py-6 lg:px-6 xl:py-6 xl:px-6 md:py-6 md:px-6 p-6 rounded-[15px]"
                                    >
                                        <div className='space-y-3'>
                                            
                                            <div className="mt-4">
                                                <blockquote className='flex space-x-2 text-slate-800'><Heading className='md:text-[25px] md:text-balance text-pretty'>{item.title}</Heading></blockquote>
                                                <Paragraph className='leading-[30px] mt-3'>{item.description}</Paragraph>
                                            </div>
                                            <div className="flex gap-0.5 text-[#3750e0]">
                                                {[...Array(item.rating)].map((_, index) => (
                                                    <span key={index}><FaStar /></span>
                                                ))}
                                            </div>
                                        </div>
                                        <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                            &mdash; {item.name}
                                        </footer>
                                    </blockquote>
                                </div>
                            ))}
                        </div>

                        <div className="relative top-[-250px] flex justify-between gap-4 w-full lg:hidden">
                            <button
                                aria-label="Previous slide"
                                ref={prevRef}
                                className={button}
                            >
                                <IoIosArrowBack />
                            </button>

                            <button
                                aria-label="Next slide"
                                ref={nextRef}
                                className={button}
                            >
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
