import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

import BurbujasSombrero from "@assets/images/PiezasBanner/BannerFondoVerde.svg";
import BannerPoderosa from "@assets/images/PiezasBanner/BannerPoderosa.svg";
import BannerFuerza from "@assets/images/PiezasBanner/BannerFuerza.svg";
import BannerCreativa from "@assets/images/PiezasBanner/BannerCreativa.svg";



const CarouselComponent = () => {
  return (
    <Swiper

      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="carouselComponent"
    >
      <SwiperSlide className="carouselComponent__slide"> <img src={BannerCreativa} alt="" /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><img src={BannerPoderosa} alt="" /></SwiperSlide>

    </Swiper>
  );
};

export { CarouselComponent };
