"use client";

import { useScrollSurfaceColor } from "@/app/hooks/useScrollSurfaceColor";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { localizeHref } from "@/app/i18n/locales";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "./Logo";
import { useRouteTransition } from "./RouteTransitionProvider";
import { TransitionLink } from "./TransitionLink";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function useTextSwap(
  baseMinMs: number,
  baseMaxMs: number,
  initialOffsetMs: number = 0,
) {
  const [isAlt, setIsAlt] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);
    let timeoutId: number | undefined;

    const randomDelay = () =>
      baseMinMs + Math.random() * Math.max(0, baseMaxMs - baseMinMs);

    const scheduleNext = (delay: number) => {
      timeoutId = window.setTimeout(() => {
        setIsAlt((prev) => !prev);
        scheduleNext(randomDelay());
      }, delay);
    };

    const stop = () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      }
    };

    // Under reduced motion the swap stops entirely and pins to the primary
    // (English) word. Dropping just the animation would still leave text
    // auto-updating every few seconds with no way to pause it (WCAG 2.2.2).
    const apply = () => {
      stop();
      if (media.matches) {
        setIsAlt(false);
      } else {
        scheduleNext(initialOffsetMs + randomDelay());
      }
    };

    apply();
    media.addEventListener("change", apply);

    return () => {
      stop();
      media.removeEventListener("change", apply);
    };
  }, [baseMinMs, baseMaxMs, initialOffsetMs]);

  return { isAlt };
}

interface SwapTextProps {
  text1: string;
  text2: string;
  isAlt: boolean;
  position: "start" | "end";
  delay?: number;
}

const SWAP_DURATION = 0.4;
const SWAP_STAGGER = 0.03;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

const SwapText = ({
  text1,
  text2,
  isAlt,
  position,
  delay = 0,
}: SwapTextProps) => {
  const text1Refs = useRef<(HTMLSpanElement | null)[]>([]);
  const text2Refs = useRef<(HTMLSpanElement | null)[]>([]);
  const prevIsAlt = useRef(isAlt);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Frozen at mount. GSAP owns transform/opacity from here on, so these values
  // must never change across renders — React writing the end state during the
  // swap commit is what made characters jump instead of animate (GSAP then
  // tweened from the destination to itself, a visual no-op).
  const initialShowText1 = !useRef(isAlt).current;

  useEffect(() => {
    if (prevIsAlt.current === isAlt) return;
    prevIsAlt.current = isAlt;

    const showText1 = !isAlt;
    const chars1 = text1Refs.current.slice(0, text1.length).filter(Boolean);
    const chars2 = text2Refs.current.slice(0, text2.length).filter(Boolean);

    // `y` stays a percentage string rather than `yPercent`: the element's start
    // value is read from a computed matrix in px, and a matrix can't tell
    // translateY(-100%) from translateY(-20px). Mixing the two silently no-ops.
    const outgoing = { y: showText1 ? "100%" : "-100%", opacity: 0 };
    const incoming = { y: "0%", opacity: 1 };

    const from1 = showText1 ? incoming : outgoing;
    const from2 = showText1 ? outgoing : incoming;

    // A swap landing mid-flight would otherwise leave two tweens fighting over
    // the same properties.
    tlRef.current?.kill();

    // Only reachable when the setting is switched on mid-swap: snap back to
    // the pinned word rather than animating there.
    if (prefersReducedMotion()) {
      gsap.set(chars1, from1);
      gsap.set(chars2, from2);
      return;
    }

    const tl = gsap.timeline({ delay });
    tlRef.current = tl;

    const tween = {
      duration: SWAP_DURATION,
      ease: "power2.inOut",
      stagger: SWAP_STAGGER,
      overwrite: "auto" as const,
    };
    tl.to(chars1, { ...from1, ...tween }, 0).to(
      chars2,
      { ...from2, ...tween },
      0,
    );
  }, [isAlt, delay, text1.length, text2.length]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    [],
  );

  return (
    <span className="inline-flex text-swap-container">
      {/* Sizer stacks both strings so the container fits the wider script. */}
      <span className="invisible grid">
        <span className="col-start-1 row-start-1">{text1}</span>
        <span className="col-start-1 row-start-1">{text2}</span>
      </span>
      <span className="absolute inset-0 flex">
        {text1.split("").map((char, i) => (
          <span
            key={`t1-${i}`}
            ref={(el) => {
              text1Refs.current[i] = el;
            }}
            className="inline-block"
            style={{
              transform: initialShowText1
                ? "translateY(0)"
                : "translateY(-100%)",
              opacity: initialShowText1 ? 1 : 0,
            }}
          >
            {char}
          </span>
        ))}
      </span>
      <span
        className={`absolute inset-0 flex ${position === "end" ? "justify-end" : "justify-start"}`}
      >
        {text2.split("").map((char, i) => (
          <span
            key={`t2-${i}`}
            ref={(el) => {
              text2Refs.current[i] = el;
            }}
            className="inline-block"
            style={{
              transform: initialShowText1
                ? "translateY(100%)"
                : "translateY(0)",
              opacity: initialShowText1 ? 0 : 1,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

const LogoComponent = ({ color = "white" }: { color?: string }) => {
  return (
    <>
      <Logo
        size={64}
        color={color}
        className="group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"
      />
      <Logo
        size={64}
        color={color}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
      />
    </>
  );
};

interface HeaderProps {
  type?: "default" | "article" | "minimal";
  articleTitle?: string;
}

export const Header = ({ type = "default", articleTitle }: HeaderProps) => {
  const pathname = usePathname();
  const { locale, dict } = useLocale();
  const { startTransition } = useRouteTransition();
  const headerRef = useRef<HTMLElement>(null);
  const word1 = useTextSwap(3500, 6500, 0);
  const word2 = useTextSwap(3500, 6500, 2000);
  // No-ops on pages with no [data-nav-surface] sections (currently just the
  // home page), so safe to call regardless of `type`.
  useScrollSurfaceColor(headerRef, "top");
  // Only the "minimal" variant portals (see below) — declared unconditionally
  // since hooks can't be called conditionally.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const homeHref = localizeHref(locale, "/");
  const aboutHref = localizeHref(locale, "/about");
  const tagline = dict.nav.tagline;

  const handleLogoClick = useCallback(() => {
    if (pathname !== homeHref) {
      startTransition(homeHref);
    }
  }, [pathname, homeHref, startTransition]);

  useEffect(() => {
    // Only the "default" variant fades itself in — "minimal" renders
    // straight away (the Preloader owns the first-load reveal on the
    // pages that use it), and "article" never animated in the first place.
    if (type === "default" && headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 2,
        },
      );
    }
  }, [type]);

  const taglineBlock = (
    <div className="hidden sm:flex font-light gap-2 items-baseline">
      <div
        className={
          tagline.citySlot === "lead"
            ? "cursor-tyo hover:scale-110 transition-all duration-300"
            : undefined
        }
      >
        <SwapText
          text1={tagline.leadSwap[0]}
          text2={tagline.leadSwap[1]}
          isAlt={word1.isAlt}
          position="end"
        />
      </div>

      <span className="opacity-50">{tagline.middle}</span>

      <div
        className={
          tagline.citySlot === "trail"
            ? "cursor-tyo hover:scale-110 transition-all duration-300"
            : undefined
        }
      >
        <SwapText
          text1={tagline.trailSwap[0]}
          text2={tagline.trailSwap[1]}
          isAlt={word2.isAlt}
          position="start"
          delay={0.1}
        />
      </div>
    </div>
  );

  if (type === "minimal") {
    // Fixed + portaled to <body>, same reasoning as StickyNav: <main> picks
    // up a residual transform from AnimatedMain's entrance tween, which
    // makes it the containing block for `position: fixed` descendants
    // instead of the viewport — this would otherwise stay pinned to the top
    // of <main>'s own box rather than the top of the viewport while scrolling.
    // Color legibility is handled by useScrollSurfaceColor above (hardcoded
    // per-section colors, scrubbed smoothly across each boundary) rather
    // than mix-blend-mode — blend-mode's per-channel math only reliably
    // yields a high-contrast result against near-black/near-white
    // backdrops, not the saturated section colors here. text-[#DAD6DB] is
    // just the pre-JS fallback (the home page always opens on the dark
    // hero); the hook takes over as soon as it mounts. LogoComponent gets
    // currentColor instead of its default white so the mark tracks it too.
    const minimalHeader = (
      <header
        ref={headerRef}
        className="w-full flex items-center justify-between md:px-3 px-2 fixed top-0 left-0 z-20 text-[#DAD6DB] uppercase tracking-[0.15rem] font-extralight text-sm"
      >
        <div
          className="flex w-fit cursor-pointer group relative"
          onClick={handleLogoClick}
        >
          <LogoComponent color="currentColor" />
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          {taglineBlock}
        </div>
      </header>
    );

    if (!mounted) return null;
    return createPortal(minimalHeader, document.body);
  }

  if (type !== "article") {
    return (
      <header
        ref={headerRef}
        className="w-full flex items-center justify-between md:p-7 p-4 absolute top-0 left-0 z-20 text-white uppercase tracking-[0.15rem] font-extralight text-sm"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-4 md:gap-8">
          <div
            className="p-2 md:p-4 flex w-fit cursor-pointer group relative"
            onClick={handleLogoClick}
          >
            <LogoComponent />
          </div>
          <TransitionLink
            href={homeHref}
            className="relative group overflow-hidden"
          >
            <span className="block top-0 left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
              {dict.nav.work}
            </span>
            <span className="block absolute top-[100%] left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
              {dict.nav.work}
            </span>
          </TransitionLink>
          <TransitionLink
            href={aboutHref}
            className="relative group overflow-hidden"
          >
            <span className="block top-0 left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
              {dict.nav.philosophy}
            </span>
            <span className="block absolute top-[100%] left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
              {dict.nav.philosophy}
            </span>
          </TransitionLink>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          {taglineBlock}
        </div>
      </header>
    );
  } else {
    return (
      <header className="w-full flex items-center justify-between md:p-7 p-4 absolute top-0 left-0 z-20 text-white uppercase tracking-[0.15rem] font-extralight text-sm">
        <div className="w-full flex items-center gap-8">
          <TransitionLink
            href={homeHref}
            className="flex items-center gap-2 w-1/3"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">{dict.nav.backHome}</span>
          </TransitionLink>
          <div className="w-1/3">
            <div
              className="mx-auto p-4 flex w-fit cursor-pointer group relative"
              onClick={handleLogoClick}
            >
              <LogoComponent />
            </div>
          </div>
          <div className="flex items-center justify-end gap-4 w-1/3">
            <span className="hidden sm:inline-block u-stack-label text-right opacity-70">
              {articleTitle}
            </span>
          </div>
        </div>
      </header>
    );
  }
};
