import React from "react";
import styles from "../Styles/cardsList.module.scss";

const Card = ({ index, title, imgSrc }) => {
  console.log(index, title, imgSrc);
  return (
    <a className={styles.card} style={{backgroundImage: `url(${imgSrc})`}}>

        <h3>{title}</h3>
    </a>
  );
};

export default Card;
