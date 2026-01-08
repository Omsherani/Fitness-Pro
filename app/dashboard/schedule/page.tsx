'use client';

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle } from 'lucide-react';

const CLASSES = [
    { id: 1, name: 'Power Lifting', trainer: 'John Doe', time: 'Today, 09:00 AM', duration: '60 min', status: 'Booked' },
    { id: 2, name: 'HIIT Blast', trainer: 'Sarah Smith', time: 'Today, 5:00 PM', duration: '45 min', status: 'Available' },
    { id: 3, name: 'Morning Yoga', trainer: 'Emma Wilson', time: 'Tomorrow, 7:00 AM', duration: '60 min', status: 'Available' },
];

export default function MemberSchedulePage() {
    const [classes, setClasses] = useState(CLASSES);

    const handleBook = (id: number) => {
        setClasses(classes.map(c => c.id === id ? { ...c, status: 'Booked' } : c));
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">My Schedule</h1>
                <p className="text-gray-400 mt-2">Manage your upcoming classes and bookings.</p>
            </div>

            <div className="grid gap-4">
                {classes.map((item) => (
                    <div key={item.id} className="bg-neutral-900 border border-white/5 p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-neutral-800 rounded-lg text-orange-500">
                                <CalendarIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {item.trainer}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time} ({item.duration})</span>
                                </div>
                            </div>
                        </div>

                        {item.status === 'Booked' ? (
                            <button disabled className="px-6 py-2 bg-green-500/10 text-green-500 font-bold rounded-lg border border-green-500/20 flex items-center gap-2 cursor-default">
                                <CheckCircle className="w-4 h-4" /> Booked
                            </button>
                        ) : (
                            <button
                                onClick={() => handleBook(item.id)}
                                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors"
                            >
                                Book Class
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
