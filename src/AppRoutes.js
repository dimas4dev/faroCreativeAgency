import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeComponent from "@components/Home/index";
import HeaderPage from "@components/Header/index";

function AppRoutes() {
  return (
    <>
      <HeaderPage />
      <HomeComponent />
    </>
  );
}

export { AppRoutes };
