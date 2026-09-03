"use client";

import { useMediaQuery } from "./useMediaQuery";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * True when the visitor has asked for reduced motion. Defaults to false so
 * the common case animates without waiting a frame for the query to resolve.
 */
export function usePrefersReducedMotion() {
  return useMediaQuery(REDUCED_MOTION_QUERY, false);
}
