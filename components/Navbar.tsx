"use client";

import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Plans', href: '/plans' },
        { name: 'Schedule', href: '/schedule' },
        { name: 'Trainers', href: '/trainers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                            <Dumbbell className="h-8 w-8 text-orange-500" />
                            <span className="font-bold text-xl tracking-tight">FITNESS<span className="text-orange-500">PRO</span></span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/register">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:text-orange-500 hover:bg-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/register" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-orange-500 py-2 rounded-md font-bold">
                            Join Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
