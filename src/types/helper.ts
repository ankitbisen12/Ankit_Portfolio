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

export interface SectionHeaderProps {
    title: string;
    subTitle: string;
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

export interface ButtonProps {
  textColor: string;
  content: string;
  bgColor?: string;
  icon?: React.ReactNode;
  animation?: string;
  extraStyle?: string;
  onClick?: () => void;
}

export interface SkillCardProps {
    title: string;
    skills: string[];
}


export interface TagProps {
    content: string;
    extraStyle?:string
}
