"use client";

import { useScrollSurfaceColor } from "@/app/hooks/useScrollSurfaceColor";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { LocaleSwitcher } from "@/app/i18n/LocaleSwitcher";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Fixed to the viewport, so it's visible over every section as the page
// scrolls, not just the hero. Color legibility comes from
// useScrollSurfaceColor (hardcoded per-section colors, scrubbed smoothly
// across each boundary) rather than mix-blend-mode — blend-mode's
// per-channel math only reliably yields a high-contrast result against
// near-black/near-white backdrops, not the saturated section colors here.
export function StickyNav() {
  const { dict } = useLocale();
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  useScrollSurfaceColor(navRef, "bottom");

  // AnimatedMain leaves a residual `transform` on <main> once its entrance
  // tween finishes, which makes that element the containing block for any
  // `position: fixed` descendant instead of the viewport — this nav would
  // otherwise render pinned to the bottom of <main>'s full scroll height,
  // not the viewport. Portaling to <body> sidesteps that (and any future
  // transformed ancestor) instead of relying on <main> never using one.
  useEffect(() => setMounted(true), []);

  const nav = (
    <nav
      ref={navRef}
      className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-between p-2 text-sm font-extralight uppercase tracking-[0.15rem] text-[#DAD6DB] md:p-3"
    >
      <div className="flex items-center gap-6 md:gap-8">
        <a href="#work" className="transition-opacity duration-300 hover:opacity-70">
          {dict.nav.work}
        </a>
        <a href="#about" className="transition-opacity duration-300 hover:opacity-70">
          {dict.nav.about}
        </a>
        <a href="#contact" className="transition-opacity duration-300 hover:opacity-70">
          {dict.nav.contact}
        </a>
      </div>
      <LocaleSwitcher />
    </nav>
  );

  if (!mounted) return null;
  return createPortal(nav, document.body);
}
