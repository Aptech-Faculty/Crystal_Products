import { Facebook, Youtube, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10 font-sans border-t-4 border-brand-gold/20 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif text-brand-gold mb-4">Stay In Touch</h2>
                    <p className="mb-6 text-gray-300">
                        Sign up for exclusive offers, original stories, new launches and more
                    </p>
                    <form className="max-w-md mx-auto mb-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex">
                            <input
                                type="email"
                                className="flex-1 px-4 py-2 rounded-l-md text-dark focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                            <button className="bg-brand-gold text-dark font-medium px-6 py-2 rounded-r-md hover:bg-amber-500 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center gap-6 text-xl">
                        <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-brand-gold transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-gray-700 pt-12">
                    <div>
                        <h5 className="font-serif text-xl text-brand-gold mb-6">Crystal Collections</h5>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link to="/products/amber" className="hover:text-brand-gold transition-colors">Amber Collection</Link></li>
                            <li><Link to="/products/diamond" className="hover:text-brand-gold transition-colors">Diamond Collection</Link></li>
                            <li><Link to="/products/amethyst" className="hover:text-brand-gold transition-colors">Amethyst Collection</Link></li>
                            <li><Link to="/products" className="hover:text-brand-gold transition-colors">Explore Others</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-serif text-xl text-brand-gold mb-6">Quick Links</h5>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link to="/compare" className="hover:text-brand-gold transition-colors">Compare Crystals</Link></li>
                            <li><Link to="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Get in Touch</Link></li>
                            <li><Link to="/location" className="hover:text-brand-gold transition-colors">Find Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-serif text-xl text-brand-gold mb-6">Contact Information</h5>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-brand-gold" />
                                <a href="tel:+917570000333" className="hover:text-brand-gold transition-colors">+91 757-0000-333</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-brand-gold" />
                                <a href="mailto:info@themiraclehub.in" className="hover:text-brand-gold transition-colors">info@themiraclehub.in</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-brand-gold" />
                                <span>Mumbai, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} The Miracle Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
