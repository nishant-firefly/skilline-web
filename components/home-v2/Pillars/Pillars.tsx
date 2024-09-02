import {
  Heading,
  Paragraph,
  PillarsItem,
  UnorderedList,
} from "@/components/core";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdRibbon } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";

export const Pillars = () => {
  const data = [
    {
      title: "Economy",
      description:
        "Skilline aims to foster national self-reliance and economic growth through upskilling, improving employment and self-employment opportunities, and establishing itself as a global brand.",
      icon: "",
    },
    {
      title: "Infrastructure",
      description:
        "Skilline leverages the IndiaAI Mission, utilizing AI and Gen AI servers for knowledge base ingestion and tailored education with scalability. Our platform aims to boost inclusion, innovation, and social impact, reinforcing India's global presence. Our vision is to establish a self-sustaining Indigenous University, transforming learning.",
      icon: "",
    },
    {
      title: "System",
      description:
        "Skilline will serve as an ecosystem and energy source for learning in the nation’s languages, utilizing AI and Gen AI server foundations for knowledge base ingestion. System intelligence caters to unique educational needs, ensuring future generations benefit from today's innovations.",
      icon: "",
    },
    {
      title: "Vibrant Demography",
      description:
        "Skilline, a national education platform facilitating learning in multiple languages, caters to diverse groups including youth, office workers, rural residents, corporates, manufacturing hubs, government, and policymakers. We are already partnering with award-winning Australian businesses and certified Australian entrepreneurs for global expansion. Also we worked with house wifes, rural people and less skilled workforce, college passouts to make them skilled and earn and being confident, from Telegu, Bengal and Hindi (For all have testimonies…) I have added several links from which can get a lot of relevant information with references",
      icon: "",
    },
    {
      title: "Demand",
      description:
        "Skilline is a market-leading platform for on-demand skills and training courses, supporting our nation in acquiring the necessary skills, qualifications, and experience for employment or self-employment. We aspire to serve as the nation’s premier guide for discovering, assessing, and enrolling in interactive, personalized courses on demand.",
      icon: "",
    },
  ];

  return (
    <div className="container md:mb-0 mb-10">
      <div className="flex items-center flex-col-reverse md:flex-row">
        <div className="md:w-1/2 w-full space-y-4">
          <div className="bg-[#e9ecfb] w-[60px] h-[60px] hidden md:inline-flex items-center justify-center rounded-full ">
            <IoMdRibbon className="text-[#3750e0]" size={30} />
          </div>
          <Heading>
          Fulfill One of 5 Pillars Atma Nirbhar
          </Heading>
          <Paragraph>
          {`Skilline's raison d'etre for loading on skills. Skilline excels in quality
and productivity at Fram Co-operative and manufacturing in India.
Through its affordable, AI-driven courses in technology and high-
demand sectors that come with assured job opportunities from
India's leading recruitment and technology companies, Skilline aims
to empower learners on a national scale for skill development.`}
          </Paragraph>
          <UnorderedList className="space-y-0 text-slate-600 mb-3 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7">
            {data.map((item: any, index) => {
              return (
                <UnorderedList.Item key={index}>
                  {item.title}
                </UnorderedList.Item>
              );
            })}
          </UnorderedList>
          {/* <div className="pt-5">
            <Button asChild={true}>
              <Link href={"/fulfilling-atma-nirbhar-5-pillars"}>Read More</Link>
            </Button>
          </div> */}
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex justify-center w-full">
            <div className="relative w-[600px] mx-auto inline-flex items-center justify-center">
              <Image
                width={900}
                height={900}
                alt=""
                src="/images/shape-ellipse.png"
                className="absolute left-0 top-0 right-0 bottom-0 m-auto w-[70%] h-[70%]"
              />
              <Image
                src="/images/amtanirbhar.png"
                className="relative w-full h-full pulse-2"
                width={900}
                height={900}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
