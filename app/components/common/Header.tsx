"use client";

import { useFooterVisible } from "@/app/hooks/useFooterVisible";
import { REDUCED_MOTION_QUERY } from "@/app/hooks/usePrefersReducedMotion";
import { useScrollSurfaceColor } from "@/app/hooks/useScrollSurfaceColor";
import { useLocale } from "@/app/i18n/LocaleProvider";
import { localizeHref } from "@/app/i18n/locales";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BodyPortal } from "./BodyPortal";
import { Logo } from "./Logo";
import { useRouteTransition } from "./RouteTransitionProvider";
import { TransitionLink } from "./TransitionLink";

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

    // Reduced motion pins the primary word rather than swapping silently
    // every few seconds with no way to pause it (WCAG 2.2.2).
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

  // Frozen at mount: GSAP owns transform/opacity, so React must not rewrite
  // the end state mid-swap or the characters jump instead of animating.
  const initialShowText1 = !useRef(isAlt).current;

  useEffect(() => {
    if (prevIsAlt.current === isAlt) return;
    prevIsAlt.current = isAlt;

    const showText1 = !isAlt;
    const chars1 = text1Refs.current.slice(0, text1.length).filter(Boolean);
    const chars2 = text2Refs.current.slice(0, text2.length).filter(Boolean);

    // A percentage string, not yPercent: the start value is read from a px
    // matrix, and mixing the two silently no-ops.
    const outgoing = { y: showText1 ? "100%" : "-100%", opacity: 0 };
    const incoming = { y: "0%", opacity: 1 };

    const from1 = showText1 ? incoming : outgoing;
    const from2 = showText1 ? outgoing : incoming;

    tlRef.current?.kill();

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
      {/* Sizes the container to the wider script. */}
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
  useScrollSurfaceColor(headerRef, "top");
  const footerVisible = useFooterVisible();

  const homeHref = localizeHref(locale, "/");
  const tagline = dict.nav.tagline;

  const handleLogoClick = useCallback(() => {
    if (pathname !== homeHref) {
      startTransition(homeHref);
    }
  }, [pathname, homeHref, startTransition]);

  useEffect(() => {
    // Only "default" fades in; the Preloader owns the reveal for "minimal".
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
    // text-[#DAD6DB] is the pre-JS fallback; useScrollSurfaceColor takes over
    // on mount, and currentColor lets the mark track it.
    return (
      <BodyPortal>
        <header
          ref={headerRef}
          className={`w-full flex items-center justify-between md:px-3 px-2 fixed top-0 left-0 z-20 text-[#DAD6DB] uppercase tracking-[0.15rem] font-extralight text-sm transition-opacity duration-500 ${footerVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div
            className="flex w-fit cursor-pointer group relative"
            onClick={handleLogoClick}
          >
            <LogoComponent color="currentColor" />
          </div>
          <div className="flex items-center gap-4 md:gap-6">{taglineBlock}</div>
        </header>
      </BodyPortal>
    );
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
        </div>
        <div className="flex items-center gap-4 md:gap-6">{taglineBlock}</div>
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
