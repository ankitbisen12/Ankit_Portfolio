'use client';

import { Undo2 } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black">
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
                <div className="text-center max-w-2xl">
                    <div className="relative inline-block mb-2">
                        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                        <h1 className="relative text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-600">
                            404
                        </h1>
                    </div>

                    <h2 className="text-2xl font-semibold text-white mb-2">
                        Page Not Found
                    </h2>

                    <p className="text-md text-gray-500 font-semibold mb-8 leading-tight">
                        Oops! The page you're looking for seems to have vanished into the digital void.
                        Let's get you back to safety.
                    </p>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-purple-500/30 bg-purple-500/10 text-purple-400 font-medium rounded-lg shake-vertical cursor-pointer"
                    >
                        <Undo2 size={18} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound