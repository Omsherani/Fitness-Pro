'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell, LayoutDashboard, Calendar, Utensils, Settings, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const links = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'My Schedule', href: '/dashboard/schedule', icon: Calendar },
        { name: 'Nutrition', href: '/dashboard/nutrition', icon: Utensils },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar */}
            <div className="w-64 bg-neutral-900 border-r border-white/10 hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Dumbbell className="h-8 w-8 text-orange-500" />
                        <span className="font-bold text-xl text-white">FITNESS<span className="text-orange-500">PRO</span></span>
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${pathname === link.href
                                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <link.icon className="h-5 w-5" />
                            <span className="font-medium">{link.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl w-full transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        <span className="font-medium">Sign Out</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between p-4 bg-neutral-900 border-b border-white/10">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Dumbbell className="h-6 w-6 text-orange-500" />
                        <span className="font-bold text-lg text-white">FITNESS<span className="text-orange-500">PRO</span></span>
                    </Link>
                    <button onClick={() => signOut()} className="p-2 text-gray-400">
                        <LogOut className="h-6 w-6" />
                    </button>
                </div>

                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
