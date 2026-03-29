export interface Venture {
  name: string;
  slug: string;
  description: string;
  image: string;
  url: string;
  category?: string;
  role: string;
  status: "Active" | "Legacy";
  featured: boolean;
  bgColor?: string;
  hoverColor?: string;
  hoverTextDark?: boolean;
  objectPosition?: string;
  overlayLogo?: string;
  overlayInvert?: boolean;
  logoScale?: number;
}

export const ventures: Venture[] = [
  // FEATURED (Core Businesses)
  {
    name: "Scavio Law Firm",
    slug: "scavio-law",
    description: "Pragmatic legal counsel for builders, operators, and founders navigating complex deals and disputes.",
    image: "/logos/scavio-law-placeholder.png",
    url: "#",
    role: "Founder",
    status: "Active",
    featured: true,
    bgColor: "#6A323F",
  },
  {
    name: "Common Ground",
    slug: "common-ground",
    description: "Venture advisory and strategic partnerships for founders and operators.",
    image: "/logos/common-ground.png",
    url: "https://commonground.ventures",
    role: "General Counsel",
    status: "Active",
    featured: true,
    bgColor: "#ffffff",
  },
  // NON-FEATURED (Full Portfolio)
  {
    name: "L\u00cfEF Development + Construction",
    slug: "lief-development",
    description: "Design-forward development with high standards and strong partners.",
    image: "/logos/lief-simple-concrete.png",
    url: "https://anewlief.com/",
    category: "real-estate",
    role: "Investor & General Counsel",
    status: "Active",
    featured: false,
    bgColor: "#1A1012",
    hoverColor: "#000000",
    logoScale: 0.65,
  },
  {
    name: "Drive For The Dream",
    slug: "drive-for-the-dream",
    description: "A story-led media project built for real distribution.",
    image: "/logos/dftd-hero.jpg",
    url: "https://driveforthedream.com",
    category: "media",
    role: "General Counsel",
    status: "Active",
    featured: false,
    overlayLogo: "/logos/d4td-white.png",
  },
  {
    name: "APEXX AI",
    slug: "apexx-ai",
    description: "Practical AI systems that drive real growth. Not hype.",
    image: "/logos/apexx-purple.png",
    url: "https://apexx.agency",
    category: "tech",
    role: "General Counsel",
    status: "Active",
    featured: false,
    hoverColor: "#10111A",
    logoScale: 0.85,
  },
  {
    name: "Bianchi & Brandt",
    slug: "bianchi-brandt",
    description: "Cannabis-focused law firm handling complex commercial disputes and transactions.",
    image: "/logos/bianchi-brandt.png",
    url: "https://bianchibrandt.com",
    category: "legal",
    role: "General Counsel",
    status: "Legacy",
    featured: false,
    hoverColor: "#ffffff",
    logoScale: 0.85,
  },
  {
    name: "Broening Oberg Woods & Wilson, P.C.",
    slug: "boww",
    description: "Established commercial litigation and business law practice.",
    image: "/logos/boww.png",
    url: "https://www.bowwlaw.com",
    category: "legal",
    role: "Associate Attorney",
    status: "Legacy",
    featured: false,
    hoverColor: "#ffffff",
    logoScale: 0.85,
  },
  {
    name: "Plunge Studio",
    slug: "plunge-studio",
    description: "Wellness-forward contrast studio concept designed for modern urban lifestyles.",
    image: "/logos/plunge-studio.png",
    url: "#",
    category: "ventures",
    role: "General Counsel",
    status: "Legacy",
    featured: false,
    hoverColor: "#ffffff",
    logoScale: 0.98,
  },
];
