"use client";

import { useEffect, useState } from "react";

/**
 * Reports which of `sectionIds` is centred in the viewport, or null. The
 * negative rootMargin collapses the observer to a line at 50%, so only one
 * section matches at a time.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);
  // Contents, not identity, so an inline array doesn't resubscribe.
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
        setActiveId(ids.find((id) => intersecting.has(id)) ?? null);
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [key]);

  return activeId;
}
