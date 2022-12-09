import React from "react";

const CertificateItem = ({item}) => {
    const cargarImagen = require.context("../assets/img/certificados", true);

    return <div className="certificate">
        <img src={cargarImagen(`./${item.img}`)} alt={`Certificado de ${item.title}`} />
        <h5>{item.title}</h5>
        <div>
            <img src={cargarImagen(`./${item.institution}.png`)} alt={`Logo de ${item.institution}`} />
            <a href={item.link} target="_blank" rel="noreferrer">
                <button>Ver en web</button>
            </a>
        </div>
    </div>
}

export default CertificateItem;