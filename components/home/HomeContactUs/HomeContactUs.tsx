import { ContactForm } from "@/app/contact-us/ContactForm";
import { Heading } from "@/components/core";
import { ContactIconBox } from "@/components/core/ContactIconBox";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export const HomeContactUs = () => {
  return (
    // <div className="bg-[#F3F4F6] md:pt-0 pt-10">
    // <div className="container md:pt-5 pb-[50px] ">
    //   <Heading className="text-center">Contact us</Heading>
    //   <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 mt-10 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
    //     <div className="flex flex-col gap-5 col-span-1 rounded-md  border border-slate-200 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px]">
    //     <ContactIconBox title="Email Address" icon="email">
    //       <Link href="mailto:info@skilline.ai">info@skilline.ai</Link>
    //     </ContactIconBox>
    //     </div>
    //     <div className="col-span-3 rounded-md  border border-slate-200 bg-white shadow-[rgba(149,157,165,0.2)_0px_8px_24px]">
    //     <ContactIconBox title="Our Location" icon="map" >
    //       594, Road No. 34, Survey Of India Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081
    //     </ContactIconBox>
    //     </div>
    //   </div>
    // </div>
    // </div>r
    <div className="py-5 bg-[#F8F8F8]">
      <Heading className="text-center">Contact Us</Heading>
      <div className="mt-3">
      <Card className="md:p-10 p-5 md:w-6/12 w-full m-auto">
{/*       
              <Heading className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200 text-center">
                Send a Message
              </Heading> */}
              
              <ContactForm />
             
            </Card>
            </div>    
    </div>
  );
};
