import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Linkedin, Trophy } from 'lucide-react';

const trainers = [
    {
        id: 1,
        name: "Alex 'The Rock' Johnson",
        role: "Head Strength Coach",
        specialties: ["Powerlifting", "Hypertrophy", "Strength Conditioning"],
        bio: "Former national powerlifting champion with 10+ years of experience transforming physiques. Alex believes that true strength starts in the mind.",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    },
    {
        id: 2,
        name: "Sarah Miller",
        role: "HIIT & Cardio Specialist",
        specialties: ["Endurance", "Fat Loss", "High Intensity Training"],
        bio: "Sarah brings an explosive energy to every session. Her fast-paced workouts are designed to push your limits and maximize calorie burn.",
        image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop",
        socials: { instagram: "#", twitter: "#" }
    },
    {
        id: 3,
        name: "Marcus Chen",
        role: "Mobility & Yoga Instructor",
        specialties: ["Yoga Flow", "Mobility", "Injury Prevention"],
        bio: "Balance is key. Marcus helps athletes recover faster and move better through specialized mobility work and yoga sequences.",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop",
        socials: { instagram: "#", linkedin: "#" }
    },
    {
        id: 4,
        name: "Jessica Davis",
        role: "Nutrition & Wellness Coach",
        specialties: ["Sports Nutrition", "Weight Management", "Lifestyle Coaching"],
        bio: "Fueling your body is just as important as training it. Jessica creates sustainable nutrition plans that fit your lifestyle (and taste buds).",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
        socials: { instagram: "#", twitter: "#", linkedin: "#" }
    }
];

export default function TrainersPage() {
    return (
        <div className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">MEET THE <span className="text-orange-500">ELITE</span></h1>
                    <p className="text-xl text-gray-400">
                        Certified experts dedicated to guiding you through every rep, step, and milestone of your journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer) => (
                        <div key={trainer.id} className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-white/5 hover:border-orange-500/50 transition-all duration-300">
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                {/* Socials Pop-up */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    {trainer.socials.instagram && (
                                        <Link href={trainer.socials.instagram} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors">
                                            <Instagram className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {trainer.socials.twitter && (
                                        <Link href={trainer.socials.twitter} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors">
                                            <Twitter className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {trainer.socials.linkedin && (
                                        <Link href={trainer.socials.linkedin} className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors">
                                            <Linkedin className="h-5 w-5" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 relative">
                                <div className="absolute -top-6 left-6 px-3 py-1 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded">
                                    {trainer.role}
                                </div>
                                <h3 className="text-2xl font-bold text-white mt-2 mb-1">{trainer.name}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {trainer.specialties.map((spec, i) => (
                                        <span key={i} className="text-xs text-gray-400 border border-white/10 px-2 py-0.5 rounded-full">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {trainer.bio}
                                </p>

                                <Link href="/register">
                                    <button className="w-full py-2 border border-white/20 rounded text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                                        <Trophy className="w-4 h-4" /> Book Session
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
