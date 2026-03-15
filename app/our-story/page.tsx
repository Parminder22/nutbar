"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function ScrollReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function ChapterDivider({ number, title }: { number: string; title: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      className="flex items-center gap-4 sm:gap-6 my-14 sm:my-20">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-caramel/40" />
      <div className="text-center flex-shrink-0">
        <p className="font-body text-[10px] sm:text-xs tracking-[0.5em] uppercase text-caramel/60 font-600 mb-1">{number}</p>
        <p className="font-display text-xl sm:text-2xl font-800 text-nutty-cream">{title}</p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-caramel/40" />
    </motion.div>
  );
}

export default function OurStoryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="bg-choco-dark min-h-screen">

        {/* ─── HERO ─── */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{ background: "radial-gradient(ellipse at 50% 60%, #2C1810 0%, #1A0E08 40%, #0D0806 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, transparent, #C8833A, #E8B86D, #C8833A, transparent)" }} />

          {/* Background product image — subtle */}
          <div className="absolute inset-0 opacity-10">
            <Image src="/nut1.jpg" alt="" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-choco-dark/80" />
          </div>

          {/* Floating particles */}
          {[{ l: "8%", t: "25%", e: "🌰", d: 0 }, { l: "85%", t: "20%", e: "🥜", d: 1.5 }, { l: "5%", t: "65%", e: "🥜", d: 2 }, { l: "90%", t: "60%", e: "🌰", d: 0.8 }].map((p, i) => (
            <motion.div key={i} className="absolute pointer-events-none select-none hidden sm:block text-3xl"
              style={{ left: p.l, top: p.t }}
              animate={{ y: [0, -14, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 7 + p.d, repeat: Infinity, delay: p.d }}>
              {p.e}
            </motion.div>
          ))}

          <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 sm:pt-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 border border-caramel/40 bg-caramel/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-caramel animate-pulse" />
              <span className="font-body text-caramel-light text-[10px] sm:text-xs tracking-[0.3em] uppercase font-600">The NUTBAR Story</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }}
              className="font-display text-6xl sm:text-7xl lg:text-9xl font-900 text-nutty-cream leading-none mb-5 sm:mb-6">
              Our <span className="text-gradient">Story</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-px w-10 sm:w-16 bg-caramel/40" />
              <p className="font-body text-[10px] sm:text-xs tracking-[0.4em] uppercase text-caramel font-600">Chapter 1</p>
              <div className="h-px w-10 sm:w-16 bg-caramel/40" />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
              className="font-display text-xl sm:text-2xl lg:text-3xl font-500 text-nutty-cream/80 italic">
              Simple Ingredients. Fresh Energy.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-nutty-sand/30">Scroll to read</p>
            <motion.div className="w-px h-8 sm:h-12 bg-gradient-to-b from-caramel to-transparent"
              animate={{ scaleY: [0, 1, 0], y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </motion.div>
        </section>

        {/* ─── CHAPTER 1 ─── */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "repeating-linear-gradient(60deg, #C8833A 0px, #C8833A 1px, transparent 1px, transparent 50px)" }} />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ChapterDivider number="Chapter 01" title="The Basic Idea" />

            {/* Intro */}
            <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
              <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">Where It All Began</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-900 text-nutty-cream mb-4 sm:mb-6 leading-tight">
                We make fresh nut-bars with <span className="text-gradient">10 ingredients</span> or fewer
              </h2>
              <p className="font-regular text-nutty-sand/70 text-base sm:text-lg leading-relaxed">
                Using real nuts and seeds. They&apos;re healthy, natural, and fully customizable to match your taste and nutrition needs.
              </p>
            </ScrollReveal>

            {/* Real product photo — full bleed */}
            <ScrollReveal className="mb-16 sm:mb-24">
              <div className="relative w-full h-52 sm:h-72 lg:h-96 overflow-hidden">
                <Image src="/nut3.jpg" alt="NUTBAR bars stacked" fill className="object-cover object-center" sizes="100vw" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #0D0806 0%, transparent 20%, transparent 80%, #0D0806 100%), linear-gradient(to bottom, #0D0806 0%, transparent 20%, transparent 80%, #0D0806 100%)" }} />
              </div>
            </ScrollReveal>

            {/* Two columns */}
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 mb-16 sm:mb-24">
              <ScrollReveal delay={0.1}>
                <div className="p-6 sm:p-8 border border-caramel/15 bg-choco-rich/30 h-full">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">💡</span>
                    <h3 className="font-display text-xl sm:text-2xl font-800 text-nutty-cream">Our Idea</h3>
                  </div>
                  <div className="w-10 sm:w-12 h-0.5 bg-caramel mb-4 sm:mb-6" />
                  <p className="font-regular text-nutty-sand/70 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                    Our idea is to create fresh, natural nut bars made from real ingredients like nuts, seeds, and natural sweeteners.
                  </p>
                  <p className="font-regular text-nutty-sand/70 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                    We want to offer customers a healthier snack that is simple, nutritious, and delicious.
                  </p>
                  <p className="font-regular text-nutty-sand/70 leading-relaxed text-sm sm:text-base">
                    Each bar can be customized to match different tastes and preferences, giving people a wholesome and convenient snack option.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 sm:p-8 border border-caramel/15 bg-choco-rich/30 h-full">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl">🎯</span>
                    <h3 className="font-display text-xl sm:text-2xl font-800 text-nutty-cream">Customized For You</h3>
                  </div>
                  <div className="w-10 sm:w-12 h-0.5 bg-caramel mb-4 sm:mb-6" />
                  <p className="font-regular text-nutty-sand/70 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                    Our nut bars are customizable to suit different dietary needs.
                  </p>
                  <p className="font-regular text-nutty-sand/70 leading-relaxed text-sm sm:text-base mb-3 sm:mb-4">
                    If customers have allergies or specific ingredient restrictions, we can adjust the ingredients to make a bar that is safe and enjoyable for them.
                  </p>
                  <p className="font-regular text-nutty-sand/70 leading-relaxed text-sm sm:text-base">
                    This ensures everyone can enjoy a fresh, healthy, and personalized snack made to fit their needs.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Values strip */}
            <ScrollReveal>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16 sm:mb-24">
                {[
                  { icon: "🌿", value: "Natural", label: "Only real ingredients" },
                  { icon: "⚡", value: "Fresh", label: "Made to order" },
                  { icon: "🎨", value: "Custom", label: "Your preferences" },
                  { icon: "💚", value: "Clean", label: "Zero junk added" },
                ].map((v) => (
                  <div key={v.value} className="text-center p-4 sm:p-6 border border-caramel/15 bg-choco-rich/20 hover:border-caramel/40 transition-all duration-300">
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{v.icon}</div>
                    <p className="font-display text-lg sm:text-xl font-800 text-gradient mb-0.5 sm:mb-1">{v.value}</p>
                    <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-nutty-sand/40 leading-tight">{v.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal>
              <div className="relative border-l-2 border-caramel/20 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10 sm:space-y-12 mb-16 sm:mb-24">
                {[
                  { step: "The Spark", desc: "It started with a simple question: why do all protein bars taste like cardboard or sugar bombs? There had to be a better way.", icon: "✨" },
                  { step: "The Kitchen", desc: "Hundreds of batches later, we landed on a formula — real nuts, real chocolate, real protein. 10 ingredients. No compromises.", icon: "🧪" },
                  { step: "The Vision", desc: "THE NUTBAR isn't just a product. It's a statement. Food can be both indulgent and clean. Premium and accessible. Delicious and functional.", icon: "🚀" },
                ].map((item, i) => (
                  <div key={item.step} className="relative">
                    <div className="absolute -left-[2.4rem] sm:-left-[2.85rem] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-caramel border-2 border-choco-dark flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-choco-dark" />
                    </div>
                    <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-caramel mb-1.5 sm:mb-2 font-600">Step {i + 1}</p>
                    <h4 className="font-display text-xl sm:text-2xl font-800 text-nutty-cream mb-2 sm:mb-3">{item.icon} {item.step}</h4>
                    <p className="font-regular text-nutty-sand/60 leading-relaxed text-sm sm:text-base max-w-xl">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Ingredients photo */}
            <ScrollReveal>
              <div className="relative w-full h-48 sm:h-64 overflow-hidden mb-6">
                <Image src="/ingredients-spread.png" alt="Real ingredients" fill className="object-cover object-center" sizes="100vw" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #0D0806 0%, transparent 15%, transparent 85%, #0D0806 100%), linear-gradient(to bottom, transparent 40%, #0D0806 100%)" }} />
                <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <p className="font-body font-900 text-[10px] sm:text-sm tracking-[0.3em] uppercase text-nutty-cream/80">
                    ✦ Sourced Ethically · Made Honestly ✦
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── CHAPTER 2 ─── */}
        <section className="relative py-16 sm:py-24 bg-choco-mid overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ChapterDivider number="Chapter 02" title="The Journey Begins" />

            <ScrollReveal className="max-w-3xl mx-auto text-center mb-12 sm:mb-20">
              <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">Coming Soon</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-900 text-nutty-cream mb-4 sm:mb-6 leading-tight">
                The next chapter is being written — <span className="text-gradient">one bar at a time</span>
              </h2>
              <p className="font-regular text-nutty-sand/50 text-base sm:text-lg leading-relaxed">
                This chapter will tell the story of how NUTBAR went from a kitchen experiment to a movement. Stay tuned.
              </p>
            </ScrollReveal>

            {/* Chapter 2 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-20">
              {[
                { title: "The First Believers", desc: "The early community who tasted the prototype and wouldn't stop talking about it. Their feedback shaped everything.", icon: "👥", label: "Community" },
                { title: "Scaling The Recipe", desc: "Taking an 8-ingredient kitchen recipe and turning it into a consistently premium product. Every batch, every time.", icon: "⚗️", label: "Production" },
                { title: "The Bigger Mission", desc: "Changing how India thinks about snacking. Proving that healthy and delicious aren't opposites.", icon: "🎯", label: "Mission" },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 0.15}>
                  <div className="p-6 sm:p-8 border border-caramel/10 bg-choco-dark/60 opacity-70 hover:opacity-100 transition-opacity duration-500 h-full">
                    <span className="text-2xl sm:text-3xl mb-3 sm:mb-4 block">{card.icon}</span>
                    <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-caramel/60 mb-1.5 sm:mb-2">{card.label}</p>
                    <h3 className="font-display text-lg sm:text-xl font-800 text-nutty-cream/80 mb-2 sm:mb-3">{card.title}</h3>
                    <p className="font-regular text-nutty-sand/40 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{card.desc}</p>
                    <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-caramel/30">— To be continued</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA */}
            <ScrollReveal>
              <div className="text-center py-12 sm:py-16 border border-caramel/20 bg-choco-dark/40 px-4">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🥜</div>
                <h3 className="font-display text-2xl sm:text-3xl font-900 text-nutty-cream mb-3 sm:mb-4">Be Part of the Story</h3>
                <p className="font-regular text-nutty-sand/60 max-w-md mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
                  Follow us on Instagram and be the first to know when Chapter 2 drops.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a href="https://www.instagram.com/the_nut_bar_2026?igsh=MXRoYmEyMWhtZGRwOA==" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-caramel text-choco-dark font-body font-900 text-xs sm:text-sm tracking-widest uppercase hover:bg-caramel-gold transition-colors duration-300">
                    Follow on Instagram
                  </a>
                  <Link href="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-caramel/40 text-caramel font-body font-600 text-xs sm:text-sm tracking-widest uppercase hover:border-caramel hover:text-caramel-gold transition-all duration-300">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Brand stamp */}
        <section className="py-14 sm:py-20 bg-choco-dark">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <ScrollReveal>
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6">
                <Image src="/logo.png" alt="THE NUTBAR" fill className="object-cover" />
              </div>
              <p className="font-display text-2xl sm:text-3xl font-900 text-nutty-cream mb-1 sm:mb-2">THE NUTBAR</p>
              <p className="font-display text-base sm:text-lg text-gradient italic">Not your regular bar.</p>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
