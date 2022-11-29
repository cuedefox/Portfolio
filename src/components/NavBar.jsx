import React from "react";

const NavBar = () => {
    return <div className="nav-bar">
        <div>
            <p className="nav-logo">
                <span>{'{'}</span>Rodrigo<span>:</span> Vergara<span>{'}'}</span>
            </p>
            <nav>
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#sobre-mi">Sobre Mi</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#trabajo">Trabajo</a></li>
                    <li><a href="#Contacto">Contacto</a></li>
                    <li><button>idioma</button></li>
                </ul>
            </nav>
        </div>
    </div>
}

export default NavBar;