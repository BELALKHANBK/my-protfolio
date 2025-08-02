import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://wa.me/8801605342742?text=Hello%20Belal%2C%20I%20want%20to%20contact%20you",
    label: "WhatsApp",
    icon: <FaWhatsapp />,
    bgColor: "bg-green-500 hover:bg-green-600",
  },
  {
    href: "https://www.facebook.com/yourprofile",
    label: "Facebook",
    icon: <FaFacebookF />,
    bgColor: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "https://github.com/BELALKHANBK",
    label: "GitHub",
    icon: <FaGithub />,
    bgColor: "bg-gray-800 hover:bg-gray-900",
  },
  {
    href: "https://www.linkedin.com/in/yourprofile",
    label: "LinkedIn",
    icon: <FaLinkedinIn />,
    bgColor: "bg-blue-700 hover:bg-blue-800",
  },
  {
    href: "https://twitter.com/yourprofile",
    label: "Twitter",
    icon: <FaTwitter />,
    bgColor: "bg-blue-400 hover:bg-blue-500",
  },
];

const SocialFloating = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-4 z-50">
      {socialLinks.map(({ href, label, icon, bgColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat on ${label}`}
          className={`${bgColor} text-white p-4 rounded-full shadow-lg flex items-center justify-center w-14 h-14 transition-colors duration-300`}
          title={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialFloating;
