import {
  Breadcrumb,
  Heading,
  Paragraph,
  UnorderedList,
} from "@/components/core";
import Image from "next/image";
import React from "react";

const GlobalRecognition = () => {
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
            label: "Global Recognition",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Global Recognition
      </Breadcrumb>
      <div className="container md:py-10 py-0">
        <div className="flex py-10 items-center md:flex-row flex-col gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/global-recognition-2.jpg"
              width={700}
              height={700}
              alt="Global Recognition"
              className="rounded-xl md:h-[580px] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="space-y-3 md:pl-[50px]">
              <Heading>Global Recognition</Heading>

              <Paragraph>
              For international customers, we have always had a competent team of employees who have always provided the best services as per our quality and creativity policy. The business operation and cost-cutting have been made easy for many reputed agencies like Mindmaster Singapore and XU Lifestyle, which establishes versatility in serving the particular needs of each sector.
              </Paragraph>

              <Paragraph>
              Above all, there is a staff of true professionals who provide experience, creativity, and a fix it ‘til it’s broken mentality to every job. The ability to put into practice the available technologies as well as the practices in the current market ensures that our clients realize their business visions as intended and without a lot of hassles.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex pt-0 pb-10 items-center md:flex-row flex-col-reverse gap-10 md:gap-0">
          <div className="md:w-1/2 w-full">
            <div className="space-y-3  md:pr-[50px]">
              <Paragraph>
              {`This has led to an improved strategy and a broader scope of price-cutting measures that have been seen to improve Mindmaster Singapore's competitive advantage in the market. On the same path, the relationship between our business and XU Lifestyle has created tension in the functional activities that want them to provide better commercial business value to their clients.`}
              </Paragraph>
              <Paragraph>
              This Babson is a global company, and we will continue to strive to offer international-prestige contents that empower organizations, companies, institutions, individuals, and so forth, all over the world, to grow and succeed.
              </Paragraph>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <Image
              src="/impact/global-recognition-3.jpg"
              width={700}
              height={700}
              alt="Global Recognition"
              className="rounded-xl md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalRecognition;
