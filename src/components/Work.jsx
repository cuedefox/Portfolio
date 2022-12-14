import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import back from '../assets/img/back2.png';

const Work = () => {
    const {languageEn} = useContext(Language);

    return <div id="work" style={{ backgroundImage: `url(${back})`}}>
        <h2>{languageEn ? 'Work' : 'Trabajo'}</h2>
        <div className="services">
            <h3>{languageEn ? 'Services' : 'Servicios'}</h3>
            <div>
            </div>
        </div>
        <div className="portfolio">
            <h3>{languageEn ? 'Portfolio' : 'Portafolio'}</h3>
        </div>
    </div>
}

export default Work;