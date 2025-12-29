import { Github, Linkedin, Mail, Code2, Database, Server, Globe, Cpu, Cloud, AppWindow, Terminal, Layers, ExternalLink, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Galaxy from './Galaxy';


const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10">
            {/* Galaxy Animation Background */}
            <div className="absolute inset-0 z-0">
                <Galaxy
                    starSpeed={0.2}
                    speed={0.3}
                    density={1.5}
                    glowIntensity={0.4}
                    mouseInteraction={true}
                />
            </div>

            {/* Optional: Keep faint gradient overlay if needed for text readability, 
                but Galaxy has its own alpha. Let's add a subtle radial gradient to focus center. */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-950/80 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <div className="text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[var(--action-primary)] font-medium tracking-wide uppercase mb-4">Full-Stack Developer</h2>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--text-primary)] leading-tight">
                            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">Kollu Swamy Prasad</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--text-muted)] mb-8 max-w-lg leading-relaxed">
                            B.Tech Computer Science student at Lovely Professional University with a passion for building scalable web applications and solving complex problems.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center md:justify-start gap-6 mb-8 md:mb-0"
                    >
                        {[
                            { icon: Github, href: "https://github.com/swamyprasad9525", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com/in/kollu-swamy-prasad-219ba3297", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:kolliswami784@gmail.com", label: "Email" }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-[var(--bg-secondary)] rounded-full hover:bg-[var(--action-primary)] hover:text-white transition-all duration-300 border border-slate-700/50 group text-[var(--text-muted)]"
                                aria-label={item.label}
                            >
                                <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex gap-4 mt-2"
                    >
                        <a
                            href="/resume.jpg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full font-bold text-slate-900 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all flex items-center gap-2 group"
                        >
                            View Resume <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Right: Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-30 group-hover:opacity-60 blur-2xl transition duration-500 animate-pulse" />

                        {/* Image Container with Glass Border */}
                        <div className="relative w-full h-full rounded-full border-4 border-slate-800/50 overflow-hidden shadow-2xl bg-slate-900">
                            <img
                                src="/kollu-swamy-prasad.jpg"
                                alt="Kollu Swamy Prasad Photo"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating Badge (optional aesthetic touch) */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-full flex items-center gap-2 border border-amber-500/30"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-mono text-amber-100">Open to Work</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
