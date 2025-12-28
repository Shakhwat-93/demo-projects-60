"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-6">
            <div className="mx-auto max-w-7xl">
                <div className="relative flex items-center justify-between px-6 py-4 rounded-2xl glass-panel transition-all duration-300">

                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-8">
                            <defs>
                                <linearGradient id="logo-gradient-nav" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3b82f6" />
                                    <stop offset="1" stopColor="#8b5cf6" />
                                </linearGradient>
                            </defs>
                            <path d="M16 4L22 16L28 10L16 28L4 10L10 16L16 4Z" fill="url(#logo-gradient-nav)" />
                            <text x="36" y="24" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="24" fill="currentColor" className="text-gray-900">Lumina</text>
                        </svg>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Features", "Reviews", "Pricing", "FAQ", "Blog"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors hover:scale-105 transform inline-block"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="#" className="text-sm font-medium text-gray-900 hover:text-primary transition-colors">
                            Log in
                        </Link>
                        <Link
                            href="#"
                            className="px-5 py-2.5 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
                        >
                            Start creating
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden p-2 text-gray-600 hover:text-black">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
