"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Renders `children` into `<body>`. AnimatedMain leaves a transform on
 * `<main>`, which would otherwise capture any `position: fixed` descendant.
 * The mounted flag is for SSR, where there is no DOM node to portal into.
 */
export function BodyPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return createPortal(children, document.body);
}
