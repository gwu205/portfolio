"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Ticker = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const tween = gsap.to(scrollRef.current, {
      x: "-50%",
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollRef} className="flex whitespace-nowrap gap-12 w-fit">
        <span className="text-[#4E3960] text-[20vw] font-semibold tracking-[-0.06em]">
          Geoffrey Wu
        </span>
        <span className="text-[#1B0E26] text-[20vw] font-semibold tracking-[-0.06em]">
          Geoffrey Wu
        </span>
        <span className="text-[#4E3960] text-[20vw] font-semibold tracking-[-0.06em]">
          Geoffrey Wu
        </span>
        <span className="text-[#1B0E26] text-[20vw] font-semibold tracking-[-0.06em]">
          Geoffrey Wu
        </span>
      </div>
    </div>
  );
};
