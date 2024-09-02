import { Heading, ImageBox, Paragraph } from "@/components/core";
import { GridBox } from "@/components/core/GridBox";
import Image from "next/image";
import React from "react";

export const Skill_Gap_india = () => {
  return (
    <div className="skill_gap_india container pb-[50px]">
      <GridBox columns={2} gap={10} className="md:space-y-0 space-y-5">
        <GridBox.GridItem columnMerge={1}>
            <Image src="/image/images/Skill Gap in India.jpg" alt="Skill Gap in India" width={1024} height={1024} className="rounded-[15px] md:sticky md:top-[50px] md:h-[480px] md:object-cover"/>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={1} className="space-y-3">
          <Heading>Skill Gap in India</Heading>
          <div className="space-y-3">
            <Paragraph>{`India's burgeoning youth population holds the promise of transforming the nation into a global powerhouse and the world's skill capital. With over 65% of its citizens under the age of 35, this energetic and dynamic workforce has the potential to drive India into a new era, led by Gen Z and millennials.`}</Paragraph>
            <Paragraph>{`However, there are significant concerns about the skill gap prevalent in the workforce, particularly in the manufacturing and service sectors. As technology rapidly evolves and permeates various industries, the skill gap has been widening, affecting both employee productivity and employability. Furthermore, the traditional education system in India has not adequately prepared first-time job seekers to meet industry demands, exacerbating the issue.`}</Paragraph>
          </div>
        </GridBox.GridItem>
      </GridBox>
    </div>
  );
};
