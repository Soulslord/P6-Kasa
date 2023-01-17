import React from 'react';
import Banner from '../Components/Banner';
import FooterBannerImg from "../Images/Img/banner-about.jpg";
import { useLocation } from "react-router-dom"
import Collapse from '../Components/Collapse';
import styles from "../Styles/accomodationDetails.module.scss";

const About = () => {
    const sampleLocation = useLocation();
    console.log(sampleLocation);

    return (
        <div className={`${styles.divAbout} ${styles.testAbout}`}>
            <h1 >Je suis dans A propos</h1>
            <Banner image={FooterBannerImg} descriptionImg="paysage de montagnes"/>
            <Collapse  title="Fiabilité" datas="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            <Collapse title="Respect" datas="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse title="Service" datas="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Collapse title="Sécurité" datas="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    );
};

export default About;