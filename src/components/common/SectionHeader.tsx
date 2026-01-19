import React from 'react';

interface SectionHeaderProps {
    title: string;
    subTitle: string;
}

const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className="text-center mb-16">
            <p className="text-purple-500 text-sm font-medium tracking-wider mb-2">
                {title}
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white relative inline-block">
                {subTitle}
                <div className="absolute -bottom-5 left-1/2 h-[2px] w-1/2 -translate-x-1/2 bg-purple-600 opacity-40" />
                <div className="absolute -bottom-6 left-1/2 h-3 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-600 to-transparent blur-lg opacity-80" />
            </h2>
        </div>
    )
}

export default SectionHeader;