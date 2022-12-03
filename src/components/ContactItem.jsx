import React from "react";

const ContactItem = ({img, info}) => {
    
    return <div className="contact-item">
        <img src={img} alt={info} />
        <p>{info}</p>
    </div>
}

export default ContactItem;