"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type TransitionContextType = {
  startTransition: (href: string) => void;
  isTransitioning: boolean;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useRouteTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useRouteTransition must be used within provider");
  }
  return ctx;
}

type ProviderProps = {
  children: ReactNode;
};

export function RouteTransitionProvider({ children }: ProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const hasNavigated = useRef(false);
  const previousPathname = useRef(pathname);
  const wipeRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const duration = 0.6;
  const easing = "cubic-bezier(0.25, 0.8, 0.25, 1)";

  // Listen for pathname changes to detect when navigation completes
  useEffect(() => {
    if (isActive && hasNavigated.current && pathname !== previousPathname.current) {
      previousPathname.current = pathname;
      // Page has loaded — play exit animation
      const wipe = wipeRef.current;
      if (wipe) {
        gsap.to(wipe, {
          y: "-100%",
          duration,
          ease: easing,
          onComplete: () => {
            setIsActive(false);
            pendingHref.current = null;
            hasNavigated.current = false;
            // Reset to off-screen below for next transition
            gsap.set(wipe, { y: "100%" });
          },
        });
      }
    }
  }, [pathname, isActive]);

  const startTransition = useCallback(
    (href: string) => {
      if (isActive) return;
      pendingHref.current = href;
      hasNavigated.current = false;
      setIsActive(true);

      const wipe = wipeRef.current;
      if (wipe) {
        // Enter animation: wipe up from bottom to cover the screen
        gsap.fromTo(
          wipe,
          { y: "100%" },
          {
            y: "0%",
            duration,
            ease: easing,
            onComplete: () => {
              if (!hasNavigated.current && pendingHref.current) {
                hasNavigated.current = true;
                router.push(pendingHref.current);
              }
            },
          },
        );
      }
    },
    [isActive, router],
  );

  return (
    <TransitionContext.Provider
      value={{ startTransition, isTransitioning: isActive }}
    >
      <div className="relative bg-black">
        {children}
        <div
          ref={wipeRef}
          className="pointer-events-none fixed inset-0 z-50 bg-black"
          style={{ transform: "translateY(100%)" }}
        />
      </div>
    </TransitionContext.Provider>
  );
}
