import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import FundOftalmo from "@assets/images/Sponsors/FundOftalmo.svg";
import KellyMolina from "@assets/images/Sponsors/KellyMolina.svg";
import LivingJesus from "@assets/images/Sponsors/LivingJesus.svg";
import MisionLuzVida from "@assets/images/Sponsors/MisionLuzVida.svg";
import Santiamen from "@assets/images/Sponsors/Santiamen.svg";
import OftaPiñeres from "@assets/images/Sponsors/OftaPiñeres.svg";
import Winny from "@assets/images/Sponsors/Winny.svg";

const OurSponsors = ({ text }) => {
  const { title, description } = text;
  return (
    <section className="ourSponsors">
      <article className="ourSponsors__description">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </article>
      <article className="ourSponsors__Carousel">
        <Swiper
          // spaceBetween={50}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          navigation
        >
          <SwiperSlide>
            <img src={FundOftalmo} alt="Fundacion Oftamologica" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={KellyMolina} alt="Kelly Molina" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={LivingJesus} alt="Libreria Living Jesus" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MisionLuzVida} alt="Mision Luz Vida" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Santiamen} alt="Santiamen" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={OftaPiñeres} alt="Oftamologica Piñeres" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Winny} alt="Winny" />
          </SwiperSlide>
        </Swiper>
      </article>
    </section>
  );
};

export default OurSponsors;
