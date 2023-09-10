import React from "react";
import whatsapp from '../assets/img/icons/whatsapp.png';

const WhatsappBut = () => {
    return <>
        <a href="https://wa.me/5491132417239?text=Estoy%20interesado%20en%20tus%20servicios%20como%20desarrollador." target="_blank" rel="noreferrer"><img className="but-whatsapp" src={whatsapp} alt="" /></a>
    </>
}

export default WhatsappBut;