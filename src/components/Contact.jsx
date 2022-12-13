import { React, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kts9vbb', 'template_7qmzs2i', form.current, '4TFTGvoWJqrbr7cey')
    };

    return <div id="contact">
        <div className="titulo-contacto">
            <h2>¿Interesado en mis servicios?</h2>
            <p>Envie su consulta</p>
        </div>
        <div className="mail">
            <h3>Enviame un Mensaje</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Escriba aqui su nombre" />
                <input type="email" name="user_email" placeholder="Escriba aqui su email" />
                <textarea name="message" placeholder="Como puedo ayudarte?" className="mensaje-mail" />
                <input type="submit" value="Enviar" className="enviar-mail" />
            </form>
        </div>
        <div className="medios-de-contacto">
            <h3>Medios de contacto</h3>
            <div>
                <div>
                    <p>Email: <strong>rodirgovergara2001@gmail.com</strong></p>
                    <p>Telefono Celular: <strong>+54 9 11 3241-7293</strong></p>
                </div>
                <p>Si desea mis servicios, no dude en ponerse en contacto conmigo.</p>
            </div>
        </div>
    </div>
}

export default Contact;