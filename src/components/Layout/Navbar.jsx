import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
    ];

    const shopLinks = [
        { name: 'All Products', path: '/products' },
        { name: 'Diamond', path: '/products/diamond' },
        { name: 'Amber', path: '/products/amber' },
        { name: 'Amethyst', path: '/products/amethyst' },
        { name: 'Other Crystals', path: '/products/others' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="fixed top-0 w-full z-50 font-sans">
            {/* Marquee Header */}
            <div className="bg-gradient-to-r from-dark via-secondary to-dark text-brand-gold py-2 overflow-hidden relative z-50 border-b border-brand-gold/20">
                <div className="animate-marquee whitespace-nowrap text-sm tracking-widest font-serif text-center uppercase">
                    ✨ Welcome To The Crystal Products • Healing Crystals for Balance & Clarity • Free Shipping on Orders Over ₹2000 ✨
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white py-5'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src="/assets/logo.png" alt="Crystal Gems" className="h-12 md:h-16 object-contain" />
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive(link.path) ? 'text-brand-gold' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Dropdown */}
                            <div className="relative group">
                                <button className={`flex items-center gap-1 text-dark hover:text-brand-gold transition-colors font-medium ${location.pathname.includes('/products') ? 'text-brand-gold' : ''}`}>
                                    Shop Crystals <ChevronDown size={16} />
                                </button>
                                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {shopLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="block px-4 py-2 text-sm text-dark hover:bg-light hover:text-brand-gold transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to="/compare"
                                className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive('/compare') ? 'text-brand-gold' : ''}`}
                            >
                                Compare
                            </Link>
                            <Link
                                to="/contact"
                                className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive('/contact') ? 'text-brand-gold' : ''}`}
                            >
                                Contact
                            </Link>
                            <Link
                                to="/location"
                                className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive('/location') ? 'text-brand-gold' : ''}`}
                            >
                                Location
                            </Link>

                            <Link
                                to="/products"
                                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300 flex items-center gap-2"
                            >
                                <ShoppingBag size={18} /> Shop Now
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-dark hover:text-brand-gold transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
                    <div className="container mx-auto px-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive(link.path) ? 'text-brand-gold' : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="space-y-2">
                            <div className="font-medium text-dark border-b border-gray-100 pb-2 mb-2">Shop Crystals</div>
                            {shopLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block pl-4 py-1 text-sm text-gray-600 hover:text-brand-gold"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link
                            to="/compare"
                            onClick={() => setIsOpen(false)}
                            className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive('/compare') ? 'text-brand-gold' : ''}`}
                        >
                            Compare
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive('/contact') ? 'text-brand-gold' : ''}`}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/location"
                            onClick={() => setIsOpen(false)}
                            className={`text-dark hover:text-brand-gold transition-colors font-medium ${isActive('/location') ? 'text-brand-gold' : ''}`}
                        >
                            Location
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
