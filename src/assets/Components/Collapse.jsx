import React, { useState } from "react";
import styles from "../Styles/accomodationSheet.module.scss";
import arrowBottom from "../Images/Logos/arrow-bottom.svg";

const Collapse = ({ datas, title }) => {
  const [stateDeploy, setStateDeploy] = useState(false);

  return (
    <div className={styles.collapse}>
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
