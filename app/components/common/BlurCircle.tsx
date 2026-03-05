// BlurCircle.tsx
"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type BlurCircleProps = {
  baseColor?: string;
  highlightColor?: string;
  size?: string;
  className?: string;
  blendMode?: "hard-light" | "difference" | "normal";
  opacity?: number;
  zi?: number;
  duration?: string; // e.g. "5s", "7.3s"
  delay?: string; // e.g. "0s", "1.2s", "-2s"
};

export const BlurCircle: React.FC<BlurCircleProps> = ({
  baseColor = "#9B0CBB",
  highlightColor = "rgba(186, 186, 186, 0.9)",
  size = "40vw",
  className,
  blendMode = "hard-light",
  opacity = 1,
  zi = 0,
  duration = "5s",
  delay = "0s",
}) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const mixBlendClass =
    blendMode === "hard-light"
      ? "mix-blend-hard-light"
      : blendMode === "difference"
        ? "mix-blend-difference"
        : "mix-blend-normal";

  useEffect(() => {
    if (!circleRef.current) return;

    const durationSec = parseFloat(duration);
    const delaySec = parseFloat(delay);

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      delay: delaySec,
      defaults: { ease: "sine.inOut" },
    });

    tl.to(circleRef.current, {
      x: "4%",
      y: "-6%",
      scale: 1.02,
      duration: durationSec * 0.2,
    })
      .to(circleRef.current, {
        x: "8%",
        y: "-2%",
        scale: 0.99,
        duration: durationSec * 0.2,
      })
      .to(circleRef.current, {
        x: "4%",
        y: "4%",
        scale: 1.03,
        duration: durationSec * 0.2,
      })
      .to(circleRef.current, {
        x: "-2%",
        y: "2%",
        scale: 1.01,
        duration: durationSec * 0.2,
      })
      .to(circleRef.current, {
        x: "0%",
        y: "0%",
        scale: 1,
        duration: durationSec * 0.2,
      });

    return () => {
      tl.kill();
    };
  }, [duration, delay]);

  return (
    <div
      className={`pointer-events-none absolute ${className || ""} ${mixBlendClass}`}
      style={{
        width: size,
        height: size,
        zIndex: zi,
        opacity,
      }}
    >
      <div
        ref={circleRef}
        className="w-full h-full rounded-full blur-[100px] will-change-transform"
        style={{
          backgroundColor: baseColor,
          backgroundImage: `radial-gradient(circle at 30% 30%, ${highlightColor}, transparent 55%)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};
