"use client";

import { useEffect, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);

    const apply = () => setPrefersReducedMotion(media.matches);
    apply();

    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return prefersReducedMotion;
}
