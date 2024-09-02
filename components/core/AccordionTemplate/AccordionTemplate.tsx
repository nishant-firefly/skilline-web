"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Paragraph } from "../Paragraph";

type Accordion = {
  question: string;
  answer: string;
};

type AccordionTemplateProps = {
  content: Accordion[];
};

export const AccordionTemplate = ({ content }: AccordionTemplateProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Accordion type="single" collapsible className="w-full">
      {content.map((item, index) => (
        <AccordionItem
          key={index}
          value={String(index)}
          onClick={() => setActiveIndex(index)}
        >
          <AccordionTrigger
            className={`text-[18px] font-[600] hover:no-underline text-left ${
              activeIndex === index ? "text-black" : ""
            }`}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            <Paragraph className="md:text-lg">{item.answer}</Paragraph>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
