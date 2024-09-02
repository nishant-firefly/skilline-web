import { cn } from "@/lib/utils";
import React from "react";
import { GoGraph } from "react-icons/go";

export const PillarsItem = ({ title, description, icon, seqNumber }: any) => {
  return (
    <div className="h-full w-full flex items-start pb-10 relative">
      <div className="absolute left-[38px] top-0 w-1 h-full bg-gray-100 inline-block" />

      <div className="w-[40px] translate-y-[22px] mr-10 ml-5">
        <span className="border border-red-500 p-1 rounded-full inline-flex ">
          <span className="text-red-500 text-sm inline-flex items-center justify-center w-[30px] h-[30px]  rounded-full bg-white">
            {seqNumber}
          </span>
        </span>
      </div>
      <div className="w-[calc(100%-100px)]  border-2 border-dashed border-opacity-50 border-red-500 rounded-[15px]">
        <div className="shadow-inner-[15px_15px_15px_rgba(0,0,0,0.5)] rounded-lg px-5 py-5">
          <h4 className={cn("text-lg uppercase font-[600]", "text-red-500")}>
            {title}
          </h4>
          <div className="text-sm leading-[200%] font-[300]">{description}</div>
        </div>
      </div>
    </div>
  );
};
