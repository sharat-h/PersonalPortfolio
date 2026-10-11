"use client";

import React, { useEffect, useRef } from "react";
import {
  Brain,
  GraduationCap,
  Award,
  Activity,
  Sparkles,
  CheckCircle,
  Code2,
} from "lucide-react";

export default function TechStack() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive wave visualizer inside the Bento grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lines = 5;
      const points = 40;
      const width = canvas.width;
      const height = canvas.height;

      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 + l * 0.07})`;
        ctx.lineWidth = 1.5;

        for (let p = 0; p <= points; p++) {
          const x = (width / points) * p;
          const y =
            height / 2 +
            Math.sin(step + p * 0.16 + l * 0.4) * (20 + l * 6) +
            Math.cos(step * 0.5 + p * 0.1) * 8;

          if (p === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="stack"
      className="relative z-20 w-full py-28 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#080d0e] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-4 border border-cyan-500/20 text-cyan-400">
            <Brain className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase">
              Profile & Technical Matrix
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Education, Skills & <span className="text-gradient-accent">Credentials</span>
          </h2>
          <p className="mt-3 text-base text-white/60 max-w-xl font-light">
            Academic training in Artificial Intelligence & Machine Learning at BMSIT&M combined with practical LLM engineering and verified certifications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Interactive Wave Visualizer & ML Philosophy (Spans 2 cols) */}
          <div className="md:col-span-2 relative rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[280px]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>AI Core & Inference Architecture</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Large Language Model Integration
              </h3>
              <p className="text-sm text-white/70 mt-2 max-w-md font-light">
                Specialized in integrating LLMs through high-speed APIs like Groq to build practical, context-aware platforms like PrepBot with ultra-low latency.
              </p>
            </div>
            <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-white/50">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                Groq API
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-300">
                Python NLP
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-teal-300">
                Context Retention
              </span>
            </div>
          </div>

          {/* Card 2: Academic Background (1 col) */}
          <div className="rounded-2xl glass-panel border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="text-base font-bold text-white tracking-tight">
                BMS Institute of Technology & Management
              </h4>
              <p className="text-xs text-white/70 font-mono mt-1">
                B.E. in AI & Machine Learning
              </p>
              <div className="mt-4 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-white/60">
                  <span>Timeline:</span>
                  <span className="text-white font-medium">2023 – 2027</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>CGPA:</span>
                  <span className="text-cyan-300 font-bold">7.67 / 10</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>10th / 12th:</span>
                  <span className="text-emerald-300 font-medium">91.5% / 92.6%</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] font-mono text-white/40 mt-4 border-t border-white/5 pt-3">
              Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Card 3: Honors & Leadership (1 col) */}
          <div className="rounded-2xl glass-panel border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>Honors & Roles</span>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-amber-300 font-mono block">
                    Winner (1st Place)
                  </span>
                  <span className="text-xs text-white/80 block mt-0.5">
                    Flinders University AI Competition
                  </span>
                  <span className="text-[10px] font-mono text-white/50 block">
                    3-Member Team AI Interview Prep Bot
                  </span>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <span className="text-xs font-bold text-teal-300 font-mono block">
                    Leadership
                  </span>
                  <span className="text-xs text-white/80 block mt-0.5">
                    College Sports Coordinator
                  </span>
                  <span className="text-[10px] font-mono text-white/50 block">
                    Event Logistics & Team Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Verified Certifications (Spans 2 cols) */}
          <div className="md:col-span-2 rounded-2xl glass-panel border border-white/10 p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Certifications</span>
              </div>
              <span className="text-[11px] font-mono text-white/40">
                NPTEL & Infosys Springboard
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { title: "Intro to Large Language Models (LLMs)", issuer: "NPTEL" },
                { title: "Python Programming", issuer: "Infosys Springboard" },
                { title: "Java Programming", issuer: "Infosys Springboard" },
                { title: "Software Engineering / SEPM", issuer: "Infosys Springboard" },
                { title: "Climate Risk & Sustainable Dev", issuer: "NPTEL" },
              ].map((cert) => (
                <div
                  key={cert.title}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between"
                >
                  <div className="pr-2">
                    <p className="text-xs font-semibold text-white truncate max-w-[220px]">
                      {cert.title}
                    </p>
                    <span className="text-[10px] font-mono text-emerald-400/80">
                      {cert.issuer}
                    </span>
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400/70 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Core Technical Arsenal (Spans 2 cols) */}
          <div className="md:col-span-2 rounded-2xl glass-panel border border-white/10 p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Technical Skills Matrix</span>
              </div>
              <span className="text-[11px] font-mono text-white/40">
                Languages & Tools
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { name: "Python", cat: "Languages" },
                { name: "Groq API & LLMs", cat: "AI / ML" },
                { name: "Machine Learning", cat: "AI / ML" },
                { name: "SQL Databases", cat: "Database" },
                { name: "HTML5 / CSS3", cat: "Frontend" },
                { name: "JavaScript / React", cat: "Web" },
                { name: "C & Java (Basic)", cat: "Languages" },
                { name: "Git & GitHub", cat: "Version Control" },
                { name: "Netlify", cat: "Deployment" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors"
                >
                  <div className="text-xs font-mono font-medium text-white">
                    {skill.name}
                  </div>
                  <div className="text-[9px] font-mono text-white/40">
                    {skill.cat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
