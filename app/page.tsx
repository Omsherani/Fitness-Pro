import Link from 'next/link';
import { ArrowRight, CheckCircle2, Trophy, Users, Timer } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
            alt="Gym Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1 border border-orange-500/50 rounded-full bg-orange-500/10 backdrop-blur-sm text-orange-400 font-semibold text-sm tracking-wide uppercase">
              #1 Fitness Center in the City
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              TRANSFORM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                YOUR BODY
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Join the elite fitness community. Expert trainers, premium equipment, and a vibe that pushes you to your limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/register">
                <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2">
                  Start Your Journey <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link href="/schedule">
                <button className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-sm text-white rounded-full font-bold text-lg transition-all flex items-center justify-center">
                  View Schedule
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Expert Trainers', value: '50+', icon: Users },
              { label: 'Modern Equipment', value: '200+', icon: Trophy },
              { label: 'Active Members', value: '2k+', icon: CheckCircle2 },
              { label: 'Opening Hours', value: '24/7', icon: Timer },
            ].map((stat, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 rounded-lg text-orange-500">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Value Prop */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose <span className="text-orange-500">FitnessPro?</span></h2>
            <p className="text-gray-400 text-lg">We don't just provide equipment; we provide an environment for success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'State-of-the-art Equipment',
                desc: 'Train with the latest Technogym and Rogue Fitness gear designed for peak performance.',
                image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop'
              },
              {
                title: 'Expert Personal Training',
                desc: 'Get personalized guidance from certified trainers who track your progress every step of the way.',
                image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop'
              },
              {
                title: 'Diverse Group Classes',
                desc: 'From high-intensity HIIT/CrossFit to calming Yoga flows, finding your fit is easy.',
                image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop'
              }
            ].map((feature, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-600">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-multiply" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO START?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book a free trial session today and experience the difference yourself. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <button className="px-10 py-5 bg-black text-white rounded-full font-bold text-xl hover:bg-gray-900 transition-colors shadow-2xl">
                Get Started Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-10 py-5 bg-white text-orange-600 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
