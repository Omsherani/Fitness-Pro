'use client';

import { useSession } from "next-auth/react";
import { Activity, Flame, Trophy } from 'lucide-react';

export default function Dashboard() {
    const { data: session } = useSession();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Welcome back, {session?.user?.name || 'Athlete'}</h1>
                <p className="text-gray-400 mt-2">Here's your daily activity overview.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Workouts', value: '12', sub: 'This Month', icon: Trophy, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                    { label: 'Calories', value: '14,200', sub: 'Burned', icon: Flame, color: 'text-red-500', bg: 'bg-red-500/10' },
                    { label: 'Activity', value: '85%', sub: 'Weekly Goal', icon: Activity, color: 'text-green-500', bg: 'bg-green-500/10' },
                ].map((stat, i) => (
                    <div key={i} className="bg-neutral-900 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
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
                <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-white mb-4">Upcoming Classes</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-black rounded-xl border border-white/5 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-white">HIIT Blast</h4>
                                <p className="text-sm text-gray-400">Today, 5:00 PM</p>
                            </div>
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full">Confirmed</span>
                        </div>
                        <div className="p-4 bg-black rounded-xl border border-white/5 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-white">Morning Yoga</h4>
                                <p className="text-sm text-gray-400">Tomorrow, 7:00 AM</p>
                            </div>
                            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">Scheduled</span>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl">
                    <h2 className="text-xl font-bold text-white mb-4">Recommended Workout</h2>
                    <div className="p-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl text-white">
                        <h3 className="font-bold text-lg mb-1">Upper Body Power</h3>
                        <p className="text-white/80 text-sm mb-4">45 mins • Intermediate</p>
                        <button className="w-full py-2 bg-white text-orange-600 font-bold rounded-lg text-sm hover:bg-gray-100 transition-colors">
                            Start Workout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
