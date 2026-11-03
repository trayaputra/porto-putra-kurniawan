"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pt-28 pb-16 md:px-8 md:pt-36"
    >
      {/* Cinematic Ambient Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px] md:h-[700px] md:w-[700px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-white/[0.02] blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md shadow-silverGlow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          </span>
          <span className="text-xs font-medium tracking-wide text-[#C4C4C4]">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Name & Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 flex items-center justify-center gap-2 text-sm font-medium tracking-wider uppercase text-[#929292]"
        >
          <Sparkles size={14} className="text-[#C4C4C4]" />
          <span>Hello, I am {PERSONAL_INFO.name}</span>
        </motion.div>

        {/* Oversized Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Building Ideas Into{" "}
          <span className="relative inline-block text-white">
            Digital
            <span className="absolute -inset-1 -z-10 rounded-lg bg-white/[0.03] blur-sm" />
          </span>{" "}
          Experiences.
        </motion.h1>

        {/* Intro Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#929292] sm:text-lg"
        >
          {PERSONAL_INFO.bioIntro} {PERSONAL_INFO.bioFull}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => handleScrollTo("projects")}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E5E5E5] hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>

          <button
            type="button"
            onClick={() => handleScrollTo("contact")}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-7 text-sm font-medium text-[#F5F5F5] backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.09] hover:text-white active:scale-[0.98]"
          >
            <Terminal size={15} className="text-[#929292] group-hover:text-white" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Quick Highlights Pill Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4"
        >
          <div className="glass-panel-subtle flex flex-col items-center justify-center rounded-2xl px-5 py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#686868]">
              Specialization
            </span>
            <span className="mt-1 text-sm font-medium text-[#F5F5F5]">
              Fullstack & AI Engineering
            </span>
          </div>

          <div className="glass-panel-subtle flex flex-col items-center justify-center rounded-2xl px-5 py-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#686868]">
              Architecture
            </span>
            <span className="mt-1 text-sm font-medium text-[#F5F5F5]">
              Real-time & Distributed
            </span>
          </div>

          <div className="glass-panel-subtle col-span-2 flex flex-col items-center justify-center rounded-2xl px-5 py-3 sm:col-span-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#686868]">
              Aesthetics
            </span>
            <span className="mt-1 text-sm font-medium text-[#F5F5F5]">
              Dark Luxury Glassmorphism
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
