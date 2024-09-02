import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const EconomicIndependence = () => {
  return (
    <>
      <Breadcrumb
        data={[
          {
            label: "Home",
            link: "/",
            isActive: false,
          },
          {
            label: "Impact",
            link: "/impact",
          },
          {
            label: "Economic Independence",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Economic Independence
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/economic-independence-0.jpg"
              width={700}
              height={700}
              alt="Economic Independence"
              className="rounded-xl md:h-[500px] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-3 md:pl-[50px]">
              <Heading>Economic Independence</Heading>
              <Paragraph>
              Sustainability can be described as the capability to provide for economic aspects, which makes a person independent when it comes to support from others. This bare necessity of life empowers people and populations to make choices that would bring about the actualization of sustainable development, improved quality, and affluence.
              </Paragraph>

              <Paragraph>
              Economic independence, therefore, is based on a few aspects that are crucial for enhancing the quality of a woman’s life. These include education and demand for labor, the ability to manage financial services, demand for labor and its productivity, and legislation in the economy.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex pt-0 pb-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-3  md:pr-[50px]">
              <Heading>The Importance of Economic Independence</Heading>
              <Paragraph>The emphasis is on how one obtains economic independence at a micro level as well as why economic systems such as socialism, communism, and sovereign states are ineffective for a macro economy.</Paragraph>
              <UnorderedList>
                {[
                  "Personal freedom and security",
                  "Improved Quality of Life",
                  "Empowerment and confidence",
                  "Social and Economic Contributions",
                ].map((item: string, index: number) => {
                  return (
                    <UnorderedList.Item key={index}>{item}</UnorderedList.Item>
                  );
                })}
              </UnorderedList>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/economic-independence.jpg"
              width={700}
              height={700}
              alt="The Importance of Economic Independence"
              className="rounded-xl md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EconomicIndependence;
