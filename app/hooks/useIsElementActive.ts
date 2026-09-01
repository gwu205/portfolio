"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * True only while `ref`'s element is on-screen AND the tab is foregrounded.
 * Meant for gating continuously-rendering work (WebGL/canvas) that has no
 * reason to run off-screen or while backgrounded.
 */
export function useIsElementActive<T extends Element>(
  ref: RefObject<T | null>,
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(document.visibilityState === "visible");

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting),
    );
    observer.observe(node);

    const handleVisibilityChange = () =>
      setIsVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [ref]);

  return isIntersecting && isVisible;
}
