import React from "react";
import { Link } from "gatsby";

const sizes = {
  default: "py-3 px-8",
  sm: "py-2 px-4",
  lg: "py-4 px-12",
  xl: "py-5 px-16 text-lg",
  full: "w-full",
};

const Button = ({
  children,
  className = "",
  size,
  href,
  color,
}) => {
  return (
    <Link
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        sm:ml-1 
        text-white 
        font-bold 
        py-4 
        rounded 
        outline-none 
        focus:outline-none
        cursor-pointer
        whitespace-nowrap
        mr-1
        mb-1
        uppercase
        text-sm
        shadow
        hover:shadow-lg
        inline-block
        bg-primary-red
        hover:bg-primary-darkred
        active:bg-primary-darkred
        transition-colors
    `}
      to={href}
    >
      {children}
    </Link>
  );
};

export { Button };
