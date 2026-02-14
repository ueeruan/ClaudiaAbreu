import React from 'react';

const products = [
    {
        id: 1,
        name: "NOIR MYSTÈRE",
        family: "Oriental · Amadeirado",
        price: "R$ 289,90",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "GOLDEN OUD",
        family: "Amadeirado · Especiado",
        price: "R$ 349,90",
        image: "https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "ROSE ETERNELLE",
        family: "Floral · Intenso",
        price: "R$ 259,90",
        image: "https://images.unsplash.com/photo-1588405764423-c7e3f20b5193?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "VELVET NIGHT",
        family: "Oriental · Baunilha",
        price: "R$ 310,00",
        image: "https://images.unsplash.com/photo-1616999691459-25313936495b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        name: "AZURE BREEZE",
        family: "Cítrico · Fresco",
        price: "R$ 240,00",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        name: "IMPERIAL AMBER",
        family: "Ambarado · Rico",
        price: "R$ 399,90",
        image: "https://images.unsplash.com/photo-1523293188086-b431e96f50b1?q=80&w=1000&auto=format&fit=crop"
    }
];

const Catalog = () => {
    return (
        <section id="collection" className="py-24 bg-brand-dark relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-white-soft mb-2">
                        Nossa Coleção
                    </h2>
                    <div className="w-24 h-1 bg-brand-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-brand-black p-4 border border-white/5 hover:border-brand-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] flex flex-col"
                        >
                            <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                                />
                                <div className="absolute inset-0 border-2 border-brand-gold/0 group-hover:border-brand-gold/30 transition-all duration-500 m-4 pointer-events-none" />
                            </div>

                            <div className="text-center flex-grow flex flex-col justify-between">
                                <div>
                                    <p className="text-brand-gold text-xs font-sans tracking-[0.2em] uppercase mb-2">
                                        {product.family}
                                    </p>
                                    <h3 className="text-xl md:text-2xl font-serif text-white mb-2 group-hover:text-brand-gold-light transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        Uma fragrância sedutora e marcante para momentos inesquecíveis.
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <p className="text-lg font-semibold text-brand-white-soft mb-4">{product.price}</p>
                                    <a
                                        href={`https://wa.me/5511958395199?text=Olá! Tenho interesse no perfume ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full py-3 border border-brand-gold text-brand-gold text-sm font-sans uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                                    >
                                        <i className="fab fa-whatsapp mr-2"></i> Comprar
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
