import React from "react";

import MainHomeImage from "@assets/images/MainHomeImage.jpg";

const HomeComponent = () => {
  return (
    <section className="HomeComponent">
      <article className="HomeComponent__text">
        <h2 className="HomeTitle">Titulo de Quienes somos</h2>
        <p className="HomeDescription">Descripcion de Quienes somos</p>
        <button className="HomeCTA">Contactanos</button>
      </article>
      <figure className="HomeComponent__image">
        <img className="MainImage" src={MainHomeImage} alt="Main Image" />
      </figure>
    </section>
  );
};

export default HomeComponent;
