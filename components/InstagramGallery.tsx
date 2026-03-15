"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const INSTAGRAM_URL =
  "https://www.instagram.com/the_nut_bar_2026?igsh=MXRoYmEyMWhtZGRwOA==";

const posts = [
  { src: "/nut2.jpg", caption: "Chocolate drizzle. Real nuts. No shortcuts. 🍫🥜", likes: "2.1K", tag: "#NUTBAR" },
  { src: "/bar-product.png", caption: "Almond, Cashew & Real Ingredients. Every. Single. Bar. ✨", likes: "3.4K", tag: "#NotYourRegularBar" },
  { src: "/nut3.jpg", caption: "Fresh from the kitchen. Stacked and ready 🙌", likes: "1.5K", tag: "#NutBar" },
  { src: "/ingredients-spread.png", caption: "Every ingredient earns its place. Zero fillers. 🌿", likes: "1.8K", tag: "#CleanLabel" },
  { src: "/nut1.jpg", caption: "Seeds, almonds, peanuts — the holy trinity 💪", likes: "890", tag: "#RealNuts" },
  { src: "/nut2.jpg", caption: "That chocolate drizzle hits different every time 🔥", likes: "4.2K", tag: "#ProteinBar" },
];

export default function InstagramGallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-20 sm:py-32 bg-choco-mid overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4"
        >
          <div>
            <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-2 font-600">
              Follow Along
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-900 text-nutty-cream">
              @the_nut_bar_2026
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 border border-caramel/40 text-caramel font-body font-600 text-xs tracking-widest uppercase hover:bg-caramel hover:text-choco-dark transition-all duration-300 self-start sm:self-auto"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow on Instagram
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden bg-choco-rich cursor-pointer"
            >
              <Image
                src={post.src}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-choco-dark/20 group-hover:bg-choco-dark/75 transition-all duration-400" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-regular text-nutty-cream text-xs text-center leading-relaxed mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-body font-700 text-caramel text-xs">♥ {post.likes}</span>
                  <span className="font-body text-xs text-caramel/60">{post.tag}</span>
                </div>
              </div>
              <div className="absolute top-2 right-2 opacity-40 group-hover:opacity-80 transition-opacity">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-6 sm:mt-8"
        >
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.3em] uppercase text-nutty-sand/40 hover:text-caramel transition-colors duration-300">
            View all posts on Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
