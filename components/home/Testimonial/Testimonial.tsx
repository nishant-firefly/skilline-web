import { TestimonialSlider } from '@/components/core'
import React from 'react'

export const Testimonial = () => {

    const data = {
        heading: "Testimonials",
        description: `Discover how Skilline's AI-driven programs empower housewives, rural youth, job seekers, and graduates, transforming lives and supporting a self-reliant India.`,
        quote: [
            {
                rating: 5,
                title: "Empowering India's Future",
                description: "Skilline has revolutionized education in Bharat, making high-quality, AI-driven learning both accessible and affordable. It's a game-changer for educators like me who strive to reach students in every corner of the country.",
                name: "Rakesh Kumar, Educator"
            },
            {
                rating: 5,
                title: "Transforming Rural Youth",
                description: "Thanks to Skilline, I was able to upskill myself right from my village. The AI-powered courses are easy to follow, and the support has been fantastic. Now, I feel confident in my future.",
                name: "Suman Devi, Rural Youth"
            },
            {
                rating: 5,
                title: "A Lifeline for Job Seekers",
                description: "As a recent graduate, Skilline provided me with the tools I needed to secure my first job. The AI-driven learning paths were tailored to my needs, helping me bridge the gap between education and employment.",
                name: "Amit Sharma, Job Seeker"
            }
        ]
    }    

    if (!data || !data.heading || !data.description || !data.quote) {
        return (
            <div className='bg-[#F3F4F6]'>
                <p>Component data not found.</p>
            </div>
        );
    }

    return (
        <div className=''>
            <TestimonialSlider heading={data.heading} description={data.description} quote={data.quote} />
        </div>
    )
}
