import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import back from '../assets/img/back1.png';
import perfil from '../assets/img/rodrigo-vergara.JPG';

const Header = () => {
    const {languageEn} = useContext(Language);

    return <header id="header" style={{ backgroundImage: `url(${back})`}}>
        {languageEn ? 
            <h1>
                Hi!, im <span className="title-color">Rodrigo Vergara</span>,
                <br />
                <div className="texting-container">
                    <div className="texting">
                        <span><span className="title-color">Full Stack</span> developer.</span>
                    </div>
                </div>
            </h1>
            :
            <h1>
                ¡Hola!, soy <span className="title-color">Rodrigo Vergara</span>,
                <br />
                <div className="texting-container">
                    <div className="texting">
                        <span>desarrollador <span className="title-color">Full Stack</span>.</span>
                    </div>
                </div>
            </h1>
        }
        <img src={perfil} alt="Rodrigo Vergara" />
    </header>
}

export default Header;