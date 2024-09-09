"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "../core";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Footer = () => {
  const pathname = usePathname();
  const footerMenu = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Blog",
      link: "/blogs",
    },
    {
      label: "Contact",
      link: "/contact-us",
    },
    {
      label: "Privacy",
      link: "/privacy",
    },
    {
      label: "Cookies",
      link: "/cookies",
    },
  ];

  // const social = [
  //   {
  //     label: "Facebook",
  //     link: "https://www.facebook.com/",
  //     icon: "facebook",
  //   },
  //   {
  //     label: "Linkedin",
  //     link: "https://in.linkedin.com/",
  //     icon: "linkedin",
  //   },
  //   {
  //     label: "Instagram",
  //     link: "https://www.instagram.com/",
  //     icon: "instagram",
  //   },
  // ];
  return (
    <footer
      className={cn(
        " dark:bg-gray-900 border-t-gray-200 border-t border-solid mt-[20px]",
        pathname === "/" ? "bg-white" : "bg-gray-50"
      )}
    >
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="/">
          <Image src="/images/skilline.png" className="xl:w-[20%] lg:w-[20%] md:w-[20%] w-[50%] m-auto" alt="" width={1496} height={512} />
          </Link>
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            {footerMenu.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="md:mx-4 text-[18px] mx-2 font-[300] text-black transition-colors duration-300 hover:text-black dark:text-gray-300 dark:hover:text-black"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="my-5 border-gray-200 md:my-5 dark:border-gray-700" />

        <div className="text-center">
          <p className="text-[18px] leading-[28px] font-light text-[rgb(105,105,105)] tracking-[_0.4px]">
            © Copyright 2023. All Rights Reserved.
          </p>

          {/* <div className="flex mt-3 md:mt-0 gap-3">
            {social.map((item, index) => {
              const { icon, label, link } = item;
              return (
                <SocialIcon key={index} icon={icon} label={label} link={link} />
              );
            })}
          </div> */}
        </div>
      </div>
    </footer>
  );
};
