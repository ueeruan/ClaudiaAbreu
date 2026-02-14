import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ image, title, price, category }) => {
    return (
        <div className="group relative cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors">
                        <ShoppingBag size={20} />
                    </button>
                </div>
            </div>
            <div className="mt-4 space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-widest">{category}</p>
                <h3 className="text-lg font-medium font-serif">{title}</h3>
                <p className="text-sm font-semibold">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
