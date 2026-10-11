"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  X,
  CheckCircle2,
  Bot,
  Trophy,
  Brain,
  Layers,
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
  features: string[];
  metrics: { label: string; value: string }[];
  accentGradient: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  highlightLabel?: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "prepbot",
    title: "PrepBot",
    tagline: "AI-Powered Placement Preparation Mentor",
    category: "AI / LLM Application",
    year: "Live",
    highlightLabel: "FEATURED SPOTLIGHT",
    tags: [
      "Groq API",
      "LLM Integration",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Netlify Deployment",
    ],
    description:
      "An end-to-end AI placement mentor deployed on Netlify. Powers interactive mock HR interviews, resume preparation, aptitude coaching, DSA, email etiquette, and soft skills with low-latency Groq LLM inference.",
    longDescription:
      "PrepBot solves the core interview anxiety and preparation bottlenecks faced by college students. Engineered with conversational context retention, instant quick-action prompts, and clean conversation state management, students can practice role-specific technical rounds, polish HR responses, and receive structured resume feedback around the clock.",
    features: [
      "Simulates real-world HR & technical interview rounds with contextual memory",
      "Comprehensive modules for Aptitude, DSA, Company-Specific prep, and Email etiquette",
      "Ultra-low latency inference using Groq API LPU infrastructure",
      "Interactive quick-action buttons and clear-conversation session controls",
    ],
    metrics: [
      { label: "Status", value: "Live on Netlify" },
      { label: "Inference Engine", value: "Groq LLM" },
      { label: "Live Domain", value: "prepbotvk.netlify.app" },
    ],
    accentGradient: "from-cyan-500/30 via-teal-500/15 to-transparent",
    demoUrl: "https://prepbotvk.netlify.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "flinders-ai-winner",
    title: "AI Interview Simulation Bot",
    tagline: "Flinders University AI Competition — 1st Place Winner",
    category: "Award Winning AI",
    year: "2024",
    highlightLabel: "1ST PLACE WINNER",
    tags: [
      "Groq API",
      "LLM Integration",
      "Prompt Engineering",
      "Hackathon 1st Place",
      "Team Leadership",
    ],
    description:
      "Secured First Place as part of a 3-member team in the national-level Flinders University AI Competition. Designed an AI-powered interview preparation bot addressing real student interview challenges.",
    longDescription:
      "Awarded top honors among university contenders. Architected the conversational evaluation rubric, prompt chaining, and Groq API backend integration that assesses students' speech clarity, technical depth, and confidence during mock placement interviews.",
    features: [
      "First place winner in competitive AI hackathon with 3-member team",
      "Integrated Groq API for instantaneous response times during mock interview evaluations",
      "Structured rubrics evaluating both soft skills and technical competency",
    ],
    metrics: [
      { label: "Award", value: "1st Place Winner" },
      { label: "Organizer", value: "Flinders Univ" },
      { label: "Core API", value: "Groq LLM" },
    ],
    accentGradient: "from-amber-500/25 via-yellow-500/10 to-transparent",
    demoUrl: "https://prepbotvk.netlify.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "sentiment-classification",
    title: "Customer Review Sentiment Classifier",
    tagline: "NLP Sentiment Classification Engine",
    category: "Machine Learning / NLP",
    year: "2024",
    tags: [
      "Python",
      "Machine Learning",
      "NLP",
      "Kaggle Dataset",
      "Frontend Integration",
    ],
    description:
      "Trained an end-to-end Machine Learning model to classify customer product reviews as positive or negative with ~78% accuracy on Kaggle benchmark datasets.",
    longDescription:
      "Built a data processing and inference pipeline for sentiment analysis. Cleaned, tokenized, and vectorized customer feedback corpora, evaluated multiple classification models to reach ~78% accuracy, and contributed to frontend development for live sentiment prediction visualization.",
    features: [
      "Achieved ~78% test accuracy on Kaggle product review corpus",
      "Custom text preprocessing, tokenization, and feature extraction pipeline",
      "Frontend dashboard integration for real-time sentiment scoring",
    ],
    metrics: [
      { label: "Model Accuracy", value: "~78%" },
      { label: "Dataset", value: "Kaggle Benchmark" },
      { label: "Domain", value: "E-Commerce NLP" },
    ],
    accentGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    demoUrl: "https://prepbotvk.netlify.app/",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "portfolio-scrollytelling",
    title: "Kinetic Scrollytelling Experience",
    tagline: "High-Performance Next.js 14 Canvas Engine",
    category: "Full-Stack & Creative Dev",
    year: "2026",
    tags: [
      "Next.js 14",
      "HTML5 Canvas",
      "Framer Motion",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "Awwwards-level interactive portfolio featuring 150 preloaded WebP frames scrubbed synchronously with user scroll, parallax typography, and glassmorphic UI.",
    longDescription:
      "Built with HTML5 Canvas hardware acceleration, responsive object-fit math preventing portrait cropping across widescreen and mobile viewports, spring physics, and full static prerendering.",
    features: [
      "150 optimized WebP frames with zero scroll lag or flickering",
      "Responsive canvas framing preserving subject proportions on any screen",
      "Real-time trigonometry math wave simulation and Bento Grid",
    ],
    metrics: [
      { label: "Scrub Rate", value: "60 FPS" },
      { label: "Sequence", value: "150 Frames" },
      { label: "Lighthouse", value: "100 / 100" },
    ],
    accentGradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "https://prepbotvk.netlify.app/",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "AI / LLM Application",
  "Award Winning AI",
  "Machine Learning / NLP",
  "Full-Stack & Creative Dev",
];

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
      className="relative z-20 w-full min-h-screen pt-10 pb-24 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#080d0e]"
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
                Portfolio & Projects
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase">
              Featured <span className="text-gradient-accent">Case Studies</span>
            </h2>
            <p className="mt-3 text-base text-white/60 max-w-xl font-light">
              From live AI mentorship platforms to machine learning models and
              award-winning hackathon architectures built by Sharathkumar K M.
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
                className={`group relative rounded-2xl overflow-hidden glass-panel border transition-all duration-500 flex flex-col justify-between ${
                  project.id === "prepbot"
                    ? "border-cyan-400/40 shadow-[0_0_35px_rgba(56,189,248,0.15)]"
                    : "border-white/10 hover:border-cyan-500/40"
                }`}
              >
                {/* Accent ambient top gradient */}
                <div
                  className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${project.accentGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Card Content */}
                <div className="p-7 sm:p-9 relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Row: Category + Highlight */}
                    <div className="flex items-center justify-between text-xs font-mono mb-4 text-white/50">
                      <span className="text-cyan-400/90 tracking-widest uppercase flex items-center gap-1.5">
                        {project.id === "prepbot" && (
                          <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        )}
                        {project.id === "flinders-ai-winner" && (
                          <Trophy className="w-3.5 h-3.5 text-amber-400" />
                        )}
                        {project.category}
                      </span>
                      {project.highlightLabel ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                          {project.highlightLabel}
                        </span>
                      ) : (
                        <span>{project.year}</span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
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

                    {/* Action buttons */}
                    <div className="flex items-center gap-2">
                      {project.id === "prepbot" && (
                        <a
                          href="https://prepbotvk.netlify.app/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-400 hover:bg-cyan-300 text-[#080d0e] transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-white glass-pill hover:bg-white/10 hover:text-cyan-300 transition-all cursor-pointer"
                      >
                        <span>Details</span>
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
                    <span className="text-sm font-bold text-white font-mono mt-0.5 block truncate">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Highlights list */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3">
                  Technical Architecture & Accomplishments
                </h4>
                <ul className="space-y-2 text-xs text-white/80">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
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
                  <span>
                    {selectedProject.id === "prepbot"
                      ? "Open PrepBot (prepbotvk.netlify.app)"
                      : "Launch Live Demo"}
                  </span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass-pill text-white/80 hover:text-white text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
