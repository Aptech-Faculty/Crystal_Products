import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';

const Home = () => {
    const newArrivalsRef = useRef(null);
    const bestSellersRef = useRef(null);

    const scroll = (ref, direction) => {
        if (ref.current) {
            const { current } = ref;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const categories = [
        { name: 'Diamond', image: '/assets/images/diamond.webp', link: '/products/diamond' },
        { name: 'Amber', image: '/assets/images/amber.jpg', link: '/products/amber' },
        { name: 'Amethyst', image: '/assets/images/amthyst.jpg', link: '/products/amethyst' },
        { name: 'Other Crystals', image: '/assets/images/other crystale.webp', link: '/products/others' },
    ];

    const newArrivals = [
        { name: 'Rose Quartz Pendant', price: '₹999', oldPrice: '₹1398', image: '/assets/images/rose pendant.webp' },
        { name: 'Weight Loss Bracelet', price: '₹1699', oldPrice: '₹2398', image: '/assets/images/627900ad284c7.webp' },
        { name: 'Pyrite Cluster', price: '₹1899', oldPrice: '₹3798', image: 'https://themiraclehub.in/upload/product_img2/62cd5a7b37227.jpg' },
        { name: 'Blue Tiger Eye Bracelet', price: '₹1899', oldPrice: '₹3798', image: '/assets/images/imgi_151_659bed50abde1.webp' },
        { name: 'Rose Quartz Pendant', price: '₹999', oldPrice: '₹1398', image: '/assets/images/rose pendant.webp' },
    ];

    const bestSellers = [
        { name: 'Study Concentration Box', price: '₹999', oldPrice: '₹1398', image: '/assets/images/imgi_32_6500497789565.jpg' },
        { name: 'Relationship Manifestation Box', price: '₹1809', oldPrice: '₹2000', image: '/assets/images/imgi_52_65004ac38a5e8.webp' },
        { name: 'Abundance Attraction Bundle', price: '₹1566', oldPrice: '₹1818', image: '/assets/images/ab_copy_(1).webp' },
        { name: 'Green Aventurine Pendant', price: '₹888', oldPrice: '₹1598', image: '/assets/images/green-aventurine-pencil-pendant-1.webp' },
    ];

    return (
        <div className="bg-dark min-h-screen text-white">
            {/* Hero Section */}
            <header className="relative h-[calc(100vh-132px)] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
                    <source src="https://themiraclehub.in/assets/vedio/TheMiracleHub_web_banner_home_page_new.mp4" type="video/mp4" />
                </video>
                <div className="relative z-20 text-center px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight animate-fade-in-up">
                        Crystals that amplify your body’s natural healing
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                        Curated stones to ease stress, uplift your energy field, and deepen intuition. Explore diamonds for clarity, amber for warmth, and amethyst for calm.
                    </p>
                    <Link to="/products" className="inline-block bg-brand-gold text-dark font-medium px-8 py-3 rounded-full hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold/20 animate-fade-in-up delay-200">
                        Explore Products
                    </Link>
                </div>
            </header>

            {/* Categories Section */}
            <section className="py-24 bg-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-3xl md:text-5xl font-serif text-brand-gold mb-6 tracking-wide">Shop Crystals by Category</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Choose a family, then dive deeper into individual products with downloadable spec sheets and comparisons.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12">
                        {categories.map((cat, index) => (
                            <Link key={index} to={cat.link} className="group text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-brand-gold/30 p-2 mb-6 mx-auto group-hover:border-brand-gold transition-all duration-500 shadow-2xl shadow-black/50 group-hover:shadow-brand-gold/20 relative">
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif text-white group-hover:text-brand-gold transition-colors tracking-wide">{cat.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop by Healing Crystals */}
            <section className="py-24 bg-secondary relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 animate-slide-in">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-brand-gold/20 transform translate-x-6 translate-y-6 rounded-2xl transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                                <img src="https://themiraclehub.in/themiraclehub-website/images/healing-crystal.jpg" alt="Healing Crystals" className="relative rounded-2xl shadow-2xl w-full border border-white/10" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-fade-in-up delay-200">
                            <h3 className="text-4xl font-serif text-brand-gold mb-8 leading-tight">Shop by Healing Crystals</h3>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-gold to-transparent mb-10 rounded-full"></div>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                Crystals interact with your body’s energy field—bringing balance to chakras, easing tension, and inviting creativity.
                            </p>
                            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                                Hold them, wear them, or place them on your space to feel shifts in clarity, peace, and vitality. Diamonds sharpen focus, Amber soothes the solar plexus, Amethyst quiets the mind.
                            </p>
                            <Link to="/products" className="inline-flex items-center text-brand-gold font-bold text-lg hover:text-white transition-colors group tracking-wide">
                                <span className="border-b-2 border-brand-gold pb-1 group-hover:border-white transition-colors">Shop Now</span>
                                <ArrowRight size={24} className="ml-3 transform group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crystal Jewellery Section */}
            <section className="py-24 bg-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05),transparent_40%)]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="lg:w-1/2 animate-slide-in" style={{ animationDelay: '300ms' }}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-brand-gold/20 transform -translate-x-6 translate-y-6 rounded-2xl transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4"></div>
                                <img src="/assets/images/crystal jewllery.jpg" alt="Crystal Jewellery" className="relative rounded-2xl shadow-2xl w-full border border-white/10" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 animate-fade-in-up delay-200">
                            <h3 className="text-4xl font-serif text-brand-gold mb-8 leading-tight">Crystal Jewellery for Everyday Alignment</h3>
                            <div className="w-24 h-1.5 bg-gradient-to-l from-brand-gold to-transparent mb-10 rounded-full"></div>
                            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                Wear crystals close to the skin to let their frequency blend with yours. Bracelets, pendants, and studs carry calm into commutes, meetings, and meditations.
                            </p>
                            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                                Each piece is hand-selected for quality and energetic clarity, then polished to sparkle with intention. Pair Amethyst earrings for serenity with a Citrine bracelet for creativity.
                            </p>
                            <Link to="/products" className="inline-flex items-center text-brand-gold font-bold text-lg hover:text-white transition-colors group tracking-wide">
                                <span className="border-b-2 border-brand-gold pb-1 group-hover:border-white transition-colors">See New Arrivals</span>
                                <ArrowRight size={24} className="ml-3 transform group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Arrivals Slider */}
            <section className="py-24 bg-secondary border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="animate-fade-in-up">
                            <h2 className="text-4xl font-serif text-brand-gold mb-3">New Arrivals</h2>
                            <p className="text-gray-400 text-lg">Freshly curated pieces charged and ready to work with you.</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => scroll(newArrivalsRef, 'left')} className="p-3 border border-gray-700 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-dark transition-all hover:scale-110"><ChevronRight size={24} className="transform rotate-180" /></button>
                            <button onClick={() => scroll(newArrivalsRef, 'right')} className="p-3 border border-gray-700 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-dark transition-all hover:scale-110"><ChevronRight size={24} /></button>
                        </div>
                    </div>

                    <div
                        ref={newArrivalsRef}
                        className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {newArrivals.map((product, index) => (
                            <div key={index} className="min-w-[300px] md:min-w-[340px] bg-dark rounded-2xl overflow-hidden shadow-xl border border-white/5 snap-start hover:border-brand-gold/30 transition-all duration-300 group">
                                <div className="h-96 overflow-hidden relative">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                        <Link to="/products" className="bg-brand-gold text-dark px-8 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-white">View Details</Link>
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    <h3 className="font-serif text-2xl mb-3 text-white truncate">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-brand-gold font-bold text-xl">{product.price}</span>
                                            <span className="text-gray-600 line-through text-sm">{product.oldPrice}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-dark transition-colors">
                                            <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Sellers Slider */}
            <section className="py-24 bg-dark relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="animate-fade-in-up">
                            <h2 className="text-4xl font-serif text-brand-gold mb-3">Best Sellers</h2>
                            <p className="text-gray-400 text-lg">Customer favorites for focus, protection, and abundance.</p>
                        </div>
                        <div className="flex gap-3">
                            <button onClick={() => scroll(bestSellersRef, 'left')} className="p-3 border border-gray-700 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-dark transition-all hover:scale-110"><ChevronRight size={24} className="transform rotate-180" /></button>
                            <button onClick={() => scroll(bestSellersRef, 'right')} className="p-3 border border-gray-700 rounded-full hover:bg-brand-gold hover:border-brand-gold hover:text-dark transition-all hover:scale-110"><ChevronRight size={24} /></button>
                        </div>
                    </div>

                    <div
                        ref={bestSellersRef}
                        className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {bestSellers.map((product, index) => (
                            <div key={index} className="min-w-[300px] md:min-w-[340px] bg-secondary rounded-2xl overflow-hidden shadow-xl border border-white/5 snap-start hover:border-brand-gold/30 transition-all duration-300 group">
                                <div className="h-96 overflow-hidden relative">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                        <Link to="/products" className="bg-brand-gold text-dark px-8 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-white">View Details</Link>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-brand-gold text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Bestseller</div>
                                </div>
                                <div className="p-8 relative">
                                    <h3 className="font-serif text-2xl mb-3 text-white truncate">{product.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className="text-brand-gold font-bold text-xl">{product.price}</span>
                                            <span className="text-gray-600 line-through text-sm">{product.oldPrice}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-dark transition-colors">
                                            <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif text-brand-gold mb-4">What Our Customers Say</h2>
                        <p className="text-gray-400">Real healing stories from the Miracle Hub community.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Priya S.', text: "The Amethyst pyramid I bought is stunning. I feel a difference in my meditation practice immediately. Fast shipping too!", stars: 5 },
                            { name: 'Rahul M.', text: "Ordered the Tiger Eye bracelet for my husband. The quality is top-notch and the packaging was so premium. Highly recommended.", stars: 4.5 },
                            { name: 'Anjali K.', text: "The Citrine cluster is exactly what my office needed. It looks beautiful and brings such a vibrant energy to the room.", stars: 5 },
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-dark p-8 rounded-xl shadow-lg border border-gray-800 relative">
                                <div className="text-brand-gold text-4xl opacity-20 absolute top-4 left-4">"</div>
                                <div className="flex gap-1 text-amber-400 mb-4 justify-center">
                                    {[...Array(Math.floor(testimonial.stars))].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    {testimonial.stars % 1 !== 0 && <Star size={16} fill="currentColor" className="opacity-50" />}
                                </div>
                                <p className="text-gray-300 italic mb-6 text-center">"{testimonial.text}"</p>
                                <h5 className="font-serif text-brand-gold text-center uppercase tracking-widest text-sm font-bold">- {testimonial.name}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
