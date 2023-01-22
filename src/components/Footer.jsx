import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import ContactItem from "./ContactItem";
import phone from '../assets/img/icons/phone.svg';
import envelope from '../assets/img/icons/envelope.svg';
import linkedin from '../assets/img/icons/linkedin.svg';
import whatsapp from '../assets/img/icons/whatsapp.svg';
import github from '../assets/img/icons/github.svg';
import instagram from '../assets/img/icons/instagram.svg';

const Footer = () => {
    const {languageEn} = useContext(Language);

    return <footer>
        <div className="cel-mail">
            <ContactItem img={phone} info={'(+54) 11 3241-7239'} />
            <ContactItem img={envelope} info={'rodrigovergara2001@gmail.com'} />
        </div>
        <div className="redes">
            <a href="https://www.linkedin.com/in/rodrigo-vergara-b7803b212/" target="_blank">
                <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://wa.me/5491168834237?text=Estoy%20interesado%20en%20tus%20servicios%20como%20desarrollador." target="_blank">
                <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="https://github.com/cuedefox" target="_blank">
                <img src={github} alt="Github" />
            </a>
            <a href="https://www.instagram.com/cuede.exe/" target="_blank">
                <img src={instagram} alt="Instagram" />
            </a>
        </div>
        <p className="copy">&copy;2022-2023 Rodrigo Vergara - {languageEn ? 'Full Stack Developer' : 'Desarrollador Full Stack'}</p>
    </footer>
}

export default Footer;