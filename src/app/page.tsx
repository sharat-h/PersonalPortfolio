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
    <main className="relative bg-[#080d0e] min-h-screen text-[#e5eef0] overflow-x-hidden selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Subtle Custom Cursor for desktop */}
      <CustomCursor />

      {/* Floating Glassmorphic Navbar */}
      <Navbar />

      {/* 
        COMPONENT 1: THE STICKY SCROLLER & CANVAS SCRUBBER 
        (320vh responsive container + sticky viewport canvas + preloading + portrait-aware framing)
        Contains Component 2: The Parallax Overlay on top of the canvas
      */}
      <ScrollyCanvas />

      {/* 
        BRIDGE & PROFESSIONAL SUMMARY: ABOUT & 3 PILLARS
        Connects the scroll sequence smoothly to Case Studies with an infinite kinetic marquee,
        bio, 3 pillars of expertise, and Flinders AI hackathon credentials.
      */}
      <AboutSection />

      {/* 
        COMPONENT 3: THE WORK GRID
        Glass-morphism cards, interactive case studies modal, and telemetry tags
        Spotlight #1: PrepBot (prepbotvk.netlify.app)
      */}
      <Projects />

      {/* 
        BENTO GRID: ENGINEERING ARSENAL & CREDENTIALS
        Education at BMSIT&M (7.67 CGPA), Verified Certifications, real-time math wave simulation
      */}
      <TechStack />

      {/* 
        CINEMATIC FOOTER & CONTACT
        Direct mail quick-copy, telephone, live IST timezone, inquiry form, and back-to-top
      */}
      <ContactSection />
    </main>
  );
}
