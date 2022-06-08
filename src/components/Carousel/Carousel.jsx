import React from "react";
import { Navigation } from "swiper";

import BurbujasSombrero from "@assets/images/PiezasBanner/BannerFondoVerde.svg";
import BannerPoderosa from "@assets/images/PiezasBanner/BannerPoderosa.svg";
import BannerFuerza from "@assets/images/PiezasBanner/BannerFuerza.svg";
import BannerCreativa from "@assets/images/PiezasBanner/BannerCreativa.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

const CarouselComponent = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img className="slider1" src={BurbujasSombrero} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerPoderosa} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerCreativa} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export { CarouselComponent };
