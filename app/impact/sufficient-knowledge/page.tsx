import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const SufficientKnowledge = () => {
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
            label: "Sufficient Knowledge",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Sufficient Knowledge
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/essential-knowledge-01.jpg"
              width={700}
              height={700}
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-3 md:pl-[50px]">
              <Heading>Mastering Essential Knowledge</Heading>
              <Paragraph>
                {`In today's fast-paced and ever-evolving world, possessing
                essential knowledge is crucial for personal and professional
                success. Mastering the basics across various fields not only
                empowers you with the confidence to tackle complex problems but
                also enhances your ability to adapt to new challenges and
                opportunities.`}
              </Paragraph>

              <Paragraph>
                This white paper explores the importance of mastering essential
                knowledge and provides practical strategies for acquiring and
                retaining it.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex pb-10 pt-0 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-3  md:pr-[50px]">
              <Heading>The Importance of Essential Knowledge</Heading>
              <Paragraph>The emphasis is on how one obtains economic independence at a micro level as well as why economic systems such as socialism, communism, and sovereign states are ineffective for a macro economy.</Paragraph>
              <UnorderedList>
                {[
                  "Foundation for Advanced Learning",
                  "Enhanced Problem-Solving Abilities",
                  "Improved Decision-Making",
                  "Adaptability and Flexibility",
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
              src="/impact/essential-knowledge-02.jpg"
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

export default SufficientKnowledge;
