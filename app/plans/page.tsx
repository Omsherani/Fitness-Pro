import { Check } from "lucide-react";
import Link from 'next/link';

const plans = [
    {
        name: "Monthly",
        price: "$49",
        duration: "/month",
        description: "Perfect for getting started and testing the waters.",
        features: [
            "Access to gym floor",
            "Locker room access",
            "1 Free personal training session",
            "Free WiFi"
        ],
        highlight: false,
        buttonText: "Join Monthly"
    },
    {
        name: "Quarterly",
        price: "$129",
        duration: "/3 months",
        description: "Commit to a season of change. Save 15% compared to monthly.",
        features: [
            "All Monthly perks",
            "Unlimited Group Classes",
            "Nutrition consultation",
            "Guest pass (1/month)"
        ],
        highlight: true,
        buttonText: "Join Quarterly"
    },
    {
        name: "Annual",
        price: "$449",
        duration: "/year",
        description: "The ultimate commitment to your health. Best value.",
        features: [
            "All Quarterly perks",
            "Priority class booking",
            "Monthly body composition scan",
            "Exclusive swag bag",
            "24/7 Access"
        ],
        highlight: false,
        buttonText: "Join Annually"
    }
];

export default function PlansPage() {
    return (
        <div className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your <span className="text-orange-500">Plan</span></h1>
                    <p className="text-gray-400 text-lg">
                        Fair pricing, no hidden fees. Select the plan that fits your goals and lifestyle.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border ${plan.highlight
                                    ? 'bg-neutral-900 border-orange-500 shadow-2xl shadow-orange-500/10 scale-105 z-10'
                                    : 'bg-black border-white/10 hover:border-white/20'
                                } transition-all duration-300`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm font-bold rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    <span className="text-gray-500">{plan.duration}</span>
                                </div>
                                <p className="text-gray-400 mt-4 text-sm">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="h-5 w-5 text-orange-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/register" className="block">
                                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight
                                        ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-orange-500/25'
                                        : 'bg-white text-black hover:bg-gray-200'
                                    }`}>
                                    {plan.buttonText}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">
                        Looking for a corporate plan or day pass? <Link href="/contact" className="text-orange-500 hover:underline">Contact us</Link> for custom options.
                    </p>
                </div>
            </div>
        </div>
    );
}
