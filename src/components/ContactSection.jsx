import React from 'react';

const ContactSection = () => {
    return (
        <footer className="mt-24 border-t border-gray-100 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h4 className="text-lg font-serif font-bold">ATENDIMENTO</h4>
                    <p className="text-gray-500 text-sm">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-500 text-sm">Sábado: 9h às 13h</p>
                    <p className="text-gray-500 text-sm font-semibold mt-2">+55 (11) 99999-9999</p>
                    <p className="text-gray-500 text-sm">contato@claudiaabreu.com</p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-serif font-bold">INSTITUCIONAL</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-black transition-colors">Sobre a Marca</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Nossas Lojas</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Trabalhe Conosco</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Imprensa</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-serif font-bold">AJUDA</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-black transition-colors">Politica de Privacidade</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Trocas e Devoluções</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">Termos de Uso</a></li>
                        <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-lg font-serif font-bold">NEWSLETTER</h4>
                    <p className="text-gray-500 text-sm">Cadastre-se para receber novidades exclusivas.</p>
                    <div className="flex border-b border-black pb-2">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="w-full bg-transparent focus:outline-none text-sm placeholder-gray-400"
                        />
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-gray-600">ENVIAR</button>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-100 tracking-tighter select-none">
                    CLAUDIA ABREU
                </h1>
            </div>
        </footer>
    );
};

export default ContactSection;
