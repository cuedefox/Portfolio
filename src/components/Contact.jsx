import { React, useRef, useState, useContext } from "react";
import { Language } from "../contexts/Language";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [alertErr, setAlertErr] = useState(false);
    const [alertSend, setAlertSend] = useState(false);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [mess, setMess] = useState('');
    const form = useRef();
    const {languageEn} = useContext(Language);

    const clearForm = () => {
        setName('');
        setMail('');
        setMess('');
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if(name === '' || mail === '' || mess === '' ) {
            setAlertSend(false);
            setAlertErr(true);
        } else {
            setAlertErr(false);
            emailjs.sendForm('service_kts9vbb', 'template_7qmzs2i', form.current, '4TFTGvoWJqrbr7cey');
            setAlertSend(true);
            clearForm();
        }
    };

    return <div id="contact">
        <div className="titulo-contacto">
            <h2>{languageEn ? 'Interested in my services?' : '¿Interesado en mis servicios?'}</h2>
            <p>{languageEn ? 'Send your inquiry' : 'Envíe su consulta'}</p>
        </div>
        <div className="contact-container">
        <div className="mail">
            <h3>{languageEn ? 'Send me a message' : 'Envíame un Mensaje'}</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder={languageEn ? 'Write your name here' : 'Escriba aquí su nombre'} onChange={e => setName(e.target.value)} value={name} />
                <input type="email" name="user_email" placeholder={languageEn ? 'Write your email here' : 'Escriba aquí su email'} onChange={e => setMail(e.target.value)} value={mail} />
                <textarea name="message" placeholder={languageEn ? 'How can i help you?' : '¿Cómo puedo ayudarte?'} className="mensaje-mail" onChange={e => setMess(e.target.value)} value={mess} />
                {alertErr ? <p className="form-alert-err">{languageEn ? 'You must complete all the fields.' : 'Debe completar todos los campos para enviar.'}</p> : alertSend ? <p className="form-alert-send">{languageEn ? 'Message sent!' : 'Mensaje enviado!'}</p> : false}
                <input type="submit" value={languageEn ? 'Send' : 'Enviar'} className="enviar-mail" />
            </form>
        </div>
        <div className="medios-de-contacto">
            <h3>{languageEn ? 'Contact means' : 'Medios de contacto'}</h3>
            <div>
                <div>
                    <p>E-mail: <strong>rodirgovergara2001@gmail.com</strong></p>
                    <p>{languageEn ? 'Cell phone' : 'Teléfono Celular'}: <strong>+54 9 11 3241-7293</strong></p>
                    <p>Whatsapp: <strong>+54 9 11 6883-4237</strong></p>
                </div>
                <p className="frase-medios-de-contacto">{languageEn ? 'If you want my services, do not hesitate to contact me.' : 'Si desea mis servicios, no dude en ponerse en contacto conmigo.'}</p>
            </div>
        </div>
        </div>
    </div>
}

export default Contact;