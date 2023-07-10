import React from "react"

import FaroLogo from "@assets/images/LogoFPCBlanco.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'



const Footer = ({ text }) => {

    const { title, description, columnWhatWeDo, columAboutUs, columnContact } = text;

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
                        <ul className="social-icons">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '32px' }} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} style={{ fontSize: '32px' }} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} style={{ fontSize: '32px' }} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <h3>{columnWhatWeDo.title}</h3>
                    <ul>
                        {columnWhatWeDo.items.map((item, index) => (<li key={`WhatWeDo-${index}`}><p style={{ padding: 0 }}>{item}</p>  </li>))}
                    </ul>
                </div>
                <div className="column">
                    <h3> {columAboutUs.title}</h3>
                    <ul>
                        {columAboutUs.items.map((item, index) => (<li key={`AboutUs-${index}`}><a target="_blank" href={item.redirectUrl}>{item.title}</a></li>))}

                    </ul>
                </div>
                <div className="column">
                    <h3> {columnContact.title}</h3>
                    <ul>
                        {columnContact.items.map((item, index) => (<li key={`SocialMedia-${index}`}><a target="_blank" href={item.redirectUrl}>{item.nameSocialMedia}</a></li>))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer
