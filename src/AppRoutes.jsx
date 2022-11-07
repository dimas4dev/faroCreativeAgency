

import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import { Home } from '@pages/Home/Home';
import { Directors } from '@pages/Directors/Directors';
import { Companies } from '@pages/Companies/Companies';
import { Goal } from "@pages/Goal/Goal"
import { DesingInfo } from '@pages/DesingInfo/DesingInfo';



function AppRoutes() {
    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/our-directors" element={<Directors />} />
                    <Route path="/our-companies-support" element={<Companies />} />
                    <Route path="/our-goal" element={<Goal />} />
                    <Route path="desing-info" element={<DesingInfo />} />


                </Routes>
            </main>
            <Footer />
        </>
    );
}

export { AppRoutes }