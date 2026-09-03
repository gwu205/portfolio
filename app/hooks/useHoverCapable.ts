"use client";

import { useMediaQuery } from "./useMediaQuery";

const HOVER_CAPABLE_QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True for real hover pointers. Tailwind's `hover:` compiles to a plain
 * `:hover` here, which sticks after a tap, so callers should fall back to
 * their active state when this is false.
 */
export function useHoverCapable() {
  return useMediaQuery(HOVER_CAPABLE_QUERY, true);
}
