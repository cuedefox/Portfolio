import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import avatar from '../assets/img/avatar-back.svg';
import cv from '../assets/cv/Vergara-Rodrigo-cv.pdf';

const AboutMe = () => {
    const {languageEn} = useContext(Language);

    return <div id="about-me">
        <h2>{languageEn ? 'About Me' : 'Sobre Mi'}</h2>
        <div>
            <img src={avatar} alt="Dibujo De Rodrigo" />
            <div>
                {
                    languageEn ? 
                    <p>Lorem Englishum ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia at 
                    dolorem deleniti, ad ipsam quae nesciunt quam reiciendis harum incidunt debitis, 
                    numquam quaerat eius deserunt possimus officia quod omnis!</p>
                    :
                    <p>Lorem Spanishum ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia at 
                    dolorem deleniti, ad ipsam quae nesciunt quam reiciendis harum incidunt debitis, 
                    numquam quaerat eius deserunt possimus officia quod omnis!</p>
                }
                <a href={cv} download><button>{languageEn ? 'Download CV' : 'Descargar CV'}</button></a>
            </div>

        </div>
    </div>
}

export default AboutMe;