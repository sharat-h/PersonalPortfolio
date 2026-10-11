"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Trophy,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Bot,
  Terminal,
  Zap,
  ExternalLink,
} from "lucide-react";

export default function AboutSection() {
  const marqueeItems = [
    "AI & MACHINE LEARNING",
    "CREATOR OF PREPBOT",
    "GROQ API INTEGRATION",
    "FLINDERS AI HACKATHON 1ST PLACE",
    "BMSIT&M BENGALURU",
    "NLP SENTIMENT ANALYSIS",
    "PYTHON & SQL",
    "FULL-STACK DEVELOPER",
  ];

  return (
    <section id="about" className="relative z-20 w-full bg-[#080d0e] pt-12 pb-16 overflow-hidden">
      {/* ======================================================== */}
      {/* 1. INFINITE KINETIC MARQUEE BANNER                        */}
      {/* ======================================================== */}
      <div className="relative w-full py-4 bg-white/[0.02] border-y border-white/10 overflow-hidden mb-16 select-none">
        <div className="flex w-max animate-marquee space-x-8">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-white/70 uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 border border-cyan-500/20 text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono tracking-widest uppercase">
                About & Professional Journey
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-[1.1]">
              Engineering intelligent systems that solve{" "}
              <span className="text-gradient-accent">real student & industry bottlenecks.</span>
            </h2>
          </div>

          <div className="lg:max-w-sm">
            <p className="text-sm text-white/70 leading-relaxed font-light">
              B.E. Artificial Intelligence & Machine Learning student at BMS Institute of Technology and Management, Bengaluru. Creator of <span className="text-cyan-300 font-medium">PrepBot</span> and Winner of the Flinders University AI Competition.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://prepbotvk.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 text-xs font-mono transition-all"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Visit PrepBot Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl glass-pill text-white/80 hover:text-white text-xs font-mono transition-all"
              >
                <span>Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars of Expertise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-5 group-hover:scale-105 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                LLM & Generative AI Systems
              </h3>
              <p className="text-xs text-cyan-400 font-mono mt-1 uppercase tracking-wider">
                Groq API • Context Memory • Prompt Chaining
              </p>
              <p className="mt-3 text-sm text-white/70 font-light leading-relaxed">
                Architecting conversational applications with sub-second response times. Integrated Groq API to power PrepBot's HR simulations, resume critique, and technical interview modules with active context retention.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Primary Specialization</span>
              <span className="text-cyan-300">Live in Production</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300 mb-5 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Machine Learning & NLP
              </h3>
              <p className="text-xs text-emerald-400 font-mono mt-1 uppercase tracking-wider">
                Python • Scikit-Learn • Sentiment Analysis
              </p>
              <p className="mt-3 text-sm text-white/70 font-light leading-relaxed">
                Transforming raw unstructured text into actionable business intelligence. Engineered a customer sentiment classification pipeline achieving ~78% accuracy on Kaggle datasets, integrated into real-time dashboards.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Model Accuracy</span>
              <span className="text-emerald-300">~78% on Test Set</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-2xl glass-panel border border-white/10 hover:border-teal-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center text-teal-300 mb-5 group-hover:scale-105 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Full-Stack & Web Engineering
              </h3>
              <p className="text-xs text-teal-400 font-mono mt-1 uppercase tracking-wider">
                Next.js 14 • JavaScript • Netlify • SQL
              </p>
              <p className="mt-3 text-sm text-white/70 font-light leading-relaxed">
                Building responsive, tactile interfaces that bridge machine learning models to real users. Experience delivering accessible web applications, state management, and cloud deployments on Netlify and Vercel.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Deployment Stack</span>
              <span className="text-teal-300">Netlify & Modern Web</span>
            </div>
          </div>
        </div>

        {/* Quick Credentials / Resume Snapshot Bar */}
        <div className="rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                Competition Recognition
              </span>
              <h4 className="text-lg font-bold text-white">
                1st Place Winner — Flinders University AI Competition
              </h4>
              <p className="text-xs text-white/60 font-light mt-0.5">
                Won top prize among university teams for AI interview preparation system
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 text-xs font-mono shrink-0">
            <div>
              <span className="text-white/40 block text-[10px]">COLLEGE</span>
              <span className="text-white font-semibold">BMSIT&M Bengaluru</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px]">CURRENT CGPA</span>
              <span className="text-cyan-300 font-bold">7.67 / 10</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px]">DEGREE</span>
              <span className="text-emerald-300 font-medium">B.E. AIML (2023-27)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
