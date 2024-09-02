import { AccordionTemplate, Heading, Paragraph } from "@/components/core";
import { GridBox } from "@/components/core/GridBox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { RiQuestionMark } from "react-icons/ri";

export const Solutions = () => {
  const data = {
    title: "Solutions",
    label: "Don't find your answer here?",
    description: "just send us a message for any query.",
    Link: {
      label: "Contact Us",
      url: "/contact-us",
      target: "_self",
    },
    faq: [
      {
        question: "Education System Reform:",
        answer:
          `1. Incorporate practical and hands-on learning from an early age.
          2. Move away from rote learning to prevent stunted academic growth and widen the skill gap.`,
      },
      {
        question: "How is Skilline helping in economic growth?",
        answer:
          "To promote economic independence by providing scalable affordable educational solutions that are based on market needs matching while at the same time stimulating entrepreneurship",
      },
      {
        question: "Makes Skilline different from other educational platforms?",
        answer:
          "The platform makes education fun for students while simplifying work for teachers; it ensures personalized learning experiences both for individuals and industries through adaptive technologies with 100% placement assurance. All this is achieved thanks to the use of gamification which has never been tried elsewhere.",
      },
      {
        question: "How is Skilline aligned with the government’s objectives?",
        answer:
          "Data is power, and our platform knows this best. We help in the execution of policies by building capacities among public officers through training programs informed by real-time information collected from different stakeholders using interactive dashboards that can be accessed at any time or place.",
      },
      {
        question: "What subjects does Skilline teach?",
        answer:
          "During its first year launch, the system will provide modules on Vedic Education, Cleanliness Awareness Government Policy and Responsible Citizen Awareness. Additionally, there are plans to introduce a DSA (Data Structures &amp; Algorithms) course among others under the IT training category.",
      },
      {
        question:
          "How does Skilline ensure accessibility across diverse demographics?",
        answer:
          "Skilline operates as a socially controlled platform, facilitating contributions from all levels of government and enabling visibility and coordination among stakeholders.",
      },
      {
        question: "What role does AI play in Skilline's platform?",
        answer:
          "AI powers Skilline's personalized learning pathways, ensuring skill development aligns with current job market needs and enhances learning outcomes.",
      },
      {
        question: "Why does Skilline need Gen AI servers?",
        answer:
          "Gen AI servers empower Skilline's AI-driven platform to create personalized learning pathways, facilitate scalable knowledge analytics, and deliver audio and video learning benefits to rural areas.",
      },
      {
        question: "What are some metrics Skilline uses for success and impact?",
        answer:
          "Continuous success measures include number of sign-ups for upskilling, employment rates, self-employment numbers, student satisfaction as well as policy outcomes projected success measures.",
      },
      {
        question:
          "How can I be part of Skilline as an investor or stakeholder?",
        answer:
          "To reach more people by partnering with us on our technological competence building drive; this will also entail scaling up operations aimed at empowering individuals and communities through education.",
      },
      {
        question: "What does Skilline hope to achieve in the future?",
        answer:
          "Every person should have access to a creative education system that will make them realize their potential and become self-reliant thereby fostering prosperity within Bharat is our vision for Skilline.",
      },
      {
        question: "How will my information be kept safe?",
        answer:
          "We believe data is power and we take its security very seriously so much so that all measures have been put in place for protecting personal information including being fully compliant with relevant laws governing this area.",
      },
    ],
  };

  return (
    <div className="pt-10 pb-[70px]">
      <div className="container">
        <GridBox
          columns={2}
          gap={10}
          className="items-start xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-4"
        >
          <GridBox.GridItem
            columnMerge={1}
            className="space-y-4 md:sticky md:top-[100px]"
          >
            <div className="bg-[#e9ecfb] w-[60px] h-[60px] hidden md:inline-flex items-center justify-center rounded-full ">
              <RiQuestionMark className="text-[#3750e0]" size={30} />
            </div>
            <Heading>{data.title}</Heading>
            <Heading className=" md:text-[25px]">
              {data.label}
            </Heading>
            <Paragraph>{data.description}</Paragraph>
            <Button asChild={true}>
              <Link href={data.Link.url} target={data.Link.target}>
                {data.Link.label}
              </Link>
            </Button>
          </GridBox.GridItem>
          <GridBox.GridItem columnMerge={1}>
            <AccordionTemplate content={data.faq} />
          </GridBox.GridItem>
        </GridBox>
      </div>
    </div>
  );
};
