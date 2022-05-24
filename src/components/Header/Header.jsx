import React from "react";

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
      <section className="header-menu">
        <ul>
          <li>Lo que somos </li>
          <li> / </li>
          <li>Nuestra Obra</li>
          <li> / </li>
          <li>Todo Cuenta</li>
        </ul>
      </section>
    </header>
  );
};

export { Header };
