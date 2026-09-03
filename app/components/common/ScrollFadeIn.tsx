"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeInProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

// Fades/slides an entrance in the first time it scrolls into view.
// Generalized from the old AnimatedFolioItem (which hardcoded FolioItem as
// its only possible child) so it can wrap anything.
export const ScrollFadeIn = ({
  children,
  index,
  className = "",
}: ScrollFadeInProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 32 },
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
      data-index={index}
      className={className}
      style={{ opacity: 0, transform: "translateY(32px)" }}
    >
      {children}
    </div>
  );
};
