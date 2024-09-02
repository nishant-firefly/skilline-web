import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import { Pillars } from "@/components/Policies/Pillars";
import Image from "next/image";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Policies = () => {
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
            label: "Policies",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Alignment with Government Policies
      </Breadcrumb>
      <div className="container">
        <div className="flex flex-col md:flex-row md:py-[80px] py-[50px] items-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/policy-2.jpg"
              width={1000}
              height={1000}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="space-y-6 mt-5 md:mt-0 md:pl-10">
              <Heading className="">Boosting the Future of India Through Government Backed Education Initiatives</Heading>
              <Paragraph className="!whitespace-normal">
              Skilline is well aligned with numerous groundbreaking Indian government campaigns like Atma-Nirbhar Bharat, Skill India Digital, NSDC campaigns, and the biggest one: 100 Days AI Mission by the Institute Of The NITI Aayog. Our modules are carefully built to comply with government board curriculums, and they match national goals for skill development completely.{" "}
              </Paragraph>
              
            </div>
          </div>
        </div>
      </div>
      <Pillars />
      <div className="container ">
        <div className="md:text-center space-y-5 md:pt-[60px] md:px-[10%]">
          <Heading className="">Empower Skill India</Heading>
          <Paragraph className="!whitespace-normal">
            {`Skilling in an organized, multilingual, and AI-powered method. We provide personalized learning in real-time for everyone, using AI technology and available on all screens. This initiative is aimed at enabling a world-class resource pool of professionals who can not only build solutions but also help provide the essential skills for India's workforce in this digital age, thereby increasing employability and contributing to developing economies.`}
          </Paragraph>
        </div>
        <div className="flex flex-col md:flex-row pt-[20px] pb-[80px] items-center">
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/empower-inda.webp"
              width={1000}
              height={1000}
              alt=""
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="space-y-6 mt-5 md:pt-0 md:pl-10">
              <h4 className="font-[600] text-[30px]">Benefits </h4>

              <UnorderedList>
                <UnorderedList.Item>
                Corporate & Worker Platform for offline training and monitoring
                </UnorderedList.Item>

                <UnorderedList.Item>
                Teacher Facilitation, Training process
                </UnorderedList.Item>
                <UnorderedList.Item>
                In demand Skills. Youth in Manufacturing
                </UnorderedList.Item>

                <UnorderedList.Item>
                Skilled Assessed Pool of Workers
                </UnorderedList.Item>
                <UnorderedList.Item>
                Quality Education
                </UnorderedList.Item>
                <UnorderedList.Item>
                Multi-lingual, Rural, Ultimately
                </UnorderedList.Item>
              </UnorderedList>
              {/* <div className="space-y-5 text-slate-600">
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Corporate and Skilled Worker
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Platform for offline training and monitoring
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Facilitate Teachers and Organise Training process
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  In demand skills and youth
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Skilled assessed pool of workers in Manufacturing
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Quality Education and Kids
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Quality Education and Kids
                </div>
                <div>
                  <span className="bg-[#e9ecfb] mr-3 w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full">
                    <IoCheckmark className="text-[#3750e0]" size={15} />
                  </span>
                  Multi lingual, Rural , In general
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
