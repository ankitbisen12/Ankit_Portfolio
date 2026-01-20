'use client';

import SectionHeader from "../common/SectionHeader";
import { companies } from "../../constants";
import Tag from "../common/tag";

const Experience = () => {
  return (
    <section
      id="experience"
      className={`relative bg-black py-8 px-2 sm:px-6 lg:px-8`}
    >
      <SectionHeader title="Experience" subTitle="Work History" />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />
        <div className="space-y-10">
          {companies.map((exp, index) => (
            <div key={index} className="relative pl-10 lg:pl-16">
              <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 shadow-lg border border-white/5">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="mt-1 font-medium text-sm text-purple-400 mb-4">
                  @ {exp.name}
                </p>
                <Tag content={exp.period} extraStyle="sm:absolute sm:right-6 sm:top-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

