import { Heading, PillarsItem } from "@/components/core";
import React from "react";

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
    <div>
      <div className="container">
        <Heading>Fulfill One of 5 Pillars Atma Nirbhar</Heading>
        <div className="mt-10">
          {data.map((item: any, index) => {
            const { title, description, icon } = item;
            return (
              <PillarsItem
                key={index}
                title={title}
                description={description}
                icon={icon}
                seqNumber={index + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
