'use client';

import React from "react";
import SectionHeader from "../common/SectionHeader";
import { companies } from "../../constants";
import { spaceGrotesk } from "../../app/fonts";

const Experience = () => {
  return (
    <section
      id="experience"
      className={`relative bg-black py-8 px-2 sm:px-6 lg:px-8 ${spaceGrotesk.variable}`}
    >
      <SectionHeader title="Experience" subTitle="Work History" />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />
        <div className="space-y-10">
          {companies.map((exp, index) => (
            <div key={index} className="relative pl-10 lg:pl-16">
              <span className="absolute left-[10px] top-6 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20" />
              <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 sm:p-8 shadow-lg border border-white/5">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className={`mt-1 font-medium text-sm text-purple-400 mb-4 ${spaceGrotesk.variable}`}>
                  @ {exp.name}
                </p>
                <span className="sm:absolute sm:right-6 sm:top-6 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 border border-purple-500/20 mt-10 lg:mt-3 sm:mt-0">
                  {exp.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

