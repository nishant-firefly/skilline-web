import React, { ReactNode } from "react";
import { Heading } from "../Heading";
import Link from "next/link";

type ItemType = {
  label: string;
  link?: string;
  isActive?: boolean;
};

type BreadcrumbType = {
  data: ItemType[];
  children: ReactNode;
};

export const Breadcrumb = ({ data, children }: BreadcrumbType) => {
  return (
    <div className="bg-gray-100">
      <div className="container">
        <div className="font-[300] md:pb-4 pt-5 md:pt-4 md:text-left">
          {data.map((item, index) => {
            if (item.isActive) {
              return <span key={index}> {item.label}</span>;
            }
            return (
              <>
                <Link
                  key={index}
                  className="text-gray-500"
                  href={item.link || ""}
                >
                  {item.label}
                </Link>
                <span className="pl-1">/</span>
              </>
            );
          })}
        </div>
        <Heading className="md:text-center md:pt-[20px] md:pb-[80px] pt-[1px] pb-[29px] text-pretty">
          {children}
        </Heading>
      </div>
    </div>
  );
};
