import { React, useContext } from "react";
import { Language } from "../contexts/Language";

const SkillItem = ({item}) => {
    const cargarImagen = require.context("../assets/img/icons/skills", true);
    const {languageEn} = useContext(Language);

    return <div className="skill">
        <img src={cargarImagen(`./${item.img}`)} alt={item.title} />
        <h5>{item.title}</h5>
        <p>{languageEn ? item.descriptionEn : item.description}</p>
    </div>
}

export default SkillItem;