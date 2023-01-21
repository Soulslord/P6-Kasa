import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/cardsList.module.scss";

const Card = ({ index, title, imgSrc }) => {
  return (
    <Link
      className={styles.card}
      style={{ backgroundImage: `url(${imgSrc})` }}
      to={`/card/${index}`}
    >
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
