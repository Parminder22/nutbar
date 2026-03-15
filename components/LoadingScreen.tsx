"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-choco-dark"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative w-24 h-24 rounded-full overflow-hidden mb-6"
          >
            <Image src="/logo.png" alt="THE NUTBAR" fill className="object-cover" />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-5xl sm:text-6xl font-black text-nutty-cream leading-tight">
  THE <span className="text-gradient">NUTBAR</span>
</h1>

<p className="text-caramel text-lg italic mt-2 tracking-wide">
  Not your regular bar
</p>
          </motion.div>

          {/* Loading bar */}
          <div className="w-48 h-0.5 bg-choco-rich overflow-hidden">
            <motion.div
              className="h-full bg-caramel"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
