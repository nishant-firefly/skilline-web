"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Cookies = () => {
  const [status, setStatus] = useState(false);

  const setCookie = (name: any, value: any, days: any) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name: any) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    if (document?.cookie) {
      const cookieInfo = getCookie("cookieInfo");
      if (cookieInfo !== "yes") {
        setStatus(true);
      }
    } else {
      setStatus(true);
    }
  }, []);

  const accept = () => {
    setStatus(false);
    setCookie("cookieInfo", "yes", 365);
  };

  return (
    <>
      {status ? (
        <section
          className={cn(
            "fixed z-[9999] shadow-xl max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-2xl",
            "right-4 left-4 md:left-auto md:right-5 bottom-5"
          )}
        >
          <h2 className="text-[28px] font-semibold text-gray-800 dark:text-white">
            🍪 Cookie Notice
          </h2>

          <p className="mt-4  text-gray-600 dark:text-gray-300">
            We use cookies to ensure that we give you the best experience on our
            website.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Read cookies policies
            </a>
            .{" "}
          </p>

          <div className="flex items-center justify-between mt-4 flex-col gap-3">
            <Button
              variant="default"
              className="w-full rounded-full"
              onClick={() => accept()}
            >
              Accept all
            </Button>
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={() => setStatus(false)}
            >
              Reject non-essential cookies
            </Button>
          </div>
        </section>
      ) : null}
    </>
  );
};
