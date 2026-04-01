"use client";

import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ventures, type Venture } from "@/data/ventures";

export default function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const allVentures = ventures.filter((v) => !v.featured);

  return (
    <section id="full-portfolio" className="relative py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-[var(--color-gold)] block mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-cream)]">
            Advisory &amp; Counsel
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allVentures.map((venture, i) => (
            <motion.div
              key={venture.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <VentureCard venture={venture} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VentureCard({ venture }: { venture: Venture }) {
  const isLink = venture.url !== "#";
  const [hovered, setHovered] = useState(false);
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

  const activation = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0, 0, 1, 0, 0]);

  useMotionValueEvent(activation, "change", (v) => setProgress(v));

  const mobileActive = isMobile && progress > 0.3;
  const showHoverState = isMobile ? mobileActive : hovered;
  const showBrownscale = isMobile ? !mobileActive : !hovered;

  const hasHoverColor = !!venture.hoverColor;
  const isDftd = venture.slug === "drive-for-the-dream";

  // Logo padding based on logoScale
  const getPadding = () => {
    if (!venture.logoScale) return "p-6";
    if (venture.logoScale < 0.7) return "p-16";
    if (venture.logoScale < 0.9) return "p-12";
    if (venture.logoScale < 1) return "p-8";
    return "p-6";
  };

  // Default image bg
  const defaultBg = venture.bgColor || "transparent";
  // On hover, image area bg changes to hoverColor (if set), otherwise stays same
  const imageBg = showHoverState && hasHoverColor ? venture.hoverColor! : defaultBg;

  const mobileImageFilter = isMobile
    ? `grayscale(${(1 - progress) * 100}%) sepia(${(1 - progress) * 35}%) hue-rotate(${(1 - progress) * 5}deg)`
    : undefined;

  const content = (
    <>
      {/* Image area — hoverColor only affects THIS area */}
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-t-xl transition-colors duration-500"
        style={{ backgroundColor: imageBg }}
      >
        <Image
          src={venture.image}
          alt={venture.name}
          fill
          className={`group-hover:scale-105 ${
            venture.overlayLogo
              ? "object-cover"
              : `object-contain ${getPadding()}`
          }${isDftd && !isMobile ? " opacity-0 group-hover:opacity-100" : ""}`}
          style={{
            filter: isMobile
              ? mobileImageFilter
              : showBrownscale
                ? "grayscale(100%) sepia(35%) hue-rotate(5deg)"
                : "none",
            transition: "filter 0.7s ease, transform 0.7s ease, opacity 0.7s ease",
            ...(venture.objectPosition ? { objectPosition: venture.objectPosition } : {}),
            ...(isDftd && isMobile ? { opacity: showHoverState ? 1 : 0 } : {}),
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {venture.overlayLogo && (
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              isDftd && !isMobile ? "opacity-0 group-hover:opacity-100 transition-opacity duration-700" : ""
            }`}
            style={isDftd && isMobile ? {
              opacity: showHoverState ? 1 : 0,
              transition: "opacity 0.7s ease",
            } : undefined}
          >
            <Image
              src={venture.overlayLogo}
              alt={`${venture.name} logo`}
              width={180}
              height={80}
              className="object-contain drop-shadow-lg"
              style={{
                filter: venture.overlayInvert
                  ? "brightness(0) invert(1)"
                  : isMobile
                    ? mobileImageFilter
                    : showBrownscale
                      ? "grayscale(100%) sepia(35%) hue-rotate(5deg)"
                      : "none",
                transition: "filter 0.7s ease",
              }}
            />
          </div>
        )}
        {/* DFTD: show overlay logo at default when image is hidden */}
        {isDftd && venture.overlayLogo && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              !isMobile ? "group-hover:opacity-0" : ""
            }`}
            style={isMobile ? {
              opacity: showHoverState ? 0 : 1,
              transition: "opacity 0.7s ease",
            } : undefined}
          >
            <Image
              src={venture.overlayLogo}
              alt={`${venture.name} logo`}
              width={180}
              height={80}
              className="object-contain drop-shadow-lg grayscale"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        )}
      </div>
      {/* Info — ALWAYS cordovan fill + gold text on hover */}
      <div
        className={`p-5 transition-colors duration-500 border-t border-[var(--color-border-subtle)] ${
          !isMobile ? "group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)]" : ""
        }`}
        style={isMobile ? {
          backgroundColor: showHoverState ? 'var(--color-accent)' : undefined,
          borderColor: showHoverState ? 'var(--color-accent)' : undefined,
          transition: 'all 0.5s',
        } : undefined}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className={`text-base font-semibold text-[var(--color-cream)] transition-colors duration-300 leading-tight min-h-[40px] flex items-start ${
              !isMobile ? "group-hover:text-[var(--color-gold)]" : ""
            }`}
            style={isMobile ? { color: showHoverState ? 'var(--color-gold)' : undefined, transition: 'color 0.3s' } : undefined}
          >
            {venture.name}
          </h3>
          <span
            className={`shrink-0 text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border-subtle)] transition-colors duration-300 ${
              !isMobile ? "group-hover:text-[var(--color-gold)] group-hover:bg-transparent group-hover:border-[var(--color-gold)]/30" : ""
            }`}
            style={isMobile && showHoverState ? {
              color: 'var(--color-gold)',
              backgroundColor: 'transparent',
              borderColor: 'rgba(var(--color-gold-rgb, 212, 175, 55), 0.3)',
              transition: 'all 0.3s',
            } : isMobile ? { transition: 'all 0.3s' } : undefined}
          >
            {venture.status}
          </span>
        </div>
        <div className="h-[68px] overflow-hidden mb-3">
          <p
            className={`text-sm text-[var(--color-text-secondary)] leading-relaxed transition-colors duration-300 ${
              !isMobile ? "group-hover:text-[var(--color-cream)]/80" : ""
            }`}
            style={isMobile ? { color: showHoverState ? 'rgba(var(--color-cream-rgb, 245, 241, 235), 0.8)' : undefined, transition: 'color 0.3s' } : undefined}
          >
            {venture.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-accent)] transition-colors duration-300 ${
              !isMobile ? "group-hover:text-[var(--color-gold)]" : ""
            }`}
            style={isMobile ? { color: showHoverState ? 'var(--color-gold)' : undefined, transition: 'color 0.3s' } : undefined}
          >
            {venture.role}
          </span>
        </div>
      </div>
    </>
  );

  const cardClass = `group block rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] transition-all duration-500 overflow-hidden hover:scale-[1.02]`;

  if (isLink) {
    return (
      <div ref={cardRef}>
        <a
          href={venture.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={cardClass}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </div>
  );
}
