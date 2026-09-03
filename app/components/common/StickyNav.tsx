"use client";

import { useActiveSection } from "@/app/hooks/useActiveSection";
import { useFooterVisible } from "@/app/hooks/useFooterVisible";
import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import { useScrollSurfaceColor } from "@/app/hooks/useScrollSurfaceColor";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { LocaleSwitcher } from "@/app/i18n/LocaleSwitcher";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { BodyPortal } from "./BodyPortal";

const DOT_SIZE = 10;
const DOT_MOVE_DURATION = 0.6;

// The nav model, in display order. Each id does triple duty — the in-page
// anchor target (`#work`), the `dict.nav` key holding its label, and the
// section id the scrollspy watches — so adding or renaming an item is a
// one-line edit here rather than three edits that fail silently when they
// drift out of sync.
const NAV_ITEMS = ["work", "about", "contact"] as const;

// Fixed to the viewport, so it's visible over every section as the page
// scrolls, not just the hero. Color legibility comes from
// useScrollSurfaceColor (hardcoded per-section colors, scrubbed smoothly
// across each boundary) rather than mix-blend-mode — blend-mode's
// per-channel math only reliably yields a high-contrast result against
// near-black/near-white backdrops, not the saturated section colors here.
export function StickyNav() {
  const { dict } = useLocale();
  const navRef = useRef<HTMLElement>(null);
  useScrollSurfaceColor(navRef, "bottom");
  const footerVisible = useFooterVisible();
  const activeId = useActiveSection(NAV_ITEMS);
  const prefersReducedMotion = usePrefersReducedMotion();

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  // The dot is held in state rather than a ref so the positioning effect
  // below re-runs the moment the node actually attaches. It lives inside a
  // BodyPortal, which renders nothing until it has mounted, so a plain ref
  // would still be null on this component's first effect pass and nothing
  // would ever trigger a second one.
  const [dot, setDot] = useState<HTMLSpanElement | null>(null);
  const hasPositionedRef = useRef(false);

  // Moves the dot under whichever nav link matches the current section
  // (see useActiveSection). `left` (a plain position property, not a
  // transform) is what's animated — same reasoning as CursorFollower's
  // position tracking elsewhere in this codebase: a static Tailwind
  // transform class would otherwise fight GSAP for control of `transform`
  // the moment GSAP wrote to it. The very first placement after arriving
  // from a null (Hero) state is instant (gsap.set — nothing to bounce in
  // from, and it's fading in from opacity-0 anyway); every change after
  // that bounces, unless the visitor prefers reduced motion, in which
  // case it always jumps straight there. activeId === null (still on the
  // Hero, or scrolled back up into it) resets hasPositionedRef instead of
  // touching the dot at all, so the *next* arrival fades in clean rather
  // than bouncing in from wherever it was last left.
  useEffect(() => {
    if (!dot) return;

    if (activeId === null) {
      hasPositionedRef.current = false;
      return;
    }

    const activeLink = linkRefs.current[activeId];
    if (!activeLink) return;

    const reposition = (animate: boolean) => {
      const left =
        activeLink.offsetLeft + activeLink.offsetWidth / 2 - DOT_SIZE / 2;
      if (animate && !prefersReducedMotion) {
        gsap.to(dot, { left, duration: DOT_MOVE_DURATION, ease: "bounce.out" });
      } else {
        gsap.set(dot, { left });
      }
    };

    reposition(hasPositionedRef.current);
    hasPositionedRef.current = true;

    // Link widths/gaps can reflow at different breakpoints; keep the dot
    // honest without animating every resize tick.
    const handleResize = () => reposition(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeId, prefersReducedMotion, dot]);

  return (
    <BodyPortal>
      <nav
        ref={navRef}
        className={`fixed bottom-0 left-0 z-30 flex w-full items-center justify-between p-2 text-sm font-extralight uppercase tracking-[0.15rem] text-[#DAD6DB] transition-opacity duration-500 md:p-3 ${footerVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="relative flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((id) => (
            <a
              key={id}
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
              href={`#${id}`}
              className="transition-opacity duration-300 hover:opacity-70"
            >
              {dict.nav[id]}
            </a>
          ))}
          <span
            ref={setDot}
            style={{ width: DOT_SIZE, height: DOT_SIZE }}
            className={`pointer-events-none absolute top-full mt-1.5 rounded-full bg-[#BFFF00] transition-opacity duration-300 ${activeId ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <LocaleSwitcher />
      </nav>
    </BodyPortal>
  );
}
