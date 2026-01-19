'use client';

import { FooterSocailLinks } from "../footer/footer"
import Button from "../common/button";
import { MoveRight } from 'lucide-react';


const Intro = () => {
    return (
        <section className="pt-20 bg-black flex items-center justify-center px-4 py-8 lg:min-h-screen lg:pt-0 ">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-500 scale-120 animate-slow-spin"></div>
                        <div className="relative w-40 h-40 rounded-full overflow-hidden">
                            <img
                                src="/Profile_image.png"
                                alt="Ankit"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 text-center">
                        <p className="text-3xl lg:text-5xl font-bold text-white">
                            Hey, It's{' '}
                            <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">
                                Ankit
                            </span>.
                            <br />
                            Software Developer.
                        </p>

                        <p className="text-xl lg:text-lg text-gray-500 font-bold">
                            I've been working as a Software developer for{' '}
                            <span className="text-purple-500">1 years</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                            <Button bgColor="bg-purple-600" textColor="text-white" animation="shake-vertical" content="View My Work" />
                            <Button textColor="text-white" animation="shake-vertical" content="Contact Me" icon={<MoveRight size={16} />} extraStyle="border border-gray-600 flex items-center justify-center gap-2" />
                        </div>

                        <div className="flex gap-2 pt-2 justify-center">
                            <FooterSocailLinks size={24} extraStyle="p-2 border border-gray-700 rounded-full hover:border-purple-500" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Intro;
