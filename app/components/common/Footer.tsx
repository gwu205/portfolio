"use client";

import { getCurrentYear } from "@/app/utils/dateHelpers";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { TransitionLink } from "./TransitionLink";

interface FooterProps {
  type?: "article" | "default";
}

export const Footer = ({ type = "default" }: FooterProps) => {
  const pathname = usePathname();
  const year = getCurrentYear();

  if (type !== "article") {
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
  }

  return (
    <footer className="p-3 flex flex-col items-center gap-12 w-full bg-white">
      <div className="w-full max-w-6xl h-px bg-slate-200" />
      <div>
        <Image
          src="/images/avatar.jpeg"
          alt="Geoffrey Wu"
          width={64}
          height={64}
          className="rounded-full mx-auto mb-3"
        />
        <p className="text-sm text-gray-600 max-w-lg text-center text-balance">
          Geoffrey is a product designer, front-end engineer, and creative
          technologist based in{" "}
          <span className="cursor-tyo hover:font-extrabold transition-all duration-300">
            Tokyo
          </span>
          . He's passionate about building beautiful, functional, and accessible
          digital experiences.
        </p>
        <p className="text-sm text-gray-600 max-w-lg text-center mt-2">
          Interested in{" "}
          <a href="mailto:hello@wuxdesign.dev" className="hover:underline">
            working together?
          </a>
        </p>
      </div>
      <div
        className="p-4 flex w-fit cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Logo size={32} color="black" />
      </div>
      <small className="w-full block text-center text-xs text-slate-700">
        © Copyright Geoffrey Wu {year}
      </small>
    </footer>
  );
};
