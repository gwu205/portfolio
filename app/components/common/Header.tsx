"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { TransitionLink } from "./TransitionLink";

function useTextSwap(
  baseMinMs: number,
  baseMaxMs: number,
  initialOffsetMs: number = 0,
) {
  const [isAlt, setIsAlt] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const scheduleNext = (delay: number) => {
      timeoutId = window.setTimeout(() => {
        setIsSwapping(true);
        setIsAlt((prev) => !prev);

        window.setTimeout(() => {
          setIsSwapping(false);
        }, 400);

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

  return { isAlt, isSwapping };
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
  const showText1 = !isAlt;
  const showText2 = isAlt;

  return (
    <span className="inline-flex text-swap-container">
      <span className="invisible">{text1}</span>
      <span className="absolute inset-0 flex">
        {text1.split("").map((char, i) => (
          <span
            key={`t1-${i}`}
            className="inline-block will-change-transform"
            style={{
              transform: showText1 ? "translateY(0)" : "translateY(-100%)",
              opacity: showText1 ? 1 : 0,
              transition: `transform 0.4s ease-in-out ${i * 0.03 + delay}s, opacity 0.4s ease-in-out ${i * 0.03 + delay}s`,
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
            className="inline-block will-change-transform"
            style={{
              transform: showText2 ? "translateY(0)" : "translateY(100%)",
              opacity: showText2 ? 1 : 0,
              transition: `transform 0.4s ease-in-out ${i * 0.03 + delay}s, opacity 0.4s ease-in-out ${i * 0.03 + delay}s`,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const word1 = useTextSwap(3500, 6500, 0);
  const word2 = useTextSwap(3500, 6500, 2000);

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  return (
    <header className="opacity-0 animate-move-in-from-top w-full flex items-center justify-between md:p-7 p-4 absolute top-0 left-0 z-20 text-white uppercase tracking-[0.15rem] font-extralight text-sm">
      <div className="flex items-center gap-8">
        <div
          className="p-4 flex w-fit cursor-pointer group relative"
          onClick={handleLogoClick}
        >
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
        </div>
        <TransitionLink href="/" className="relative group overflow-hidden">
          <span className="block top-0 left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
            Work
          </span>
          <span className="block absolute top-[100%] left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
            Work
          </span>
        </TransitionLink>
        <TransitionLink
          href="/about"
          className="relative group overflow-hidden"
        >
          <span className="block top-0 left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
            Philosophy
          </span>
          <span className="block absolute top-[100%] left-0 w-full h-full group-hover:translate-y-[-100%] transition-transform duration-300">
            Philosophy
          </span>
        </TransitionLink>
      </div>
      <div className="hidden sm:flex font-bold gap-2 items-baseline">
        <SwapText
          text1="Designer"
          text2="デザイナー"
          isAlt={word1.isAlt}
          position="end"
        />

        <span className="opacity-50">Based in</span>

        <SwapText
          text1="Tokyo"
          text2="東京"
          isAlt={word2.isAlt}
          position="start"
          delay={0.1}
        />
      </div>
    </header>
  );
};
