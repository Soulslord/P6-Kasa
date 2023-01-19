import React from 'react';
import styles from "../Styles/cardsList.module.scss";
import Card from './Card';
import {data} from '../Data/Data';


const CardsList = () => {
    console.log(data);

    // const testData = data.map((elem, index) => {
    //     console.log({index, pictureLength: elem.pictures.length});
    // });

    return (
        <div className={styles.cardsList}>
            {
                data.map(({title, id, cover}, index) => (
                    <Card key={id} index={index + 1} id={id} title={title} imgSrc={cover} />
                ))
            }
            {/* {testData} */}
        </div>
    );
};

export default CardsList;