import Section from './Section';
import { Code2, Database, Layout, Server, Terminal, Wrench } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: "Prominent Skills",
            icon: Layout,
            skills: ["C++", "C", "JavaScript", "Python", "Java", "PHP", "HTML/CSS"]
        },
        {
            category: "Frameworks & Libraries",
            icon: Code2,
            skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"]
        },
        {
            category: "Database & Cloud",
            icon: Database,
            skills: ["MySQL", "MongoDB", "Docker", "Linux"]
        },
        {
            category: "Tools & Soft Skills",
            icon: Wrench,
            skills: ["Git/GitHub", "Postman", "Figma", "Detail-Oriented", "Adaptable"]
        }
    ];

    return (
        <Section id="skills" className="bg-transparent">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData.map((category, index) => (
                    <div
                        key={index}
                        className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
                    >
                        <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 text-amber-400 group-hover:text-amber-300 group-hover:bg-amber-500/20 transition-colors">
                            <category.icon size={28} />
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">{category.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 bg-[var(--bg-primary)] text-[var(--text-muted)] text-sm rounded-full border border-slate-700/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
