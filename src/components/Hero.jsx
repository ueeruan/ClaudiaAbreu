import React, { useEffect, useState } from 'react';
import Particles from './Particles';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1920&auto=format&fit=crop')",
                    transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-black z-0"></div>

            {/* Particles */}
            <Particles />

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 animate-fade-in-up">
                    <span className="block text-brand-gold mb-2 text-2xl md:text-3xl font-sans font-light tracking-[0.2em] uppercase">Claudia Abreu</span>
                    A Arte do Perfume
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-sans font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
                    Fragrâncias exclusivas que contam a sua história. Descubra a essência do luxo em cada gota.
                </p>
                <a
                    href="#collection"
                    className="inline-block px-10 py-4 border border-brand-gold text-brand-gold font-sans uppercase tracking-[0.15em] hover:bg-brand-gold hover:text-brand-black transition-all duration-300 text-sm md:text-base"
                >
                    Descobrir a Coleção
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20 text-white/50">
                <i className="fas fa-chevron-down text-2xl"></i>
            </div>
        </section>
    );
};

export default Hero;
