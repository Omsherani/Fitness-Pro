

import { connectToDatabase } from '@/lib/db';
import Trainer from '@/models/Trainer';
import { Plus, MoreVertical, Star } from 'lucide-react';

export const dynamic = "force-dynamic";


async function getTrainers() {
    await connectToDatabase();
    const trainers = await Trainer.find({}).sort({ createdAt: -1 });
    // If no trainers in DB, return mocking/empty is handled in UI, but hopefully we seed some later.
    return trainers;
}

export default async function AdminTrainersPage() {
    const trainers = await getTrainers();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Trainer Management</h1>
                    <p className="text-gray-400 mt-2">Manage your fitness experts.</p>
                </div>
                <button className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Add Trainer
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.length > 0 ? (
                    trainers.map((trainer: any) => (
                        <div key={trainer._id} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 group hover:border-red-500/50 transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full bg-zinc-800 overflow-hidden">
                                        <img src={trainer.imageUrl} alt={trainer.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">{trainer.name}</h3>
                                        <p className="text-sm text-red-500">{trainer.specialties?.[0] || 'Trainer'}</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-white"><MoreVertical className="w-5 h-5" /></button>
                            </div>

                            <div className="mt-2">
                                <div className="text-sm text-gray-400 line-clamp-2">{trainer.bio}</div>
                            </div>

                            <div className="flex gap-2 mt-auto pt-4">
                                {trainer.specialties?.slice(0, 2).map((spec: string, i: number) => (
                                    <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{spec}</span>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center bg-zinc-900 border border-white/5 rounded-2xl">
                        <p className="text-gray-400 mb-4">No trainers found in the database.</p>
                        <div className="text-sm text-gray-500">
                            Typically you would seed the database or use the "Add Trainer" button.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
