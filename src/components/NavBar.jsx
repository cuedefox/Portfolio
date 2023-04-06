import { React, useState, useContext } from "react";
import { Language } from "../contexts/Language";
import en from '../assets/img/reino-unido.png';
import es from '../assets/img/espana.png';

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const desplegarMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const {languageEn, setLanguageEn} = useContext(Language);

    return <div className="nav-bar">
        <div className="nav-bar-container">
            <p className="nav-logo">
                <span>{'{'}</span>Rodrigo<span>:</span> Vergara<span>{'}'}</span>
            </p>
            <nav>
                <ul className={mobileMenu ? "menu-items show" : "menu-items"}>
                    <li><a href="#header">{languageEn ? 'Home' : 'Inicio'}</a></li>
                    <li><a href="#about-me">{languageEn ? 'About Me' : 'Sobre Mi'}</a></li>
                    <li><a href="#skills">{languageEn ? 'Skills' : 'Habilidades'}</a></li>
                    <li><a href="#work">{languageEn ? 'Work' : 'Trabajo'}</a></li>
                    <li><a href="#contact">{languageEn ? 'Contact' : 'Contacto'}</a></li>
                    <li className="li-idioma"><div className="language-img" onClick={() => {setLanguageEn(!languageEn)}}><img src={languageEn ? es : en} alt="boton idioma" /></div></li>
                </ul>
                <div className="menu-bars" onClick={desplegarMenu}>
                    <span className={mobileMenu ? "activelinea1-menu-bar" : "linea1-menu-bar"}></span>
                    <span className={mobileMenu ? "activelinea2-menu-bar" : "linea2-menu-bar"}></span>
                    <span className={mobileMenu ? "activelinea3-menu-bar" : "linea3-menu-bar"}></span>
                </div>
            </nav>
        </div>
    </div>
}

export default NavBar;