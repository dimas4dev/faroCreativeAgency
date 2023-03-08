import React from 'react'

const Header = () => {
  return (
    <>
      <header className="header">
        <ul>
          <li>Faro Agencia Creativa</li>
          <li>
            <ul>
              <li>
                <a href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#quienes-somos">
                  Quienes Somos
                </a>
              </li>
              <li>
                <a href="#nuestros-servicios">
                  Nuestros servicios
                </a>
              </li>
              <li>
                <a href="#contactanos">
                  Contactanos
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </header>
    </>
  )
}
export default Header