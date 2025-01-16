/** @format */

import React from "react";
import ButtonBody from "./ui/buttonBody";

const About = () => {
  return (
    <div className="grid grid-col-1 pt-24 lg:grid-cols-2  md:px-16 lg:px-36 lg:py-36 px-3 py-10 pb-12 lg:gap-24 gap-10 ">
      <div className="lg:col-span-1 col-span-2 relative lg:px-0 px-3">
        <div className="lg:w-[28rem] lg:h-[28rem] w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#91FF00] place-self-center lg:place-self-center" />
        <img
          src="/mypic4.png"
          alt=""
          className="absolute bottom-[0.04rem] lg:left-8 lg:w-[99%] w-80 object-fill z-10 place-self-center lg:place-self-start overflow-hidden left-16 md:left-48 "
        />
      </div>
      <div className="lg:col-span-1 col-span-2 px-3 lg:px-0 lg:pl-10">
        <h3 className="text-sm lg:pb-6">ABOUT - MICHAEL UBEK</h3>
        <h4 className="text-5xl font-medium pb-10">Design and Innovation</h4>
        <p className="">
          As a seasoned Frontend Developer and Graphic Designer, I help
          businesses and individuals create stunning digital experiences that
          drive results. With expertise in website development and graphic
          design, I'll work closely with you to bring your vision to life.{" "}
          <br />
          <br />
          Contact me today to schedule a consultation and discover how we can
          create something amazing together.
        </p>
        <div className="flex lg:gap-6 gap-2">
          <div className="mt-9 ">
            <a href="https://x.com/UbekMichael" target="_blank">
              <ButtonBody
                bg="hover:bg-[#91FF00] hover:text-black"
                padding="p-3 lg:w-[3.1rem] lg:h-12 h-8 flex justify-center items-center"
              >
                <i className="fa-brands fa-x-twitter lg:fa-xl fa-sm "></i>
              </ButtonBody>
            </a>
          </div>
          <div className="mt-9 ">
            <a href="https://github.com/UbekM" target="_blank">
              <ButtonBody
                bg="hover:bg-[#91FF00] hover:text-black lg:w-[3.1rem] lg:h-12 h-8 flex justify-center items-center"
                padding="p-3"
              >
                <i className="fa-brands fa-github lg:fa-xl fa-lg"></i>
              </ButtonBody>
            </a>
          </div>
          <div className="mt-9">
            <a href="https://web.facebook.com/michael.ubek" target="_blank">
              <ButtonBody
                bg="hover:bg-[#91FF00] hover:text-black lg:w-[3rem] lg:lg:h-12 h-8 flex justify-center items-center"
                padding="p-3"
              >
                <i className="fa-brands fa-facebook-f lg:fa-xl fa-lg"></i>
              </ButtonBody>
            </a>
          </div>
          <div className="mt-9 ">
            <a
              href="https://www.linkedin.com/in/michael-ubek-1a56201b0/"
              target="_blank"
            >
              <ButtonBody
                bg="hover:bg-[#91FF00] hover:text-black lg:w-[3.1rem] lg:h-12 h-8 flex justify-center items-center"
                padding="p-3"
              >
                <i className="fa-brands fa-linkedin-in lg:fa-xl fa-lg"></i>
              </ButtonBody>
            </a>
          </div>
          <div className="mt-9 ">
            <a href="https://wa.me/+2348028536256" target="_blank">
              <ButtonBody
                bg="hover:bg-[#91FF00] hover:text-black lg:w-[3.1rem] lg:h-12 h-8 flex justify-center items-center"
                padding="p-3"
              >
                <i className="fa-brands fa-whatsapp text-[1.45rem] text-center fa-lg"></i>
              </ButtonBody>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
