"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { icon: "🏋️", title: "Gym Performance", metric: "2x", metricLabel: "vs sugar bars", desc: "Balanced macros fuel your lifts without the spike and crash. Perfect pre- or intra-workout.", points: ["Slow-release energy", "Muscle fuel", "Pre-workout power"] },
  { icon: "⚡", title: "Sustained Energy", metric: "4hr", metricLabel: "Energy that lasts", desc: "Complex fats from nuts provide a steady energy curve — no spike, no crash, just clean sustained performance.", points: ["No energy crash", "Steady glucose", "Brain + body fuel"] },
  { icon: "💪", title: "Muscle Recovery", metric: "20g", metricLabel: "Complete amino acids", desc: "Full BCAA profile accelerates muscle repair post-workout. Your muscles will thank you.", points: ["BCAA rich", "Fast absorption", "Muscle repair"] },
];

export default function Performance() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 sm:py-32 bg-choco-mid overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(-45deg, #C8833A 0px, #C8833A 2px, transparent 2px, transparent 40px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12 sm:mb-20">
          <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">Performance</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream">
            Engineered to <span className="text-gradient">Perform</span>
          </h2>
          <p className="font-regular text-nutty-sand/60 mt-3 sm:mt-4 max-w-lg mx-auto text-sm sm:text-base px-2">
            Not just a snack. A performance tool. Built for those who push harder.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.title}
              initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group relative">
              <div className="p-6 sm:p-8 border border-caramel/15 bg-choco-dark/80 hover:border-caramel/40 transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl">{stat.icon}</span>
                  <div className="text-right">
                    <p className="font-display text-3xl sm:text-4xl font-900 text-gradient">{stat.metric}</p>
                    <p className="font-body text-[9px] sm:text-[10px] tracking-widest uppercase text-nutty-sand/40">{stat.metricLabel}</p>
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-800 text-nutty-cream mb-3 sm:mb-4 group-hover:text-caramel-gold transition-colors">{stat.title}</h3>
                <p className="font-regular text-nutty-sand/60 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">{stat.desc}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {stat.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 sm:gap-3">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-caramel flex-shrink-0" />
                      <span className="font-body text-[10px] sm:text-xs tracking-wider uppercase text-nutty-sand/70">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-0.5 w-0 bg-caramel group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Comparison chart */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-20 p-5 sm:p-8 border border-caramel/15 bg-choco-dark/60">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-caramel mb-5 sm:mb-6 font-600">NUTBAR vs Regular Bar</p>
          <div className="space-y-3 sm:space-y-4">
            {[
              { label: "Protein", nutbar: 90, regular: 20 },
              { label: "Real Ingredients", nutbar: 100, regular: 35 },
              { label: "Energy Duration", nutbar: 85, regular: 30 },
              { label: "Nutritional Value", nutbar: 95, regular: 25 },
            ].map((row, i) => (
              <div key={row.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-nutty-sand/60">{row.label}</span>
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs">
                    <span className="text-caramel font-body font-700">NUTBAR {row.nutbar}%</span>
                    <span className="text-nutty-sand/30">vs {row.regular}%</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 h-1.5 bg-choco-rich rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full bg-caramel"
                      initial={{ width: 0 }} animate={inView ? { width: `${row.nutbar}%` } : {}}
                      transition={{ delay: 1 + i * 0.15, duration: 1 }} />
                  </div>
                  <div className="flex-1 h-1.5 bg-choco-rich rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full bg-nutty-sand/20"
                      initial={{ width: 0 }} animate={inView ? { width: `${row.regular}%` } : {}}
                      transition={{ delay: 1 + i * 0.15, duration: 1 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
