'use client';

import { Mail, Linkedin } from 'lucide-react';
import SectionHeader from "../common/SectionHeader";
import Button from "../common/button";
import { Download, SendHorizonal } from 'lucide-react';
import Card from "../common/Card";

const Contact = () => {
    return (
        <section className="bg-black flex items-center justify-center px-4 py-20">
            <div className="max-w-4xl w-full">
                <SectionHeader title="Contact" subTitle="Get In Touch" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="space-y-8 lg:col-span-1">
                        <Card bgColor='bg-black/50' >
                            <h3 className="text-xl font-semibold text-white mb-4">
                                Contact Info.
                            </h3>
                            <p className="text-md text-gray-400 leading-tight">
                                Feel free to reach out for collaborations.
                            </p>

                            <div className="py-4 space-y-2">
                                <span className="flex items-center gap-2 text-gray-300 text-sm text-gray-400 font-semibold">
                                    <Mail size={18} className="text-purple-500" />
                                    ankitbisen751@gmail.com
                                </span>
                                <span className="flex items-center gap-2 text-gray-300 text-sm text-gray-400 font-semibold">
                                    <Linkedin size={18} className="text-purple-500" />
                                    linkedin.in/ankit-bisen
                                </span>
                            </div>
                        </Card>

                        <Card bgColor='bg-gradient-to-br from-[#2b1d3a] via-[#1b152a] to-[#0b0b12]'>
                            <h3 className="text-xl font-semibold text-white mb-6 ">
                                Looking for a dev?
                            </h3>
                            <p className="text-sm text-gray-400 mb-6 leading-tight font-semibold">
                                I'm currently available for freelance projects and open to full-time opportunities.
                            </p>
                            <Button bgColor="border border-purple-600" textColor="text-white" content="Download Resume" icon={<Download size={18} />} />
                        </Card>
                    </div>

                    <div className="bg-black/50 rounded-2xl p-6 border border-gray-900 lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Drop a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="flex flex-col lg:flex-row gap-4">
                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 bg-black/50 text-md border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="w-full lg:w-1/2">
                                    <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 bg-black/50 text-md border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="w-full px-4 py-2 bg-black/50 text-md border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none"
                                    placeholder="Your message here..."
                                    required
                                />
                            </div>
                            <Button bgColor="bg-purple-900" textColor="text-white" content="Send Message" extraStyle=" border border-gray-800 " icon={<SendHorizonal size={16} />} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
