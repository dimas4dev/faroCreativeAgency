import React from "react";

const Offer = (props) => {
  const { title, cost } = props;
  return (
    <>
      <div className="artboard">
        <div className="card">
          <div className="card__side card__side--back">
            <h2 className="Title__Card">{cost}</h2>
          </div>

          <div className="card__side card__side--front">
            <div className="card__theme">
              <img
                src="https://faropsicopedagogia.org/wp-content/uploads/Anny-Jeisson.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="titleOffer">{title}</h2>
      </div>
    </>
  );
};

export { Offer };
