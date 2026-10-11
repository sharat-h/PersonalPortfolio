"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  X,
  CheckCircle2,
  Cpu,
  Monitor,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  accentGradient: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "aetherial-os",
    title: "Aetherial OS",
    tagline: "Spatial Web Computing & Shaders",
    category: "WebGL / Spatial UI",
    year: "2026",
    tags: ["Next.js 14", "WebGL", "GLSL Shaders", "Three.js", "Tailwind"],
    description:
      "A spatial interface engine engineered with interactive WebGL viewports, real-time raymarched glass refraction, and zero-latency state sync.",
    longDescription:
      "Aetherial explores post-flat computing environments on the modern web. Built using raw GLSL shaders alongside Next.js 14 App Router, it achieves 60fps glass refractions and spatial window management without burning GPU overhead.",
    metrics: [
      { label: "Render Frame", value: "60 FPS" },
      { label: "GPU Overhead", value: "< 14%" },
      { label: "Recognition", value: "Awwwards SOTD" },
    ],
    accentGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "chronos-horlogerie",
    title: "Chronos Horlogerie",
    tagline: "Kinetic Luxury Watch Scrollytelling",
    category: "Scrollytelling / 3D",
    year: "2025",
    tags: ["HTML5 Canvas", "Framer Motion", "React Three Fiber", "WebP Sequence"],
    description:
      "A masterclass in precision scroll-driven product storytelling. Features exploded-assembly scrubbing, photorealistic materials, and dynamic studio lighting.",
    longDescription:
      "Chronos uses synchronous HTML5 Canvas scrubbing tied to inertial scrolling. With 180 preloaded micro-frames and dynamic ambient occlusions, users deconstruct a tourbillon movement smoothly across mobile and desktop.",
    metrics: [
      { label: "Frames Scrubbed", value: "180 Frames" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Accolade", value: "FWA of the Day" },
    ],
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "hyperion-engine",
    title: "Hyperion Engine",
    tagline: "Generative Audio-Visual Reactive Core",
    category: "Creative Coding",
    year: "2025",
    tags: ["Web Audio API", "OffscreenCanvas", "TypeScript", "Web Workers"],
    description:
      "Interactive generative visualizer driven by Fast Fourier Transform frequency analysis and compute shader-inspired particle systems.",
    longDescription:
      "Hyperion delegates 60,000 particle physics simulations to Web Workers via OffscreenCanvas, ensuring the main browser thread stays completely responsive while rendering reactive kinetic sound sculptures.",
    metrics: [
      { label: "Active Particles", value: "60,000" },
      { label: "Audio Latency", value: "< 8ms" },
      { label: "GitHub Stars", value: "3.4k ★" },
    ],
    accentGradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "nova-monolith",
    title: "Nova Monolith",
    tagline: "High-Performance Editorial Platform",
    category: "Web Architecture",
    year: "2025",
    tags: ["Next.js 14", "Turbopack", "Lenis Smooth Scroll", "Tailwind CSS"],
    description:
      "A brutalist, high-performance digital monograph with magnetic cursor physics, kinetic typography, and instantaneous page transitions.",
    longDescription:
      "Engineered for sub-50ms navigation times with edge caching, automated image pipeline optimization, and custom spring-driven layout morphs that feel organic and tactile.",
    metrics: [
      { label: "Lighthouse Score", value: "100 / 100" },
      { label: "CLS (Layout Shift)", value: "0.00" },
      { label: "Awards", value: "CSSDA WOTD" },
    ],
    accentGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const CATEGORIES = ["All", "WebGL / Spatial UI", "Scrollytelling / 3D", "Creative Coding", "Web Architecture"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative z-20 w-full min-h-screen py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#080d0e]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-900/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-emerald-900/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase">
                Selected Works
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
              Curated <span className="text-gradient-accent">Case Studies</span>
            </h2>
            <p className="mt-3 text-base text-white/60 max-w-xl font-light">
              High-impact digital products, interactive 3D simulations, and
              custom creative web architectures crafted with relentless attention to detail.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                    : "glass-pill text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Accent ambient top gradient */}
                <div
                  className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${project.accentGradient} opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Card Content */}
                <div className="p-7 sm:p-9 relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Category + Year */}
                    <div className="flex items-center justify-between text-xs font-mono mb-4 text-white/50">
                      <span className="text-cyan-400/90 tracking-widest uppercase">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-white/50 mt-1 uppercase tracking-wider">
                      {project.tagline}
                    </p>

                    {/* Brief description */}
                    <p className="mt-4 text-sm text-white/70 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-white/75 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Metrics + Actions */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Micro telemetry */}
                    <div className="flex items-center gap-4 text-xs font-mono">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <span className="text-white/40 block text-[10px]">
                            {m.label}
                          </span>
                          <span className="text-white font-medium">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Detail trigger */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-medium text-white glass-pill hover:bg-white/10 hover:text-cyan-300 transition-all cursor-pointer"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ======================================================== */}
      {/* DETAILED CASE STUDY MODAL                                 */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#080d0e]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl rounded-2xl glass-panel border border-white/20 p-6 sm:p-8 bg-[#0c1315] shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass-pill text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase block mb-1">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-mono text-white/50 mt-1">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Long Description */}
              <div className="space-y-4 text-white/80 text-sm leading-relaxed font-light">
                <p>{selectedProject.longDescription}</p>
              </div>

              {/* Metrics Grid */}
              <div className="my-6 grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
                  >
                    <span className="text-[10px] font-mono text-white/40 block">
                      {metric.label}
                    </span>
                    <span className="text-base font-bold text-white font-mono mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Architecture highlights */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3">
                  Key Technical Capabilities
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Hardware-accelerated rendering with custom shader passes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>60 FPS performance envelope across desktop and mobile devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Zero layout shift, fully accessible semantic DOM layering</span>
                  </li>
                </ul>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#080d0e] font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-pill text-white/80 hover:text-white text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
