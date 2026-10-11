"use client";

import React, { useEffect, useRef } from "react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  Activity,
  Sliders,
} from "lucide-react";

export default function TechStack() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive micro-particle wave canvas inside the Bento grid
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

      const lines = 6;
      const points = 40;
      const width = canvas.width;
      const height = canvas.height;

      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 + l * 0.06})`;
        ctx.lineWidth = 1.5;

        for (let p = 0; p <= points; p++) {
          const x = (width / points) * p;
          const y =
            height / 2 +
            Math.sin(step + p * 0.15 + l * 0.4) * (20 + l * 6) +
            Math.cos(step * 0.5 + p * 0.1) * 10;

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
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase">
              Technical Architecture
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Engineering & <span className="text-gradient-accent">Arsenal</span>
          </h2>
          <p className="mt-3 text-base text-white/60 max-w-xl font-light">
            Crafting experiences that don't compromise speed for spectacle.
            Every tool is picked for extreme runtime performance and creative flexibility.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Interactive Wave Visualizer (Spans 2 cols) */}
          <div className="md:col-span-2 relative rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 overflow-hidden flex flex-col justify-between min-h-[280px]">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>Real-Time Math Dynamics</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Generative Wave Simulation
              </h3>
              <p className="text-sm text-white/70 mt-2 max-w-md font-light">
                Continuous GPU-friendly trigonometry calculations rendered directly to HTML5 Canvas with sub-millisecond execution overhead.
              </p>
            </div>
            <div className="relative z-10 mt-6 flex items-center gap-4 text-xs font-mono text-white/50">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                120 FPS capable
              </span>
              <span>Zero external physics bloat</span>
            </div>
          </div>

          {/* Card 2: Performance Telemetry (1 col) */}
          <div className="rounded-2xl glass-panel border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Zap className="w-4 h-4" />
                <span>Performance Index</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-white/70 mb-1">
                    <span>Lighthouse Speed</span>
                    <span className="text-emerald-400 font-bold">100 / 100</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-full h-full bg-emerald-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-white/70 mb-1">
                    <span>Frame Stability</span>
                    <span className="text-cyan-400 font-bold">99.8%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[99.8%] h-full bg-cyan-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-mono text-white/70 mb-1">
                    <span>Layout Shift (CLS)</span>
                    <span className="text-teal-400 font-bold">0.00</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-full h-full bg-teal-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[11px] font-mono text-white/40 mt-4">
              Tested on Chromium & WebKit engines.
            </p>
          </div>

          {/* Card 3: Philosophy / Terminal (1 col) */}
          <div className="rounded-2xl glass-panel border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Terminal className="w-4 h-4" />
                <span>Manifesto</span>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-white/80 space-y-2">
                <p className="text-cyan-400">$ echo $PRINCIPLE</p>
                <p className="text-white/90">
                  "Speed is a feature. Animation is storytelling. Polish is respect."
                </p>
              </div>
            </div>
            <div className="mt-4 text-xs font-mono text-white/50">
              Deterministic state • Pure functions
            </div>
          </div>

          {/* Card 4: The Tech Stack Pills (Spans 3 cols or Full) */}
          <div className="md:col-span-3 lg:col-span-4 rounded-2xl glass-panel border border-white/10 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/80 text-xs font-mono uppercase tracking-wider">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Production Stack & Ecosystem</span>
              </div>
              <span className="text-xs font-mono text-white/40">
                Modern 2026 Ready
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { name: "Next.js 14", sub: "App Router / Turbopack" },
                { name: "Framer Motion", sub: "Spring Physics & Gestures" },
                { name: "HTML5 Canvas", sub: "Hardware Acceleration" },
                { name: "TypeScript", sub: "Type-Safe Architecture" },
                { name: "Tailwind CSS", sub: "Design System Tokens" },
                { name: "WebGL & Three.js", sub: "Spatial & Shaders" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="text-xs font-mono font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-[10px] font-mono text-white/50 mt-1">
                    {tech.sub}
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
