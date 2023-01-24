import { React, useContext } from "react";
import { Language } from "../contexts/Language";
import skills from "../db/skills.json";
import certificates from "../db/certificates.json";
import SkillItem from "../items/SkillItem";
import CertificateItem from "../items/CertificateItem";

const Skills = () => {
    const {languageEn} = useContext(Language);

    return <div id="skills">
        <h2>{languageEn ? 'Skills' : 'Habilidades'}</h2>
        <div className="skills-container">
            {
                skills.map(item => (
                    <SkillItem key={`skill-${item.id}`} item={item} />
                ))
            }
        </div>
        <h3>{languageEn ? 'Certificates' : 'Certificaciones'}</h3>
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