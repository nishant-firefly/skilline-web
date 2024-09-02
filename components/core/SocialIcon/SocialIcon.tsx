import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const SocialIcon = ({
  link,
  label,
  icon,
}: {
  link: string;
  label: string;
  icon: string;
}) => {
  const IconList: any = {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
  };

  const Icons: any = IconList[icon] || IconList["facebook"];
  return (
    <Link
      href={link}
      className="p-2 rounded-lg flex items-center border border-gray-300 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
      title={label}
    >
      <Icons />
    </Link>
  );
};

export default SocialIcon;
