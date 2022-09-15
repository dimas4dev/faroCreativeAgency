

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
            <main className="main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/our-directors" element={<Directors />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export { AppRoutes }