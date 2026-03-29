"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div
          className={`flex items-center gap-1 px-2 py-1.5 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-[var(--color-bg)]/95 backdrop-blur-xl border-[var(--color-border)] shadow-lg shadow-black/30"
              : "bg-[var(--color-bg)]/70 backdrop-blur-md border-[var(--color-border-subtle)]"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            className="px-4 py-2 text-sm font-semibold tracking-[0.08em] text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors whitespace-nowrap"
          >
            Nick Scavio
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors rounded-full hover:bg-[var(--color-bg-elevated)]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="ml-1 px-5 py-2 text-sm bg-[var(--color-cream)] text-[var(--color-bg)] rounded-full font-medium tracking-wide hover:bg-[var(--color-accent)] hover:text-[var(--color-gold)] transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-[var(--color-bg-elevated)] transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-4 h-px bg-[var(--color-cream)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-4 h-px bg-[var(--color-cream)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-3xl font-light text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              onClick={() => { setMobileOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg px-8 py-3 bg-[var(--color-cream)] text-[var(--color-bg)] rounded-full font-medium tracking-wide"
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
