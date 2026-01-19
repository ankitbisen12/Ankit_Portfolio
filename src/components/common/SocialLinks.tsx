import React from 'react';
import Link from 'next/link';
import { socialLinks } from '@/constants';
import { SocialLinkProps } from '@/types/helper';

const SocialLinks = ({ size, extraStyle }: { size: number, extraStyle?: string }) => {
    return (
        <React.Fragment>
            {socialLinks.map(({ name, url, icon: Icon }: SocialLinkProps) => (
                <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`text-gray-400 transition ${extraStyle} hover:scale-110 hover:text-purple-500 `}
                >
                    <Icon size={size} />
                </Link>
            ))}
        </React.Fragment>
    )
}

export default SocialLinks;