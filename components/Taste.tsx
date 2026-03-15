"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Taste() {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const flavors = [
    { name: "Rich Dark Chocolate", desc: "70% cacao intensity", emoji: "🍫", color: "#5C3320" },
    { name: "Roasted Nut Depth", desc: "Earth & warmth", emoji: "🥜", color: "#8B5E3C" },
    { name: "Caramel Sweetness", desc: "Natural honey finish", emoji: "🍯", color: "#C8833A" },
    { name: "Satisfying Crunch", desc: "Every single bite", emoji: "✨", color: "#E8B86D" },
  ];

  return (
    <section ref={ref} className="relative py-20 sm:py-32 overflow-hidden bg-choco-dark">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(92,51,32,0.35) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(200,131,58,0.12) 0%, transparent 60%)" }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={inViewRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main large image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden"
              style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(200,131,58,0.15)" }}>
              <Image src="/nut1.jpg" alt="NUTBAR nut bars" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,8,6,0.2) 0%, transparent 50%, rgba(200,131,58,0.1) 100%)" }} />
            </div>

            {/* Floating mini image — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 w-28 sm:w-36 lg:w-44 aspect-square overflow-hidden border-2 border-choco-dark hidden sm:block"
              style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.6)" }}
            >
              <Image src="/bar-product.png" alt="NUTBAR product" fill className="object-cover" sizes="200px" />
            </motion.div>

            {/* Ingredients label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 px-3 py-2 bg-caramel text-choco-dark font-body font-900 text-xs tracking-widest uppercase hidden sm:block"
            >
              ✦ Real Ingredients
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">
                The Experience
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream mb-4 sm:mb-6 leading-tight">
                A Bite That <span className="text-gradient">Hits</span> Different
              </h2>
              <p className="font-regular text-nutty-sand/70 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                The moment you open a NUTBAR, the aroma of roasted nuts and honey hits you. Then the first bite — dense, satisfying crunch giving way to pure natural goodness. It&apos;s indulgent. It&apos;s clean. It&apos;s like nothing else.
              </p>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {flavors.map((f, i) => (
                <motion.div key={f.name} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl rounded-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: f.color + "40" }}>
                    {f.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-700 text-sm sm:text-base text-nutty-cream group-hover:text-caramel-gold transition-colors truncate">{f.name}</p>
                    <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-nutty-sand/40">{f.desc}</p>
                  </div>
                  <div className="w-10 sm:w-16 h-px flex-shrink-0" style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }} />
                </motion.div>
              ))}
            </div>

            <motion.blockquote initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}
              className="mt-8 sm:mt-10 pl-4 sm:pl-6 border-l-2 border-caramel">
              <p className="font-display text-base sm:text-lg italic text-nutty-cream/80">
                &ldquo;It tastes like a treat, but fuels like a performance bar.&rdquo;
              </p>
              <p className="font-body text-xs tracking-widest uppercase text-caramel mt-2">— Early Beta Taster</p>
            </motion.blockquote>
          </div>
        </div>

        {/* Bottom: Ingredients spread photo — full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.9 }}
          className="mt-16 sm:mt-20 relative overflow-hidden"
          style={{ height: "200px", sm: "280px" }}
        >
          <div className="relative w-full h-48 sm:h-64 overflow-hidden">
            <Image src="/ingredients-spread.png" alt="Real ingredients" fill className="object-cover object-center" sizes="100vw" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #0D0806 0%, transparent 20%, transparent 80%, #0D0806 100%), linear-gradient(to bottom, transparent 50%, #0D0806 100%)" }} />
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="font-body font-800 text-sm sm:text-base tracking-[0.3em] uppercase text-nutty-cream/90 whitespace-nowrap">
                ✦ Sourced Fresh · Made Honest · Eaten Proudly ✦
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
