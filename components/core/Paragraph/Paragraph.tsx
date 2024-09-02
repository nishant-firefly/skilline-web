import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "text-balance text-[20px] leading-[36px] md:text-[20px] md:leading-[36px] font-light text-black tracking-[_0.4px] !whitespace-normal",
        className
      )}
    >
      {children}
    </div>
  );
};
