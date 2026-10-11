import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="relative bg-[#080d0e] min-h-screen text-[#e5eef0] selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Subtle Custom Cursor for desktop */}
      <CustomCursor />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      <main className="relative min-h-screen selection:bg-cyan-500/20 selection:text-cyan-200">
        {/* Sticky scroller and canvas scrubber with parallax overlays. */}
        <ScrollyCanvas />

        <AboutSection />

        <Projects />

        <TechStack />

      </main>

      {/* Contact footer sits outside the main-content landmark. */}
      <ContactSection />
    </div>
  );
}
