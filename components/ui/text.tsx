/** @format */

import React from "react";

const Text: React.FC<{ text1: string; text2: string }> = ({ text1, text2 }) => {
  return (
    <div>
      <div className="flex pt-11 font-black text-4xl">
        <p>{text1}</p>
        <p className="text-[#91FF00]">+</p>
      </div>
      <p className="text-xs pt-1">{text2}</p>
    </div>
  );
};

export default Text;
