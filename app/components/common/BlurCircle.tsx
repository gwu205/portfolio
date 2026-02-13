// BlurCircle.tsx
import React from "react";

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
  const mixBlendClass =
    blendMode === "hard-light"
      ? "mix-blend-hard-light"
      : blendMode === "difference"
        ? "mix-blend-difference"
        : "mix-blend-normal";

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
        className="w-full h-full rounded-full blur-[100px] blur-circle-orbit"
        style={{
          backgroundColor: baseColor,
          backgroundImage: `radial-gradient(circle at 30% 30%, ${highlightColor}, transparent 55%)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          animationDuration: duration,
          animationDelay: delay,
        }}
      />
    </div>
  );
};
