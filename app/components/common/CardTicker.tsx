"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef } from "react";

const REPEAT_COUNT = 12;

// How much horizontal ticker movement (px) results from one unit of Lenis
// scroll velocity — a tunable "sensitivity" for the scroll-linked effect,
// not a physical unit conversion.
const SCROLL_TO_TICKER_FACTOR = 1.0;

interface CardTickerProps {
  text: string;
  reverse?: boolean;
  className?: string;
}

// Per-card marquee anchored near the bottom of a WorkCard, in front of its
// image. Position is driven directly by the page's Y-axis scroll velocity
// (not autoplay, not hover) — accumulated into a running offset on every
// Lenis tick and written straight to the DOM, the same direct-style-write
// pattern ParallaxCircles already uses for its own scroll-linked
// transform, rather than handing it to a GSAP tween. Using Lenis's own
// (already-eased) velocity rather than raw scroll delta is what gives the
// motion its "coasts to a stop" inertia for free: lenis.velocity doesn't
// drop to zero the instant scrolling stops, it decays smoothly as Lenis's
// own eased scroll position settles — so with no extra work, the ticker
// is naturally static at rest and picks up/coasts down with scroll input.
// `reverse` flips which way it runs relative to scroll direction, so
// alternating cards (see WorkCard) visually run opposite ways.
export const CardTicker = ({
  text,
  reverse = false,
  className = "",
}: CardTickerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  // Content is REPEAT_COUNT identical copies laid side by side; wrapping at
  // half that width keeps the loop seamless (shifting by exactly half lands
  // on an identical repeat-phase) regardless of scroll direction or how far
  // the offset has drifted. Measured here rather than inside the scroll
  // callback: reading `scrollWidth` after the previous card wrote its own
  // inline transform forces a synchronous layout, so doing it per tick cost
  // one forced reflow per card per frame for the whole page. A
  // ResizeObserver keeps it current across resizes, font loads, and locale
  // changes — everything that actually moves this number.
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
      // Lenis already tracks the reduced-motion preference, so this doesn't
      // need its own matchMedia subscription (which, at one per card, also
      // meant a re-render per card when it resolved).
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
