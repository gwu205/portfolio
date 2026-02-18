// app/components/TransitionLink.tsx
"use client";

import Link from "next/link";
import { MouseEvent, ReactNode } from "react";
import { useRouteTransition } from "./RouteTransitionProvider";

type Props = {
  href: string; // <-- force string href
  children: ReactNode;
  className?: string;
};

export function TransitionLink({ href, children, className }: Props) {
  const { startTransition, isTransitioning } = useRouteTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isTransitioning) {
      e.preventDefault();
      return;
    }

    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }

    e.preventDefault();
    startTransition(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
