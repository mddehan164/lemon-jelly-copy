import Splitter from "../components/Splitter";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Clients() {
  return (
    <div
      id="clients"
      className="w-full min-h-screen pt-32 md:px-16 px-10 py-28 xl:px-32 2xl:px-44 bg-black text-white"
    >
      <h1 className="text-center text-6xl font-semibold text-jelly">
        <Splitter text="Fresh words from clients" cls={"left-split"} />
      </h1>
      <h4 className="text-center mt-8 text-xl lg:text-2xl text-gray-300 scale-x-110">
        hear what our happy clients say about our services
      </h4>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
