'use client';

import { Utensils, Apple, Coffee, Moon } from 'lucide-react';

const MEALS = [
    { type: 'Breakfast', name: 'Oatmeal & Berries', cal: 450, icon: Coffee, time: '8:00 AM' },
    { type: 'Lunch', name: 'Grilled Chicken Salad', cal: 650, icon: Utensils, time: '1:00 PM' },
    { type: 'Snack', name: 'Protein Shake', cal: 150, icon: Apple, time: '4:00 PM' },
    { type: 'Dinner', name: 'Salmon & Asparagus', cal: 550, icon: Moon, time: '7:30 PM' },
];

export default function NutritionPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Diet & Nutrition</h1>
                <p className="text-gray-400 mt-2">Track your macros and follow your meal plan.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-1">1,800</div>
                    <div className="text-sm text-gray-400">Calories Consumed</div>
                </div>
                <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold text-white mb-1">2,400</div>
                    <div className="text-sm text-gray-400">Daily Goal</div>
                </div>
                <div className="bg-neutral-900 border border-white/5 p-6 rounded-2xl text-center">
                    <div className="text-4xl font-bold text-green-500 mb-1">600</div>
                    <div className="text-sm text-gray-400">Remaining</div>
                </div>
            </div>

            <div className="bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-xl font-bold text-white">Today's Meal Plan</h2>
                </div>
                <div className="divide-y divide-white/5">
                    {MEALS.map((meal, i) => (
                        <div key={i} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-neutral-800 rounded-lg text-orange-500">
                                    <meal.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">{meal.type} • {meal.time}</div>
                                    <h3 className="font-bold text-white text-lg">{meal.name}</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="font-bold text-white">{meal.cal}</span>
                                <span className="text-xs text-gray-500 ml-1">kcal</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
