import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Banner */}
            <div className="bg-secondary text-white min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/imgi_74_65719184888a7.jpg')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4 animate-fade-in-up">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg animate-fade-in-up delay-100">
                        Reach out to us for any crystal inquiries or support.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up delay-200">
                        <h2 className="text-2xl font-serif text-dark mb-6 text-center">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Your Email" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Your Phone" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all" placeholder="Write your message..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-gold text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition-colors shadow-lg shadow-brand-gold/30">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up delay-300 h-fit">
                        <h2 className="text-2xl font-serif text-dark mb-8 text-center">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-gold/30 transition-colors">
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-dark mb-1">Our Location</h5>
                                    <p className="text-gray-600">Mumbai, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-gold/30 transition-colors">
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-dark mb-1">Phone Support</h5>
                                    <p className="text-gray-600">+91 757-0000-333</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand-gold/30 transition-colors">
                                <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-dark mb-1">Email Us</h5>
                                    <p className="text-gray-600">info@themiraclehub.in</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-gray-500 mb-4 text-sm">Follow us on social media</p>
                            <div className="flex justify-center gap-6">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-gold hover:text-white transition-all"><Facebook size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-gold hover:text-white transition-all"><Twitter size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-gold hover:text-white transition-all"><Instagram size={20} /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-gold hover:text-white transition-all"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
