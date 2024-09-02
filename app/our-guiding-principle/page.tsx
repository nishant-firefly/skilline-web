import { Breadcrumb, Heading, Paragraph } from "@/components/core";
import Image from "next/image";
import React from "react";

const ChallengesAndStrategies = () => {
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
            label: "Our Guiding Principle",
            link: "/our-guiding-principle",
            isActive: true,
          },
        ]}
      >
        Our Guiding Principle
      </Breadcrumb>
      <div className="container">
        <div className="flex flex-col md:flex-row md:pt-[80px] pt-[20px]">
          <div className="md:w-1/2 w-full md:sticky top-[100px] h-full">
            <Image
              src="/images/skill-gap-in-India.jpg"
              alt=""
              width={1000}
              height={1000}
              className="border"
            />
          </div>
          <div className="md:w-1/2 w-full space-y-5 mt-5 md:mt-0">
            <div className="md:pl-[50px] space-y-5">
              <Heading>Skill Gap in India</Heading>
              <Paragraph className="!whitespace-normal">
                {
                  "India's burgeoning youth population holds the promise of transforming the nation into a global powerhouse and the world's skill capital. With over 65% of its citizens under the age of 35, this energetic and dynamic workforce has the potential to drive India into a new era, led by Gen Z and millennials."
                }
              </Paragraph>
              <Paragraph className="!whitespace-normal">
                {
                  "However, there are significant concerns about the skill gap prevalent in the workforce, particularly in the manufacturing and service sectors."
                }
              </Paragraph>
              <Paragraph className="!whitespace-normal">
                {
                  "As technology rapidly evolves and permeates various industries, the skill gap has been widening, affecting both employee productivity and employability. Furthermore, the traditional education system in India has not adequately prepared first-time job seekers to meet industry demands, exacerbating the issue."
                }
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="pt-[100px] pb-[80px] flex flex-col md:flex-row  flex-col-reverse">
          <div className="md:w-1/2 w-full xl:pt-0 lg:pt-0 md:pt-0 pt-5">
            <Heading>Solutions</Heading>
            <Paragraph className="space-y-8 pt-5">
              <div>
                <h2 className="font-[600]">Education System Reform:</h2>
                <ul className="pl-5 list-type-1">
                  <li>
                    Incorporate practical and hands-on learning from an early
                    age.
                  </li>
                  <li>
                    Move away from rote learning to prevent stunted academic
                    growth and widen the skill gap.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">Emphasis on Vocational Skills:</h2>
                <ul className="pl-5 list-type-1">
                  <li>
                    Prioritize vocational skills, internships, and embedded
                    apprenticeship degree programs.
                  </li>
                  <li>
                    Ensure students gain hands-on learning experiences in
                    real-life scenarios.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">
                  Industry and Academia Collaboration:
                </h2>
                <ul className="pl-5 list-type-1">
                  <li>
                    Foster a collaborative understanding between industry and
                    academia.
                  </li>
                  <li>
                    Align the education system with current job market needs.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">
                  Investment in Vocational Skilling:
                </h2>
                <ul className="pl-5 list-type-1">
                  <li>
                    Address the urgent need for investment in vocational
                    education across the country.
                  </li>
                  <li>
                    Overcome the stigma associated with vocational education,
                    often seen as a last resort by parents and teachers.
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-[600]">Education and Awareness:</h2>
                <ul className="pl-5 list-type-1">
                  <li>
                    Educate teachers, students, and parents on the benefits of
                    vocational education.
                  </li>
                  <li>
                    Highlight the available work placement options for students.
                  </li>
                </ul>
              </div>
            </Paragraph>
          </div>
          <div className="md:w-1/2 w-full md:pl-10">
            <Image
              src="/images/solution.jpg"
              alt=""
              width={1000}
              height={1000}
              className="border sticky top-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesAndStrategies;
