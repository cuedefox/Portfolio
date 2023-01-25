import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import avatar from '../assets/img/avatar-back.svg';
import cv from '../assets/cv/Vergara-Rodrigo-cv.pdf';
import cvEn from '../assets/cv/Rodrigo-Vergara-cv.pdf';

const AboutMe = () => {
    const {languageEn} = useContext(Language);

    return <div id="about-me">
        <h2>{languageEn ? 'About Me' : 'Sobre Mi'}</h2>
        <div>
            <img src={avatar} alt="Dibujo De Rodrigo" />
            <div>
                {
                    languageEn ? 
                    <p>I consider myself a person who is passionate about computer science and logic programming.
                    Always willing to learn something new and easily adaptable.
                    I like to contribute to my work environment being harmonious and relaxed.</p>
                    :
                    <p>Me considero una persona apasionada de la informática y de la programación lógica. 
                    Dispuesto siempre a aprender algo nuevo y con facilidad de adaptación. 
                    Me gusta contribuir a que mi entorno de trabajo sea armonioso y descontracturado.</p>
                }
            </div>
        </div>
        <a href={languageEn ? cvEn : cv} download><button className="but-cv">{languageEn ? 'Download CV' : 'Descargar CV'}</button></a>
    </div>
}

export default AboutMe;