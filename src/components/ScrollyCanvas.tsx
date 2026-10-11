"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, MotionValue } from "framer-motion";
import Overlay from "./Overlay";

const TOTAL_FRAMES = 150;
const FRAME_PREFIX = "/sequence/frame_";
const FRAME_SUFFIX = "_delay-0.067s.webp";

interface ScrollyCanvasProps {
  onLoadProgress?: (progress: number) => void;
}

export default function ScrollyCanvas({ onLoadProgress }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Store preloaded images in memory
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [loadPercentage, setLoadPercentage] = useState<number>(0);

  // Scroll tracking across the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics for fluid frame scrubbing
  const smoothProgress: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 35,
    restDelta: 0.0005,
  });

  // Render a specific frame on canvas with object-fit: cover math
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const { width: canvasWidth, height: canvasHeight } = canvas;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // object-fit: cover logic
    const hRatio = canvasWidth / imgWidth;
    const vRatio = canvasHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawWidth = imgWidth * ratio;
    const drawHeight = imgHeight * ratio;
    const centerShiftX = (canvasWidth - drawWidth) / 2;
    const centerShiftY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Fill background with matching deep charcoal shade before drawing
    ctx.fillStyle = "#080d0e";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.drawImage(
      img,
      0,
      0,
      imgWidth,
      imgHeight,
      centerShiftX,
      centerShiftY,
      drawWidth,
      drawHeight
    );
  }, []);

  // Handle high-DPI canvas resizing
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2 for performance
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Redraw current frame
    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all 150 frames sequentially and safely
  useEffect(() => {
    let mounted = true;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    const handleSingleImageLoad = () => {
      if (!mounted) return;
      loadedCount += 1;
      const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setLoadPercentage(progress);
      if (onLoadProgress) onLoadProgress(progress);

      // Once the first frame is ready, paint it immediately
      if (loadedCount === 1) {
        updateCanvasDimensions();
        renderFrame(0);
      }

      if (loadedCount >= TOTAL_FRAMES) {
        setIsLoaded(true);
      }
    };

    // Preload loop
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `${FRAME_PREFIX}${paddedIndex}${FRAME_SUFFIX}`;
      img.onload = handleSingleImageLoad;
      img.onerror = () => {
        // Fallback progress increment so UI doesn't hang if a frame drops
        handleSingleImageLoad();
      };
      loadedImages[i] = img;
    }

    imagesRef.current = loadedImages;

    return () => {
      mounted = false;
      loadedImages.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, [onLoadProgress, renderFrame, updateCanvasDimensions]);

  // Listen to window resize events
  useEffect(() => {
    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);
    return () => window.removeEventListener("resize", updateCanvasDimensions);
  }, [updateCanvasDimensions]);

  // Sync scroll progress to canvas rendering using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;

    const unsubscribe = smoothProgress.on("change", (latestProgress) => {
      // Clamp progress between 0 and 1
      const clamped = Math.max(0, Math.min(1, latestProgress));
      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(clamped * (TOTAL_FRAMES - 1))
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          renderFrame(targetFrame);
        });
      }
    });

    return () => {
      unsubscribe();
      cancelAnimationFrame(animationFrameId);
    };
  }, [smoothProgress, renderFrame]);

  return (
    <div
      ref={containerRef}
      id="hero-scroll"
      className="relative w-full h-[500vh] bg-[#080d0e]"
    >
      {/* Sticky container pinned to viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#080d0e] flex items-center justify-center">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block object-cover z-0"
        />

        {/* Cinematic Vignette & Ambient Radial Glow for Seamless Blending */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-[#080d0e] via-transparent to-[#080d0e]/60" />
        <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-r from-[#080d0e]/80 via-transparent to-[#080d0e]/80" />
        <div className="absolute inset-0 z-1 pointer-events-none canvas-vignette" />

        {/* Top & Bottom Subtle Fog Overlays */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#080d0e] to-transparent z-2 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#080d0e] to-transparent z-2 pointer-events-none" />

        {/* Preloader Overlay (smoothly fades away once loaded) */}
        {!isLoaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#080d0e] transition-opacity duration-700">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-cyan-400 animate-spin" />
                <span className="absolute text-xs font-mono font-medium text-cyan-300">
                  {loadPercentage}%
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium tracking-widest uppercase text-white/90">
                  Initializing Experience
                </p>
                <p className="text-xs text-white/40 mt-1 font-mono">
                  Preloading 150 High-Definition Frames
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Parallax Overlay sitting on top of canvas */}
        <Overlay scrollYProgress={scrollYProgress} isReady={isLoaded} />
      </div>
    </div>
  );
}
