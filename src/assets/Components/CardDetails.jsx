import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CardDetails = ({ index, title, id, imgCover, tags, dataLength}) => {
  let [statePage, setStatePage] = useState(index);

  useEffect(() => {
    setStatePage(index)
  },[index]);

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
  console.log({ index, title, id, imgCover, tags, dataLength});

  console.log(dataLength);




  return (
    <div>
      <h1>Je suis dans {title}</h1>
      <h1>Je suis dans {index}</h1>
      <Link
        to={`/card/${index <= 1 ? dataLength : index - 1}`}
      >
        Previous page
      </Link>
      <h1>{statePage}</h1>
      <Link
        to={`/card/${index >= dataLength ? 1 : index + 1}`}
      >
        Next page
      </Link>
    </div>
  );
};

export default CardDetails;
