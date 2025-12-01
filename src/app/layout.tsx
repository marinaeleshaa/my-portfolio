import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Rubik,
  Merriweather,
  Inconsolata,
} from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/common/ClientProviders";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const inconsolata = Inconsolata({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marina-eleshaa.com";
const canonicalUrl = SITE_URL.startsWith("http") ? SITE_URL : `https://${SITE_URL}`;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Marina Eleshaa | Frontend Engineer & UI Enthusiast",
    template: "%s | Marina Eleshaa",
  },
  description:
    "Portfolio of Marina Eleshaa, a frontend engineer crafting immersive web experiences with React, Next.js, and creative 3D visuals.",
  keywords: [
    "Marina Eleshaa",
    "frontend engineer",
    "Next.js developer",
    "React portfolio",
    "UI engineer",
    "web animations",
  ],
  authors: [{ name: "Marina Eleshaa", url: canonicalUrl }],
  creator: "Marina Eleshaa",
  publisher: "Marina Eleshaa",
  openGraph: {
    type: "website",
    url: canonicalUrl,
    title: "Marina Eleshaa | Frontend Engineer & UI Enthusiast",
    description:
      "Explore Marina Eleshaa’s featured projects, achievements, and contact information.",
    siteName: "Marina Eleshaa Portfolio",
    images: [
      {
        url: `${canonicalUrl}/MyLogo.png`,
        width: 1200,
        height: 630,
        alt: "Marina Eleshaa portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Eleshaa | Frontend Engineer & UI Enthusiast",
    description:
      "Portfolio of Marina Eleshaa showcasing interactive frontend work and 3D experiences.",
    creator: "@marinaeleshah",
    images: [`${canonicalUrl}/MyLogo.png`],
  },
  alternates: {
    canonical: canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased bg-black`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
        <Script id="portfolio-structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Marina Eleshaa",
            url: canonicalUrl,
            jobTitle: "Frontend Engineer",
            image: `${canonicalUrl}/MyLogo.png`,
            sameAs: [
              "https://github.com/marinaeleshah",
              "https://www.linkedin.com/in/marinaeleshah",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            knowsAbout: ["React", "Next.js", "TypeScript", "Three.js", "UI/UX design"],
          })}
        </Script>
      </body>
    </html>
  );
}
