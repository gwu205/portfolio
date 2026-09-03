"use client";

import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import gsap from "gsap";
import { CSSProperties, RefObject, useEffect, useRef } from "react";

interface CursorFollowerProps {
  text: string;
  targetRef: RefObject<HTMLElement | null>;
}

const CIRCLE_SIZE = 160;
const MAX_SCALE = 1;
const MIN_SCALE = 0.5;
const MAX_SPEED = 2;
const IDLE_MS = 100;

// Both elements must stay unwrapped: any ancestor establishing a stacking
// context (transform, opacity, z-index...) traps their mix-blend-mode.
// GSAP therefore drives left/top and a --cursor-scale custom property
// rather than x/y/scale, which would fight the static centering transform.
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

      // mousemove never reports a stop, so an idle timer detects it.
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
