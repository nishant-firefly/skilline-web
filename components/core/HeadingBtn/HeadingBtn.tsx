import React from 'react'
import { Heading } from '../Heading/Heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type HeadingItem = {
    label: string;
    url: string;
    target: "_blank" | "_self";
}

type HeadingBtn = {
    title: string;
    button?: HeadingItem;
}

export const HeadingBtn = ({ title, button }: HeadingBtn) => {
    return (
        <div className='bg-[#F4F9FF] my-5 '>
        <div className='text-center md:w-[93%] w-full m-auto space-y-8 py-10 container'>
            <Heading className='text-pretty md:text-[25px] text-[20px] md:leading-[40px] font-normal'>{title}</Heading>
            {button ? (
            <Button asChild={true}>
                <Link href={button?.url || ""} target={button?.target}>{button?.label}</Link>
            </Button>
            ): (null)}
        </div>
        </div>
    )
}
