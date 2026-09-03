"use client";

import gsap from "gsap";
import { useLenis } from "lenis/react";
import { RefObject, useCallback, useEffect, useRef } from "react";

const SURFACE_COLORS = {
  dark: "#DAD6DB",
  light: "#312135",
} as const;

type Surface = keyof typeof SURFACE_COLORS;

// Half the scroll distance (px) the color interpolates over as a section
// boundary crosses the element's fixed edge — the full transition zone is
// twice this, centered on the exact boundary crossing.
const HALF_ZONE = 60;

/**
 * Animates `ref`'s `color` between two hardcoded values (SURFACE_COLORS) as
 * the page scrolls past each [data-nav-surface="dark"|"light"] section —
 * not a blend-mode trick, so contrast is guaranteed rather than computed.
 * `edge` says which fixed screen edge `ref` sits on ("top" for a header,
 * "bottom" for a footer-style nav), since that determines which point on
 * the page the element is currently "looking at".
 *
 * Recomputes the color from scratch on every scroll tick (via Lenis, same
 * pattern as ParallaxCircles) rather than handing separate from/to tweens
 * to GSAP per boundary — with more than one boundary, independent tweens
 * all targeting the same `color` property fight each other: each one
 * renders its own "at rest" state the instant it's created, so whichever
 * boundary happens to be created last wins regardless of actual scroll
 * position. Computing one authoritative value per tick avoids that.
 *
 * The color is also applied once on mount, so a consumer is legible before
 * the visitor has scrolled at all — without that, the first correct value
 * only lands on the first scroll tick, and every call site has to hardcode
 * a matching fallback color and know which surface its page opens on.
 */
export function useScrollSurfaceColor(
  ref: RefObject<HTMLElement | null>,
  edge: "top" | "bottom",
) {
  // The section list only changes when the page's markup does, so it's
  // resolved once rather than re-queried inside the scroll callback: this
  // hook has two subscribers on the home page, and runs on every other page
  // too, where the query exists only to discover there is nothing to do.
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
      // Clamped to 0: scrollY can never go negative, so a boundary whose
      // zone would otherwise start before the top of the page (e.g. a
      // bottom-anchored element reading a boundary right at one viewport
      // height, as with a full-height Hero) must not open already
      // half-elapsed on first load — it should still start crisp at `from`.
      const start = Math.max(0, center - HALF_ZONE);
      const end = center + HALF_ZONE;

      if (scrollY < start) break; // Haven't reached this boundary yet.
      if (scrollY > end) {
        color = to; // Fully past it — keep scanning later boundaries.
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
