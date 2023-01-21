import React from "react";
import styles from "../Styles/banner.module.scss";

const Banner = ({ image, text, descriptionImg, bannerType }) => {
  return (
      <div
        className={`${styles.banner} ${
          bannerType === "homeBanner" ? styles.homeBanner : ""
        }`}
      >
        <img src={image} className={styles.bannerImg} alt={descriptionImg} />
        <div className={styles.overlay}></div>
        <h3>{text}</h3>
      </div>
  );
};

export default Banner;