import React from "react";
import ServiceComponent from "./ServiceComponent/index";

import esLang from "@source/i18n/es.json";

const OurServices = ({ text }) => {
  return (
    <section className="ourServices">
      <article className="ourServices__title">
        <h3 className="title">{text.title}</h3>
        <p className="description">{text.description}</p>
      </article>
      <article className="ourServices__description">
        {esLang.Services.map((value, id) => (
          <ServiceComponent
            key={`ServiceComponent-${id}`}
            id={`ServiceComponent-${id}`}
            title={value.title}
            description={value.description}
            image={value.image}
            color={value.color}
          />
        ))}
      </article>
    </section>
  );
};

export default OurServices;
