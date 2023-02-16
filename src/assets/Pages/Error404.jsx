import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/error404.module.scss";

const Error404 = () => {
  return (
    <main className={styles.error404Element}>
      <h3>404</h3> 
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <Link to="/">
        <p>Retourner sur la page d'accueil</p>
      </Link>  
    </main>
  );
};

export default Error404;  
