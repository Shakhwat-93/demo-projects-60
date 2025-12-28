import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import LiquidGlobal from "@/components/effects/LiquidGlobal";
import "./globals.css";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Lumina - AI Integration Platform",
    description: "Build AI that feels like magic. Connect your favorite tools and create powerful AI models.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${figtree.variable} antialiased`}>
                <LiquidGlobal />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
