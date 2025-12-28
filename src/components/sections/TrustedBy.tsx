"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TrustedBy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Basic Marquee Animation
        if (!marqueeRef.current) return;

        // Clone children for seamless loop
        const scrollerContent = Array.from(marqueeRef.current.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            marqueeRef.current?.appendChild(duplicatedItem);
        });

        // GSAP Animation
        gsap.to(marqueeRef.current, {
            x: "-50%",
            duration: 20,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center mb-10">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Used and loved by many companies world-wide</p>
            </div>

            <div className="relative w-full max-w-7xl mx-auto overflow-hidden" ref={containerRef}>
                <div className="flex w-max gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500" ref={marqueeRef}>
                    {/* Logos - Reusing SVGs */}
                    <LogoVelox />
                    <LogoQuantis />
                    <LogoAstra />
                    <LogoNexus />
                    <LogoCipher />
                </div>
            </div>
        </section>
    );
}

// Inline SVGs for simplicity
function LogoVelox() {
    return (
        <svg width="120" height="32" viewBox="0 0 120 32" fill="none" className="h-8 w-auto">
            <path d="M10 6L16 26H22L28 6H22L19 18L16 6H10Z" fill="currentColor" />
            <path d="M32 6H44V10H36V14H42V18H36V22H44V26H32V6Z" fill="currentColor" />
            <path d="M48 6H52V22H60V26H48V6Z" fill="currentColor" />
            <circle cx="70" cy="16" r="9" stroke="currentColor" strokeWidth="4" />
            <path d="M86 6L94 14L102 6H108L96 18L108 30H102L94 22L86 30H80L92 18L80 6H86Z" fill="currentColor" />
        </svg>
    );
}

function LogoQuantis() {
    return (
        <svg width="130" height="32" viewBox="0 0 130 32" fill="none" className="h-8 w-auto">
            <rect x="0" y="6" width="20" height="20" rx="10" stroke="currentColor" strokeWidth="3" />
            <path d="M12 20L18 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <text x="30" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="currentColor">QUANTIS</text>
        </svg>
    )
}

function LogoAstra() {
    return (
        <svg width="100" height="32" viewBox="0 0 100 32" fill="none" className="h-8 w-auto">
            <path d="M14 4L2 28H8L10 22H18L20 28H26L14 4ZM12 18L14 10L16 18H12Z" fill="currentColor" />
            <path d="M30 14H38C42 14 44 16 44 20C44 26 40 28 36 28H30V14Z" stroke="currentColor" strokeWidth="3" />
            <text x="50" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="currentColor">ASTRA</text>
        </svg>
    )
}

function LogoNexus() {
    return (
        <svg width="110" height="32" viewBox="0 0 110 32" fill="none" className="h-8 w-auto">
            <path d="M2 28V4L14 28V4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="24" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="currentColor" letterSpacing="1">EXUS</text>
        </svg>
    )
}

function LogoCipher() {
    return (
        <svg width="110" height="32" viewBox="0 0 110 32" fill="none" className="h-8 w-auto">
            <path d="M10 16L4 26H26L20 16L26 6H4L10 16Z" fill="currentColor" />
            <text x="36" y="24" fontFamily="sans-serif" fontWeight="bold" fontSize="20" fill="currentColor">CIPHER</text>
        </svg>
    )
}
