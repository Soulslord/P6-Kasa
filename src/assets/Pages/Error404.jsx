import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Error404.module.scss";

class Error404 extends Component {
  render() {
    return (
      <main className={styles.error404Element}>
        <h3>404</h3>
        <h4>Oups! La page que vous demandez n'existe pas.</h4>
        <Link to="/">
          <p>Retourner sur la page d'accueil</p>
        </Link>
      </main>
    );
  }
}

export default Error404;
