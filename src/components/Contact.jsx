import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Copy, ExternalLink, Check } from 'lucide-react';

const Contact = () => {
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const infoCards = [
        {
            id: 'email',
            icon: Mail,
            title: 'Email Me',
            value: 'kolliswami784@gmail.com',
            sub: 'Reply within 24 hours',
            type: 'copy',
            color: 'amber'
        },
        {
            id: 'linkedin',
            icon: Linkedin,
            title: 'LinkedIn',
            value: 'linkedin.com/in/kolluswamyprasad',
            sub: "Let's connect professionally",
            type: 'link',
            link: 'https://www.linkedin.com/in/kollu-swamy-prasad-219ba3297/',
            color: 'blue'
        },
        {
            id: 'github',
            icon: Github,
            title: 'GitHub',
            value: 'github.com/swamyprasad9525',
            sub: 'Check out my projects',
            type: 'link',
            link: 'https://github.com/swamyprasad9525',
            color: 'gray'
        },
        {
            id: 'phone',
            icon: Phone,
            title: 'Call / WhatsApp',
            value: '+91-9392970524',
            sub: 'Available 10AM – 8PM IST',
            type: 'copy',
            color: 'green'
        }
    ];

    return (
        <section id="contact" className="relative pb-16 overflow-hidden bg-[#080808]">
            {/* Top Transition Gradient */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f8f7f4] to-[#080808] z-20" />

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes contactGlow {
                    0%, 100% { opacity: 0.8; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.1); }
                }
                @keyframes contactDotPulse {
                    0%, 100% { opacity: 0.8; box-shadow: 0 0 12px rgba(245,158,11,0.9); }
                    50% { opacity: 1; box-shadow: 0 0 24px rgba(245,158,11,1), 0 0 40px rgba(245,158,11,0.4); }
                }
                @keyframes availablePulse {
                    0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
                    70% { box-shadow: 0 0 0 10px rgba(34,197,94,0); }
                    100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
                }
                .dot-grid {
                    background-image: radial-gradient(rgba(245,158,11,0.05) 1px, transparent 1px);
                    background-size: 24px 24px;
                }
            `}} />

            {/* Cinematic Lighting */}
            <div className="absolute inset-0 dot-grid pointer-events-none opacity-40" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30" style={{ background: 'radial-gradient(circle at top left, rgba(245,158,11,0.2) 0%, transparent 70%)', animation: 'contactGlow 6s ease-in-out infinite' }} />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30" style={{ background: 'radial-gradient(circle at top right, rgba(245,158,11,0.2) 0%, transparent 70%)', animation: 'contactGlow 6s ease-in-out infinite', animationDelay: '1.5s' }} />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-30" style={{ background: 'radial-gradient(circle at bottom left, rgba(245,158,11,0.2) 0%, transparent 70%)', animation: 'contactGlow 6s ease-in-out infinite', animationDelay: '3s' }} />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] opacity-30" style={{ background: 'radial-gradient(circle at bottom right, rgba(245,158,11,0.2) 0%, transparent 70%)', animation: 'contactGlow 6s ease-in-out infinite', animationDelay: '4.5s' }} />
            </div>

            {/* Corner Fixture Dots */}
            {[
                { top: '40px', left: '40px' },
                { top: '40px', right: '40px' },
                { bottom: '100px', left: '40px' },
                { bottom: '100px', right: '40px' }
            ].map((pos, i) => (
                <div key={i} style={{ ...pos, position: 'absolute', animation: 'contactDotPulse 4s ease-in-out infinite', animationDelay: `${i}s` }} className="w-2.5 h-2.5 rounded-full bg-amber-500 z-30 pointer-events-none shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
            ))}

            {/* Viewfinder Brackets */}
            <div className="absolute top-0 left-0 w-[100px] h-[2px] z-30" style={{ background: 'linear-gradient(to right, #f59e0b, transparent)' }} />
            <div className="absolute top-0 left-0 w-[2px] h-[100px] z-30" style={{ background: 'linear-gradient(to bottom, #f59e0b, transparent)' }} />
            <div className="absolute bottom-20 right-0 w-[100px] h-[2px] z-30" style={{ background: 'linear-gradient(to left, #f59e0b, transparent)' }} />
            <div className="absolute bottom-20 right-0 w-[2px] h-[100px] z-30" style={{ background: 'linear-gradient(to top, #f59e0b, transparent)' }} />

            <div className="max-w-4xl mx-auto px-6 pt-32 relative z-10 text-center">
                {/* Header Section */}
                <div className="text-center mb-16 relative z-10">
                    <span className="text-[11px] tracking-[0.25em] font-black text-amber-500 uppercase block mb-4">
                        Let's build something great
                    </span>
                    <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:900, color:'white', margin:'8px 0 12px' }}>
                        𝒞𝑜𝓃𝓉𝒶𝒸𝓉 <span style={{ color:'#f59e0b' }}>𝑀ℯ</span>
                    </h2>
                    <div style={{ width:'56px', height:'2px', background:'#f59e0b', borderRadius:'2px', margin:'0 auto' }} />
                </div>

                {/* Info Cards Grid - Now centered and re-aligned */}
                <div className="grid md:grid-cols-2 gap-6 items-start mb-16">
                    {infoCards.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, x: 2 }}
                            className="group relative p-6 rounded-[20px] bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-amber-500/30 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-black/40 text-left"
                            onClick={() => card.type === 'link' && window.open(card.link, '_blank')}
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                                    card.color === 'amber' ? 'bg-amber-500/10 border-amber-500/20 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]' :
                                    card.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]' :
                                    card.color === 'green' ? 'bg-green-500/10 border-green-500/20 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]' :
                                    'bg-white/10 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                                } group-hover:scale-110`}>
                                    <card.icon size={24} />
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-white text-base font-black mb-1 tracking-tight">{card.title}</h4>
                                    <p className={`text-sm font-bold mb-1 tracking-wide ${
                                        card.color === 'amber' ? 'text-amber-500' :
                                        card.color === 'blue' ? 'text-blue-500' :
                                        card.color === 'green' ? 'text-green-500' :
                                        'text-white/60'
                                    }`}>{card.value}</p>
                                    <p className="text-[11px] text-white/30 font-bold uppercase tracking-[0.1em]">{card.sub}</p>
                                </div>

                                {card.type === 'copy' ? (
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleCopy(card.value, card.id); }}
                                        className="p-3 text-white/20 hover:text-amber-500 transition-colors relative"
                                    >
                                        {copiedId === card.id ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                        <AnimatePresence>
                                            {copiedId === card.id && (
                                                <motion.span 
                                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: -30 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute right-0 text-[10px] bg-green-500 text-white px-3 py-1 rounded-full font-black uppercase tracking-tighter"
                                                >
                                                    Copied!
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                ) : (
                                    <div className="p-3 text-white/20 group-hover:text-amber-500 transition-colors">
                                        <ExternalLink size={20} />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
    
         {/* Final Simple Credit Line */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-white/10 text-[11px] font-bold uppercase tracking-[0.4em]"
                >
                    &copy; 2025 KOLLU SWAMY PRASAD
                </motion.p>
            </div>
        </section>
    );
};

export default Contact;
