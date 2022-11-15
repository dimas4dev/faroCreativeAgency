import React from "react";

import IgIcon from "@assets/images/Icons/IGIcon.png"
import EmailIcon from "@assets/images/Icons/EmailIcon.png"
import WaIcon from "@assets/images/Icons/WAIcon.png"

export const Footer = () => {

  const contactInformation = [
    {
      name: "Call Center",
      contact: "(+57)3508204075",
      href: "https://api.whatsapp.com/send?phone=573508204075",
      img: WaIcon
    },

    {
      name: "Email",
      href: "mailto:fpc.comercial@faropsicopedagogia.org",
      img: EmailIcon

    }
    , {
      name: "Instagram",
      href: "https://www.instagram.com/agenciafpc/",
      img: IgIcon

    }
  ]

  return (
    <footer className="footer">
      <p className='footer__title'>Unete a Nosotros</p>
      <div className="footer__content">
        {contactInformation.map((element, index) => <a target="_blank" key={index} href={element.href}><img className='footer__content--img' src={element.img} /> </a>)}
      </div>

    </footer>
  );
};
