import React, { useState } from "react";
import ArrowLeft from "../Images/Logos/Arrow-left.svg";
import ArrowRight from "../Images/Logos/Arrow-right.svg";
import styles from "../Styles/accomodationSheet.module.scss";

const SlideShow = ({ pictures }) => {
  const [carrouselIndex, setcarrouselIndex] = useState(0);

  console.log(carrouselIndex);
  return (
    <div className={styles.carrousel}>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`img ${index}`}
          style={{ transform: `translateX(-${carrouselIndex * 100}%)` }}
        />
      ))}

      {pictures.length > 1 ? (
        <>
          <button
            onClick={() =>
              setcarrouselIndex(
                carrouselIndex <= 0
                  ? pictures.length - 1
                  : carrouselIndex - 1
              )
            }
            className={styles.btnLeft}
          >
            <img src={ArrowLeft} alt="arrow-left" />
          </button>
          <button
            onClick={() =>
              setcarrouselIndex(
                carrouselIndex >= pictures.length - 1
                  ? 0
                  : carrouselIndex + 1
              )
            }
            className={styles.btnRight}
          >
            <img src={ArrowRight} alt="arrow-right" />
          </button>
          <h4 className={styles.indexClass}>{carrouselIndex + 1}/{pictures.length}</h4>
        </>
      ) : null}

    </div>
  );
};

export default SlideShow;
