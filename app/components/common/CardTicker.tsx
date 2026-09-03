"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const REPEAT_COUNT = 12;

// Sensitivity: px of ticker movement per unit of Lenis scroll velocity.
const SCROLL_TO_TICKER_FACTOR = 1.0;

interface CardTickerProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

// Scroll-velocity-driven marquee. Lenis' velocity is already eased, so the
// coast-to-a-stop inertia comes for free.
export const CardTicker = ({
  text,
  reverse = false,
  className = "",
}: CardTickerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  // Wrapping at half the repeated width keeps the loop seamless. Measured
  // here, not per tick, where reading scrollWidth forces a layout flush.
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      halfWidthRef.current = el.scrollWidth / 2;
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useLenis(
    (lenis) => {
      if (lenis.prefersReducedMotion) return;
      const el = scrollRef.current;
      if (!el) return;

      const halfWidth = halfWidthRef.current;
      if (halfWidth === 0) return;

      const direction = reverse ? 1 : -1;
      offsetRef.current += direction * lenis.velocity * SCROLL_TO_TICKER_FACTOR;

      const wrapped = ((offsetRef.current % halfWidth) + halfWidth) % halfWidth;
      el.style.transform = `translateX(${-wrapped}px)`;
    },
    [reverse],
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={scrollRef} className="flex w-fit whitespace-nowrap">
        {Array.from({ length: REPEAT_COUNT }).map((_, i) => (
          <span
            key={i}
            className="px-6 text-[90px] font-normal uppercase tracking-[-0.03em] text-white"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
