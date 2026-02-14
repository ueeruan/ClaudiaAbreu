import React, { useEffect, useRef } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Ana Clara",
        image: "https://i.pravatar.cc/150?img=5",
        text: "Simplesmente apaixonada! O Noir Mystère é exatamente o que eu procurava. Fixação incrível e embalagem maravilhosa.",
        stars: 5
    },
    {
        id: 2,
        name: "Mariana Costa",
        image: "https://i.pravatar.cc/150?img=9",
        text: "Atendimento impecável e entrega super rápida. O perfume chegou muito bem embalado e com um cheiro divino.",
        stars: 5
    },
    {
        id: 3,
        name: "Beatriz Silva",
        image: "https://i.pravatar.cc/150?img=10",
        text: "Amei a exclusividade das fragrâncias. Não se encontra nada igual por aí. Recomendo muito!",
        stars: 5
    }
];

const Testimonials = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = sectionRef.current.querySelectorAll('.testimonial-card');
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-brand-dark relative" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-white-soft mb-2">
                        Depoimentos
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card opacity-0 bg-brand-black p-8 border border-white/5 relative group hover:border-brand-gold/30 transition-colors duration-300"
                            style={{ padding: `max(2rem, 5%)`, animationDelay: `${index * 200}ms` }}
                        >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border-2 border-brand-gold object-cover shadow-lg"
                                />
                            </div>

                            <div className="mt-8 text-center">
                                <div className="text-brand-gold text-sm mb-4">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <i key={i} className="fas fa-star mx-0.5"></i>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-sm italic mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <h4 className="text-brand-white-soft font-serif font-bold">
                                    {testimonial.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
