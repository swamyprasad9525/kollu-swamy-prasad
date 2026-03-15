const Hero = () => {
    return (
        <section id="hero" className="min-h-screen w-full relative overflow-hidden bg-[var(--hero-bg)] transition-colors duration-300">
            {/* Amber Glow Blobs */}
            <div 
                className="absolute z-0 pointer-events-none"
                style={{
                    inset: 0,
                    background: `
                        radial-gradient(ellipse 600px 500px at 5% 30%, rgba(217, 119, 6, 0.35) 0%, transparent 70%),
                        radial-gradient(ellipse 500px 400px at 90% 60%, rgba(217, 119, 6, 0.25) 0%, transparent 70%)
                    `
                }}
            />

            {/* Giant Background Text Watermark */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-[1] select-none">
                <span 
                    className="font-black uppercase leading-[0.85] whitespace-nowrap text-[rgba(0,0,0,0.08)] dark:text-[rgba(255,255,255,0.04)]"
                    style={{ fontSize: "clamp(40px, 22vw, 240px)" }}
                    aria-hidden="true"
                >
                    FULL STACK
                </span>
                <span 
                    className="font-black uppercase leading-[0.85] whitespace-nowrap text-[rgba(0,0,0,0.08)] dark:text-[rgba(255,255,255,0.04)]"
                    style={{ fontSize: "clamp(80px, 22vw, 280px)" }}
                    aria-hidden="true"
                >
                    DEVELOPER
                </span>
            </div>

            {/* Cutout Photo */}
            <img
                src="/kolluswamyprasad.png"
                alt="Kollu Swamy Prasad - Full Stack Developer Profile Photo"
                className="absolute left-1/2 -translate-x-1/2 bottom-0 z-[2] object-contain object-bottom pointer-events-auto drop-shadow-2xl"
                style={{ height: "clamp(80vh, 90%, 90%)", maxHeight: "100vh" }}
            />
        </section>
    );
};

export default Hero;
