import React from "react"

import FaroLogo from "@assets/images/LogoFPCBlanco.png";


const Footer = ({ text }) => {

    const { title, description, columnWhatWeDo } = text;

    return (
        <footer>
            <div className="footer-columns">
                <div className="column">
                    <div className="company-info">
                        <div className="company-info--title">
                            <img src={FaroLogo} alt="Logo de la empresa" />
                            <h3>{title}</h3>
                        </div>
                        <p>{description}</p>
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>{columnWhatWeDo.title}</h3>
                    <ul>
                        <li><a href="#">Enlace 1</a></li>
                        <li><a href="#">Enlace 2</a></li>
                        <li><a href="#">Enlace 3</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Columna 2</h3>
                    <ul>
                        <li><a href="#">Enlace 1</a></li>
                        <li><a href="#">Enlace 2</a></li>
                        <li><a href="#">Enlace 3</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Columna 3</h3>
                    <ul>
                        <li><a href="#">Enlace 1</a></li>
                        <li><a href="#">Enlace 2</a></li>
                        <li><a href="#">Enlace 3</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer
