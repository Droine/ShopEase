// SwiperCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    text: "Slide One",
    image: "https://via.placeholder.com/600x300?text=Slide+1",
  },
  {
    id: 2,
    text: "Slide Two",
    image: "https://via.placeholder.com/600x300?text=Slide+2",
  },
  {
    id: 3,
    text: "Slide Three",
    image: "https://via.placeholder.com/600x300?text=Slide+3",
  },
];

const Carousel = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-64 flex flex-col items-center justify-center bg-gray-100 rounded-md overflow-hidden">
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black/60 px-3 py-1 rounded">
                {slide.text}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
