"use client";

import gsap from "gsap";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { LOGO_MARK_PATHS, LOGO_MARK_VIEWBOX } from "./logoMark";

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
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    // Runs once, on mount, using whatever pathname the page was loaded
    // with — deliberately not a dependency. RootShell (and this component)
    // don't remount on client-side route changes, so re-running this on
    // later pathname changes would replay the intro when navigating to "/"
    // via a link instead of only on an actual full page load.
    if (pathname !== "/") return;
    // Excludes browser back/forward: Next.js can restore a previous route
    // via a real document navigation rather than a client-side transition
    // (observed with the back button after visiting a project), which
    // remounts this component the same as a fresh load would. The
    // Navigation Timing API reports that case explicitly regardless of
    // the underlying mechanism (bfcache restore or a plain refetch), so
    // it's a reliable way to exclude it without guessing at React's
    // mount/remount behavior.
    const navEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    if (navEntry?.type === "back_forward") return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Reduced-motion visitors skip the intro entirely rather than getting a
    // shortened version of it.
    if (reducedMotion) return;
    setActive(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!active) return;
    lenis?.stop();

    const ctx = gsap.context(() => {
      // Starts oversized enough to fill/exceed the viewport — the mark
      // itself is the opening frame, not a small badge that grows.
      gsap.set(markRef.current, { xPercent: -50, yPercent: -50, scale: 10 });
      // Both bars fly in along their own "\" slant (dx/dy ≈ 0.27, matching
      // the artwork's own edges) rather than straight up/down.
      gsap.set(leftBarRef.current, { x: -16, y: -60, opacity: 0 });
      gsap.set(middleBarRef.current, { x: 16, y: 60, opacity: 0 });
      gsap.set(triangleRef.current, { x: 70, opacity: 0 });
      gsap.set(panelRef.current, { opacity: 0 });
      gsap.set(containerRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

      // Set from inside the Phase 4 .call() below, once the merged bars'
      // real on-screen size is known — a plain closure variable so the
      // subsequent scale tween (already queued) can read it lazily via a
      // function-based value instead of a value fixed at build time.
      let panelTargetScale = 40;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          setActive(false);
          lenis?.start();
        },
      });

      // Phase 1 — assemble: each shape flies in from its own direction,
      // staggered, while the mark is still filling the viewport. The two
      // bars travel along their own slanted axis rather than straight in.
      tl.to(leftBarRef.current, { x: 0, y: 0, opacity: 1, duration: 1.4 }, 0)
        .to(middleBarRef.current, { x: 0, y: 0, opacity: 1, duration: 1.4 }, 0.24)
        .to(triangleRef.current, { x: 0, opacity: 1, duration: 1.4 }, 0.48)
        // Phase 2 — scale-reveal: the oversized mark springs down to true size.
        .to(
          markRef.current,
          { scale: 1, duration: 1.44, ease: "elastic.out(1, 1)" },
          2.0,
        )
        // Phase 3 — converge: all three shapes slide toward the center
        // independently (the triangle travels furthest and fades out),
        // so the merge into a single block is continuous rather than a
        // static hold followed by a hard swap.
        .to(leftBarRef.current, { x: 16, duration: 0.84, ease: "power2.inOut" }, 3.44)
        .to(middleBarRef.current, { x: -6, duration: 0.84, ease: "power2.inOut" }, 3.44)
        .to(
          triangleRef.current,
          { x: -20, opacity: 0, duration: 0.84, ease: "power2.in" },
          3.44,
        )
        // Phase 4 — hand off to the panel from the merged bars' exact
        // measured size and position, so it picks up seamlessly instead
        // of popping in at a mismatched size.
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
            // skewX(14deg) shears a box around its own center, which
            // widens its rendered bounding box by height*tan(14deg) and
            // shifts its left edge left by half that. The measured
            // {left, width} above is the bars' already-skewed visual
            // footprint (skew baked into their path data) — applying the
            // same CSS skew to a box already sized to that footprint
            // would double it up, so the panel's own (unskewed) width/left
            // are solved backwards from the target rendered footprint.
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
            // Enough to cover the viewport growing from this (roughly
            // centered) size, on any screen size.
            panelTargetScale =
              Math.max(window.innerWidth / width, window.innerHeight / height) *
              2;
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
        // Phase 5 — bottom-to-top reveal of the page underneath. Clipping the
        // container (exactly viewport-sized) rather than the oversized panel
        // keeps the clip-path percentages mapped 1:1 to the viewport.
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
