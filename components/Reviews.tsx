/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ButtonBody from "./ui/buttonBody";
import "swiper/css";
import "swiper/css/autoplay";

const reviewsData = [
  {
    name: "TechSavvy is Building",
    handle: "@TheSaviourEking",
    comment: "Good job man. Keep it coming, we see you ☺️",
  },
  {
    name: "ssyt",
    handle: "@ssyt6282",
    comment: "UI looking so good, it's making my code jealous 😎",
  },
  {
    name: "Victor Asuquo ML🧾",
    handle: "@Victor_ML_AI",
    comment: "My boss is cooking",
  },
  {
    name: "Glenzzy",
    handle: "@GlennTanze",
    comment: "Awesome work bro 👏🏽",
  },
  {
    name: "Victor Agu",
    handle: "@victorebuka99",
    comment: "Nice work boss",
  },
  {
    name: "ephraim.go",
    handle: "@EphraimXBlack",
    comment: "nice stuff",
  },
  {
    name: "TCD COMMUNITY MAIN",
    handle: "@tcdcommunity",
    comment: "We love to see it💪🏾💪🏾",
  },
];

const Reviews = () => {
  return (
    <div className="md:py-20 py-10">
      <div className="md:px-36 px-10 pb-5">
        <h2 className="font-medium text-5xl">What People Say</h2>
        <p className="py-3 text-lg text-gray-400 pb-10">
          Here's what people have to say
        </p>
      </div>
      {[false, true].map((reverseDirection, index) => (
        <Swiper
          key={index}
          slidesPerView={4}
          spaceBetween={10}
          effect="fade"
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            520: { slidesPerView: 2, spaceBetween: 10 },
            850: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className={index === 1 ? "pt-4" : ""}
        >
          {reviewsData.map((review, reviewIndex) => (
            <SwiperSlide key={reviewIndex}>
              <ButtonBody padding="pt-5 px-7 pb-8 rounded-2xl h-40 w-full border-none mt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">{review.name}</p>
                    <p className="text-base font-semibold text-gray-500 pt-1">
                      {review.handle}
                    </p>
                  </div>
                  <div>
                    <i className="fa-brands fa-x-twitter fa-2xl"></i>
                  </div>
                </div>
                <p className="text-[1rem] leading-6 font-medium tracking-wide pt-5 text-gray-100">
                  {review.comment}
                </p>
              </ButtonBody>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
};

export default Reviews;
