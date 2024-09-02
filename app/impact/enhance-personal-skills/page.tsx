import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const EnhancePersonalSkills = () => {
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
            label: "Enhance Personal Skills",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Enhance Personal Skills
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/enhance-personal-skills-01.jpg"
              width={700}
              height={700}
              alt="Master Your Personal Skillset"
              className="rounded-xl md:h-[600px] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Mastering Your Skill Set</Heading>
              <Paragraph>
                {`In the new age of highly competitive times, personal skills are not an option but rather a necessity. It is personal self-improvement that brings career promotions, individual growth, or better social lives. By evolving your personal skills, you are given numerous life opportunities. This better satisfies human life.`}
              </Paragraph>

              <Paragraph>
              This is because the volatile job market calls for skills beyond plain basic technical expertise and demands an individual be able to roll with the change amidst the learning landscape. Personal skills, in the form of effective communication, emotional intelligence, and problem solving, among others, make you great in professional settings. It also significantly impacts your personal relationships and, in general, sets the tone for life.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex pb-10 pt-0 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Heading>How to Improve Personal Skills</Heading>
              <UnorderedList>
                {[
                  "Identify your strengths and weaknesses.",
                  "Create clear goals.",
                  "Be a lifelong learner.",
                  "Learn and practice.",
                  "Collect feedback and find someone to mentor.",
                  "Face challenges and step out of your comfort zone.",
                  "Build soft skills.",
                  "Reflect and adjust.",
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
              src="/impact/enhance-personal-skills-02.jpg"
              width={700}
              height={700}
              alt="Steps to Enhance Personal Skills"
              className="rounded-xl md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancePersonalSkills;
