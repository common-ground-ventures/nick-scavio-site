import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nick-scavio-site.vercel.app"),
  title: "Nick Scavio | Attorney, Investor, General Counsel",
  description:
    "Fifteen years of legal strategy across real estate, venture, and corporate law. Protecting the people who build things.",
  keywords: [
    "Nick Scavio",
    "Nicholas Scavio",
    "Scavio Law",
    "attorney",
    "general counsel",
    "real estate law",
    "cannabis law",
    "construction law",
    "Phoenix Arizona",
    "Common Ground",
    "LIEF Development",
  ],
  authors: [{ name: "Nicholas J. Scavio" }],
  openGraph: {
    title: "Nick Scavio | Attorney, Investor, General Counsel",
    description:
      "Fifteen years of legal strategy across real estate, venture, and corporate law.",
    url: "https://nick-scavio-site.vercel.app",
    siteName: "NickScavio.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nick Scavio | Attorney, Investor, General Counsel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Scavio | Attorney, Investor, General Counsel",
    description:
      "Fifteen years of legal strategy across real estate, venture, and corporate law.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://nickscavio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nicholas J. Scavio",
              jobTitle: "Attorney, Investor, General Counsel",
              description:
                "Phoenix-based attorney with 15+ years of legal strategy across real estate, venture, and corporate law. Founder of Scavio Law Firm. General Counsel for Common Ground and LIEF Development.",
              url: "https://nickscavio.com",
              email: "nick@scaviolaw.com",
              image: "https://nickscavio.com/nick-scavio-headshot.jpg",
              sameAs: [
                "https://www.linkedin.com/in/nicholas-scavio-66665540/",
                "https://commonground.ventures",
              ],
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Arizona State University - Sandra Day O'Connor College of Law",
                },
                {
                  "@type": "CollegeOrUniversity",
                  name: "Arizona State University",
                },
              ],
              knowsAbout: [
                "Construction Law",
                "Commercial Real Estate",
                "Cannabis Industry Law",
                "Commercial Litigation",
                "Corporate Law",
                "Contract Negotiation",
                "General Counsel Services",
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Scavio Law Firm",
                  url: "https://nickscavio.com",
                },
                {
                  "@type": "Organization",
                  name: "Common Ground",
                  url: "https://commonground.ventures",
                },
                {
                  "@type": "Organization",
                  name: "LIEF Development + Construction",
                  url: "https://anewlief.com",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Phoenix",
                addressRegion: "AZ",
                addressCountry: "US",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
