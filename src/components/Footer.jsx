import React from "react";
import ContactItem from "./ContactItem";
import phone from '../assets/img/icons/phone.svg';
import envelope from '../assets/img/icons/envelope.svg';
import linkedin from '../assets/img/icons/linkedin.svg';
import whatsapp from '../assets/img/icons/whatsapp.svg';
import github from '../assets/img/icons/github.svg';
import instagram from '../assets/img/icons/instagram.svg';

const Footer = () => {
    return <footer>
        <div className="cel-mail">
            <ContactItem img={phone} info={'(+54) 11 3241-7239'} />
            <ContactItem img={envelope} info={'rodrigovergara2001@gmail.com'} />
        </div>
        <div className="redes">
            <a href="">
                <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="">
                <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="">
                <img src={github} alt="Github" />
            </a>
            <a href="">
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
        <p className="copy">&copy;2022 Rodrigo Vergara - Desarrollador Full Stack</p>
    </footer>
}

export default Footer;