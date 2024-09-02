import { Breadcrumb, Heading, Paragraph } from '@/components/core'
import { GridBox } from '@/components/core/GridBox'
import Image from 'next/image'
import React from 'react'
import { FaAward } from "react-icons/fa";

const Page = () => {
    return (
        <div>
            <Breadcrumb
                data={[
                    {
                        label: "Home",
                        link: "/",
                        isActive: false,
                    },
                    {
                        label: "Our Approach",
                        link: "/our-approach",
                        isActive: true,
                    },
                ]}
            >
                Our Approach
            </Breadcrumb>
            <GridBox columns={2} gap={10} className='container items-center py-12 md:space-y-0 space-y-8'>
                <GridBox.GridItem columnMerge={1} className='md:space-y-10 space-y-5'>
                    <span className='text-[#3750E0] bg-[#E9ECFB] text-[25px] w-[50px] h-[50px] flex justify-center items-center rounded-[50%]'><FaAward /></span>
                    <Heading>Our Approach</Heading>
                    <Paragraph>{`With the help of AI and gamification, we offer a unique learning journey personalized to each learner's desire and need. Our platform provides high-quality education in multiple Indian languages, considering regional cultures. With a unique competency-driven model tailored to career experience and confidence, we are new learning technology innovators.`}</Paragraph>
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <Image src="/revision/our_approach.jpg" alt='Our Approach' title='Our Approach' width={513} height={484} />
                </GridBox.GridItem>
            </GridBox>
        </div>
    )
}

export default Page
