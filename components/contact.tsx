/** @format */

import React from "react";
import ButtonBody from "./ui/buttonBody";
import GoogleMap from "./ui/GoogleMap";

const Contact = () => {
  return (
    <div className="bg-gray-900 px-6 md:px-16 py-3 lg:px-36 lg:py-20 pt-28 grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10">
      <ButtonBody rounded="rounded-[10px]">
        <div className="lg:p-6 lg:px-3 p-3 px-0 space-y-4">
          <h3 className="tracking-widest text-gray-500">GET IN TOUCH</h3>
          <p className="text-3xl">Let's Discuss Projects</p>
          <p className="text-gray-400 text-[0.85rem] pb-3">
            Get in touch with us for any kind of help. We are here to give you
            the best and also here to help you to find your projects.
          </p>
          <form action="submit">
            <fieldset className="space-y-2 w-full grid gap-5 text-sm">
              <div className="flex w-full gap-4">
                <div>
                  {" "}
                  <label htmlFor="Name" className="text-[#484a4a]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="w-full p-2 pl-3  mt-2 bg-[#1A1A1A] text-[#6F6F6F] rounded-[0.25rem] border-[#FFFFFF26] border-[1px] focus:ring-0 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="Email" className="text-[#484a4a]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full p-2 pl-3  mt-2 bg-[#1A1A1A] text-[#6F6F6F] rounded-[0.25rem] border-[#FFFFFF26] border-[1px] focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full">
                {" "}
                <label htmlFor="Subject" className="text-[#484a4a]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject *"
                  className="w-full p-2  pl-3 mt-2 bg-[#1A1A1A] text-[#6F6F6F] rounded-[0.25rem] border-[#FFFFFF26] border-[1px] focus:outline-none "
                />
              </div>
              <div className="w-full">
                <label htmlFor="Message" className="w-full text-[#484a4a]">
                  Message
                </label>{" "}
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={7}
                  placeholder="Message *"
                  className="w-full p-2 mt-2 pl-3 bg-[#1A1A1A] text-[#6F6F6F] rounded-[0.25rem] border-[#FFFFFF26] border-[1px] focus:outline-none"
                ></textarea>{" "}
              </div>
            </fieldset>
            <button className="py-2 px-4 text-center w-full mt-6 rounded-[0.2rem] text-gray-950 font-semibold text-xs bg-[white]">
              Send Message
            </button>
          </form>
        </div>
      </ButtonBody>
      <div className="pb-16 lg:pl-20">
        <h2 className="text-2xl font-medium pb-6 ">
          Let's Discuss Your Project
        </h2>
        <div className="space-y-6">
          <div className="flex gap-3">
            <ButtonBody>P</ButtonBody>
            <div>
              <h3 className="text-bold">Phone</h3>
              <a
                href="tel:+234 802 853 6256"
                className="text-[0.8rem] text-gray-400"
              >
                +234 802 853 6256
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <ButtonBody>E</ButtonBody>
            <div>
              <h3 className="text-bold">Mail</h3>
              <a
                href="mailto:ubekmichael@gmail.com"
                className="text-[0.8rem] text-gray-400"
              >
                ubekmichael@gmail.com
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <ButtonBody>A</ButtonBody>
            <div>
              <h3 className="text-bold">Phone</h3>
              <p className="text-[0.8rem] text-gray-400">
                Ediene, Off Idoro Road, Uyo, <br />
                Akwa Ibom, Nigeria
              </p>
            </div>
          </div>
          <div className="mt-10">
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
