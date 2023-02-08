import React, { useState, useEffect } from "react";
import ArrowLeft from "../Images/Logos/Arrow-left.svg";
import ArrowRight from "../Images/Logos/Arrow-right.svg";
import styles from "../Styles/carousel.module.scss";

const Carousel = ({ pictures }) => {
  const [carouselIndex, setcarouselIndex] = useState(0);

  return (
    <>
    <div className={styles.carrousel}>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`img ${index}`}
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        />
      ))}

      {pictures.length > 1 ? (
        <>
          <button
            onClick={() =>
              setcarouselIndex(
                carouselIndex <= 0 ? pictures.length - 1 : carouselIndex - 1
              )
            }
            className={styles.btnLeft}
          >
            <img src={ArrowLeft} alt="arrow-left" />
          </button>
          <button
            onClick={() =>
              setcarouselIndex(
                carouselIndex >= pictures.length - 1 ? 0 : carouselIndex + 1
              )
            }
            className={styles.btnRight}
          >
            <img src={ArrowRight} alt="arrow-right" />
          </button>
          <h4 className={styles.indexClass}>
            {carouselIndex + 1}/{pictures.length}
          </h4>
        </>
      ) : null}
    </div>
    </>

  );
};

export default Carousel;
