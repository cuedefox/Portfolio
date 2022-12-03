import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Work from "../components/Work";

const MainContainer = () => {
    return <main>
        <AboutMe />
        <Skills />
        <Work />
        <Contact />
    </main>
}

export default MainContainer;