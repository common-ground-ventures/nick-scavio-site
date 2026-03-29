import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import PracticeAreas from "@/components/PracticeAreas";
import OpenTo from "@/components/OpenTo";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />

      <FeaturedWork />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-dim)]/30 to-transparent" />
      </div>

      <PortfolioGrid />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-dim)]/30 to-transparent" />
      </div>

      <PracticeAreas />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-dim)]/30 to-transparent" />
      </div>

      <Credentials />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-dim)]/30 to-transparent" />
      </div>

      <About />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-accent-dim)]/30 to-transparent" />
      </div>

      <OpenTo />

      <ContactFooter />
    </main>
  );
}
