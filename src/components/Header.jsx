import React from "react";
import back from '../assets/img/back1.png';
import perfil from '../assets/img/rodrigo-vergara.JPG'

const Header = () => {
    return <header id="header" style={{ backgroundImage: `url(${back})` }}>
        <h1>¡Hola!, soy <span>Rodrigo Vergara</span>,
        <br />desarrollador <span>Full Stack</span>.</h1>
        <img src={perfil} alt="Foto de Rodrigo Vergara" />
    </header>
}

export default Header;