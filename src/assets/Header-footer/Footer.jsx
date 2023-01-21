import React from "react";
import styles from "../Styles/footer.module.scss";
import LogoFooter from "../Images/Logos/logo-footer.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <img src={LogoFooter} alt="Logo Kasa White" />
          <p>© 2020 Kasa. All rights reserved</p>
        </footer>
      );
};

export default Footer;
