import Image from "next/image";
import React, { ReactNode } from "react";
import { Paragraph } from "../Paragraph";

type IconBoxV2type = {
  title: string;
  icon: string;
  children: ReactNode;
  className?: string;
};

export const IconBoxV2 = ({
  title,
  icon,
  children,
  className,
}: IconBoxV2type) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <Image src={icon} width={40} height={40} alt={title} />
        <h3 className="text-[22px]">{title}</h3>
      </div>
      <div className="text-[18px] mt-4 font-light text-[rgb(105,105,105)] tracking-[_0.4px]">
        {children}
      </div>
    </div>
  );
};
