import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type ArticleProps = {
  children: ReactNode;
  className?: string;
};
export const Article = ({ children, className }: ArticleProps) => {
  return (
    <article
      className={cn(
        "container pt-[50px] pb-[50px] xl:px-0 lg:px-0 md:px-6 px-6 prose-h3:text-[22px] prose-h3:font-semibold prose-h3:mt-3 prose-h3:mb-3 prose-h4:text-[22px] prose-h4:font-medium prose-h4:mt-3 prose-h4:mb-4 prose-p:text-[#000000] prose-p:text-lg prose-p:py-4 prose-ul:ml-[35px] prose-li:list-[lower-latin] prose-li:text-[#000000] prose-li:text-lg prose-ul:space-y-5 prose-ul:mt-5 prose-ul:mb-5 prose-li:mt-4 prose-li:mb-4",
        className
      )}
    >
      {children}
    </article>
  );
};
