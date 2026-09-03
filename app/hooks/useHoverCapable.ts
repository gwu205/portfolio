"use client";

import { useMediaQuery } from "./useMediaQuery";

const HOVER_CAPABLE_QUERY = "(hover: hover) and (pointer: fine)";

/**
 * True when the pointer can genuinely hover (mouse/trackpad), false for
 * touch/coarse pointers. Tailwind's `hover:`/`group-hover:` here compile to
 * a plain `:hover` selector (no `future.hoverOnlyWhenSupported` flag set),
 * which can get "stuck on" after a tap on touch devices — callers that
 * gate an interactive-only affordance behind hover should fall back to
 * their active/visible state when this is false, rather than leaving touch
 * visitors unable to reach it at all.
 *
 * Defaults to true (assume hover-capable): this only resolves after mount,
 * and most visitors are on desktop, so this default minimizes the visible
 * flash on first paint for the common case.
 */
export function useHoverCapable() {
  return useMediaQuery(HOVER_CAPABLE_QUERY, true);
}
