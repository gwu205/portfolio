"use client";

import { useLenis } from "lenis/react";
import { useRef } from "react";

const CircleSvg = ({
  width = "1086",
  height = "1086",
  color = "#00F",
}: {
  width?: string;
  height?: string;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 1086 1086"
  >
    <circle cx="542.5" cy="542.5" r="542" stroke={color} />
  </svg>
);

interface Circle {
  position: "top" | "bottom";
  side: "left" | "right";
  offset: string;
  speed: number;
  zIndex?: number;
  width?: string;
  height?: string;
  color?: string;
}

interface ParallaxCirclesProps {
  circles: Circle[];
  className?: string;
}

export const ParallaxCircles = ({
  circles,
  className = "",
}: ParallaxCirclesProps) => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Writes transforms straight to the DOM from Lenis' scroll callback instead
  // of routing scroll position through React state, so a scroll tick no
  // longer re-renders every circle.
  useLenis((lenis) => {
    if (lenis.prefersReducedMotion) return;
    circles.forEach((circle, index) => {
      const el = itemRefs.current[index];
      if (el) el.style.transform = `translateY(${lenis.scroll * circle.speed}px)`;
    });
  }, [circles]);

  const getPositionClasses = (circle: Circle) => {
    const positionClass =
      circle.position === "top" ? "top-[15%]" : "bottom-[15%]";
    return `absolute ${positionClass}`;
  };

  const getPositionStyles = (circle: Circle) => {
    const side = circle.side === "left" ? "left" : "right";
    return {
      [side]: circle.offset,
      zIndex: circle.zIndex || 0,
    };
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className={getPositionClasses(circle)}
          style={getPositionStyles(circle)}
        >
          <CircleSvg
            width={circle.width}
            height={circle.height}
            color={circle.color}
          />
        </div>
      ))}
    </div>
  );
};
