import React, { useState } from 'react';
import { Search, Menu, X, Instagram, Mail, Phone } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 md:hidden p-2 bg-black text-white rounded-md"
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-screen
      `}>
                <div className="flex flex-col h-full p-6">
                    <div className="mb-10">
                        <h1 className="text-3xl font-serif font-bold tracking-tighter">CLAUDIA ABREU</h1>
                        <p className="text-xs text-gray-500 tracking-widest mt-1">PERFUMES EXCLUSIVOS</p>
                    </div>

                    <nav className="flex-1 space-y-6">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors text-sm"
                            />
                        </div>

                        <ul className="space-y-4 text-sm font-medium tracking-wide">
                            <li><a href="#" className="block hover:text-gray-600 transition-colors">INÍCIO</a></li>
                            <li><a href="#" className="block hover:text-gray-600 transition-colors">COLEÇÃO FEMININA</a></li>
                            <li><a href="#" className="block hover:text-gray-600 transition-colors">COLEÇÃO MASCULINA</a></li>
                            <li><a href="#" className="block hover:text-gray-600 transition-colors">LANÇAMENTOS</a></li>
                            <li><a href="#" className="block hover:text-gray-600 transition-colors">SOBRE</a></li>
                        </ul>
                    </nav>

                    <div className="mt-auto space-y-4 pt-6 border-t border-gray-100">
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-black transition-colors"><Mail size={20} /></a>
                            <a href="#" className="hover:text-black transition-colors"><Phone size={20} /></a>
                        </div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                            © 2026 Claudia Abreu<br />Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
