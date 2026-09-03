"use client";

import { useEffect, useState } from "react";

// Tracks whether the page's #contact footer has scrolled into view, so the
// fixed Header (type="minimal") and StickyNav overlays can fade themselves
// out once a visitor reaches it — the footer has its own return-to-top
// control and links, so the persistent floating chrome is redundant there,
// and at max scroll it would otherwise sit directly on top of the
// footer's own content instead of past it. No-ops (stays false) on any
// page without a #contact element, which both callers already are.
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
