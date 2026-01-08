'use client';

import { Play, ClipboardList, Timer, TrendingUp } from 'lucide-react';

const WORKOUTS = [
    {
        id: 1,
        name: 'Upper Body Power',
        duration: '45 min',
        difficulty: 'Intermediate',
        completed: false,
        exercises: 6,
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Core & Abs',
        duration: '20 min',
        difficulty: 'Beginner',
        completed: true,
        exercises: 4,
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Leg Day Intensity',
        duration: '60 min',
        difficulty: 'Advanced',
        completed: false,
        exercises: 8,
        image: 'https://images.unsplash.com/photo-1434608519344-49d77a699ded?q=80&w=2074&auto=format&fit=crop'
    }
];

export default function WorkoutsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">My Workouts</h1>
                <p className="text-gray-400 mt-2">Access your personalized training plans.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WORKOUTS.map((workout) => (
                    <div key={workout.id} className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all">
                        <div className="h-48 relative">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${workout.image})` }} />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-4 left-4">
                                <span className={`px-2 py-1 text-xs font-bold uppercase rounded ${workout.completed ? 'bg-green-500 text-white' : 'bg-orange-500 text-white'}`}>
                                    {workout.completed ? 'Completed' : 'Assigned'}
                                </span>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{workout.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                                <span className="flex items-center gap-1"><Timer className="w-4 h-4" /> {workout.duration}</span>
                                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> {workout.difficulty}</span>
                            </div>

                            <button className="w-full py-3 bg-white hover:bg-gray-200 text-black font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
                                <Play className="w-4 h-4" /> Start Workout
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
