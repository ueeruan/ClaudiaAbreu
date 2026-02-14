import React, { useState, useEffect, useRef } from 'react';

const PerfumeChat = () => {
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Olá! Sou sua consultora virtual Claudia Abreu. Qual seu nome?' }
    ]);
    const [input, setInput] = useState('');
    const [step, setStep] = useState(0); // 0: Name, 1: Type, 2: Occasion, 3: Final
    const [userData, setUserData] = useState({ name: '', type: '', occasion: '' });
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessages = [...messages, { type: 'user', text: input }];
        setMessages(newMessages);
        const answer = input;
        setInput('');

        // Process State
        setTimeout(() => {
            let botResponse = '';
            let nextStep = step + 1;

            if (step === 0) {
                setUserData(prev => ({ ...prev, name: answer }));
                botResponse = `Prazer, ${answer}! Me conta, que tipo de perfume você prefere? (Ex: Amadeirado, Floral, Cítrico, Doce...)`;
            } else if (step === 1) {
                setUserData(prev => ({ ...prev, type: answer }));
                botResponse = 'Ótima escolha! E para qual ocasião você quer esse perfume? (Ex: Dia a dia, Festas, Encontros...)';
            } else if (step === 2) {
                setUserData(prev => ({ ...prev, occasion: answer }));
                botResponse = 'Perfeito! Tenho algumas opções exclusivas que combinam exatamente com o que você procura. Vamos finalizar seu atendimento personalizado no WhatsApp?';
                nextStep = 3;
            }

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
            setStep(nextStep);
        }, 800);
    };

    const getWhatsAppLink = () => {
        const text = `Olá! Meu nome é ${userData.name}. Procuro um perfume do tipo "${userData.type}" para "${userData.occasion}". Gostaria de ver as opções!`;
        return `https://wa.me/5511958395198?text=${encodeURIComponent(text)}`;
    };

    return (
        <section id="chat-consultant" className="py-24 bg-brand-black relative">
            <div className="container mx-auto px-6 max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-white-soft mb-2">
                        Descubra Seu Perfume
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto" />
                    <p className="text-gray-400 mt-4">Conte-nos o que você busca e encontraremos a fragrância ideal.</p>
                </div>

                <div className="bg-brand-dark border border-brand-gold/20 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(201,168,76,0.1)] h-[500px] flex flex-col">
                    {/* Chat Area */}
                    <div ref={chatContainerRef} className="flex-grow p-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-brand-gold/30">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${msg.type === 'user'
                                    ? 'bg-brand-gold text-brand-black font-semibold rounded-br-none'
                                    : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {/* <div ref={messagesEndRef} /> */}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-black/50 border-t border-white/10">
                        {step < 3 ? (
                            <form onSubmit={handleSend} className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Digite sua resposta..."
                                    className="flex-grow bg-brand-black border border-white/20 rounded px-4 py-3 text-white focus:border-brand-gold focus:outline-none transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded"
                                >
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        ) : (
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center py-4 bg-green-600 hover:bg-green-500 text-white font-bold uppercase tracking-widest transition-all duration-300 animate-pulse"
                            >
                                <i className="fab fa-whatsapp mr-2"></i> Continuar no WhatsApp
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerfumeChat;
