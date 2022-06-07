import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

import LogoFPC from "@assets/images/LOGO_FPC/FPCLogo.svg";
import LogoFaro from "@assets/images/LOGO_FARO/faro4.svg";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <section className="header-logos">
          <div className="header--images">
            <img
              className="header-logos--size"
              src={LogoFaro}
              alt="Logo Faro"
            />

            <img className="header-logos--size " src={LogoFPC} alt="Logo FPC" />
          </div>
          <div className="header--title">
            <h1>Faro Agencia Creativa</h1>
          </div>
        </section>
        <div className="nav__container">
          <label htmlFor="menu" className="nav__label">
            <FontAwesomeIcon className="nav__img" icon={faBars} size="lg" />
          </label>
          <input className="nav__input" type="checkbox" id="menu" />
          <div className="nav__menu">
            <a href="#" className="nav__item">
              Lo que somos
            </a>
            <a href="#" className="nav__item">
              Nuestra Obra
            </a>
            <a href="#" className="nav__item">
              Todo Cuenta
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Header };
