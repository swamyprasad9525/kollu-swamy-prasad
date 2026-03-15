import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const navRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'About', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <nav>
            {/* Floating Logo - Top Left */}
            <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 pointer-events-auto">
                <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500 drop-shadow-sm">
                    𝓼𝔀𝓪𝓶𝔂
                </a>
            </div>

            {/* Bottom-Center Floating Navigation */}
            <div ref={navRef} className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center">
                
                {/* Expanded Menu (Pill shape) */}
                <div 
                    className={`mb-4 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 p-2 sm:px-4 sm:py-2 rounded-[2rem] bg-[var(--bg-secondary)]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 origin-bottom ${
                        isOpen 
                            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                            : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
                    }`}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full sm:w-auto text-center px-6 py-2 sm:px-4 sm:py-1.5 text-[var(--text-muted)] hover:text-amber-400 hover:bg-[var(--bg-primary)]/50 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Desktop Divider */}
                    <div className="hidden sm:block w-px h-6 bg-[var(--text-muted)]/30 mx-1"></div>
                    {/* Mobile Divider */}
                    <div className="sm:hidden w-[80%] h-px bg-[var(--text-muted)]/30 my-1"></div>

                    <button
                        onClick={toggleTheme}
                        className="p-2 w-full sm:w-auto flex justify-center rounded-full hover:bg-[var(--bg-primary)]/50 text-[var(--text-primary)] hover:text-amber-400 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Floating Icon Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-900 shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
                    aria-label="Toggle Navigation"
                >
                    {/* Animated Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-amber-400 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-[pulse_2s_ease-in-out_infinite]"></div>
                    
                    {/* Icon with spin/rotate animation */}
                    <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover:rotate-180">
                        {isOpen ? <X size={28} strokeWidth={2.5} /> : <Sparkles size={24} strokeWidth={2.5} />}
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
