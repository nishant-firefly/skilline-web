import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const EmpoweringWomen = () => {
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
            label: "Empowerment of women",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Empowerment of women
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/women-2.jpg"
              width={700}
              height={700}
              alt="Empowering Women"
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-3 md:pl-[50px]">
              <Heading>Empowerment of women</Heading>
              <Paragraph>
              {`Having an income is the long-term objective that will realize the two organizations' goals and objectives. Our business is to empower members of society with the instruments, support, and tools that will allow customers to achieve financial sustainability and business success.`}
              </Paragraph>

              <Paragraph>
              The approach meets the various needs of the clients and fosters a culture of innovation and enterprise.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex pb-10 pt-0 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-7  md:pr-[50px]">
              <Heading>Our programs are focused on</Heading>
              <UnorderedList>
                {[
                  "Skill Development",
                  "Entrepreneurial Support",
                  "Job Creation",
                  "Financial Literacy",
                  "Community Development",
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
              src="/impact/women-empoerment-3.jpg"
              width={700}
              height={700}
              alt="Our initiatives focus on"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpoweringWomen;
