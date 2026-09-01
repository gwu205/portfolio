"use client";

import gsap from "gsap";
import { useLenis } from "lenis/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LOGO_MARK_PATHS, LOGO_MARK_VIEWBOX } from "./logoMark";

const SESSION_KEY = "preloader-shown";

// Deciding whether to activate must happen before paint, or the page flashes
// unstyled for a frame on first load.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Preloader() {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);
  const leftBarRef = useRef<SVGPathElement>(null);
  const middleBarRef = useRef<SVGPathElement>(null);
  const triangleRef = useRef<SVGPathElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Reduced-motion visitors skip the intro entirely rather than getting a
    // shortened version of it.
    if (alreadyShown || reducedMotion) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) return;
    lenis?.stop();

    const ctx = gsap.context(() => {
      gsap.set(markRef.current, { xPercent: -50, yPercent: -50, scale: 1.35 });
      gsap.set(leftBarRef.current, { y: -60, opacity: 0 });
      gsap.set(middleBarRef.current, { y: 60, opacity: 0 });
      gsap.set(triangleRef.current, { x: 70, opacity: 0 });
      gsap.set(panelRef.current, {
        xPercent: -50,
        yPercent: -50,
        scale: 0.07,
        skewX: -12,
        opacity: 0,
      });
      gsap.set(containerRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setActive(false);
          lenis?.start();
        },
      });

      // Phase 1 — assemble: each shape flies in from its own direction, staggered.
      tl.to(leftBarRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0)
        .to(middleBarRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.12)
        .to(triangleRef.current, { x: 0, opacity: 1, duration: 0.6 }, 0.24)
        // Phase 2 — scale-reveal: the oversized mark settles to its true size.
        .to(
          markRef.current,
          { scale: 1, duration: 0.5, ease: "power2.out" },
          0.8,
        )
        // Phase 3 — converge: the triangle slides under the middle bar and disappears.
        .to(
          triangleRef.current,
          { x: -10, opacity: 0, duration: 0.4, ease: "power2.in" },
          1.4,
        )
        // Phase 4 — crossfade to the panel, which expands to cover the viewport.
        .to(markRef.current, { opacity: 0, duration: 0.25 }, 1.7)
        .set(panelRef.current, { opacity: 1 }, 1.7)
        .to(
          panelRef.current,
          { scale: 1, duration: 0.65, ease: "power2.inOut" },
          1.7,
        )
        // Phase 5 — bottom-to-top reveal of the page underneath. Clipping the
        // container (exactly viewport-sized) rather than the oversized panel
        // keeps the clip-path percentages mapped 1:1 to the viewport.
        .to(
          containerRef.current,
          { clipPath: "inset(0% 0% 100% 0%)", duration: 0.75, ease: "power2.inOut" },
          2.5,
        );
    }, containerRef);

    return () => ctx.revert();
  }, [active, lenis]);

  if (!active) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] overflow-hidden pointer-events-none bg-[#ECEBEF]"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <svg
        ref={markRef}
        viewBox={LOGO_MARK_VIEWBOX}
        className="absolute top-1/2 left-1/2 w-36 h-36 md:w-48 md:h-48"
      >
        <path ref={leftBarRef} d={LOGO_MARK_PATHS.leftBar} fill="#DAD6DB" />
        <path ref={middleBarRef} d={LOGO_MARK_PATHS.middleBar} fill="#DAD6DB" />
        <path ref={triangleRef} d={LOGO_MARK_PATHS.rightTriangle} fill="#DAD6DB" />
      </svg>
      <div
        ref={panelRef}
        className="absolute top-1/2 left-1/2 w-[3000px] h-[3000px] bg-[#DAD6DB]"
      />
    </div>
  );
}
