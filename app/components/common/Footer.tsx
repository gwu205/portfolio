"use client";

import { useLocale } from "@/app/i18n/LocaleProvider";
import { getCurrentYear } from "@/app/utils/dateHelpers";
import Image from "next/image";
import { Logo } from "./Logo";

interface FooterProps {
  type?: "article" | "default";
}

export const Footer = ({ type = "default" }: FooterProps) => {
  const { dict } = useLocale();
  const year = getCurrentYear();

  if (type !== "article") {
    return (
      <footer
        id="contact"
        data-nav-surface="dark"
        className="content-auto p-3 w-full min-h-screen flex flex-col"
      >
        <div className="flex flex-col justify-center items-center grow p-8 gap-16">
          <div
            className="p-4 flex w-fit cursor-pointer hover:scale-110 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            title={dict.footer.returnToTop}
          >
            <Logo size={32} color="white" />
          </div>
          <p className="text-[#D7C9E3] text-6xl text-center">
            <span dangerouslySetInnerHTML={{ __html: dict.footer.connectHeading }} />
          </p>
          <div className="flex flex-col items-center gap-2 text-[#D7C9E3]">
            <p className="text-sm text-[#D7C9E3]">Find me on:</p>
            <a className="hover:underline" href="https://www.linkedin.com/in/geoffrey-wu/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="hover:underline" href="https://github.com/gwu205" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="hover:underline" href="https://www.framer.com/@wuxdesign/" target="_blank" rel="noopener noreferrer">
              Framer
            </a>
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
