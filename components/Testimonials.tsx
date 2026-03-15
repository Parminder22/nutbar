"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  { name: "Rahul M.", role: "Competitive Bodybuilder", emoji: "🏆", quote: "I've tried dozens of protein bars. NUTBAR is the only one that actually tastes like food and delivers on protein. The almond combo is insane.", rating: 5 },
  { name: "Priya S.", role: "CrossFit Athlete", emoji: "🔥", quote: "Pre-workout, post-workout, on the go — NUTBAR fits everywhere. The energy lasts for hours and I don't crash like with other bars.", rating: 5 },
  { name: "Arjun K.", role: "Marathon Runner", emoji: "🏃", quote: "Clean ingredients, real nuts, no weird aftertaste. This is what a protein bar should be. I carry two for every long run.", rating: 5 },
  { name: "Neha T.", role: "Nutritionist", emoji: "🥗", quote: "As a nutritionist, I'm picky about what I recommend. NUTBAR checks every box — real ingredients, balanced macros, and actually delicious.", rating: 5 },
  { name: "Vikram P.", role: "Personal Trainer", emoji: "💪", quote: "I recommend NUTBAR to all my clients. Nothing matches the protein-to-calorie ratio while tasting this good.", rating: 5 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 sm:py-32 bg-choco-dark overflow-hidden" ref={ref}>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-display text-[120px] sm:text-[200px] text-caramel/5 leading-none select-none pointer-events-none" aria-hidden>
        &ldquo;
      </div>

      <div className="max-w-4xl sm:max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 sm:mb-16">
          <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream">
            The <span className="text-gradient">Community</span> Speaks
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -30, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4 sm:px-8 py-8 sm:py-12 border border-caramel/20 bg-choco-rich/40 backdrop-blur-sm">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{testimonials[active].emoji}</div>
              <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                {Array(testimonials[active].rating).fill(null).map((_, i) => (
                  <span key={i} className="text-caramel text-base sm:text-lg">★</span>
                ))}
              </div>
              <p className="font-display text-lg sm:text-xl lg:text-2xl font-500 text-nutty-cream/90 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <p className="font-body font-800 text-caramel-light tracking-widest uppercase text-xs sm:text-sm">{testimonials[active].name}</p>
              <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-nutty-sand/40 mt-1">{testimonials[active].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 sm:gap-8 mt-7 sm:mt-10">
            <button onClick={prev}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-caramel/30 text-caramel hover:bg-caramel hover:text-choco-dark transition-all duration-300 flex items-center justify-center touch-manipulation"
              aria-label="Previous">←</button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-7 sm:w-8 bg-caramel" : "w-1.5 sm:w-2 bg-caramel/30"}`} />
              ))}
            </div>
            <button onClick={next}
              className="w-9 h-9 sm:w-10 sm:h-10 border border-caramel/30 text-caramel hover:bg-caramel hover:text-choco-dark transition-all duration-300 flex items-center justify-center touch-manipulation"
              aria-label="Next">→</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
