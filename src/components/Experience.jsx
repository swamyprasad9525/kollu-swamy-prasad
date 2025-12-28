import Section from './Section';
import { BookOpen, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const education = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            school: "Lovely Professional University",
            year: "Aug 2023 - Present",
            description: "Current CGPA: 7.42. Focusing on Software Engineering and Web Technologies."
        },
        {
            degree: "Intermediate",
            school: "Sri Chaitanya Junior College",
            year: "Jul 2021 - Mar 2023",
            description: "Achieved 89% in MPC stream."
        },
        {
            degree: "Matriculation",
            school: "Oxford High School",
            year: "Mar 2021",
            description: "Graduated with 100% percentage."
        }
    ];

    const experience = [
        {
            role: "Java Maestro Trainee",
            company: "Lovely Professional University",
            location: "Jalandhar, Punjab",
            year: "Jun 2025 - Jul 2025",
            description: "Completed hands-on training in Core Java, OOP concepts, exceptions, and collections. Designed interactive GUI applications using Swing and AWT."
        }
    ];

    return (
        <Section id="experience">
            <div className="grid md:grid-cols-2 gap-12">

                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="text-amber-400" size={28} />
                        <h2 className="text-3xl font-bold">Experience</h2>
                    </div>

                    <div className="space-y-8">
                        {experience.map((exp, index) => (
                            <div key={index} className="pl-6 border-l-2 border-amber-500/30 relative">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />

                                <h3 className="text-xl font-bold text-[var(--text-primary)]">{exp.role}</h3>
                                <h4 className="text-lg text-amber-400 mb-2">{exp.company}</h4>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-[var(--text-muted)] mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{exp.year}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="text-yellow-400" size={28} />
                        <h2 className="text-3xl font-bold">Education</h2>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="pl-6 border-l-2 border-yellow-500/30 relative">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />

                                <h3 className="text-xl font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                                <h4 className="text-lg text-yellow-400 mb-2">{edu.school}</h4>

                                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                                    <Calendar size={14} />
                                    <span>{edu.year}</span>
                                </div>

                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Experience;
