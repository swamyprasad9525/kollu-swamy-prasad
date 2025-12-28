import { useState, useEffect } from 'react';
import Section from './Section';
import { ExternalLink, Github, X, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FlowDiagram from './FlowDiagram';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Swamy Slabs - E-Commerce",
            description: "A lightweight e-commerce platform for stone products. Features product categories, specifications, and pricing for a trading business. Increased engagement by 10%.",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
            github: "https://github.com/swamyprasad9525",
            demo: "#",
            image: "linear-gradient(to right bottom, #f59e0b, #d97706)",
            stats: { enquiries: 150, products: 50, uptime: "99.9%" }
        },
        {
            title: "RMP Minds - Medical App",
            description: "Health assessment web application collecting vital user inputs (height, weight, symptoms) to generate basic medical suggestions. Functional prototype for quick assessment.",
            techStack: ["HTML", "CSS", "JavaScript", "PHP"],
            github: "https://github.com/swamyprasad9525",
            demo: "https://www.linkedin.com/posts/kollu-swamy-prasad-219ba3297_webdevelopment-fitnesstech-healthtracker-activity-7317962795822563328-QGmC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfms3UBJIQhJKIO7ScyfbYnnOIiF9blQco",
            image: "linear-gradient(to right bottom, #10b981, #059669)",
            stats: { users: 200, assessments: 540 }
        },
        {
            title: "Portfolio Website",
            description: "Responsive personal portfolio website designed with React and Tailwind CSS featuring smooth animations and modern UI components.",
            techStack: ["React", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/swamyprasad9525",
            demo: "#",
            image: "linear-gradient(to right bottom, #6366f1, #d946ef)",
            stats: { views: 850, stars: 45 }
        }
    ];

    return (
        <Section id="projects" className="bg-transparent">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="h-1 w-20 bg-[var(--action-primary)] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 group cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div
                            className="h-48 w-full relative overflow-hidden"
                            style={{ background: project.image }}
                        >
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/0 transition-colors duration-300" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--action-primary)] transition-colors">{project.title}</h3>
                            <p className="text-[var(--text-muted)] mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                                <button className="text-sm font-medium text-[var(--action-primary)] hover:underline">View Architecture</button>
                                <div className="flex gap-4">
                                    <Github size={18} className="text-[var(--text-muted)] hover:text-[var(--text-primary)]" />
                                    <ExternalLink size={18} className="text-[var(--text-muted)] hover:text-[var(--action-primary)]" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[var(--bg-secondary)] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-slate-700 max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{selectedProject.title}</h3>
                                        <p className="text-[var(--text-muted)]">{selectedProject.description}</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    {Object.entries(selectedProject.stats).map(([key, value], idx) => (
                                        <div key={idx} className="bg-[var(--bg-primary)] p-4 rounded-xl border border-slate-700 text-center">
                                            <h4 className="text-[var(--text-muted)] uppercase text-xs tracking-wider mb-1">{key}</h4>
                                            <div className="text-2xl font-bold text-[var(--action-success)] flex items-center justify-center gap-2">
                                                <Activity size={18} />
                                                <Counter value={value} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Activity className="text-[var(--action-primary)]" />
                                        System Architecture
                                    </h4>
                                    <FlowDiagram />
                                </div>

                                <div className="flex justify-end gap-4 border-t border-slate-700 pt-6">
                                    <a href={selectedProject.github} className="px-6 py-2 rounded-lg border border-slate-600 hover:bg-slate-700 transition-colors flex items-center gap-2">
                                        <Github size={18} /> Source Code
                                    </a>
                                    <a href={selectedProject.demo} className="px-6 py-2 rounded-lg bg-[var(--action-primary)] hover:opacity-90 transition-colors text-white flex items-center gap-2">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

const Counter = ({ value }) => {
    // Basic counter animation logic would go here, simplistic text rendering for now
    // Parsing numbers if string "99.9%"
    return <span>{value}</span>;
}

export default Projects;
