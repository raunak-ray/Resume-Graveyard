"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur-md mt-2 px-4 py-3">
            <div className="max-w-2xl md:max-w-5xl mx-auto">
                <nav className="flex items-center justify-between">
                    <div className="flex items-start justify-center gap-2">
                        <p>Logo</p>
                        <h1 className="font-creepster text-lg md:text-2xl tracking-widest">Resume Graveyard</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center justify-between gap-8">
                        <Link href="/" className="font-mono text-white/70 hover:text-white hover:scale-[1.02] duration-100 transition-all">Tombstones</Link>
                        <Link href="/" className="font-mono text-white/70 hover:text-white hover:scale-[1.02] duration-100 transition-all">About</Link>
                        <Link href="/" className="font-mono text-white/70 hover:text-white hover:scale-[1.02] duration-100 transition-all">Contact</Link>

                        <Button className="text-black bg-white/90 font-mono rounded-none cursor-pointer border border-white/80 hover:scale-[1.02] duration-100 transition-all hover:bg-white/80 outline-0">Bury A Resume</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-white/70 hover:text-white focus:outline-none cursor-pointer"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
                        <Link href="/" className="font-mono text-white/70 hover:text-white transition-all" onClick={() => setIsMenuOpen(false)}>Tombstones</Link>
                        <Link href="/" className="font-mono text-white/70 hover:text-white transition-all" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Link href="/" className="font-mono text-white/70 hover:text-white transition-all" onClick={() => setIsMenuOpen(false)}>Contact</Link>

                        <Button className="w-full text-black bg-white/90 font-mono rounded-none cursor-pointer border border-white/80 hover:bg-white/80 mt-2" onClick={() => setIsMenuOpen(false)}>Bury A Resume</Button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar;