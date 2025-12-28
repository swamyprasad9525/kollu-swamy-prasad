import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[var(--bg-primary)] border-t border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500 mb-4">
                            Let's Connect
                        </h2>
                        <p className="text-[var(--text-muted)] max-w-sm">
                            Open to new opportunities and collaborations. Feel free to reach out to discuss your next project.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: Github, href: "https://github.com/swamyprasad9525" },
                            { icon: Linkedin, href: "https://linkedin.com/in/kollu-swamy-prasad-219ba3297" },
                            { icon: Mail, href: "mailto:kolliswami784@gmail.com" }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:bg-[var(--action-primary)] transition-all duration-300"
                            >
                                <item.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--text-muted)] flex items-center gap-2 text-sm">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Kollu Swamy Prasad © {new Date().getFullYear()}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-[var(--bg-secondary)] rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-[var(--action-primary)] transition-colors group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
