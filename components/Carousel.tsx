/** @format */

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  const skills = [
    "NEXT JS",
    "REACT",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "TAILWIND CSS",
    "BOOTSTRAP",
    "FIREBASE",
    "GITHUB",
    "FRAMER MOTION",
    "SWIPER JS",
    "WORDPRESS",
    "CORELDRAW",
    "PHOTOSHOP",
    "CANVA",
  ];

  return (
    <div className="w-full px-6 text-center lg:px-36 mx-auto py-6 bg-gray-800">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={7}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // Adjust settings for smaller screens
          320: {
            slidesPerView: 2, // Very small screens
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 3, // Small screens
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4, // Tablets
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6, // Laptops
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <p className="font-medium text-sm tracking-wider">{skill}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
