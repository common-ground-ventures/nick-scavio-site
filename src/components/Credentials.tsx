"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "$100M+", label: "Transactions Closed" },
  { value: "8", label: "States Litigated" },
];

const education = [
  {
    degree: "Juris Doctor",
    school: "Sandra Day O'Connor College of Law",
    university: "Arizona State University",
    year: "2010",
  },
  {
    degree: "B.I.S.",
    school: "Business Administration & Mass Communication",
    university: "Arizona State University",
    year: "2006",
  },
];

const admissions = [
  "State Bar of Arizona",
  "U.S. District Court (D. Ariz.)",
];

const recognition = [
  "Southwest Super Lawyers Rising Star (2016 to 2024)",
];

export default function Credentials() {
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
            Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
            Education &amp; Admissions
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group text-center py-8 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] border-t-2 border-t-[var(--color-gold)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-500 cursor-default"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-cream)] tracking-tight group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="mt-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-text-muted)] group-hover:text-[var(--color-cream)]/70 transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education + Admissions + Recognition grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Education cards */}
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
              className="group p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] border-t-2 border-t-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-500 cursor-default"
            >
              <h3 className="text-base font-bold text-[var(--color-cream)] mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-cream)]/80 transition-colors duration-300">
                {edu.school}
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-1 group-hover:text-[var(--color-cream)]/60 transition-colors duration-300">
                {edu.university}
              </p>
              <p className="text-sm text-[var(--color-gold)] mt-2 font-medium group-hover:text-[var(--color-cream)] transition-colors duration-300">
                {edu.year}
              </p>
            </motion.div>
          ))}

          {/* Bar Admissions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] border-t-2 border-t-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-500 cursor-default"
          >
            <h3 className="text-base font-bold text-[var(--color-cream)] mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">
              Bar Admissions
            </h3>
            {admissions.map((item) => (
              <p key={item} className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-cream)]/80 transition-colors duration-300">
                {item}
              </p>
            ))}
          </motion.div>

          {/* Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group p-6 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] border-t-2 border-t-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-500 cursor-default"
          >
            <h3 className="text-base font-bold text-[var(--color-cream)] mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">
              Recognition
            </h3>
            {recognition.map((item) => (
              <p key={item} className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-cream)]/80 transition-colors duration-300">
                {item}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
