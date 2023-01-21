import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideShow from "../Components/SlideShow";
import styles from "../Styles/accomodationSheet.module.scss";
import redStar from "../Images/Logos/star-red.svg";
import greyStar from "../Images/Logos/star-grey.svg";
import arrowBottom from "../Images/Logos/arrow-bottom.svg";
import Collapse from "../Components/Collapse";

const AccomodationSheet = ({ index, dataCard }) => {
  let [statePage, setStatePage] = useState(index);

  const ratingsTab = [1, 2, 3, 4, 5];

  const {
    title,
    location,
    tags,
    host,
    description,
    equipments,
    pictures,
    rating,
  } = dataCard;

  return (
    <main className={styles.accomodationSheet}>
      <SlideShow pictures={pictures} />

      <div className={styles.divDatas}>
        <div className={styles.firstDiv}>
          <div>
            <h3 className={styles.title}>{title}</h3>

            <p className={styles.locationText}>{location}</p>
          </div>

          <div className={styles.allTagsDiv}>
            {tags.map((tag, index) => (
              <div className={styles.tagDivs} key={index}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.secondDiv}>
          <div className={styles.hostDiv}>
            <h2 className={styles.hostName}>{host.name}</h2>
            <img
              src={host.picture}
              alt={`hôte ${host.name}`}
              className={styles.hostImg}
            />
          </div>

          <div className={styles.starsDiv}>
            {ratingsTab.map((elem, indexValue) =>
              elem <= parseInt(rating) ? (
                <img key={indexValue} src={redStar} alt="etoile rouge" />
              ) : (
                <img key={indexValue} src={greyStar} alt="etoile grisée" />
              )
            )}
          </div>
        </div>
      </div>

      <div className={styles.collapseDivs}>
        <Collapse title="Description" datas={description} />
        <Collapse title="Equipements" datas={equipments} />
      </div>
    </main>
  );
};

export default AccomodationSheet;
