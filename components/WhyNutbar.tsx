"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const benefits = [
  { icon: "💪", title: "High Protein", desc: "20g of protein per bar. Fuel muscle recovery with every bite.", stat: "20g", statLabel: "per bar" },
  { icon: "🌰", title: "Real Nuts", desc: "Handpicked almonds and peanuts. No extracts — the real deal.", stat: "100%", statLabel: "real nuts" },
  { icon: "🚫", title: "No Junk", desc: "10 ingredients or fewer. No preservatives, no fillers, no nonsense.", stat: "≤10", statLabel: "ingredients" },
  { icon: "⚡", title: "Athlete Energy", desc: "Complex carbs from nuts deliver sustained energy — no crash.", stat: "4hr", statLabel: "sustained energy" },
  { icon: "🍫", title: "Guilt-Free", desc: "Dark chocolate richness. Balanced macros for peak performance.", stat: "Zero", statLabel: "guilt" },
];

export default function WhyNutbar() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 sm:py-32 bg-choco-mid overflow-hidden" id="why">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #C8833A 0px, #C8833A 1px, transparent 1px, transparent 60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-20">
          <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">Why Choose</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream mb-4 sm:mb-6">
            The <span className="text-gradient">NutBar</span> Difference
          </h2>
          <div className="w-16 sm:w-20 h-0.5 bg-caramel mx-auto" />
        </motion.div>

        {/* Benefits grid — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`group relative p-6 sm:p-8 border border-caramel/15 bg-choco-rich/60 hover:border-caramel/50 transition-all duration-500 card-hover ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-caramel/60 group-hover:border-caramel transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-caramel/60 group-hover:border-caramel transition-colors duration-300" />
              <motion.div className="text-3xl sm:text-4xl mb-4 sm:mb-6"
                animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}>
                {b.icon}
              </motion.div>
              <div className="mb-3 sm:mb-4">
                <span className="font-display text-3xl sm:text-4xl font-900 text-gradient">{b.stat}</span>
                <span className="font-body text-xs tracking-widest uppercase text-nutty-sand/50 ml-2">{b.statLabel}</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-700 text-nutty-cream mb-2 sm:mb-3 group-hover:text-caramel-gold transition-colors">{b.title}</h3>
              <p className="font-regular text-nutty-sand/70 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 100%, rgba(200,131,58,0.08), transparent 70%)" }} />
            </motion.div>
          ))}
        </div>

        {/* Real photo strip */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7 }}
          className="mt-12 sm:mt-16 relative h-32 sm:h-44 overflow-hidden">
          <Image src="/nut3.jpg" alt="Real NUTBAR bars" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #1A0E08 0%, transparent 20%, transparent 80%, #1A0E08 100%), linear-gradient(to bottom, #1A0E08 0%, transparent 30%, transparent 70%, #1A0E08 100%)" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-body font-900 text-sm sm:text-lg tracking-[0.3em] sm:tracking-[0.5em] uppercase text-nutty-cream/90 text-center px-4">
              ✦ Real. Fresh. Crafted. ✦
            </p>
          </div>
        </motion.div>

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
          className="mt-10 sm:mt-16 overflow-hidden border-y border-caramel/20 py-3 sm:py-4">
          <div className="flex animate-marquee gap-10 sm:gap-16">
            {Array(8).fill(null).map((_, i) => (
              <div key={i} className="flex items-center gap-10 sm:gap-16 whitespace-nowrap">
                <span className="font-body font-800 text-base sm:text-xl tracking-widest uppercase text-caramel/60">Real Protein</span>
                <span className="text-caramel">✦</span>
                <span className="font-body font-800 text-base sm:text-xl tracking-widest uppercase text-caramel/60">Real Nuts</span>
                <span className="text-caramel">✦</span>
                <span className="font-body font-800 text-base sm:text-xl tracking-widest uppercase text-caramel/60">Real Energy</span>
                <span className="text-caramel">✦</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
