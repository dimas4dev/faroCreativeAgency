import React from "react";


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
import { DesingInfo } from '@pages/DesingInfo/DesingInfo';
import { SocialMediaContent } from '@pages/SocialMediaContent/SocialMediaContent';
import { SocialMediaAdvertising } from '@pages/SocialMediaAdvertising/SocialMediaAdvertising';
import { GoogleAds } from '@pages/GoogleAds/GoogleAds';
import { WebAnalytics } from '@pages/WebAnalytics/WebAnalytics';
import { Advisory } from '@pages/Advisory/Advisory';
import { SEO } from '@pages/SEO/SEO';
import { EmailMarketing } from '@pages/EmailMarketing/EmailMarketing';
import { WebDevelopment } from '@pages/WebDevelopment/WebDevelopment';



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
      <SwiperSlide className="carouselComponent__slide"><DesingInfo /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><SocialMediaContent /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><SocialMediaAdvertising /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><GoogleAds /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><WebAnalytics /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><Advisory /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><SEO /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><EmailMarketing /></SwiperSlide>
      <SwiperSlide className="carouselComponent__slide"><WebDevelopment /></SwiperSlide>
    </Swiper>
  );
};

export { CarouselComponent };
