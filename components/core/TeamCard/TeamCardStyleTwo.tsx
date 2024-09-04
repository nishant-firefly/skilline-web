import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TeamCardType } from "./TeamCard";
import { Card } from "@/components/ui/card";
import { Paragraph } from "../Paragraph";

export const TeamCardStyleTwo = ({
  profession,
  src,
  name,
  role,
  social,
}: TeamCardType) => {
  return (
    <div className="bg-white relative">
      <div className="flex flex-col justify-between h-full">
        <div className="relative overflow-hidden ">
          <div className="relative flex justify-center pt-10">
            <Image
              src={src}
              alt={name}
              width={301}
              height={368}
              className="rounded-full w-[150px]"
              title={name}
            />
          </div>

          <div className="text-center space-y-3 px-4 py-5">
            <Link
              href={social?.[0].link || "/"}
              target="_blank"
              className="border w-[30px] h-[30px] flex items-center justify-center bg-[#0A63BC] text-[white] m-auto rounded-[50%] border-solid border-[#0A63BC]"
            >
              <FaLinkedinIn size={18} />
            </Link>
              <h3 className="text-[22px] font-semibold text-dark dark:text-white">
                {name}
              </h3>
            <Paragraph className="md:text-[19px] text-[17px]">{profession}</Paragraph>
            <Paragraph className="!leading-7 md:text-[16px] font-medium">{role}</Paragraph>
          </div>

        </div>
      </div>
    </div>
  );
};
