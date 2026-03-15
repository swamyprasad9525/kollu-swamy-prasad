import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Lightbulb, Users, FileText, Github, Linkedin, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-14 overflow-hidden"
      style={{ 
        background: '#080808',
        borderTop: '1px solid rgba(245,158,11,0.12)',
        borderBottom: '1px solid rgba(245,158,11,0.12)'
      }}>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sectionGlow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.01); }
        }
        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.8;
            box-shadow: 0 0 14px rgba(245,158,11,0.95), 0 0 40px rgba(245,158,11,0.65), 0 0 70px rgba(245,158,11,0.35);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 18px rgba(245,158,11,1), 0 0 60px rgba(245,158,11,0.85), 0 0 90px rgba(245,158,11,0.5), 0 0 120px rgba(245,158,11,0.2);
          }
        }
      `}} />

      {/* 4 Large Corner Glow Divs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at top left, rgba(245,158,11,0.3) 0%, transparent 75%)', animation: 'sectionGlow 4s ease-in-out infinite', animationDelay: '0s' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at top right, rgba(245,158,11,0.3) 0%, transparent 75%)', animation: 'sectionGlow 4s ease-in-out infinite', animationDelay: '1s' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at bottom left, rgba(245,158,11,0.3) 0%, transparent 75%)', animation: 'sectionGlow 4s ease-in-out infinite', animationDelay: '2s' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none" style={{ zIndex: 0, background: 'radial-gradient(circle at bottom right, rgba(245,158,11,0.3) 0%, transparent 75%)', animation: 'sectionGlow 4s ease-in-out infinite', animationDelay: '3s' }} />

      {/* 4 Small Bright Light Source Dots */}
      <div style={{ position: 'absolute', top: '16px', left: '16px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,210,80,0.95)', zIndex: 1, pointerEvents: 'none', animation: 'dotPulse 4s ease-in-out infinite', animationDelay: '0s' }} />
      <div style={{ position: 'absolute', top: '16px', right: '16px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,210,80,0.95)', zIndex: 1, pointerEvents: 'none', animation: 'dotPulse 4s ease-in-out infinite', animationDelay: '1s' }} />
      <div style={{ position: 'absolute', bottom: '16px', left: '16px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,210,80,0.95)', zIndex: 1, pointerEvents: 'none', animation: 'dotPulse 4s ease-in-out infinite', animationDelay: '2s' }} />
      <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,210,80,0.95)', zIndex: 1, pointerEvents: 'none', animation: 'dotPulse 4s ease-in-out infinite', animationDelay: '3s' }} />

      {/* 4 Corner Viewfinder Brackets */}
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-[60px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to right, rgba(245,158,11,0.7), transparent)' }} />
      <div className="absolute top-0 left-0 w-[2px] h-[60px]" style={{ zIndex: 1, background: 'linear-gradient(to bottom, rgba(245,158,11,0.7), transparent)' }} />
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-[60px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to left, rgba(245,158,11,0.7), transparent)' }} />
      <div className="absolute top-0 right-0 w-[2px] h-[60px]" style={{ zIndex: 1, background: 'linear-gradient(to bottom, rgba(245,158,11,0.7), transparent)' }} />
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[60px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to right, rgba(245,158,11,0.7), transparent)' }} />
      <div className="absolute bottom-0 left-0 w-[2px] h-[60px]" style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(245,158,11,0.7), transparent)' }} />
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[60px] h-[2px]" style={{ zIndex: 1, background: 'linear-gradient(to left, rgba(245,158,11,0.7), transparent)' }} />
      <div className="absolute bottom-0 right-0 w-[2px] h-[60px]" style={{ zIndex: 1, background: 'linear-gradient(to top, rgba(245,158,11,0.7), transparent)' }} />

      {/* Re-adding original Glow blobs behind viewfinder */}
      <div className="absolute pointer-events-none" style={{
        top: '-100px', right: '-100px', width: '600px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.08) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-80px', left: '-80px', width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
        borderRadius: '50%', zIndex: 0
      }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        zIndex: 0
      }} />

      {/* Main Content Wrapper */}
      <div className="relative" style={{ zIndex: 2 }}>

      {/* Block 1 — Section heading */}
      <div className="text-center mb-16 relative z-10">
        {/* <span style={{ fontSize:'11px', letterSpacing:'0.2em', color:'#f59e0b', fontWeight:600, textTransform:'uppercase' }}>
          Get to know me
        </span> */}
        <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:900, color:'white', margin:'8px 0 12px' }}>
          𝒜𝒷𝑜𝓊𝓉  <span style={{ color:'#f59e0b' }}>𝑀𝑒</span>
        </h2>
        <div style={{ width:'56px', height:'2px', background:'#f59e0b', borderRadius:'2px', margin:'0 auto' }} />
      </div>

      {/* Block 2 — Name introduction */}
      <motion.div
        initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7 }}
        className="relative z-10 max-w-5xl mx-auto px-6 mb-14"
      >
        <p style={{ fontSize:'16px', color:'rgba(255,255,255,0.4)', fontWeight:300, letterSpacing:'0.05em', marginBottom:'8px' }}>
          Hi, I'm
        </p>
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #ffffff 40%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px',
          lineHeight: 1.1
        }}>
          Kollu Swamy Prasad
        </h1>
        <p style={{ fontSize:'15px', color:'#f59e0b', fontWeight:500, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'14px' }}>
          Full Stack Developer
        </p>
        <div style={{ width:'60px', height:'2px', background:'#f59e0b', borderRadius:'2px' }} />
      </motion.div>

      {/* Block 3 — Quote block */}
      <motion.div
        initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
        transition={{ duration:0.7, delay:0.1 }}
        className="relative z-10 max-w-5xl mx-auto px-6 mb-14"
        style={{ borderLeft:'4px solid #f59e0b', paddingLeft:'24px' }}
      >
        <p style={{ fontSize:'clamp(16px,2vw,22px)', fontStyle:'italic', fontWeight:300, color:'rgba(255,255,255,0.88)', lineHeight:1.6, marginBottom:'10px' }}>
          " B.Tech Computer Science student at Lovely Professional University — building scalable web apps and solving real-world problems with code. "
        </p>
        <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.38)' }}>
          I love turning complex problems into clean, elegant solutions.
        </p>
      </motion.div>

      {/* Block 4 — 4 trait cards horizontal row */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mb-10">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes cornerGlow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
        `}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Zap size={28} />,        title: 'Fast Learner',    desc: 'Adapting to new technologies quickly' },
            { icon: <Target size={28} />,     title: 'Detail Oriented', desc: 'Pixel-perfect execution always' },
            { icon: <Lightbulb size={28} />,  title: 'Problem Solver',  desc: 'Clean and elegant solutions' },
            { icon: <Users size={28} />,      title: 'Team Player',     desc: 'Collaborative and communicative' },
          ].map((trait, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              transition={{ delay: i * 0.1 }}
              id={`trait-card-${i}`}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(245,158,11,0.12)',
                borderTop: '2px solid rgba(245,158,11,0.3)',
                borderRadius: '20px',
                padding: '28px 20px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ 
                y: -6, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Corner Spotlight Gradients */}
              {[
                { top:0, left:0, bg:'top left', delay:'0s' },
                { top:0, right:0, bg:'top right', delay:'0.75s' },
                { bottom:0, left:0, bg:'bottom left', delay:'1.5s' },
                { bottom:0, right:0, bg:'bottom right', delay:'2.25s' }
              ].map((pos, idx) => (
                <div key={idx} className="corner-light" style={{
                  position: 'absolute',
                  top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom,
                  width: '120px', height: '120px',
                  background: `radial-gradient(circle at ${pos.bg}, rgba(245,158,11,0.35) 0%, transparent 70%)`,
                  pointerEvents: 'none', zIndex: 0,
                  animation: 'cornerGlow 3s ease-in-out infinite',
                  animationDelay: pos.delay,
                  transition: 'opacity 0.4s ease'
                }} />
              ))}

              {/* Tiny Fixture Dots */}
              <div style={{ position: 'absolute', top: '8px', left: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,200,80,0.9)', boxShadow: '0 0 8px rgba(245,158,11,0.8), 0 0 16px rgba(245,158,11,0.4)', zIndex: 1 }} />
              <div style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,200,80,0.9)', boxShadow: '0 0 8px rgba(245,158,11,0.8), 0 0 16px rgba(245,158,11,0.4)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,200,80,0.9)', boxShadow: '0 0 8px rgba(245,158,11,0.8), 0 0 16px rgba(245,158,11,0.4)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,200,80,0.9)', boxShadow: '0 0 8px rgba(245,158,11,0.8), 0 0 16px rgba(245,158,11,0.4)', zIndex: 1 }} />

              {/* Subtle Hover Center Glow */}
              <div className="hover-center-glow" style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.05) 0%, transparent 60%)',
                opacity: 0, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 0
              }} />

              <style dangerouslySetInnerHTML={{ __html: `
                #trait-card-${i}:hover .corner-light { opacity: 0.85 !important; }
                #trait-card-${i}:hover .hover-center-glow { opacity: 1 !important; }
              `}} />

              {/* Content Box */}
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(245,158,11,0.1)',
                  border: '1px solid rgba(245,158,11,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#f59e0b',
                  marginBottom: '14px',
                  margin: '0 auto 14px',
                  boxShadow: '0 4px 20px rgba(245,158,11,0.15)'
                }}>
                  {trait.icon}
                </div>
                <div style={{ fontSize:'14px', fontWeight:700, color:'white', marginBottom:'6px' }}>{trait.title}</div>
                <div style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)', lineHeight:1.6 }}>{trait.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Block 6 — CTA row */}
      <div className="relative z-10 flex justify-center gap-4 flex-wrap px-6">
        <a href="/resume.jpg"
          download="Kollu_Swamy_Prasad_Resume.jpg"
          style={{
            padding: '11px 28px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: '#000',
            fontWeight: 700,
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 20px rgba(245,158,11,0.3)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(245,158,11,0.45)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.3)'
          }}
        >
          <Download size={15} />
          Download Resume
        </a>
        <a href="/resume.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '11px 28px',
            borderRadius: '999px',
            border: '1px solid rgba(245,158,11,0.4)',
            color: '#f59e0b',
            fontSize: '13px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
            letterSpacing: '0.03em'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(245,158,11,0.1)'
            e.currentTarget.style.borderColor = '#f59e0b'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <FileText size={15} />
          View CV
        </a>
        <a href="https://github.com/swamyprasad9525" target="_blank" rel="noopener noreferrer"
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#f59e0b'
            e.currentTarget.style.color = '#f59e0b'
            e.currentTarget.style.background = 'rgba(245,158,11,0.08)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <Github size={17} />
        </a>
        <a href="https://www.linkedin.com/in/kollu-swamy-prasad-219ba3297/" target="_blank" rel="noopener noreferrer"
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'rgba(255,255,255,0.5)',
            textDecoration: 'none',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#f59e0b'
            e.currentTarget.style.color = '#f59e0b'
            e.currentTarget.style.background = 'rgba(245,158,11,0.08)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <Linkedin size={17} />
        </a>
      </div>

      </div>
    </section>
  );
};

export default About;
