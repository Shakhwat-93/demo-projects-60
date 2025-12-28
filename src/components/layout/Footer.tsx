"use client";

import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <svg width="100" height="26" viewBox="0 0 120 32" fill="none" className="h-6 w-auto">
                                <defs>
                                    <linearGradient id="logo-gradient-footer" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3b82f6" />
                                        <stop offset="1" stopColor="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                                <path d="M16 4L22 16L28 10L16 28L4 10L10 16L16 4Z" fill="url(#logo-gradient-footer)" />
                                <text x="36" y="24" fontFamily="Figtree, sans-serif" fontWeight="700" fontSize="24" fill="#0a0a0a">Lumina</text>
                            </svg>
                        </Link>
                        <p className="text-[var(--color-text-body)] text-sm">Build AI that feels like magic.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-body)]">
                            <li><Link href="#" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-body)]">
                            <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-[var(--color-text-body)]">
                            <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-400">&copy; 2024 Lumina. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></Link>
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors"><Github size={20} /></Link>
                        <Link href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
