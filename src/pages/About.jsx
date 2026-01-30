import { Rocket, Shield, Handshake, Users, Flame, Gem, Bell, Heart, Leaf, Truck, CreditCard, Medal, Headset } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-dark text-white min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/ab_copy_(1).webp')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4 animate-fade-in-up">About Us</h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg animate-fade-in-up delay-100">
                        Healing crystals for the exclusive energy they carry within them.
                    </p>
                </div>
            </div>

            {/* Vision Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <h2 className="text-3xl font-serif text-dark mb-6">Our Vision</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                <strong className="text-brand-gold text-xl">H</strong>ealing crystals have been used across the world for the exclusive energy they carry within them. This energy when used perfectly will help you get healed from within. What started as just helping out fellow humans with these pieces of earth, soon developed as an idea to serve the family of the world!
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                To inaugurate a world where our consumers can pick from a handpicked, unique assortment of delicate, smooth, highly polished tumbled stones with healing energies, soothing and therapeutic raw crystals.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our brand is motivated to cater the customer’s needs of physical, mental, emotional, and spiritual well-being through the choice of crystals.
                            </p>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 text-center">
                            <img src="/assets/images/240_F_524039911_SJfffOLKTk1HZvTPyF9vv1FN6oCipyVi.jpg" alt="Our Vision" className="rounded-lg shadow-xl max-h-[400px] object-cover mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center">
                            <img src="/assets/images/business-g24af9d792_1920.jpg" alt="Our Mission" className="rounded-lg shadow-xl max-h-[400px] object-cover mx-auto" />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-serif text-dark mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                “<strong className="text-brand-gold">I</strong>t's when we start working together that the real healing takes place” The cleansing of our spirits is the path towards real healing. Crystals promote the flow of good energy and help rid your body and mind of negative energy for physical and emotional benefits.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Catering to the needs of our customers is our primary goal. Our premium quality products are handpicked to provide maximum results and customer satisfaction. The curation of the crystals are meant to boost their energy and positivity to help you win the battles of life.
                            </p>
                            <p className="text-brand-gold italic font-medium mt-4">
                                “Healing is a matter of time, but it is sometimes also a matter of opportunity.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-serif text-dark mb-6">Services & Packaging</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                <strong className="text-brand-gold text-xl">A</strong>part from bestowing the quintessential dose of positivity, the Miracle Hub offers especially curated methods to get the healing crystals charged with extra energy.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                We, at The Miracle Hub, pack your selected healing crystals and other products with extreme care. Special care is taken towards protecting the fragility of certain goods.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                When you shop with us, you're helping the world feel vivacity, love and kindness!
                            </p>
                        </div>
                        <div className="lg:w-1/2 text-center">
                            <img src="https://themiraclehub.in/assets/abstract-app-social-web-service-object.jpg" alt="Services" className="rounded-lg shadow-xl max-h-[400px] object-cover mx-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center">
                            <img src="https://themiraclehub.in/assets/teamwork-power-successful-business-meeting-workplace-concept.jpg" alt="Our Values" className="rounded-lg shadow-xl max-h-[400px] object-cover mx-auto" />
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-serif text-dark mb-8">Our Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { icon: Rocket, text: 'Bold To Be Better' },
                                    { icon: Shield, text: 'Integrity: To Be Real' },
                                    { icon: Handshake, text: 'A Badge of Honesty' },
                                    { icon: Users, text: 'Trusted By Customers' },
                                    { icon: Flame, text: 'Passionate And Motivated' },
                                    { icon: Gem, text: 'Best Quality Assured' },
                                    { icon: Bell, text: 'Service Excellence' },
                                    { icon: Heart, text: 'Commitment to Customers' },
                                    { icon: Leaf, text: 'Sustainability At Every Click' },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <item.icon className="text-brand-gold" size={20} />
                                        <span className="text-gray-700 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Truck, title: 'Easy Shipping', desc: 'Securely packed and delivered on time.' },
                            { icon: CreditCard, title: 'Secure Payment', desc: 'Safe gateways protecting your info.' },
                            { icon: Medal, title: 'Authentic Crystals', desc: '100% authentic and certified quality.' },
                            { icon: Headset, title: 'Call Support', desc: 'Ready to help with personalized assistance.' },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-dark/50 p-6 rounded-xl border border-gray-700 text-center hover:border-brand-gold transition-colors">
                                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-gold">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
