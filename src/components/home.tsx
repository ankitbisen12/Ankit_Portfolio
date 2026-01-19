'use client';
import Navbar from "./navbar/navbar";
import Intro from "./HeroSection/intro";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Experience from "./experience/experience";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

const HomePage = () => {
    return (
        <main>
            <Navbar />
            <Intro />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </main>
    )
}

export default HomePage;