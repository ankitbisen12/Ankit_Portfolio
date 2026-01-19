'use client';

import React from 'react';
import Link from 'next/link';
import { CornerDownLeftIcon } from 'lucide-react';
import { SidebarProps } from "../../types/helper";
import { NavLinksProps } from "../../types/helper";

const NavLinks = ({ content, href, scrollToSection }: NavLinksProps) => {
  return (
    <Link href={href} className="block text-gray-400 font-semibold hover:text-white transition " onClick={() => scrollToSection("skills")}>
      {content}
    </Link>
  )
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-zinc-950 border-r border-white/10 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="text-white font-semibold text-xl">Ankit Bisen .</span>
          <CornerDownLeftIcon size={20} className='text-white cursor-pointer' onClick={() => setOpen(false)} />
        </div>

        <nav className="px-6 py-6 space-y-6 text-zinc-300">
          <NavLinks content="Skills" href="#skills" scrollToSection={scrollToSection} />
          <NavLinks content="Experience" href="#experience" scrollToSection={scrollToSection} />
          <NavLinks content="Projects" href="#projects" scrollToSection={scrollToSection} />
          <NavLinks content="Contact" href="#contact" scrollToSection={scrollToSection} />
        </nav>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;