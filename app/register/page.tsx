'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dumbbell, Loader2 } from 'lucide-react';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Something went wrong');
            }

            // Redirect to login or auto-login
            router.push('/login?registered=true');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent" />

            <div className="relative z-10 w-full max-w-md bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <Dumbbell className="h-8 w-8 text-orange-500" />
                        <span className="font-bold text-xl text-white">FITNESS<span className="text-orange-500">PRO</span></span>
                    </Link>
                    <h2 className="text-2xl font-bold text-white">Create Account</h2>
                    <p className="text-gray-400 text-sm mt-2">Join the revolution. Start your journey today.</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm mb-6 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="w-full mt-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full mt-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            className="w-full mt-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            required
                            className="w-full mt-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link href="/login" className="text-orange-500 hover:underline font-semibold">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}
