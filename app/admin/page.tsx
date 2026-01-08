'use client';

import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-400 mt-2">Overview of gym performance and statistics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Members', value: '1,234', sub: '+12% this month', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                    { label: 'Revenue', value: '$45.2k', sub: '+8% vs last month', icon: DollarSign, color: 'text-green-500', bg: 'bg-green-500/10' },
                    { label: 'Active Sessions', value: '85', sub: 'Currently matching', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                    { label: 'Retention Rate', value: '94%', sub: 'High performance', icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                ].map((stat, i) => (
                    <div key={i} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                        <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon className="h-8 w-8" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                            <div className="text-xs text-gray-500 mt-1">{stat.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-white mb-6">Recent Signups</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-black/50 rounded-xl border border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white">
                                        U{i}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">New User {i}</h4>
                                        <p className="text-sm text-gray-400">user{i}@example.com</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Active</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-black/50 hover:bg-zinc-800 border border-white/5 rounded-xl text-left transition-colors">
                            <span className="block font-bold text-white mb-1">Add Member</span>
                            <span className="text-sm text-gray-400">Manual registration</span>
                        </button>
                        <button className="p-4 bg-black/50 hover:bg-zinc-800 border border-white/5 rounded-xl text-left transition-colors">
                            <span className="block font-bold text-white mb-1">Create Class</span>
                            <span className="text-sm text-gray-400">Schedule new session</span>
                        </button>
                        <button className="p-4 bg-black/50 hover:bg-zinc-800 border border-white/5 rounded-xl text-left transition-colors">
                            <span className="block font-bold text-white mb-1">Manage Plans</span>
                            <span className="text-sm text-gray-400">Update pricing</span>
                        </button>
                        <button className="p-4 bg-black/50 hover:bg-zinc-800 border border-white/5 rounded-xl text-left transition-colors">
                            <span className="block font-bold text-white mb-1">Send Alert</span>
                            <span className="text-sm text-gray-400">Notify all members</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
