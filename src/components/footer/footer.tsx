'use client';

import SocialLinks from "../common/SocialLinks";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-900 bg-black">
            <div className="mx-auto max-w-7xl p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-semibold text-white">
                            Ankit Bisen <span className="text-purple-500 text-2xl">.</span>
                        </h2>
                        <p className="mt-1 text-sm text-gray-400">
                            There is always one more bug to fix.
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-5 sm:justify-end">
                        <SocialLinks size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
