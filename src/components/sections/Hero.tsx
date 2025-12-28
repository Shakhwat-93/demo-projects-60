"use client";

import { useRef } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassShape({ position, rotation, geometry, color, scale = 1 }: any) {
    return (
        <Float floatIntensity={2} rotationIntensity={1} speed={2}>
            <mesh position={position} rotation={rotation} scale={scale}>
                {geometry}
                <MeshTransmissionMaterial
                    backside
                    samples={6}
                    resolution={256}
                    transmission={0.95}
                    roughness={0.05}
                    clearcoat={0.1}
                    clearcoatRoughness={0.1}
                    thickness={0.2}
                    ior={1.5}
                    chromaticAberration={0.06}
                    anisotropy={0.1}
                    distortion={0.0}
                    distortionScale={0.3}
                    temporalDistortion={0.0}
                    color={color}
                    background={new THREE.Color("#ffffff")}
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <Environment preset="city" />

            {/* Plus Shape (Left) */}
            <group position={[-5, 1, 0]} rotation={[0, 0, Math.PI / 8]}>
                <GlassShape position={[0, 0, 0]} geometry={<boxGeometry args={[0.8, 2.5, 0.5]} />} color="#a7c5ff" />
                <GlassShape position={[0, 0, 0]} geometry={<boxGeometry args={[2.5, 0.8, 0.5]} />} color="#a7c5ff" />
            </group>

            {/* Cylinder (Mid-Left) */}
            <GlassShape
                position={[-2, -1, 1]}
                rotation={[0.5, 0.5, 0]}
                geometry={<cylinderGeometry args={[0.6, 0.6, 2, 32]} />}
                color="#c8d0ff"
            />

            {/* Cube (Mid-Right) */}
            <GlassShape
                position={[2, 1.5, -1]}
                rotation={[0.5, 0.5, 0]}
                geometry={<boxGeometry args={[1.5, 1.5, 1.5]} />}
                color="#e6f0ff"
            />

            {/* Ring (Right) */}
            <GlassShape
                position={[5, 0, 0]}
                rotation={[0.5, 0, 0]}
                geometry={<torusGeometry args={[1.2, 0.4, 16, 50]} />}
                color="#f0f5ff"
            />
        </>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-white">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Scene />
                </Canvas>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-6 mx-auto text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-gray-900">
                        Build AI that feels like <span className="text-gradient">magic</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--color-text-body)] max-w-2xl mx-auto leading-relaxed">
                        Easily connect your favorite tools and create powerful AI models.
                        Bring your AI models together in one unified platform.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            href="#"
                            className="px-8 py-4 text-lg font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            Start creating
                        </Link>
                        <Link
                            href="#"
                            className="px-8 py-4 text-lg font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:border-gray-300 hover:-translate-y-0.5"
                        >
                            Contact sales
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-100/30 blur-[120px] rounded-full z-[-1]" />
        </section>
    );
}
