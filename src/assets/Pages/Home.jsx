import React from "react";
import Banner from "../Components/Banner";
import styles from "../Styles/home.module.scss";
import HeaderBannerImg from "../Images/Img/banner-home.jpg";
import CardsList from "../Components/CardsList";

const Home = () => {
  return (
    <main className={styles.home}>
      <Banner
        image={HeaderBannerImg}
        text="Chez vous, partout et ailleurs"
        bannerType="homeBanner"
      />

      <CardsList />
    </main>
  );
};

export default Home;
