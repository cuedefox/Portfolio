import React from "react";
import ContactItem from "./ContactItem";
import phone from '../assets/img/icons/phone.svg';
import envelope from '../assets/img/icons/envelope.svg';
import linkedin from '../assets/img/icons/linkedin.svg';

const Footer = () => {
    return <footer>
        <div className="cel-mail">
            <ContactItem img={phone} info={'(+54) 11 3241-7239'} />
            <ContactItem img={envelope} info={'rodrigovergara2001@gmail.com'} />
        </div>
        <div className="redes">
            <img src={linkedin} alt="Linkedin" />
        </div>
        <p className="copy">&copy;2022 Rodrigo Vergara - Desarrollador Full Stack</p>
    </footer>
}

export default Footer;