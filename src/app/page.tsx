import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative bg-[#080d0e] min-h-screen text-[#e5eef0] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Subtle Custom Cursor for desktop */}
      <CustomCursor />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* 
        COMPONENT 1: THE STICKY SCROLLER & CANVAS SCRUBBER 
        (500vh container + sticky viewport canvas + preloading + object-fit: cover)
        Contains Component 2: The Parallax Overlay on top of the canvas
      */}
      <ScrollyCanvas />

      {/* 
        COMPONENT 3: THE WORK GRID
        Placed directly AFTER the scroll animation finishes (below the 500vh container)
        Glass-morphism cards, interactive case studies modal, and telemetry tags
      */}
      <Projects />

      {/* 
        BENTO GRID: ENGINEERING ARSENAL & PERFORMANCE
        Interactive canvas trigonometry wave dynamics + Lighthouse metrics
      */}
      <TechStack />

      {/* 
        CINEMATIC FOOTER & CONTACT
        Direct mail quick-copy, live IST timezone, inquiry form, and back-to-top
      */}
      <ContactSection />
    </main>
  );
}
