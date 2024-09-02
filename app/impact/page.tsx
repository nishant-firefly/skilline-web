import { Breadcrumb } from "@/components/core";
import { OurImpact } from "@/components/home";
import React from "react";

const Impact = () => {
  return (
    <div>
      <Breadcrumb
        data={[
          {
            label: "Home",
            link: "/",
            isActive: false,
          },
          {
            label: "Our Impact",
            link: "/",
            isActive: true,
          },
        ]}
      >
        Our Impact
      </Breadcrumb>
      <OurImpact isWhite={true} heading="The Difference We Make" />
    </div>
  );
};

export default Impact;
