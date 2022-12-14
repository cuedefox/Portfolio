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
            <h2>{languageEn ? '' : '¿Interesado en mis servicios?'}</h2>
            <p>{languageEn ? '' : 'Envie su consulta'}</p>
        </div>
        <div className="mail">
            <h3>{languageEn ? '' : 'Enviame un Mensaje'}</h3>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Escriba aqui su nombre" onChange={e => setName(e.target.value)} value={name} />
                <input type="email" name="user_email" placeholder="Escriba aqui su email" onChange={e => setMail(e.target.value)} value={mail} />
                <textarea name="message" placeholder="¿Como puedo ayudarte?" className="mensaje-mail" onChange={e => setMess(e.target.value)} value={mess} />
                {alertErr ? <p className="form-alert-err">Debe completar todo los campos para enviar.</p> : alertSend ? <p className="form-alert-send">Mensaje enviado!</p> : false}
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