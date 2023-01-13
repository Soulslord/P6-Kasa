import React from 'react';
import styles from "../Styles/cardsList.module.scss";
import Card from './Card';
import {data} from '../Data/Data';


const CardsList = () => {
    console.log(data);
    return (
        <div className={styles.cardsList}>
            {
                data.map(({title, id, cover}) => (
                    <Card key={id} index={id} title={title} imgSrc={cover} />
                ))
            }
        </div>
    );
};

export default CardsList;