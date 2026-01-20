'use client';

import Intro from "./HeroSection/intro";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import Contact from "./contact/contact";


const HomePage = () => {
    return (
        <main>
            <Intro />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
    )
}

export default HomePage;