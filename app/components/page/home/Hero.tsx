"use client";

import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { Header } from "../../common/Header";
import { HeroHeadline } from "./HeroHeadline";

// ogl is client-only; keep it out of the initial bundle.
const GradientWaves = dynamic(() => import("./GradientWaves"), {
  ssr: false,
});

export const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const overlayRef = useRef<HTMLDivElement>(null);

  // Written straight to the DOM so mousemove doesn't re-render.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!overlayRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientY - rect.top) / rect.height;
    overlayRef.current.style.opacity = String(Math.min(0.8, Math.max(0.4, ratio)));
  };

  return (
    <section
      data-nav-surface="dark"
      className="relative z-0 h-screen flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      <Header type="minimal" />
      <div className="md:p-8 p-4 w-full max-w-5xl">
        <HeroHeadline />
      </div>
      <div className="h-full w-full overflow-hidden absolute top-0 left-0 -z-10">
        {/* GradientWaves already pauses itself off-screen/tab-hidden via its
            own IntersectionObserver + visibilitychange handling — the only
            thing left to gate here is reduced motion, which it doesn't
            handle on its own. */}
        {!prefersReducedMotion && (
          <GradientWaves
            horizonColor="#ffffff"
            waveColor="#d0ff00"
            crestColor="#00e52a"
            speed={0.35}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            grain
            grainIntensity={0.04}
          />
        )}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: "#6000E6",
            mixBlendMode: "difference",
            opacity: 0.4,
          }}
        />
      </div>
    </section>
  );
};
