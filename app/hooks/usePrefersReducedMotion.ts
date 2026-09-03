"use client";

import { useMediaQuery } from "./useMediaQuery";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion() {
  return useMediaQuery(REDUCED_MOTION_QUERY, false);
}
