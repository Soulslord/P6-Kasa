import React, { Component } from "react";
import styles from "../Styles/banner.module.scss";

class Banner extends Component {
  render() {
    const { image, text, descriptionImg, bannerType } = this.props;
    console.log(bannerType);
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
  }
}

export default Banner;
