import { Heading, HeadingBtn, Paragraph } from '@/components/core'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Regionallanguages = () => {
    const data = {
        title: "Skilline is an innovative, interactive platform transforming Bharat's education with a vision to enhance nationwide education quality, making AI-driven, affordable training accessible to all."
    }

    return (
        <div className='bg-[#F4F9FF]'>
            <div className='container'>
                {/* <div className="container md:rounded-xl">
                <div className='shadow-[rgba(0,0,0,0.24)_0px_3px_8px] p-5 md:rotate-0 rotate-2 text-center space-y-3 rounded-xl'>
                    <Image src="/image/images/pin.png" alt='pin' width={330} height={348} className='w-[30px] m-auto' />
                    <Heading className='md:text-[40px] text-[35px]'>Our Mission</Heading>
                    <Paragraph className='md:text-[25px] text-[22px]'>{`Transforming Bharat's education to build a skilled nation through innovative, interactive. and affordable AI-driven training for all.`}</Paragraph>
                    <Dialog >
                        <DialogTrigger className='text-[#1D70A2] font-semibold hover:text-black text-xl'>See More...</DialogTrigger>
                        <DialogContent className="rounded-[25px] md:rounded-[30px] md:w-full w-[95%] border-[5px] border-solid border-[#000000]">
                            <DialogHeader>
                                <DialogTitle className='md:text-[30px] pb-[13px] border-b-2 border-b-[black] border-solid -mt-2.5 text-[25px]'>Our Mission</DialogTitle>
                                <DialogDescription className='space-y-3'>
                                    <Paragraph className='md:text-[23px] md:leading-[31px] leading-[30px] '>{`Transforming Bharat's education to build a skilled nation through innovative, interactive. and affordable AI-driven training for all.`}</Paragraph>
                                    <Paragraph className='text-pretty md:text-[20px] text-lg md:leading-[25px] leading-[23px]'>{`Skilline is dedicated to revolutionizing Bharat's education by offering affordable, AI-driven, personalized training that bridges skill gaps and empowers job seekers, corporate employees, and rural youth. We enhance education accessibility through collaboration with corporates and educational institutions, focusing on niche resources and skill development. Our goal is to make learning engaging and effective, especially in tech and manufacturing, to foster growth, create fair opportunities, and drive nationwide prosperity.`}</Paragraph>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className='m-auto md:w-[10%] w-[40%] mt-8'>
                    <Link href="/our-mission" className='inline-flex items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-black shadow hover:bg-gray-200 md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[18px] md:text-[15px]'>Read More</Link>
                </div>
            </div> */}
                <div className='text-center py-5 space-y-1'>
                    <Heading>Our Mission</Heading>
                    <Paragraph className='font-semibold md:text-[22.5px] text-[18px]'>{`Skilline's mission is to transform Bharat's education with affordable, AI-driven, gamified training. We bridge skill gaps in tech and manufacturing, empower job seekers, corporate employees, and rural youth, and enhance education through corporate and institutional collaboration, ensuring equal opportunities and national prosperity.`}</Paragraph>
                </div>
            </div>
        </div>
    )
}
