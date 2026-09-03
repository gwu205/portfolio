"use client";

import { REDUCED_MOTION_QUERY } from "@/app/hooks/usePrefersReducedMotion";
import gsap from "gsap";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LOGO_MARK_PATHS, LOGO_MARK_VIEWBOX } from "./logoMark";

// Must decide before paint, or the page flashes for a frame.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Tailwind's `md` breakpoint — the mark's own size (w-36 vs md:w-48) already
// branches here, so the animation does too.
const MOBILE_BREAKPOINT = 768;
// Fraction of the mark's own SVG box its ink actually fills, from
// LOGO_MARK_PATHS' coordinate extents within the 64-unit viewBox.
const GLYPH_WIDTH_RATIO = 47.14 / 64;

export function Preloader() {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGSVGElement>(null);
  const leftBarRef = useRef<SVGPathElement>(null);
  const middleBarRef = useRef<SVGPathElement>(null);
  const triangleRef = useRef<SVGPathElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    // Mount-only: pathname is deliberately not a dependency, or the intro
    // would replay on client-side navigation back to "/".
    if (pathname !== "/") return;
    // Back/forward can remount this like a fresh load; exclude it.
    const navEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    if (navEntry?.type === "back_forward") return;
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
    if (reducedMotion) return;
    setActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!active) return;
    lenis?.stop();

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      // The opening frame is deliberately oversized enough to fill/exceed
      // the viewport — but on a narrow mobile viewport, a fixed scale
      // overshoots far past that into an unrecognizable crop. Scaled from
      // the mark's own measured (untransformed) box, so it lands close to
      // the viewport width regardless of the specific device.
      const baseMarkWidth = markRef.current?.getBoundingClientRect().width ?? 0;
      const openingScale =
        isMobile && baseMarkWidth > 0
          ? (window.innerWidth * 0.95) / (baseMarkWidth * GLYPH_WIDTH_RATIO)
          : 10;
      gsap.set(markRef.current, {
        xPercent: -50,
        yPercent: -50,
        scale: openingScale,
      });
      gsap.set(leftBarRef.current, { x: -16, y: -60, opacity: 0 });
      gsap.set(middleBarRef.current, { x: 16, y: 60, opacity: 0 });
      gsap.set(triangleRef.current, { x: 70, opacity: 0 });
      gsap.set(panelRef.current, { opacity: 0 });
      gsap.set(containerRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

      // Measured in phase 4; the queued tween reads it lazily.
      let panelTargetScale = 40;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setActive(false);
          lenis?.start();
        },
      });

      // Phase 1 — assemble.
      tl.to(leftBarRef.current, { x: 0, y: 0, opacity: 1, duration: 1.4 }, 0)
        .to(middleBarRef.current, { x: 0, y: 0, opacity: 1, duration: 1.4 }, 0.24)
        .to(triangleRef.current, { x: 0, opacity: 1, duration: 1.4 }, 0.48)
        // Phase 2 — scale down to true size.
        .to(
          markRef.current,
          { scale: 1, duration: 1.44, ease: "elastic.out(1, 1)" },
          2.0,
        )
        // Phase 3 — converge into one block.
        .to(leftBarRef.current, { x: 16, duration: 0.84, ease: "power2.inOut" }, 3.44)
        .to(middleBarRef.current, { x: -6, duration: 0.84, ease: "power2.inOut" }, 3.44)
        .to(
          triangleRef.current,
          { x: -20, opacity: 0, duration: 0.84, ease: "power2.in" },
          3.44,
        )
        // Phase 4 — hand off to the panel at the bars' measured size.
        .call(
          () => {
            if (
              !leftBarRef.current ||
              !middleBarRef.current ||
              !panelRef.current
            )
              return;
            const a = leftBarRef.current.getBoundingClientRect();
            const b = middleBarRef.current.getBoundingClientRect();
            const left = Math.min(a.left, b.left);
            const top = Math.min(a.top, b.top);
            const width = Math.max(a.right, b.right) - left;
            const height = Math.max(a.bottom, b.bottom) - top;
            // The measured footprint is already skewed, so solve the panel's
            // unskewed box backwards from it to avoid doubling the shear.
            const skewShift = height * Math.tan((14 * Math.PI) / 180);
            gsap.set(panelRef.current, {
              xPercent: 0,
              yPercent: 0,
              top,
              left: left + skewShift / 2,
              width: width - skewShift,
              height,
              scale: 1,
              skewX: 14,
              opacity: 1,
            });
            // A narrow mobile viewport puts the converged mark's actual
            // center further (proportionally) from true viewport center
            // than on desktop, so the same multiplier leaves a gap at the
            // far edge — a bigger buffer on mobile covers it.
            panelTargetScale =
              Math.max(window.innerWidth / width, window.innerHeight / height) *
              (isMobile ? 4 : 2);
          },
          [],
          4.28,
        )
        .to(markRef.current, { opacity: 0, duration: 0.4 }, 4.28)
        .to(
          panelRef.current,
          { scale: () => panelTargetScale, duration: 1.5, ease: "power2.inOut" },
          4.28,
        )
        // Phase 5 — reveal. Clip the viewport-sized container, not the
        // oversized panel, so clip-path percentages map 1:1.
        .to(
          containerRef.current,
          { clipPath: "inset(0% 0% 100% 0%)", duration: 2.0, ease: "power2.inOut" },
          5.78,
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
      <div ref={panelRef} className="absolute bg-[#DAD6DB]" />
    </div>
  );
}
