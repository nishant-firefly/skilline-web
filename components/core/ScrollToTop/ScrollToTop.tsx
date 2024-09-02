"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const scrollToTop = () => {
    if (window) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", (e) => {
        const scrollAmount = window.scrollY || window.pageYOffset;
        setVisible(scrollAmount > 50);
      });
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", () => {});
      }
    };
  }, []);
  return (
    <Button
      size="icon"
      className={cn("fixed right-3 bottom-3", visible ? "" : "hidden")}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </Button>
  );
};
