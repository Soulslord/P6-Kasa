import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";



const SlideShow = ({ index, dataCard, datasListLength }) => {
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

  return (
    <>
      <h1>Je suis dans {index}</h1>

      <Carrousel pictures={dataCard.pictures} />

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

export default SlideShow;
