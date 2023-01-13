import React from 'react';
import Banner from '../Components/Banner';
import FooterBannerImg from "../Images/Img/banner-about.jpg";
import { useLocation } from "react-router-dom"

const About = () => {
    const sampleLocation = useLocation();
    console.log(sampleLocation);

    return (
        <div className='div-about'>
            <h1>Je suis dans A propos</h1>
            <Banner image={FooterBannerImg} descriptionImg="paysage de montagnes"/>

            <div className="collapse">Collapse1</div>
            <div className="collapse">Collapse2</div>
            <div className="collapse">Collapse3</div>
        </div>
    );
};

export default About;