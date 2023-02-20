import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/cardsList.module.scss";

const Card = ({ index, title, imgSrc, id }) => {

  return (
    <Link
      className={styles.card}
      style={{ backgroundImage: `url(${imgSrc})` }}
      to={`/accomodation_sheet/${id}`}
    >
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
