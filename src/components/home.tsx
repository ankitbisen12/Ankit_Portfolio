'use client';

import React from "react";
import Intro from "./HeroSection/intro";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import Contact from "./contact/contact";

const HomePage = () => {
    return (
        <React.Fragment>
            <Intro />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </React.Fragment>
    )
}

export default HomePage;