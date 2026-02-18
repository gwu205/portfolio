// app/components/RouteTransitionProvider.tsx
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingHref = useRef<string | null>(null);
  const hasNavigated = useRef(false);

  const duration = 0.6;
  const easing: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

  const startTransition = useCallback(
    (href: string) => {
      if (isTransitioning) return;
      pendingHref.current = href;
      hasNavigated.current = false;
      setIsTransitioning(true);
    },
    [isTransitioning],
  );

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      <div className="relative bg-black text-white">
        {children}

        <AnimatePresence>
          {isTransitioning && (
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
                  setTimeout(() => {
                    setIsTransitioning(false);
                    pendingHref.current = null;
                  }, duration * 1000);
                }
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </TransitionContext.Provider>
  );
}
