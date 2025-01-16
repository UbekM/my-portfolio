/** @format */

import React from "react";

type ButtonBodyProps = {
  children: React.ReactNode;
  rounded?: string;
  bg?: string;
  padding?: string;
};

const ButtonBody: React.FC<ButtonBodyProps> = ({
  rounded = "rounded-[4px]",
  children,
  bg = "",
  padding = "p-3 px-6",
}) => {
  return (
    <div
      className={` bg-[#0E0E0E] text-sm border-[#FFFFFF26] border-[1px] w-fit ${rounded} ${bg} ${padding}`}
    >
      {children}
    </div>
  );
};

export default ButtonBody;
