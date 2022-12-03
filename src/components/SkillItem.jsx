import React from "react";

const SkillItem = ({item}) => {
    return <>
        <img src={item.img} alt={item.name} />
        <h5>{item.name}</h5>
        <p>{item.description}</p>
    </>
}

export default SkillItem;