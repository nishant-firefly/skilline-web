import { CardBox, Heading } from "@/components/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type ItemType = {
    title: string;
    description: string;
    image: string;
    link: { url: string; target: "_blank" | "_self" };
};

export const Blog = () => {
    const data: ItemType[] = [
        {
            title: "How Skilline is Empowering the Next Generation",
            description:
                "The skill gap in India is a significant challenge, with many students and job seekers struggling to find relevant, high-quality training programs. In this blog, we explore how Skilline is addressing this issue by providing affordable, gamified, AI-powered training courses. We'll highlight our unique approach to personalized learning, our collaboration with industry experts, and how our platform is making a tangible impact on rural youth, job seekers, and corporate employees. Discover how Skilline is bridging the skill gap and creating equal opportunities for all.",
            image: "/blogs/Enhancing-Education-Policy-and-Governance.jpg",
            link: { url: "/", target: "_self" },
        },
        {
            title: "Skilline's Commitment to National Growth",
            description:
                "Skilline is dedicated to supporting India's growth by aligning with critical government policies and initiatives. In this blog, we delve into how our platform complements and enhances programs such as Atma Nirbhar Bharat, Skill India, and the India AI Mission. Learn about our efforts to adhere to government board curricula, our role in promoting economic independence, and how we are leveraging AI to provide scalable, high-quality education. This blog will provide a comprehensive overview of how Skilline is contributing to national development and policy execution.",
            image: "/blogs/Skilline’s-Role-in-Building-a-Self-Reliant-India.jpg",
            link: { url: "/", target: "_self" },
        }
    ];
    return (
        <div className="py-[70px] bg-[#F8F8F8]">
            <div className="container space-y-10">
                <Heading>News & Article</Heading>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="grid-item xl:col-span-2 lg:col-span-2 md:col-span-2">
                        <Link href="/" className="relative">
                            <div className="flex-shrink-0 relative overflow-hidden w-full before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                                <Image src="/blogs/AI_Generated.jpg" alt="Blog" className="xl:h-[352px] lg:h-[352px] md:h-[352px]" width={1400} height={900} />
                            </div>
                            <div className="absolute bottom-0 inset-x-0 z-[1]">
                                <div className="flex flex-col h-full p-4 sm:p-6">
                                    <p className="text-base font-extralight text-white">Latest News</p>
                                    <h3 className="xl:text-[35px] lg:text-[35px] md:text-[35px] text-[25px] font-normal xl:leading-[48px] lg:leading-[48px] md:leading-[48px] leading-[32px] text-white">
                                    The Future of Education: AI and Gamification at Skilline
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="grid-item xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-1 xl:flex lg:flex md:flex block gap-5 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
                        {data.map((item: ItemType, index: number) => {
                            const { link, description, image, title } = item;
                            return (
                                <CardBox
                                    key={index}
                                    title={title}
                                    description={description}
                                    image={image}
                                    link={link}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="text-center flex">
                    <Link href="/blogs" className="text-primary flex items-center gap-3 text-center m-auto"><span>View All Posts</span> <span><FaArrowRightLong /></span></Link>
                </div>
            </div>
        </div>
    );
};
