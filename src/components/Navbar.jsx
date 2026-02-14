import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Sua Essência', href: '#chat-consultant' },
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-serif font-bold text-brand-gold tracking-wider">
                    CLAUDIA ABREU
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-sans uppercase tracking-widest text-brand-white-soft hover:text-brand-gold transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#contact" className="text-brand-white-soft hover:text-brand-gold transition-colors">
                        <i className="fas fa-search"></i>
                    </a>
                    <a
                        href="https://wa.me/5511958395199"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-400 transition-colors text-xl"
                    >
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-white-soft text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-brand-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 border-b border-brand-gold/20' : 'max-h-0'}`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-brand-white-soft hover:text-brand-gold font-sans uppercase tracking-widest text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5511958395199"
                        className="text-green-500 font-sans uppercase tracking-widest text-sm flex items-center gap-2"
                    >
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
