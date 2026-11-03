"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("alvin_portfolio_loaded");
    if (hasLoaded) {
      setIsFinished(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem("alvin_portfolio_loaded", "true");
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] select-none"
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[120px]" />

          <div className="relative flex flex-col items-center">
            {/* Minimalist Monogram Badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-silverGlow"
            >
              <span className="font-sans text-xl font-bold tracking-widest text-[#F5F5F5]">
                AP
              </span>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="mt-6 flex flex-col items-center gap-1"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-[#929292]">
                Alvin Prayoga
              </span>
              <span className="text-[11px] tracking-wider text-[#686868]">
                Portfolio Experience
              </span>
            </motion.div>

            {/* Sleek Progress Track */}
            <div className="mt-8 flex w-48 flex-col items-center gap-2">
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  className="h-full bg-gradient-to-r from-neutral-400 via-white to-neutral-200"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#929292]">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
