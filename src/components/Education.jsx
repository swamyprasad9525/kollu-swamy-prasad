import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Trophy, Star } from 'lucide-react';

const InstitutionLogo = ({ src, initials, gradient, alt }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="relative group/logo">
            {/* Subtle decorative circle behind */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-amber-500/[0.04] border border-amber-500/[0.08] pointer-events-none z-0" />
            
            <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl border-2 border-amber-500/20 transition-transform duration-500 group-hover:scale-110 overflow-hidden`}
                style={{ background: gradient }}>
                
                {!imgError ? (
                    <img 
                        src={src} 
                        alt={alt || initials} 
                        className="w-[85%] h-[85%] object-contain p-1"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <span className="text-xl font-black bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                        {initials}
                    </span>
                )}
            </div>
        </div>
    );
};

const Education = () => {
    const educationData = [
        {
            institution: "Lovely Professional University",
            degree: "B.Tech in Computer Science & Engineering",
            location: "Jalandhar, Punjab, India",
            period: "Aug 2023 – Present",
            yearLabel: "2023 – PRESENT",
            description: "Current CGPA: 7.53. Focusing on Software Engineering, Web Technologies and Full Stack Development.",
            initials: "LPU",
            src: "/logos/image.png",
            gradient: "linear-gradient(135deg, #1a1a2e, #16213e)",
            badge: "Currently Enrolled",
            badgeType: "status"
        },
        {
            institution: "Sri Chaitanya Junior College",
            degree: "Intermediate — MPC Stream",
            location: "Vijayawada, Andhra Pradesh",
            period: "Jul 2021 – Mar 2023",
            yearLabel: "2021 – 2023",
            description: "Achieved 89% in Mathematics, Physics and Chemistry stream. Strong foundation in analytical and problem-solving thinking.",
            initials: "SC",
            src: "/logos/srichaitanya.png",
            gradient: "linear-gradient(135deg, #1e3a5f, #1a237e)",
            badge: "89% Score",
            badgeType: "score"
        },
        {
            institution: "Oxford High School",
            degree: "Matriculation — SSC",
            location: "Uppugunduru, Andhra Pradesh",
            period: "Mar 2021",
            yearLabel: "2021",
            description: "Graduated with 100% percentage. Demonstrated exceptional academic discipline and consistency.",
            initials: "OHS",
            src: "/logos/oxford.png",
            gradient: "linear-gradient(135deg, #3d1a78, #2d0a5e)",
            badge: "100% Score",
            badgeType: "award"
        }
    ];

    return (
        <section id="education" className="relative py-24 px-6 overflow-hidden"
            style={{ 
                background: '#ffffff',
                borderTop: '1px solid rgba(0,0,0,0.03)'
            }}>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulseGreen {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                }
            `}} />

            <div className="max-w-[950px] mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-[11px] tracking-[0.3em] font-black text-amber-500 uppercase block mb-3">
                        Academic Background
                    </span>
                    <h2 style={{ fontSize: 'clamp(36px,6vw,56px)', fontWeight: 900, color: '#0a0a0a', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
                         𝓔𝓭𝓾𝓬𝓪𝓽𝓲𝓸𝓷
                    </h2>
                    <div style={{ width: '64px', height: '3px', background: '#f59e0b', borderRadius: '4px', margin: '0 auto' }} />
                </div>

                <div className="flex flex-col items-center">
                    {educationData.map((edu, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="w-full relative group"
                            >
                                <div className="relative overflow-hidden p-8 md:p-10 rounded-[28px] bg-white border border-black/[0.06] border-l-[5px] border-l-amber-500 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:translate-y-[-6px] hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:border-l-[#d97706] hover:bg-[#fffefe]">
                                    
                                    <div className="grid md:grid-cols-12 gap-10 relative z-10 items-center">
                                        {/* Left: Logo Area */}
                                        <div className="md:col-span-3 flex flex-col items-center justify-center text-center">
                                            <InstitutionLogo src={edu.src} initials={edu.initials} alt={`${edu.institution} Logo`} gradient={edu.gradient} />
                                            <span className="mt-5 text-[11px] tracking-[0.2em] font-black text-amber-500 uppercase">
                                                {edu.yearLabel}
                                            </span>
                                        </div>

                                        {/* Right: Content Area */}
                                        <div className="md:col-span-9 flex flex-col relative z-10">
                                            <div className="flex justify-between items-start mb-3 flex-wrap gap-4">
                                                <div className="flex-1 min-w-[200px]">
                                                    <h3 className="text-2xl font-black text-[#0a0a0a] leading-tight mb-2 tracking-tight">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-amber-600 text-base font-bold tracking-wide">
                                                        {edu.institution}
                                                    </p>
                                                </div>

                                                {/* Badge */}
                                                <div className={`flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-black tracking-widest uppercase border-2 ${
                                                    edu.badgeType === 'status' 
                                                        ? 'bg-green-50/50 border-green-500/20 text-green-700' 
                                                        : edu.badgeType === 'award'
                                                        ? 'bg-amber-50 border-amber-500/30 text-[#92400e] shadow-sm'
                                                        : 'bg-amber-50/50 border-amber-500/20 text-[#b45309]'
                                                }`}>
                                                    {edu.badgeType === 'status' && (
                                                        <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: 'pulseGreen 2s ease-in-out infinite' }} />
                                                    )}
                                                    {edu.badgeType === 'award' && <Trophy size={13} className="text-amber-600" />}
                                                    {edu.badgeType === 'score' && <Star size={13} className="fill-amber-500 text-amber-500" />}
                                                    {edu.badge}
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-3 mb-6">
                                                <div className="flex items-center gap-2.5 text-gray-500 text-sm font-medium">
                                                    <MapPin size={15} className="text-amber-500" />
                                                    {edu.location}
                                                </div>
                                                <div className="flex items-center gap-2.5 text-gray-500 text-sm font-medium">
                                                    <Calendar size={15} className="text-amber-500" />
                                                    {edu.period}
                                                </div>
                                            </div>

                                            <p className="text-gray-700 text-base leading-[1.8] font-normal leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Connector between cards */}
                            {index < educationData.length - 1 && (
                                <div className="h-12 w-[2px] relative flex flex-col items-center justify-center">
                                    <div className="h-full border-l-[3px] border-dotted border-amber-500/25" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#f59e0b] shadow-[0_0_0_6px_rgba(245,158,11,0.12)]" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;


