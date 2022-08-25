import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BurbujasSombrero from "@assets/images/PiezasBanner/BannerFondoVerde.svg";
import BannerPoderosa from "@assets/images/PiezasBanner/BannerPoderosa.svg";
import BannerFuerza from "@assets/images/PiezasBanner/BannerFuerza.svg";
import BannerCreativa from "@assets/images/PiezasBanner/BannerCreativa.svg";

const CarouselComponent = () => {
  return (
    <>
      <Carousel>
        <div>
          <img alt="" src={BannerPoderosa} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img alt="" src={BurbujasSombrero} />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    </>
  );
};

export { CarouselComponent };
