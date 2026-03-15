"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const macros = [
  { label: "Calories", value: "240", unit: "kcal", pct: 80, color: "#C8833A" },
  { label: "Protein", value: "20", unit: "g", pct: 95, color: "#E8B86D" },
  { label: "Carbs", value: "18", unit: "g", pct: 55, color: "#D4A574" },
  { label: "Fat", value: "10", unit: "g", pct: 45, color: "#A67C5B" },
  { label: "Fiber", value: "4", unit: "g", pct: 35, color: "#8B5E3C" },
];

export default function ProductShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0806 0%, #1A0E08 50%, #0D0806 100%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[600px] h-64 sm:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,131,58,0.07) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12 sm:mb-20">
          <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">The Bar</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream">
            Built for <span className="text-gradient">Performance</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Product image */}
          <motion.div initial={{ opacity: 0, x: -60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9 }}
            className="flex items-center justify-center relative">
            {/* Rotating rings — desktop only */}
            <motion.div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-caramel/20 hidden sm:block"
              animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
            <motion.div className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-caramel/10 hidden sm:block"
              animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-64 sm:w-80"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(200,131,58,0.2)" }}>
                <Image src="/bar-product.png" alt="NUTBAR product" fill className="object-cover" sizes="320px" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,8,6,0.15) 0%, transparent 60%)" }} />
              </div>
            </motion.div>

            {/* Floating dots */}
            {[{ label: "Almonds", x: "8%", y: "25%" }, { label: "Chocolate", x: "72%", y: "15%" }, { label: "Protein", x: "78%", y: "65%" }].map((dot, i) => (
              <motion.div key={dot.label} className="absolute hidden sm:flex items-center gap-2"
                style={{ left: dot.x, top: dot.y }}
                initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1 + i * 0.3 }}>
                <motion.div className="w-2 h-2 rounded-full bg-caramel" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }} />
                <span className="font-body text-xs text-caramel-light tracking-wider uppercase">{dot.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Macros */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, delay: 0.2 }}>
            <div className="mb-6 sm:mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-800 text-nutty-cream mb-1">Nutrition Facts</h3>
              <p className="font-body text-xs tracking-widest uppercase text-nutty-sand/40">Per 60g Bar</p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {macros.map((m, i) => (
                <motion.div key={m.label}
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}>
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="font-body font-600 text-xs sm:text-sm tracking-wider uppercase text-nutty-cream/80">{m.label}</span>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="font-display text-xl sm:text-2xl font-900" style={{ color: m.color }}>{m.value}</span>
                      <span className="font-body text-xs text-nutty-sand/50">{m.unit}</span>
                    </div>
                  </div>
                  <div className="h-1 sm:h-1.5 bg-choco-rich rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${m.color}, ${m.color}88)` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.pct}%` } : { width: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1.2, ease: "easeOut" }} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Badges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.2 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-caramel/15">
              {[{ label: "No artificial colors", icon: "🎨" }, { label: "No preservatives", icon: "🧪" }, { label: "Gluten-friendly", icon: "🌾" }].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                  <p className="font-body text-[10px] sm:text-xs text-nutty-sand/50 tracking-wide leading-tight">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
