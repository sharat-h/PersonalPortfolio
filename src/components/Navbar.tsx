"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, Check, Copy, Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sharathanku2005@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:sharathanku2005@gmail.com";
    }
  };

  return (
    <>
      {/* Top Global Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 z-50 pointer-events-none"
      />

      {/* Floating Navbar */}
      <header
        className={`fixed top-4 sm:top-6 inset-x-0 mx-auto w-[92%] sm:w-[88%] max-w-5xl z-40 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-3.5"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 py-2 rounded-full glass-panel border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          {/* Brand Identity */}
          <a
            href="#hero-scroll"
            aria-label="Sharathkumar K M — home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400 transition-colors">
              <span className="font-mono font-bold text-xs text-cyan-300 group-hover:text-white transition-colors">
                SK
              </span>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="font-bold text-xs tracking-wider uppercase text-white font-mono">
                Sharathkumar K M
              </span>
              <span className="text-[9px] font-mono text-white/50 tracking-widest flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                AI & ML • BMSIT
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider text-white/70">
            <a
              href="#hero-scroll"
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Intro
            </a>
            <a
              href="#about"
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Works
            </a>
            <a
              href="#stack"
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Stack
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {/* Quick copy email */}
            <button
              onClick={handleCopyEmail}
              title="Copy Email"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-white/70 hover:text-white text-[11px] font-mono transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-cyan-400" />
                  <span>sharathanku2005@gmail.com</span>
                </>
              )}
            </button>

            {/* Talk Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-[#080d0e] font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(56,189,248,0.25)] cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full glass-pill text-white"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden mt-2 p-3 rounded-2xl glass-panel border border-white/10 grid gap-1 text-sm font-mono text-white/80">
            {[["Intro", "#hero-scroll"], ["About", "#about"], ["Works", "#work"], ["Stack", "#stack"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2.5 hover:bg-white/5 hover:text-cyan-300">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
