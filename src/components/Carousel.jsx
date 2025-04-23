import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useFetch } from "../hooks/useFetch";

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const { data } = useFetch(
    `https://dummyjson.com/products/category/groceries?limit=10`
  );

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {swiperReady && data?.products && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {data.products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full h-96 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-black/60 px-3 py-1 rounded">
                  {product.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Nav Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-1 lg:left-[-1.5em] transform -translate-y-1/2 bg-[#caeaf5] text-blue-500 p-4 rounded-full z-10 hover:bg-[#d4eaf1]"
      >
        <FaChevronLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-1 lg:right-[-1.5em] transform -translate-y-1/2 bg-[#caeaf5] text-blue-500 p-4 rounded-full z-10 hover:bg-[#d4eaf1]"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
