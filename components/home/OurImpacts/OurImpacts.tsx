import { Heading, Paragraph, StatesItem } from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from "react-icons/go";

export const OurImpacts = () => {

    const data = [
        {
            icon: "/image/icon/1.png",
            count: "200+",
            label: "Individuals Upskilled",
        },
        {
            icon: "/image/icon/2.png",
            count: "75%",
            label: "Career Advancement",
        },
        {
            icon: "/image/icon/3.png",
            count: "30+",
            label: "Rural Talent Internships",
        },
        {
            icon: "/image/icon/4.png",
            count: "20+",
            label: "Corporate Partnerships",
        }
    ]

    return (
        <>
            <div className='container'>
                {/* <GridBox columns={2} gap={10} className='md:space-y-0 space-y-5'>
                <GridBox.GridItem columnMerge={1}>
                <Heading className='md:text-left text-center md:hidden block mb-3 text-[35px]'>Our Impact</Heading>
                    <GridBox columns={2} mobile={2} gap={8} className='md:space-y-0 space-y-5'>
                        {data.map((item, index) => (
                            <GridBox.GridItem columnMerge={1} key={index}>
                                <StatesItem
                                    icon={item.icon}
                                    label={item.label}
                                    count={item.count}
                                />
                            </GridBox.GridItem>
                        ))}
                    </GridBox>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1} className='space-y-3'>
                    <Heading className='md:text-left text-center md:block hidden'>Our Impact</Heading>
                    <Paragraph>Changing Lives: Skilline prepares people from diverse backgrounds for the job market. Our graduates work with top companies in Singapore and the US, including NYSE-listed firms. Indian startups and million-dollar clients also hire our professionals, showcasing the real-world impact of our education programs.</Paragraph>
                    <Button asChild={true}>
                        <Link href="/about">
                            Get The Full Story
                        </Link>
                    </Button>
                </GridBox.GridItem>
            </GridBox> */}
                <GridBox columns={2} gap={10} className='items-center md:space-y-0 space-y-3'>
                    <GridBox.GridItem columnMerge={1}>
                        <Image src="/image/images/ai based learning platform.jpg" alt='Our Impact' title='Our Impact' width={883} height={910} className='rounded-xl md:h-[500px]  object-cover' />
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1} className='md:space-y-6 space-y-3'>
                        <Heading className='md:text-left'>Our Impact</Heading>
                        <Paragraph className='text-[21px]'>{`Changing Lives: Skilline prepares people from diverse backgrounds for the job market. Our graduates work with top companies in Singapore and the US, including NYSE-listed firms. Indian startups and million-dollar clients also hire our professionals, showcasing the real-world impact of our education programs. `} <Link href="/about" className='text-[#329BDD] text-[18px] relative'>Get The Full Story <GoArrowRight className='absolute right-[-27px] top-[3px]' /></Link></Paragraph>
                        <div className='md:space-x-8 md:space-y-0 space-y-5 flex justify-between'>
                            <Link href="/our-mission" className='inline-flex items-center justify-center whitespace-nowrap rounded-md font-[500] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-black shadow hover:bg-gray-200 md:h-[52px] h-[42px] px-[20px] md:px-[25px] py-0 text-[18px] md:text-[15px]'>Aligned with Govt Goals</Link>
                        </div>
                    </GridBox.GridItem>
                </GridBox>
            </div>
            <div className='bg-[#F4F9FF] py-5 mt-8'>
                <div className='container'>
                    <GridBox columns={4} gap={10} className='md:space-y-0 space-y-5'>
                        {data.map((item, index) => (
                            <GridBox.GridItem columnMerge={1} key={index}>
                                <StatesItem
                                    icon={item.icon}
                                    label={item.label}
                                    count={item.count}
                                />
                            </GridBox.GridItem>
                        ))}
                    </GridBox>
                </div>
            </div>
        </>
    )
}
