"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, ReactNode } from "react";
import { useRouteTransition } from "./RouteTransitionProvider";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TransitionLink({ href, children, className }: Props) {
  const { startTransition, isTransitioning } = useRouteTransition();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isTransitioning) {
      e.preventDefault();
      return;
    }

    if (pathname === href) {
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
