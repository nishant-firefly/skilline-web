import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const SelfLearning = () => {
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
            label: "Self Learning",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Self Learning
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/selft-learing-00.jpg"
              width={700}
              height={700}
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-5 md:pl-[50px]">
              <Heading>Self-Directed Education</Heading>
              <Paragraph>
              It is educational control over the learning processes of oneself, which others may also refer to as autonomous or self-directed learning. This self-initiated process by learners deliberately seeks knowledge, skills, and understanding in the absence of a teacher or formal classroom set-up.
              </Paragraph>

              <Paragraph>
                {`This kind of learning is considered to be increasing in its power in the world of the present, which is fast-changing, and that necessarily calls for an adaptive nature and the ability to gain self-growth of knowledge.`}
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex py-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-10  md:pr-[50px]">
              <Heading>An Effective Self-Learning Strategy</Heading>

              <UnorderedList>
                {[
                  "Establishment of Specific Goals",
                  "Increased Utilization of Varied Resources",
                  "Formulation of a Learning Schedule",
                  "Active Learning Practice",
                  "Engagement in the Learning Community",
                  "Solicitation of Feedback",
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
              src="/impact/selft-learing-01.jpg"
              width={700}
              height={700}
              alt="The Importance of Economic Independence"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfLearning;
