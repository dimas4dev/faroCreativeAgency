import React from "react";

export const Footer = () => {

  const contactInformation = [
    {
      name: "Call Center",
      contact: "(+57)3508204075",
      href: "https://api.whatsapp.com/send?phone=573508204075"
    },

    {
      name: "Email",
      href: "mailto:fpc.comercial@faropsicopedagogia.org"
    }
    , {
      name: "Instagram",
      href: "https://www.instagram.com/agenciafpc/"
    }
  ]

  return (
    <footer className="footer">
      <p className='footer__title'>Unete a Nosotros</p>
      <div className="footer__content">
        {contactInformation.map((element, index) => <a target="_blank" key={index} href={element.href}>{element.name}</a>)}

      </div>

    </footer>
  );
};
