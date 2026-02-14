import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-brand-black relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative p-12 border border-brand-gold/20 bg-brand-dark/50">
                            <div className="absolute inset-0 border border-brand-gold/10 transform translate-x-3 translate-y-3" />
                            <div className="text-center relative z-10">
                                <h1 className="text-6xl md:text-8xl font-serif text-brand-white-soft tracking-widest font-bold mb-2">
                                    CLAUDIA
                                </h1>
                                <p className="text-4xl md:text-6xl text-brand-gold font-serif italic -mt-4 md:-mt-8 ml-12 opacity-90" style={{ fontFamily: 'cursive' }}>
                                    Abreu
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-serif text-brand-white-soft">
                            <span className="block text-brand-gold text-sm font-sans tracking-[0.3em] mb-4 uppercase">Sobre a Marca</span>
                            Nossa História
                        </h2>

                        <p className="text-gray-300 leading-relaxed font-light text-lg">
                            Claudia Abreu Perfumes nasceu da paixão por eternizar momentos através de aromas.
                            Nossa curadoria viaja o mundo em busca das essências mais raras e exclusivas,
                            trazendo para você fragrâncias que não apenas perfumam, mas contam histórias e despertam emoções profundas.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                            <div className="text-center group">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                                    <i className="fas fa-globe text-lg"></i>
                                </div>
                                <h4 className="text-brand-white-soft font-serif mb-1">Importados</h4>
                                <p className="text-xs text-gray-400">Essências globais</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                                    <i className="fas fa-gem text-lg"></i>
                                </div>
                                <h4 className="text-brand-white-soft font-serif mb-1">Exclusivos</h4>
                                <p className="text-xs text-gray-400">Edições limitadas</p>
                            </div>

                            <div className="text-center group">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                                    <i className="fas fa-box text-lg"></i>
                                </div>
                                <h4 className="text-brand-white-soft font-serif mb-1">Rápido</h4>
                                <p className="text-xs text-gray-400">Entrega expressa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
