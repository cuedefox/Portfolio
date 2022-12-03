import React from "react";
import ContactItem from "./ContactItem";

const Footer = () => {
    return <footer>
        <div className="redes">

        </div>
        <div className="cel-mail">
            <ContactItem img={'phone.svg'} info={'a'} />
            <ContactItem img={'envelope.svg'} info={'a'} />
        </div>
        <p className="copy">&copy;2022 Rodrigo Vergara - Desarrollador Full Stack</p>
    </footer>
}

export default Footer;