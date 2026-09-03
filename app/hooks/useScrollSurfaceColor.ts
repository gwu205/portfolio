"use client";

import gsap from "gsap";
import { useLenis } from "lenis/react";
import { RefObject, useCallback, useEffect, useRef } from "react";

const SURFACE_COLORS = {
  dark: "#DAD6DB",
  light: "#312135",
} as const;

type Surface = keyof typeof SURFACE_COLORS;

// Half the scroll distance the colour interpolates over at a boundary.
const HALF_ZONE = 60;

/**
 * Scrubs `ref`'s colour across [data-nav-surface] section boundaries.
 * `edge` is the fixed screen edge `ref` sits on. One value is computed per
 * tick rather than one tween per boundary, which would fight over `color`.
 */
export function useScrollSurfaceColor(
  ref: RefObject<HTMLElement | null>,
  edge: "top" | "bottom",
) {
  // Resolved once, not per tick.
  const sectionsRef = useRef<HTMLElement[]>([]);

  const applyColor = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const sections = sectionsRef.current;
    if (sections.length === 0) return;

    const surfaceOf = (index: number): Surface =>
      (sections[index].dataset.navSurface as Surface | undefined) ?? "dark";

    const scrollY = window.scrollY;
    let color: string = SURFACE_COLORS[surfaceOf(0)];

    for (let i = 0; i < sections.length - 1; i++) {
      const from = SURFACE_COLORS[surfaceOf(i)];
      const to = SURFACE_COLORS[surfaceOf(i + 1)];
      if (from === to) continue;

      const boundaryPageY =
        sections[i + 1].getBoundingClientRect().top + scrollY;
      const center =
        edge === "top" ? boundaryPageY : boundaryPageY - window.innerHeight;
      // Clamped so a boundary above the page top doesn't open half-elapsed.
      const start = Math.max(0, center - HALF_ZONE);
      const end = center + HALF_ZONE;

      if (scrollY < start) break;
      if (scrollY > end) {
        color = to;
        continue;
      }
      color = gsap.utils.interpolate(from, to, (scrollY - start) / (end - start));
      break;
    }

    el.style.color = color;
  }, [ref, edge]);

  useEffect(() => {
    sectionsRef.current = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-surface]"),
    );
    applyColor();
  }, [applyColor]);

  useLenis(applyColor, [applyColor]);
}
