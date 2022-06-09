import React from "react";

import { Header } from "@components/Header/Header";

import "@source/App.scss";
import { CarouselComponent } from "@components/Carousel/Carousel";
import { Footer } from "@components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Footer />
    </>
  );
};
export default App;
