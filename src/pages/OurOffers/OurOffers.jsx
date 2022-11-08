import { Offer } from "@components/Offer/Offer";
import React from "react";

const OurOffers = () => {
  const Offers = [{ title: "Rayo", cost: "30 Horas" }, { title: "Trueno", cost: "48 Horas" }, { title: "Relampago", cost: "75 Horas" },]
  return (
    <>
      <section className="OffersPage">
        {Offers.map((offer, index) => <Offer key={index} title={offer.title} Img={"crack"} cost={offer.cost} />)}

      </section>
    </>
  );
};

export { OurOffers };
