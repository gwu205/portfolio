"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { TransitionLink } from "./TransitionLink";

interface FooterProps {
  year: number;
}

export const Footer = ({ year }: FooterProps) => {
  const pathname = usePathname();

  return (
    <footer className="p-3 w-full">
      <div className="flex flex-col md:flex-row md:justify-between justify-center items-center p-8">
        <p className="text-[#D7C9E3] md:text-[74px] text-3xl tracking-[-0.1rem] font-semibold">
          Let's connect
        </p>
        <div className="flex items-center gap-6 text-white uppercase tracking-[0.15rem] font-extralight text-sm">
          <Link
            href="mailto:geoffrey@wuxdesign.dev"
            className="hover:underline"
          >
            Reach Out
          </Link>
          <TransitionLink
            href={pathname === "/about" ? "/" : "/about"}
            className="hover:underline"
          >
            {pathname === "/about" ? "Work" : "Philosophy"}
          </TransitionLink>
          <div
            className="p-4 flex w-fit cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Logo size={32} color="white" />
          </div>
        </div>
      </div>
      <small className="w-full block text-center text-xs text-slate-700">
        © Copyright Geoffrey Wu {year}
      </small>
    </footer>
  );
};
