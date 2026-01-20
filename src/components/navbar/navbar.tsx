'use client';

import React from "react";
import { Logs } from 'lucide-react'
import Sidebar from "./sidebar";
import { useScrollToSection } from "@/customHooks/useScrollToSection";

const Navbar = () => {
  const { open, setOpen, scrollToSection } = useScrollToSection()

  return (
    <React.Fragment>
      <nav className="w-full bg-black px-2 lg:px-6 py-4 border-b border-gray-900">
        <div className="mx-auto flex  items-center justify-between">
          <div className="flex items-center cursor-pointer gap-2 lg:gap-4">
            <Logs size={24} className="text-white" onClick={() => setOpen((prev) => !prev)} />
            <div className="leading-tight">
              <p className="text-white font-semibold text-2xl">Ankit Bisen
                <span className="text-purple-500 font-semibold text-4xl ">{" "}.</span>
              </p>
            </div>
          </div>
          <a
            href="/assets/resume.pdf"
            download
            className="border border-purple-600 px-6 py-2 text-sm font-semibold text-purple-500 shake-vertical inline-block"
          >
            RESUME
          </a>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} scrollToSection={scrollToSection} />
    </React.Fragment>
  );
};

export default Navbar;

