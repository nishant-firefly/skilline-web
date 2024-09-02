import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconBoxType, IconBoxStyle1 } from "./IconBoxStyle1";
import { IconBoxStyle2 } from "./IconBoxStyle2";

type MainItemType = {
  type?: "style-1" | "style-2";
  isBordered?: boolean;
} & IconBoxType;

export const IconBox = ({
  title,
  description,
  icon,
  link,
  type = "style-1",
  isBordered = false,
}: MainItemType) => {
  const IconType = {
    "style-1": IconBoxStyle1,
    "style-2": IconBoxStyle2,
  };

  const MainIconBox = IconType[type] || <div>{type} is not valid type</div>;
  return (
    <MainIconBox
      title={title}
      description={description}
      icon={icon}
      link={link}
      isBordered={isBordered}
    />
  );
};
