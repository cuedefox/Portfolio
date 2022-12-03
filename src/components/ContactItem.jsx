import React from "react";

const ContactItem = (img, info) => {
    const cargarImagen = require.context("../assets/img", true);
    
    return <div className="contact-item">
        <img src={cargarImagen(`./${img}`)} alt={info} />
        <p>{info}</p>
    </div>
}

export default ContactItem;