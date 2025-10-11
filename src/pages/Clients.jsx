import Splitter from "../components/Splitter";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import ClientsCard from "../components/ClientsCard";
import { clients } from "../data/clients";
import SvgShape from "../components/SvgShape";

export default function Clients() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
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

      <div className="mt-16">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true, el: null }}
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={idx}>
              <ClientsCard data={client} />
            </SwiperSlide>
          ))}

          <div className="w-[80%] mx-auto flex gap-5 mt-16">
            <button ref={prevRef}>
              <SvgShape outline={true} />
            </button>
            <button ref={nextRef}>
              <SvgShape outline={true} />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
