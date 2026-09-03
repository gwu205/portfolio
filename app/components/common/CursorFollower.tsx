"use client";

import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import gsap from "gsap";
import { CSSProperties, RefObject, useEffect, useRef } from "react";

interface CursorFollowerProps {
  text: string;
  targetRef: RefObject<HTMLElement | null>;
}

// Diameter (px) of the mix-blend-difference accent circle, at its resting
// (max) scale.
const CIRCLE_SIZE = 160;

// Scale eases toward MIN_SCALE as cursor speed approaches MAX_SPEED
// (px/ms) on every mousemove, and back toward MAX_SCALE once movement has
// actually stopped (IDLE_MS with no further mousemove) — see the effect
// below.
const MAX_SCALE = 1;
const MIN_SCALE = 0.5;
const MAX_SPEED = 2;
const IDLE_MS = 100;

// A circle plus a small label, both tracking the mouse while it's over
// `targetRef`, both using mix-blend-difference rather than
// backdrop-filter/filter — this is what actually gives a *consistent*
// effect regardless of where the cursor is (image, ticker, or the plain
// page background beside them): mix-blend-mode reads whatever is really
// painted behind it at that pixel, it doesn't need a duplicate of the
// content to reveal (which is what limited the earlier blur-reveal
// version to only the image's own footprint) or a separately-composited
// layer to sample (which is what made backdrop-filter unreliable over the
// continuously-animating video/ticker).
//
// Positioned via plain `absolute` inside `targetRef` (which is
// `position: relative`), using coordinates relative to `targetRef`'s own
// box — not `position: fixed` with raw viewport coordinates, which breaks
// under this app's scroll setup: AnimatedMain leaves a residual
// `transform` on <main> after its entrance tween, which makes that <main>
// the containing block for any `position: fixed` descendant instead of
// the true viewport, so a fixed+clientX/Y follower silently drifts by the
// scroll distance once the page has scrolled. Anchoring to the nearest
// positioned ancestor instead sidesteps that architecture entirely,
// regardless of what any ancestor's transform is doing — the same
// approach InfoCard's floating tooltip already uses.
// Listeners attach directly to targetRef (not window) so the browser
// itself only fires them while the cursor is actually over that element.
//
// Position, self-centering, scale, and mix-blend-difference all live on
// each element itself, not a wrapping ancestor: any ancestor that
// establishes a stacking context (position+z-index, opacity<1,
// filter/backdrop-filter, isolation, *or* transform — all of them, not
// just the formal "isolation" triggers) traps a *descendant's*
// mix-blend-mode inside that context, cutting it off from the real page
// content it's supposed to read. Confirmed by trial: an isolated test
// element blended correctly where a two-div version (an outer wrapper
// GSAP-positioned via x/y, wrapping the blend element) didn't — the outer
// wrapper's own transform, needed for positioning, was the trap. An
// element's own stacking-context-creating properties don't trap its OWN
// blend, only a descendant's, so both the circle and the label stay
// single, self-contained elements.
//
// Scale (for the inertia effect below) is driven through a CSS custom
// property, `--cursor-scale`, read inside a *static* inline `transform`
// that also does the self-centering — GSAP never touches the real
// `transform`/`scale` properties on these elements at all. That's a
// deliberate second application of the same fix `left`/`top` already
// uses instead of GSAP's `x`/`y`: GSAP folds every transform-related
// property it's animating into one combined inline `transform`, which
// would fight a static centering class the moment `scale` joined the
// mix. The obvious fix — hand GSAP the centering too, via
// `xPercent`/`yPercent` alongside `scale` — was tried first and
// discovered to actively break: combining percentage-based transforms
// with `scale` in the same `gsap.set`/`quickTo` call trips a real GSAP
// bug (logs "scale not eligible for reset" to the console and silently
// stops ALL further transform writes to that element, position included
// — reproduced directly, not a guess). Routing scale through a plain
// custom property sidesteps GSAP's transform-combining logic entirely,
// the same technique already proven in this file's earlier
// backdrop-filter experiment (also since reverted, but the technique
// held up): GSAP tweens a custom property as an ordinary unitless
// number, with no idea it's feeding a `transform`.
export function CursorFollower({ text, targetRef }: CursorFollowerProps) {
  const circleRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const target = targetRef.current;
    const circle = circleRef.current;
    const label = labelRef.current;
    if (!target || !circle || !label) return;

    const quickCircleLeft = gsap.quickTo(circle, "left", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickCircleTop = gsap.quickTo(circle, "top", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickLabelLeft = gsap.quickTo(label, "left", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickLabelTop = gsap.quickTo(label, "top", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickCircleScale = gsap.quickTo(circle, "--cursor-scale", {
      duration: 0.4,
      ease: "power3.out",
    });
    const quickLabelScale = gsap.quickTo(label, "--cursor-scale", {
      duration: 0.4,
      ease: "power3.out",
    });

    // Recomputed on every event (not cached) so it stays correct as the
    // page scrolls — target's rect shifts with it, and this always reads
    // the current position.
    const relativePosition = (e: MouseEvent) => {
      const rect = target.getBoundingClientRect();
      return { left: e.clientX - rect.left, top: e.clientY - rect.top };
    };

    const settleToMaxScale = () => {
      quickCircleScale(MAX_SCALE);
      quickLabelScale(MAX_SCALE);
    };

    let lastMouse: { x: number; y: number; time: number } | null = null;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;

    const handleEnter = (e: MouseEvent) => {
      const pos = relativePosition(e);
      gsap.set(circle, pos);
      gsap.set(label, pos);
      // No prior sample yet to diff against, so no speed to compute —
      // start at rest and let the first mousemove take over from here.
      lastMouse = { x: e.clientX, y: e.clientY, time: performance.now() };
    };
    const handleMove = (e: MouseEvent) => {
      const { left, top } = relativePosition(e);
      quickCircleLeft(left);
      quickCircleTop(top);
      quickLabelLeft(left);
      quickLabelTop(top);

      const now = performance.now();
      if (lastMouse) {
        const dt = now - lastMouse.time;
        if (dt > 0) {
          const speed =
            Math.hypot(e.clientX - lastMouse.x, e.clientY - lastMouse.y) / dt;
          const normalized = Math.min(speed / MAX_SPEED, 1);
          const targetScale = MAX_SCALE - normalized * (MAX_SCALE - MIN_SCALE);
          quickCircleScale(targetScale);
          quickLabelScale(targetScale);
        }
      }
      lastMouse = { x: e.clientX, y: e.clientY, time: now };

      // mousemove alone never tells us the cursor has stopped — only that
      // it moved just now — so a short idle timer, reset on every move,
      // is what eases the scale back up once movement genuinely ends.
      clearTimeout(idleTimer);
      idleTimer = setTimeout(settleToMaxScale, IDLE_MS);
    };
    const handleLeave = () => {
      clearTimeout(idleTimer);
      lastMouse = null;
      settleToMaxScale();
    };

    target.addEventListener("mouseenter", handleEnter);
    target.addEventListener("mousemove", handleMove);
    target.addEventListener("mouseleave", handleLeave);
    return () => {
      clearTimeout(idleTimer);
      target.removeEventListener("mouseenter", handleEnter);
      target.removeEventListener("mousemove", handleMove);
      target.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetRef, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <div
        ref={circleRef}
        style={
          {
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            "--cursor-scale": MAX_SCALE,
            transform: "translate(-50%, -50%) scale(var(--cursor-scale))",
          } as CSSProperties
        }
        className="pointer-events-none absolute rounded-full bg-white opacity-0 mix-blend-difference transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        ref={labelRef}
        style={
          {
            "--cursor-scale": MAX_SCALE,
            transform: "translate(-50%, -50%) scale(var(--cursor-scale))",
          } as CSSProperties
        }
        className="pointer-events-none absolute whitespace-nowrap text-sm font-bold uppercase tracking-wide text-white opacity-0 mix-blend-difference transition-opacity duration-300 group-hover:opacity-100"
      >
        {text}
      </div>
    </>
  );
}
