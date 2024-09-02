"use client"
import React, { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

type LogosItem = {
    image: string;
    alt: string;
}

type PartnershipsLogosProps = {
    images: LogosItem[];
}

export const PartnershipsLogos: React.FC<PartnershipsLogosProps> = ({ images }) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            const keenSlider = new KeenSlider(sliderRef.current, {
                loop: true,
                slides: {
                    perView: 2,
                    spacing: 16,
                },
                breakpoints: {
                    '(min-width: 768px)': {
                        slides: {
                            perView: 5,
                            spacing: 24,
                        },
                    },
                },
            });

            return () => {
                keenSlider.destroy();
            };
        }
    }, []);

    return (
        <div ref={sliderRef} className="keen-slider py-4">
            {images.map((item, index) => (
                <div key={index} className="keen-slider__slide shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] rounded-[15px] h-[130px]">
                    <Image
                        src={item.image}
                        alt={item.alt}
                        width={200}
                        height={200}
                        className='m-auto h-[130px] object-contain object-center'
                    />
                </div>
            ))}
        </div>
    );
};
