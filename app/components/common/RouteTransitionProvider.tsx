// app/components/RouteTransitionProvider.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  const [transitionState, setTransitionState] = useState({
    isActive: false,
    canExit: false,
  });
  const pendingHref = useRef<string | null>(null);
  const hasNavigated = useRef(false);
  const previousPathname = useRef(pathname);

  const duration = 0.6;
  const easing: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

  // Listen for pathname changes to detect when navigation completes
  useEffect(() => {
    if (
      transitionState.isActive &&
      hasNavigated.current &&
      pathname !== previousPathname.current
    ) {
      // Page has loaded, set canExit AND make inactive in one atomic update
      // This ensures the exit animation plays with canExit = true
      setTransitionState({ isActive: false, canExit: true });
      previousPathname.current = pathname;
    }
  }, [pathname, transitionState.isActive]);

  const startTransition = useCallback(
    (href: string) => {
      if (transitionState.isActive) return;
      pendingHref.current = href;
      hasNavigated.current = false;
      setTransitionState({ isActive: true, canExit: false });
    },
    [transitionState.isActive],
  );

  return (
    <TransitionContext.Provider
      value={{ startTransition, isTransitioning: transitionState.isActive }}
    >
      <div className="relative bg-black">
        {children}

        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            // Reset canExit after exit animation completes
            setTransitionState({ isActive: false, canExit: false });
            pendingHref.current = null;
            hasNavigated.current = false;
          }}
        >
          {transitionState.isActive && (
            <motion.div
              key="wipe"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration, ease: easing }}
              className="pointer-events-none fixed inset-0 z-50 bg-black"
              onAnimationComplete={() => {
                if (!hasNavigated.current && pendingHref.current) {
                  hasNavigated.current = true;
                  router.push(pendingHref.current);
                }
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </TransitionContext.Provider>
  );
}
