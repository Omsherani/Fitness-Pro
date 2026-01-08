'use client';

import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        alert('Message sent! (Demo)');
    };

    return (
        <div className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Contact Info & Values */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">GET IN <span className="text-orange-500">TOUCH</span></h1>
                            <p className="text-xl text-gray-400">
                                Have questions about memberships, personal training, or just want to say hi? We're here to help.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg text-orange-500 border border-white/10">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Visit Us</h3>
                                    <p className="text-gray-400">123 Fitness Blvd, Gym City<br />GC 54321, United States</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg text-orange-500 border border-white/10">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg text-orange-500 border border-white/10">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                                    <p className="text-gray-400">hello@fitnesspro.com<br />support@fitnesspro.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-900 rounded-lg text-orange-500 border border-white/10">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Opening Hours</h3>
                                    <p className="text-gray-400">Mon - Fri: 5:00 AM - 11:00 PM<br />Sat - Sun: 7:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-neutral-900 p-8 md:p-10 rounded-3xl border border-white/5">
                        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors"
                                    placeholder="Membership Inquiry"
                                    value={formData.subject}
                                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors resize-none"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
