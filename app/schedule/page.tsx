'use client';

import { useState } from 'react';
import { Clock, Users, Calendar } from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const CATEGORIES = ['Strength', 'Cardio', 'Yoga', 'HIIT', 'Boxing'];

const MOCK_CLASSES = [
    { id: 1, name: 'Power Lifting', trainer: 'John Doe', time: '09:00 AM', duration: '60 min', day: 'Monday', category: 'Strength', spots: 5 },
    { id: 2, name: 'HIIT Blast', trainer: 'Sarah Smith', time: '10:30 AM', duration: '45 min', day: 'Monday', category: 'HIIT', spots: 12 },
    { id: 3, name: 'Vinyasa Flow', trainer: 'Emma Wilson', time: '06:00 PM', duration: '75 min', day: 'Monday', category: 'Yoga', spots: 8 },
    { id: 4, name: 'Cardio Kick', trainer: 'Mike Tyson', time: '09:00 AM', duration: '60 min', day: 'Tuesday', category: 'Cardio', spots: 10 },
    { id: 5, name: 'CrossFit', trainer: 'Alex Green', time: '05:00 PM', duration: '60 min', day: 'Tuesday', category: 'HIIT', spots: 6 },
    { id: 6, name: 'Morning Yoga', trainer: 'Emma Wilson', time: '07:00 AM', duration: '60 min', day: 'Wednesday', category: 'Yoga', spots: 15 },
    // Add more mock data as needed to fill the week
];

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState('Monday');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredClasses = MOCK_CLASSES.filter(c =>
        c.day === activeDay &&
        (selectedCategory === 'All' || c.category === selectedCategory)
    );

    return (
        <div className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4">Class <span className="text-orange-500">Schedule</span></h1>
                    <p className="text-gray-400">Find your perfect workout. Book early to secure your spot.</p>
                </div>

                {/* Day Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {DAYS.map((day) => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeDay === day
                                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                                    : 'bg-neutral-900 text-gray-400 hover:bg-neutral-800 hover:text-white'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <span className="text-gray-500 text-sm font-medium">Filter by:</span>
                    <button
                        onClick={() => setSelectedCategory('All')}
                        className={`text-sm ${selectedCategory === 'All' ? 'text-orange-500 font-bold' : 'text-gray-400 hover:text-white'}`}
                    >
                        All
                    </button>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`text-sm ${selectedCategory === cat ? 'text-orange-500 font-bold' : 'text-gray-400 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Schedule Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredClasses.length > 0 ? (
                        filteredClasses.map((item) => (
                            <div key={item.id} className="bg-neutral-900 border border-white/5 p-6 rounded-xl hover:border-orange-500/50 transition-colors group">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">{item.name}</h3>
                                        <p className="text-gray-400 text-sm mt-1">{item.trainer}</p>
                                    </div>
                                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-medium">
                                        {item.category}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                                        {item.time} ({item.duration})
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <Users className="w-4 h-4 mr-2 text-orange-500" />
                                        {item.spots} spots left
                                    </div>
                                </div>

                                <button className="w-full mt-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                                    Book Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center">
                            <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-white">No classes scheduled</h3>
                            <p className="text-gray-400">Try selecting a different day or category.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
