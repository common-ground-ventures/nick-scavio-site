"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areas = [
  {
    title: "Cannabis Industry Law",
    description: "Licensing, compliance, corporate governance, M&A, and regulatory strategy for cannabis operators, investors, and ancillary businesses.",
  },
  {
    title: "Construction Law",
    description: "Representation for builders, developers, subcontractors, tenants, and owners. Contract negotiation, lien rights, dispute resolution, and project counsel.",
  },
  {
    title: "Commercial Real Estate",
    description: "Acquisition, development, sale, and leasing. From small commercial deals to complex multi-property transactions.",
  },
  {
    title: "Business & Corporate Law",
    description: "Entity formation, corporate structuring, governance, and strategic counseling to help you build a solid legal foundation.",
  },
  {
    title: "Commercial Litigation",
    description: "Dispute resolution across multiple jurisdictions. Arizona, California, Colorado, New Mexico, Oklahoma, Oregon, Texas, and Washington.",
  },
  {
    title: "Contract Drafting & Negotiation",
    description: "Clear, enforceable contracts that protect your interests. Vendor agreements, service contracts, NDAs, and more.",
  },
];

export default function PracticeAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)] block mb-4">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
            Practice Areas
          </h2>
          <p className="mt-5 text-lg text-[var(--color-text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal services for businesses, built on decades of hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group p-8 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] border-t-2 border-t-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-500"
            >
              <h3 className="text-lg font-bold text-[var(--color-cream)] mb-4 min-h-[56px] flex items-start group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-cream)]/80 transition-colors duration-300">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
