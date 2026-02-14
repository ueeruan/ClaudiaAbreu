import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Simulate sending
        setStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-brand-black relative">
            {/* Decorative Gold Line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16">
                    {/* Form */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-serif text-brand-white-soft mb-8">Fale Conosco</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-sans uppercase tracking-widest text-brand-gold mb-2">Nome *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-brand-dark border border-white/10 p-3 text-brand-white-soft focus:border-brand-gold focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-sans uppercase tracking-widest text-brand-gold mb-2">E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-brand-dark border border-white/10 p-3 text-brand-white-soft focus:border-brand-gold focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-sans uppercase tracking-widest text-brand-gold mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-brand-dark border border-white/10 p-3 text-brand-white-soft focus:border-brand-gold focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-sans uppercase tracking-widest text-brand-gold mb-2">Mensagem *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-brand-dark border border-white/10 p-3 text-brand-white-soft focus:border-brand-gold focus:outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            {status && (
                                <p className={`text-sm ${status.includes('sucesso') ? 'text-green-400' : 'text-red-400'}`}>
                                    {status}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="px-8 py-3 bg-brand-gold text-brand-black text-sm font-bold uppercase tracking-widest hover:bg-brand-white-soft transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="w-full md:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-serif text-brand-white-soft border-l-2 border-brand-gold pl-4">Atendimento Premium</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <i className="fab fa-whatsapp text-brand-gold text-xl mt-1"></i>
                                    <div>
                                        <p className="text-sm text-gray-400">WhatsApp</p>
                                        <a href="https://wa.me/5511958395199" className="text-brand-white-soft hover:text-brand-gold transition-colors text-lg">
                                            11 95839-5199
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <i className="fas fa-map-marker-alt text-brand-gold text-xl mt-1"></i>
                                    <div>
                                        <p className="text-sm text-gray-400">Localização</p>
                                        <p className="text-brand-white-soft text-lg">São Paulo, Brasil</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <i className="fas fa-clock text-brand-gold text-xl mt-1"></i>
                                    <div>
                                        <p className="text-sm text-gray-400">Horário</p>
                                        <p className="text-brand-white-soft text-lg">Atendimento 24h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand-dark p-8 border border-white/5">
                            <h4 className="text-brand-gold font-serif mb-4">Newsletter</h4>
                            <p className="text-gray-400 text-sm mb-4">Inscreva-se para receber convites para eventos exclusivos e novidades.</p>
                            <div className="flex border-b border-brand-gold pb-2">
                                <input
                                    type="email"
                                    placeholder="Seu e-mail"
                                    className="w-full bg-transparent focus:outline-none text-brand-white-soft text-sm placeholder-gray-600"
                                />
                                <button className="text-brand-gold hover:text-white transition-colors">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
