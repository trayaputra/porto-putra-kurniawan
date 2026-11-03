"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Lightbulb, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: "Software Craftsmanship",
      desc: "Menulis kode yang bersih, modular, dan terdokumentasi dengan arsitektur type-safe.",
    },
    {
      icon: Cpu,
      title: "AI & Autonomous Systems",
      desc: "Mengintegrasikan model bahasa canggih dan pipeline otomasi agentic ke alur kerja nyata.",
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      desc: "Mengurai problem kompleks menjadi solusi teknis yang elegan, scalable, dan efisien.",
    },
    {
      icon: Compass,
      title: "Long-term Architectural Vision",
      desc: "Merancang fondasi teknologi yang siap tumbuh dan beradaptasi tanpa technical debt terakumulasi.",
    },
  ];

  return (
    <section id="about" className="relative w-full px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-medium uppercase tracking-widest text-[#929292]">
            <Sparkles size={12} className="text-[#C4C4C4]" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl md:text-5xl">
            Passionate About Technology, Software, and Digital Craftsmanship.
          </h2>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Main Glass Story Panel (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 lg:col-span-7 md:p-10"
          >
            {/* Ambient Corner Flare */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />

            <div className="relative z-10 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#686868]">
                Philosophy & Background
              </span>

              <h3 className="text-2xl font-semibold leading-snug text-[#F5F5F5] md:text-3xl">
                Menghubungkan logika komputasi mendalam dengan sentuhan estetika premium.
              </h3>

              <p className="text-base leading-relaxed text-[#929292]">
                Sebagai pengembang perangkat lunak, fokus utama saya adalah membangun aplikasi web modern yang
                tidak hanya berkinerja tinggi, tetapi juga memberikan pengalaman interaktif yang intuitif dan mewah.
                Saya mendalami rekayasa frontend dan backend, integrasi kecerdasan buatan, serta arsitektur sistem real-time.
              </p>

              <p className="text-base leading-relaxed text-[#929292]">
                Pendekatan saya selalu didasari pada kejelasan struktur, optimalisasi waktu muat, dan perhatian cermat
                pada detail micro-interactions. Setiap proyek diperlakukan sebagai karya rekayasa yang presisi dan bernilai nyata.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#686868]">Based In</span>
                <p className="text-sm font-medium text-[#F5F5F5]">{PERSONAL_INFO.location}</p>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#686868]">Mindset</span>
                <p className="text-sm font-medium text-[#F5F5F5]">Precision & Innovation</p>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#686868]">Status</span>
                <p className="text-sm font-medium text-[#F5F5F5]">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Pillars & Values (5 Cols) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel-subtle group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-[#F5F5F5] transition-colors group-hover:border-white/25 group-hover:text-white">
                    <IconComp size={18} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-[#F5F5F5] group-hover:text-white">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#929292]">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
