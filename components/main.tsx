/** @format */

import React from "react";
import Typewriter from "../components/Typewriter";
import ButtonBody from "./ui/buttonBody";
import Text from "./ui/text";

const Main = () => {
  return (
    <div className="lg:px-36 lg:flex flex flex-col relative lg:pb-28">
      <img
        src="/mine.png"
        alt=""
        className="lg:w-auto lg:h-[37rem] w-96 lg:pt-0 pt-12 lg:absolute absolute bottom-0 order-1 lg:right-36 place-self-center lg:place-self-start z-10"
      />
      <div className="lg:w-1/3  bg-[#91FF00] lg:h-full h-40 order-2 lg:absolute top-0 right-0" />
      <div className="lg:pb-0 pb-[26rem] px-7 sm:place-self-center lg:place-self-start">
        <h1 className="text-6xl font-medium lg:pt-64 pt-32">I'm Michael</h1>
        <div className=" my-6 w-fit text-[1.3rem] p-1 bg-[#91FF00]">
          <div className="p-1 px-4 bg-[#FEEEB7]">
            <p className="text-black font-extrabold">
              I AM A <Typewriter />{" "}
            </p>
          </div>
        </div>
        <ButtonBody>Get in touch ➜ </ButtonBody>
        <div className="flex gap-7">
          <Text text1="30" text2="Github Repos" />
          <Text text1="10" text2="Design Experience" />
          <Text text1="4" text2="Years Experience" />
        </div>
      </div>
    </div>
  );
};

export default Main;
