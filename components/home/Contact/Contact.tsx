import { GridBox } from "@/components/core/GridBox";
import { FaPhone, FaRegEnvelope, FaFacebookF } from "react-icons/fa";
import { LiaFaxSolid } from "react-icons/lia";
import React from "react";
import Link from "next/link";
import { Heading } from "@/components/core";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const data = {
    cnt_icon: [
      {
        icon: FaPhone,
        title: "Call Us",
        link: {
          label: "+91 12345-67890",
          url: "tel:+91 12345-67890",
        },
      },
      {
        icon: FaRegEnvelope,
        title: "Mail Us",
        link: {
          label: "info@gmail.com",
          url: "mailto:info@gmail.com",
        },
      },
    ],
  };

  return (
    // <section className="container my-10">
    //   <GridBox columns={2} gap={0} className="shadow-[0_0_10px_rgba(51,51,51,0.15)] bg-white rounded-[5px]">
    //     <GridBox.GridItem columnMerge={1} className="bg-white p-[5%]">
    //       <div>
    //         <Heading>Get In Touch</Heading>
    //       </div>
    //       <div className="xl:flex lg:flex md:flex block gap-10 my-5 xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-3">
    //         {data.cnt_icon.map((item, index) => (
    //           <div key={index} className="shadow-[0_0_10px_rgba(51,51,51,0.15)] p-[5%] xl:w-6/12 lg:w-6/12 md:w-6/12 w-full rounded-[5px] space-y-2">
    //             <div className="text-center m-auto p-2 rounded-lg flex items-center  justify-center transition-all duration-500 bg-primary text-white text-2xl w-[40px] h-[40px] flex items-center justify-center"><item.icon /></div>
    //             <h3 className="text-lg text-center text-[rgb(105,105,105)]">{item.title}</h3>
    //             <Link className="flex justify-center hover:text-primary" href={item.link.url}>{item.link.label}</Link>
    //           </div>
    //         ))}
    //       </div>
    //       <span className="flex justify-center my-2.5 text-[rgb(105,105,105)]">Or</span>
    //       <div className="shadow-[0_0_10px_rgba(51,51,51,0.15)] p-[5%] rounded-[5px]">
    //         <ContacthtmlForm />
    //       </div>
    //     </GridBox.GridItem>
    //     <GridBox.GridItem columnMerge={1} className="bg-[url(/images/cnt-banner.jpg)] bg-cover bg-no-repeat">
    //       <div></div>
    //     </GridBox.GridItem>
    //   </GridBox>
    // </section>
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto container">
      <div className="mx-auto">
        <Heading>Contact us</Heading>
        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">
              Fill The Form
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 focus:outline-none border-[#BEBEBE] border border-solid block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 focus:outline-none border-[#BEBEBE] border border-solid block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    className="py-3 px-4 block focus:outline-none border-[#BEBEBE] border border-solid w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block focus:outline-none w-full border-[#BEBEBE] border border-solid border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    className="py-3 px-4 block w-full focus:outline-none border-[#BEBEBE] border border-solid h-[200px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Details"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 grid">
                <Button type="submit">Send Enquiry</Button>
              </div>
            </form>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-neutral-800">
            <div className=" flex gap-x-7 py-6">
              <div className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200">
                <FaPhone />
              </div>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Contact us by Phone
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  If you wish to Call us
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="/"
                >
                  +91 1234567890
                </a>
              </div>
            </div>

            <div className=" flex gap-x-7 py-6">
              <svg
                className="flex-shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Contact us by email
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  If you wish to write us an email instead please use
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  example@site.com
                </a>
              </div>
            </div>
            <div className=" flex gap-x-7 py-6">
              <div className="flex-shrink-0 text-[30px] mt-1.5 text-gray-800 dark:text-neutral-200">
                <LiaFaxSolid />
              </div>
              <div className="grow">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                  Contact us by Fax
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  If you wish to Send Fax
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="/"
                >
                  info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
