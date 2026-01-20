'use client';

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from 'lucide-react';
import { projectProps } from "@/types/helper";
import { projects } from "@/constants";
import SectionHeader from "../common/SectionHeader";
import Tag from "../common/tag";

const ProjectCard = ({ project }: { project: projectProps }) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black transition hover:border-purple-500/40 hover:shadow-purple-500/10">
            <div className="w-full overflow-hidden">
                <Image
                    src={project.path}
                    alt={project.name}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                    {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                        <Tag key={skill} content={skill} />
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <Link
                        href={project.link}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white hover:scale-110 "
                    >
                        <Github size={14} />
                        Code
                    </Link>

                    <Link
                        href={project.preview}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300"
                    >
                        Live Demo
                        <ExternalLink size={14} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section className="bg-black py-20" id='projects'>
            <div className="mx-auto max-w-7xl px-6">
                <SectionHeader title="Projects" subTitle="Featured Projects" />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

