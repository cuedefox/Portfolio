import {React, useContext} from "react";
import { Language } from "../contexts/Language";

const PortfolioItem = ({item}) => {
    const {languageEn} = useContext(Language);
    const cargarImagen = require.context("../assets/img/portfolio", true);

    return <div className="portfolio-card" style={{ backgroundImage: `url(${cargarImagen(`./${item.img}`)})`}}>
        <img src={cargarImagen(`./${item.img}`)} alt={`imagen-de-${item.title}`} />
        <h5>{item.title}</h5>
        <a href={item.link} target="_blank" rel="noreferrer">{languageEn ? 'View website' : 'Ver sitio web'}</a>
        <a href={item.code} target="_blank" rel="noreferrer">{languageEn ? 'View code' : 'Ver código'}</a>
    </div>
}

export default PortfolioItem;