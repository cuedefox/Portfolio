import React from "react";

const SkillItem = ({item}) => {
    const cargarImagen = require.context("../assets/img/icons/skills", true);

    return <div className="skill">
        <img src={cargarImagen(`./${item.img}`)} alt={item.title} />
        <h5>{item.title}</h5>
        <p>{item.description}</p>
    </div>
}

export default SkillItem;