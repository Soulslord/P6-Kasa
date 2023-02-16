import React from "react";
import styles from "../Styles/header.module.scss";
import LogoHeader from "../Images/Logos/logo-header.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let newRoute = useLocation().pathname;

  return (
    <header className={styles.header}>
      <img src={LogoHeader} alt="Logo Kasa Red" style={{ color: "red" }} />

      <h2>
        <span>
          <Link
            to="/"
            style={newRoute === "/" ? { textDecoration: "underline" } : null}
          >
            Accueil
          </Link>
        </span> 
        <span>
          <Link
            to="/about"
            style={
              newRoute === "/about" ? { textDecoration: "underline" } : null
            }
          >
            A Propos
          </Link>
        </span>
      </h2>
    </header>
  );
};

export default Header;
