import React from "react";

import esLang from "@source/i18n/es.json";

const OurHiglights = () => {
  return (
    <article className="OurHiglights">
      <div className="OurHiglights__Video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OVgyTgi2nGs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="OurHiglights__Text">
        <h4 className="title">{esLang.OurHighlight.title}</h4>
        <p className="description">{esLang.OurHighlight.description}</p>
      </div>
    </article>
  );
};

export default OurHiglights;
