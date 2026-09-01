"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

// Drives Lenis off the app's existing gsap.ticker rather than its own
// requestAnimationFrame loop, so scroll, GSAP tweens, and ScrollTrigger all
// advance on one shared clock instead of racing rAF callbacks.
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

  // The route wipe in RouteTransitionProvider swaps in a new page underneath
  // the overlay; reset scroll so it doesn't land mid-scroll from the last page.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, pathname]);

  return null;
}

export function SmoothScroll() {
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} />
      <LenisGsapSync />
    </>
  );
}
