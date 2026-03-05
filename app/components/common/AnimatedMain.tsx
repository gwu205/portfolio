// app/components/AnimatedMain.tsx
"use client";

import gsap from "gsap";
import { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
};

export function AnimatedMain({ children }: Props) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "cubic-bezier(0.25, 0.8, 0.25, 1)",
        },
      );
    }
  }, []);

  return (
    <main ref={mainRef} className="relative z-10" style={{ opacity: 0 }}>
      {children}
    </main>
  );
}
