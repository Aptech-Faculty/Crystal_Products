import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Location = () => {
    const position = [19.0760, 72.8777]; // Mumbai coordinates

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Banner */}
            <div className="bg-dark text-white min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/imgi_111_DSC03382-1024x683.jpg')" }}>
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4 animate-fade-in-up">Our Location</h1>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg animate-fade-in-up delay-100">
                        Experience the luxury of premium crystals in person.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-1 animate-fade-in-up delay-200">
                        <h2 className="text-2xl font-serif text-dark mb-6">Visit Our Gallery</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-brand-gold mt-1"><MapPin /></div>
                                <div>
                                    <h5 className="font-bold text-dark">Main Gallery</h5>
                                    <p className="text-gray-600">Mumbai, India</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-brand-gold mt-1"><Phone /></div>
                                <div>
                                    <h5 className="font-bold text-dark">Phone Support</h5>
                                    <p className="text-gray-600">+91 757-0000-333</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-brand-gold mt-1"><Mail /></div>
                                <div>
                                    <h5 className="font-bold text-dark">Email Us</h5>
                                    <p className="text-gray-600">info@themiraclehub.in</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-brand-gold mt-1"><Clock /></div>
                                <div>
                                    <h5 className="font-bold text-dark">Opening Hours</h5>
                                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:col-span-2 h-[500px] border border-gray-100 z-0 animate-fade-in-up delay-300 relative">
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Crystal Gems World <br /> Mumbai, India
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
