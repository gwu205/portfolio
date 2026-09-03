"use client";

import { useEffect, useState } from "react";

/**
 * Subscribes to a CSS media query and re-renders when it changes.
 *
 * `initialValue` is what callers see during SSR and until the effect runs
 * after mount — pick whichever answer causes the least visible correction
 * for the common case, since a wrong guess shows for one frame.
 */
export function useMediaQuery(query: string, initialValue: boolean) {
  const [matches, setMatches] = useState(initialValue);

  useEffect(() => {
    const media = window.matchMedia(query);

    const apply = () => setMatches(media.matches);
    apply();

    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [query]);

  return matches;
}
