import React from "react";
import skills from "../db/skills";
import SkillItem from "./SkillItem";

const Skills = () => {
    return <div id="skills">
        <h2>Habilidades</h2>
        <div className="skills-container">
            {
                skills.map(item => (
                    <SkillItem key={`skill-${item.id}`} item={item} />
                ))
            }
        </div>
        <h3>Certificados</h3>
        <div className="certificates">
            
        </div>
    </div>
}

export default Skills;