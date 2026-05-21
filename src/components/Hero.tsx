import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
    return (
        <div className="flex-1 w-full min-h-screen">
            {/* Fullscreen Background Video */}
            <video
                src="/image/hero3.mov"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute top-0 inset-0 aspect-square h-screen w-screen object-cover object-[15%_65%] md:object-[30%_65%] -z-20"
            />

            {/* Optional dark overlay for better text readability */}
            <div className="absolute bg-black/40 inset-0 -z-10" />

            {/* Main Content */}
            <main className="flex items-center justify-center px-4 sm:px-6 min-h-[calc(100vh-80px)] md:h-screen">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="mt-0 md:-mt-20 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-great-vibes tracking-widest leading-tight text-white font-extrabold">
                        Where Great Resumes
                        <span className="text-white/70 block mt-2">Go to Die…</span>
                        <span className="block mt-2">Until Someone Finds Them.</span>
                    </h1>
                    <p className="text-md md:text-xl md:w-2/3 mx-auto text-center text-white/80 mt-4 mb-8">
                        A sanctuary for the talent discarded by algorithms, layoffs, and
                        silent rejections.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                        <Link
                            href="/"
                            className="text-white bg-transparent font-mono px-4 py-3 rounded-none border border-white/80 hover:bg-black/40 mt-2 text-sm md:text-md tracking-wide uppercase"
                        >
                            Upload your Memorial
                        </Link>
                        <Link
                            href="/"
                            className="text-white bg-transparent font-mono px-4 py-3 rounded-none underline   border-white/80 hover:text-yellow-400  mt-2 text-sm md:text-md tracking-wide uppercase"
                        >
                            Walk the Graveyard
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Hero;
