import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";
import styles from "../Styles/accomodationDetails.module.scss";
import redStar from "../Images/Logos/star-red.svg";
import greyStar from "../Images/Logos/star-grey.svg";
import arrowBottom from "../Images/Logos/arrow-bottom.svg";
import Collapse from "./Collapse";

const AccomodationDetails = ({ index, dataCard}) => {
  let [statePage, setStatePage] = useState(index);


  console.log(dataCard);
  console.log(dataCard.pictures);

  useEffect(() => {
    setStatePage(index);
  }, [index]);

  //   const handleClick = () => {
  //     const newCard = statePage + 1;
  //     index = newCard;
  //     setStatePage(newCard);
  //     console.log(statePage);
  //     // getData(newCount);
  //     //now you can be sure you call getData
  //     //with the state you just set
  //     // setStatePage(statePage + 1 );
  //   };

  const { title, location, tags, host, description, equipments, pictures } = dataCard;

  console.log(host);
  return (
    <>
      <SlideShow pictures={pictures} />

      <div className={styles.divDatas}>
        <div className={styles.firstDiv}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.locationText}>{location}</p>
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
            <img src={redStar} alt="etoile rouge" />
            <img src={redStar} alt="etoile rouge" />
            <img src={redStar} alt="etoile rouge" />
            <img src={greyStar} alt="etoile grise" />
            <img src={greyStar} alt="etoile grise" />
          </div>
        </div>
      </div>

      <div className={styles.collapseDivs}>
        <Collapse title="Description" datas={description} />
        <Collapse title="Equipements" datas={equipments} />
      </div>

      {/* <Link
        to={`/card/${index <= 1 ? datasListLength : index - 1}`}
      >
        Previous page
      </Link>
      <h1>{statePage}</h1>
      <Link
        to={`/card/${index >= datasListLength ? 1 : index + 1}`}
      >
        Next page
      </Link> */}
    </>
  );
};

export default AccomodationDetails;
