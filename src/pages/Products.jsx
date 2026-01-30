import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { crystals } from '../data/crystals';
import { Filter, Download, ArrowRight } from 'lucide-react';

const Products = () => {
    const { category } = useParams(); // 'diamond', 'amber', 'amethyst', 'others' or undefined
    const [filter, setFilter] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(crystals);

    // Sync route param with internal filter state
    useEffect(() => {
        if (category) {
            setFilter(category.toLowerCase());
        } else {
            setFilter('all');
        }
    }, [category]);

    // Filter products when filter state changes
    useEffect(() => {
        if (filter === 'all') {
            setFilteredProducts(crystals);
        } else {
            setFilteredProducts(crystals.filter(c => c.category === filter));
        }
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        // Ideally update URL too without reload, but for now internal state is fine
        // or use useNavigate() to change URL if strict syncing is needed.
    };

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'diamond', label: 'Diamond' },
        { id: 'amber', label: 'Amber' },
        { id: 'amethyst', label: 'Amethyst' },
        { id: 'others', label: 'Other Crystals' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header / Hero */}
            <div className="bg-dark text-white min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/banner 1.webp')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6 animate-fade-in-up">Curated Healing Crystal Collections</h1>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed animate-fade-in-up delay-100">
                        Crystals are used to enhance the body's own healing abilities, reduce stress and improve the quality of life.
                        Every piece in our collection is hand‑selected for its energy, clarity and beauty.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="container mx-auto px-4 mt-8 relative z-20">
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/20 ring-1 ring-black/5">
                    <div className="flex items-center gap-3 text-dark font-serif font-bold text-xl">
                        <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
                            <Filter size={24} />
                        </div>
                        <span className="tracking-wide">Filter Collection</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => handleFilterChange(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 ${filter === cat.id
                                    ? 'bg-brand-gold text-white shadow-lg shadow-brand-gold/30'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-dark'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col h-full border border-gray-100/50 hover:border-brand-gold/30 relative">
                            <div className="relative overflow-hidden h-72">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-white/90 backdrop-blur-md text-brand-gold text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-sm border border-brand-gold/10">
                                        {product.category === 'others' ? product.type : product.category}
                                    </span>
                                </div>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className="text-xs text-brand-gold font-bold mb-2 uppercase tracking-widest">{product.meta}</div>
                                <h3 className="font-serif text-2xl font-bold text-dark mb-2 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                                <div className="text-brand-gold font-bold text-xl mb-4 flex items-center gap-2">
                                    {product.price}
                                    {product.oldPrice && <span className="text-gray-300 text-sm font-normal line-through decoration-brand-gold/50">{product.oldPrice}</span>}
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-dashed border-gray-200">
                                    <button className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-brand-gold transition-colors tracking-wide uppercase group/btn">
                                        <Download size={14} className="group-hover/btn:-translate-y-0.5 transition-transform" /> Spec Sheet
                                    </button>
                                    <Link to="/compare" className="bg-dark text-white text-sm px-6 py-2.5 rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-lg hover:shadow-brand-gold/20 flex items-center gap-2 font-medium transform hover:-translate-y-0.5">
                                        Compare <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No products found for this category.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
