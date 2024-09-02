import { Breadcrumb, ImageBoxStyle } from '@/components/core'
import { Pillars } from '@/components/OurMission'
import React from 'react'

const page = () => {
    return (
        <>
            <div><Breadcrumb
                data={[
                    {
                        label: "Home",
                        link: "/",
                        isActive: false,
                    },
                    {
                        label: "Our Mission",
                        link: "/our-mission",
                        isActive: true,
                    },
                ]}
            >
                Skilline: Empowering India’s Youth with AI Education and Government-Aligned Skills
            </Breadcrumb></div>
            <div className="md:pb-[10px] md:mt-[30px]">
                <ImageBoxStyle
                    data={{
                        image: {
                            url: "/image/images/Government Prefective Support.jpeg",
                            width: 1024,
                            height: 1024,
                            size: "md:h-[600px] object-cover"
                        },
                        title: "Supporting India's Growth: Aligning with Key Government Initiatives",
                        description: `Skilline is committed to supporting key government initiatives such as Atma Nirbhar Bharat, Skill India, and the 100 Days AI Mission by NITI Aayog. By aligning our programs with educational policies and participating in campaigns like RTE, Sarva Shiksha Abhiyan, and Beti Bachao Beti Padhao, we contribute to India's educational development and empower citizens. Our curriculum meets government standards, ensuring that we help build a skilled workforce for India's growth and a brighter future for all.`,
                    }} imageAlign="left"
                />
            </div>
            <div className="md:pb-[10px] md:mt-[30px]">
                <ImageBoxStyle
                    data={{
                        image: {
                            url: "/images/5.jpg",
                            width: 1024,
                            height: 1024,
                            size: "md:h-[500px] object-cover"
                        },
                        title: "Our Guiding Principle",
                        description: `Skilline is committed to delivering quality education and productivity, particularly within Fram Co-operative and the manufacturing sectors in India. Through its affordable, AI-driven courses in technology and other high-demand areas, Skilline ensures assured job opportunities with India's leading recruitment and technology companies. Our goal is to empower learners nationwide, contributing significantly to India's skill development initiatives.`,
                    }} imageAlign="right"
                />
            </div>
            <div className='py-8'>
                <Pillars />
            </div>
        </>
    )
}

export default page