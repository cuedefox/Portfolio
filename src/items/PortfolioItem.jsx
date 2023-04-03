import {React, useContext} from "react";
import { Language } from "../contexts/Language";

const PortfolioItem = ({item}) => {
    const {languageEn} = useContext(Language);
    const cargarImagen = require.context("../assets/img/portfolio", true);

    return <div className="portfolio-card" style={{ backgroundImage: `url(${cargarImagen(`./${item.img}`)})`}}>
        <h3>{item.title}</h3>
        <a href={item.link}>{languageEn ? 'See deploy' : 'Ver despliegue'}</a>
        <a href={item.code}>{languageEn ? 'See code' : 'Ver codigo'}</a>
    </div>
}

export default PortfolioItem;