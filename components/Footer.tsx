import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">FITNESS<span className="text-orange-500">PRO</span></h3>
                        <p className="text-gray-400 text-sm">
                            Transform your body and mind with our state-of-the-art facilities and expert trainers. Join the movement today.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/plans" className="hover:text-orange-500 transition-colors">Membership Plans</a></li>
                            <li><a href="/schedule" className="hover:text-orange-500 transition-colors">Class Schedule</a></li>
                            <li><a href="/trainers" className="hover:text-orange-500 transition-colors">Our Trainers</a></li>
                            <li><a href="/about" className="hover:text-orange-500 transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Programs</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><span className="hover:text-orange-400 cursor-pointer">Strength Training</span></li>
                            <li><span className="hover:text-orange-400 cursor-pointer">Cardio & HIIT</span></li>
                            <li><span className="hover:text-orange-400 cursor-pointer">Yoga & Pilates</span></li>
                            <li><span className="hover:text-orange-400 cursor-pointer">Weight Loss</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-500 shrink-0" />
                                <span>123 Fitness Blvd, Gym City, GC 54321</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                                <span>hello@fitnesspro.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} FitnessPro. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
