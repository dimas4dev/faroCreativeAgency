import React from "react";

import HomeComponent from "@components/Home/index";
import HeaderPage from "@components/Header/index";
import OurSponsors from "@components/OurSponsors/index";

import esLang from "@source/i18n/es.json";
import OurServices from "@components/OurServices/index";
import OurHiglights from "@components/OurHiglights/index";
import OurTestimonials from "@components/OurTestimonials/index";

function AppRoutes() {
  return (
    <>
      <HeaderPage />
      <HomeComponent text={esLang.HomeComponent} />
      <OurSponsors text={esLang.OurSponsors} />
      <OurServices text={esLang.OurServices} />
      <OurHiglights text={esLang.OurHiglights} />
      <OurTestimonials text={esLang.OurTestimonials} />
    </>
  );
}

export { AppRoutes };
