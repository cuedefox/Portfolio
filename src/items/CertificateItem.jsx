import { React, useContext } from "react";
import { Language } from "../contexts/Language";

const CertificateItem = ({item}) => {
    const cargarImagen = require.context("../assets/img/certificados", true);
    const {languageEn} = useContext(Language);

    return <div className="certificate">
        <img src={cargarImagen(`./${item.img}`)} alt={languageEn ? `Certificate of ${item.titleEn}` : `Certificado de ${item.titleEs}`} />
        <h5>{languageEn ? item.titleEn : item.titleEs}</h5>
        <div>
            <img src={cargarImagen(`./${item.institution}.png`)} alt={`Logo de ${item.institution}`} />
            <a href={item.link} target="_blank" rel="noreferrer">
                <button>{languageEn ? 'View on web' : 'Ver en web'}</button>
            </a>
        </div>
    </div>
}

export default CertificateItem;