import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Alvin Prayoga — Personal Developer Portfolio | Dark Luxury Glassmorphism",
  description:
    "Personal developer portfolio of Alvin Prayoga. Building Ideas Into Digital Experiences with dark luxury glassmorphism, cinematic animations, AI engineering, and high-performance interactive architectures.",
  keywords: [
    "Alvin Prayoga",
    "Fullstack Engineer",
    "AI Developer",
    "Portfolio",
    "Dark Luxury",
    "Glassmorphism",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Alvin Prayoga" }],
  creator: "Alvin Prayoga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/trayaputra",
    title: "Alvin Prayoga — Personal Developer Portfolio",
    description: "Building Ideas Into Digital Experiences with dark luxury glassmorphism and cinematic motion.",
    siteName: "Alvin Prayoga Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-primary text-content-primary antialiased selection:bg-white/20 selection:text-white">
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
