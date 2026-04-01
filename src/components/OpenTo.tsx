"use client";

import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Outside General Counsel",
    description: "Serving as trusted legal partner for companies that need senior-level counsel without the overhead. Construction, real estate, corporate governance.",
  },
  {
    title: "Venture & Investment Legal",
    description: "Structuring deals, protecting founders, and navigating regulatory complexity from formation to exit.",
  },
  {
    title: "Strategic Advisory",
    description: "Board-level legal strategy for operators scaling across multiple verticals and jurisdictions.",
  },
];

function OpenToCard({ item, index, isInView }: { item: typeof items[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"],
  });

  const activation = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0, 1, 0, 0]);

  useMotionValueEvent(activation, "change", (v) => setProgress(v));

  const mobileActive = isMobile && progress > 0.3;
  const showHoverState = isMobile ? mobileActive : false;

  return (
    <motion.div
      ref={cardRef}
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index }}
      className={`group p-8 lg:p-10 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] border-t-2 border-t-[var(--color-accent)] transition-all duration-500 cursor-pointer ${
        !isMobile ? "hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)]" : ""
      }`}
      style={isMobile ? {
        backgroundColor: showHoverState ? 'var(--color-accent)' : undefined,
        borderColor: showHoverState ? 'var(--color-accent)' : undefined,
        transition: 'all 0.5s',
      } : undefined}
    >
      <h3
        className={`text-xl font-semibold text-[var(--color-cream)] mb-4 transition-colors duration-300 tracking-tight ${
          !isMobile ? "group-hover:text-[var(--color-gold)]" : ""
        }`}
        style={isMobile ? { color: showHoverState ? 'var(--color-gold)' : undefined, transition: 'color 0.3s' } : undefined}
      >
        {item.title}
      </h3>
      <p
        className={`text-base text-[var(--color-text-secondary)] leading-relaxed transition-colors duration-300 ${
          !isMobile ? "group-hover:text-[var(--color-cream)]/80" : ""
        }`}
        style={isMobile ? { color: showHoverState ? 'rgba(var(--color-cream-rgb, 245, 241, 235), 0.8)' : undefined, transition: 'color 0.3s' } : undefined}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

export default function OpenTo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)] block mb-4">
            Engagements
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
            Open To
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <OpenToCard key={item.title} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
