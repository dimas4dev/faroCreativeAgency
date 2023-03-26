import React from "react";
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from "@source/AppRoutes"



import "@source/App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};
export default App;
