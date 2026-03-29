"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ventures } from "@/data/ventures";

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
            <motion.a
              key={venture.slug}
              href={venture.url}
              target={venture.url !== "#" ? "_blank" : undefined}
              rel={venture.url !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group block rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-500"
            >
              {/* Image area — logo centered on brand bg */}
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
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content below image — cordovan fill on hover */}
              <div className="p-6 lg:p-8 border-t border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent)] transition-colors duration-500">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl lg:text-2xl font-bold text-[var(--color-cream)] group-hover:text-[var(--color-gold)] transition-colors duration-300 tracking-tight">
                    {venture.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-gold)] bg-[var(--color-bg-elevated)] group-hover:bg-transparent group-hover:border-[var(--color-gold)]/30 transition-colors duration-300">
                      {venture.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 group-hover:text-[var(--color-cream)]/80 transition-colors duration-300">
                  {venture.description}
                </p>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-accent)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                  {venture.role}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
