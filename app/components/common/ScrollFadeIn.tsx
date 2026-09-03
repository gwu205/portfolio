"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
}

// Shared by the tween and the inline start state, so they can't drift.
const RISE_DISTANCE = 32;

// Fades its children in the first time they scroll into view.
export const ScrollFadeIn = ({
  children,
  className = "",
}: ScrollFadeInProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: RISE_DISTANCE },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={itemRef}
      className={className}
      style={{ opacity: 0, transform: `translateY(${RISE_DISTANCE}px)` }}
    >
      {children}
    </div>
  );
};
