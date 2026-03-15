import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative py-20 px-4 md:px-10 overflow-hidden" style={{ background: '#111111' }}>
      
      {/* Background Enhancements */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 50% 40%, rgba(245,158,11,0.04) 0%, transparent 70%)'
        }}
      />
      
      {/* Block 1 — Section heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:900, color:'white', margin:'8px 0 12px' }}>
          𝒫𝓇𝑜𝒿𝑒𝒸𝓉  <span style={{ color:'#f59e0b' }}>𝒮𝒽𝑜𝓌𝒸𝒶𝓈𝑒</span>
        </h2>
        <div style={{ width:'56px', height:'2px', background:'#f59e0b', borderRadius:'2px', margin:'0 auto' }} />
      </div>

      {/* The Grid Layout - No Wrappers, just a pure raw grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full max-w-[2000px] mx-auto relative z-10">
        {projectsData.map((project, index) => {
          const projectNum = String(index + 1).padStart(2, '0');
          
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => navigate(`/projects/${project.slug}`)}
              className="relative w-full overflow-hidden cursor-pointer"
              id={`proj-card-${index}`}
              style={{
                aspectRatio: '4/3',
                borderRadius: '12px',
                backgroundColor: '#1a1a1a',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              {/* Thumbnail Image - Dramatic greyscale with zoom on hover */}
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 ease-out"
                style={{
                  filter: 'grayscale(20%) brightness(0.85)',
                  transform: 'scale(1)',
                }}
              />
              
              <style dangerouslySetInnerHTML={{__html: `
                #proj-card-${index}:hover img {
                  filter: grayscale(0%) brightness(1) !important;
                  transform: scale(1.06) !important;
                }
                #proj-card-${index} {
                  border: 1px solid rgba(255,255,255,0.06);
                  transition: all 0.4s ease;
                }
                #proj-card-${index}:hover {
                  border: 1px solid rgba(245,158,11,0.5);
                  box-shadow: 0 0 0 1px rgba(245,158,11,0.2),
                              0 24px 60px rgba(0,0,0,0.4),
                              0 0 40px rgba(245,158,11,0.08);
                }
                #proj-card-${index} .hover-content {
                  opacity: 0;
                  transform: translateY(20px);
                  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                #proj-card-${index}:hover .hover-content {
                  opacity: 1;
                  transform: translateY(0);
                }
                #proj-card-${index} .hover-overlay {
                  opacity: 0;
                  transition: opacity 0.4s ease;
                }
                #proj-card-${index}:hover .hover-overlay {
                  opacity: 1;
                }
              `}} />

              {/* Hover Overlay Background Layers */}
              <div className="absolute inset-0 pointer-events-none hover-overlay">
                {/* Bottom layer */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1) 100%)', zIndex: 10 }} />
                {/* Middle layer */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(245,158,11,0.15) 0%, transparent 30%)', zIndex: 11 }} />
                {/* Top layer */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%)', zIndex: 12 }} />
              </div>

              {/* Number Badge (Always visible) */}
              <div 
                className="absolute"
                style={{
                  top: '16px', left: '16px',
                  background: 'rgba(245,158,11,0.9)',
                  color: 'black',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  zIndex: 20
                }}
              >
                {projectNum}
              </div>

              {/* Hover Content Area (Slides up) */}
              <div 
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 hover-content"
                style={{ zIndex: 20 }}
              >
                <div className="flex flex-col gap-4">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} style={{ 
                        background: 'rgba(255,255,255,0.12)', 
                        border: '1px solid rgba(255,255,255,0.2)', 
                        backdropFilter: 'blur(8px)',
                        color: 'white',
                        fontSize: '10px',
                        padding: '3px 10px',
                        borderRadius: '999px'
                      }}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span style={{ 
                        background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
                        color: 'white', fontSize: '10px', padding: '3px 10px', borderRadius: '999px'
                      }}>+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(18px, 2.5vw, 28px)',
                    fontWeight: 900,
                    color: 'white',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                    lineHeight: 1.1
                  }}>
                    {project.title.split('—')[0].trim()}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.6)',
                    maxWidth: '100%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {project.overview}
                  </p>

                  {/* Action buttons row */}
                  <div className="flex items-center gap-3 mt-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                      aria-label={`View ${project.title.split('—')[0].trim()} on GitHub`}
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        backdropFilter: 'blur(12px)',
                        color: 'white',
                        borderRadius: '999px',
                        padding: '8px 18px',
                        fontSize: '12px',
                        fontWeight: 600
                      }}
                      className="hover:bg-white/20 transition-colors"
                    >
                      GitHub
                    </button>
                    <button 
                      aria-label={`View ${project.title.split('—')[0].trim()} details`}
                      style={{
                        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                        color: 'black',
                        fontWeight: 700,
                        borderRadius: '999px',
                        padding: '8px 18px',
                        fontSize: '12px',
                        boxShadow: '0 4px 20px rgba(245,158,11,0.4)'
                      }}
                      className="hover:brightness-110 transition-all flex items-center gap-1"
                    >
                      View Project <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Enhancement 8 - Bottom CTA upgrade */}
      <div className="relative z-10 max-w-[2000px] mx-auto w-full mt-24">
        <div className="flex justify-center items-center gap-4">
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)' }}>
            Interested in working together?
          </span>
          <span style={{ color: '#f59e0b' }}>→</span>
          <a 
            href="https://github.com/swamyprasad9525" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors"
            style={{ fontSize: '14px', fontWeight: 700 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <span className="border-b border-transparent hover:border-amber-500">View GitHub Profile</span>
          </a>
        </div>
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.06)', marginTop: '32px' }} />
      </div>

    </section>
  );
};

export default Projects;
