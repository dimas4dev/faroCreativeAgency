import React from "react";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

import LogoFPC from "@assets/images/LOGO_FPC/FPCLogo.svg";
import LogoFaro from "@assets/images/LOGO_FARO/faro4.svg";

const Header = () => {
  return (
    <header className="header">
      <section className="header-logos">
        <ul>
          <li>
            <img
              className="header-logos--size"
              src={LogoFaro}
              alt="Logo Faro"
            />
          </li>
          <li>
            <img className="header-logos--size" src={LogoFPC} alt="Logo FPC" />
          </li>
        </ul>
      </section>
      <nav className="nav">
        <div className="nav__container">
          <label htmlFor="menu" className="nav__label">
            <FontAwesomeIcon
              className="nav__img"
              icon="fa-solid fa-bars"
              size="lg"
            />
          </label>
          <input className="nav__input" type="checkbox" id="menu" />
          <div className="nav__menu">
            <a href="#" className="nav__item">
              Lo que somos{" "}
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
