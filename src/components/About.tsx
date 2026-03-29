"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const services = [
  "Construction Law",
  "Commercial Real Estate",
  "Business Formation & Governance",
  "Cannabis Industry Law",
  "Commercial Litigation",
  "Contract Drafting & Negotiation",
  "General Counsel Services",
  "Capital & Investment Transactions",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)] block mb-4">
            Background
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
            About
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left -- Bio + Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="space-y-6 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                I grew up in Minnesota, got my undergrad at ASU in Business and Mass Communication, and went straight into law school at the Sandra Day O&rsquo;Connor College of Law. Graduated in 2010 and hit the ground running.
              </p>
              <p>
                My first years were spent in the trenches of commercial litigation. Courtrooms, depositions, complex business disputes across multiple states. That foundation taught me how deals break down and how to keep them from breaking in the first place. I litigated cases in eight states before I ever hung my own shingle.
              </p>
              <p>
                I spent time at Broening Oberg Woods &amp; Wilson doing heavy commercial litigation work, then moved to Bianchi &amp; Brandt as Senior Counsel where I focused on cannabis industry law and complex commercial disputes. That role opened my eyes to an entire sector that needed real legal infrastructure, not just someone who could read a contract.
              </p>
              <p>
                In 2022, I founded the Scavio Law Firm. Construction, real estate, corporate governance, litigation. The full stack. Around the same time, I stepped into a General Counsel role for a major Arizona cannabis operator, managing everything from regulatory compliance to high-stakes transactions.
              </p>
              <p className="text-[var(--color-cream)] font-medium">
                Today I serve as General Counsel for Common Ground and L&Iuml;EF Development. Over $100 million in transactions closed. Southwest Super Lawyers Rising Star from 2016 to 2024. Fifteen years in. Still building.
              </p>
            </div>

            {/* Service Pills */}
            <div className="mt-12">
              <div className="flex flex-wrap gap-2.5">
                {services.map((service, i) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                    className="px-4 py-2 text-sm font-medium rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] bg-[var(--color-bg-card)] hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-gold)] transition-all duration-300 cursor-default"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right -- Large Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px] rounded-xl overflow-hidden border border-[var(--color-border)]">
              <Image
                src="/nick-scavio-headshot.jpg"
                alt="Nick Scavio"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
