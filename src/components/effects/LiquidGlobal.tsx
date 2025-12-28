export default function LiquidGlobal() {
    return (
        <svg className="hidden">
            <defs>
                <filter id="liquid">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" result="warp" />
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp" />
                </filter>
            </defs>
        </svg>
    );
}
