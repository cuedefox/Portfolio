import React from "react";
import en from '../assets/img/reino-unido.png';
import es from '../assets/img/espana.png';

const NavBar = () => {
    return <div className="nav-bar">
        <div>
            <p className="nav-logo">
                <span>{'{'}</span>Rodrigo<span>:</span> Vergara<span>{'}'}</span>
            </p>
            <nav>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about-me">Sobre Mi</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#work">Trabajo</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li className="li-idioma"><div><img src={en} alt="boton idioma" /></div></li>
                </ul>
            </nav>
        </div>
    </div>
}

export default NavBar;