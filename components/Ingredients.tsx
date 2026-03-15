"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ingredients = [
  { name: "Almonds", emoji: "🌰", color: "#C8833A", bgColor: "#2C1810", tagline: "The Heart", desc: "Premium California almonds packed with vitamin E, healthy fats, and natural crunch.", benefits: ["Vitamin E", "Healthy Fats", "Magnesium", "Antioxidants"], origin: "California, USA" },
{ name: "Cashews", emoji: "💪", color: "#D4A574", bgColor: "#231508", tagline: "The Power", desc: "Creamy, buttery cashews loaded with healthy fats and natural protein for that rich, satisfying bite.", benefits: ["Healthy Fats", "Magnesium", "Zinc", "Heart Health"], origin: "India" },
  { name: "Dark Chocolate", emoji: "🍫", color: "#8B5E3C", bgColor: "#1A0E08", tagline: "The Soul", desc: "70%+ cacao dark chocolate — rich, indulgent, and loaded with antioxidants.", benefits: ["Antioxidants", "Mood Boost", "Iron", "Theobromine"], origin: "Ghana / Ecuador" },
  { name: "Honey", emoji: "🍯", color: "#E8B86D", bgColor: "#2C1810", tagline: "The Sweetness", desc: "Pure natural honey binding it all together — no refined sugar, just clean golden sweetness.", benefits: ["Natural Sugar", "Antioxidants", "Antibacterial", "Energy Boost"], origin: "Local Farms, India" },
  { name: "Seeds Mix", emoji: "🌱", color: "#A67C5B", bgColor: "#1C1008", tagline: "The Secret", desc: "Chia, flax, and sunflower seeds adding omega-3s and crunch to every bite.", benefits: ["Omega-3s", "Fiber", "Zinc", "Selenium"], origin: "Organic Farms" },
];

export default function Ingredients() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="ingredients" className="relative py-20 sm:py-32 bg-choco-dark overflow-hidden">
      <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full border border-caramel/5" />
      <div className="absolute bottom-20 left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full border border-caramel/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-6">
          <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">What's Inside</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream max-w-lg">
              Five <span className="text-gradient">Perfect</span> Ingredients
            </h2>
            <p className="font-regular text-nutty-sand/60 text-xs sm:text-sm max-w-xs leading-relaxed">
              Tap each card to discover what makes each ingredient extraordinary.
            </p>
          </div>
        </motion.div>
        <div className="w-16 sm:w-20 h-0.5 bg-caramel mb-10 sm:mb-16" />

        {/* Mobile: scrollable row / Desktop: 5-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {ingredients.map((ing, i) => (
            <motion.div key={ing.name}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`ingredient-card h-60 sm:h-72 cursor-pointer ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div className="ingredient-inner relative w-full h-full">
                {/* Front */}
                <div className="ingredient-front absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 border border-caramel/20"
                  style={{ backgroundColor: ing.bgColor }}>
                  <motion.div className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                    animate={{ y: [0, -8, 0] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity }}>
                    {ing.emoji}
                  </motion.div>
                  <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1.5 font-500" style={{ color: ing.color }}>
                    {ing.tagline}
                  </p>
                  <h3 className="font-display text-base sm:text-xl font-700 text-nutty-cream text-center">{ing.name}</h3>
                  <div className="mt-3 flex items-center gap-1 text-nutty-sand/40 text-[10px] sm:text-xs">
                    <span>Hover to explore</span>
                    <span>→</span>
                  </div>
                </div>
                {/* Back */}
                <div className="ingredient-back absolute inset-0 flex flex-col justify-between p-4 sm:p-6 border"
                  style={{ backgroundColor: ing.color + "20", borderColor: ing.color + "60" }}>
                  <div>
                    <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase font-600 mb-1" style={{ color: ing.color }}>
                      {ing.origin}
                    </p>
                    <p className="font-regular text-nutty-cream/80 text-[10px] sm:text-xs leading-relaxed mt-1.5">{ing.desc}</p>
                  </div>
                  <div>
                    <p className="font-body text-[10px] tracking-widest uppercase text-nutty-sand/50 mb-1.5">Benefits</p>
                    <div className="flex flex-wrap gap-1">
                      {ing.benefits.map((b) => (
                        <span key={b} className="text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 font-body font-600"
                          style={{ backgroundColor: ing.color + "30", color: ing.color }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}
          className="text-center font-body text-nutty-sand/30 text-[10px] sm:text-xs tracking-widest uppercase mt-8 sm:mt-12">
          ✦ All ingredients sourced ethically · Zero artificial additives · Always fresh ✦
        </motion.p>
      </div>
    </section>
  );
}
