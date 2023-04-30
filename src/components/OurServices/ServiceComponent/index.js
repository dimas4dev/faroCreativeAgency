import React from "react";

import BoxSearchIcon from "@assets/images/box.png";
import WalletIcon from "@assets/images/wallet.png";
import WebIcon from "@assets/images/web.png";

const ServiceComponent = ({ id, title, description, image }) => {
  const iconSelector = {
    BoxSearchIcon: BoxSearchIcon,
    WalletIcon: WalletIcon,
    WebIcon: WebIcon,
  };

  const colorSelector = {
    BoxSearchIcon: "BoxSearchIcon",
    WalletIcon: "WalletIcon",
    WebIcon: "WebIcon",
  };

  return (
    <article id={id} className={`Service Service-${colorSelector[image]}`}>
      <figure className={`IconBackGround Service-${colorSelector[image]}`}>
        <img className="Icon" src={iconSelector[image]} alt="" />
      </figure>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </article>
  );
};

export default ServiceComponent;
