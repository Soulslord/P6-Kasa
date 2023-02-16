import React, { useState } from "react";
import styles from "../Styles/collapse.module.scss";
import arrowBottom from "../Images/Logos/arrow-bottom.svg";
import { useLocation } from "react-router-dom";

const Collapse = ({ datas, title }) => {
  const [stateDeploy, setStateDeploy] = useState(false);

  let newRoute2 = useLocation().pathname;

  return (
    <div className={styles.collapse + `${newRoute2 === "/about" ? (" " + styles.collapseAbout) : ""}`}>
      <div className={styles.head}>
        <h5>
          {title}
          <img
            onClick={() => setStateDeploy(!stateDeploy)}
            src={arrowBottom}
            alt="fleche directionelle"
            style={stateDeploy ? { rotate: "180deg" } : null}
          />
        </h5>
      </div>

      <div className={stateDeploy ? styles.deployed : styles.notDeployed}>
        {typeof datas === "string" ? (
          <p>{datas}</p>
        ) : (
          datas.map((el, index) => (
            <p key={index} style={{ lineHeight: "1.5em" }}>
              {el}
            </p>
          ))
        )}
      </div>
    </div> 
  );
};

export default Collapse;
