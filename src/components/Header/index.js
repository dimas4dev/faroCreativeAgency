import React from "react";

import FaroLogo from "@assets/images/LogoFPC.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <ul className="header__list">
          <li className="listPrincipalElement">
            <img className="logoFPC" src={FaroLogo} alt="" />
            <h1 className="FPCTitle">Faro Agencia Creativa</h1>
          </li>
          <li className="listPrincipalElement">
            <ul className="listSecondary">
              <li className="listSecondary__element">
                <a className="listSecondary__Url" href="#home">
                  Home
                </a>
              </li>
              <li className="listSecondary__element">
                <a className="listSecondary__Url" href="#quienes-somos">
                  Quienes Somos
                </a>
              </li>
              <li className="listSecondary__element">
                <a className="listSecondary__Url" href="#nuestros-servicios">
                  Nuestros servicios
                </a>
              </li>
              <li className="listSecondary__element">
                <a className="listSecondary__Url" href="#contactanos">
                  Contactanos
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  );
};
export default Header;
