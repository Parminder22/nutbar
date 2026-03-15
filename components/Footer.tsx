import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/the_nut_bar_2026?igsh=MXRoYmEyMWhtZGRwOA==";

export default function Footer() {
  return (
    <footer className="relative bg-choco-dark border-t border-caramel/10 overflow-hidden">
      {/* Gold top line */}
      <div className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #C8833A 30%, #E8B86D 50%, #C8833A 70%, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 sm:gap-4 group mb-4 sm:mb-5">
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <Image src="/logo.png" alt="THE NUTBAR" fill className="object-cover" />
              </div>
              <div>
                <p className="font-body font-900 text-nutty-cream text-sm sm:text-base tracking-[0.25em] uppercase leading-none">THE</p>
                <p className="font-body font-900 text-caramel text-sm sm:text-base tracking-[0.25em] uppercase leading-none">NUTBAR</p>
              </div>
            </Link>
            <p className="font-regular text-nutty-sand/50 text-xs sm:text-sm leading-relaxed max-w-xs mb-4 sm:mb-6">
              Not your regular bar. Premium nut-based protein bars crafted for those who demand more from their fuel.
            </p>
            <p className="font-display text-base sm:text-lg font-700 text-gradient italic">
              &ldquo;Not your regular bar&rdquo;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-800 text-xs tracking-[0.3em] uppercase text-caramel mb-4 sm:mb-5">Explore</p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Our Story", href: "/our-story" },
                { label: "Ingredients", href: "/#ingredients" },
                { label: "Why Nutbar", href: "/#why" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}
                    className="font-body text-xs sm:text-sm text-nutty-sand/50 hover:text-caramel-gold transition-colors duration-300 tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-800 text-xs tracking-[0.3em] uppercase text-caramel mb-4 sm:mb-5">Contact</p>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="font-body text-[10px] tracking-widest uppercase text-nutty-sand/30 mb-0.5">Founder</p>
                <p className="font-body font-600 text-nutty-cream text-xs sm:text-sm">Aman Sakhuja</p>
              </div>
              <div>
                <p className="font-body text-[10px] tracking-widest uppercase text-nutty-sand/30 mb-0.5">Phone</p>
                <a href="tel:9873904155"
                  className="font-body font-600 text-nutty-cream text-xs sm:text-sm hover:text-caramel-gold transition-colors duration-300">
                  +91 9873904155
                </a>
              </div>
              <div>
                <p className="font-body text-[10px] tracking-widest uppercase text-nutty-sand/30 mb-0.5">Email</p>
                <a href="mailto:amansakhuja2011@gmail.com"
                  className="font-body font-600 text-nutty-cream text-xs hover:text-caramel-gold transition-colors duration-300 break-all">
                  amansakhuja2011@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div className="pt-1">
                <p className="font-body text-[10px] tracking-widest uppercase text-nutty-sand/30 mb-2">Follow</p>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 text-nutty-sand/60 hover:text-caramel-gold transition-colors duration-300 group">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 border border-caramel/20 flex items-center justify-center group-hover:border-caramel/60 group-hover:bg-caramel/10 transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </span>
                  <span className="font-body text-xs tracking-wide">@the_nut_bar_2026</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-caramel/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] sm:text-xs text-nutty-sand/30 tracking-widest uppercase text-center sm:text-left">
            © {new Date().getFullYear()} The Nutbar · All Rights Reserved
          </p>
          <p className="font-body text-[10px] sm:text-xs text-nutty-sand/20 tracking-wide">
            Crafted with 🥜 by Aman Sakhuja
          </p>
        </div>
      </div>
    </footer>
  );
}
