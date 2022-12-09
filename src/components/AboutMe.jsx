import React from "react";
import avatar from '../assets/img/avatar-back.svg'

const AboutMe = () => {
    return <div id="about-me">
        <h2>Sobre Mi</h2>
        <div>
            <img src={avatar} alt="Dibujo De Rodrigo" />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quia at 
                dolorem deleniti, ad ipsam quae nesciunt quam reiciendis harum incidunt debitis, 
                numquam quaerat eius deserunt possimus officia quod omnis!</p>
                <button>Descargar CV</button>
            </div>

        </div>
    </div>
}

export default AboutMe;