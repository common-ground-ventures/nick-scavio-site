"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:nick@scaviolaw.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative bg-[var(--color-bg-dark)]"
      ref={ref}
    >
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-dim)]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-10 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left -- Headline + Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)] block mb-4">
              Contact
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
              How can
              <br />
              I help?
            </h2>

            <div className="mt-10 space-y-4">
              <a
                href="mailto:nick@scaviolaw.com"
                className="flex items-center gap-2 text-lg text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                nick@scaviolaw.com
              </a>
              <a
                href="https://www.linkedin.com/in/nicholas-scavio-66665540/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://commonground.ventures"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-[var(--color-text-on-dark-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Common Ground
              </a>
            </div>
          </motion.div>

          {/* Right -- Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[var(--color-bg-dark-elevated)] border border-[var(--color-border)] rounded-lg text-[var(--color-cream)] placeholder-[var(--color-text-on-dark-muted)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[var(--color-bg-dark-elevated)] border border-[var(--color-border)] rounded-lg text-[var(--color-cream)] placeholder-[var(--color-text-on-dark-muted)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[var(--color-bg-dark-elevated)] border border-[var(--color-border)] rounded-lg text-[var(--color-cream)] placeholder-[var(--color-text-on-dark-muted)]/40 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[var(--color-cream)] text-[var(--color-bg)] text-sm font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer credits */}
        <div className="mt-24 pt-8 border-t border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-on-dark-muted)]">
            <span>&copy; 2026 Nicholas J. Scavio, Esq. All rights reserved.</span>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a
                href="https://www.liploicreative.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                Branded by <span className="font-semibold">Lip Loi Creative</span>
              </a>
              <span className="opacity-30">|</span>
              <a
                href="https://commonground.ventures"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-gold)] transition-colors duration-300"
              >
                Enhanced by <span className="font-semibold">Common Ground</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
