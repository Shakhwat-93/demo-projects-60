"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Zap, Users, Boxes } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // GSAP Animation for Cards Stagger
        const ctx = gsap.context(() => {
            gsap.from(".bento-card", {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">Bring your AI models together</h2>
                    <p className="text-xl text-[var(--color-text-body)]">Powerful features to help you build faster and better.</p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {/* Large Card: Real-time Integration */}
                    <div className="bento-card md:col-span-2 md:row-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-auto">
                                <h3 className="text-2xl font-bold mb-2">Real-time Integration</h3>
                                <p className="text-[var(--color-text-body)] text-lg">Connect your data sources instantly with our advanced API.</p>
                            </div>
                            <div className="mt-8 h-48 bg-gradient-to-t from-blue-500/10 to-transparent border border-blue-100 rounded-t-xl relative overflow-hidden">
                                {/* Simulated Graph */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/mock-graph.svg')] bg-cover opacity-50"></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    {/* Medium Card: Enterprise Security */}
                    <div className="bento-card glass-panel p-8 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                        <div className="size-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 border border-blue-100">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                            <p className="text-[var(--color-text-body)]">Bank-grade encryption for all your data.</p>
                        </div>
                    </div>

                    {/* Medium Card: Lightning Fast */}
                    <div className="bento-card glass-panel p-8 rounded-3xl flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
                        <div className="size-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-4 border border-blue-100">
                            <Zap size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                            <p className="text-[var(--color-text-body)]">Optimized for low-latency performance.</p>
                        </div>
                    </div>

                    {/* Wide Card: Collaboration */}
                    <div className="bento-card md:col-span-3 glass-panel p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between group hover:-translate-y-1 transition-transform duration-300">
                        <div className="max-w-md">
                            <h3 className="text-xl font-bold mb-2">Seamless Collaboration</h3>
                            <p className="text-[var(--color-text-body)]">Work together with your team in real-time.</p>
                        </div>
                        <div className="flex -space-x-3 mt-4 md:mt-0">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="size-10 rounded-full bg-gray-200 border-2 border-white ring-1 ring-gray-100" />
                            ))}
                            <div className="size-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">+5</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
