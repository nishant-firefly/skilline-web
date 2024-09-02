import { Breadcrumb } from "@/components/core";
import { ImageBox } from "@/components/core";
import React from "react";

const FulfillingAtmaNirbhar5Pillars = () => {
  const data = [
    {
      title: "Economy",
      description:
        "Skilline is a platform that seeks to train the workforce here in the country in the most innovative ways, with the main goal being maximum productivity to make the country self-sufficient, increase the economy by providing more employment and self-employment opportunities, and promote a so-called “Skilline, the Youth of India'' brand to the world.",
      image: "/images/Economy-2.png",
      color: "orange",
    },
    {
      title: "Infrastructure",
      description:
        "Skilline will take advantage of the India AI Mission with technology that consists of AI and Gen AI servers for building up data banks of knowledge and an individualized pedagogy solution that can scale. Inclusivity, innovation, and social impact should expand, thereby reinforcing the country's global influence. One of our long-term aims is to establish a self-sustaining Indigenous University so that what is learned becomes the real commodity in this country.",
      image: "/images/Infrastructure-2.png",
      color: "green",
    },
    {
      title: "System",
      description:
        "The fact that Skilline is conceptualized as an energy repository and educational ecosystem where students can learn in their languages, not only AI but also Gen AI knowledge servers, will allow knowledge base ingestion to be the first of all the dispersed machines. The system-obtained knowledge will occur in sync with the demands of each student, making them well-acquainted with ideas about today's and most future innovative technologies.",
      image: "/images/System.png",
      color: "blue",
    },
    {
      title: "Vibrant Demography Skills",
      description:
        "The national educational platform that offers bilingual education services caters to different target audiences, including youth, office workers, rural residents, corporations, manufacturing centers, the government, and policymakers. The company is already in partnership with award-winning businesses in Australia and with Australian entrepreneurs who are certified for global expansion.",
      image: "/images/Vibrant-Demography.png",
      color: "yellow",
    },
    {
      title: "Demand",
      description:
        "Skilline is the leading supplier of on-demand skills and training courses, which is part of our country's effort to train employees on the job or in vocational schools to a level that guarantees employment or entrepreneurship. Our ultimate goal is to become one of the top course providers for a learning experience where students get to explore, validate, and enroll in personalized courses on demand.",
      image: "/images/Demand.png",
      color: "gray",
    },
  ];
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
            label: "Fulfilling Atma Nirbhar 5 PillarsEconomy",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Fulfilling Atma Nirbhar 5 PillarsEconomy
      </Breadcrumb>
      <div className="container py-[50px]">
        <div className="space-y-10">
          {data.map((item: any, index) => {
            return (
              <div key={index}>
                <ImageBox
                  data={{
                    image: item.image,
                    title: item.title,
                    description: item.description,
                  }}
                  type="style-4"
                  imageAlign={index % 2 ? "right" : "left"}
                  color={item.color}
                  seqNumber={"0" + (index + 1)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FulfillingAtmaNirbhar5Pillars;
