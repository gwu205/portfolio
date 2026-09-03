"use client";

import { useEffect, useState } from "react";

// Whether the #contact footer is in view, so the fixed Header and StickyNav
// can fade out over it. Stays false on pages without one.
export function useFooterVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("contact");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return visible;
}
