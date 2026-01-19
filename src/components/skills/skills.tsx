'use client';

import SectionHeader from "../common/SectionHeader";
import SkillCard from "./SkillCard";
import { skills } from "../../constants";

const Skills = () => {
    return (
        <section id="skills" className="bg-black flex items-center justify-center px-4 py-8">
            <div className="max-w-6xl w-full">
                <SectionHeader title="SKILLS & TECHNOLOGIES" subTitle="My Expertise" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SkillCard title="Frontend" skills={skills.frontend} />
                    <SkillCard title="Backend" skills={skills.backend} />
                    <SkillCard title="Languages" skills={skills.languages} />
                    <SkillCard title="Tools" skills={skills.tools} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
