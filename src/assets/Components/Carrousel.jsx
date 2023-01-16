import React, { useState } from "react";
import ArrowLeft from "../Images/Logos/Arrow-left.svg";
import ArrowRight from "../Images/Logos/Arrow-right.svg";
import styles from "../Styles/slideShow.module.scss";

const Carrousel = ({ pictures }) => {
  const [carrouselPercent, setCarrouselPercent] = useState(0);
  console.log(pictures.length);


  console.log(carrouselPercent);

  return (
    <div className={styles.carrousel}>
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`img ${index}`}
          style={{ transform: `translateX(-${carrouselPercent * 100}%)` }}
        />
      ))}

      {/* <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"/> */}
      <button
        onClick={() => setCarrouselPercent(carrouselPercent <= 0 ? pictures.length - 1 : carrouselPercent - 1)}
        className={styles.btnLeft}
      >
        <img src={ArrowLeft} alt="arrow-left" />
      </button>
      <button
        onClick={() => setCarrouselPercent(carrouselPercent >= pictures.length - 1 ? 0 : carrouselPercent + 1)}
        className={styles.btnRight}
      >
        <img src={ArrowRight} alt="arrow-right" />
      </button>
    </div>
  );
};

export default Carrousel;
