import React, { useState } from "react";
import styles from "../Styles/accomodationDetails.module.scss";
import arrowBottom from "../Images/Logos/arrow-bottom.svg";

const Collapse = ({ datas, title }) => {
  const [stateDeploy, setStateDeploy] = useState(false);
  console.log(datas);
  console.log(typeof datas);

  console.log(stateDeploy);

  return (
    <div className={styles.collapse}>
      <div onClick={() => setStateDeploy(!stateDeploy)} className={styles.head}>
        <h5>
          {title}
          <img src={arrowBottom} alt="fleche directionelle" style={stateDeploy ? {rotate: "180deg"}: null}/>
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
