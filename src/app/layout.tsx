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
    url: "https://nickscavio.com",
    siteName: "Nick Scavio",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
