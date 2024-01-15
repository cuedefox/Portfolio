import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import avatar from '../assets/img/avatar-back.svg';
import cv from '../assets/cv/Vergara-Rodrigo-cv.pdf';
import cvEn from '../assets/cv/Rodrigo-Vergara-cv.pdf';

const AboutMe = () => {
    const {languageEn} = useContext(Language);

    return <div id="about-me">
        <h2>{languageEn ? 'About Me' : 'Sobre Mí'}</h2>
        <div>
            <img src={avatar} alt="Dibujo De Rodrigo" />
            <div>
                {
                    languageEn ? 
                    <p>
                       Hello! I'm Rodrigo Vergara, a software developer who loves Star Wars. I enjoy working 
                       with the MERN Stack and have worked on several exciting projects. I'm always 
                       looking to learn new skills and techniques to improve my work. When I'm not 
                       coding, I like to watch Star Wars movies, collect action figures, and play 
                       video games inspired by the franchise. May the force be with you!
                    </p>
                    :
                    <p>
                        ¡Hola! Soy Rodrigo Vergara, un desarrollador de software que ama Star Wars.
                        Actualmente estoy estudiando la carrera "ingenieria en desarrollo de software" en Jala University 
                        Me encanta trabajar con el MERN Stack y he trabajado en varios proyectos 
                        emocionantes. Siempre estoy buscando aprender nuevas habilidades y técnicas 
                        para mejorar mi trabajo. Cuando no estoy programando, me gusta ver las 
                        películas de Star Wars, coleccionar figuras de acción y jugar videojuegos 
                        inspirados en la franquicia. ¡Que la fuerza te acompañe!
                    </p>
                }
            </div>
        </div>
        <a href={languageEn ? cvEn : cv} download><button className="but-cv">{languageEn ? 'Download CV' : 'Descargar CV'}</button></a>
    </div>
}

export default AboutMe;