/** @format */

import React from "react";

const Services = () => {
  return (
    <div className="px-3 md:px-10 py-20 lg:px-36 lg:py-20 bg-gray-950 pb-28">
      <h3 className="text-center text-[#91FF00]">MY SERVICE</h3>
      <p className="text-center text-5xl font-medium lg:py-8 py-5">
        Crafting stories through <br /> design and innovation
      </p>
      <div className="lg:pt-24 pt-16 lg:px-0 px-2 grid grid-cols-1 lg:grid-cols-3 text-center lg:gap-10 gap-16">
        <div className="w-full border-2 border-gray-600 p-12 pt-13 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#91FF00"
            className="size-20 absolute -top-1 left-1/2 tranform -translate-x-1/2 -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <p className="font-bold tracking-widest text-lg pt-5">WEB DESIGN</p>
          <p className="pt-4">
            Building responsive and visually appealing websites that provide a
            seamless user experience while effectively engaging and captivating
            your audience.
          </p>
        </div>
        <div className="w-full border-2 border-gray-600 p-12 pt-13 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#91FF00"
            className="size-20 absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
            />
          </svg>

          <p className="font-bold tracking-widest text-lg pt-5">
            GRAPHIC DESIGN
          </p>
          <p className="pt-4">
            Creating innovative and impactful visuals that communicate your
            brand’s message with clarity and creativity, leaving a lasting
            impression.
          </p>
        </div>
        <div className="w-full border-2 border-gray-600 p-12 pt-13 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="#91FF00"
            className="size-20 absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>

          <p className="font-bold tracking-widest text-lg pt-5">
            TECH TUTORING
          </p>
          <p className="pt-4">
            Offering practical, training designed to empower individuals with
            technical skills for the digital world. I teach Web Developmenta and
            Graphic Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
