

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import { Home } from '@pages/Home/Home';
import { Directors } from '@pages/Directors/Directors';



function AppRoutes() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/our-directors" element={<Directors />} />
            </Routes>
            <Footer />
        </>
    );
}

export { AppRoutes }