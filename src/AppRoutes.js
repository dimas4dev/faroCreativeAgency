import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "@components/Home/index";
import HeaderPage from "@components/Header/index";
import OurSponsors from "@components/OurSponsors/index";

import esLang from "@source/i18n/es.json";

function AppRoutes() {
  return (
    <>
      <HeaderPage />
      <HomeComponent text={esLang.HomeComponent} />
      <OurSponsors text={esLang.OurSponsors} />
    </>
  );
}

export { AppRoutes };
