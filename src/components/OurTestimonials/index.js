import React, { useState, useEffect } from "react";

import { items } from "./Data";
import ArrowLeft from "@assets/images/TestimonialsCarousel/chevron-left-solid.svg";
import ArrowRight from "@assets/images/TestimonialsCarousel/chevron-right-solid.svg";

const Carousel = () => {
  const [leftCard, setLeftCard] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rightCard, setRightCard] = useState(0);
  const [arrayLength, setArrayLength] = useState(0);

  useEffect(() => {
    const length = getLength();
    for (let i = 0; i < length; i++) {
      if (items[i].status === "active") {
        setLeftCard(i - 1);
        setActiveIndex(i);
        setRightCard(i + 1);
        setArrayLength(length);
      }
    }
  }, []);

  const getLength = () => {
    let length = 0;
    for (let i = 0; i < items.length; i++) {
      length++;
    }
    return length;
  };

  const activatePreviousSlide = () => {
    let leftIndex = 0;
    if (leftCard - 1 === -1) {
      leftIndex = arrayLength - 1;
    } else {
      leftIndex = leftCard - 1;
    }
    setRightCard(activeIndex);
    setActiveIndex(leftCard);
    setLeftCard(leftIndex);
  };

  const activateNextSlide = () => {
    let rightIndex = 0;
    if (rightCard + 1 === arrayLength) {
      rightIndex = 0;
    } else {
      rightIndex = rightCard + 1;
    }
    setLeftCard(activeIndex);
    setActiveIndex(rightCard);
    setRightCard(rightIndex);
  };

  return (
    <div className="carousel-container">
      <div className="cards">
        <div className="card leftCard">
          <img
            className="avatars"
            src={items[leftCard].imgSrc}
            alt="avatar"
          ></img>
          <div className="text">
            <h3 className="name">{items[leftCard].name} </h3>
            <i className="position">{items[leftCard].position}</i>
            <p className="testimony">{items[leftCard].quote}</p>
          </div>
        </div>
        <div className="card active">
          <img
            className="avatars"
            src={items[activeIndex].imgSrc}
            alt="avatar"
          ></img>
          <span>
            <div className="text">
              <h3 className="name">{items[activeIndex].name}</h3>
              <i className="position">{items[activeIndex].position}</i>
              <p className="testimony">{items[activeIndex].quote}</p>
            </div>
            <div className="arrow-container">
              <img
                src={ArrowLeft}
                style={{ fill: "hsla(221, 0%, 49%, 0.98)" }}
                className="arrow arrow-left"
                onClick={activatePreviousSlide}
              />
              <img
                src={ArrowRight}
                style={{ fill: "hsla(221, 0%, 49%, 0.98)" }}
                className="arrow arrow-right"
                onClick={activateNextSlide}
              />
            </div>
          </span>
        </div>
        <div className="card rightCard">
          <img
            className="avatars"
            src={items[rightCard].imgSrc}
            alt="avatar"
          ></img>
          <div className="text">
            <h3 className="name">{items[rightCard].name}</h3>
            <i className="position">{items[rightCard].position}</i>
            <p className="testimony">{items[rightCard].quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
