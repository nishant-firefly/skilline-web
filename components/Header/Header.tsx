"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { IoMenuOutline } from "react-icons/io5";
import { MobileMenu } from "./MobileMenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Image from "next/image";

export const Header = () => {
  const pathName = usePathname();

  const [menuStatus, setMenuStatus] = useState(false);
  const menu = [
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
      label: "Contact Us",
      link: "/contact-us",
    },
  ];
  return (
    <>
      <ProgressBar
        color="hsl(var(--primary))"
        height="4px"
        options={{ showSpinner: false }}
      />

      <div className="bg-white sticky top-0 z-[2] bg-opacity-75 backdrop-blur-[15px] shadow-md">
        <div className="container">
          <div className="flex justify-between items-center lg:py-5 py-5">
            <div className="xl:w-[25%] lg:w-[25%] md:w-[25%] w-full">
                <Link href={"/"}><Image src="/images/skilline-logo.png" className="w-[80%]" alt="" width={1473} height={227} /></Link>
            </div>
            <div className="flex lg:gap-5 items-center">
              <div className="hidden lg:flex gap-10 mr-3 items-center">
                {menu.map((item: any, index: number) => {
                  return (
                    <Link
                      href={item.link}
                      className={cn(
                        "text-gray-500 hover:text-black",
                        pathName === item.link ? "text-black" : ""
                      )}
                      key={index}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              {/* <Button asChild={true}>
                <Link href={"/contact-us"}>Enquiry Now</Link>
              </Button> */}
              <div className="lg:hidden">
                <Button variant="ghost" onClick={() => setMenuStatus(true)}>
                  <IoMenuOutline size={30} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        menu={menu}
        active={menuStatus}
        toggleMenu={(prop: boolean) => setMenuStatus(prop)}
      />
    </>
  );
};
