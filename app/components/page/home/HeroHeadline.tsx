"use client";

import { usePrefersReducedMotion } from "@/app/hooks/usePrefersReducedMotion";
import { useLocale } from "@/app/i18n/LocaleProvider";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Circular, sized in `em` so it tracks the surrounding text at every
// breakpoint instead of needing its own responsive size steps. The baseline
// nudge uses margin, not transform — the magnetic effect below owns
// `transform` on this element exclusively, so a translate-based nudge here
// would get overwritten the first time GSAP touches it.
const INLINE_MEDIA_CLASS =
  "relative inline-block h-[1em] w-[1em] -mt-[0.05em] align-middle overflow-hidden rounded-full mx-2 md:mx-3";

const REPEL_RADIUS = 100;
const REPEL_STRENGTH = 20;

export function HeroHeadline() {
  const { dict } = useLocale();
  const { before, after } = dict.home.heroIntro;
  const prefersReducedMotion = usePrefersReducedMotion();
  const mediaRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const targets = mediaRefs.current.filter(
      (el): el is HTMLSpanElement => !!el,
    );
    if (targets.length === 0) return;

    // Tracked so the "return to rest" tween only fires once per exit,
    // instead of re-tweening to the same {x:0,y:0} on every mousemove
    // while the cursor is nowhere near either image.
    const repelled = new Set<HTMLSpanElement>();

    const handleMouseMove = (e: MouseEvent) => {
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - e.clientX;
        const dy = centerY - e.clientY;
        const distance = Math.hypot(dx, dy);

        if (distance < REPEL_RADIUS && distance > 0.01) {
          repelled.add(el);
          const strength = (1 - distance / REPEL_RADIUS) * REPEL_STRENGTH;
          gsap.to(el, {
            x: (dx / distance) * strength,
            y: (dy / distance) * strength,
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
          });
        } else if (repelled.has(el)) {
          repelled.delete(el);
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.4)",
            overwrite: "auto",
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf(targets);
    };
  }, [prefersReducedMotion]);

  return (
    <p className="max-w-3xl text-4xl/[1.2] text-balance font-light tracking-tight text-[#BBBBBB] sm:text-5xl/[1.2] md:text-6xl/[1.2]">
      {before}
      <span
        ref={(el) => {
          mediaRefs.current[0] = el;
        }}
        className={INLINE_MEDIA_CLASS}
      >
        <Image
          src="/images/avatar.jpeg"
          alt={dict.footer.avatarAlt}
          fill
          sizes="120px"
          className="object-cover"
        />
      </span>
      {after}
      {/* Placeholder for the looping clip — swap for the real asset (an
          autoplay/muted/loop <video> or an <img src="*.gif">) once it's ready. */}
      <span
        ref={(el) => {
          mediaRefs.current[1] = el;
        }}
        className={INLINE_MEDIA_CLASS}
      >
        <Image
          src="/images/works.gif"
          alt="Works animation"
          fill
          sizes="120px"
          className="object-cover"
        />
      </span>
    </p>
  );
}
