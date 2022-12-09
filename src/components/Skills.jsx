import React from "react";
import skills from "../db/skills";
import certificates from "../db/certificates";
import SkillItem from "./SkillItem";
import CertificateItem from "./CertificateItem";

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
        <h3>Estudios</h3>
        <div className="certificates">
            {
                certificates.map(item => (
                    <CertificateItem key={`certificate-${item.id}`} item={item} />
                ))
            }
        </div>
    </div>
}

export default Skills;