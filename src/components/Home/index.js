import React from "react";

import MainHomeImage from "@assets/images/MainHomeImage.jpg";

const HomeComponent = (props) => {
  const { text } = props;
  const { title, description, CTAButton } = text;

  return (
    <section className="HomeComponent">
      <article className="HomeComponent__text">
        <div className="text">
          <h2 className="HomeTitle">{title}</h2>
          <p className="HomeDescription">{description}</p>
        </div>
        <div className="CTA">
          <button className="HomeCTA">{CTAButton}</button>
        </div>
      </article>
      <figure className="HomeComponent__image">
        <img className="MainImage" src={MainHomeImage} alt="Main Image" />
      </figure>
    </section>
  );
};

export default HomeComponent;
