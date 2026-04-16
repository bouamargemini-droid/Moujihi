"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamProps {
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
}

function Beam({ initialX, initialY, duration, delay }: BeamProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [initialX, initialX + 600],
      y: [initialY, initialY + 800],
      opacity: [0, 0.3, 0],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, initialX, initialY, duration, delay]);

  return (
    <motion.div
      animate={controls}
      className="absolute h-[1px] w-[300px]"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(124,58,237,0.3), transparent)",
        transform: "rotate(-35deg)",
        transformOrigin: "0 0",
      }}
    />
  );
}

export function BackgroundBeams({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const beams = [
    { initialX: -100, initialY: -200, duration: 12, delay: 0 },
    { initialX: 200, initialY: -300, duration: 15, delay: 2 },
    { initialX: 500, initialY: -100, duration: 10, delay: 4 },
    { initialX: -200, initialY: 100, duration: 14, delay: 1 },
    { initialX: 800, initialY: -400, duration: 11, delay: 3 },
    { initialX: 100, initialY: -500, duration: 13, delay: 5 },
    { initialX: 600, initialY: -200, duration: 16, delay: 2.5 },
    { initialX: -50, initialY: 200, duration: 12, delay: 6 },
  ];

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {beams.map((beam, i) => (
        <Beam key={i} {...beam} />
      ))}
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/[0.03] blur-[100px]" />
    </div>
  );
}
