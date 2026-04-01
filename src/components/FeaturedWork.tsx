"use client";

import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ventures, type Venture } from "@/data/ventures";

const coreBusinesses = ventures.filter((v) => v.featured);

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)] block mb-4">
            The Foundation
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
            Core Businesses
          </h2>
          <p className="mt-5 text-lg text-[var(--color-text-secondary)] font-light max-w-2xl leading-relaxed">
            Everything I do flows through these two platforms. One anchored in law, the other in ventures and capital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreBusinesses.map((venture, i) => (
            <motion.div
              key={venture.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <FeaturedCard venture={venture} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ venture }: { venture: Venture }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);

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

  const activation = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0, 1, 0, 0]
  );

  useMotionValueEvent(activation, "change", (v) => setProgress(v));

  const showHoverState = isMobile ? progress > 0.5 : hovered;

  const mobileImageFilter = isMobile
    ? `grayscale(${(1 - progress) * 100}%) sepia(${(1 - progress) * 35}%) hue-rotate(${(1 - progress) * 5}deg)`
    : undefined;

  return (
    <div ref={cardRef}>
      <a
        href={venture.url}
        target={venture.url !== "#" ? "_blank" : undefined}
        rel={venture.url !== "#" ? "noopener noreferrer" : undefined}
        className={`group block rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all duration-500 ${
          !isMobile ? "hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)]" : ""
        }`}
        style={isMobile ? {
          backgroundColor: showHoverState ? 'var(--color-accent)' : undefined,
          borderColor: showHoverState ? 'var(--color-accent)' : undefined,
          transition: 'all 0.5s',
        } : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image area */}
        <div
          className="relative aspect-[16/10] overflow-hidden transition-colors duration-500"
          style={venture.bgColor ? { backgroundColor: venture.bgColor } : undefined}
        >
          <Image
            src={venture.image}
            alt={venture.name}
            fill
            className={`transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              venture.bgColor ? "object-contain p-10 lg:p-14" : "object-cover"
            }`}
            style={{
              filter: isMobile ? mobileImageFilter : undefined,
              transition: "filter 0.7s ease, transform 0.7s ease",
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content below image */}
        <div
          className={`p-6 lg:p-8 border-t border-[var(--color-border-subtle)] transition-colors duration-500 ${
            !isMobile ? "group-hover:border-[var(--color-accent)]" : ""
          }`}
          style={isMobile ? {
            borderColor: showHoverState ? 'var(--color-accent)' : undefined,
            transition: 'all 0.5s',
          } : undefined}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                !isMobile ? "text-[var(--color-cream)] group-hover:text-[var(--color-gold)]" : "text-[var(--color-cream)]"
              }`}
              style={isMobile ? {
                color: showHoverState ? 'var(--color-gold)' : undefined,
                transition: 'color 0.3s',
              } : undefined}
            >
              {venture.name}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-gold)] bg-[var(--color-bg-elevated)] transition-colors duration-300 ${
                  !isMobile ? "group-hover:bg-transparent group-hover:border-[var(--color-gold)]/30" : ""
                }`}
                style={isMobile && showHoverState ? {
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(196, 162, 101, 0.3)',
                  transition: 'all 0.3s',
                } : isMobile ? { transition: 'all 0.3s' } : undefined}
              >
                {venture.status}
              </span>
            </div>
          </div>
          <p
            className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
              !isMobile ? "text-[var(--color-text-secondary)] group-hover:text-[var(--color-cream)]/80" : "text-[var(--color-text-secondary)]"
            }`}
            style={isMobile ? {
              color: showHoverState ? 'rgba(250, 247, 244, 0.8)' : undefined,
              transition: 'color 0.3s',
            } : undefined}
          >
            {venture.description}
          </p>
          <span
            className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${
              !isMobile ? "text-[var(--color-accent)] group-hover:text-[var(--color-gold)]" : "text-[var(--color-accent)]"
            }`}
            style={isMobile ? {
              color: showHoverState ? 'var(--color-gold)' : undefined,
              transition: 'color 0.3s',
            } : undefined}
          >
            {venture.role}
          </span>
        </div>
      </a>
    </div>
  );
}
