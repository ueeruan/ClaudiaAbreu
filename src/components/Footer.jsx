import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-black pt-16 pb-8 border-t-2 border-brand-gold relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-serif font-bold text-brand-gold mb-4">CLAUDIA ABREU</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Curadoria de perfumes importados e exclusivos. A essência do luxo ao seu alcance.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-serif mb-6">Navegação</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#home" className="hover:text-brand-gold transition-colors">Início</a></li>
                            <li><a href="#collection" className="hover:text-brand-gold transition-colors">Nossa Coleção</a></li>
                            <li><a href="#about" className="hover:text-brand-gold transition-colors">Sobre Nós</a></li>
                            <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">Depoimentos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a></li>
                            <li><a href="#" className="hover:text-brand-gold transition-colors">Trocas e Devoluções</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-serif mb-6">Redes Sociais</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-black transition-all">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-black transition-all">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-black transition-all">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2026 Claudia Abreu Perfumes. Todos os direitos reservados.</p>
                    <p className="mt-2 md:mt-0">Desenvolvido com <i className="fas fa-heart text-brand-gold mx-1"></i> e requinte.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
