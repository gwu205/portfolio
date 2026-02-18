// app/components/AnimatedMain.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AnimatedMain({ children }: Props) {
  return (
    <motion.main
      initial={false} // no animation on first SSR load
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
      className="relative z-10"
    >
      {children}
    </motion.main>
  );
}
