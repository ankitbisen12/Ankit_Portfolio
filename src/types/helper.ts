import React from "react";

export interface SidebarProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export interface NavLinksProps {
  content: string;
  href: string;
  scrollToSection: (id: string) => void;
}

export interface SocialLinkProps {
    name: string;
    url: string;
    icon: React.ComponentType<{ size?: number }>;
}

export interface projectProps {
    name: string;
    description: string;
    link: string;
    preview: string;
    skills: string[];
    path: any;
}
