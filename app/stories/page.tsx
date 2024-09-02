import { storiesData } from "@/components/content";
import { Breadcrumb, Paragraph, StoryItemtype } from "@/components/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Stories = () => {
  const data: StoryItemtype[] = storiesData as StoryItemtype[];

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
            label: "Stories",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Success Stories
      </Breadcrumb>
      <div className="container">
        <div className="space-y-10 py-10">
          {data.map((item: StoryItemtype, index) => {
            return (
              <div
                key={index}
                id={item.id}
                className="shadow-[0_15px_60px_rgba(0,0,0,6%)] bg-white p-8"
              >
                <div className="flex flex-col md:flex-row ">
                  <div className="w-full md:w-[240px] text-center flex items-center md:flex-col flex-row md:sticky md:top-[100px] h-full">
                  <Link href={item.linkdin} target="_blank" className="relative">
                  <Image
                      src={item.image}
                      width={150}
                      height={150}
                      alt={item.name}
                      className=" rounded-full md:w-[150px] md:h-[150px] w-[70px] h-[70px] object-cover"
                    />
                    <div className="cursor-pointer list-none text-xl w-[35px] h-[35px] justify-center items-center flex bg-[#087EBB] text-[white] rounded-[50%] mt-12 xl:mt-2 lg:mt-2 md:mt-2 absolute  ml-0 md:bottom-[20px] bottom-[-5px] z-[1]">
                    <FaLinkedinIn />
                    </div>
                    </Link>
                    <div className="md:pt-5 text-left md:text-center md:pl-0 pl-5">
                      <h2 className="text-xl">{item.name}</h2>
                      <h2 className="text-slate-500">{item.city}</h2>
                    </div>
                    
                  </div>
                  <div className="md:border md:border-t-0 md:border-r-0 md:border-b-0 w-full md:w-[calc(100%-240px)]">
                    <div className="mt-5 md:mt-0 md:px-10">
                      {item.content.map((story, index) => (
                        <div key={index}>  
                          <Paragraph className="pb-7"><h3 className="font-semibold">{story.heading}</h3> {story.description}</Paragraph>
                        </div>
                      ))} 
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stories;
