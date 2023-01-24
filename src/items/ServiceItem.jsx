import { React, useContext } from "react";
import { Language } from "../contexts/Language";

const ServiceItem = ({item}) => {
    const cargarImagen = require.context("../assets/img/icons/services", true);
    const {languageEn} = useContext(Language);

    return <div className="service">
        <img src={cargarImagen(`./${item.img}`)} alt={languageEn ? item.nameEn : item.nameEs} />
        <h5>{languageEn ? item.nameEn : item.nameEs}</h5>
        <p>{languageEn ? item.desEn : item.desEs}</p>
    </div>
}

export default ServiceItem;