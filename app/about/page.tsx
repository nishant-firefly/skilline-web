import { About, SkillGap, Solution } from "@/components/About";
import { Breadcrumb, Heading, Paragraph } from "@/components/core";
import { GridBox } from "@/components/core/GridBox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {


  const listItem = [
    {
      title: "Government Alignment:",
      label: "Adhering to national policies.",
    },
    {
      title: "Teacher Support:",
      label: "Effective training methodologies.",
    },
    {
      title: "Education System Reform:",
      label: "Transforming education systems.",
    }
  ]

  const listItems = [
    {
      title: "Education & Awareness:",
      label: "Advancing knowledge through innovation.",
    },
    {
      title: "AI-Driven Quality Education:",
      label: "Tailored to individual needs.",
    },
    {
      title: "Multilingual Support:",
      label: "Reaching rural communities.",
    }
  ]

  const offer = [
    {
      title: "Job-Ready Skills",
      listItem: [
        "Competence development for the rural workforce.",
        "Corporate and worker platforms for offline training and monitoring.",
        "AI-driven learning for personalized skill enhancement."
      ]
    },
    {
      title: "Industry and Academia Collaboration",
      listItem: [
        "Focus on in-demand skills, especially for youth in manufacturing.",
        "A skilled and assessed worker pool ready for employment."
      ]
    },
    {
      title: "Investment in Vocational Skilling",
      listItem: [
        "Comprehensive support for vocational education and training."
      ]
    }
  ]


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
            label: "About",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Greetings from Skilline!
      </Breadcrumb>
      <About />
      <SkillGap />
      <div className="bg-[#F3F4F6]">
        <div className="container">
          <div className=" pt-[50px] md:my-10 ">
            <Heading className="md:text-center">What We Offer</Heading>
            <GridBox columns={3} gap={10} className="pt-10 md:space-y-0 space-y-8">
              {offer.map((item, index) => (
                <GridBox.GridItem key={index} columnMerge={1} className="bg-white p-10 rounded-md">
                  <Heading className="md:text-lg">{item.title}</Heading>
                  <ul className="space-y-5 pt-5">
                    {item.listItem.map((list, index) => (
                      <li key={index} className="list-disc">{list}</li>
                    ))}
                  </ul>
                </GridBox.GridItem>
              ))}
            </GridBox>
          </div>
          <div className="pb-20 container pt-10">
            <div className="space-y-5">
              <Heading className="md:text-center">Our Impact and Approach</Heading>
              <Paragraph className="md:text-center">{`Skilline uses AI and gamification to provide a personalized learning experience tailored to individual needs. We align with government initiatives like Atma Nirbhar Bharat to ensure high-quality, job-ready education that supports rural languages.`}</Paragraph>
            </div>
            <GridBox columns={2} gap={10} >
              <GridBox.GridItem columnMerge={1} className="mt-8">
                <ul className="space-y-4">
                  {listItem.map((item, index) => (
                    <li key={index} className="list-disc"><span className="font-semibold">{item.title}</span> <span>{item.label}</span></li>
                  ))}
                </ul>
              </GridBox.GridItem>
              <GridBox.GridItem columnMerge={1} className="mt-8">
                <ul className="space-y-4">
                  {listItems.map((item, index) => (
                    <li key={index} className="list-disc"><span className="font-semibold">{item.title}</span> <span>{item.label}</span></li>
                  ))}
                </ul>
              </GridBox.GridItem>
            </GridBox>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Solution />
      </div>
      {/* <div className="container space-y-10">
        <Heading className="text-center">Our Timeline</Heading>
        <Image src="/image/images/image 23.jpg" alt="Timeline" title="Timeline" width={1578} height={889} />
        <div className="justify-center flex">
        <Link href="/contact-us" className="text-[white] bg-[black] text-[25px] px-5 py-2.5 rounded-[10px]">Come and join us</Link>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;