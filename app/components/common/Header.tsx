"use client";

import { useLocale } from "@/app/i18n/LocaleProvider";
import { LocaleSwitcher } from "@/app/i18n/LocaleSwitcher";
import { localizeHref } from "@/app/i18n/locales";
import gsap from "gsap";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
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
    let timeoutId: number | undefined;

    const scheduleNext = (delay: number) => {
      timeoutId = window.setTimeout(() => {
        setIsAlt((prev) => !prev);

        const nextDelay =
          baseMinMs + Math.random() * Math.max(0, baseMaxMs - baseMinMs);
        scheduleNext(nextDelay);
      }, delay);
    };

    const initialDelay =
      initialOffsetMs +
      baseMinMs +
      Math.random() * Math.max(0, baseMaxMs - baseMinMs);

    scheduleNext(initialDelay);

    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
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

  useEffect(() => {
    if (prevIsAlt.current === isAlt) return;
    prevIsAlt.current = isAlt;

    const showText1 = !isAlt;

    // Animate text1 characters
    text1Refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: showText1 ? "0%" : "-100%",
        opacity: showText1 ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
        delay: i * 0.03 + delay,
      });
    });

    // Animate text2 characters
    text2Refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: !showText1 ? "0%" : "100%",
        opacity: !showText1 ? 1 : 0,
        duration: 0.4,
        ease: "power2.inOut",
        delay: i * 0.03 + delay,
      });
    });
  }, [isAlt, delay]);

  const showText1 = !isAlt;

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
            className="inline-block will-change-transform"
            style={{
              transform: showText1 ? "translateY(0)" : "translateY(-100%)",
              opacity: showText1 ? 1 : 0,
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
            className="inline-block will-change-transform"
            style={{
              transform: !showText1 ? "translateY(0)" : "translateY(100%)",
              opacity: !showText1 ? 1 : 0,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

const LogoComponent = () => {
  return (
    <>
      <Logo
        size={32}
        color="white"
        className="group-hover:scale-150 group-hover:opacity-0 transition-all duration-700"
      />
      <Logo
        size={32}
        color="white"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
      />
    </>
  );
};

interface HeaderProps {
  type?: "default" | "article";
  articleTitle?: string;
}

export const Header = ({ type = "default", articleTitle }: HeaderProps) => {
  const pathname = usePathname();
  const { locale, dict } = useLocale();
  const { startTransition } = useRouteTransition();
  const headerRef = useRef<HTMLElement>(null);
  const word1 = useTextSwap(3500, 6500, 0);
  const word2 = useTextSwap(3500, 6500, 2000);

  const homeHref = localizeHref(locale, "/");
  const aboutHref = localizeHref(locale, "/about");
  const tagline = dict.nav.tagline;

  const handleLogoClick = useCallback(() => {
    if (pathname !== homeHref) {
      startTransition(homeHref);
    }
  }, [pathname, homeHref, startTransition]);

  useEffect(() => {
    if (type !== "article" && headerRef.current) {
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

  if (type !== "article") {
    return (
      <header
        ref={headerRef}
        className="w-full flex items-center justify-between md:p-7 p-4 absolute top-0 left-0 z-20 text-white uppercase tracking-[0.15rem] font-extralight text-sm"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-8">
          <div
            className="p-4 flex w-fit cursor-pointer group relative"
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
          <LocaleSwitcher />
        </div>
        <div className="hidden sm:flex font-bold gap-2 items-baseline">
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
      </header>
    );
  } else {
    return (
      <header className="w-full flex items-center justify-between md:p-7 p-4 absolute top-0 left-0 z-20 text-white uppercase tracking-[0.15rem] font-extralight text-sm">
        <div className="w-full flex items-center gap-8">
          <TransitionLink
            href={homeHref}
            className="hidden sm:flex items-center gap-2 w-1/3"
          >
            <ArrowLeft className="w-4 h-4" /> {dict.nav.backHome}
          </TransitionLink>
          <div className="w-full sm:w-1/3">
            <div
              className="mx-auto p-4 flex w-fit cursor-pointer group relative"
              onClick={handleLogoClick}
            >
              <LogoComponent />
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-end gap-4 w-1/3">
            <span className="u-stack-label text-right opacity-70">
              {articleTitle}
            </span>
            <LocaleSwitcher />
          </div>
        </div>
      </header>
    );
  }
};
