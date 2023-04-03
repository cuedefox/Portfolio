import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import services from '../db/services.json';
import back from '../assets/img/back2.png';
import ServiceItem from "../items/ServiceItem";
import portfolio from "../db/portfolio.json";
import PortfolioItem from "../items/PortfolioItem";

const Work = () => {
    const {languageEn} = useContext(Language);

    return <div id="work" style={{ backgroundImage: `url(${back})`}}>
        <h2>{languageEn ? 'Work' : 'Trabajo'}</h2>
        <div className="services-container">
            <h3>{languageEn ? 'Services' : 'Servicios'}</h3>
            <div className="services">
                {
                    services.map(item => (
                        <ServiceItem key={`service-${item.id}`} item={item} />
                    ))
                }
            </div>
        </div>
        <div className="portfolio-container">
            <h3>{languageEn ? 'Portfolio' : 'Portafolio'}</h3>
            <div className="portfolio">
                {
                    portfolio.map(item => (
                        <PortfolioItem key={`work-${item.id}`} item={item} />
                    ))
                }
            </div>
        </div>
    </div>
}

export default Work;