"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// Drives Lenis off gsap.ticker so scroll and tweens share one clock.
function LenisGsapSync() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const unsubscribe = lenis.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(onTick);
      unsubscribe();
    };
  }, [lenis]);

  // The route wipe swaps pages underneath the overlay; reset scroll.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, pathname]);

  return null;
}

export function SmoothScroll() {
  return (
    <>
      <ReactLenis root options={{ autoRaf: false, anchors: true }} />
      <LenisGsapSync />
    </>
  );
}
