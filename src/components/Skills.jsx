import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaLinux, FaJava } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiNextdotjs, SiExpress, SiRedux, SiMysql, SiFigma, SiPostman, SiPhp, SiHtml5, SiCplusplus } from 'react-icons/si';

const marqueeSkills = [
  { icon: <FaReact size={42} />,       color: '#61DAFB' },  // React cyan
  { icon: <FaNodeJs size={42} />,      color: '#339933' },  // Node.js green
  { icon: <SiMongodb size={42} />,     color: '#47A248' },  // MongoDB green
  { icon: <SiTypescript size={42} />,  color: '#3178C6' },  // TypeScript blue
  { icon: <SiJavascript size={42} />,  color: '#F7DF1E' },  // JavaScript yellow
  { icon: <FaPython size={42} />,      color: '#3776AB' },  // Python blue
  { icon: <SiTailwindcss size={42} />, color: '#06B6D4' },  // Tailwind cyan
  { icon: <FaGitAlt size={42} />,      color: '#F05032' },  // Git orange-red
  { icon: <FaDocker size={42} />,      color: '#2496ED' },  // Docker blue
  { icon: <SiPostgresql size={42} />,  color: '#4169E1' },  // PostgreSQL blue
  { icon: <SiNextdotjs size={42} />,   color: '#000000' },  // Next.js black
  { icon: <SiExpress size={42} />,     color: '#000000' },  // Express black
  { icon: <SiRedux size={42} />,       color: '#764ABC' },  // Redux purple
];

const Skills = () => {
    const skills = [
        { name: 'JavaScript',  icon: <SiJavascript />,  color: '#F7DF1E' },
        { name: 'Python',      icon: <FaPython />,      color: '#3776AB' },
        { name: 'TypeScript',  icon: <SiTypescript />,  color: '#3178C6' },
        { name: 'React.js',    icon: <FaReact />,       color: '#61DAFB' },
        { name: 'Node.js',     icon: <FaNodeJs />,      color: '#339933' },
        { name: 'Next.js',     icon: <SiNextdotjs />,   color: '#000000' },
        { name: 'Express.js',  icon: <SiExpress />,     color: '#000000' },
        { name: 'Tailwind',    icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'MongoDB',     icon: <SiMongodb />,     color: '#47A248' },
        { name: 'PostgreSQL',  icon: <SiPostgresql />,  color: '#4169E1' },
        { name: 'MySQL',       icon: <SiMysql />,       color: '#4479A1' },
        { name: 'Docker',      icon: <FaDocker />,      color: '#2496ED' },
        { name: 'Git/GitHub',  icon: <FaGitAlt />,      color: '#F05032' },
        { name: 'Redux',       icon: <SiRedux />,       color: '#764ABC' },
        { name: 'Figma',       icon: <SiFigma />,       color: '#F24E1E' },
        { name: 'Postman',     icon: <SiPostman />,     color: '#FF6C37' },
        { name: 'Linux',       icon: <FaLinux />,       color: '#FCC624' },
        { name: 'C++',         icon: <SiCplusplus />,   color: '#00599C' },
        { name: 'Java',        icon: <FaJava />,        color: '#007396' },
        { name: 'PHP',         icon: <SiPhp />,         color: '#777BB4' },
        { name: 'HTML/CSS',    icon: <SiHtml5 />,       color: '#E34F26' },
        { name: 'C',           icon: <span style={{ fontWeight: 800, fontFamily: 'monospace' }}>C</span>, color: '#A8B9CC' },
    ];

    return (
        <section id="skills" className="py-20" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-3">
                𝒯ℯ𝒸𝒽𝓃𝒾𝒸𝒶𝓁 <span style={{ color:'#f59e0b' }}>𝒮𝓀𝒾𝓁𝓁𝓈</span>
            </h2>
            <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto mb-12" />

            {/* Inlined SkillsMarquee Component */}
            <div className="w-full h-[100px] bg-[var(--bg-primary)] overflow-hidden flex items-center relative"
                 style={{
                   maskImage: 'linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)',
                   WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%)'
                 }}>
              <div className="marquee-wrap flex w-max group">
                <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
                  {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 flex items-center justify-center mr-[60px] md:mr-[80px] cursor-pointer"
                      style={{
                        color: skill.color,
                        opacity: 0.75,
                        transition: 'opacity 0.3s, transform 0.3s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'scale(1.15)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.opacity = '0.75';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                       {skill.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mt-12 px-4">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        viewport={{ once: true }}
                        className="group flex items-center gap-3 px-6 py-3 rounded-full border
                                   border-gray-200 bg-white hover:border-transparent
                                   hover:shadow-lg cursor-default transition-all duration-300
                                   hover:-translate-y-1"
                        style={{
                            boxShadow: 'none',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.boxShadow = `0 8px 24px ${skill.color}30`;
                            e.currentTarget.style.borderColor = `${skill.color}60`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'rgb(229,231,235)';
                        }}
                    >
                        <span style={{ color: skill.color, fontSize: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {skill.icon}
                        </span>
                        <span className="text-base font-semibold text-gray-700 group-hover:text-gray-900
                                         transition-colors whitespace-nowrap">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
