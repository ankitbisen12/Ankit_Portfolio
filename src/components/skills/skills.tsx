'use client';

import { motion } from 'framer-motion';
import SectionHeader from "../common/SectionHeader";
import SkillCard from "./SkillCard";
import { skills } from "../../constants";
import { slideFromLeft } from "../../lib/motionVariants";
import MotionWrapper from "../common/MotionWrapper";

const Skills = () => {
    return (
        <section id="skills" className="bg-black flex items-center justify-center px-4 py-8">
            <MotionWrapper slideEffect={slideFromLeft}>
                <div className="max-w-6xl w-full">
                    <SectionHeader title="SKILLS & TECHNOLOGIES" subTitle="My Expertise" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SkillCard title="Frontend" skills={skills.frontend} />
                        <SkillCard title="Backend" skills={skills.backend} />
                        <SkillCard title="Languages" skills={skills.languages} />
                        <SkillCard title="Tools" skills={skills.tools} />
                    </div>
                </div>
            </MotionWrapper>
        </section>
    );
};

export default Skills;
