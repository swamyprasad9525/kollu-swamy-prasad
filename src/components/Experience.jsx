import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 overflow-hidden"
            style={{ 
                background: '#080808',
                borderTop: '1px solid rgba(245,158,11,0.12)',
                borderBottom: '1px solid rgba(245,158,11,0.12)'
            }}>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes sectionGlowExp {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.05); }
                }
                @keyframes dotPulseExp {
                    0%, 100% {
                        opacity: 0.8;
                        box-shadow: 0 0 10px rgba(245,158,11,0.95), 0 0 25px rgba(245,158,11,0.65), 0 0 50px rgba(245,158,11,0.35);
                    }
                    50% {
                        opacity: 1;
                        box-shadow: 0 0 15px rgba(245,158,11,1), 0 0 40px rgba(245,158,11,0.85), 0 0 70px rgba(245,158,11,0.5), 0 0 100px rgba(245,158,11,0.2);
                    }
                }
                @keyframes internalGlow {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.7; }
                }
            `}} />

            {/* Section Corner Lights */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at top left, rgba(245,158,11,0.25) 0%, transparent 75%)', animation: 'sectionGlowExp 4s ease-in-out infinite', animationDelay: '0s' }} />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at top right, rgba(245,158,11,0.25) 0%, transparent 75%)', animation: 'sectionGlowExp 4s ease-in-out infinite', animationDelay: '1s' }} />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at bottom left, rgba(245,158,11,0.25) 0%, transparent 75%)', animation: 'sectionGlowExp 4s ease-in-out infinite', animationDelay: '2s' }} />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at bottom right, rgba(245,158,11,0.25) 0%, transparent 75%)', animation: 'sectionGlowExp 4s ease-in-out infinite', animationDelay: '3s' }} />

            {/* Corner Fixture Dots */}
            {[
                { top: '24px', left: '24px', delay: '0s' },
                { top: '24px', right: '24px', delay: '1s' },
                { bottom: '24px', left: '24px', delay: '2s' },
                { bottom: '24px', right: '24px', delay: '3s' }
            ].map((pos, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    ...pos,
                    width: '10px', height: '10px',
                    borderRadius: '50%',
                    background: 'rgba(255,210,80,0.95)',
                    zIndex: 1, pointerEvents: 'none',
                    animation: 'dotPulseExp 4s ease-in-out infinite',
                    animationDelay: pos.delay
                }} />
            ))}

            {/* Viewfinder Brackets */}
            <div className="absolute top-0 left-0 w-[80px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to right, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute top-0 left-0 w-[2px] h-[80px]" style={{ zIndex: 1, background: 'linear-gradient(to bottom, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute top-0 right-0 w-[80px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to left, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute top-0 right-0 w-[2px] h-[80px]" style={{ zIndex: 1, background: 'linear-gradient(to bottom, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute bottom-0 left-0 w-[80px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to right, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute bottom-0 left-0 w-[2px] h-[80px]" style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute bottom-0 right-0 w-[80px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to left, rgba(245,158,11,0.7), transparent)' }} />
            <div className="absolute bottom-0 right-0 w-[2px] h-[80px]" style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(245,158,11,0.7), transparent)' }} />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 900, color: 'white', margin: '0 0 16px' }}>
                         𝓣𝓻𝓪𝓲𝓷𝓲𝓷𝓰
                    </h2>
                    <div style={{ width: '56px', height: '2px', background: '#f59e0b', borderRadius: '2px', margin: '0 auto' }} />
                </div>

                {/* Experience Card */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <div className="relative overflow-hidden p-8 md:p-10 rounded-[24px] bg-white/[0.03] border border-white/[0.08] border-l-[3px] border-l-amber-500 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)] hover:border-l-amber-400">
                        
                        {/* Internal Card Spotlights */}
                        <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at top left, rgba(245,158,11,0.15), transparent)', animation: 'internalGlow 3s infinite' }} />
                        <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(245,158,11,0.15), transparent)', animation: 'internalGlow 3s infinite', animationDelay: '0.7s' }} />
                        <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom left, rgba(245,158,11,0.15), transparent)', animation: 'internalGlow 3s infinite', animationDelay: '1.4s' }} />
                        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none" style={{ background: 'radial-gradient(circle at bottom right, rgba(245,158,11,0.15), transparent)', animation: 'internalGlow 3s infinite', animationDelay: '2.1s' }} />

                        <div className="grid lg:grid-cols-12 gap-10 relative z-10">
                            {/* Left Side: Logo & Main Info */}
                            <div className="lg:col-span-5 flex flex-col items-start">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-amber-400/30 text-black shadow-lg">
                                        <img 
                                            src="/logos/lpu.png" 
                                            alt="Lovely Professional University Logo" 
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <span className="hidden w-full h-full font-black text-xl items-center justify-center">LPU</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white leading-tight mb-1">
                                            Java Maestro Trainee
                                        </h3>
                                        <p className="text-amber-500 text-sm font-bold tracking-wide uppercase">
                                            Lovely Professional University
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                        <Calendar size={14} className="text-amber-500/70" />
                                        <span className="text-xs font-medium uppercase tracking-widest">Jun 2025 – Jul 2025</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                                        <MapPin size={14} className="text-amber-500/70" />
                                        <span className="text-xs font-medium uppercase tracking-widest">Jalandhar, Punjab</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Description & Tech */}
                            <div className="lg:col-span-7 flex flex-col">
                                <span className="text-[10px] tracking-[0.2em] font-black text-amber-500/80 uppercase mb-4 block">
                                    What I did
                                </span>
                                <p className="text-white/70 text-base leading-relaxed mb-8 font-light italic border-l border-white/5 pl-6">
                                    " Completed hands-on training in Core Java, covering OOP concepts, exception handling, collections, file handling, and data management. Designed interactive GUI applications using Java Swing and AWT. Implemented a Billing & Document Management System with role-based login. "
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['Java Swing', 'AWT', 'OOP', 'File Handling'].map((tech) => (
                                        <span key={tech} className="bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex justify-end">
                                    <a href="https://drive.google.com/file/d/1lUw4Q6gJUAZtppsq6HHNVN0AGQuioY96/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-500 text-sm font-bold hover:gap-4 transition-all duration-300">
                                        Certificate <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;

