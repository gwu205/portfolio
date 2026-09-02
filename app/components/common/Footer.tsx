"use client";

import { useLocale } from "@/app/i18n/LocaleProvider";
import { localizeHref } from "@/app/i18n/locales";
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
  const { locale, dict } = useLocale();
  const year = getCurrentYear();

  const aboutHref = localizeHref(locale, "/about");
  const isAboutPage = pathname === aboutHref;
  const crossLinkHref = isAboutPage ? localizeHref(locale, "/") : aboutHref;
  const crossLinkLabel = isAboutPage ? dict.nav.work : dict.nav.philosophy;

  if (type !== "article") {
    return (
      <footer
        id="contact"
        data-nav-surface="dark"
        className="content-auto p-3 w-full"
      >
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center p-8">
          <p className="text-[#D7C9E3] md:text-[74px] text-3xl tracking-[-0.1rem] font-semibold">
            {dict.footer.connectHeading}
          </p>
          <div className="flex items-center gap-6 text-white uppercase tracking-[0.15rem] font-extralight text-sm">
            <Link
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
              className="hover:underline"
            >
              {dict.footer.reachOut}
            </Link>
            <TransitionLink href={crossLinkHref} className="hover:underline">
              {crossLinkLabel}
            </TransitionLink>
            <div
              className="p-4 flex w-fit cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title={dict.footer.returnToTop}
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
      <div className="text-sm max-w-lg text-center text-balance">
        <Image
          src="/images/avatar.jpeg"
          alt={dict.footer.avatarAlt}
          width={64}
          height={64}
          className="rounded-full mx-auto mb-3"
        />
        <p className="text-gray-600 font-bold">
          {dict.footer.articleBioIntro
            .split("{city}")
            .flatMap((segment, index) =>
              index === 0
                ? [segment]
                : [
                    <span
                      key={index}
                      className="cursor-tyo hover:text-red-600 transition-all duration-300"
                    >
                      {dict.footer.cityName}
                    </span>,
                    segment,
                  ],
            )}
        </p>
        <p className="text-gray-600 mt-3">{dict.footer.articleBioBody}</p>
        <p className="text-gray-600 mt-3">
          {dict.footer.articleBioCtaPrefix}{" "}
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
            className="hover:underline"
          >
            {dict.footer.articleBioCtaLink}
          </a>
        </p>
      </div>
      <div
        className="p-4 flex w-fit cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title={dict.footer.returnToTop}
      >
        <Logo size={32} color="black" />
      </div>
      <small className="w-full block text-center text-xs text-slate-700">
        © Copyright Geoffrey Wu {year}
      </small>
    </footer>
  );
};
