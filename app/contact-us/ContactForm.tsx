"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';

export const ContactForm = () => {
  const [message, setMessage] = useState<string | null>(null);
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
} = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post("https://bareillydeals.com/send-mail.php", data);
      if (response.status === 200) {
        setMessage("success");
        setTimeout(() => {
          setMessage(null);
          reset();
        }, 3000);
      } else {
        setMessage("failed");
      }
    } catch (error) {
      setMessage("failed");
      console.error('Error submitting form:', error);
    }
  };

  // https://bareillydeals.com/send-mail.php

  const InputClass =
    "py-3 rounded px-4 focus:outline-none font-[300]  border border-solid block w-full border-gray-200  text-[18px] focus:border-black focus:ring-black disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-black dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-black";

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hs-firstname-contacts-1" className="sr-only">
              First Name
            </label>
            <Controller
              name="fname"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  className={InputClass}
                  placeholder="First Name"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <div>
              {errors["fname"] && (
                <span className="text-red-500 text-sm ">Please Enter Your First Name</span>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="hs-lastname-contacts-1" className="sr-only">
              Last Name
            </label>

            <Controller
              name="lname"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  id="hs-lastname-contacts-1"
                  className={InputClass}
                  placeholder="Last Name"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <div>
              {errors["lname"] && (
                <span className="text-red-500 text-sm ">Please Enter Your Last Name</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="hs-email-contacts-1" className="sr-only">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <input
                type="email"
                name="hs-email-contacts-1"
                id="hs-email-contacts-1"
                className={InputClass}
                placeholder="Email"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <div>
            {errors["email"] && (
              <span className="text-red-500 text-sm ">Please Enter Your Email</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="hs-phone-number-1" className="sr-only">
            Phone Number
          </label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be 10 digits long",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="text"
                name="hs-phone-number-1"
                id="hs-phone-number-1"
                className={InputClass}
                placeholder="Phone Number"
                onChange={(e) => {
                  const newValue = e.target.value.replace(/\D/g, "");
                  onChange(newValue.slice(0, 10));
                }}
                value={value}
              />
            )}
          />
          <div>
          {errors["phone"] && (
              <span className="text-red-500 text-sm ">Please Enter Phone Number</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="hs-about-contacts-1" className="sr-only">
            Details
          </label>

          <Controller
            name="textarea"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                className={cn(InputClass, "h-[150px]")}
                placeholder="Details"
                onChange={onChange}
                value={value}
              ></textarea>
            )}
          />
        </div>
      </div>

      <div className="mt-4 grid">
        <Button
          type="submit"
          className="w-max"
        >
          {isSubmitting ? <span className="w-[30px] h-[30px] animate-spin rounded-[50%] border-t-[#3498db] border-2 border-solid border-[#f3f3f3]"></span> : <span>Send inquiry</span>}
        </Button>
      </div>
      {message && (
        <div className={`mt-4 ${message === "success" ? "text-green-500" : "text-red-500"}`}>
          {message === "success" ? "Message Sent Successfully" : "Message Not Sent"}
        </div>
      )}
    </form>
  );
};
