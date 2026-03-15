"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-choco-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-[800px] h-48 sm:h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(200,131,58,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* Left info */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <p className="font-body text-caramel text-xs tracking-[0.4em] uppercase mb-3 sm:mb-4 font-600">Get In Touch</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-nutty-cream mb-4 sm:mb-6 leading-tight">
              Let&apos;s Talk <span className="text-gradient">Nutbar</span>
            </h2>
            <p className="font-regular text-nutty-sand/70 leading-relaxed mb-8 sm:mb-10 max-w-sm text-sm sm:text-base">
              Ready to fuel up? Have questions about custom orders, bulk pricing, or just want to say hello — we&apos;re here.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: "📞", label: "Phone", value: "+91 9873904155", href: "tel:9873904155" },
                { icon: "✉️", label: "Email", value: "amansakhuja2011@gmail.com", href: "mailto:amansakhuja2011@gmail.com" },
                { icon: "📸", label: "Instagram", value: "@the_nut_bar_2026", href: "https://www.instagram.com/the_nut_bar_2026?igsh=MXRoYmEyMWhtZGRwOA==" },
              ].map((item) => (
                <a key={item.label} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 sm:gap-5 p-4 sm:p-5 border border-caramel/15 bg-choco-rich/30 hover:border-caramel/50 transition-all duration-300 active:scale-[0.98]"
                >
                  <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-[10px] sm:text-xs tracking-widest uppercase text-nutty-sand/40 mb-0.5">{item.label}</p>
                    <p className="font-body font-600 text-nutty-cream group-hover:text-caramel-gold transition-colors text-xs sm:text-sm truncate">{item.value}</p>
                  </div>
                  <span className="text-caramel/40 group-hover:text-caramel transition-colors flex-shrink-0 text-sm">→</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXXXXXXX" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-nutty-sand/50 mb-1.5 sm:mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.name !== "phone"}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-choco-rich/60 border border-caramel/20 text-nutty-cream font-regular text-sm placeholder:text-nutty-sand/30 focus:outline-none focus:border-caramel/60 transition-colors duration-300"
                    style={{ fontSize: "16px" }} // Prevents iOS zoom on focus
                  />
                </div>
              ))}

              <div>
                <label className="block font-body text-[10px] sm:text-xs tracking-[0.2em] uppercase text-nutty-sand/50 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your order, question, or just say hey..."
                  required
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-choco-rich/60 border border-caramel/20 text-nutty-cream font-regular text-sm placeholder:text-nutty-sand/30 focus:outline-none focus:border-caramel/60 transition-colors duration-300 resize-none"
                  style={{ fontSize: "16px" }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 sm:py-5 bg-caramel text-choco-dark font-body font-900 text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:bg-caramel-gold disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden touch-manipulation"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.span className="block w-4 h-4 border-2 border-choco-dark/30 border-t-choco-dark rounded-full"
                      animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                    Sending...
                  </span>
                ) : "Send Message →"}
              </motion.button>

              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 border border-green-500/30 bg-green-500/10 text-green-400 font-body text-xs sm:text-sm text-center tracking-wide">
                  ✓ Message sent! We&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="p-3 sm:p-4 border border-red-500/30 bg-red-500/10 text-red-400 font-body text-xs sm:text-sm text-center tracking-wide">
                  ✗ Something went wrong. Please email us directly at amansakhuja2011@gmail.com
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
