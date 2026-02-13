"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

function useGlitchSwap(
  baseMinMs: number,
  baseMaxMs: number,
  initialOffsetMs: number = 0,
) {
  const [isAlt, setIsAlt] = useState(false);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const scheduleNext = (delay: number) => {
      timeoutId = window.setTimeout(() => {
        setGlitching(true);

        window.setTimeout(() => {
          setIsAlt((prev) => !prev);
          setGlitching(false);

          const nextDelay =
            baseMinMs + Math.random() * Math.max(0, baseMaxMs - baseMinMs);
          scheduleNext(nextDelay);
        }, 500);
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

  return { isAlt, glitching };
}

export const Header = () => {
  const word1 = useGlitchSwap(3500, 6500, 0);
  const word2 = useGlitchSwap(3500, 6500, 2000);

  return (
    <header className="opacity-0 animate-move-in-from-top w-full flex items-center justify-between md:p-7 p-4 absolute top-0 left-0 z-20 text-white uppercase tracking-[0.15rem] font-extralight text-sm">
      <div className="flex items-center gap-8">
        <div className="p-4 flex w-fit">
          <Logo size={32} color="white" />
        </div>
        {/* <Link href="/#work">Work</Link> */}
        {/* <Link href="/about">Philosophy</Link> */}
      </div>
      <div className="font-bold flex gap-2 items-baseline">
        <span className="inline-flex transition-[width] duration-300">
          <span
            key={word1.isAlt ? "designer-en" : "designer-jp"}
            className={
              (word1.glitching ? "glitch-text " : "") +
              "transition-all duration-300 ease-out"
            }
          >
            {word1.isAlt ? "Designer" : "デザイナー"}
          </span>
        </span>

        <span className="opacity-50">Based in</span>

        <span className="inline-flex opacity-50 w-[60px] duration-300">
          <span
            key={word2.isAlt ? "tokyo-jp" : "tokyo-en"}
            className={
              (word2.glitching ? "glitch-text " : "") +
              "transition-all duration-300 ease-out"
            }
          >
            {word2.isAlt ? "東京" : "Tokyo"}
          </span>
        </span>
      </div>
    </header>
  );
};
