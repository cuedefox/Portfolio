import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import back from '../assets/img/back1.png';
import perfil from '../assets/img/rodrigo-vergara.JPG';

const Header = () => {
    const {languageEn} = useContext(Language);

    return <header id="header" style={{ backgroundImage: `url(${back})`}}>
        {languageEn ? 
        <h1>Hi!, im <span>Rodrigo Vergara</span>,
        <br /><span>Full Stack</span> developer.</h1>
        :
        <h1>¡Hola!, soy <span>Rodrigo Vergara</span>,
        <br />desarrollador <span>Full Stack</span>.</h1>
        }
        <img src={perfil} alt="Rodrigo Vergara" />
    </header>
}

export default Header;