import React from "react";

import { Header } from "@components/Header/Header";

import "@source/App.scss";
import { CarouselComponent } from "@components/Carousel/Carousel";

const App = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
    </>
  );
};
export default App;
