import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { IoCheckmark } from "react-icons/io5";

type UnorderedListType = {
  children: ReactNode;
  className?: string;
};

const Item = ({ children, className }: UnorderedListType) => {
  return (
    <div className="relative text-[18px] pl-[45px]">
      <span
        className={cn(
          "bg-[#e9ecfb] mr-3  w-[30px] h-auto aspect-square inline-flex items-center justify-center rounded-full absolute left-0",
          className
        )}
      >
        <IoCheckmark className="text-[#3750e0] " size={15} />
      </span>
      {children}
    </div>
  );
};

export const UnorderedList = ({ className, children }: UnorderedListType) => {
  return (
    <div className={cn("space-y-5 text-slate-600", className)}>{children}</div>
  );
};

UnorderedList.Item = Item;
