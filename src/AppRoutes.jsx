

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import { Home } from '@pages/Home/Home';
import { Directors } from '@pages/Directors/Directors';
import { Companies } from '@pages/Companies/Companies';



function AppRoutes() {
    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/our-directors" element={<Directors />} />
                    <Route path="/our-companies-support" element={<Companies />} />

                </Routes>
            </main>
            <Footer />
        </>
    );
}

export { AppRoutes }