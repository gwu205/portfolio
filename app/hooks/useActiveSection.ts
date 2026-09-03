"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["work", "about", "contact"];

// Scrollspy for StickyNav's active-section dot. Reports whichever of
// SECTION_IDS currently sits at the exact vertical center of the
// viewport, via a zero-height IntersectionObserver band (equal negative
// top/bottom rootMargin collapses the observer's effective viewport to a
// single horizontal line at 50%) — the standard technique for "which
// section is centered right now," rather than "which is merely visible
// at all," which would report two sections at once whenever adjacent
// ones both partially overlap the screen.
//
// Returns null whenever none of them are centered — chiefly the Hero,
// which sits above #work and has no nav item of its own, so the dot has
// nothing to sit under. Tracked as a set of currently-intersecting ids
// (not just "the last one that fired true") so scrolling back out of
// #work into the Hero correctly clears it again, rather than leaving the
// dot stuck on whatever was last entered.
export function useActiveSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });
        // Sections are non-overlapping and stacked in page order, so in
        // practice at most one is ever centered at once — SECTION_IDS'
        // own order just breaks a tie deterministically if that changes.
        const current = SECTION_IDS.find((id) => intersecting.has(id));
        setActiveId(current ?? null);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeId;
}
