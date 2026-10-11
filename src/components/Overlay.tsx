"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Layers,
  Code2,
  Cpu,
  MonitorPlay,
} from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
  isReady?: boolean;
}

export default function Overlay({ scrollYProgress, isReady }: OverlayProps) {
  // ==========================================
  // Section 1: Hero (0% - 25%) - Center Aligned
  // ==========================================
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 0.8, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -60]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.95]);

  // ==========================================
  // Section 2: Craft (22% - 50%) - Left Aligned
  // ==========================================
  const opacity2 = useTransform(
    scrollYProgress,
    [0.2, 0.28, 0.4, 0.48],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.2, 0.28, 0.4, 0.48],
    [50, 0, 0, -40]
  );

  // ==========================================
  // Section 3: Philosophy (50% - 80%) - Right Aligned
  // ==========================================
  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.58, 0.72, 0.8],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.5, 0.58, 0.72, 0.8],
    [50, 0, 0, -40]
  );

  // ==========================================
  // Section 4: Outro Cue (82% - 100%) - Center Bottom
  // ==========================================
  const opacity4 = useTransform(
    scrollYProgress,
    [0.82, 0.88, 0.98, 1],
    [0, 1, 1, 0]
  );
  const y4 = useTransform(scrollYProgress, [0.82, 0.92], [30, 0]);

  // Scroll indicator fade out early
  const scrollIndicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.08],
    [1, 0]
  );

  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none flex flex-col justify-between">
      {/* ========================================================= */}
      {/* SECTION 1: HERO (0% Scroll) - CENTER                     */}
      {/* ========================================================= */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6 pointer-events-auto"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-widest text-emerald-300 uppercase">
              Available for Q2 Collaborations
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl"
          >
            Mallikarjun
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl font-light tracking-wide text-white/80 max-w-2xl text-glow"
          >
            Creative Developer & Experience Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-2 text-xs sm:text-sm font-mono text-cyan-400/80 tracking-widest uppercase"
          >
            Next.js • Framer Motion • WebGL • Creative Coding
          </motion.p>
        </div>

        {/* Scroll Prompt at the bottom */}
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 inset-x-0 flex flex-col items-center justify-center text-white/50 pointer-events-auto"
        >
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60 group-hover:text-cyan-300 transition-colors">
              Scroll To Scrub Sequence
            </span>
            <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1.5 backdrop-blur-sm group-hover:border-cyan-400/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-white/30 animate-bounce mt-1" />
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* SECTION 2: CRAFT (30% Scroll) - LEFT ALIGNED             */}
      {/* ========================================================= */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center px-6 sm:px-12 md:px-20 lg:px-28 pointer-events-none"
      >
        <div className="max-w-xl text-left pointer-events-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 border border-cyan-500/20 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase">
              The Vision
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            I build digital <br />
            <span className="text-gradient-accent">experiences.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed font-light backdrop-blur-[2px]">
            Crafting tactile web applications where code transforms into living emotion.
            Specializing in high-framerate interactive sequences, WebGL shaders, and
            sculpted kinetic interfaces that leave lasting impressions.
          </p>

          {/* Interactive Tag Matrix */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "WebGL & Three.js",
              "Interactive Canvas",
              "Framer Motion Physics",
              "Next.js App Router",
              "Micro-interactions",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1.5 rounded-lg glass-pill text-white/80 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-200 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* SECTION 3: PHILOSOPHY (60% Scroll) - RIGHT ALIGNED        */}
      {/* ========================================================= */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-28 pointer-events-none"
      >
        <div className="max-w-xl text-right pointer-events-auto flex flex-col items-end">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 border border-emerald-500/20 text-emerald-400">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-mono tracking-widest uppercase">
              Core Philosophy
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            Bridging design <br />
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              and engineering.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed font-light backdrop-blur-[2px] max-w-lg">
            Aesthetic vision without technical precision is just a picture.
            Technical capability without emotional finesse is just cold logic.
            I live at the intersection where both collide at 60 frames per second.
          </p>

          {/* Kinetic Metric Cards */}
          <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-md text-left">
            <div className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center text-cyan-400 text-xs mb-1">
                <MonitorPlay className="w-3.5 h-3.5 mr-1" />
                <span>FPS</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">60+</div>
              <div className="text-[10px] text-white/50 font-mono">Silky Scrub</div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center text-emerald-400 text-xs mb-1">
                <Cpu className="w-3.5 h-3.5 mr-1" />
                <span>Frames</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">150</div>
              <div className="text-[10px] text-white/50 font-mono">Lossless WebP</div>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center text-teal-400 text-xs mb-1">
                <Code2 className="w-3.5 h-3.5 mr-1" />
                <span>Stack</span>
              </div>
              <div className="text-xl font-bold text-white font-mono">Next 14</div>
              <div className="text-[10px] text-white/50 font-mono">Turbopack</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* SECTION 4: OUTRO CUE (85% - 98% Scroll) - SMOOTH TRANSITION */}
      {/* ========================================================= */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
      >
        <div className="glass-panel px-8 py-6 rounded-2xl border border-white/10 pointer-events-auto max-w-md shadow-2xl backdrop-blur-xl">
          <span className="text-xs font-mono text-cyan-400 tracking-[0.25em] uppercase block mb-2">
            Sequence Complete
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Selected Works & Archive
          </h3>
          <p className="text-xs sm:text-sm text-white/60 mt-2 font-light">
            Scroll downwards to inspect full interactive case studies and production code.
          </p>
          <div className="mt-4 flex items-center justify-center text-cyan-300 gap-1 text-xs font-mono">
            <span>Scroll for Projects</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
