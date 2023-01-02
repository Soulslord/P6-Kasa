import React, { Component } from "react";
import styles from "../Styles/header.module.scss";
import LogoHeader from "../Images/Logos/logo-header.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={LogoHeader} alt="Logo Kasa Red" style={{ color: "red" }} />

        <h2>
          <span>
            <Link to="/">Accueil</Link>
          </span>
          <span>
          <Link to="/about">A propos</Link>
          </span>
        </h2>
      </header>
    );
  }
}

export default Header;
