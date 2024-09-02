import { Breadcrumb, Heading, IconBoxV2 } from "@/components/core";
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { ContactForm } from "./ContactForm";
import Link from "next/link";

const ContactUs = () => {
  const breadcrumb = [
    {
      label: "Home",
      link: "/",
      isActive: false,
    },
    {
      label: "Contact Us",
      link: "/",
      isActive: true,
    },
  ];

  const InputClass =
    "py-3 rounded px-4 focus:outline-none font-[300]  border border-solid block w-full border-gray-200  text-[18px] focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-black dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-black";

  return (
    <>
      <Breadcrumb data={breadcrumb}>Contact us</Breadcrumb>
      <div className="container py-[20px]  md:py-[80px]">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[30%] w-full pt-6 md:sticky md:top-[50px] md:h-full">
            <Heading className="text-black text-pretty md:text-[25px] text-[20px] md:leading-[40px] font-normal">Keep In Touch With Us.</Heading>
            <div className="divide-y divide-gray-200">
              <IconBoxV2
                className="py-6"
                icon="/images/map.png"
                title="Address"
              >
                594, Road No. 34, Survey Of India Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081
              </IconBoxV2>
              {/* <IconBoxV2
                className="py-6"
                icon="/images/mobile-phone.png"
                title="Phone"
              >
                Mobile: <b>(+91) - xxxx - xxx - xxx</b>
              </IconBoxV2> */}
              <IconBoxV2
                className="py-6"
                icon="/images/email-1.png"
                title="Email"
              >
                <Link href="mailto:info@skilline.ai">info@skilline.ai</Link>
              </IconBoxV2>
            </div>
          </div>
          <div className="w-full md:w-[60%] ">
            <Card className="md:p-10 p-5">
              <Heading className="text-black text-pretty md:text-[25px] text-[20px] md:leading-[40px] font-normal mb-5">
                Send a Message
              </Heading>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
