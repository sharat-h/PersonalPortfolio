"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  ArrowUp,
  Send,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mallik.dev@pm.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative z-20 w-full py-28 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#080d0e] border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Header / Kinetic Call to Action */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill mb-6 border border-cyan-500/20 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono tracking-widest uppercase">
              Start A Dialogue
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase leading-none">
            Have an ambitious <br />
            <span className="text-gradient-accent">vision? Let's build.</span>
          </h2>

          <p className="mt-6 text-base sm:text-xl text-white/60 max-w-2xl font-light">
            Currently accepting commissions for design-forward web experiences,
            WebGL engineering, and creative technical leadership for Q2/Q3 2026.
          </p>
        </div>

        {/* Content Split: Direct Contact & Quick Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left Column: Direct Inquiries (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-2">
                Direct Electronic Mail
              </span>
              <div className="flex items-center justify-between gap-4 mt-2">
                <a
                  href="mailto:mallik.dev@pm.me"
                  className="text-lg sm:text-xl font-mono text-white font-semibold hover:text-cyan-300 transition-colors break-all"
                >
                  mallik.dev@pm.me
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl glass-pill hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-xs font-mono text-emerald-400 mt-2">
                  Address copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Timezone Tile */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1.5 text-white/40 text-xs font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Base Location</span>
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  Bangalore, IN
                </div>
                <div className="text-[11px] text-white/50 font-mono mt-0.5">
                  Remote Worldwide
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-1.5 text-white/40 text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Local Time</span>
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  {currentTime || "13:00 IST"}
                </div>
                <div className="text-[11px] text-emerald-400 font-mono mt-0.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Available Now
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-4">
                Digital Footprint
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "GitHub", href: "https://github.com" },
                  { name: "Twitter / X", href: "https://x.com" },
                  { name: "LinkedIn", href: "https://linkedin.com" },
                  { name: "Awwwards", href: "https://awwwards.com" },
                  { name: "ReadCV", href: "https://read.cv" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl glass-pill text-xs font-mono text-white/70 hover:text-cyan-300 hover:border-cyan-400/40 transition-all cursor-pointer"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Send a Project Brief
              </h3>
              <p className="text-xs text-white/50 font-mono mb-6">
                Direct transmission to inbox • 24hr response guaranteed
              </p>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="text-xs text-white/60 mt-1 max-w-sm">
                    Thank you. Your message has been logged. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-white/60 block mb-1 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Satoshi Nakamoto"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-xs font-mono focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-white/60 block mb-1 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="satoshi@bitcoin.org"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-xs font-mono focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-white/60 block mb-1 uppercase tracking-wider">
                      Project Scope & Timeline
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your product, expected milestones, or creative ambitions..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-xs font-mono focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.07] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#080d0e] font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © 2026 Mallikarjun. Built with Next.js 14 & Framer Motion.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-cyan-300 transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
