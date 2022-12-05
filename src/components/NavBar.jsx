import { React, useState } from "react";
import en from '../assets/img/reino-unido.png';
import es from '../assets/img/espana.png';

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const desplegarMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return <div className="nav-bar">
        <div>
            <p className="nav-logo">
                <span>{'{'}</span>Rodrigo<span>:</span> Vergara<span>{'}'}</span>
            </p>
            <nav>
                <ul className={mobileMenu ? "menu-items show" : "menu-items"}>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about-me">Sobre Mi</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#work">Trabajo</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li className="li-idioma"><div><img src={en} alt="boton idioma" /></div></li>
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