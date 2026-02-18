"use client";

import { useEffect, useRef, useState } from "react";

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
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      ref={parallaxRef}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          className={getPositionClasses(circle)}
          style={{
            transform: `translateY(${scrollY * circle.speed}px)`,
            ...getPositionStyles(circle),
          }}
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
