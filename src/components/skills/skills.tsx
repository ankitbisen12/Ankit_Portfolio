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
                        <SkillCard title="Languages" skills={skills.languages} />
                        <SkillCard title="Big Data Technologies" skills={skills.BigDataTechnologies} />
                        <SkillCard title="Cloud Computing" skills={skills.Cloudcomputing} />
                        <SkillCard title="Data Engineering Tools" skills={skills.DataEngineeringTools} />
                        <SkillCard title="Orchestration" skills={skills.Orchestration} />
                        <SkillCard title="Other" skills={skills.Other} />
                    </div>
                </div>
            </MotionWrapper>
        </section>
    );
};

export default Skills;
