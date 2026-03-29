"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex flex-col justify-end">
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/nick-scavio-headshot.jpg"
          alt="Nick Scavio"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/85 to-[var(--color-bg)]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/95 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-40 lg:pb-28"
        style={{ y: textY, opacity }}
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)]"
        >
          Attorney &middot; Investor &middot; Counsel
        </motion.p>

        {/* Thin gold rule */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 w-16 h-px bg-[var(--color-gold)]/50 origin-left"
        />

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="mt-7 text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[1.08] tracking-tight max-w-2xl text-[var(--color-cream)]"
        >
          I protect the people<br />
          who build things.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-8 text-base sm:text-lg text-[var(--color-text-secondary)] font-light max-w-xl leading-relaxed"
        >
          Fifteen years of legal strategy across real estate, venture, and corporate law. Two core platforms, one conviction: protect the builders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-[var(--color-cream)] text-[var(--color-bg)] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-gold)] transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-[var(--color-gold)]/40 text-[var(--color-gold)] text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-gold)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
