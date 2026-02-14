import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-brand-black relative">
            {/* Decorative Gold Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-white-soft mb-4">
                    Entre em Contato
                </h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    Estamos à disposição para atender você com a exclusividade que merece.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/5511958395198"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 bg-brand-dark border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 rounded-full bg-brand-black border border-brand-gold/30 flex items-center justify-center text-3xl text-green-500 mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <h3 className="text-xl font-serif text-brand-white-soft mb-2">WhatsApp</h3>
                        <p className="text-brand-gold font-sans tracking-wider">+55 11 95839-5198</p>
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://instagram.com/cla_importsabreu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-8 bg-brand-dark border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                    >
                        <div className="w-16 h-16 rounded-full bg-brand-black border border-brand-gold/30 flex items-center justify-center text-3xl text-pink-500 mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <h3 className="text-xl font-serif text-brand-white-soft mb-2">Instagram</h3>
                        <p className="text-brand-gold font-sans tracking-wider">@cla_importsabreu</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
