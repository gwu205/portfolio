"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Renders `children` into `<body>` once mounted on the client.
 *
 * Two reasons anything here needs this rather than rendering in place:
 *
 * 1. `position: fixed` resolves against the nearest transformed ancestor,
 *    not the viewport. AnimatedMain leaves a residual `transform` on
 *    `<main>` after its entrance tween, so a fixed descendant inside it
 *    pins to `<main>`'s own box — a fixed bottom bar ends up at the bottom
 *    of the full scroll height instead of the bottom of the screen.
 *    Portaling to `<body>` sidesteps that, and any future transformed
 *    ancestor, rather than relying on nobody ever adding one.
 * 2. Portals need a real DOM node, which doesn't exist during SSR — hence
 *    the mounted flag, which also keeps server and first client render
 *    identical (both null) so hydration doesn't mismatch.
 */
export function BodyPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
