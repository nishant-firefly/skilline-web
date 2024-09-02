import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Paragraph } from "../Paragraph";
type CardBox = {
  title: string;
  description: string;
  image: string;
  author: string;
  link: {
    url: string;
    target: "_blank" | "_self";
  };
  isFeatured?: boolean;
};

export const CardBox = ({
  title,
  description,
  image,
  author,
  link,
  isFeatured,
}: any) => {
  return (
    <div
      className={cn(
        "bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px]  transition-all group",
        isFeatured ? "rounded-2xl overflow-hidden" : "hover:shadow-none"
      )}
    >
      {isFeatured ? (
        <div className="flex flex-col">
          <div className="relative pt-[50%] sm:pt-[70%] overflow-hidden xl:h-[203px] lg:h-[203px] md:h-[267px]">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full aspect-[1.4] absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="mt-4 mb-6 px-4">
            <h3
              className={cn(
                "text-md font-normal  line-clamp-2 ",
                isFeatured ? "text-xl" : ""
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "mt-3 text-gray-500 font-light line-clamp-3",
                isFeatured ? "tracking-wide leading-7" : ""
              )}
            >
              {description}
            </p>
            <div className="text-md font-[300] mt-4 text-slate-500">Author : <span className="text-black font-[500]">{author}</span></div>
            <Button size="default" asChild={true} className="mt-3 py-1">
              <Link href={link.url} target={link.target}>
                Read More
              </Link>
            </Button>
          </div>
        </div>
      ) : (
        <Link className="flex flex-col" href={link.url} target={link.target}>
          <div className="relative pt-[50%] sm:pt-[70%] overflow-hidden xl:h-[203px] lg:h-[203px] md:h-[267px]">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full aspect-[1.4] absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          <div className="mt-4 mb-6 px-4">

            <h3
              className={cn(
                isFeatured ? "text-xl" : "",
                "text-[18px] leading-[30px]  line-clamp-2 ",
                isFeatured ? "text-xl" : ""
              )}
            >
              {title}
            </h3>
            <Paragraph
              className={cn(
                "mt-3 text-gray-500 font-light line-clamp-3 md:text-lg",
                isFeatured ? "tracking-wide leading-7" : ""
              )}
            >
              {description}
            </Paragraph> 
            <div  className="mt-3 py-1">
                <Link href={link.url} className="text-[17px] md:hidden text-[#141C98]">Read More...</Link>
              </div>
            <div className="text-md font-[300] mt-4 text-slate-500">Author : <span className="text-black font-[500]">{author}</span></div>
            
          </div>
        </Link>
      )}
    </div>
  );
};
