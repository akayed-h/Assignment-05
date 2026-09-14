import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur px-6 py-4 shadow-sm">
            <div className="container mx-auto flex items-center justify-between">
                <button
                    className="md:hidden text-2xl text-slate-700"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="flex items-center gap-2">
                    <img src="/assets/logo-text.png" alt="" className="h-8" />
                </div>

                <ul className="hidden md:flex items-center gap-6 text-slate-600 font-medium">
                    {NAV_LINKS.map((link, index) => (
                        <li
                            key={link}
                            className={index === 0 ? "brand-gradient-text font-semibold" : "hover:text-pink-600 cursor-pointer"}
                        >
                            {link}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2.5">
                    <button className="font-semibold rounded-3xl px-3 py-1.5 hover:text-pink-600 cursor-pointer">
                        Sign In
                    </button>
                    <button className="brand-gradient-bg text-white font-semibold rounded-3xl px-4 py-1.5 cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </div>

            {menuOpen && (
                <ul className="md:hidden mt-4 flex flex-col gap-3 text-slate-600 font-medium">
                    {NAV_LINKS.map((link) => (
                        <li key={link} className="hover:text-pink-600 cursor-pointer">
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
