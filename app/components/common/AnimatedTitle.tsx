"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const lines = [
  "Crafting",
  "interfaces that",
  "work hard and",
  "feel effortless.",
];

export function AnimatedTitle({
  className,
  titleLines = lines,
}: {
  className?: string;
  titleLines?: string[];
}) {
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const validRefs = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (validRefs.length === 0) return;

    gsap.fromTo(
      validRefs,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.5,
      },
    );
  }, [titleLines]);

  return (
    <h1
      className={`relative z-10 tracking-tight text-5xl sm:text-6xl md:text-7xl font-semibold text-white ${className}`}
      style={{ lineHeight: "0.8" }}
    >
      {titleLines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.2em]">
          <span
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="inline-block will-change-transform"
            style={{ opacity: 0, transform: "translateY(100%)" }}
          >
            {line}
          </span>
        </span>
      ))}
    </h1>
  );
}
