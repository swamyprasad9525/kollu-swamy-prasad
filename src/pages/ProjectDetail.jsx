import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const currentIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#111111] text-white">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/')} className="text-amber-500 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
      </div>
    );
  }

  const ensureAbsoluteUrl = (url) => {
    if (!url || url === '#') return '#';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    return `https://${url}`;
  };

  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];
  const projectNumber = String(currentIndex + 1).padStart(2, '0');
  const totalProjects = String(projectsData.length).padStart(2, '0');

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-amber-500/30">
      
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
        <button 
          onClick={() => navigate('/')}
          className="pointer-events-auto flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Go Back</span>
        </button>
        <div className="pointer-events-auto text-white/50 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-mono text-sm">
          {projectNumber} / {totalProjects}
        </div>
      </nav>

      {/* Hero Image Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[70vh] min-h-[400px] overflow-hidden"
      >
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.02)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-black/10" />
        
        {/* Hero Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12 md:pb-16 flex flex-col gap-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, lineHeight: 1.1, textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
            className="tracking-tight max-w-5xl text-white"
          >
            {project.title}
          </motion.h1>

          {/* Underline decorative bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 60 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ height: '3px', background: '#f59e0b', borderRadius: '3px' }}
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {project.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Content Area */}
      <motion.main 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-12 py-20 font-light"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - Overview & Features */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold tracking-widest text-amber-500 uppercase">Overview</h3>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9, fontWeight: 300 }}>
                {project.overview}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <h3 className="text-xs font-bold tracking-widest text-amber-500 uppercase">Key Features</h3>
              <ul className="flex flex-col gap-5">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle size={18} className="text-amber-500 shrink-0 mt-1" />
                    <span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontWeight: 300 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Info & Action */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div 
              variants={fadeInUp} 
              className="flex flex-col gap-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px 24px'
              }}
            >
              <h3 className="text-xs font-bold tracking-widest text-amber-500 uppercase mb-2">Project Info</h3>
              <div className="flex flex-col gap-0 cursor-default">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span style={{ fontSize: '11px', color: 'rgba(245,158,11,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Role</span>
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>Full Stack Developer</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span style={{ fontSize: '11px', color: 'rgba(245,158,11,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Year</span>
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>{project.year}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span style={{ fontSize: '11px', color: 'rgba(245,158,11,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Type</span>
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>{project.type}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span style={{ fontSize: '11px', color: 'rgba(245,158,11,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Status</span>
                  <span style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>{project.status}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3">
              <a 
                href={ensureAbsoluteUrl(project.live)} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  boxShadow: '0 8px 30px rgba(245,158,11,0.3)',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  color: 'black',
                  fontWeight: 800,
                  fontSize: '14px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                  transition: 'all 0.3s'
                }}
                className="hover:brightness-110 hover:translate-y-[-2px]"
                onClick={(e) => project.live === '#' && e.preventDefault()}
              >
                View Live <ExternalLink size={16} strokeWidth={2.5} />
              </a>
              <a 
                href={ensureAbsoluteUrl(project.github)} 
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px',
                  transition: 'all 0.3s'
                }}
                className="hover:bg-white/10 hover:border-white/30"
              >
                <Github size={16} /> View on GitHub
              </a>
            </motion.div>
          </div>

        </div>
      </motion.main>

      {/* Next Project Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full border-t border-white/10 py-24 md:py-32 flex flex-col items-center justify-center text-center px-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Next Project</span>
        <Link 
          to={`/projects/${nextProject.slug}`}
          className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 hover:opacity-100 transition-opacity"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
            {nextProject.title.split('—')[0].trim()}
          </h2>
          <ArrowRight size={40} className="text-white group-hover:text-amber-500 transform group-hover:translate-x-4 transition-all duration-300" />
        </Link>
      </motion.div>

    </div>
  );
};

export default ProjectDetail;
