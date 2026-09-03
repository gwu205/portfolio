"use client";

import { useEffect, useState } from "react";

/**
 * Scrollspy: reports which of `sectionIds` currently sits at the vertical
 * center of the viewport, or null when none of them do.
 *
 * The zero-height IntersectionObserver band (equal negative top/bottom
 * rootMargin collapses the observer's effective viewport to a single
 * horizontal line at 50%) is what distinguishes "which section is centered
 * right now" from "which is merely visible at all" — the latter reports two
 * sections at once whenever adjacent ones both overlap the screen.
 *
 * Null is the answer for anything not in the list — chiefly the Hero, which
 * has no nav item of its own. Tracked as a set of currently-intersecting
 * ids rather than "the last one that fired true", so scrolling back out of
 * the first section clears it instead of leaving a stale answer behind.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Depend on the contents, not the array identity, so a caller passing an
  // inline array doesn't resubscribe the observer on every render.
  const key = sectionIds.join(",");

  useEffect(() => {
    const ids = key.split(",");
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
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
        // practice at most one is centered at once — `ids` order just
        // breaks a tie deterministically if that ever changes.
        setActiveId(ids.find((id) => intersecting.has(id)) ?? null);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
