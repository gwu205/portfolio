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

// Each id is the anchor target, the dict.nav label key, and the scrollspy
// section id at once.
const NAV_ITEMS = ["work", "about", "contact"] as const;

export function StickyNav() {
  const { dict } = useLocale();
  const navRef = useRef<HTMLElement>(null);
  useScrollSurfaceColor(navRef, "bottom");
  const footerVisible = useFooterVisible();
  const activeId = useActiveSection(NAV_ITEMS);
  const prefersReducedMotion = usePrefersReducedMotion();

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  // State, not a ref: the portal mounts late, so the effect below needs a
  // re-render once the node actually attaches.
  const [dot, setDot] = useState<HTMLSpanElement | null>(null);
  const hasPositionedRef = useRef(false);

  // Animates `left`, not a transform, which the static centering class owns.
  // First placement after a null (Hero) state is instant; later moves bounce.
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
