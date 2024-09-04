import React from "react";
import { TeamCardStyleOne } from "./TeamCardStyleOne";
import { TeamCardStyleTwo } from "./TeamCardStyleTwo";
export type TeamCardType = {
  src: string;
  name: string;
  role: string;
  profession: string;
  social?: [
    {
      icon: "linkedin";
      label: "Linkedin";
      link: "https://www.linkedin.com/in/debasshis/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    }
  ];
};

type VariantType = "style-1" | "style-2";

type TeamCardMain = {
  type?: VariantType;
} & TeamCardType;
export const TeamCard = ({
  profession,
  src,
  name,
  role,
  social,
  type = "style-1",
}: TeamCardMain) => {
  const Variant: Record<VariantType, any> = {
    "style-1": TeamCardStyleOne,
    "style-2": TeamCardStyleTwo,
  };

  const Team = Variant[type] || <div>{type} Not a valid type</div>;
  return <Team profession={profession} src={src} social={social} name={name} role={role} />;
};
