"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionIds = ["home", "about", "projects", "skills", "journey", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-5 md:pt-6 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-2 rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6 md:py-2.5 ${
            isScrolled
              ? "border-white/[0.14] bg-[#0c0c0c]/80 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-white/[0.08] bg-[#111111]/50 backdrop-blur-md"
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 pr-2 focus:outline-none"
            aria-label="Alvin Prayoga Home"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/[0.07] text-xs font-bold text-white transition-transform hover:scale-105">
              AP
            </div>
            <span className="hidden font-sans text-sm font-semibold tracking-wide text-white sm:inline-block">
              Alvin Prayoga
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#929292] hover:text-[#F5F5F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full border border-white/20 bg-white/[0.08] shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden rounded-full border border-white/20 bg-white/[0.08] px-3.5 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/[0.14] sm:inline-block"
            >
              Get in Touch
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#C4C4C4] transition-colors hover:text-white md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/[0.14] bg-[#111111]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "border border-white/15 bg-white/[0.08] text-white"
                        : "text-[#929292] hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                    )}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
