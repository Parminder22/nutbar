"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Floating nut particle
function NutParticle({
  x,
  y,
  size,
  delay,
  emoji,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
  emoji: string;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: x, top: y, fontSize: size }}
      animate={{
        y: [0, -20, 10, -15, 0],
        x: [0, 8, -5, 10, 0],
        rotate: [0, 15, -10, 20, 0],
        opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
      }}
      transition={{
        duration: 7 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {emoji}
    </motion.div>
  );
}

const PARTICLES = [
  { x: "8%", y: "20%", size: 32, delay: 0, emoji: "🥜" },
  { x: "85%", y: "15%", size: 28, delay: 1.5, emoji: "🌰" },
  { x: "12%", y: "70%", size: 24, delay: 2, emoji: "🥜" },
  { x: "78%", y: "65%", size: 36, delay: 0.5, emoji: "🌰" },
  { x: "90%", y: "45%", size: 22, delay: 3, emoji: "🥜" },
  { x: "5%", y: "45%", size: 30, delay: 1, emoji: "🌰" },
  { x: "60%", y: "80%", size: 26, delay: 2.5, emoji: "🥜" },
  { x: "40%", y: "10%", size: 20, delay: 1.2, emoji: "🌰" },
  { x: "70%", y: "25%", size: 28, delay: 0.8, emoji: "🥜" },
  { x: "25%", y: "85%", size: 24, delay: 3.5, emoji: "🌰" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-choco-dark"
    >
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-radial-gradient" style={{
        background: "radial-gradient(ellipse at 50% 60%, #2C1810 0%, #1A0E08 40%, #0D0806 100%)"
      }} />

      {/* Animated chocolate drip top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-2"
        style={{ background: "linear-gradient(90deg, #C8833A, #E8B86D, #C8833A, #E8B86D, #C8833A)" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating nuts */}
      {PARTICLES.map((p, i) => (
        <NutParticle key={i} {...p} />
      ))}

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24"
      >
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          {/* Pre-badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-caramel/40 bg-caramel/10 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
            <span className="font-body text-caramel-light text-xs tracking-[0.3em] uppercase font-600">
              Premium Protein Bar
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-900 leading-none mb-6"
          >
            <span className="block text-nutty-cream">NOT</span>
            <span className="block text-gradient">YOUR</span>
            <span className="block text-nutty-cream">REGULAR</span>
            <span className="block text-gradient">BAR.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-regular text-nutty-sand/80 text-lg max-w-md lg:mx-0 mx-auto mb-10 leading-relaxed"
          >
            Real nuts. Real protein. Zero compromise. Crafted for those who demand more from their fuel.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link
              href="https://nut-bar-2.myshopify.com/"

              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-caramel text-choco-dark font-body font-900 text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <span className="relative z-10">⚡ Fuel Up</span>
              <motion.span
                className="absolute inset-0 bg-caramel-gold"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-3 px-8 py-4 border border-nutty-cream/30 text-nutty-cream font-body font-600 text-sm tracking-[0.2em] uppercase hover:border-caramel hover:text-caramel-gold transition-all duration-300"
            >
              Our Story →
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-8 mt-14 justify-center lg:justify-start"
          >
            {[
              { value: "20g", label: "Protein" },
              { value: "≤10", label: "Ingredients" },
              { value: "100%", label: "Real Nuts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-3xl font-900 text-gradient">{stat.value}</p>
                <p className="font-body text-xs tracking-widest uppercase text-nutty-sand/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Product visual */}
        <div className="relative flex items-center justify-center">
          {/* Glow ring */}
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(200,131,58,0.25) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Chocolate bar SVG visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <BarVisual />
            </motion.div>
          </motion.div>

          {/* Floating ingredient labels */}
          {[
            { text: "20g Protein", top: "15%", left: "-10%", delay: 1.4 },
            { text: "Real Almonds", top: "50%", right: "-15%", delay: 1.7 },
            { text: "Dark Chocolate", bottom: "20%", left: "-5%", delay: 2.0 },
          ].map((label, i) => (
            <motion.div
              key={i}
              className="absolute hidden lg:block"
              style={{
                top: label.top,
                left: label.left,
                right: (label as any).right,
                bottom: label.bottom,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: label.delay }}
            >
              <div className="px-3 py-1.5 border border-caramel/40 bg-choco-rich/80 backdrop-blur-sm text-caramel-gold font-body font-600 text-xs tracking-widest uppercase whitespace-nowrap">
                ✦ {label.text}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-nutty-sand/40">Scroll</p>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-caramel to-transparent"
          animate={{ scaleY: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}

function BarVisual() {
  return (
    <svg width="320" height="420" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bar body */}
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3D2314" />
          <stop offset="40%" stopColor="#5C3320" />
          <stop offset="100%" stopColor="#1A0E08" />
        </linearGradient>
        <linearGradient id="wrapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8833A" />
          <stop offset="50%" stopColor="#E8B86D" />
          <stop offset="100%" stopColor="#A0621C" />
        </linearGradient>
        <linearGradient id="chocoTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5C3320" />
          <stop offset="100%" stopColor="#3D2314" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="20" floodColor="#C8833A" floodOpacity="0.3" />
        </filter>
        <linearGradient id="caramelDrip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B86D" />
          <stop offset="100%" stopColor="#C8833A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="160" cy="400" rx="100" ry="15" fill="rgba(200,131,58,0.15)" />

      {/* Wrapper - bottom half */}
      <rect x="55" y="200" width="210" height="180" rx="12" fill="url(#wrapGrad)" filter="url(#shadow)" />

      {/* Wrapper text area */}
      <rect x="65" y="220" width="190" height="140" rx="8" fill="#1A0E08" fillOpacity="0.3" />
      <text x="160" y="268" textAnchor="middle" fill="#FAF3E8" fontSize="11" fontFamily="serif" fontWeight="900" letterSpacing="4">THE</text>
      <text x="160" y="292" textAnchor="middle" fill="#E8B86D" fontSize="22" fontFamily="serif" fontWeight="900" letterSpacing="3">NUTBAR</text>
      <text x="160" y="316" textAnchor="middle" fill="#FAF3E8" fontSize="8" fontFamily="sans-serif" letterSpacing="6" fillOpacity="0.8">PROTEIN BAR</text>

      {/* Divider lines on wrapper */}
      <line x1="75" y1="330" x2="245" y2="330" stroke="#E8B86D" strokeOpacity="0.4" strokeWidth="0.5" />
      <text x="160" y="350" textAnchor="middle" fill="#E8B86D" fontSize="8" fontFamily="sans-serif" letterSpacing="3" fillOpacity="0.7">20g PROTEIN · REAL NUTS</text>

      {/* Chocolate top half */}
      <rect x="50" y="70" width="220" height="150" rx="12" fill="url(#barGrad)" />

      {/* Chocolate segment lines */}
      {[0, 1, 2].map((i) => (
        <line key={`h${i}`} x1="60" y1={110 + i * 35} x2="260" y2={110 + i * 35} stroke="#1A0E08" strokeWidth="2" strokeOpacity="0.5" />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line key={`v${i}`} x1={95 + i * 48} y1="80" x2={95 + i * 48} y2="210" stroke="#1A0E08" strokeWidth="2" strokeOpacity="0.5" />
      ))}

      {/* Chocolate top surface highlight */}
      <rect x="50" y="70" width="220" height="30" rx="8" fill="url(#chocoTop)" fillOpacity="0.4" />

      {/* Caramel drip effects */}
      <path d="M120 70 Q125 40 130 55 Q135 30 140 50 Q145 25 150 45 Q155 20 160 40 Q165 15 170 38 Q175 20 180 45 Q185 30 190 55 Q195 40 200 70" stroke="url(#caramelDrip)" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Almond / nut decorations on top */}
      {[
        { cx: 90, cy: 130, rx: 12, ry: 8 },
        { cx: 140, cy: 155, rx: 10, ry: 7 },
        { cx: 200, cy: 120, rx: 13, ry: 8 },
        { cx: 230, cy: 165, rx: 9, ry: 6 },
        { cx: 110, cy: 185, rx: 11, ry: 7 },
        { cx: 170, cy: 100, rx: 10, ry: 6 },
      ].map((nut, i) => (
        <ellipse key={i} cx={nut.cx} cy={nut.cy} rx={nut.rx} ry={nut.ry} fill="#C8833A" fillOpacity="0.8" />
      ))}

      {/* Shine on chocolate */}
      <path d="M70 80 Q100 75 130 80" stroke="white" strokeWidth="2" strokeOpacity="0.15" strokeLinecap="round" />

      {/* Wrapper fold at top */}
      <path d="M55 200 Q80 195 160 197 Q240 195 265 200 L265 215 Q240 210 160 212 Q80 210 55 215 Z" fill="#B07030" fillOpacity="0.6" />

      {/* Floating chocolate pieces */}
      <rect x="10" y="120" width="25" height="20" rx="4" fill="#5C3320" transform="rotate(-20 22 130)" fillOpacity="0.8" />
      <rect x="280" y="160" width="22" height="18" rx="4" fill="#5C3320" transform="rotate(15 291 169)" fillOpacity="0.8" />
      <rect x="20" y="240" width="18" height="14" rx="3" fill="#C8833A" transform="rotate(-10 29 247)" fillOpacity="0.6" />
    </svg>
  );
}
