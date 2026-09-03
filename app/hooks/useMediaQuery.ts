"use client";

import { useEffect, useState } from "react";

// `initialValue` is used for SSR and until the effect runs after mount.
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
